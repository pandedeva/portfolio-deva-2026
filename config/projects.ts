import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "portfolio-2026",
    companyName: "Portfolio Website 2026",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Modern personal portfolio built with Next.js 15, showcasing clean architecture, performance optimization, and smooth animations.",
    websiteLink: "https://deva-portfolio-2026.vercel.app",
    githubLink: "https://github.com/pandedeva/portfolio-deva-2026",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    startDate: new Date("2026-03-09"),
    endDate: new Date("2026-03-20"),
    companyLogoImg: "/projects/portfolio/portfolio2026.png",
    pagesInfoArr: [
      {
        title: "Hero & Navigation",
        description: "Clean hero section with smooth scroll",
        imgArr: ["/projects/portfolio/hero.png"],
      },
      {
        title: "Projects Section",
        description: "Featured projects with live demo and GitHub links",
        imgArr: ["/projects/portfolio/projects.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "My latest portfolio built from scratch using Next.js 15 and modern best practices.",
        "Designed to impress recruiters and clients with fast loading speed and elegant UI.",
      ],
      bullets: [
        "Built with App Router and Server Components",
        "Optimized performance with code splitting",
        "Fully responsive + dark mode",
        "Integrated contact form",
      ],
    },
  },

  {
    id: "social-app",
    companyName: "X Clone App",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "Full-featured Twitter/X clone with real-time posting, likes, comments, and authentication.",
    websiteLink: "https://social-media-app-gamma-two.vercel.app",
    githubLink: "https://github.com/pandedeva/social-media-app",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Prisma"],
    startDate: new Date("2025-01-04"),
    endDate: new Date("2025-01-13"),
    companyLogoImg: "/projects/social-app/socialApp.png",
    pagesInfoArr: [
      {
        title: "Home Feed & Posting",
        description: "Real-time feed with create post functionality",
        imgArr: ["/projects/social-app/socialApp.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Complete social media platform clone to practice full-stack development.",
      ],
      bullets: [
        "Authentication with NextAuth",
        "Real-time updates using React Query",
        "Database management with Prisma",
        "Mobile-first responsive design",
      ],
    },
  },

  {
    id: "anime-list",
    companyName: "Anime List",
    type: "Personal",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription:
      "Anime discovery platform with advanced search, filtering, and detail pages using public API.",
    githubLink: "https://github.com/pandedeva/anime-movie-list",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS"],
    startDate: new Date("2025-10-29"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/anime-list/animelist.png",
    pagesInfoArr: [
      {
        title: "Search & Detail Page",
        description: "Advanced filtering and anime information",
        imgArr: ["/projects/anime-list/animelist.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: ["Personal project focused on API integration and clean UI."],
      bullets: [
        "Data fetching from public Anime API",
        "Advanced search and filter system",
        "Smooth animations and transitions",
      ],
    },
  },

  {
    id: "portfolio-2025",
    companyName: "My Portfolio 2025",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Previous version of my portfolio built with React and Tailwind CSS.",
    websiteLink: "https://portfolio-deva-red.vercel.app/",
    githubLink: "https://github.com/pandedeva/portfolio-2025",
    techStack: ["React", "Typescript", "Next.js", "Tailwind CSS"],
    startDate: new Date("2025-01-18"),
    endDate: new Date("2025-02-03"),
    companyLogoImg: "/projects/portfolio-2025/portfolio2025-1.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description: "",
        imgArr: ["/projects/portfolio-2025/portfolio2025-1.png"],
      },
      {
        title: "Projects Showcase",
        description: "",
        imgArr: [
          "/projects/portfolio-2025/portfolio2025-2.png",
          "/projects/portfolio-2025/portfolio2025-3.png",
          "/projects/portfolio-2025/portfolio2025-4.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "My previous portfolio iteration that helped me land my first frontend projects.",
      ],
      bullets: [
        "Built with React and modern component architecture",
        "Fully responsive design",
        "Clean and minimal aesthetic",
      ],
    },
  },

  {
    id: "landing-page-saas",
    companyName: "Landing Page SaaS",
    type: "Personal",
    category: ["Frontend", "Web Dev", "UI/UX"],
    shortDescription:
      "Modern SaaS landing page with beautiful animations and conversion-focused design.",
    githubLink: "https://github.com/pandedeva/landing-page-saas",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS"],
    startDate: new Date("2024-12-18"),
    endDate: new Date("2024-12-24"),
    companyLogoImg: "/projects/landing-page-saas/landingsaas.png",
    pagesInfoArr: [
      {
        title: "Hero Section",
        description: "High-converting hero with CTA",
        imgArr: ["/projects/landing-page-saas/landingsaas.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Practice project to master modern landing page techniques and animations.",
      ],
      bullets: [
        "Framer Motion animations",
        "High-converting layout",
        "Mobile responsive design",
      ],
    },
  },

  {
    id: "wp-travel",
    companyName: "WordPress Travel Website",
    type: "Professional",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "Travel booking website built with WordPress and WP Travel Engine plugin.",
    websiteLink: "https://paleturquoise-rat-513258.hostingersite.com",
    techStack: ["PHP", "Wordpress", "HTML 5", "CSS 3", "Javascript"],
    startDate: new Date("2024-12-18"),
    endDate: new Date("2024-12-24"),
    companyLogoImg: "/projects/travel-wp/travelwp.png",
    pagesInfoArr: [
      {
        title: "Homepage & Booking",
        description: "Tour packages and booking system",
        imgArr: ["/projects/travel-wp/travelwp.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "First professional project where I customized WordPress theme and implemented booking functionality.",
      ],
      bullets: [
        "Customized WP Travel Engine plugin",
        "Created custom pages and booking flow",
        "Improved UI/UX for better user experience",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
