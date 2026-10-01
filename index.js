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
const mobileMenu = $('#mobile_menu'); 

hamburgerMenu.on('click', () => {
    hamburgerMenu.toggleClass('opened');
    mobileMenu.toggleClass('opened');
});

// --------------------------------------------------------

$(window).on('scroll', () => {
    if (window.scrollY > 0) {
        $('#navbar').addClass('scrolled');
    } else {
        $('#navbar').removeClass('scrolled');
    }
});

// --------------------------------------------------------

// let lubinPronunciationHelp = $('#lubin_pronunciation_help');

// const lubinPronunciationHelpLoop = () => {    

//     const smoothness = 0.2; // Adjust this value for desired smoothness
//     const targetX = cursor.x;
//     const targetY = cursor.y;

//     const dx = (targetX - parseFloat(lubinPronunciationHelp.css('left'))) * smoothness;
//     const dy = (targetY - parseFloat(lubinPronunciationHelp.css('top'))) * smoothness;

//     const newX = parseFloat(lubinPronunciationHelp.css('left')) + dx;
//     const newY = parseFloat(lubinPronunciationHelp.css('top')) + dy;

//     lubinPronunciationHelp.css('left', newX);
//     lubinPronunciationHelp.css('top', newY);

//     requestAnimationFrame(lubinPronunciationHelpLoop);
// };

// $('#lubin').on('click', () => {
//     window.open('https://www.pronouncenames.com/pronounce/LUBIN', '_blank');
// });

// lubinPronunciationHelpLoop();