// Project Entity Types
export type ProjectEntities = {
  default: Project,
  card: ProjectCard,
};

export type Project = {
  id?: number,
  name: ProjectNames,
  slug: string,
  category: ProjectCategory,
  cover_image: string,
  description: string,
  live_url: string,
  github_url: string,
  created_on: string,
  youtube_url: string,
  problem_title: string,
  problem_description: string,
  solution_title: string,
  solution_description: string,
}

export type ProjectCard = Pick<Project, 'category' | 'cover_image' | 'name' | 'slug' | 'created_on'>;

// Project Helper types
export type ProjectCategory = "App Development"
export type ProjectNames = "tribe" | "hypersets";

// General custom types
export type TableColumns<T> = keyof T | (keyof T)[] | '*';
export type TableNames = "projects" | "images";
export type TableOptions<T> = {
  eq?: {
    field: TableColumns<T>,
    value: string | number,
  }[],
  order?: {
    field: TableColumns<T>,
    dir: "ASC" | "DESC"
  },
  limit?: number
};