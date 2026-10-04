import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export type ProjectFrontmatter = {
  title: string;
  summary: string;
  status: "In progress" | "Completed";
  stack: string[];
  github?: string;
  live?: string;
};

export type Project = ProjectFrontmatter & {
  slug: string;
  content: string;
};

function getProjectFiles() {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"));
}

export function getProjects(): Project[] {
  return getProjectFiles().map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(PROJECTS_DIR, file);
    const source = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(source);

    return {
      slug,
      ...(data as ProjectFrontmatter),
      content,
    };
  });
}

export function getProject(slug: string): Project | undefined {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    ...(data as ProjectFrontmatter),
    content,
  };
}