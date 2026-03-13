export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: "In Progress" | "Completed";
}

export interface ProjectItem {
  name: string;
  company: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface PublicationItem {
  title: string;
  authors: string;
  venue: string;
  year: number;
  description: string;
  link: string;
  technologies: string[];
}

export interface PersonalProjectItem {
  name: string;
  url?: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ContactInfo {
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export const personalInfo = {
  name: "Mitroescu Dragoș",
  firstName: "Dragoș",
  lastName: "Mitroescu",
  title: "Software Developer / Architect",
  tagline:
    "Building scalable systems at the intersection of architecture and engineering.",
  summary: [
    "Software Engineer and Technical Lead with 5+ years of experience in C#, .NET, TypeScript, and full-stack development, working on complex enterprise applications and mature products.",
    "I have contributed to architecture decisions, performance optimization, and the design of scalable and maintainable systems, with a strong focus on long-term product evolution.",
    "My technical decisions have improved system extensibility, application behavior, operational efficiency, and business outcomes across international environments.",
  ],
} as const;

export const stats = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Tech Stack Depth", value: 15, suffix: "+" },
] as const;

export const experiences: ExperienceItem[] = [
  {
    company: "BESTMIX",
    role: "Software Developer",
    period: "September 2024 - Present",
    type: "Full-time",
    current: true,
    description: [
      "Contributing to the architecture, optimization, and continuous evolution of a leading ERP platform in the food, feed, and pet food industry.",
      "Playing a key role in optimizing a large-scale application, improving performance, scalability, maintainability, and user experience across critical modules.",
      "Applying mathematical models and optimization logic to improve network efficiency and refine application behavior for better operational outcomes.",
      "Making key technical and product decisions that contributed to business growth, increased platform value for clients, and supported revenue generation.",
    ],
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "WPF",
      "DevExpress",
      "SQL",
      "Azure",
      "Git",
      "REST APIs",
      "Complex Math & Optimization",
      "3rd Party Integrations",
      "Software Architecture",
      "Performance Optimization",
      "System Design",
    ],
  },
  {
    company: "Integrisoft",
    role: "Full-Stack Developer",
    period: "January 2024 - December 2024",
    type: "Contract",
    current: false,
    description: [
      "Developed and maintained web applications for public administration, including tax systems, social services, parks, and citizen interaction platforms.",
      "Built clean and maintainable solutions that made future enhancements easier to implement and reduced development effort.",
      "Contributed across both frontend and backend layers, supporting end-to-end delivery of business features.",
    ],
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "TypeScript",
      "Angular",
      "SQL",
      "AWS",
      "GCP",
      "Git",
      "REST API Integrations",
      "3rd Party Integrations",
    ],
  },
  {
    company: "LivratorTOP",
    role: "Lead Software Architect",
    period: "November 2023 - April 2024",
    type: "Part-time",
    current: false,
    description: [
      "Coordinated the development and maintenance of an internal PHP-based application, ensuring it remained efficient, stable, and easy to use.",
      "Analyzed business needs and translated them into practical software solutions, helping prioritize the most valuable functionalities.",
      "Combined technical implementation with project coordination responsibilities, contributing both to execution and decision-making.",
    ],
    technologies: [
      "PHP",
      "Symfony",
      "Python",
      "React",
      "JavaScript",
      "SQL",
      "AWS",
      "Git",
      "REST APIs",
      "Software Architecture",
      "Project Management",
    ],
  },
  {
    company: "Kloudworks",
    role: "Full-Stack Developer",
    period: "June 2023 - April 2024",
    type: "Contract",
    current: false,
    description: [
      "Coordinated the development and maintenance of an internal platform, ensuring stability and performance.",
      "Managed development priorities and translated business needs into practical technical solutions.",
      "Combined technical execution with coordination responsibilities, contributing to both architecture and day-to-day development decisions.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Azure",
      "Git",
      "REST API Integrations",
      "3rd Party Integrations",
      "System Integration",
    ],
  },
  {
    company: "Grant Thornton International",
    role: "Junior Software Developer",
    period: "April 2023 - June 2023",
    type: "Internship",
    current: false,
    description: [
      "Designed and implemented APIs that enhanced data accessibility and system efficiency across internal operations.",
      "Developed robust and scalable solutions using Python and SQL, following best practices in software development.",
      "Contributed to client satisfaction by building APIs that facilitated seamless interaction with company products.",
    ],
    technologies: ["Python", "SQL", "REST APIs"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Recipe Management Platform",
    company: "BESTMIX",
    description:
      "Core module of the BESTMIX suite - an industry-leading least-cost recipe formulation and optimization platform used by 1,000+ customers across 60 countries in the food, feed, and pet food industries.",
    highlights: [
      "Contributed significantly to the evolution of the recipe management engine, improving formulation logic, UI workflows, and overall module reliability.",
      "Worked on performance-critical optimization paths that directly impact production cost savings for clients worldwide.",
      "Helped shape architectural decisions that improved extensibility and long-term maintainability of the platform.",
    ],
    technologies: ["C#", ".NET", "WPF", "DevExpress", "SQL", "Gurobi"],
  },
  {
    name: "Internal Applications & 3rd Party Integrations",
    company: "BESTMIX",
    description:
      "Suite of internal tools and integration layers connecting BESTMIX with external services, regulatory systems, and client infrastructure.",
    highlights: [
      "Integrated third-party systems such as GHS (Globally Harmonized System) for chemical classification compliance and Gurobi for mathematical optimization.",
      "Built and maintained REST API integrations - both public-facing and inter-service - enabling seamless data exchange across the platform ecosystem.",
      "Designed and executed a large-scale ETL pipeline for the entire database structure (thousands of tables), including data normalization from legacy JSON-based storage to properly structured relational schemas.",
    ],
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "SQL",
      "REST APIs",
      "GHS",
      "Gurobi",
      "ETL",
      "Azure",
    ],
  },
  {
    name: "AVANSIS - Taxpayer Platform",
    company: "Integrisoft",
    description:
      "Part of the AVANSIS ecosystem - Romania's leading integrated information system for local public administration, serving 400+ institutions and approximately 3 million citizens, managing over 8 billion RON/year in tax obligations.",
    highlights: [
      "Designed and implemented the responsive mobile and tablet layouts, ensuring a seamless experience for citizens accessing the platform from any device.",
      "Improved existing user flows for tax payment, declarations, and document issuance, reducing friction and increasing adoption.",
      "Developed new, streamlined workflows that simplified complex administrative processes for end users.",
    ],
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "TypeScript",
      "Angular",
      "SQL",
    ],
  },
  {
    name: "AVANMOB - Inspector Mobile App",
    company: "Integrisoft",
    description:
      "Mobile application designed for field inspectors, integrating the tax system with multiple administrative modules to enable on-site tax calculation and verification.",
    highlights: [
      "Contributed to an integrated solution that combined tax data, property records, and citizen information into a single inspector workflow.",
      "Enabled inspectors to compute and verify taxes directly in the field, significantly reducing back-office processing time.",
    ],
    technologies: ["C#", ".NET", "TypeScript", "Angular", "SQL", "REST APIs"],
  },
  {
    name: "BackOffice - Administrative Platform",
    company: "Integrisoft",
    description:
      "Comprehensive back-office application used by inspectors across municipal offices for all citizen-facing operations - from tax management to permits and social services.",
    highlights: [
      "Worked on the core platform used daily by inspectors in city halls across Romania for processing citizen requests.",
      "Contributed to feature development and workflow improvements that streamlined administrative operations.",
    ],
    technologies: ["C#", ".NET", "ASP.NET Core", "Angular", "SQL", "GCP"],
  },
  {
    name: "XFlote - Fleet Management ERP",
    company: "LivratorTOP",
    description:
      "Proprietary, fully web-based internal ERP system for managing delivery fleets operating across platforms like Bolt Food, Glovo, and Wolt - covering fleet operations, housing, HR, and all administrative processes.",
    highlights: [
      "Supervised and contributed to the implementation of the entire platform, from architecture decisions to feature delivery.",
      "Improved existing business flows and introduced new workflows that increased operational efficiency across fleet management, HR, and housing modules.",
      "Ensured the platform remained stable, performant, and aligned with evolving business requirements as a 100% internal tool.",
    ],
    technologies: [
      "PHP",
      "Symfony",
      "React",
      "JavaScript",
      "SQL",
      "AWS",
      "REST APIs",
    ],
  },
  {
    name: "Corporate Website - Tech Studio",
    company: "Kloudworks",
    description:
      "Full corporate website for an internationally recognized mobile app development studio with multiple offices across Europe and the US.",
    highlights: [
      "Built the entire website from scratch, handling design implementation, frontend development, and deployment end-to-end.",
    ],
    technologies: ["TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    name: "Healthcare Integration API & Social Platform",
    company: "Kloudworks",
    description:
      "Integration layer connecting medical services across multiple institutions in Western Europe, paired with a content platform for industry professionals.",
    highlights: [
      "Developed the integration API that aggregated and standardized service data from multiple external systems.",
      "Built a social feed platform for professionals featuring news, articles, and domain-specific updates.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "REST APIs",
      "Azure",
    ],
  },
  {
    name: "Data Migration & Analytics",
    company: "Kloudworks",
    description:
      "Data engineering initiative involving large-scale database migrations, structural transformations, and analytical processing for client datasets.",
    highlights: [
      "Performed complex database transformations and migration pipelines to restructure and consolidate data across systems.",
      "Conducted data analysis using Python to extract actionable insights and support strategic decision-making.",
    ],
    technologies: ["Python", "SQL", "Data Analysis", "ETL"],
  },
  {
    name: "Internal Workflow Optimization Tools",
    company: "Grant Thornton International",
    description:
      "Suite of internal applications built to optimize existing business processes and operational workflows within the organization.",
    highlights: [
      "Designed and implemented Python-based tools that automated and streamlined internal operational flows.",
      "Built APIs that enhanced data accessibility and improved cross-team efficiency.",
    ],
    technologies: ["Python", "SQL", "REST APIs"],
  },
];

