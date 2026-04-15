import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";

export const HERO_CONTENT = `Software Engineer at Centralogic, building scalable full-stack applications with React, Next.js, Node.js, and GraphQL. Passionate about clean architecture, performance optimization, and delivering real-world impact.`;

export const ABOUT_TEXT = `I'm a Software Engineer at Centralogic, Pune, where I lead a squad of 4 engineers delivering critical modules for enterprise clients — shipped on time, with zero production defects. I specialize in full-stack development across React, Next.js, Node.js, and GraphQL, with production experience in both PostgreSQL and MongoDB.

Previously at Tech Superior Consulting, I built enterprise-grade frontend modules as part of an Agile team, cutting user-reported issues by 40% through targeted API integration and state management work.

I hold a BTech in Computer Science (CGPA 8.3) from Dev Bhoomi Uttarakhand University (2025). I care deeply about code quality, security (SonarQube, Checkmarx), and shipping software that actually makes a difference.`;

export const EXPERIENCES = [
  {
    year: "Sep 2025 – Present",
    role: "Software Engineer",
    company: "Centralogic",
    location: "Pune, Maharashtra",
    bullets: [
      "Led a squad of 4 engineers to deliver a critical module for Monotype Fonts — on-time with zero critical production defects.",
      "Designed and built 10+ REST & GraphQL APIs, owning backend architecture and integrations, increasing data efficiency by 30%.",
      "Raised code quality through SonarQube & Checkmarx, achieving 85%+ test coverage and cutting vulnerabilities by 40%.",
    ],
    technologies: ["React", "GraphQL", "REST APIs", "SonarQube", "Checkmarx", "Unit Testing"],
  },
  {
    year: "May 2025 – Aug 2025",
    role: "Software Engineer",
    company: "Tech Superior Consulting",
    location: "Gurugram, Haryana",
    bullets: [
      "Collaborated with a 6-member Agile team to build frontend modules for an enterprise-grade steel operations portal.",
      "Integrated REST APIs and resolved critical bugs — achieving a 40% reduction in user-reported issues.",
      "Refactored legacy code and implemented efficient state management, improving rendering and load times.",
    ],
    technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "ShadCN", "Node.js", "REST APIs"],
  },
  {
    year: "Jun 2024 – Aug 2024",
    role: "Frontend Developer Intern",
    company: "Koders Corporation Pvt. Ltd.",
    location: "Remote",
    bullets: [
      "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js.",
      "Contributed to building an automated subtitle generation website and designed various CSS effects and overlays.",
      "Tested and integrated RESTful APIs into an active e-commerce frontend, improving usability and efficiency.",
    ],
    technologies: ["React.js", "Next.js", "JavaScript", "MongoDB", "Redux", "REST APIs"],
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
      "Fitness web app with authentication, daily calorie tracking, real-time progress insights, personalized calorie calculations, and a comprehensive food database.",
    technologies: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "Context API"],
  },
  {
    title: "AI Content Generator",
    github: "https://github.com/sahilsheshank/Ai-content-generator",
    image: project2,
    description:
      "Responsive content generation platform powered by the Gemini API — supports code generation, bug fixing, grammar refinement, plagiarism-free rewriting, and YouTube SEO optimization.",
    technologies: ["Next.js", "Gemini API", "Clerk", "Tailwind CSS", "Node.js"],
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
