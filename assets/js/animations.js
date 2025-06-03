/**
 * Bl!p Co. Futuristic AI Theme Animations
 * This file contains animations for the Bl!p Co. website
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initAnimations();
    
    // Initialize testimonial slider
    initTestimonialSlider();
    
    // Initialize particle effects
    createParticles();
});

/**
 * Initialize animations for elements entering the viewport
 */
function initAnimations() {
    // Get all sections to animate
    const sections = document.querySelectorAll('.section');
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Add a slight delay to child elements for cascading effect
                const children = entry.target.querySelectorAll('.skill-item, .timeline-item, .project-card, .contact-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animated');
                    }, 100 * index);
                });
                
                // For skill bars, animate them after they're visible
                const skillBars = entry.target.querySelectorAll('.progress-bar-fill');
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    if (width) {
                        bar.style.width = width + '%';
                    }
                });
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add initial animated class to header
    document.querySelector('header').classList.add('animated');
}

/**
 * Initialize the testimonial slider
 */
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.testimonial-dots');
    let currentIndex = 0;
    
    // If no testimonials, exit
    if (!testimonials.length || !dotsContainer) return;
    
    // Clear existing dots
    dotsContainer.innerHTML = '';
    
    // Create dots
    for (let i = 0; i < testimonials.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('testimonial-dot');
        if (i === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            showTestimonial(i);
        });
        
        dotsContainer.appendChild(dot);
    }
    
    // Show first testimonial
    showTestimonial(0);
    
    // Auto rotate testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
    
    function showTestimonial(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
            testimonial.style.opacity = 0;
        });
        
        // Show selected testimonial with fade in effect
        setTimeout(() => {
            testimonials[index].classList.add('active');
            testimonials[index].style.opacity = 1;
        }, 300);
        
        // Update dots
        const dots = document.querySelectorAll('.testimonial-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentIndex = index;
    }
}

/**
 * Create dynamic particles in the header
 */
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;
    
    // Add more particles for a dynamic effect
    for (let i = 0; i < 15; i++) {
        const size = Math.random() * 10 + 3; // Size between 3-13px
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`; // Duration between 10-20s
        
        particlesContainer.appendChild(particle);
    }
}

// Add CSS animations
document.head.insertAdjacentHTML('beforeend', `
<style>
/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes glowing {
    0% { box-shadow: 0 0 5px var(--secondary-color); }
    50% { box-shadow: 0 0 20px var(--secondary-color), 0 0 30px var(--primary-color); }
    100% { box-shadow: 0 0 5px var(--secondary-color); }
}

/* Apply animations to elements */
header {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease, transform 1s ease;
}

header.animated {
    opacity: 1;
    transform: translateY(0);
}

.section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.section.animated {
    opacity: 1;
    transform: translateY(0);
}

.skill-item, .timeline-item, .project-card, .contact-item, .education-item, .language-item {
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.skill-item.animated, .timeline-item.animated, .project-card.animated, .contact-item.animated, .education-item.animated, .language-item.animated {
    opacity: 1;
    transform: translateX(0);
}

.testimonial {
    transition: opacity 0.5s ease;
}

.logo i, .section-heading .icon {
    animation: glowing 3s infinite;
}

.cta-button {
    position: relative;
    overflow: hidden;
}

.cta-button::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(transparent, transparent, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1), transparent);
    transform: rotate(45deg);
    animation: shimmer 3s infinite;
    z-index: -1;
}

@keyframes shimmer {
    0% { transform: translateX(-100%) rotate(45deg); }
    100% { transform: translateX(100%) rotate(45deg); }
}
</style>
`);
