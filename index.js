const img = $('#home_lubinpappalardo');
const img_circle = $('#header_circle');
let cursor = {x: 0, y: 0};

$(window).on('mousemove', (event) => {
    cursor.x = event.clientX;
    cursor.y = event.clientY;
});

const parallax = (element, parallaxOffset) => {
    const x = (cursor.x - window.innerWidth / 2) /  (window.innerWidth / 2) * parallaxOffset;
    const y = (cursor.y - window.innerHeight / 2) / (window.innerHeight / 2) * parallaxOffset;

    element.css('transform', `translate(${x}%, ${y}%)`);
};

const loop = () => {
    parallax(img, 1);
    parallax(img_circle, 7);
    requestAnimationFrame(loop);
};

loop();

