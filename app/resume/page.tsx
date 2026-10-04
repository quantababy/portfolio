import Link from "next/link";

export const metadata = {
  title: "Resume",
  description: "Resume of Prabhat Tiwari, software engineer.",
};

export default function ResumePage() {
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
          Resume
        </p>

        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-tight tracking-tight sm:text-6xl">
          Prabhat Tiwari
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Software engineer focused on AI, backend engineering, web
          development, and practical systems.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[var(--foreground)] px-5 py-3 text-sm font-medium !text-[var(--background)] transition-opacity hover:opacity-80"
          >
            Open PDF
          </a>

          <a
            href="/resume.pdf"
            download
            className="rounded-md border border-[var(--line)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--foreground)]"
          >
            Download PDF
          </a>
        </div>
      </div>

      <div className="mt-16 border-t border-[var(--line)] pt-10">
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
          Resume
        </p>

        <div className="mt-6 aspect-[8.5/11] w-full overflow-hidden border border-[var(--line)] bg-[var(--background)]">
          <iframe
            src="/resume.pdf"
            title="Prabhat Tiwari resume"
            className="h-full min-h-[900px] w-full"
          />
        </div>
      </div>
    </section>
  );
}