export type Album = "Figma" | "Screen Shots" | "Documents" | "Blog Posts"

export type Technology =
  "Next.js" |
  "TypeScript" |
  "JavaScript" |
  "React.js" |
  "PostgresSql" |
  "TailwindCss" |
  "Supabase" |
  "Rust" |
  "Node.js" |
  "Figma" |
  "Notion" |
  "Trello" |
  "Expo" |
  "GraphQL" |
  "Prisma" |
  "Firebase";

export type techIconSize = "default" | "small" | "large" | "about";

// Projects Data
export type Albums = {
  [x in Album]: string[] | null;
};

export type OptionalURL = string | null;

export type ProjectTag = "UI/UX" | "Web App Development" | "Upgrade/Migration" | "Feature Integration" | "Personal" | "Mobile App Development";

export type Project = {
  name: string,
  slug: string,
  year: number,
  liveUrl: OptionalURL,
  githubUrl: OptionalURL,
  coverPhoto: string,
  problem: ProjectSection,
  solution: ProjectSection,
  about: ProjectSection,
  launched: boolean,
  tags: ProjectTag[],
  tech: Technology[],
  cloudinaryDir: string | null,
}

// export type GroupedProjects = {
//   year: string,
//   projects: Project[],
// }

export type ProjectSection = {
  // image: string,
  // pageImage: string,
  title: string,
  text: string,
};

/* Cloudinary Types */

/* Response from utilizing the resources api */
export type CloudinaryResourcesRes = {
  resources: CloudinaryResource[]
}

/* Resources API resource object */
export type CloudinaryResource = {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  asset_folder: string;
  display_name: string;
  url: string;
  secure_url: string
};