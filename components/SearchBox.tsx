"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { SearchEntry } from "@/lib/content";

const PILLAR_LABEL: Record<SearchEntry["pillar"], string> = {
  foundations: "Foundations",
  finance: "Finance",
  "personal-finance": "Personal Finance",
  accounting: "Accounting",
  taxation: "Taxation",
  calculators: "Calculator",
  glossary: "Glossary",
};

export default function SearchBox({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return entries.filter(
      (e) =>
        e.title.toLowerCase().includes(q) || e.summary.toLowerCase().includes(q)
    );
  }, [query, entries]);

  return (
    <div className="relative">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search concepts and calculators (e.g. “compound interest”)"
        className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-base text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
      />
      {query.trim() && (
        <div className="absolute z-10 mt-2 w-full rounded-lg border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-zinc-500 dark:text-zinc-400">
              No matches yet — try another term.
            </p>
          ) : (
            <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {results.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="block px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                    onClick={() => setQuery("")}
                  >
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {r.title}{" "}
                      <span className="ml-1 text-xs font-normal text-zinc-400">
                        {PILLAR_LABEL[r.pillar]}
                      </span>
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {r.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
