import type { CountryTaxProfile } from "@/lib/types";

export const US: CountryTaxProfile = {
  code: "US",
  label: "United States",
  currency: "USD",
  currencySymbol: "$",
  sampleIncome: 90000,
  note: "Illustrative federal brackets for a single filer (someone filing taxes individually rather than jointly with a spouse) — not current figures from the IRS, the U.S. tax authority.",
  brackets: [
    { upTo: 11000, rate: 0.1 },
    { upTo: 44725, rate: 0.12 },
    { upTo: 95375, rate: 0.22 },
    { upTo: 182100, rate: 0.24 },
    { upTo: 231250, rate: 0.32 },
    { upTo: 578125, rate: 0.35 },
    { upTo: null, rate: 0.37 },
  ],
};

export const UK: CountryTaxProfile = {
  code: "UK",
  label: "United Kingdom",
  currency: "GBP",
  currencySymbol: "£",
  sampleIncome: 60000,
  note: "Illustrative income tax bands — not current figures from HMRC, the UK's tax authority, and excludes National Insurance (a separate UK payroll tax that funds state benefits like pensions and healthcare).",
  brackets: [
    { upTo: 12570, rate: 0 },
    { upTo: 50270, rate: 0.2 },
    { upTo: 125140, rate: 0.4 },
    { upTo: null, rate: 0.45 },
  ],
};

export const IN: CountryTaxProfile = {
  code: "IN",
  label: "India",
  currency: "INR",
  currencySymbol: "₹",
  sampleIncome: 1500000,
  note: "Illustrative slabs (India's term for tax brackets) under India's newer, optional tax system (the \"new regime\") — not current figures from the CBDT, India's tax authority, and excludes cess and surcharge (extra India-specific charges added on top of the base tax).",
  brackets: [
    { upTo: 300000, rate: 0 },
    { upTo: 600000, rate: 0.05 },
    { upTo: 900000, rate: 0.1 },
    { upTo: 1200000, rate: 0.15 },
    { upTo: 1500000, rate: 0.2 },
    { upTo: null, rate: 0.3 },
  ],
};

export const EU: CountryTaxProfile = {
  code: "EU",
  label: "EU-generic",
  currency: "EUR",
  currencySymbol: "€",
  sampleIncome: 70000,
  note: "A simplified, generic progressive schedule illustrating patterns common across EU member states — actual brackets vary significantly by country.",
  brackets: [
    { upTo: 15000, rate: 0.1 },
    { upTo: 40000, rate: 0.25 },
    { upTo: 80000, rate: 0.35 },
    { upTo: null, rate: 0.45 },
  ],
};

export const COUNTRY_PROFILES: CountryTaxProfile[] = [US, UK, IN, EU];
