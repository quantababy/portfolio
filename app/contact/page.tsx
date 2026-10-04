import Link from "next/link";

import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Contact Prabhat Tiwari.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 pt-16 sm:pt-24">
      <div className="max-w-3xl">
        <Link
          href="/"
          className="font-mono text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
        >
          ← Back home
        </Link>

        <p className="mt-12 font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
          Contact
        </p>

        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-tight tracking-tight sm:text-6xl">
          Let&apos;s talk.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          I&apos;m open to software engineering internships, technical
          collaborations, and conversations about interesting engineering
          problems.
        </p>

        <div className="mt-12 border-t border-[var(--line)]">
          <a
            href={siteConfig.links.email}
            className="flex items-center justify-between border-b border-[var(--line)] py-6 transition-colors hover:text-[var(--accent)]"
          >
            <span>
              <span className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                Email
              </span>

              <span className="mt-2 block text-lg">
                rajkantiwari1412@gmail.com
              </span>
            </span>

            <span className="font-mono text-sm">↗</span>
          </a>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-b border-[var(--line)] py-6 transition-colors hover:text-[var(--accent)]"
          >
            <span>
              <span className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                GitHub
              </span>

              <span className="mt-2 block text-lg">
                View GitHub profile
              </span>
            </span>

            <span className="font-mono text-sm">↗</span>
          </a>

          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-b border-[var(--line)] py-6 transition-colors hover:text-[var(--accent)]"
          >
            <span>
              <span className="block font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                LinkedIn
              </span>

              <span className="mt-2 block text-lg">
                Connect on LinkedIn
              </span>
            </span>

            <span className="font-mono text-sm">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}