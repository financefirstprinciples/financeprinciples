import Link from "next/link";
import type { Metadata } from "next";
import { glossaryTerms, slugifyTerm } from "@/lib/content";
import type { GlossaryTerm, Pillar } from "@/lib/types";

export const metadata: Metadata = {
  title: "Glossary — Finance Principles",
  description:
    "Every key term defined across Foundations, Finance, Personal Finance, Accounting, and Taxation, in one searchable, alphabetical list.",
};

const PILLAR_LABEL: Record<Pillar, string> = {
  foundations: "Foundations",
  finance: "Finance",
  "personal-finance": "Personal Finance",
  accounting: "Accounting",
  taxation: "Taxation",
};

const LETTER_ORDER = ["#", ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))];

function groupByLetter(terms: GlossaryTerm[]): [string, GlossaryTerm[]][] {
  const sorted = [...terms].sort((a, b) =>
    a.term.localeCompare(b.term, undefined, { sensitivity: "base" })
  );
  const groups = new Map<string, GlossaryTerm[]>();
  for (const t of sorted) {
    const first = t.term[0].toUpperCase();
    const letter = /[A-Z]/.test(first) ? first : "#";
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(t);
  }
  return LETTER_ORDER.filter((l) => groups.has(l)).map((l) => [l, groups.get(l)!]);
}

export default function GlossaryPage() {
  const groups = groupByLetter(glossaryTerms);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <p className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
        Reference
      </p>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Glossary</h1>
      <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
        {glossaryTerms.length} terms defined across every section of this site, condensed from
        the concept page that covers each one in full depth. Use the site search box for the
        fastest way to jump straight to a term.
      </p>

      <nav
        aria-label="Jump to letter"
        className="mt-8 flex flex-wrap gap-2 border-y border-zinc-200 py-4 dark:border-zinc-800"
      >
        {groups.map(([letter]) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 text-sm font-medium text-zinc-700 hover:border-blue-400 hover:text-blue-700 dark:border-zinc-700 dark:text-zinc-300"
          >
            {letter}
          </a>
        ))}
      </nav>

      <div className="mt-10 space-y-10">
        {groups.map(([letter, terms]) => (
          <section key={letter} id={`letter-${letter}`} className="scroll-mt-20 space-y-4">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{letter}</h2>
            <dl className="space-y-6">
              {terms.map((t) => (
                <div
                  key={t.term}
                  id={slugifyTerm(t.term)}
                  className="scroll-mt-20 border-b border-zinc-100 pb-4 last:border-none dark:border-zinc-900"
                >
                  <dt className="flex flex-wrap items-baseline gap-2">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {t.term}
                    </span>
                    <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                      {PILLAR_LABEL[t.pillar]}
                    </span>
                  </dt>
                  <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                    {t.definition}{" "}
                    <Link
                      href={t.href}
                      className="whitespace-nowrap text-blue-600 hover:underline dark:text-blue-400"
                    >
                      Read more →
                    </Link>
                    {t.alsoDefinedOn && (
                      <>
                        {" "}
                        <span className="text-sm text-zinc-500 dark:text-zinc-500">
                          (also covered on{" "}
                          <Link
                            href={t.alsoDefinedOn.href}
                            className="text-blue-600 hover:underline dark:text-blue-400"
                          >
                            {t.alsoDefinedOn.label}
                          </Link>
                          )
                        </span>
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
