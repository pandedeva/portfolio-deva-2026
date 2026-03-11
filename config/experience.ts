import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "fe",
    position: "Front-end Web Developer",
    company: "Indo Rekber ID",
    location: "Denpasar, Bali",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2026-03-31"),
    description: [
      "Developed React-based escrow transaction dashboard handling 100+ daily transactions.",
      "Integrated REST API using Axios + React Query.",
      "Built reusable component library with Tailwind + React.",
      "Reduced page load time 35% via code splitting and lazy loading.",
    ],
    achievements: [
      "Handled 100+ daily transactions simulation with clean state management.",
      "Reduced page load time by 35% through optimization techniques.",
      "Created responsive UI that works perfectly on mobile and desktop.",
    ],
    skills: ["Typescript", "React", "Tailwind", "React Query"],
    companyUrl: "https://indorekber.com",
    logo: "/experience/indorekberlogo.png",
  },

  {
    id: "checkin",
    position: "Check-in, Gate & Admin",
    company: "PT Jasa Angkasa Semesta",
    location: "Badung, Bali",
    startDate: new Date("2023-02-02"),
    endDate: new Date("2025-03-20"),
    description: [
      "Check-in staff on flight Quantas Airlines, China Eastern, Juneyao Airlines.",
      "Preparing reports, memos, and other documents.",
      "Making daily or monthly schedule for checkin staff.",
    ],
    achievements: [
      "Managed check-in process for 3 international airlines (Qantas, China Eastern, Juneyao).",
      "Created daily and monthly staff schedules for 100+ ground staff.",
      "Prepared accurate reports and memos under tight deadlines.",
    ],
    skills: [
      "Troubleshooting",
      "Microsoft Office",
      "Report Preparation",
      "Staff Scheduling",
      "Problem Solving",
    ],
    companyUrl: "https://www.ptjas.co.id",
    logo: "/experience/jaslogofix.png",
  },

  {
    id: "it",
    position: "IT Support",
    company: "PT Jasa Angkasa Semesta",
    location: "Badung, Indonesia",
    startDate: new Date("2022-06-01"),
    endDate: new Date("2023-02-01"),
    description: [
      "Installing hardware and software.",
      "Maintaining hardware and software installations.",
      "Identifying and resolving issues with hardware and software.",
      "Maintaining system security with tools like antivirus.",
    ],
    achievements: [
      "Successfully troubleshot and resolved 50+ hardware/software issues per month.",
      "Maintained system security across 30+ workstations using antivirus tools.",
      "Installed and configured new hardware and software for the entire team.",
    ],
    skills: [
      "Troubleshooting",
      "Technical Support",
      "Microsoft Office",
      "Problem Solving",
    ],
    companyUrl: "https://www.ptjas.co.id",
    logo: "/experience/jaslogofix.png",
  },
];
