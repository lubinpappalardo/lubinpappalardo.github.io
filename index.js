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

let lubinPronunciationHelp = $('#lubin_pronunciation_help');

const lubinPronunciationHelpLoop = () => {    

    const smoothness = 0.2; // Adjust this value for desired smoothness
    const targetX = cursor.x;
    const targetY = cursor.y;

    const dx = (targetX - parseFloat(lubinPronunciationHelp.css('left'))) * smoothness;
    const dy = (targetY - parseFloat(lubinPronunciationHelp.css('top'))) * smoothness;

    const newX = parseFloat(lubinPronunciationHelp.css('left')) + dx;
    const newY = parseFloat(lubinPronunciationHelp.css('top')) + dy;

    lubinPronunciationHelp.css('left', newX);
    lubinPronunciationHelp.css('top', newY);

    requestAnimationFrame(lubinPronunciationHelpLoop);
};

$('#lubin').on('click', () => {
    window.open('https://www.pronouncenames.com/pronounce/LUBIN', '_blank');
});

lubinPronunciationHelpLoop();