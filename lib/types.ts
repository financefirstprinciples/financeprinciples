import type { ReactNode } from "react";

export type Pillar =
  | "foundations"
  | "finance"
  | "personal-finance"
  | "accounting"
  | "taxation";

export interface RelatedLink {
  label: string;
  href: string;
}

export interface Misconception {
  claim: string;
  reality: ReactNode;
}

export type CountryCode = "US" | "UK" | "IN" | "EU";

export interface TaxBracket {
  /** Upper bound of this bracket in local currency; null means "and above". */
  upTo: number | null;
  /** Marginal rate applied to income within this bracket, as a decimal (0.2 = 20%). */
  rate: number;
}

export interface CountryTaxProfile {
  code: CountryCode;
  label: string;
  currency: string;
  currencySymbol: string;
  brackets: TaxBracket[];
  sampleIncome: number;
  note?: string;
}

export interface CountrySelectorContent {
  countries: CountryTaxProfile[];
  disclaimer: string;
}

export interface ConceptPageProps {
  pillar: Pillar;
  slug: string;
  title: string;
  summary: string;
  definition: ReactNode;
  whyThisExists: ReactNode;
  /** Static formula/mechanics section, used when there is no country selector. */
  mechanics?: ReactNode;
  /** Static worked example, used when there is no country selector. */
  workedExample?: ReactNode;
  /** When present, formula/mechanics and worked example become country-specific. */
  countrySelector?: CountrySelectorContent;
  misconceptions: Misconception[];
  relatedConcepts: RelatedLink[];
  relatedCalculator?: RelatedLink;
}

export interface CalculatorMeta {
  slug: string;
  title: string;
  summary: string;
  relatedConcept?: RelatedLink;
}

export interface GlossaryTerm {
  /** Display name of the term, as it should appear in the glossary. */
  term: string;
  /** Condensed 1-2 sentence plain-language definition, reused from its source page. */
  definition: string;
  /** Pillar the term is primarily associated with. */
  pillar: Pillar;
  /** Link to the concept page where the term is covered in full depth. */
  href: string;
  /** Set when the term is also covered on another page worth linking to. */
  alsoDefinedOn?: RelatedLink;
}
