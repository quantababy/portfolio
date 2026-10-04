import Link from "next/link";

import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border-t border-[var(--line)] py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <div className="mb-2 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              {project.status}
            </span>
          </div>

          <h3 className="font-[family-name:var(--font-display)] text-2xl">
            {project.title}
          </h3>

          <p className="mt-2 leading-7 text-[var(--muted)]">
            {project.summary}
          </p>

          {project.stack.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-xs"
                >
                  {technology}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="shrink-0 font-mono text-sm underline decoration-[var(--line)] underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
        >
          Case study →
        </Link>
      </div>
    </article>
  );
}