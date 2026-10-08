let container = $('#gallery');
let sorted_db;

function calculateColumnCount() {
    const windowWidth = $(container).width();
    if (windowWidth < 500) {
        return 1;
    } else if (windowWidth < 750) {
        return 2;
    } else if (windowWidth < 1200) {
        return 3;
    } else {
        return 4;
    }
}

function loadImages(db) {

    container.empty();

    const columnCount = calculateColumnCount();

    let currentIndex = 0;
    const batchSize = 20; // Number of images to load at once

    for (let i = 0; i < columnCount; i++) {
        container.append(`<div class="column" id="column-${i}"></div>`);
    }

    function getShortestColumn() {
        let shortestColumn = 0;
        let minHeight = Infinity;
        
        for (let i = 0; i < columnCount; i++) {
            let columnHeight = $(`#column-${i}`).height();
            if (columnHeight < minHeight) {
                minHeight = columnHeight;
                shortestColumn = i;
            }
        }
        
        return shortestColumn;
    }

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
            // let newPath = pathParts.join('/') + '/resized/' + fileNameWithoutExt + '_720p.JPG';

            let imgDiv = $(`<div class="img_div" data-original-path="${item_path}" onclick="openImage($(this))"><img src="${item_path}" alt="${item.name}" draggable="false"></div>`);
            $(`#column-${getShortestColumn()}`).append(imgDiv);
            
            // $(`#column-${column_index}`).append(img);
            // if (column_index >= columnCount - 1) { column_index = 0 } else { column_index += 1 }
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
    // const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // const formattedDate = new Date(itemData.date).toLocaleDateString('en-US', options).replace(/(\d+)(?=,)/, (match) => {
    //     const suffixes = ["th", "st", "nd", "rd"];
    //     const v = match % 100;
    //     return match + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    // });

    const fullScreen = $(`
        <div id="full_view">
            <div id="full_view_image_info">
                <div id="close_full_view" class="button">
                    <div class="background"></div>
                    <p>Retour</p>
                </div>
                <h1>${itemData.name}</h1>
                <p class="desc">${itemData.desc}</p>
                <p class="info">${itemData.medium}</p>
                <p class="info">${itemData.dimension}</p>
                <p class="info">${itemData.date}</p>
                <div id="related"></div>
            </div>
            <div id="full_view_image_container">
                <img id="full_view_image" src="${src}" alt="..." draggable="false">
            </div>
        </div>
    `);
    $('body').append(fullScreen);

    itemData.related.forEach(name => {
        const relatedItem = database.find(x => x.name === name);

        if (relatedItem) {
            $(`<img src="${relatedItem.path}" alt="${relatedItem.name}" draggable="false" onclick="openImage($(this))" data-original-path="${relatedItem.path}">`).appendTo('#related');
        }
    });

    const fullViewImage = $('#full_view_image');

    // close full screen 
    $('#close_full_view').click(function(event) {
        $('#full_view').remove();
    });

    // close full screen div when click outside the image
    $('#full_view_image_container').click(function(event) {
        if (!$(event.target).is('img')) { // if click is not on the image
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

function filter(category, elem) {
    $('.active').removeClass('active');
    elem.addClass('active');
    if (category == 'recent') {
        container.empty();
        loadImages(sorted_db);
    } else {
        let filtered_db = sorted_db.filter(item => item.tags.includes(category));
        container.empty();
        loadImages(filtered_db);
    }
};


$(document).ready(function() {
    $('html, body').scrollTop(0);

    if (typeof database !== 'undefined' && Array.isArray(database)) {

        sorted_db = database.sort((a, b) => b.date.localeCompare(a.date));
        loadImages(sorted_db);

        // reload images on window resize
        $(window).resize(function() {
            container.empty();
            loadImages(sorted_db);
        });

    } else {
        console.error('Database is not defined or is not an array.');
    }
});