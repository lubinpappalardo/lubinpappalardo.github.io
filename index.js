let isMobile;
const img = $('#home_lubinpappalardo');
const img_circle = $('#home_circle');
let cursor = {x: 0, y: 0};

$(window).on('mousemove', (event) => {
    cursor.x = event.clientX;
    cursor.y = event.clientY;
});

let img_circle_scale = 1;
let img_circle_target_scale = 1;

const parallax = (element, parallaxOffset, offset, scale) => {
    const x = ((cursor.x / (window.innerWidth * 0.5)) - 1) * parallaxOffset.x;
    const y = ((cursor.y / (window.innerHeight * 0.5)) -1) * parallaxOffset.y;

    element.css('transform', `translate(${x + offset.x}%, ${y + offset.y}%) scale(${scale})`);
};

const loop = () => {    
    img_circle_scale += (img_circle_target_scale - img_circle_scale) * 0.2;

    // Cancel parallax effect if mobile
    let img_parallax_offset = !isMobile ? {x: 1, y: 0.2} : {x: 0, y: 0};
    let img_circle_parallax_offset = !isMobile ? {x: 5, y: 2} : {x: 0, y: 0};

    parallax(img, img_parallax_offset, {x: 0, y: 10}, 1);
    parallax(img_circle, img_circle_parallax_offset, {x: 0, y: -140}, img_circle_scale);

    requestAnimationFrame(loop);
};

loop();

$(window).on('mousedown', () => {
    img_circle_target_scale = 1.1;
});

$(window).on('mouseup', () => {
    img_circle_target_scale = 1;
});

// --------------------------------------------------------

function isMobileFn() {
    isMobile = window.innerWidth <= 768 || navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);
}

$(window).on('resize', isMobileFn);
isMobileFn();

// --------------------------------------------------------

const themeToggle = $('#theme_toggle');

themeToggle.on('click', () => {
    $('body').toggleClass('dark_mode');
    themeToggle.toggleClass('dark_mode');
});

