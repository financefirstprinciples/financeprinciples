import Link from "next/link";
import type { ConceptPageProps } from "@/lib/types";
import CountrySelector from "./CountrySelector";
import { calculators, glossaryTerms, slugifyTerm } from "@/lib/content";
import { EmbeddedCalculatorProvider } from "@/components/calculators/embedded-context";

const PILLAR_LABEL: Record<ConceptPageProps["pillar"], string> = {
  foundations: "Foundations",
  finance: "Finance",
  "personal-finance": "Personal Finance",
  accounting: "Accounting",
  taxation: "Taxation",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <div className="text-zinc-700 dark:text-zinc-300">{children}</div>
    </section>
  );
}

export default function ConceptPage({
  pillar,
  slug,
  title,
  summary,
  definition,
  whyThisExists,
  mechanics,
  workedExample,
  countrySelector,
  misconceptions,
  relatedConcepts,
  relatedCalculator,
}: ConceptPageProps) {
  const calculatorSlug = relatedCalculator?.href.replace("/calculators/", "");
  const calculatorEntry = calculatorSlug ? calculators[calculatorSlug] : undefined;
  const pageHref = `/${pillar}/${slug}`;
  const glossaryTermsOnPage = glossaryTerms.filter((t) => t.href === pageHref);

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <p className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
        {PILLAR_LABEL[pillar]}
      </p>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        {title}
      </h1>
      <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">{summary}</p>

      <div className="mt-10 space-y-10">
        <Section title="Definition">{definition}</Section>
        <Section title="Why this exists">{whyThisExists}</Section>

        {countrySelector ? (
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Formula, mechanics &amp; worked example
            </h2>
            <CountrySelector {...countrySelector} />
          </section>
        ) : (
          <>
            {mechanics && <Section title="Formula & mechanics">{mechanics}</Section>}
            {workedExample && (
              <Section title="Worked example">{workedExample}</Section>
            )}
          </>
        )}

        {calculatorEntry && (
          <Section title="Try it yourself">
            <EmbeddedCalculatorProvider>
              <calculatorEntry.Component />
            </EmbeddedCalculatorProvider>
          </Section>
        )}

        {misconceptions.length > 0 && (
          <Section title="Common misconceptions">
            <ul className="space-y-4">
              {misconceptions.map((m, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
                >
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    “{m.claim}”
                  </p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {m.reality}
                  </p>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {glossaryTermsOnPage.length > 0 && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Also in the{" "}
            <Link
              href="/glossary"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Glossary
            </Link>
            :{" "}
            {glossaryTermsOnPage.map((t, i) => (
              <span key={t.term}>
                <Link
                  href={`/glossary#${slugifyTerm(t.term)}`}
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  {t.term}
                </Link>
                {i < glossaryTermsOnPage.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        )}

        {(relatedConcepts.length > 0 || relatedCalculator) && (
          <Section title="Related">
            <div className="flex flex-wrap gap-3">
              {relatedConcepts.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-zinc-300 px-4 py-1.5 text-sm text-zinc-700 hover:border-blue-400 hover:text-blue-700 dark:border-zinc-700 dark:text-zinc-300"
                >
                  {link.label}
                </Link>
              ))}
              {relatedCalculator && (
                <Link
                  href={relatedCalculator.href}
                  className="rounded-full border border-blue-600 bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Open {relatedCalculator.label} in its own page →
                </Link>
              )}
            </div>
          </Section>
        )}
      </div>
    </article>
  );
}
