import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-5 font-mono text-sm text-[var(--muted)]">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
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