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
  title: "Full-Stack Engineer",
  headline:
    "Full-Stack Engineer · Node.js & Next.js · Real-Time Systems & API Integrations",
  location: "Kegalle, Sri Lanka",
  email: "sidath.ranasinghe.work@gmail.com",
  phone: "(+94) 76 557 2291",
  linkedin: "https://linkedin.com/in/sidath-ranasinghe",
  github: "https://github.com/SidathRanasinghe",
  gitlab: "https://gitlab.com/SidathRanasinghe",
  portfolio: "https://sidath.ryzeniclabs.com",
  tagline:
    "Full-stack engineer with 4+ years of production experience, specialising in Node.js backends, real-time WebSocket systems, and third-party API integrations, with frontend delivery in Next.js and Angular.",
  bio: "Built a real-time chat application end-to-end, migrated a failing live-streaming layer onto AWS IVS, and reworked a telecom payment gateway integration across a breaking major API version. Currently lead developer and architect on a production real estate platform operating in the UAE and Sri Lanka. Comfortable owning architecture, delivery, and production operations. Open to international relocation and on-site engagements.",
  contactPitch:
    "Whether you're looking for a full-stack engineer to join your team, need help with a Node.js backend, real-time system, or API integration, or want to discuss a potential collaboration, I'm always open to meaningful conversations.",
  profileImage: "/images/profile/sidath-profile.png",
  resumeUrl: "/docs/Sidath_Ranasinghe_SE.pdf",
  logo: "/images/logo/logo.png",
};

export const personalInitials = personalInfo.name
  .split(" ")
  .map(part => part[0])
  .join("");

export const heroRoles = [
  personalInfo.title,
  "Node.js & Next.js Developer",
  "Real-Time Systems Engineer",
  "API Integration Specialist",
];

export const aboutTechs = [
  "Node.js",
  "Express.js",
  "Sails.js",
  "Angular",
  "Next.js",
  "React",
  "NestJS",
  "TypeScript",
  "Socket.IO",
  "MongoDB",
  "Prisma",
  "MySQL",
  "Git",
  "PM2",
];

