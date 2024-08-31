gsap.registerPlugin(ScrollTrigger, TextPlugin);

// --------------------------------------------------------

gsap.to('.scroll_to_left', {
    xPercent: -100,
    opacity: -1,
    stagger: 0.03,
    scrollTrigger: {
        trigger: '#home_section + *',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        // markers: true
    }
});

gsap.to('#home_section .desc', {
    opacity: 0,
    ease: "",
    stagger: -0.1,
    scrollTrigger: {
        trigger: '#home_section + *',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
        // markers: true
    }
});


gsap.to('#home_section .home_section_image_wrap', {
    yPercent: 345,
    scale: 0.8,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
        trigger: '#home_section + *',
        start: 'top bottom',
        end: '60% top',
        scrub: true,
        // markers: true
    }
});

// --------------------------------------------------------

// gsap.to('#photography_main', {
//     yPercent: 100,
//     ease: "none",
//     scrollTrigger: {
//         trigger: '#photography_section',
//         start: 'center bottom',
//         end: 'center top',
//         scrub: true,
//     }
// });

gsap.to('#featured_photography div', {
    yPercent: 150,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '#photography_section',
        start: 'center bottom',
        end: 'center top',
        pin: true,
        scrub: true,
        // markers: true
    }
});

// --------------------------------------------------------