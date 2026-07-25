"use client";

import { useState } from "react";
import type { CountrySelectorContent } from "@/lib/types";
import {
  calculateProgressiveTax,
  formatCurrency,
  formatPercent,
} from "@/lib/tax";

export default function CountrySelector({
  countries,
  disclaimer,
}: CountrySelectorContent) {
  const [selectedCode, setSelectedCode] = useState(countries[0].code);
  const profile = countries.find((c) => c.code === selectedCode) ?? countries[0];
  const result = calculateProgressiveTax(profile.sampleIncome, profile.brackets);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200">
        <strong className="font-semibold">Illustrative only.</strong> {disclaimer}
      </div>

      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Select country">
        {countries.map((country) => (
          <button
            key={country.code}
            role="tab"
            aria-selected={country.code === selectedCode}
            onClick={() => setSelectedCode(country.code)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              country.code === selectedCode
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-zinc-300 bg-white text-zinc-700 hover:border-blue-400 hover:text-blue-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            }`}
          >
            {country.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {profile.label} brackets (illustrative)
          </h3>
          {profile.note && (
            <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">{profile.note}</p>
          )}
          <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                <tr>
                  <th className="px-4 py-2 font-medium">Income range</th>
                  <th className="px-4 py-2 font-medium">Marginal rate</th>
                </tr>
              </thead>
              <tbody>
                {profile.brackets.map((bracket, i) => {
                  const lower =
                    i === 0
                      ? 0
                      : (profile.brackets[i - 1].upTo ?? 0) + 1;
                  return (
                    <tr
                      key={i}
                      className="border-t border-zinc-200 dark:border-zinc-800"
                    >
                      <td className="px-4 py-2 text-zinc-700 dark:text-zinc-300">
                        {formatCurrency(lower, profile)} –{" "}
                        {bracket.upTo === null
                          ? "and above"
                          : formatCurrency(bracket.upTo, profile)}
                      </td>
                      <td className="px-4 py-2 font-medium text-zinc-900 dark:text-zinc-100">
                        {formatPercent(bracket.rate)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Worked example: {formatCurrency(profile.sampleIncome, profile)} income
          </h3>
          <div className="space-y-2 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900">
            {result.breakdown.map((b, i) => (
              <div key={i} className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>
                  {formatPercent(b.bracket.rate)} on{" "}
                  {formatCurrency(b.incomeInBracket, profile)}
                </span>
                <span>{formatCurrency(b.taxForBracket, profile)}</span>
              </div>
            ))}
            <div className="mt-2 flex justify-between border-t border-zinc-300 pt-2 font-semibold text-zinc-900 dark:border-zinc-700 dark:text-zinc-100">
              <span>Total tax</span>
              <span>{formatCurrency(result.totalTax, profile)}</span>
            </div>
            <div className="flex justify-between pt-2 text-zinc-700 dark:text-zinc-300">
              <span>Marginal rate (on the next unit of income)</span>
              <span className="font-semibold">{formatPercent(result.marginalRate)}</span>
            </div>
            <div className="flex justify-between text-zinc-700 dark:text-zinc-300">
              <span>Effective rate (total tax ÷ total income)</span>
              <span className="font-semibold">{formatPercent(result.effectiveRate)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
