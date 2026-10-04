export const siteConfig = {
  name: "Prabhat Tiwari",
  description:
    "Portfolio of Prabhat Tiwari, a software engineer building practical systems across AI, web development, and backend engineering.",
  url: "http://localhost:3000",

  role: "Software Engineer",
  location: "India",

  links: {
    github: "https://github.com/quantababy",
    linkedin: "https://www.linkedin.com/in/quantababy",
    email: "mailto:rajkantiwari1412@gmail.com",
  },

  navigation: [
    { label: "Projects", href: "/#projects" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ],
} as const;