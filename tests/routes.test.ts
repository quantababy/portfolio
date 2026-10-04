import { describe, expect, it } from "vitest";

import { generateStaticParams } from "@/app/projects/[slug]/page";

describe("project routes", () => {
  it("generates a route for every project", () => {
    const routes = generateStaticParams();

    expect(routes).toEqual(
      expect.arrayContaining([
        { slug: "aegis" },
        { slug: "minutesmeet" },
        { slug: "veritaschain" },
      ]),
    );

    expect(routes).toHaveLength(3);
  });

  it("generates routes with string slugs", () => {
    const routes = generateStaticParams();

    for (const route of routes) {
      expect(typeof route.slug).toBe("string");
      expect(route.slug.length).toBeGreaterThan(0);
    }
  });
});