export const aboutHighlights = [
  {
    icon: "architecture",
    title: "Platform Architecture",
    description:
      "Lead developer and architect on PurpleRoof: restructured a stalled Laravel monolith into five NestJS services, five Next.js portals, and three internal npm packages",
  },
  {
    icon: "realtime",
    title: "Real-Time Systems",
    description:
      "Built a Socket.IO chat application end-to-end and a live fan-to-celebrity session queue, and moved StarsLive streaming onto AWS IVS with adaptive bitrate",
  },
  {
    icon: "integrations",
    title: "API Integrations",
    description:
      "Migrated the Genie payment gateway (Dialog, Mobitel) across a breaking major API version, and integrated Google Analytics, Maps, Sheets, and OAuth 2.0",
  },
  {
    icon: "operations",
    title: "Production Operations",
    description:
      "Runs live systems end-to-end: CI/CD on GitHub Actions, PM2-managed CentOS servers, and AWS (EC2, S3, CloudFront, SES, Secrets Manager); mentored junior developers along the way",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Lead Developer / Full-Stack Engineer (Independent)",
    company: "Independent Engagements",
    location: "Sri Lanka",
    period: "June 2025 – Present",
    type: "Freelance",
    description:
      "Deliver and maintain production systems for clients in real estate, e-commerce, and construction under ongoing maintenance agreements.",
    achievements: [
      "PurpleRoof (purpleroof.com): Lead developer and architect. Restructured a stalled Laravel monolith into a service-oriented Node.js platform: five NestJS services behind a PKCE-based SSO gateway, five Next.js portals, and three internal npm packages published to GitHub Packages. Implemented role-based access control with audit logging, JWT authentication, Prisma/MySQL migrations, and GitHub Actions CI/CD on a PM2-managed CentOS server. Work within a five-person team on two-week sprints. Live in production since March 2026",
      "SA Gems (ceylonsagems.com, torontosagems.com): Dual-brand gemstone e-commerce platform on Express.js and MongoDB with Next.js/RTK Query frontends. Designed the customer request workflow, a 48-hour gem reservation system, and a cron-driven interest queue with automatic expiry. Deployed via Docker on AWS EC2 with S3, CloudFront, SES, and Secrets Manager",
      "SA Construction (saconstructionsinc.com): Marketing single-page application built with Next.js 16 and Tailwind v4 (CSS-first @theme), React 19, scroll-triggered animations, and SEO-optimised metadata",
      "Ryzenic Labs (ryzeniclabs.com): Co-founded a software services practice with two partners, focused on full-stack product engagements for regional clients",
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
      "PM2",
      "Passport.js",
      "RTK Query",
      "Tailwind CSS",
      "Git",
      "Jira",
    ],
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "FocalId Technologies (Pvt.) Ltd.",
    location: "Mirigama, Sri Lanka",
    period: "November 2024 – May 2025",
    type: "Full-time",
    description:
      "Front-end development across client dashboards, with a focus on data visualization, state management, and team code quality.",
    achievements: [
      "Built a reusable force-directed network graph component in D3 for visual link analysis, after benchmarking vis-network and finding it degraded badly at high node counts. Delivered it after resolving a Next.js version incompatibility; adopted across multiple client dashboards",
      "Established front-end state-management patterns (Redux, Context API) and code-quality standards for the team",
      "Mentored junior developers, participated in agile ceremonies, and translated UI/UX designs into responsive implementations",
    ],
    technologies: [
      "React",
      "Next.js",
      "D3.js",
      "ReCharts",
      "ECharts",
      "TailwindCSS",
      "Redux",
      "Context API",
      "TypeScript",
      "Socket.IO",
      "WebSockets",
      "Git",
      "Jira",
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "FocalId Technologies (Pvt.) Ltd.",
    location: "Mirigama, Sri Lanka",
    period: "June 2024 – October 2024",
    type: "Full-time",
    description:
      "Front-end and integration work on internal tooling and enterprise analytics solutions.",
    achievements: [
      "Built a custom JavaScript and jQuery annotation tool that streamlined internal data-labelling workflows",
      "Integrated open-source data platforms (n8n, DataHub) to extend analytics capability for enterprise clients",
    ],
    technologies: [
      "React",
      "Next.js",
      "Context API",
      "TailwindCSS",
      "VIS Network",
      "JavaScript",
      "jQuery",
      "n8n",
      "DataHub",
      "HTML5",
      "CSS3",
      "Git",
      "Jira",
    ],
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Simato Solutions (Pvt.) Ltd.",
    location: "Sri Jayawardenepura Kotte, Sri Lanka",
    period: "June 2022 – May 2024",
    type: "Full-time",
    description:
      "Delivered full-stack development across IDEAMART Appmaker (appmaker.lk) and STARS-LIVE (starslive.lk).",
    achievements: [
      "P2PChat: Designed and built a real-time chat application end-to-end: a Sails.js backend from scratch, an Angular and Angular Material frontend, and the full Socket.IO transport layer. Shipped as a self-contained application within the Appmaker platform",
      "StarsLive live streaming: Replaced a failing third-party streaming implementation with AWS IVS, working directly from the service documentation. Eliminated recurring midstream failures and introduced adaptive bitrate delivery with automatic resolution switching. Integrated Video.js as the client player",
      "StarsLive fan interaction queue: Built the fan-to-celebrity session queue over Socket.IO across both frontend and backend; diagnosed and resolved dropped-session and blank-stream defects in the live call flow",
      "Genie payment gateway (Dialog, Mobitel): Migrated the integration across a breaking major API version, reworking endpoints for MSISDN detection, subscription initiation, renewal callbacks, and subscription status validation",
      "Contributed to simato-commons, the shared internal npm module used across platform services. Integrated Google Analytics, Google Maps, Google Sheets, and Google OAuth 2.0; mentored a junior developer, and optimised database queries (MongoDB) for data-heavy screens",
    ],
    technologies: [
      "Angular",
      "Angular Material",
      "AngularJS",
      "Sails.js",
      "Node.js",
      "Cordova",
      "Ionic",
      "MongoDB",
      "Socket.IO",
      "WebSockets",
      "Push Notifications",
      "AWS IVS",
      "Video.js",
      "VimeoAPI",
      "Genie Payment Gateway",
      "Google APIs",
      "Git",
      "Jira",
    ],
  },
  {
    id: 5,
    title: "Software Engineer Intern",
    company: "Simato Solutions (Pvt.) Ltd.",
    location: "Sri Jayawardenepura Kotte, Sri Lanka",
    period: "July 2020 – July 2021",
    type: "Internship",
    description:
      "Extended beyond the standard six-month term on performance. Contributed to IDEAMART Appmaker (appmaker.lk) alongside final-year university studies.",
    achievements: [] as string[],
    technologies: [
      "Angular",
      "Angular Material",
      "AngularJS",
      "Node.js",
      "Sails.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "Git",
      "Jira",
    ],
  },
];

// export const overallExperience = [
//   { label: "Years Experience", value: "5+" },
//   { label: "Clients & Companies", value: "5+" },
//   { label: "Major Projects", value: "10+" },
//   { label: "Users Impacted", value: "5K+" },
// ];

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
      "A production real-estate platform operating in the UAE and Sri Lanka, restructured from a stalled Laravel monolith into a service-oriented Node.js platform with LMS, Careers, and Mortgage modules.",
    longDescription:
      "Lead developer and architect, working within a five-person team on two-week sprints. Restructured a stalled Laravel monolith into a service-oriented Node.js platform: five NestJS services behind a PKCE-based SSO gateway, five Next.js portals (Home, User, Company, Admin, Career), and three internal npm packages published to GitHub Packages. Implemented role-based access control with audit logging, JWT authentication, Prisma/MySQL migrations, and GitHub Actions CI/CD on a PM2-managed CentOS server. Live in production since March 2026.",
    technologies: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "Prisma",
      "MySQL",
      "JWT",
      "PKCE SSO",
      "PM2",
      "Nginx",
      "GitHub Actions",
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
      "Built a dual-brand gemstone e-commerce platform serving Ceylon SA Gems (ceylonsagems.com) and Toronto SA Gems (torontosagems.com) on Express.js and MongoDB with Next.js/RTK Query frontends. Designed the customer request workflow, a 48-hour gem reservation system, and a cron-driven interest queue with automatic expiry. Deployed via Docker on AWS EC2 with S3, CloudFront, SES, and Secrets Manager.",
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
    title: "SA Construction",
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
    liveUrl: "https://saconstructionsinc.com/",
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
      "A monorepo of 10+ reusable React components, a flexible form system with dynamic validation, and interactive data-visualization pieces, documented in Storybook.",
    longDescription:
      "Built a flexible form system with dynamic Zod validation, interactive data-visualization components, and advanced UI elements. Implemented Storybook documentation, a custom design system, and a workspace architecture for scalable component development.",
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
  { label: "Total Projects", value: `${projects.length}` },
  {
    label: "Technologies",
    value: `${new Set(projects.flatMap(project => project.technologies)).size}`,
  },
  {
    label: "Live Projects",
    value: `${projects.filter(project => project.status === "Live").length}`,
  },
  {
    label: "Open Source",
    value: `${projects.filter(project => project.githubUrl.startsWith("https://")).length}`,
  },
];