export const skillCategories: Record<string, string[]> = {
  "Languages & Frameworks": [
    "C#",
    ".NET",
    "ASP.NET Core",
    "TypeScript",
    "JavaScript",
    "React",
    "Angular",
    "Node.js",
    "Next.js",
    "Python",
    "WPF",
  ],
  "Architecture & Design": [
    "Software Architecture",
    "System Design",
    "REST APIs",
    "Database Design",
    "Performance Optimization",
    "System Integration",
  ],
  "Cloud & Infrastructure": [
    "Azure",
    "AWS",
    "GCP",
    "SQL",
    "Full-Stack Development",
  ],
};

export const aiApproach = {
  headline: "AI-Augmented Development",
  statement:
    "I actively integrate AI tools and emerging technologies into my development workflow - from code generation and architecture validation to automated testing and documentation. I stay current with the latest advancements in AI-assisted engineering and take full ownership of the output quality, ensuring every AI-augmented deliverable meets production standards.",
  principles: [
    "AI-assisted code generation, review & refactoring",
    "Prompt engineering for development workflows",
    "Accountability for correctness and quality of AI-augmented output",
    "Continuous adoption of emerging tools and methodologies",
  ],
} as const;

export const publications: PublicationItem[] = [
  {
    title:
      "A Web-Based Facial Recognition Application Using Convolutional Neural Networks (CNNs)",
    authors: "Dragoș Mitroescu, Simona Oprea, Adela Bâra",
    venue: "ResearchGate - Academic Conference Paper",
    year: 2026,
    description:
      "Research paper exploring the application of Convolutional Neural Networks for real-time facial recognition in a web-based environment. The paper presents a full-stack application that allows users to upload personal images and receive real-time AI-powered interpretations of facial characteristics, demonstrating practical applications of deep learning in accessible web interfaces.",
    link: "https://www.researchgate.net/publication/400673219_A_Web-Based_Facial_Recognition_Application_Using_Convolutional_Neural_Networks_CNNs",
    technologies: [
      "Python",
      "CNNs",
      "Deep Learning",
      "Computer Vision",
      "Web Development",
    ],
  },
];

