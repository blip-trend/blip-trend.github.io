# Bl!p Co. Futuristic AI-Themed Website

A modern, futuristic portfolio website for Bl!p Co., showcasing AI capabilities, IT services, and software development expertise with a cutting-edge design.

## Project Overview

This portfolio website features a futuristic AI-themed design to present Bl!p Co.'s capabilities and expertise in an engaging, modern manner. The site incorporates advanced visual elements like particle animations, glowing effects, and gradient colors to create a high-tech atmosphere that reflects the company's focus on innovation and AI-driven development.

## Features

- **Futuristic AI Theme**: Modern design with AI-inspired elements, glowing effects, and gradient colors
- **Particle Animations**: Dynamic particle effects in the header for an engaging, high-tech feel
- **Interactive Contact Form**: Fully functional contact form using Formspree for GitHub Pages integration
- **Responsive Design**: Optimized for all device sizes from mobile to large desktop screens
- **Data-Driven Architecture**: Content is stored in a separate JavaScript file for easy updates
- **Modular Structure**: Well-organized code with separate files for HTML, CSS, and JavaScript
- **Advanced Animations**: Scroll-triggered animations, glow effects, and dynamic interactions
- **Optimized for GitHub Pages**: Includes proper configuration for hosting on GitHub Pages
- **SEO Optimized**: Includes robots.txt, sitemap.xml, and Open Graph meta tags
- **Modern UI Components**: Glassmorphism cards, gradient text, and futuristic section designs
- **Custom 404 Page**: Futuristic error page that maintains the theme's consistency
- **Social Media Integration**: Footer with links to various social media platforms
- **Client Testimonials**: Interactive testimonials slider with auto rotation
- **Smooth Scrolling**: Enhanced navigation with smooth scrolling to sections

## Project Structure

```
blip-trend.github.io/
├── index.html              # Main HTML file
├── 404.html                # Custom 404 error page
├── CNAME                   # Custom domain configuration
├── robots.txt              # SEO file for web crawlers
├── sitemap.xml             # Sitemap for search engines
├── content.js              # Content data file
├── assets/
│   ├── css/
│   │   ├── futuristic-ai.css  # Futuristic AI theme styles
│   │   └── styles.css         # Original styles (kept for reference)
│   ├── js/
│   │   ├── main.js            # JavaScript for dynamic content loading
│   │   └── animations.js      # JavaScript for animations and effects
│   └── images/
│       ├── favicon.svg        # Site favicon
│       └── og-image.svg       # Open Graph image for social sharing
├── README.md               # Project documentation
└── PROJECT_STRUCTURE.md    # Detailed project structure and maintenance guide
```

## How to Work with This Project

### Updating Content

The project follows a content-first approach with data stored in the `content.js` file. To update any content on the website:

1. Open `content.js` in your preferred code editor
2. Locate the section you want to update (contact info, skills, work experience, etc.)
3. Modify the existing data or add new entries
4. Save the file and refresh the website to see your changes

For example, to add a new project:

```javascript
// In content.js
projects: [
    // Existing projects...
    {
        name: "New Project Name",
        dates: "MM/YYYY-MM/YYYY",
        description: [
            "Description point 1",
            "Description point 2",
            "Description point 3"
        ]
    }
]
```

### Modifying the Design

The design is controlled by the `styles.css` file in the `assets/css` directory. The stylesheet is organized into logical sections with comments to help you locate specific styles:

1. Open `assets/css/styles.css`
2. Find the section you want to modify (header, sections, contact information, etc.)
3. Update the CSS properties as needed
4. Save the file and refresh the website to see your changes

### Adding New Features

If you want to add new sections or features:

1. Add the new content data to `content.js` in an appropriate format
2. Update the HTML structure in `index.html` to include the new section
3. Add any necessary CSS styles in `assets/css/styles.css`
4. Enhance the JavaScript functionality in `assets/js/main.js` to populate the new section

### Contact Form Setup

The website uses [Formspree](https://formspree.io/) to handle the contact form submissions. To set up your contact form:

1. Create a free account on Formspree (https://formspree.io/)
2. Create a new form and get your form ID
3. Update the form action in `index.html`:
   ```html
   <form id="contactForm" class="form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace `YOUR_FORM_ID` with the ID provided by Formspree
5. Test the form by submitting a message

The form is already set up with JavaScript to handle submissions asynchronously and show feedback to users.

## Development & Deployment

### Prerequisites

- A modern web browser
- A code editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript
- GitHub account (for deploying to GitHub Pages)

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/blip-trend/blip-trend.github.io.git
   ```

2. Open the project in your code editor

3. To preview the site, open `index.html` in your browser or use a local development server

### Deployment

The site is designed to be deployed using GitHub Pages:

1. Push your changes to the GitHub repository
2. Go to repository Settings > Pages
3. Select the branch to deploy from (usually `main`)
4. The site will be automatically built and deployed

## Design Choices

- **Color Palette**: Professional blues and greens with subtle accents
- **Typography**: Inter font family for clean, modern readability
- **Layout**: Section-based design with clear visual hierarchy
- **Icons**: Font Awesome icons for visual cues and improved UX

## Future Enhancements

- Add a dark mode toggle
- Implement animations for section transitions
- Create a contact form
- Add filtering capabilities for projects
- Implement a blog section

## Credits

- Fonts: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- Icons: [Font Awesome](https://fontawesome.com/)
- Form processing: [Formspree](https://formspree.io/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

© 2025 Bl!p Co. All rights reserved.