import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import {
  searchIndex,
  foundationsConcepts,
  financeConcepts,
  personalFinanceConcepts,
  accountingConcepts,
  taxationConcepts,
  calculators,
  glossaryTerms,
} from "@/lib/content";

function PillarSection({
  id,
  title,
  description,
  items,
  emptyLabel,
}: {
  id: string;
  title: string;
  description: string;
  items: { title: string; summary: string; href: string }[];
  emptyLabel: string;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-zinc-200 py-10 dark:border-zinc-800">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h2>
      <p className="mt-1 text-zinc-600 dark:text-zinc-400">{description}</p>

      {items.length === 0 ? (
        <p className="mt-6 rounded-lg border border-dashed border-zinc-300 px-4 py-6 text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
          {emptyLabel}
        </p>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block h-full rounded-lg border border-zinc-200 p-4 transition-colors hover:border-blue-400 dark:border-zinc-800"
              >
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function Home() {
  const foundationsItems = Object.values(foundationsConcepts).map((c) => ({
    title: c.title,
    summary: c.summary,
    href: `/foundations/${c.slug}`,
  }));
  const financeItems = Object.values(financeConcepts).map((c) => ({
    title: c.title,
    summary: c.summary,
    href: `/finance/${c.slug}`,
  }));
  const personalFinanceItems = Object.values(personalFinanceConcepts).map((c) => ({
    title: c.title,
    summary: c.summary,
    href: `/personal-finance/${c.slug}`,
  }));
  const accountingItems = Object.values(accountingConcepts).map((c) => ({
    title: c.title,
    summary: c.summary,
    href: `/accounting/${c.slug}`,
  }));
  const taxationItems = Object.values(taxationConcepts).map((c) => ({
    title: c.title,
    summary: c.summary,
    href: `/taxation/${c.slug}`,
  }));
  const calculatorItems = Object.values(calculators).map((c) => ({
    title: c.title,
    summary: c.summary,
    href: `/calculators/${c.slug}`,
  }));

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Finance Principles
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          First-principles explanations of finance, accounting, and taxation
          — built on a short foundation of core economics ideas, and paired
          with calculators that make the numbers concrete.
        </p>
        <div className="mx-auto mt-8 max-w-xl">
          <SearchBox entries={searchIndex} />
        </div>
      </section>

      <PillarSection
        id="foundations"
        title="Foundations"
        description="The handful of economics ideas that finance, accounting, and taxation concepts build on."
        items={foundationsItems}
        emptyLabel="Foundations concepts are coming soon."
      />
      <PillarSection
        id="finance"
        title="Finance"
        description="How money, risk, and time interact."
        items={financeItems}
        emptyLabel="Finance concepts are coming soon."
      />
      <PillarSection
        id="personal-finance"
        title="Personal Finance"
        description="Practical, everyday money decisions: budgeting, emergency funds, debt payoff, and savings goals."
        items={personalFinanceItems}
        emptyLabel="Personal finance concepts are coming soon."
      />
      <PillarSection
        id="accounting"
        title="Accounting"
        description="How economic activity gets measured and recorded."
        items={accountingItems}
        emptyLabel="Accounting concepts are coming soon."
      />
      <PillarSection
        id="taxation"
        title="Taxation"
        description="How governments levy tax, with country-specific detail where it matters."
        items={taxationItems}
        emptyLabel="Taxation concepts are coming soon."
      />
      <PillarSection
        id="calculators"
        title="Calculators"
        description="Interactive tools for putting the concepts to work."
        items={calculatorItems}
        emptyLabel="Calculators are coming soon."
      />

      <section
        id="glossary"
        className="scroll-mt-20 border-t border-zinc-200 py-10 dark:border-zinc-800"
      >
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Glossary</h2>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">
          Every key term from every section above, in one alphabetical, searchable list.
        </p>
        <Link
          href="/glossary"
          className="mt-6 inline-block rounded-lg border border-zinc-200 px-4 py-3 font-semibold text-zinc-900 transition-colors hover:border-blue-400 dark:border-zinc-800 dark:text-zinc-100"
        >
          Browse all {glossaryTerms.length} terms →
        </Link>
      </section>
    </div>
  );
}
