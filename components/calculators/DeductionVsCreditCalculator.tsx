"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { formatUSD } from "@/lib/finance-math";
import { formatPercent } from "@/lib/tax";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function DeductionVsCreditCalculator() {
  const [amount, setAmount] = useState(1000);
  const [marginalRate, setMarginalRate] = useState(24);

  const result = useMemo(() => {
    const rate = marginalRate / 100;
    const deductionSavings = amount * rate;
    const creditSavings = amount;
    return { deductionSavings, creditSavings, difference: creditSavings - deductionSavings };
  }, [amount, marginalRate]);

  return (
    <CalculatorPage
      title="Deduction vs. Credit Calculator"
      summary="See exactly how much tax the same dollar amount saves you as a deduction versus as a credit, at your marginal rate."
      relatedConcept={{
        label: "Tax Deductions vs. Tax Credits",
        href: "/taxation/deductions-vs-credits",
      }}
      inputs={
        <>
          <Field label="Deduction or credit amount">
            <NumberInput value={amount} onChange={setAmount} prefix="$" min={0} />
          </Field>
          <Field label="Your marginal tax rate">
            <NumberInput
              value={marginalRate}
              onChange={setMarginalRate}
              suffix="%"
              min={0}
              step={0.5}
            />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Tax saved as a credit
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.creditSavings)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Tax saved as a deduction" value={formatUSD(result.deductionSavings)} />
            <Stat label="Difference" value={formatUSD(result.difference)} />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Deduction: ${formatUSD(amount)} × ${formatPercent(marginalRate / 100, 1)} marginal rate = ${formatUSD(result.deductionSavings)} saved
Credit:    ${formatUSD(amount)} × 100% (dollar for dollar)     = ${formatUSD(result.creditSavings)} saved`}
          </pre>
          <p className="mt-3">
            The credit always saves the full {formatUSD(amount)}, no matter
            your bracket. The deduction only saves your marginal rate times
            the amount — at {formatPercent(marginalRate / 100, 1)}, that&apos;s{" "}
            {formatUSD(result.difference)} less than the credit would save,
            for the exact same dollar amount.
          </p>
        </>
      }
    />
  );
}
