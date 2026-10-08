let isMobile;
let cursor = {x: 0, y: 0};

$(window).on('mousemove', (event) => {
    cursor.x = event.clientX;
    cursor.y = event.clientY;
});

// --------------------------------------------------------

function isMobileFn() {
    isMobile = window.innerWidth <= 768 || navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);
}

$(window).on('resize', isMobileFn);
isMobileFn();


// --------------------------------------------------------

const hamburgerMenu = $('#hamburger_menu');
const mobileMenu = $('#sidebar'); 

hamburgerMenu.on('click', () => {
    hamburgerMenu.toggleClass('opened');
    mobileMenu.toggleClass('opened');
});

// --------------------------------------------------------

// --------------------------------------------------------
