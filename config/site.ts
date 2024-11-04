export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Calendar Wallpaper",
  description:
    "Generate a wallpaper with a calendar for your desktop or phone.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
