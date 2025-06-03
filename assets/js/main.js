/**
 * Bl!p Co. Portfolio JavaScript
 * Handles the dynamic population of content from content.js
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    initNavigation();
    
    // Initialize back to top button
    initBackToTopButton();
    
    // Check if portfolioContent is available from the external script
    if (typeof window.portfolioContent === 'undefined') {
        console.error("Error: content.js not loaded or window.portfolioContent is undefined.");
        // Display a user-friendly message on the page
        document.querySelector('.container').innerHTML += `
            <div class="section error-section">
                <p>Failed to load content. Please check the console for details.</p>
            </div>
        `;
        return; // Stop execution if content is not available
    }
    
    // Initialize scroll effects
    initScrollEffects();

    const content = window.portfolioContent;

    // Populate Contact Section
    const contactSection = document.getElementById('contact-section');
    if (contactSection && content.contact) {
        let contactHTML = '';

        // Email
        if (content.contact.email) {
            contactHTML += `
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="contact-info">
                        <p>Email:</p>
                        <a href="mailto:${content.contact.email}">${content.contact.email}</a>
                    </div>
                </div>
            `;
        }

        // Phone
        if (content.contact.phone) {
            contactHTML += `
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <div class="contact-info">
                        <p>Phone:</p>
                        <p>${content.contact.phone}</p>
                    </div>
                </div>
            `;
        }

        // LinkedIn
        if (content.contact.linkedin) {
            contactHTML += `
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                    <div class="contact-info">
                        <p>LinkedIn:</p>
                        <a href="${content.contact.linkedin.url}" target="_blank" rel="noopener noreferrer">
                            ${content.contact.linkedin.text || 'LinkedIn Profile'}
                        </a>
                    </div>
                </div>
            `;
        }

        // GitHub
        if (content.contact.github) {
            contactHTML += `
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fab fa-github"></i>
                    </div>
                    <div class="contact-info">
                        <p>GitHub:</p>
                        <a href="${content.contact.github.url}" target="_blank" rel="noopener noreferrer">
                            ${content.contact.github.text || 'GitHub Profile'}
                        </a>
                    </div>
                </div>
            `;
        }

        // Medium
        if (content.contact.medium) {
            contactHTML += `
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fab fa-medium-m"></i>
                    </div>
                    <div class="contact-info">
                        <p>Medium:</p>
                        <a href="${content.contact.medium.url}" target="_blank" rel="noopener noreferrer">
                            ${content.contact.medium.text || 'Medium Profile'}
                        </a>
                    </div>
                </div>
            `;
        }

        // Twitter
        if (content.contact.twitter) {
            contactHTML += `
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div class="contact-info">
                        <p>Twitter:</p>
                        <p>${content.contact.twitter}</p>
                    </div>
                </div>
            `;
        }

        // Location
        if (content.contact.location) {
            contactHTML += `
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="contact-info">
                        <p>Location:</p>
                        <p>${content.contact.location}</p>
                    </div>
                </div>
            `;
        }

        // Insert the contact details
        const contactDetailsDiv = contactSection.querySelector('.contact-grid');
        if (contactDetailsDiv) {
            contactDetailsDiv.innerHTML = contactHTML;
        }
    }

    // Populate About Us Section
    const aboutUsSection = document.getElementById('about-section');
    if (aboutUsSection && content.aboutUs) {
        const aboutUsParagraph = aboutUsSection.querySelector('.about-content');
        if (aboutUsParagraph) {
            aboutUsParagraph.textContent = content.aboutUs;
        }
    }

    // Populate Skills Section
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection && content.skills) {
        const skillsGrid = skillsSection.querySelector('.skills-grid');
        
        if (skillsGrid) {
            // Helper function to create skill category HTML
            const createSkillCategoryHTML = (categoryTitle, skills) => {
                if (!skills || !skills.length) return '';
                
                let skillsHTML = `
                    <div class="skill-category">
                        <h3>${categoryTitle}</h3>
                        <ul class="skill-list">
                `;
                
                skills.forEach(skill => {
                    // Extract just the name from the skill object if it exists
                    const skillName = skill.name || skill;
                    skillsHTML += `<li>${skillName}</li>`;
                });
                
                skillsHTML += `
                        </ul>
                    </div>
                `;
                
                return skillsHTML;
            };
            
            // Create HTML for each skill category
            let skillsHTML = '';
            
            if (content.skills.languagesFrameworks) {
                skillsHTML += createSkillCategoryHTML('Languages & Frameworks', content.skills.languagesFrameworks);
            }
            
            if (content.skills.cloudDevOps) {
                skillsHTML += createSkillCategoryHTML('Cloud & DevOps', content.skills.cloudDevOps);
            }
            
            if (content.skills.toolsPlatforms) {
                skillsHTML += createSkillCategoryHTML('Tools & Platforms', content.skills.toolsPlatforms);
            }
            
            if (content.skills.methodologiesConcepts) {
                skillsHTML += createSkillCategoryHTML('Methodologies & Concepts', content.skills.methodologiesConcepts);
            }
            
            if (content.skills.additionalSkills) {
                skillsHTML += createSkillCategoryHTML('Additional Skills', content.skills.additionalSkills);
            }
            
            skillsGrid.innerHTML = skillsHTML;
        }
    }

    // Populate Work Experience Section
    const experienceSection = document.getElementById('experience-section');
    if (experienceSection && content.workExperience) {
        const experienceTimeline = experienceSection.querySelector('.timeline');
        
        if (experienceTimeline && content.workExperience.length) {
            let timelineHTML = '';
            
            content.workExperience.forEach(job => {
                let achievementsHTML = '';
                
                if (job.achievements && job.achievements.length) {
                    achievementsHTML += '<ul class="achievement-list">';
                    job.achievements.forEach(achievement => {
                        achievementsHTML += `<li>${achievement}</li>`;
                    });
                    achievementsHTML += '</ul>';
                }
                
                timelineHTML += `
                    <div class="timeline-item">
                        <div class="timeline-header">
                            <h3>${job.title}</h3>
                            <span class="timeline-date">${job.dates}</span>
                        </div>
                        <p class="timeline-company">${job.company}</p>
                        ${achievementsHTML}
                    </div>
                `;
            });
            
            experienceTimeline.innerHTML = timelineHTML;
        }
    }

    // Populate Projects Section
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection && content.projects) {
        const projectsList = projectsSection.querySelector('.projects-list');
        
        if (projectsList && content.projects.length) {
            let projectsHTML = '';
            
            content.projects.forEach(project => {
                let descriptionHTML = '';
                
                if (project.description && project.description.length) {
                    descriptionHTML += '<ul class="achievement-list">';
                    project.description.forEach(desc => {
                        descriptionHTML += `<li>${desc}</li>`;
                    });
                    descriptionHTML += '</ul>';
                }
                
                projectsHTML += `
                    <div class="project-item">
                        <div class="timeline-header">
                            <h3>${project.name}</h3>
                            ${project.dates ? `<span class="timeline-date">${project.dates}</span>` : ''}
                        </div>
                        ${descriptionHTML}
                    </div>
                `;
            });
            
            projectsList.innerHTML = projectsHTML;
        }
    }

    // Populate Education Section
    const educationSection = document.getElementById('education-section');
    if (educationSection && content.education) {
        const educationContent = educationSection.querySelector('.education-content');
        
        if (educationContent) {
            educationContent.innerHTML = `
                <h3>${content.education.degree}</h3>
                <p>${content.education.university} | ${content.education.dates}</p>
            `;
        }
    }

    // Populate Languages Section
    const languagesSection = document.getElementById('languages-section');
    if (languagesSection && content.languages) {
        const languagesList = languagesSection.querySelector('.languages-list');
        
        if (languagesList && content.languages.length) {
            let languagesHTML = '';
            
            content.languages.forEach(language => {
                languagesHTML += `
                    <li>
                        <strong>${language.name}:</strong> ${language.proficiency}
                    </li>
                `;
            });
            
            languagesList.innerHTML = languagesHTML;
        }
    }
    
    // Populate Testimonials Section
    const testimonialsSection = document.getElementById('testimonials-section');
    if (testimonialsSection && content.testimonials) {
        const testimonialsSlider = testimonialsSection.querySelector('.testimonials-slider');
        const testimonialDots = testimonialsSection.querySelector('.testimonial-dots');
        
        if (testimonialsSlider && testimonialDots && content.testimonials.length) {
            let testimonialsHTML = '';
            let dotsHTML = '';
            
            content.testimonials.forEach((testimonial, index) => {
                testimonialsHTML += `
                    <div class="testimonial-item ${index === 0 ? 'active' : ''}">
                        <p class="testimonial-quote">${testimonial.quote}</p>
                        <p class="testimonial-author">${testimonial.author}</p>
                        <p class="testimonial-position">${testimonial.position}, ${testimonial.company}</p>
                    </div>
                `;
                
                dotsHTML += `<span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`;
            });
            
            testimonialsSlider.innerHTML = testimonialsHTML;
            testimonialDots.innerHTML = dotsHTML;
            
            // Initialize testimonials slider
            initTestimonialsSlider();
        }
    }
});

/**
 * Initialize navigation
 */
function initNavigation() {
    // Handle burger menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('active');
        });
        
        // Close menu when link is clicked
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                burger.classList.remove('active');
            });
        });
    }
    
    // Add scrolling effect to navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
}

/**
 * Initialize back to top button
 */
function initBackToTopButton() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top when button is clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Initialize scroll effects
 */
function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60, // Offset for navbar
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize the testimonials slider
 */
function initTestimonialsSlider() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    let currentIndex = 0;
    let interval;
    
    const showTestimonial = (index) => {
        // Hide all testimonials
        testimonialItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Deactivate all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected testimonial and activate its dot
        testimonialItems[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentIndex = index;
    };
    
    // Add click event to dots for manual navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
            resetInterval();
        });
    });
    
    // Auto-advance testimonials
    const resetInterval = () => {
        clearInterval(interval);
        interval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % testimonialItems.length;
            showTestimonial(nextIndex);
        }, 5000); // Change testimonial every 5 seconds
    };
    
    // Start the automatic slideshow
    resetInterval();
}
