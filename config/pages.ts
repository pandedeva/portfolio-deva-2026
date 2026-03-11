import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Pande Deva portfolio website.",
    },
  },

  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Pande Deva key skills that define his professional identity.",
    },
  },

  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Pande Deva projects in building web applications.",
    },
  },

  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Pande Deva.",
    },
  },

  resume: {
    title: "Resume",
    description: "Pande Deva resume.",
    metadata: {
      title: "Resume",
      description: "Pande Deva resume.",
    },
  },

  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description: "Pande Deva professional journey and experience timeline.",
    },
  },
};
