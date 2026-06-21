import { Mail } from "lucide-react";

const NavMenuItems = [
  {
    name: "victoryndukwu7@gmail.com",
    link: "/",
    icon: Mail,
  },
  // {
  //   name: "Work",
  //   link: "/work",
  // },
];

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
];

const articles = [
  {
    title: "A Practical Guide to Role-Based Permissions in React",
    date: "June 28, 2025",
    url: "/articles/scalable-web-apps-react-nextjs",
    duration: "4 min read",
  },
  {
    title: "Optimizing Frontend Performance: Tips and Techniques",
    date: "May 10, 2023",
    url: "/articles/optimizing-frontend-performance",
    duration: "7 min read",
  },
];

export { NavMenuItems, projects, articles };
