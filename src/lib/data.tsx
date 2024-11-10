import { Album, Project, ProjectTag, Technology } from "./types";

export const projects: Project[] = [
  {
    tags: ["Personal", "UI/UX", "App Development"],
    launched: true,
    name: "HyperSets",
    liveUrl: "hyper-sets.com",
    year: 2024,
    githubUrl: "https://github.com/anthonyg56/HyperSets",
    coverPhoto: "hypersets.jpg",
    slug: "hypersets",
    about: {
      title: "An online platform for the HyperX community.",
      text: "HyperSets is a place for the community to store, discover, and illuminate their pc's peripheral setup. It offers a wide array of custom NGenuity profiles for members to enhance their environment through a combination of visual effects for ambient RGB lighting and key binding macros for games or work. Along with a library of 50+ games to choose from that aligns with its aesthetics.",
    },
    problem: {
      title: "Finding custom presets is a hassel.",
      text: "There are talented people creating cool profiles, but dont have a platform to share it on. Unless they are capable of building a website to host their presets; chances are it would get uploaded on a public form like reddit and lost within the sea of content. Thus making it a hassel to explore alternatives outside of what the manufacture provides since alot of custom profiles are scattered on the web.",
    },
    solution: {
      title: "Provide a 3rd party platform for users.",
      text: "My theory was if users had a central platform to upload, share, and download custom NGenuity RGB profiles; along with an incentive of getting paid per download of their preset. Not only would this help organize profiles on the web, the number of profiles availables would increase as well.",
    },
    screenshotDir: "/HyperSets",
    tech: ["Next.js", "Supabase", "TypeScript", "TailwindCss", "Figma", "Trello"],
  },
  {
    tags: ["Upgrade/Migration", "Feature Integration", "Mobile App Development"],
    launched: true,
    name: "Rivrb",
    liveUrl: "https://rivrb.com/",
    slug: "rivrb",
    year: 2024,
    githubUrl: null,
    coverPhoto: "rivrb.png",
    problem: {
      title: "",
      text: "",
    },
    solution: {
      title: "",
      text: "",
    },
    about: {
      title: "A Chrome Extension for Fact-Checking",
      text: "Rivrb is an AI & human-powered system that helps users quickly and accurately determine the credibility and accuracy of online information",
    },
    screenshotDir: null,
    tech: ["Firebase", "JavaScript", "TypeScript", "Expo", "Node.js", "GraphQL"],
  },
  {
    tags: ["App Development", "UI/UX", "Personal"],
    launched: false,
    name: "Tribe",
    liveUrl: null,
    slug: "tribe",
    year: 2024,
    githubUrl: null,
    coverPhoto: "tribe.jpg",
    problem: {
      title: "Theres too much smoke on social media.",
      text: "",
    },
    solution: {
      title: "Privatize the experince and keep the flame alive.",
      text: "",
    },
    about: {
      title: "Stay connected to those who matter, not the world.",
      text: "Tribe is a social media platform for exclusive social groups centered around a shared passion, interest, or general commonalities. Its mission is to help cultivate an online environment that empowers users to enjoy the content they love with those who matter most.",
    },
    screenshotDir: "/Tribe",
    tech: ["Next.js", "Notion", "TypeScript", "TailwindCss", "Figma", "PostgresSql", "Node.js"],
  },
  {
    tags: ["App Development", "UI/UX"],
    launched: false,
    name: "Procurement",
    liveUrl: null,
    year: 2024,
    slug: "procurement",
    githubUrl: null,
    coverPhoto: "procurement.png",
    problem: {
      title: "",
      text: "",
    },
    solution: {
      title: "",
      text: "",
    },
    about: {
      title: "Streamline the procurement process",
      text: "streamline the procurement process for Municipal Buyers and Vendors, making it more efficient and transparent.",
    },
    screenshotDir: "/Procurement",
    tech: ["Next.js", "TypeScript", "TailwindCss", "Figma", "Trello", "PostgresSql", "Prisma"],
  },

  {
    tags: ["UI/UX", "Mobile App Development"],
    launched: false,
    name: "Maze of life",
    liveUrl: "hyper-sets.com",
    year: 2024,
    slug: "maze-of-life",
    githubUrl: null,
    coverPhoto: "mol2.png",
    problem: {
      title: "",
      text: "",
    },
    solution: {
      title: "",
      text: "",
    },
    about: {
      title: "",
      text: "",
    },
    screenshotDir: "/MOL",
    tech: ["Figma", "Notion",],
  },
];

export const techImages: {
  title: Technology,
  logo: string,
}[] = [
    {
      title: "Next.js",
      logo: "https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png",
    },
    {
      title: "TypeScript",
      logo: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_plain_logo_icon_146316.png",
    },
    {
      title: "JavaScript",
      logo: "https://www.computerhope.com/jargon/j/javascript.png",
    },
    {
      title: "React.js",
      logo: "https://th.bing.com/th/id/OIP.cPh7ujRIfcHAy4kW2ADGOwHaHa?rs=1&pid=ImgDetMain",
    },
    {
      title: "Node.js",
      logo: "https://api.qspiders.com/media/course_images/node-js_a3KAOmA.png",
    },
    {
      title: "PostgresSql",
      logo: "https://th.bing.com/th/id/OIP.6pLWWA3aD7z2GozLFuDQKgHaHp?rs=1&pid=ImgDetMain",
    },
    {
      title: "TailwindCss",
      logo: "https://th.bing.com/th/id/OIP.4MLiXSkY-1i2fgt0gR6aowAAAA?rs=1&pid=ImgDetMain",
    },
    {
      title: "Supabase",
      logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
    },
    // TODO: Find images for these
    {
      title: "Expo",
      logo: "https://www.svgrepo.com/show/341805/expo.svg",
    },
    {
      title: "Figma",
      logo: "https://www.svgrepo.com/show/452202/figma.svg",
    },
    {
      title: "Firebase",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTerSDuBwLDF0OambAqG1BoM0wsuBo56J1NyQ&s",
    },
    {
      title: "Rust",
      logo: "https://miro.medium.com/max/1200/1*lmv2kXnZ9qsUGkrPz__QsQ.png",
    },
    {
      title: "Trello",
      logo: "https://w7.pngwing.com/pngs/19/732/png-transparent-trello-plain-logo-icon.png",
    },
    {
      title: "Supabase",
      logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
    },
    {
      title: "Prisma",
      logo: "https://w7.pngwing.com/pngs/130/82/png-transparent-prisma-hd-logo-thumbnail.png",
    },
    {
      title: "GraphQL",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRGCJ3FZ9AqMTYe0iYxXBl2Bb38pUfvDVvpg&s",
    },
    {
      title: "Notion",
      logo: "https://static-00.iconduck.com/assets.00/notion-icon-982x1024-3j64xohd.png",
    },
  ]

export const technologiesList: Technology[] = ["Expo", "Figma", "GraphQL", "JavaScript", "Next.js", "Node.js", "Notion", "PostgresSql", "Prisma", "React.js", "Rust", "Supabase", "TailwindCss", "Trello", "TypeScript"];

export const tagsList: ProjectTag[] = ["UI/UX", "App Development", "Upgrade/Migration", "Feature Integration", "Personal", "Mobile App Development"];

export const albumList: Album[] = ["Figma", "Screen Shots", "Documents", "Blog Posts"];