let container = $('#artwork');

function calculateColumnCount() {
    const windowWidth = $(window).width();
    if (windowWidth < 767) {
        return 2;
    } else if (windowWidth < 2000) {
        return 4;
    } else {
        return 5;
    }
}

function loadImages(db) {

    container.empty();

    const columnCount = calculateColumnCount();

    let currentIndex = 0;
    const batchSize = 20; // Number of images to load at once

    for (let i = 0; i < columnCount; i++) {
        container.append(`<div class="masonry-column" id="column-${i}"></div>`);
    }

    // function getShortestColumn() {
    //     let shortestColumn = 0;
    //     let minHeight = Infinity;
        
    //     for (let i = 0; i < columnCount; i++) {
    //         let columnHeight = $(`#column-${i}`).height();
    //         if (columnHeight < minHeight) {
    //             minHeight = columnHeight;
    //             shortestColumn = i;
    //         }
    //     }
        
    //     return shortestColumn;
    // }

    function loadMoreImages() {
        if (currentIndex >= db.length) {
            $(window).off('scroll', checkScroll);
            return;
        }

        let column_index = 0;
        let endIndex = Math.min(currentIndex + batchSize, db.length);
        for (let i = currentIndex; i < endIndex; i++) {
            let item = db[i];

            let item_path = item.path;
            let pathParts = item_path.split('/');
            let fileName = pathParts.pop();
            let fileNameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
            let newPath = pathParts.join('/') + '/resized/' + fileNameWithoutExt + '_720p.JPG';

            let img = $(`<img onclick="openImage($(this))" src="${newPath}" alt="${item.name}" data-original-path="${item_path}" draggable="false">`);
            $(`#column-${column_index}`).append(img);
            if (column_index >= columnCount - 1) { column_index = 0 } else { column_index += 1 }
        }
        currentIndex = endIndex;
        if (currentIndex >= db.length) {
            $(window).off('scroll', checkScroll);
        }
    }

    function checkScroll() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
            loadMoreImages();
        }
    }

    loadMoreImages(); // Load initial batch
    $(window).on('scroll', checkScroll);
}


function openImage(elem) {
    $('#full_view').remove();
    // get image src and alt
    const src = elem.data('original-path');
    const itemData = database.find(item => item.path === src);

    // create full screen div
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(itemData.date).toLocaleDateString('en-US', options).replace(/(\d+)(?=,)/, (match) => {
        const suffixes = ["th", "st", "nd", "rd"];
        const v = match % 100;
        return match + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    });

    const fullScreen = $(`
        <div id="full_view">
            <div id="full_view_image_container">
                <img id="full_view_image" src="${src}" alt="${itemData.name}" draggable="false">
            </div>
            <div id="full_view_image_info">
                <h3>${itemData.name}</h3>
                <p>${formattedDate}</p>
                <p>${itemData.medium.join(', ')}</p>
            </div>
        </div>
    `);
    $('body').append(fullScreen);

    const fullViewImage = $('#full_view_image');

    // close full screen div when click outside the image
    $('#full_view').click(function(event) {
        if (!$(event.target).is('img') && !$(event.target).is('#full_view_tools')) { // if click is not on the image
            $('#full_view').remove();
        }
    });

    fullViewImage.click(function() {
        if (fullViewImage.hasClass('scaled')) {
            fullViewImage.removeClass('scaled');
            fullViewImage.css({
                transform: 'translate(0px, 0px) scale(1)'
            });
        } else {
            fullViewImage.addClass('scaled');
            fullViewImage.css({
                transform: 'translate(0px, 0px) scale(2)'
            });
        }
    });

    $('#full_view_image_container').mousemove(function(event) {
        if (fullViewImage.hasClass('scaled')) {
            const containerOffset = $(this).offset();
            const containerWidth = $(this).width();
            const containerHeight = $(this).height();
            const mouseX = event.pageX - containerOffset.left;
            const mouseY = event.pageY - containerOffset.top;
            const img = $('#full_view_image');
            const imgWidth = img.width() / 2;
            const imgHeight = img.height() / 2;

            const moveX = ((mouseX / containerWidth) * 2 - 1) * (imgWidth);
            const moveY = ((mouseY / containerHeight) * 2 - 1) * (imgHeight);
            // console.log(moveX, moveY);

            img.css({
                transform: `translate(${moveX * -1}px, ${moveY * -1}px) scale(2)`
            });
        }
    });
}


$(document).ready(function() {
    $('html, body').scrollTop(0);

    if (typeof database !== 'undefined' && Array.isArray(database)) {

        let sorted_db = database.sort((a, b) => new Date(b.date) - new Date(a.date));
        loadImages(sorted_db);

        let categories = []
        let medium_categories = []

        for (let i = 0; i < sorted_db.length; i++) {
            let item = sorted_db[i];
            let tags = item.tags;
            for (let j = 0; j < tags.length; j++) {
                let tag = tags[j];
                if (!categories.includes(tag)) {
                    categories.push(tag);
                    $('#category_filter').append(`<option value="${tag}">${tag} (${database.filter(item => item.tags.includes(tag)).length})</option>`);
                }
            }

            let mediums = item.medium;
            for (let j = 0; j < mediums.length; j++) {
                let medium = mediums[j];
                if (!medium_categories.includes(medium)) {
                    medium_categories.push(medium);
                    $('#medium_filter').append(`<option value="${medium}">${medium} (${database.filter(item => item.medium.includes(medium)).length})</option>`);
                }
            }
        }

        // reload images on window resize
        $(window).resize(function() {
            container.empty();
            loadImages(sorted_db);
        });

        // search bar algorithm
        $('#search_bar').on('input', function() {
            if ($(this).val().length == 0) {
                if (container.children().length < sorted_db.length) {
                    container.empty();
                    loadImages(sorted_db);
                }
                return;
            }

            let searchValue = $(this).val().toLowerCase();
            let searchWords = searchValue.split(' ');

            let filtered_db = sorted_db.filter(item => {
                let itemTags = item.tags.map(tag => tag.toLowerCase());
                let itemNameWords = item.name.toLowerCase().split(' ');
                itemTags = itemTags.concat(itemNameWords);
                return searchWords.some(word => itemTags.includes(word));
            });

            container.empty();
            loadImages(filtered_db);
        });

        // medium filter
        $('#medium_filter').on('change', function() {
            let medium = $(this).val();
            if (medium == 'all') {
                container.empty();
                loadImages(sorted_db);
            } else {
                let filtered_db = sorted_db.filter(item => item.medium.includes(medium));
                container.empty();
                loadImages(filtered_db);
            }
        });

        // category filter
        $('#category_filter').on('change', function() {
            let category = $(this).val();
            if (category == 'all') {
                container.empty();
                loadImages(sorted_db);
            } else {
                let filtered_db = sorted_db.filter(item => item.tags.includes(category));
                container.empty();
                loadImages(filtered_db);
            }
        });

    } else {
        console.error('Database is not defined or is not an array.');
    }
});