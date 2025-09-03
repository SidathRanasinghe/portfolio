export const personalInfo = {
  name: "Sidath Ranasinghe",
  title: "Senior Software Engineer",
  location: "Kegalle, Sri Lanka",
  email: "sidath.ranasinghe.work@gmail.com",
  phone: "(+94) 76 557 2291",
  linkedin: "https://linkedin.com/in/sidath-ranasinghe",
  github: "https://github.com/SidathRanasinghe",
  gitlab: "https://gitlab.com/SidathRanasinghe",
  portfolio: "https://sidathranasinghe.github.io/portfolio",
  tagline:
    "Full-stack Software Engineer with 4+ years of experience in building scalable web applications using Angular, React, and Node.js.",
  bio: "Proven ability to lead projects, implement best practices, and mentor teams to deliver high-performance solutions aligned with business goals.",
  profileImage: "/images/profile/sidath-profile.png",
  resumeUrl: "/docs/Sidath_Ranasinghe_SE.pdf",
  logo: "/images/logo/sidath.io.logo1.png",
};

export const aboutTechs = [
  "React",
  "Angular",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Redux",
  "Tailwind CSS",
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "FocalId Technologies (Pvt.) Ltd.",
    location: "Mirigama, Sri Lanka",
    period: "November 2024 – May 2025",
    type: "Full-time",
    description:
      "Led front-end development initiatives across multiple high-value client projects, establishing architectural standards and mentoring junior team members.",
    achievements: [
      "Architected and implemented reusable data visualization components using D3.js, ReCharts, and the React ecosystem, reducing development time for new dashboards",
      "Established code quality standards across a few projects, reducing reported bugs and improving sprint velocity",
      "Implemented robust state management patterns using Redux and Context API, creating a predictable and maintainable application architecture",
    ],
    technologies: [
      "React",
      "Next.js",
      "D3.js",
      "ReCharts",
      "ECharts",
      "TailwindCSS",
      "Redux",
      "TypeScript",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "FocalId Technologies (Pvt.) Ltd.",
    location: "Mirigama, Sri Lanka",
    period: "June 2024 – October 2024",
    type: "Full-time",
    description:
      "Collaborated with cross-functional teams to deliver responsive, high-performance frontend solutions while contributing to codebase improvements.",
    achievements: [
      "Developed performance-optimized frontend components using modern JavaScript techniques, improving load times on key client applications",
      "Created a custom annotation tool using vanilla JavaScript and jQuery that streamlined internal data labeling processes",
      "Integrated solutions with open-source data platforms, including N8N and DataHub, enhancing data analytics capabilities for enterprise clients",
      "Actively participated in agile ceremonies and translated UI/UX designs into responsive implementations that received client commendation",
    ],
    technologies: [
      "React",
      "Next.js",
      "Context API",
      "TailwindCSS",
      "VIS Network",
      "JavaScript",
      "jQuery",
      "N8N",
      "DataHub",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Simato Solutions (Pvt.) Ltd.",
    location: "Sri Jayawardenepura Kotte, Sri Lanka",
    period: "June 2022 – May 2024",
    type: "Full-time",
    description:
      "Delivered full-stack solutions for client projects with a focus on scalable architecture and innovative features.",
    achievements: [
      "Contributed core functionality to the Appmaker platform, enabling 100+ businesses to create mobile applications with minimal technical knowledge",
      "Implemented real-time chat and media streaming features for the StarsLive platform, supporting 5K+ concurrent users during peak events",
      "Resolved complex performance bottlenecks in Angular applications, improving response times on high-traffic modules",
      "Integrated Genie payment gateway and implemented end-to-end subscription flows for Dialog and Mobitel",
      "Mentored a junior developer on best practices of full-stack development methodologies",
    ],
    technologies: [
      "Angular",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Payment Gateways",
      "WebSockets",
    ],
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "Simato Solutions (Pvt.) Ltd.",
    location: "Sri Jayawardenepura Kotte, Sri Lanka",
    period: "July 2020 – July 2021",
    type: "Internship",
    description:
      "Extended due to exceptional performance. Supported development teams across multiple client projects.",
    achievements: [
      "Developed responsive UI components using AngularJS, Angular(2+), and Angular Material that were incorporated into production applications",
      "Created reusable template components for the Appmaker platform that became standard offerings for new clients",
      "Diagnosed and resolved bugs in existing Appmaker templates, improving stability and reducing support requests",
    ],
    technologies: ["AngularJS", "Angular", "Angular Material", "HTML5", "CSS3"],
  },
];

export const overallExperience = [
  { label: "Years Experience", value: "4+" },
  { label: "Companies", value: "2" },
  { label: "Major Projects", value: "7+" },
  { label: "Users Impacted", value: "5K+" },
];

export const projectCategories = [
  "All",
  "Web Application",
  "AI Platform",
  "Library",
  "Platform",
  "Social Platform",
];

export const projects = [
  {
    id: 1,
    title: "AutoTrust.lk",
    category: "Web Application",
    description:
      "A trust-focused digital platform for Sri Lanka's vehicle market designed to combat fraud and improve transparency in vehicle transactions.",
    longDescription:
      "Built features for verified service records, ownership transfers, and authentic advertisements with role-based dashboards for buyers, sellers, owners, service centers, and operators. Implemented secure workflows for ownership transfer, integrated subscription-based monetization, and supported both LKR & USD payments.",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "React Native",
      "JWT",
      "Google OAuth",
      "Stripe API",
      "Docker",
      "Railway CI/CD",
    ],
    image: "/images/projects/vehicle-marketplace-platform-dashboard.png",
    liveUrl: "https://autotrust-frontend-staging.vercel.app/",
    githubUrl: "#",
    featured: true,
    status: "Ongoing",
  },
  {
    id: 2,
    title: "MateSL",
    category: "AI Platform",
    description:
      "An AI-powered assistant platform designed to provide step-by-step guidance on government services, business processes, and daily procedures for Sri Lankan citizens.",
    longDescription:
      "Built with a microservices-based architecture in a MonoRepo structure, featuring multi-language support (Sinhala, Tamil, English), AI-driven chat, and version-controlled procedure management. Integrated OpenAI/Hugging Face models for intelligent responses, Redis/Elasticsearch for caching and search, and Kubernetes for scalable deployments.",
    technologies: [
      "Next.js",
      "React Native",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
      "Docker",
      "Kubernetes",
      "Terraform",
      "JWT",
      "Google OAuth",
      "OpenAI API",
      "Hugging Face",
    ],
    image:
      "/images/projects/ai-assistant-chat-interface-government-services.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    status: "Ongoing",
  },
  {
    id: 3,
    title: "PlayArena",
    category: "Web Application",
    description:
      "Full-stack event ticketing platform enabling users to discover venues, book tickets with real-time seat selection, and manage events.",
    longDescription:
      "Developed a comprehensive authentication system with role-based access control, integrated payment processing with Stripe/PayPal, and implemented real-time features using Socket.io. Built a responsive frontend with interactive seat mapping and seamless booking flow, complemented by a robust backend API with MongoDB integration.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Redux Toolkit",
      "TailwindCSS",
      "Stripe API",
      "Google Maps API",
      "Open Weather API",
      "JWT",
    ],
    image:
      "/images/projects/event-ticketing-platform-seat-selection-interface.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    status: "Ongoing",
  },
  {
    id: 4,
    title: "Reusable UI Components Library",
    category: "Library",
    description:
      "Comprehensive monorepo containing 20+ production-ready React components with TypeScript and modern design patterns.",
    longDescription:
      "Built an enterprise-grade form system with dynamic validation, interactive data visualization components, and advanced UI elements. Implemented Storybook documentation, custom design system, and workspace architecture for scalable component development.",
    technologies: [
      "React 18",
      "TypeScript",
      "TailwindCSS",
      "Storybook",
      "Monorepo Architecture",
      "Zod Validation",
    ],
    image: "/images/projects/react-component-library-storybook-interface.png",
    liveUrl: "#",
    githubUrl: "https://github.com/SidathRanasinghe/reusable-ui-monorepo",
    featured: false,
    status: "Completed",
  },
];

