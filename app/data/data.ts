const NavMenuItems = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "WORK",
    link: "/work",
  },
] as const;

const projects = [
  {
    name: "Paydeet",
    url: "https://www.paydeet.com/",
    description: "Open banking platform",
    imgUrl: "/paydeet.png",
  },
  {
    name: "Rever",
    url: "https://justrever.com/",
    description: "Open banking platform",
    imgUrl: "/rever.png",

  },
  {
    name: "My Portfolio v1",
    url: "/",
    description: "Victory's Personal Website",
    imgUrl: "/victory.png",

  },
] as const;

export { NavMenuItems, projects };