export const personalProjects: PersonalProjectItem[] = [
  {
    name: "Facial Recognition Web Application",
    description:
      "Full-stack web application built as the practical component of the CNN research paper - enabling users to upload images and receive real-time AI-driven facial analysis using deep learning models.",
    highlights: [
      "Designed and implemented the entire application architecture, from the CNN model pipeline to the web interface.",
      "Built a real-time image processing pipeline that accepts user uploads and returns facial characteristic interpretations.",
      "Integrated trained Convolutional Neural Network models into a production-ready web environment.",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "CNNs",
      "React",
      "REST APIs",
      "Computer Vision",
    ],
  },
  {
    name: "RoAutentic",
    url: "https://roautentic.ro",
    description:
      "Romania's marketplace platform dedicated to authentic local products - connecting traditional producers with consumers seeking genuine Romanian food and crafts. Built entirely from scratch as a solo project.",
    highlights: [
      "Designed and developed the entire platform end-to-end: e-commerce engine, producer onboarding, product catalog, shopping cart, and payment integration.",
      "Built a curated marketplace model where producers can register, list products, and manage their storefronts independently.",
      "Implemented the full buyer experience - browsing, filtering, purchasing - with a focus on showcasing product authenticity and origin.",
      "100% solo project - architecture, design, frontend, backend, and deployment handled independently.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "SQL",
      "REST APIs",
      "Payment Integration",
    ],
  },
  {
    name: "EduAgenda",
    url: "https://eduagenda.ro",
    description:
      "Comprehensive management system for educational centers, afterschool programs, private kindergartens, and schools - handling scheduling, student management, financials, attendance, and parent communication.",
    highlights: [
      "Built the entire platform from the ground up as a solo project, covering smart scheduling, student profiles, and financial tracking.",
      "Developed advanced reporting features - auto-generated attendance registers, financial statements, and activity reports exportable as PDF/Excel.",
      "Implemented multi-tier functionality: resource coordination (rooms, teachers, locations), automated payroll calculations, and dedicated parent accounts.",
      "Designed a scalable SaaS model with free, Plus, and Enterprise tiers to serve individual tutors through large institutions.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "SQL",
      "REST APIs",
      "PDF Generation",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "PhD in Economic Informatics",
    institution: "CSIE, Bucharest University of Economic Studies",
    status: "In Progress",
  },
  {
    degree:
      "Master's Degree in Information Systems for the Management of Economic Resources (SIMPRE)",
    institution: "CSIE, Bucharest University of Economic Studies",
    status: "Completed",
  },
  {
    degree: "Bachelor's Degree in Economic Informatics",
    institution: "CSIE, Bucharest University of Economic Studies",
    status: "Completed",
  },
];

export const contact: ContactInfo = {
  location: "Bucharest, Romania",
  email: "dragos.mitroescu.10@gmail.com",
  phone: "+40 734 838 735",
  github: "https://github.com/dragosmitro",
  linkedin: "https://linkedin.com/in/dragosmitroescu",
};

export const certificates = [
  "First Certificate in English, Cambridge",
  "Database Design & Programming in SQL, Oracle",
  "RPA Developer Certificate, UiPath",
];

export const languages = [
  { name: "English", level: "Fluent / Professional" },
  { name: "Romanian", level: "Native" },
  { name: "French", level: "Conversational" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
