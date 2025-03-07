import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";

export const HERO_CONTENT = `I am a passionate full-stack developer focused on building scalable and efficient web applications. I thrive on solving complex problems and creating innovative solutions that enhance user experiences and drive business growth.`;

export const ABOUT_TEXT = `I am a final-year BTech Computer Science student with a strong passion for full-stack development and software engineering. I thrive on solving complex problems and building efficient, scalable applications.

My technical expertise includes JavaScript and C++, with hands-on experience in React.js, Node.js, Express.js, and Tailwind CSS for developing dynamic and user-friendly web applications. I am proficient in MongoDB and MySQL for database management and have a solid understanding of data structures, algorithms, and object-oriented programming (OOP).

I also have experience with Git and GitHub for version control, ensuring smooth collaboration in team projects. Beyond technical skills, I excel in problem-solving, adaptability, and teamwork, making me a valuable asset in any development environment.

I am currently seeking full-time opportunities as a Full-Stack Developer or Software Developer, where I can contribute my skills, learn new technologies, and grow in a challenging and innovative setting.`;

export const EXPERIENCES =
{
  year: "June 2024 - August 2024",
  role: "Frontend developer intern",
  company: "Koders Corporation Pvt. Ltd.",
  description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Contributed in building and automated subtitle generation website.
    Worked collaboratively with other teammates to design and develop various effects and overlays using CSS.Tested and integrated RESTful APIs into the frontend of an active E-commerce website and increased the usability and efficiency of the website. Collaborated with stakeholders to define project requirements and timelines.`,
  technologies: ["Javascript", "React.js", "Next.js", "MongoDB", "Redux", "REST Api"],
};



export const PROJECTS = [
  {
    title: "Calorie estimation and tracking app ",
    github: "https://github.com/sahilsheshank/Food_Recognition_webApp",
    image: project4,
    description:
      "Built a user-centric web application enabling seamless registration, authentication, and daily calorie tracking with real-time progress insights. Integrated personalized calorie calculations and a robust food database, allowing users to log and analyze nutritional data effortlessly. ",
    technologies: ["React.js", "Redux", "Tailwind CSS", "Express.js", "Context Api", "Rest Api", "MongoDB"],
  },

  {
    title: "AI Content Generator",
    github: "https://github.com/sahilsheshank/Ai-content-generator",
    image: project2,
    description:
      "Developed a fully responsive and authenticated content generation platform powered by the Gemini API,which includes features like code generation, bug fixing, grammar refinement, blog title suggestions, plagiarism-free text rewriting, code explanation, and optimized YouTube SEO titles. ",
    technologies: ["HTML", "Tailwind CSS", "Next.js", "Clerk"],
  },
  {
    title: "Social Media Networking Platform",
    github: "https://github.com/sahilsheshank/social-media",
    image: project3,
    description:
      "Developed a feature-rich social media platform with user authentication, posting, following,liking and commenting functionality.",
    technologies: ["Tailwind CSS", "React.js", "MongoDB", "Express.js", "RESTful API", "Node.js"],
  },
  {
    title: "Crypto currency tracking website",
    github: "https://github.com/sahilsheshank/Crypto_currency_webApp",
    image: project5,
    description:
      "Developed a real-time cryptocurrency tracking website using ReactJS, Redux Toolkit, AntD, and Tailwind CSS, with data fetching from APIs.Implemented user authentication and authorization with Firebase. ",
    technologies: ["React.js", "Tailwind CSS", "Firebase",],
  },
  {
    title: "E-Commerce Website",
    github: "https://github.com/sahilsheshank/Ecommerce_webApp/tree/main/ecommerce",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing,product filtering, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },

];

export const CONTACT = {
  address: "Suddhowala, Chakrata Road, Dehradun, Uttarakhand",
  phoneNo: "+91 7563968215",
  email: "sahil.sheshank@gmail.com",
};
