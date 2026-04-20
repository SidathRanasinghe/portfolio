export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Sidath Ranasinghe",
  title: "Senior Software Engineer",
  location: "Kegalle, Sri Lanka",
  email: "sidath.ranasinghe.work@gmail.com",
  phone: "(+94) 76 557 2291",
  linkedin: "https://linkedin.com/in/sidath-ranasinghe",
  github: "https://github.com/SidathRanasinghe",
  gitlab: "https://gitlab.com/SidathRanasinghe",
  portfolio: "https://sidath.ryzeniclabs.com",
  tagline:
    "Full-stack Software Engineer with 5+ years of experience building production-grade web systems end-to-end — from microservices architecture (NestJS, Next.js, Prisma) through CI/CD and live server operations.",
  bio: "Recent work includes a 14-repository microservices real-estate platform and a multi-tenant AWS-hosted e-commerce system. Proven ability to lead projects, implement best practices, and mentor teams. Open to international relocation and on-site engagements.",
  profileImage: "/images/profile/sidath-profile.png",
  resumeUrl: "/docs/Sidath_Ranasinghe_CV.pdf",
  logo: "/images/logo/sidath.io.logo1.png",
};

export const aboutTechs = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Prisma",
  "Docker",
  "AWS",
];

export const workExperience = [
  {
    id: 1,
    title: "Co-Founder & Technical Lead",
    company: "Ryzenic Labs",
    location: "Remote / Sri Lanka",
    period: "2025 – Present",
    type: "Startup",
    description:
      "Co-founded Ryzenic Labs with two partners — a software-services studio delivering custom web applications, cloud infrastructure, and performance-tuned systems for regional clients.",
    achievements: [
      "Set technical direction across custom web application development, database design, and cloud deployment practices",
      "Led engineering on client engagements spanning e-commerce, marketing, and multi-portal platforms",
      "Shared product leadership and roadmap decisions with founding partners, balancing delivery with long-term platform quality",
    ],
    technologies: [
      "Next.js",
      "NestJS",
      "Node.js",
      "TypeScript",
      "AWS",
      "MongoDB",
      "MySQL",
      "Docker",
    ],
  },
  {
    id: 2,
    title: "Senior Software Engineer (Freelance)",
    company: "Independent — Sri Lanka",
    location: "Sri Lanka",
    period: "June 2025 – Present",
    type: "Freelance",
    description:
      "Designed and delivered production-grade full-stack systems for clients across real-estate, e-commerce, and construction domains; retained under maintenance agreements.",
    achievements: [
      "PurpleRoof: Architected a 14-repo microservices real-estate platform (NestJS + Next.js + Prisma/MySQL) with a PKCE-based SSO gateway, pure RBAC with audit logging, and GitHub Actions CI/CD to a CentOS production server — live since March 2026",
      "SA Gems: Built a dual-brand gemstone e-commerce platform (Ceylon + Toronto) on Express.js + MongoDB, deployed via Docker on AWS EC2 with S3, CloudFront, SES, and Secrets Manager",
      "SA Construction: Delivered a premium marketing site on Next.js 16 + Tailwind v4 with scroll-triggered animations and SEO-optimized metadata",
      "Maintain all three production systems under ongoing maintenance agreements covering bug fixes, feature additions, and infrastructure tuning",
    ],
    technologies: [
      "NestJS",
      "Next.js",
      "Express.js",
      "TypeScript",
      "Prisma",
      "MySQL",
      "MongoDB",
      "AWS",
      "Docker",
      "GitHub Actions",
      "Passport.js",
      "RTK Query",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
      "Sails.js",
      "MongoDB",
      "Socket.IO",
      "Payment Gateways",
      "WebSockets",
    ],
  },
  {
    id: 6,
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
  { label: "Years Experience", value: "5+" },
  { label: "Clients & Companies", value: "5+" },
  { label: "Major Projects", value: "10+" },
  { label: "Users Impacted", value: "5K+" },
];

export const projectCategories = [
  "All",
  "Platform",
  "E-Commerce",
  "Web Application",
  "Marketing Site",
  "Library",
];

export interface ProjectGalleryGroup {
  label: string;
  images: string[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  gallery?: ProjectGalleryGroup[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  status: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "purpleroof",
    title: "PurpleRoof",
    category: "Platform",
    description:
      "A 14-repo microservices real-estate platform with LMS, Careers, and Mortgage modules — architected solo and running in production.",
    longDescription:
      "Architected and full-stack developed a real-estate platform spanning 14 independent microservice repositories: 5 NestJS services behind a PKCE-based SSO gateway, 5 Next.js portals (Home, User, Company, Admin, Career), and 3 internal npm packages published to GitHub Packages. Implemented a pure RBAC system with audit logging, JWT auth, Prisma/MySQL migrations, and GitHub Actions CI/CD on a CentOS production server (PM2-managed). Live in production since March 2026.",
    technologies: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "Prisma",
      "MySQL",
      "Redis",
      "JWT",
      "PKCE SSO",
      "PM2",
      "Nginx",
      "GitHub Actions",
      "Docker",
      "CentOS",
      "Tailwind CSS",
      "shadcn / Radix UI",
    ],
    image: "/images/projects/PurpleRoof/HomeApp/Purple-Roof-Home-1.png",
    gallery: [
      {
        label: "Home App",
        images: [
          "/images/projects/PurpleRoof/HomeApp/Purple-Roof-Home-1.png",
          "/images/projects/PurpleRoof/HomeApp/Purple-Roof-Home-2.png",
          "/images/projects/PurpleRoof/HomeApp/Purple-Roof-Home-3.png",
          "/images/projects/PurpleRoof/HomeApp/Purple-Roof-Home-4.png",
          "/images/projects/PurpleRoof/HomeApp/Purple-Roof-Home-5.png",
          "/images/projects/PurpleRoof/HomeApp/Purple-Roof-Home-6.png",
        ],
      },
      {
        label: "User Portal (including LMS)",
        images: [
          "/images/projects/PurpleRoof/UserApp/Purple-Roof-User-1.png",
          "/images/projects/PurpleRoof/UserApp/Purple-Roof-User-2.png",
          "/images/projects/PurpleRoof/UserApp/Purple-Roof-User-3.png",
          "/images/projects/PurpleRoof/UserApp/Purple-Roof-User-4.png",
          "/images/projects/PurpleRoof/UserApp/Purple-Roof-User-5.png",
          "/images/projects/PurpleRoof/UserApp/Purple-Roof-User-6.png",
        ],
      },
      {
        label: "Career Portal",
        images: [
          "/images/projects/PurpleRoof/CareerApp/Purple-Roof-Career-1.png",
        ],
      },
    ],
    liveUrl: "https://purpleroof.com/",
    githubUrl: "#",
    featured: true,
    status: "Live",
  },
  {
    id: 2,
    slug: "sa-gems",
    title: "SA Gems",
    category: "E-Commerce",
    description:
      "A dual-brand gemstone e-commerce platform (Ceylon SA Gems + Toronto SA Gems) with customer requests, gem reservations, and interest queues.",
    longDescription:
      "Built a dual-brand gemstone e-commerce platform serving Ceylon SA Gems (SAG) and Toronto SA Gems (TSAG) from a single codebase on Express.js + MongoDB with Next.js and RTK Query frontends. Designed the Customer Request workflow (custom / specific / similar categories), 48-hour Gem Reservation system, and Interest Queue with cron-driven expiry and automated notifications. Deployed via Docker on AWS EC2 with S3, CloudFront, SES, and Secrets Manager.",
    technologies: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Passport.js",
      "Google OAuth",
      "AWS EC2",
      "AWS S3",
      "CloudFront",
      "SES",
      "Docker",
      "Tailwind CSS",
    ],
    image: "/images/projects/SAGems/sag-1.png",
    gallery: [
      {
        label: "Screenshots",
        images: [
          "/images/projects/SAGems/sag-1.png",
          "/images/projects/SAGems/sag-2.png",
          "/images/projects/SAGems/sag-3.png",
          "/images/projects/SAGems/sag-4.png",
          "/images/projects/SAGems/sag-5.png",
          "/images/projects/SAGems/sag-6.png",
          "/images/projects/SAGems/sag-7.png",
        ],
      },
    ],
    liveUrl: "https://ceylonsagems.com/",
    githubUrl: "#",
    featured: true,
    status: "Live",
  },
  {
    id: 3,
    slug: "sa-constructions",
    title: "SA Constructions",
    category: "Marketing Site",
    description:
      "A premium marketing single-page application for SA Construction, built for lead generation in residential and commercial construction markets.",
    longDescription:
      "Delivered an elegant marketing SPA on Next.js 16 with Turbopack and Tailwind CSS v4 (CSS-first @theme config), featuring 11 animated sections, scroll-triggered reveals, an auto-rotating hero carousel, filterable portfolio grid, and SEO-optimized metadata. Strict ESLint 9 flat config and TypeScript 5.7 throughout.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Turbopack",
      "Framer Motion",
      "Lucide Icons",
      "ESLint 9",
    ],
    image: "/images/projects/SAConstructions/sac-1.png",
    gallery: [
      {
        label: "Screenshots",
        images: [
          "/images/projects/SAConstructions/sac-1.png",
          "/images/projects/SAConstructions/sac-2.png",
          "/images/projects/SAConstructions/sac-3.png",
          "/images/projects/SAConstructions/sac-4.png",
          "/images/projects/SAConstructions/sac-5.png",
          "/images/projects/SAConstructions/sac-6.png",
        ],
      },
    ],
    liveUrl: "https://sa-construction-user-frontend.vercel.app/",
    githubUrl: "#",
    featured: false,
    status: "Live",
  },
  {
    id: 4,
    slug: "autotrust-lk",
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
    image: "/images/projects/AutoTrustLk/atl-1.png",
    gallery: [
      {
        label: "Screenshots",
        images: [
          "/images/projects/AutoTrustLk/atl-1.png",
          "/images/projects/AutoTrustLk/atl-2.png",
          "/images/projects/AutoTrustLk/atl-3.png",
          "/images/projects/AutoTrustLk/atl-4.png",
        ],
      },
    ],
    liveUrl: "https://autotrust-frontend-staging.vercel.app/",
    githubUrl: "#",
    featured: false,
    status: "Ongoing",
  },
  {
    id: 5,
    slug: "playarena",
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
    image: "/images/projects/PlayArena/pa-1.png",
    gallery: [
      {
        label: "Screenshots",
        images: [
          "/images/projects/PlayArena/pa-1.png",
          "/images/projects/PlayArena/pa-2.png",
          "/images/projects/PlayArena/pa-3.png",
        ],
      },
    ],
    liveUrl: "https://playarena-staging.vercel.app/",
    githubUrl: "#",
    featured: false,
    status: "Ongoing",
  },
  {
    id: 6,
    slug: "reusable-ui-library",
    title: "Reusable UI Components Library",
    category: "Library",
    description:
      "A monorepo with 20+ production-ready React components, enterprise-grade form system, and interactive data visualization pieces — documented via Storybook.",
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
    image: "/images/projects/UI/rui-1.png",
    gallery: [
      {
        label: "Screenshots",
        images: [
          "/images/projects/UI/rui-1.png",
          "/images/projects/UI/rui-2.png",
          "/images/projects/UI/rui-3.png",
          "/images/projects/UI/rui-4.png",
        ],
      },
    ],
    liveUrl: "https://sidathranasinghe.github.io/reusable-ui-monorepo/",
    githubUrl: "https://github.com/SidathRanasinghe/reusable-ui-monorepo",
    featured: false,
    status: "Completed",
  },
];

