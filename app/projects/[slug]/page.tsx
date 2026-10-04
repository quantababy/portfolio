import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { mdxComponents } from "@/components/MDXContent";
import { getProject, getProjects } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article>
      {/* Project header */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:pt-20">
          <Link
            href="/#projects"
            className="font-mono text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            ← Back to projects
          </Link>

          <div className="mt-14 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                {project.status}
              </span>

              <span className="text-[var(--muted)]">·</span>

              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Case study
              </span>
            </div>

            <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              {project.summary}
            </p>

            {project.stack.length > 0 && (
              <ul className="mt-8 flex max-w-4xl flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-[var(--line)] px-3 py-1.5 font-mono text-xs text-[var(--muted)]"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            )}

            {(project.github || project.live) && (
              <div className="mt-9 flex flex-wrap gap-5 font-mono text-sm">
                {project.github &&
                  project.github !== "https://github.com/" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                    >
                      GitHub ↗
                    </a>
                  )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                  >
                    Live demo ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <div className="max-w-5xl">
            <MDXRemote
              source={project.content}
              components={mdxComponents}
            />
          </div>
        </div>
      </section>

      {/* Back navigation */}
      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <Link
            href="/#projects"
            className="font-mono text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            ← Back to projects
          </Link>
        </div>
      </section>
    </article>
  );
}