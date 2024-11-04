import { Album, Project, ProjectTag } from "./types";

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
  },
  {
    tags: ["App Development", "UI/UX"],
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
  },
  {
    tags: ["Upgrade/Migration", "Feature Integration"],
    launched: false,
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
  },

  {
    tags: ["UI/UX"],
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
  },
];

export const tagsList: ProjectTag[] = ["UI/UX", "App Development", "Upgrade/Migration", "Feature Integration", "Personal"];

export const albumList: Album[] = ["Figma", "Screen Shots", "Documents", "Blog Posts"];