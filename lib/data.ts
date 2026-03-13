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
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
