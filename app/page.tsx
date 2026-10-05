import Link from "next/link";

import { ProjectCard } from "@/components/ProjectCard";
import { getProjects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const projects = getProjects();

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-20 sm:pb-28 sm:pt-28">
        <div className="max-w-4xl">
          <p className="font-mono text-sm text-[var(--muted)]">
            {siteConfig.role} · {siteConfig.location}
          </p>

          <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            I build AI-powered software systems, from machine learning
            pipelines to backend and web applications.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            I&apos;m focused on AI/ML, backend engineering, web development,
            and the engineering decisions that turn ideas into practical
            software.
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
              View resume
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-[var(--muted)]">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              GitHub ↗
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              LinkedIn ↗
            </a>

            <a
              href={siteConfig.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              LeetCode ↗
            </a>
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

          <div className="flex flex-wrap gap-5 font-mono text-sm">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--accent)]"
            >
              GitHub
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>

            <a
              href={siteConfig.links.email}
              className="transition-colors hover:text-[var(--accent)]"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}