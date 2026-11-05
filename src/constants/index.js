import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";

export const HERO_CONTENT = `Software Engineer at Centralogic, building scalable full-stack applications with React, Next.js, Node.js, and GraphQL. Passionate about clean architecture, performance optimization, and delivering real-world impact.`;

export const ABOUT_TEXT = `I'm a Software Engineer at Centralogic Consultancy, Pune, where I led a squad of 4 engineers to deliver a critical module for Monotype Fonts — shipped on time, with zero critical production defects. I specialize in full-stack development across React, Next.js, Node.js, and GraphQL, with production experience in both PostgreSQL and MongoDB.

Previously at Tech Superior Consulting, I engineered an enterprise-grade operations portal as part of an Agile team, lowering client-reported issues by 30% through REST API integration and critical bug fixes.

I hold a BTech in Computer Science (CGPA 8.3) from Dev Bhoomi Uttarakhand University (2025). I care deeply about code quality, security (SonarQube, Checkmarx), and shipping software that actually makes a difference.`;

export const EXPERIENCES = [
  {
    year: "Sep 2025 – Present",
    role: "Software Engineer",
    company: "Centralogic Consultancy",
    location: "Pune, Maharashtra",
    bullets: [
      "Led a squad of 4 engineers to deliver a critical module for Monotype Fonts — on-time with zero critical production defects.",
      "Architected REST & GraphQL API integrations and enhanced frontend components, resolving performance issues by eliminating redundant API calls and improving backend modularity and page responsiveness.",
      "Built reusable, type-safe UI components in React and TypeScript with Tailwind CSS, backed by unit tests, keeping the module consistent, maintainable, and release-ready.",
      "Strengthened code quality and security through SonarQube & Checkmarx, reaching 85%+ test coverage and cutting vulnerabilities by 40%.",
    ],
    technologies: ["React", "TypeScript", "GraphQL", "REST APIs", "Tailwind CSS", "SonarQube", "Checkmarx", "Unit Testing", "Agile"],
  },
  {
    year: "May 2025 – Aug 2025",
    role: "Software Engineer",
    company: "Tech Superior Consulting",
    location: "Gurugram, Haryana",
    bullets: [
      "Engineered an enterprise-grade operations portal for the steel industry, digitizing end-to-end workflows and eliminating manual processes, collaborating in a 6-member Agile team.",
      "Integrated REST APIs and resolved critical bugs in legacy systems, lowering client-reported issues by 30%.",
      "Refactored legacy codebase and optimized state management, reducing average page load time by 12% and improving overall performance.",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "ShadCN", "Node.js", "REST APIs", "Agile"],
  },
  {
    year: "Jun 2024 – Aug 2024",
    role: "Frontend Developer Intern",
    company: "Koders Corporation",
    location: "On-site • Dehradun",
    bullets: [
      "Developed a video subtitle extraction and embedding tool using Whisper AI and FFmpeg, achieving 90%+ subtitle accuracy and adding 6–7 caption overlay styles/effects for enhanced visual presentation.",
      "Engineered a responsive e-commerce frontend in Next.js with REST API integration, ensuring reliable data rendering.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "REST APIs", "SSR", "Whisper AI", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Mechanic On The Way",
    subtitle: "Real-Time Roadside Assistance",
    github: "https://github.com/sahilsheshank",
    image: project1,
    description:
      "Uber-like roadside assistance platform with a multi-role system (Customer, Mechanic, Admin), live job assignment, dynamic pricing, and real-time location tracking via Socket.io.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Clerk", "Express.js", "ShadCN"],
  },
  {
    title: "Calorie Estimation & Tracking",
    github: "https://github.com/sahilsheshank/Food_Recognition_webApp",
    liveUrl: "https://food-recognition-web-app.vercel.app/",
    image: project4,
    description:
      "Fitness web app with authentication, real-time calorie monitoring with ~92% accuracy, personalized calorie calculations, and a comprehensive food database.",
    technologies: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "Context API"],
  },
  {
    title: "AI Content Generator",
    github: "https://github.com/sahilsheshank/Ai-content-generator",
    liveUrl: "https://ai-content-generator-5.onrender.com",
    image: project2,
    description:
      "Responsive content generation platform powered by the Gemini API — supports code generation, bug fixing, grammar refinement, plagiarism-free rewriting, and YouTube SEO optimization.",
    technologies: ["Next.js", "TypeScript", "Gemini API", "Clerk", "REST APIs", "Node.js"],
  },
  {
    title: "Social Media Platform",
    github: "https://github.com/sahilsheshank/social-media",
    image: project3,
    description:
      "Feature-rich social media platform with user authentication, posting, following, liking and commenting functionality built with a full MERN stack.",
    technologies: ["React.js", "MongoDB", "Express.js", "Node.js", "REST API", "Tailwind CSS"],
  },
  {
    title: "Crypto Currency Tracker",
    github: "https://github.com/sahilsheshank/Crypto_currency_webApp",
    image: project5,
    description:
      "Real-time cryptocurrency tracking website with live API data, Redux Toolkit state management, and Firebase authentication.",
    technologies: ["React.js", "Redux Toolkit", "Firebase", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra, India",
  phoneNo: "+91 7563968215",
  email: "sahil.sheshank@gmail.com",
};
