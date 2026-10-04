import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-5 py-20">
      <div className="max-w-3xl">
        <p className="font-mono text-sm text-[var(--muted)]">
          404 · Page not found
        </p>

        <h1 className="mt-6 font-[family-name:var(--font-display)] text-6xl leading-none tracking-tight sm:text-8xl">
          This page doesn&apos;t exist.
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">
          The page you&apos;re looking for may have moved, been removed, or
          never existed.
        </p>

        <div className="mt-9">
          <Link
            href="/"
            className="inline-flex rounded-md bg-[var(--foreground)] px-5 py-3 text-sm font-medium !text-[var(--background)] transition-opacity hover:opacity-80"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}