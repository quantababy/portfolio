import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="max-w-3xl">
          <p className="mb-5 font-mono text-sm text-[var(--accent)]">
            {siteConfig.role} · {siteConfig.location}
          </p>

          <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            I build software that solves real problems.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            I work across AI, backend systems, and web development, with a
            focus on building useful products and understanding the engineering
            behind them.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:-translate-y-0.5"
            >
              View projects
            </Link>

            <Link
              href="/resume"
              className="rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--foreground)]"
            >
              Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-[var(--line)]"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Selected work
            </p>

            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              Projects
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-[var(--line)] p-6">
              <p className="font-mono text-xs text-[var(--accent)]">
                PROJECT 01
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Project coming soon
              </h3>

              <p className="mt-3 leading-7 text-[var(--muted)]">
                A detailed engineering case study will go here, including
                architecture, technical decisions, results, and what broke.
              </p>
            </article>

            <article className="rounded-2xl border border-[var(--line)] p-6">
              <p className="font-mono text-xs text-[var(--accent)]">
                PROJECT 02
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Project coming soon
              </h3>

              <p className="mt-3 leading-7 text-[var(--muted)]">
                Another real project with links to the repository, demo, and
                supporting evidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              About
            </p>

            <div className="max-w-2xl">
              <p className="text-xl leading-8">
                I&apos;m interested in software engineering, artificial
                intelligence, backend systems, and building products that are
                technically sound and useful.
              </p>

              <p className="mt-5 leading-7 text-[var(--muted)]">
                More about my background, current work, and the roles I&apos;m
                looking for will live here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-3 px-5 py-10 font-mono text-sm">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent)]"
          >
            GitHub ↗
          </a>

          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--accent)]"
          >
            LinkedIn ↗
          </a>

          <a
            href={siteConfig.links.email}
            className="hover:text-[var(--accent)]"
          >
            Email ↗
          </a>
        </div>
      </section>
    </div>
  );
}