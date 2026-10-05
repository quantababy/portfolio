import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5">
        <Link
          href="/"
          className="shrink-0 font-mono text-sm font-semibold tracking-tight"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Main navigation" className="min-w-0">
          <ul className="flex items-center justify-end gap-3 font-mono text-xs text-[var(--muted)] sm:gap-5 sm:text-sm">
            {siteConfig.navigation.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[var(--foreground)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}