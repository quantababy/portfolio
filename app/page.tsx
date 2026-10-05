import Link from "next/link";

import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const projects = getProjects();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-28 pt-20 sm:pb-32 sm:pt-28 lg:pb-36 lg:pt-32">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:text-sm">
            <span>{siteConfig.role}</span>
            <span aria-hidden="true">·</span>
            <span>{siteConfig.location}</span>
          </div>

          <h1 className="mt-7 max-w-5xl font-[family-name:var(--font-display)] text-5xl leading-[1.02] tracking-tight sm:mt-8 sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            I build AI-powered software systems, from machine learning
            pipelines to backend and web applications.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:mt-9 sm:text-xl">
            I&apos;m focused on AI/ML, backend engineering, web development,
            and the engineering decisions that turn ideas into practical
            software.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
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
              View resume
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-y border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mb-10 grid gap-5 md:grid-cols-[1fr_2fr] md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                Selected work
              </p>

              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl">
                Projects
              </h2>
            </div>

            <p className="max-w-2xl text-[var(--muted)]">
              Projects covering AI/ML pipelines, software systems, backend
              engineering, and web applications. Each case study documents
              implementation details and engineering decisions.
            </p>
          </div>

          <div>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering evidence */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-20">
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
                I prefer showing the work behind a project rather than only
                presenting the final interface.
              </p>

              <p>
                My case studies document architecture, implementation choices,
                trade-offs, problems encountered, and the next improvements I
                would make.
              </p>

              <p>
                Source code is linked directly where available so the
                implementation can be inspected rather than taken on trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                About
              </p>

              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl">
                Building depth, not just demos.
              </h2>
            </div>

            <div className="max-w-2xl space-y-6 text-[var(--muted)]">
              <p>
                I&apos;m a software engineer interested in understanding
                systems from fundamentals through implementation.
              </p>

              <p>
                My current work spans machine learning, AI systems, backend
                development, web applications, and the data structures and
                algorithms that support them.
              </p>

              <p>
                I&apos;m looking for opportunities where I can contribute to
                real software, learn from experienced engineers, and continue
                developing strong engineering fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              Contact
            </p>

            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl">
              Let&apos;s build something useful.
            </h2>
          </div>

          <div className="flex items-center gap-5">
            {/* GitHub */}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.02c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17A10.94 10.94 0 0 1 12 6.12c.97 0 1.94.13 2.85.38 2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.41-2.7 5.39-5.27 5.67.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM2.75 9.5h4.5V21h-4.5V9.5ZM9.5 9.5h4.31v1.57h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V21h-4.5v-4.77c0-1.14-.02-2.61-1.59-2.61-1.59 0-1.83 1.24-1.83 2.53V21H11.1V9.5H9.5Z" />
              </svg>
            </a>

            {/* LeetCode */}
            <a
              href={siteConfig.links.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              title="LeetCode"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d="M13.48 1.75a1.25 1.25 0 0 0-1.77 1.77l1.44 1.44-7.9 7.9a4.5 4.5 0 0 0 0 6.36l.56.56a4.5 4.5 0 0 0 6.36 0l7.9-7.9 1.44 1.44a1.25 1.25 0 0 0 1.77-1.77L13.48 1.75ZM10.4 18.02a2 2 0 0 1-2.83 0l-.56-.56a2 2 0 0 1 0-2.83l7.9-7.9 3.39 3.39-7.9 7.9ZM14.1 15.35a1.25 1.25 0 0 0 0-2.5h-3.5a1.25 1.25 0 0 0 0 2.5h3.5Z" />
              </svg>
            </a>

            {/* Email */}
            <a
                href={siteConfig.links.email}
                aria-label="Email"
                title="Email"
                className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
          </div>
        </div>
      </section>
    </>
  );
}