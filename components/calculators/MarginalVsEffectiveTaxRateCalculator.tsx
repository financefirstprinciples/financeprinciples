"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { COUNTRY_PROFILES } from "@/lib/tax-country-data";
import { calculateProgressiveTax, formatCurrency, formatPercent } from "@/lib/tax";
import type { CountryCode } from "@/lib/types";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function MarginalVsEffectiveTaxRateCalculator() {
  const [countryCode, setCountryCode] = useState<CountryCode>("US");
  const [income, setIncome] = useState(90000);

  const profile = useMemo(
    () => COUNTRY_PROFILES.find((c) => c.code === countryCode) ?? COUNTRY_PROFILES[0],
    [countryCode]
  );

  const result = useMemo(
    () => calculateProgressiveTax(income, profile.brackets),
    [income, profile]
  );

  return (
    <CalculatorPage
      title="Marginal vs. Effective Tax Rate Calculator"
      summary="Enter your own income and see your bracket-by-bracket breakdown, your marginal rate, and your effective rate."
      relatedConcept={{
        label: "Marginal vs. Effective Tax Rate",
        href: "/taxation/marginal-vs-effective-tax-rate",
      }}
      inputs={
        <>
          <Field label="Country / bracket schedule">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value as CountryCode)}
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            >
              {COUNTRY_PROFILES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label={`Annual income (${profile.currency})`}>
            <NumberInput value={income} onChange={setIncome} prefix={profile.currencySymbol} min={0} />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Total tax owed
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatCurrency(result.totalTax, profile)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Marginal rate" value={formatPercent(result.marginalRate)} />
            <Stat label="Effective rate" value={formatPercent(result.effectiveRate)} />
          </div>
        </div>
      }
      explanation={
        <>
          <p className="mb-2 text-zinc-500 dark:text-zinc-400">
            {profile.note} Illustrative only — not current official figures.
          </p>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{result.breakdown
  .map(
    (b) =>
      `${formatPercent(b.bracket.rate)} on ${formatCurrency(b.incomeInBracket, profile)} = ${formatCurrency(
        b.taxForBracket,
        profile
      )}`
  )
  .join("\n") || "Enter an income above zero to see the bracket breakdown."}
          </pre>
          <p className="mt-3">
            Your marginal rate ({formatPercent(result.marginalRate)}) is the
            rate on your top slice of income only. Your effective rate (
            {formatPercent(result.effectiveRate)}) blends every bracket you
            passed through — which is always the lower, more accurate
            picture of your real overall tax burden.
          </p>
        </>
      }
    />
  );
}
