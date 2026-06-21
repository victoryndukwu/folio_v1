const contactEmail = "victoryndukwu7@gmail.com";

const NavMenuItems = [
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "About",
    link: "/about",
  },
];

const projects = [
  {
    name: "Konga Search Service (KSS)",
    url: "https://kss.konga.com/",
    description:
      "Internal search indexing platform built to replace Algolia and improve product discovery across Konga's ecommerce ecosystem. I led the frontend implementation, building a fast, responsive search experience with debounced queries, cached results, ranking visibility, and scalable UI patterns using React, TypeScript, and modern state management Impact: Reduced yearly third-party search subscription costs by $77,000 while improving ownership, flexibility, and control over the search experience.",
    imgUrl: "/kss.png",
  },
  {
    name: "Konga E-commerce platform",
    url: "https://www.konga.com/",
    description:
      "Konga is a Nigerian ecommerce platform with hundreds of thousands of users and sellers.",
    imgUrl: "/konga.png",
  },
  {
    name: "Paydeet",
    url: "https://www.paydeet.com/",
    description:
      "Open banking product experience focused on secure financial flows, responsive onboarding, and clear customer-facing interfaces.",
    imgUrl: "/paydeet.png",
  },
  {
    name: "Rever",
    url: "https://justrever.com/",
    description:
      "Fintech web platform shaped around fast navigation, polished product storytelling, and dependable frontend implementation.",
    imgUrl: "/rever.png",
  },
  {
    name: "Lifteller",
    url: "https://www.lifteller.com/",
    description:
      "Lifteller is a new social platform built with the mission of bringing compassion back to social networking. We believe in creating a safe, inclusive space where meaningful connections thrive, and where users can support one another.",
    imgUrl: "/lifteller.png",
  },
  {
    name: "Konga Radio",
    url: "https://www.kongafm.com/",
    description:
      "Konga Radio is a digital radio platform built to deliver smooth online audio streaming and engaging media experiences. I worked on the frontend implementation using Next.js and SCSS, focusing on a clean interface, responsive layout, and a seamless listening experience across devices.",
    imgUrl: "/konga-radio.png",
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

export { NavMenuItems, projects, articles, contactEmail };
