gsap.registerPlugin(ScrollTrigger, TextPlugin);

// --------------------------------------------------------


const numberOfSections = 3;
const sectionHeight = 100 / numberOfSections;


// Home section related animations ------------------------

gsap.to('.scroll_to_left', {
    xPercent: -100,
    opacity: -1,
    stagger: 0.03,
    scrollTrigger: {
        trigger: '#home_section + *',
        start: 'top bottom',
        end: `${sectionHeight}% top`,
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
    yPercent: 540,
    scale: 0.8,
    ease: "none",
    scrollTrigger: {
        trigger: '#home_section + *',
        start: 'top bottom',
        end: `${sectionHeight}% top`,
        scrub: true,
        // markers: true
    }
});

gsap.to('#home_section .home_section_image_wrap', {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
        trigger: '#hobby_section',
        start: `${sectionHeight / 2}% bottom`,
        end: `${sectionHeight / 2}% top`,
        scrub: true,
        // markers: true
    }
});

// Featured work ------------------------------------------

gsap.to('#featured_work div', {
    yPercent: 150,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '#hobby_section',
        start: `${sectionHeight * 0.4}% bottom`,
        end: `${sectionHeight * 0.4}% top`,
        scrub: true,
        // markers: true
    }
});

gsap.to('#featured_work div', {
  xPercent: -500,
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
      trigger: '#hobby_section',
      start: `${sectionHeight * 1}% bottom`,
      end: `${sectionHeight * 1}% top`,
      scrub: true,
      // markers: true
  }
});

// Pin through the whole sections -------------------------

gsap.to('#hobby_section', {
    scrollTrigger: {
        trigger: '#hobby_section',
        start: `${sectionHeight * 0.5}% bottom`,
        end: `bottom bottom`,
        pin: '#hobby_section_main',
        scrub: true,
        // markers: true
    }
});

// --------------------------------------------------------

  gsap.to('#hobby_section .section_title_container', {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: '#hobby_section',
      start: `${sectionHeight * 1}% bottom`,
      end: `${sectionHeight * 2}% top`,
      scrub: true,
      // markers: true,
      onUpdate: (self) => {
        const progress = self.progress;
        let yPercent;
        // console.log(progress)
        
        if (progress < (1/3)) {
          // First third: 0% to -33%
          yPercent = gsap.utils.interpolate(0, -33.33, (progress * 3));

        } else if (progress >= (1/3) && progress < (2/3)) {
          // Second third
          yPercent = -33.33;

        } else if (progress >= (2/3)) {
          // Third third
          yPercent = gsap.utils.interpolate(-33.33, -66.66, (progress - (2/3)) * 3);
        }
        
        gsap.set('#hobby_section .section_title_container', { yPercent });
        gsap.set('#hobby_section .section_subtitle_container', { yPercent });
      }
    }
  });


gsap.to('#desc_photography', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#hobby_section',
        start: `${sectionHeight * 1}% bottom`,
        end: `${sectionHeight * 1}% top`,
        scrub: true,
        // markers: true
    }
});


gsap.to('#desc_design', {
  opacity: 0,
  scrollTrigger: {
    trigger: '#hobby_section',
    start: `${sectionHeight * 1}% bottom`,
    end: `${sectionHeight * 2}% top`,
    scrub: true,
    // markers: true,
    onUpdate: (self) => {
      const progress = self.progress;
      let opacity;
      // console.log(progress)
      
      if (progress < (1/3)) {
        // First third: 0% to -33%
        opacity = gsap.utils.interpolate(0, 1, (progress * 3));

      } else if (progress >= (1/3) && progress < (2/3)) {
        // Second third
        opacity = 1;

      } else if (progress >= (2/3)) {
        // Third third
        opacity = gsap.utils.interpolate(1, 0, (progress - (2/3)) * 3);
      }
      
      gsap.set('#desc_design', { opacity });
    }
  }
});

gsap.to('#desc_art', {
  opacity: 1,
  scrollTrigger: {
      trigger: '#hobby_section',
      start: `${sectionHeight * 2}% bottom`,
      end: `${sectionHeight * 2}% top`,
      scrub: true,
      // markers: true
  }
});