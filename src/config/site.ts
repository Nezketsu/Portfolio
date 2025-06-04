export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "G. Caseaux",
  description: "Personal portfolio showcasing my projects and skills.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    }
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    }
  ],
  links: {
    github: "https://github.com/Nezketsu",
    linkedin: "https://linkedin.com/in/caseaux-gregoire-882809299/",
    email: "mailto:greg.caseaux@gmail.com",
  },
};