// Tiers and their order follow the CV. Levels only size the bars within each
// tier's band (Core > 80, Working 60–80, Familiar 30–60) and are not displayed.
export const skillTiers = [
  {
    id: "core",
    label: "Core",
    title: "Core (production depth)",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 90 },
      { name: "Sails.js", level: 95 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "Socket.IO / WebSockets", level: 85 },
      { name: "REST API design", level: 85 },
      { name: "MongoDB", level: 92 },
      { name: "Mongoose", level: 88 },
      { name: "Waterline ORM", level: 85 },
      { name: "Angular", level: 87.5 },
      { name: "HTML/CSS", level: 90 },
      { name: "Git", level: 92 },
      { name: "PM2", level: 80 },
      { name: "Jira", level: 85 },
    ],
  },
  {
    id: "working",
    label: "Working",
    title: "Working proficiency",
    skills: [
      { name: "React", level: 78 },
      { name: "Next.js", level: 77 },
      { name: "NestJS", level: 76 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 74 },
      { name: "shadcn / Radix UI", level: 72 },
      { name: "Prisma", level: 72 },
      { name: "D3.js", level: 68 },
      { name: "GitHub Actions", level: 70 },
      { name: "Cordova", level: 64 },
      { name: "Ionic", level: 62 },
    ],
  },
  {
    id: "familiar",
    label: "Familiar",
    title: "Familiar",
    skills: [
      { name: "MySQL", level: 60 },
      { name: "PostgreSQL", level: 50 },
      { name: "Redis", level: 45 },
      { name: "Docker", level: 40 },
      {
        name: "AWS (EC2, S3, IVS, CloudFront, SES, Secrets Manager, IAM)",
        level: 55,
      },
      { name: "Nginx", level: 50 },
      { name: "Passport.js", level: 55 },
      { name: "Swagger / OpenAPI", level: 50 },
      { name: "Zod", level: 50 },
      { name: "Framer Motion", level: 40 },
      { name: "GSAP", level: 40 },
    ],
  },
] as const;

// Overall strength per domain, shown on the skills radar chart
export const skillDomains = [
  { name: "Backend", value: 85 },
  { name: "Real-Time", value: 80 },
  { name: "Databases", value: 75 },
  { name: "Frontend", value: 90 },
  { name: "Mobile", value: 60 },
  { name: "DevOps & Cloud", value: 70 },
];

export const devTools = [
  "VS Code",
  "WebStorm",
  "IntelliJ IDEA",
  "Postman",
  "Jira",
  "GitHub",
  "GitLab",
];

export const languages = [
  { name: "English", proficiency: "Full Professional Proficiency" },
  { name: "Sinhala", proficiency: "Native" },
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
