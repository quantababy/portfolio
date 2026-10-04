import Link from "next/link";

import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const projects = getProjects();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-20 sm:pt-28">
        <div className="max-w-4xl">
          <p className="font-mono text-sm text-[var(--muted)]">
            {siteConfig.role} · {siteConfig.location}
          </p>

          <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            I build software that solves real problems.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I&apos;m interested in practical systems across AI, backend
            engineering, web development, and the engineering decisions that
            make software reliable.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="rounded-md bg-[var(--foreground)] px-5 py-3 text-sm font-medium !text-[var(--background)] transition-opacity hover:opacity-80"
            >
              View projects
            </Link>

            <Link
              href="/resume"
              className="rounded-md border border-[var(--line)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--foreground)]"
            >
              Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-y border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              Selected work
            </p>

            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl">
              Projects
            </h2>
          </div>

          <div>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering receipts */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              Evidence
            </p>

            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl">
              Engineering receipts
            </h2>
          </div>

          <div className="max-w-2xl space-y-6 text-[var(--muted)]">
            <p>
              I prefer showing what I built, how it works, what went wrong, and
              why I made specific engineering decisions.
            </p>

            <p>
              Project case studies document architecture, trade-offs,
              implementation details, results, and problems encountered along
              the way.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              About
            </p>

            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl">
              Building depth, not just demos.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              I&apos;m focused on becoming a stronger software engineer by
              understanding systems from fundamentals through implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              Contact
            </p>

            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
              Let&apos;s build something useful.
            </h2>
          </div>

          <div className="flex gap-5 font-mono text-sm">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent)]"
            >
              GitHub
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>

            <a
              href={siteConfig.links.email}
              className="hover:text-[var(--accent)]"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}