import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pande Deva | Frontend Engineer",
    short_name: "Pande Deva",
    description:
      "Pande Deva - React & Next.js Frontend Engineer from Bali. Focused on performance, accessibility, and scalable web apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    categories: [
      "portfolio",
      "frontend engineer",
      "developer",
      "web development",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
