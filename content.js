// portfolioContent.js
// This file contains all the structured data for the Bl!p Co. portfolio.
// It is designed to be imported and used by the main HTML file to dynamically
// populate the portfolio sections, making content updates easier.

const portfolioContent = {
    contact: {
        email: "singhmukul96@gmail.com",
        phone: "+91-8595321667, +91-8373928887",
        linkedin: {
            url: "https://linkedin.com/in/mukul-kumar-singh-50356a159",
            text: "linkedin.com/in/mukul-kumar-singh-50356a159"
        },
        github: {
            url: "https://github.com/MukulKrSingh",
            text: "github.com/MukulKrSingh"
        },
        medium: {
            url: "https://medium.com/@singhmukul96",
            text: "medium.com/@singhumukul96"
        },
        twitter: "@Mukul_Singh404",
        location: "Greater Noida, India"
    },
    aboutUs: "Bl!p Co. is a dynamic IT services provider specializing in cutting-edge software development, robust backend solutions, and innovative mobile applications. Our expertise spans across various domains including healthcare, e-commerce, fintech, and social media, leveraging advanced technologies like GoLang, Flutter, Java, and AI-driven development to deliver high-quality, scalable, and efficient solutions. We are committed to exceeding client expectations through meticulous attention to detail, efficient project management, and a focus on measurable results.",
    skills: {
        languagesFrameworks: [
            "Flutter", "GoLang", "Java (Java 8, Java 11, Spring Boot, Hibernate)",
            "Dart", "Firebase", "Gin", "Riverpod, Bloc, GetX", "RESTful APIs, GraphQL"
        ],
        cloudDevOps: [
            "AWS Cloud", "Azure Cloud", "GCP", "Containerization", "Code Magic", "Open Telemetry"
        ],
        toolsPlatforms: [
            "GitHub", "JIRA", "Android", "Openlink Endur"
        ],
        methodologiesConcepts: [
            "Microservices", "AI-driven development", "Real-time data flow", "System architecture design"
        ],
        additionalSkills: [
            "Python Language", "Agora", "Machine Learning, Deep Learning, NLP, Gen-AI",
            "Shell Script", "Javascript Development (JS, HTML, CSS)"
        ]
    },
    workExperience: [
        {
            title: "Lead Software Engineer",
            company: "GoEasyCare",
            dates: "07/2024-06/2025",
            achievements: [
                "Led development of key modules for Canada's leading healthcare workforce management solution, GoEasyCare, focusing on shift scheduling and shift management.",
                "Re-structured the backend to ensure proper standards were followed.",
                "Implemented AI-driven development and tracing for low development time and fast resolutions."
            ]
        },
        {
            title: "Senior Associate Platform",
            company: "Publicis Sapient",
            dates: "February 2023 - Present",
            achievements: [
                "Engaged with Publicis Sapient, Global Markets, supporting ADNOC Trading in Energy Trading and Risk Management (ETRM) using Openlink Endur.",
                "Integrated Openlink Endur with cloud platforms for seamless trade booking and real-time data flow.",
                "Optimized system performance through custom tool development and configuration tuning.",
                "Developed and automated reporting tools to support risk, compliance, and front-office decision-making.",
                "Collaborated across technical and business teams to ensure scalable and resilient ETRM solutions."
            ]
        },
        {
            title: "Senior Software Engineer",
            company: "Bacancy Software LLP",
            dates: "03/2022-07/2024",
            achievements: [
                "Received On-Spot Award for delivering comprehensive Flutter trainings to 3 junior developers, enhancing team productivity by 60%.",
                "Consistently received positive client feedback for delivering high-quality software solutions and exceeding project expectations on multiple projects.",
                "Handled a team of 8 developers, leading to successful and timely goals achievement."
            ]
        },
        {
            title: "Backend Developer",
            company: "Epam Systems",
            dates: "April 2022 - October 2022",
            achievements: [
                "Developed the Cab Management Console using Java 11, Spring Boot, and RESTful APIs for an online cab booking aggregator, contributing to fleet management, real-time tracking, and admin operations.",
                "Focused on building scalable, high-performance services to enhance operational efficiency and user experience."
            ]
        },
        {
            title: "Backend Developer",
            company: "Softenger India Pvt Ltd",
            dates: "December 2021 - April 2022",
            achievements: [
                "Developed multiple modules for an online HR Service Management web application using Java 8, Spring Boot, and RESTful web services, ensuring scalable, secure, and high-performance service integration."
            ]
        },
        {
            title: "Backend Developer",
            company: "Mangalseva",
            dates: "September 2019 - November 2021",
            achievements: [
                "Developed the backend for an e-commerce website selling religious and spiritual items using Java 8, Spring Boot, and RESTful APIs, handling product catalog, user authentication, order processing, and inventory integration."
            ]
        },
        {
            title: "System Engineer",
            company: "Tata Consultancy Services Ltd.",
            dates: "09/2019-03/2022",
            achievements: [
                "Conducted code reviews for 2 associates, identifying and resolving 5 critical issues, and improving code quality by 40%.",
                "Managed client escalations and ensured timely product delivery for multiple projects, resulting in an 80% reduction in post-launch issues.",
                "Led the successful migration of a key project to Flutter, improving performance by 100% and reducing maintenance overhead by 90%."
            ]
        },
        {
            title: "Backend Consultant",
            company: "Mahavira Finlease",
            dates: "August 2017 - July 2019",
            achievements: [
                "Developed core backend components and designed the overall system architecture for an instant loan financial application.",
                "Coordinated with cross-functional teams and third-party service providers for smooth integration and deployment, and provided post-launch support."
            ]
        },
        {
            title: "Developer",
            company: "Lava International Limited",
            dates: "March 2016 - August 2017",
            achievements: [
                "Contributed to the development of a Quality and Support Management tool, extending LAVA website functionality with features like service partner and e-waste collection locator, manual upload/download, and spare part availability tracking."
            ]
        }
    ],
    projects: [
        {
            name: "GEC Kiosk + Mobile",
            dates: "07/2024-06/2025",
            description: [
                "Developed and maintained Flutter-based GoEasyCare Kiosk and Mobile applications for healthcare workforce management.",
                "Developed and maintained the Go backend with GraphQL based API backed by MongoDB.",
                "Responsible for deployment of backend in a containerized manner and effective pipeline for mobile apps."
            ]
        },
        {
            name: "ION Bsense - Battery Management System",
            dates: "03/2022-06/2024",
            description: [
                "Contributed as a Flutter Developer to the ION Bsense Battery Management System."
            ]
        },
        {
            name: "The Stunt",
            dates: "03/2023-05/2024",
            description: [
                "Served as a Flutter Developer for 'The Stunt' application, a social media app built around US sports, responsible for front-end development, API integration, and UI/UX implementation."
            ]
        },
        {
            name: "GIA - Gemmology Institute of America",
            dates: "09/2019-03/2022",
            description: [
                "Contributed to the GIA App, which provides diamond resources, 4Cs interactive tools, expert articles, and videos.",
                "Implemented UI for interactive tools, API integration for report access, and video playback features using Android.",
                "Collaborated with product owners and designers to enhance app functionality and user experience."
            ]
        },
        {
            name: "Pidilite Industries",
            description: [
                "Developed a comprehensive Machine Learning solution with multiple pipelines tailored for on-ground sales and marketing teams, resulting in a 41% reduction in training time and significantly enhancing operational efficiency."
            ]
        },
        {
            name: "Food Pod",
            description: [
                "Developed an application for ordering food online from local restaurants and supporting local businesses."
            ]
        },
        {
            name: "FashionPhile",
            description: [
                "Developed and deployed a machine learning-based pricing engine on AWS, empowering 50% of the procurement team's decisions in determining product prices."
            ]
        },
        {
            name: "Workforce Management",
            description: [
                "Developed a comprehensive workforce management solution."
            ]
        }
    ],
    education: {
        degree: "Bachelor of Technology (BTech) in IT",
        university: "Dr. A.P.J. Abdul Kalam Technical University",
        dates: "2015-2019"
    },
    languages: [
        { name: "English", proficiency: "Full Professional Proficiency" },
        { name: "Hindi", proficiency: "Native or Bilingual Proficiency" },
        { name: "Khmer (Cambodian)", proficiency: "Elementary Proficiency" }
    ]
};

// Export the portfolioContent object
window.portfolioContent = portfolioContent;
