import { describe, expect, it } from "vitest";

import { getProject, getProjects } from "@/lib/content";

describe("project content", () => {
  it("loads all portfolio projects", () => {
    const projects = getProjects();

    expect(projects.length).toBeGreaterThan(0);
  });

  it("loads the AEGIS project", () => {
    const project = getProject("aegis");

    expect(project).toBeDefined();
    expect(project?.title).toBe("AEGIS");
    expect(project?.status).toBe("In progress");
  });

  it("loads the MinutesMeet project", () => {
    const project = getProject("minutesmeet");

    expect(project).toBeDefined();
    expect(project?.title).toBe("MinutesMeet");
    expect(project?.status).toBe("Completed");
  });

  it("loads the VeritasChain project", () => {
    const project = getProject("veritaschain");

    expect(project).toBeDefined();
    expect(project?.title).toBe("VeritasChain");
    expect(project?.status).toBe("Completed");
  });

  it("returns undefined for a project that does not exist", () => {
    const project = getProject("does-not-exist");

    expect(project).toBeUndefined();
  });
});