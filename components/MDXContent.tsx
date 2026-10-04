import Image from "next/image";
import type { MDXComponents } from "mdx/types";

function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="mt-10 overflow-hidden rounded-lg border border-[var(--line)]">
      <Image
        src={src}
        alt={alt}
        width={1646}
        height={923}
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="h-auto w-full"
      />
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-20 border-t border-[var(--line)] pt-8 font-[family-name:var(--font-display)] text-3xl leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="mt-12 font-[family-name:var(--font-display)] text-2xl leading-tight text-[var(--foreground)]">
      {children}
    </h3>
  ),

  p: ({ children }) => (
    <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
      {children}
    </p>
  ),

  ul: ({ children }) => (
    <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-6 text-[var(--muted)] marker:text-[var(--accent)]">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="mt-6 max-w-3xl list-decimal space-y-3 pl-6 text-[var(--muted)] marker:font-mono marker:text-[var(--accent)]">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="pl-2 leading-7">{children}</li>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-[var(--foreground)]">
      {children}
    </strong>
  ),

  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[var(--accent)] underline decoration-[var(--line)] underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
    >
      {children}
    </a>
  ),

  blockquote: ({ children }) => (
    <blockquote className="mt-8 max-w-3xl border-l-2 border-[var(--accent)] pl-5 text-[var(--muted)]">
      {children}
    </blockquote>
  ),

  code: ({ children }) => (
    <code className="rounded border border-[var(--line)] bg-[var(--background)] px-1.5 py-0.5 font-mono text-sm text-[var(--foreground)]">
      {children}
    </code>
  ),

  pre: ({ children }) => (
    <pre className="mt-8 max-w-5xl overflow-x-auto rounded-md border border-[var(--line)] p-5 font-mono text-sm leading-7 text-[var(--foreground)]">
      {children}
    </pre>
  ),

  ProjectImage,
};