export const overallProjectsCounts = [
  { label: "Total Projects", value: "6+" },
  { label: "Technologies", value: "25+" },
  { label: "Live Projects", value: "3" },
  { label: "Open Source", value: "1" },
];

export const skills = {
  frontend: [
    { name: "React", level: 95, years: 3 },
    { name: "Angular", level: 90, years: 4 },
    { name: "Next.js", level: 85, years: 2 },
    { name: "TypeScript", level: 90, years: 3 },
    { name: "JavaScript", level: 95, years: 4 },
    { name: "Tailwind CSS", level: 85, years: 2 },
    { name: "HTML5/CSS3", level: 95, years: 4 },
  ],
  backend: [
    { name: "Node.js", level: 90, years: 4 },
    { name: "Express.js", level: 85, years: 3 },
    { name: "RESTful APIs", level: 90, years: 4 },
    { name: "Socket.IO", level: 80, years: 2 },
    { name: "Prisma", level: 75, years: 1 },
  ],
  database: [
    { name: "MongoDB", level: 85, years: 4 },
    { name: "PostgreSQL", level: 80, years: 2 },
    { name: "MySQL", level: 75, years: 2 },
  ],
  tools: [
    { name: "Git", level: 90, years: 4 },
    { name: "Docker", level: 75, years: 2 },
    { name: "VS Code", level: 95, years: 4 },
    { name: "Postman", level: 85, years: 3 },
    { name: "Jira", level: 80, years: 3 },
  ],
};

