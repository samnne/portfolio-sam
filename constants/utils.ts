import { ProjectCards, jobs } from "./constants.ts";

export type SkillUsage = {
  name: string;
  kind: "project" | "work";
  href: string;
};

// Skill names in Skills.tsx -> other spellings used in your project `code` / job `tags`
const aliases: Record<string, string[]> = {
  "React JS": ["React"],
  Nextjs: ["Next.js"],
  Express: ["Express.js"],
  Tailwind: ["Tailwind CSS"],
  "Gemini API": ["Google Gemini"],
  Python: ["Python 3"],
  GitHub: ["Git"],
  SQL: ["SQL Server"],
};

// For skills you used somewhere that the tag arrays don't list.
// Keys are skill names, values are project names or company names.
const extraUsage: Record<string, string[]> = {
  TypeScript: ["uEyes"],
  Zustand: ["Aeternum"],
};

const norm = (s: string) => s.toLowerCase();

export const getSkillUsage = (skill: string): SkillUsage[] => {
  const names = [skill, ...(aliases[skill] ?? [])].map(norm);
  const extras = (extraUsage[skill] ?? []).map(norm);

  const matches = (label: string, tags: string[]) =>
    extras.includes(norm(label)) || tags.some((t) => names.includes(norm(t)));

  const work: SkillUsage[] = jobs
    .filter((j) => matches(j.company, j.tags))
    .map((j) => ({ name: j.company, kind: "work", href: "#we" }));

  const projects: SkillUsage[] = ProjectCards.filter((p) =>
    matches(p.name, p.code),
  ).map((p) => ({ name: p.name, kind: "project", href: "#projects" }));

  return [...work, ...projects];
};
