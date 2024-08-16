let isMobile;
const img = $('#home_section_image');
let cursor = {x: 0, y: 0};

$(window).on('mousemove', (event) => {
    cursor.x = event.clientX;
    cursor.y = event.clientY;
});

const parallax = (element, parallaxOffset, offset, scale) => {
    const x = ((cursor.x / (window.innerWidth * 0.5)) - 1) * parallaxOffset.x;
    const y = ((cursor.y / (window.innerHeight * 0.5)) -1) * parallaxOffset.y;

    element.css('transform', `translate(${x + offset.x}%, ${y + offset.y}%) scale(${scale})`);
};

const loop = () => {    
    // Cancel parallax effect if mobile
    let img_parallax_offset = !isMobile ? {x: 1, y: 0.2} : {x: 0, y: 0};

    parallax(img, img_parallax_offset, {x: 0, y: 0}, 1);

    requestAnimationFrame(loop);
};

loop();

// --------------------------------------------------------

function isMobileFn() {
    isMobile = window.innerWidth <= 768 || navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);
}

$(window).on('resize', isMobileFn);
isMobileFn();

// --------------------------------------------------------

const themeToggle = $('#theme_toggle');

themeToggle.on('click', () => {
    $('body').toggleClass('light_mode');
    themeToggle.toggleClass('light_mode');
});

// --------------------------------------------------------

const hamburgerMenu = $('#hamburger_menu');
const mobileMenu = $('#mobile_menu'); 

hamburgerMenu.on('click', () => {
    hamburgerMenu.toggleClass('opened');
    mobileMenu.toggleClass('opened');
});

// --------------------------------------------------------

const hobbies = $('#hobbies');
let hobbiesHover = false;
let hobbiesCursor = $('#hobbies_cursor');

const cursorHobbiesLoop = () => {    
    // if (!hobbiesHover) {
    //     return;
    // }

    const smoothness = 0.2; // Adjust this value for desired smoothness
    const targetX = cursor.x;
    const targetY = cursor.y;

    const dx = (targetX - parseFloat(hobbiesCursor.css('left'))) * smoothness;
    const dy = (targetY - parseFloat(hobbiesCursor.css('top'))) * smoothness;

    const newX = parseFloat(hobbiesCursor.css('left')) + dx;
    const newY = parseFloat(hobbiesCursor.css('top')) + dy;

    hobbiesCursor.css('left', newX);
    hobbiesCursor.css('top', newY);

    requestAnimationFrame(cursorHobbiesLoop);
};

cursorHobbiesLoop();

// hobbies.on('mouseenter', (event) => {
//     if (isMobile || hobbiesHover) {
//         return;
//     }
//     hobbiesCursor.css('left', cursor.x);
//     hobbiesCursor.css('top', cursor.y);
//     $('#home_section').append(hobbiesCursor);

//     hobbiesHover = true;
//     cursorHobbiesLoop();
// });

// hobbies.on('mouseleave', () => {
//     console.log('leave');
//     hobbiesHover = false;
//     hobbiesCursor.remove();
// });