export const devTools = [
  "VS Code",
  "WebStorm",
  "IntelliJ IDEA",
  "Android Studio",
  "Postman",
  "Jira",
  "GitHub",
  "GitLab",
];

export const education = {
  degree: "B.Sc. (Hons.) in Information Technology",
  university: "University of Moratuwa, Sri Lanka",
  period: "2017 – 2022",
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming (Java)",
    "Web Technologies",
    "Database Management",
    "Artificial Intelligence",
    "Computer Architecture",
  ],
};

export const references = [
  {
    name: "Mr. Prasad Kumara",
    title: "Development Manager",
    company: "FocalId Technologies (Pvt.) Ltd.",
    email: "prasad@focalid.tech",
    phone: "(+94) 71 705 1717",
  },
  {
    name: "Mr. Chamil Thusantha",
    title: "Associate Software Architect",
    company: "Simato Solutions (Pvt.) Ltd.",
    email: "chamil@simatosolutions.com",
    phone: "(+94) 77 207 0947",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Prasad Kumara",
    title: "Development Manager",
    company: "FocalId Technologies (Pvt.) Ltd.",
    image: "/images/testimonials/prasad_kumara.jpg",
    content:
      "Sidath consistently delivered exceptional results as a Senior Software Engineer. His ability to architect reusable components and establish code quality standards significantly improved our development velocity. His mentorship of junior developers and technical leadership made him an invaluable team member.",
    rating: 5,
  },
  {
    id: 2,
    name: "Chamil Thusantha",
    title: "Software Architect",
    company: "Simato Solutions (Pvt.) Ltd.",
    image: "/images/testimonials/chamil_thushantha.jpg",
    content:
      "Working with Sidath over multiple years, I witnessed his growth from intern to a skilled full-stack engineer. His contributions to the Appmaker platform and StarsLive were outstanding. He has excellent problem-solving skills and always delivers high-quality, scalable solutions.",
    rating: 5,
  },
  {
    id: 3,
    name: "Chethana Subasinghe",
    title: "Senior Project Manager | Corporate Trainer | Visiting Lecturer",
    company: "Simato Solutions (Pvt.) Ltd.",
    image: "/images/testimonials/chethana_subasinghe.jpg",
    content:
      "I had the privilege of working with Sidath during his internship at Simato Solutions, where he contributed as a Full Stack Developer. During this time, Sidath played an active role in key projects such as Appmaker and Stars Live, where he demonstrated strong technical knowledge in both front-end and back-end development. His ability to quickly learn, adapt, and deliver quality work within deadlines added great value to the team. Beyond technical expertise, Sidath consistently displayed professionalism, problem-solving skills, and effective collaboration with colleagues.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ishara Weerasinghe",
    title: "Senior Frontend Developer",
    company: "FocalId Technologies (Pvt.) Ltd.",
    image: "/images/testimonials/ishara_weerasinghe.jpg",
    content:
      "I had the pleasure of collaborating with Sidath on several projects. His deep understanding of modern JavaScript frameworks and best practices is impressive. He writes clean, maintainable code and is always willing to share knowledge with the team.",
    rating: 5,
  },
];
