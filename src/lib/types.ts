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
  screenshotDir: string | null,
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

// Gallery

export type MasonGalleryImage = {
  uri: string,
  alt: string,
};

/**
 * Options to customize the mason gallery.
 */
export type FlexMasonryOptions = {
  /** 
   * (Optional) Fixed number of columns displayed in the gallery. 
   * Only applies if `responsive` is set to false.
   * 
   * Defaults to 4 if no number is provided.
   **/
  numCols?: number,
  /**
   * Determines whether the gallery will be responsive or not.
   * If false it will use the number provided in `numCols`,
   * other wise it will use the values provided to  `breakpointCols`.
   * 
   * Default value is `true`
   * */
  responsive?: boolean,
  /**
   * Number of columns displayed at different css breakpoints.
   * Default value by px:
   * 
   * ```
   * breakpointCols: {
   *  '1500': 6,
   *  '1200': 5,
   *  '992': 4,
   *  '768': 3,
   *  '576': 2,
   * }
   * ```
   */
  breakpointCols?: BreakPointCols,
};

export type BreakPointCols = {
  1500: number,
  1200: number,
  992: number,
  768: number,
  576: number,
};