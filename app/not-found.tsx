import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-5 py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--accent)]">
          404 · Not found
        </p>

        <h1 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[1.05] tracking-tight sm:text-6xl">
          This page doesn&apos;t exist.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
          The page you&apos;re looking for may have been moved, renamed, or
          never existed.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-md bg-[var(--foreground)] px-5 py-3 text-sm font-medium !text-[var(--background)] transition-opacity hover:opacity-80"
          >
            Back home
          </Link>

          <Link
            href="/#projects"
            className="rounded-md border border-[var(--line)] px-5 py-3 text-sm font-medium transition-colors hover:border-[var(--foreground)]"
          >
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}