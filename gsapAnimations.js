gsap.registerPlugin(ScrollTrigger, TextPlugin);

// --------------------------------------------------------

gsap.to('.scroll_to_left', {
    xPercent: -100,
    opacity: -1,
    stagger: 0.05,
    scrollTrigger: {
        trigger: '#home_section + *',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        // markers: true
    }
});

gsap.to('.hobbies_list p', {
    yPercent: 300,
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

gsap.to('#theme_toggle', {
    xPercent: -100,
    opacity: 0,
    ease: "",
    stagger: -0.1,
    scrollTrigger: {
        trigger: '#home_section + *',
        start: 'top center',
        end: 'top top',
        scrub: true,
        // markers: true
    }
});

gsap.to('#language_toggle', {
    xPercent: 100,
    opacity: 0,
    ease: "",
    stagger: -0.1,
    scrollTrigger: {
        trigger: '#home_section + *',
        start: 'top center',
        end: 'top top',
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
    yPercent: 159,
    scale: 0.8,
    ease: "none",
    scrollTrigger: {
        trigger: '#home_section + *',
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        // markers: true
    }
});

// --------------------------------------------------------

const textEffect = document.querySelector('#navbar .nav_porfolio');

// Add event listeners for mouse enter and leave
textEffect.addEventListener('mouseenter', () => {
    gsap.to(textEffect, {
        duration: 0.8,
        ease: "",
        text: "Lubin Pappalardo",
    });
});

textEffect.addEventListener('mouseleave', () => {
    gsap.to(textEffect, {
        duration: 0.8,
        ease: "",
        text: "Porfolio 2024",
    });
});