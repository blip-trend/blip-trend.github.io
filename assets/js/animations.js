/**
 * Bl!p Co. Portfolio Animations
 * Adds scroll animations for better user experience
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the animations when page is loaded
    initAnimations();
});

/**
 * Setup intersection observer for scroll animations
 */
function initAnimations() {
    const sections = document.querySelectorAll('.section');
    
    // Create the observer options
    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px' // No margin
    };
    
    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Also animate timeline items separately for staggered effect
    const timelineItems = document.querySelectorAll('.timeline-item');
    const projectItems = document.querySelectorAll('.project-item');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const contactItems = document.querySelectorAll('.contact-item');
    
    // Create special observer for timeline items with a delay
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add delay based on index for staggered effect
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, 100 * index);
                
                // Unobserve after animation is triggered
                itemObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe timeline items
    timelineItems.forEach(item => {
        itemObserver.observe(item);
    });
    
    // Observe project items
    projectItems.forEach(item => {
        itemObserver.observe(item);
    });
    
    // Observe contact items for staggered appearance
    contactItems.forEach(item => {
        itemObserver.observe(item);
    });
}
