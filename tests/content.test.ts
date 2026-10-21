import { describe, expect, it } from "vitest";
import { getProject, getProjects } from "@/lib/content";

describe("project content", () => {
  it("loads all portfolio projects", () => {
    const projects = getProjects();

    expect(projects).toHaveLength(3);
  });

  it("loads the AEGIS project", () => {
    const project = getProject("aegis");

    expect(project).toBeDefined();
    expect(project?.title).toBe("AEGIS");
    expect(project?.status).toBe("In progress");
  });

  it("loads the VolatilityForge project", () => {
    const project = getProject("volatilityforge");

    expect(project).toBeDefined();
    expect(project?.title).toBe("VolatilityForge");
    expect(project?.status).toBe("Completed");
    expect(project?.github).toBe(
      "https://github.com/quantababy/VolatilityForge",
    );
  });

  it("loads the VeritasChain project", () => {
    const project = getProject("veritaschain");

    expect(project).toBeDefined();
    expect(project?.title).toBe("VeritasChain");
    expect(project?.status).toBe("Completed");
  });

  it("returns undefined for a project that does not exist", () => {
    expect(getProject("nonexistent")).toBeUndefined();
  });
});
