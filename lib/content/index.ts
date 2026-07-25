import { foundationsConcepts } from "./foundations";
import { financeConcepts } from "./finance";
import { personalFinanceConcepts } from "./personal-finance";
import { accountingConcepts } from "./accounting";
import { taxationConcepts } from "./taxation";
import { calculators } from "./calculators";
import { glossaryTerms, slugifyTerm } from "./glossary";
import type { Pillar } from "@/lib/types";

export interface SearchEntry {
  title: string;
  summary: string;
  href: string;
  pillar: Pillar | "calculators" | "glossary";
}

function conceptsToEntries(
  concepts: Record<string, { title: string; summary: string; slug: string }>,
  pillar: Pillar
): SearchEntry[] {
  return Object.values(concepts).map((c) => ({
    title: c.title,
    summary: c.summary,
    href: `/${pillar}/${c.slug}`,
    pillar,
  }));
}

export const searchIndex: SearchEntry[] = [
  ...conceptsToEntries(foundationsConcepts, "foundations"),
  ...conceptsToEntries(financeConcepts, "finance"),
  ...conceptsToEntries(personalFinanceConcepts, "personal-finance"),
  ...conceptsToEntries(accountingConcepts, "accounting"),
  ...conceptsToEntries(taxationConcepts, "taxation"),
  ...Object.values(calculators).map((c) => ({
    title: c.title,
    summary: c.summary,
    href: `/calculators/${c.slug}`,
    pillar: "calculators" as const,
  })),
  ...glossaryTerms.map((t) => ({
    title: t.term,
    summary: t.definition,
    href: `/glossary#${slugifyTerm(t.term)}`,
    pillar: "glossary" as const,
  })),
];

export const pillarCounts = {
  foundations: Object.keys(foundationsConcepts).length,
  finance: Object.keys(financeConcepts).length,
  "personal-finance": Object.keys(personalFinanceConcepts).length,
  accounting: Object.keys(accountingConcepts).length,
  taxation: Object.keys(taxationConcepts).length,
  calculators: Object.keys(calculators).length,
  glossary: glossaryTerms.length,
};

export {
  foundationsConcepts,
  financeConcepts,
  personalFinanceConcepts,
  accountingConcepts,
  taxationConcepts,
  calculators,
  glossaryTerms,
  slugifyTerm,
};
