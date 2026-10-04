import { describe, expect, it } from "vitest";

import { siteConfig } from "@/lib/site";

describe("site configuration", () => {
  it("contains the correct site identity", () => {
    expect(siteConfig.name).toBe("Prabhat Tiwari");
    expect(siteConfig.role).toBe("Software Engineer");
    expect(siteConfig.location).toBe("India");
  });

  it("contains the required navigation routes", () => {
    expect(siteConfig.navigation).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          label: "Projects",
          href: "/#projects",
        }),
        expect.objectContaining({
          label: "Resume",
          href: "/resume",
        }),
        expect.objectContaining({
          label: "Contact",
          href: "/contact",
        }),
      ]),
    );
  });

  it("contains valid external profile links", () => {
    expect(siteConfig.links.github).toMatch(/^https:\/\//);
    expect(siteConfig.links.linkedin).toMatch(/^https:\/\//);
    expect(siteConfig.links.leetcode).toMatch(/^https:\/\//);
    expect(siteConfig.links.email).toMatch(/^mailto:/);
  });
});