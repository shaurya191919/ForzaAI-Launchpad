// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Define the elements with the "TITLE" class
    const titles = document.querySelectorAll('.TITLE');

    // Use GSAP to stagger the animation on each title element
    gsap.from(titles, {
        
        opacity: 1, // Start with opacity 0
        y: -20, // Move each title 20 pixels up
        duration: 2, // Animation duration
        stagger: 0.4 // Stagger the animations by 0.2 seconds
        
    });
});

gsap.from(".menu", {
        
    opacity: 1, // Start with opacity 0
    y: -20, // Move each title 20 pixels up
    duration: 2, // Animation duration
    stagger: 0.4 // Stagger the animations by 0.2 seconds
    
});


gsap.from("#ai", {
    x: "-100%", // Start from outside the left side of the viewport
    duration: 2, // Animation duration
    delay: 0.5, // Delay before animation starts
    ease: "power4.out" // Easing function
  });

  gsap.from(".gne", {
    x: "-100%", // Start from outside the left side of the viewport
    duration: 2, // Animation duration
    delay: 0.5, // Delay before animation starts
    ease: "power4.out" // Easing function
  });

  gsap.to("#dot", { opacity: 0, duration: 1.3, yoyo: true, repeat: -1 });


