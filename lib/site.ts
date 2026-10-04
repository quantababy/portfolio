const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const siteConfig = {
  name: "Prabhat Tiwari",

  description:
    "Portfolio of Prabhat Tiwari, a software engineer building practical systems across AI, web development, and backend engineering.",

  url: siteUrl,

  role: "Software Engineer",
  location: "India",

  links: {
    github: "https://github.com/quantababy",
    linkedin: "https://www.linkedin.com/in/quantababy",
    email: "mailto:rajkantiwari1412@gmail.com",
    leetcode: "https://leetcode.com/prabhat_4884",
  },

  navigation: [
    { label: "Projects", href: "/#projects" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],
} as const;