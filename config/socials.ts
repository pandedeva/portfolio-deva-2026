import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@pandedeva",
    icon: Icons.gitHub,
    link: "https://github.com/pandedeva",
  },
  {
    name: "LinkedIn",
    username: "Pande Deva",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/pande-deva-74b728220",
  },
  {
    name: "Twitter",
    username: "@k1llopps",
    icon: Icons.twitter,
    link: "https://x.com/k1llopps",
  },
  {
    name: "Gmail",
    username: "devapande66",
    icon: Icons.gmail,
    link: "mailto:devapande66@gmail.com",
  },
];