export const overallProjectsCounts = [
  { label: "Total Projects", value: "10+" },
  { label: "Technologies", value: "30+" },
  { label: "Live Projects", value: "5+" },
  { label: "Open Source", value: "1" },
];

export const skills = {
  frontend: [
    { name: "React", level: 95, years: 5 },
    { name: "Next.js", level: 90, years: 3 },
    { name: "Angular", level: 90, years: 5 },
    { name: "TypeScript", level: 92, years: 4 },
    { name: "JavaScript", level: 95, years: 5 },
    { name: "Tailwind CSS", level: 90, years: 3 },
    { name: "shadcn / Radix UI", level: 85, years: 2 },
    { name: "Framer Motion", level: 75, years: 2 },
  ],
  backend: [
    { name: "Node.js", level: 92, years: 5 },
    { name: "NestJS", level: 85, years: 1 },
    { name: "Express.js", level: 90, years: 4 },
    { name: "Sails.js", level: 75, years: 3 },
    { name: "REST APIs", level: 95, years: 5 },
    { name: "Socket.IO", level: 85, years: 3 },
    { name: "Passport.js", level: 80, years: 1 },
    { name: "Swagger / OpenAPI", level: 80, years: 1 },
  ],
  database: [
    { name: "MongoDB", level: 90, years: 5 },
    { name: "MySQL", level: 85, years: 2 },
    { name: "PostgreSQL", level: 80, years: 2 },
    { name: "Prisma", level: 85, years: 2 },
    { name: "Mongoose", level: 85, years: 5 },
    { name: "Redis", level: 75, years: 2 },
  ],
  tools: [
    { name: "Git", level: 95, years: 5 },
    { name: "Docker", level: 85, years: 2 },
    { name: "AWS (EC2, S3, CloudFront, SES)", level: 80, years: 1 },
    { name: "GitHub Actions", level: 85, years: 1 },
    { name: "PM2", level: 80, years: 1 },
    { name: "Nginx", level: 75, years: 2 },
    { name: "Postman", level: 90, years: 5 },
    { name: "Jira", level: 85, years: 4 },
  ],
};

export const devTools = [
  "VS Code",
  "WebStorm",
  "IntelliJ IDEA",
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
