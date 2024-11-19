import { Album, Project, ProjectTag, Technology } from "./types";

export const projects: Project[] = [
  {
    tags: ["Personal", "UI/UX", "Web App Development"],
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
    cloudinaryDir: "HyperSets",
    tech: ["React.js", "Next.js", "Supabase", "TypeScript", "TailwindCss", "Figma", "Trello"],
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
      title: "Digital Misinformation leads to poor decisions.",
      text: "",
    },
    solution: {
      title: "Fact check any information you come across",
      text: "Rivrb is combating digital misinformation so that everyone can make informed online decisions no matter where they find themselves on the internet. Rivrb provides fast, efficient fact-checking automation, ensuring the most accurate & credible information is presented to users when they’re assessing digital content.",
    },
    about: {
      title: "A Chrome Extension & Social Platform for Fact-Checking",
      text: "Rivrb is an AI & human-powered system that helps users quickly and accurately determine the credibility and accuracy of online information",
    },
    cloudinaryDir: "Rivrb",
    tech: ["React.js", "Firebase", "JavaScript", "TypeScript", "Expo", "Node.js", "GraphQL"],
  },
  {
    tags: ["Web App Development", "UI/UX"],
    launched: false,
    name: "Procurement",
    liveUrl: null,
    year: 2024,
    slug: "procurement",
    githubUrl: null,
    coverPhoto: "procurement.png",
    problem: {
      title: "Procurement processes are often complex & inefficient.",
      text: "Municipal procurement processes are often complex, inefficient, and burdened with administrative overhead. Municipal buyers face challenges such as; Regulatory Compliance, Administrative Burden, and a Lack of Transparency. Meanwhile Vendors strugle with their own issues, Overall, the lack of a unified, efficient system leads to delays, increased costs, and frustration for both municipal buyers and vendors.",
    },
    solution: {
      title: "provide a unified platform to streamlines the process.",
      text: "By automating administrative tasks, centralizing communication, and providing tools tailored to the needs of municipal buyers and vendors, the software significantly reduces inefficiencies. It ensures compliance, enhances transparency, and fosters better collaboration, ultimately transforming the municipal procurement process into a more efficient and user-friendly experience.",
    },
    about: {
      title: "Streamline the procurement process",
      text: "Procurement is a management platform specifically designed for municipal buyers and vendors. It serves as a centralized system that streamlines the entire procurement process within municipal governments. The platform offers tools for creating, managing, and auditing procurements, facilitating efficient communication between municipal procurement officers and vendors.",
    },
    cloudinaryDir: "Procurement",
    tech: ["React.js", "Next.js", "TypeScript", "TailwindCss", "Figma", "Trello", "PostgresSql", "Prisma"],
  },
  {
    tags: ["Web App Development", "UI/UX", "Personal"],
    launched: false,
    name: "Tribe",
    liveUrl: null,
    slug: "tribe",
    year: 2023,
    githubUrl: null,
    coverPhoto: "tribe.jpg",
    problem: {
      title: "The experince on Social media is too commercialized",
      text: "Platforms no longer feel as if they are for the common consumer to connect with friends but to consume content and gather data. It's isolating us more and more every day, just like back in 2020. Now, it’s starting to radicalize the population and spread dangerous ideas in an almost echo chamber like way.",
    },
    solution: {
      title: "Privatize the experince and keep the flame alive.",
      text: "Tribe allows users to create their own online space for the people that matter most. ",
    },
    about: {
      title: "Stay connected to those who matter, not the world.",
      text: "Offer users the ability to create private or public online spaces for their friends, just like Discord, except with the option to customize it with common utilities and social media features they use every day called widgets. It will also be meant for the everyday consumer, not just those familiar with the complexities of building something like a discord server or subreddit.",
    },
    cloudinaryDir: "Tribe",
    tech: ["React.js", "Next.js", "Notion", "TypeScript", "TailwindCss", "Figma", "PostgresSql", "Node.js"],
  },
  {
    tags: ["UI/UX"],
    launched: false,
    name: "Maze of life",
    liveUrl: null,
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
    cloudinaryDir: "MOL",
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

export const tagsList: ProjectTag[] = ["UI/UX", "Web App Development", "Upgrade/Migration", "Feature Integration", "Personal", "Mobile App Development"];

export const albumList: Album[] = ["Figma", "Screen Shots", "Documents", "Blog Posts"];

export const cloudinaryUrl = `https://${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}:${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`;