"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateBusinessStructureTax, formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function BusinessStructureTaxCalculator() {
  const [profit, setProfit] = useState(100000);
  const [passThroughTaxRate, setPassThroughTaxRate] = useState(32);
  const [corporateTaxRate, setCorporateTaxRate] = useState(21);
  const [dividendTaxRate, setDividendTaxRate] = useState(15);

  const result = useMemo(
    () =>
      calculateBusinessStructureTax({
        profit,
        passThroughTaxRatePercent: passThroughTaxRate,
        corporateTaxRatePercent: corporateTaxRate,
        dividendTaxRatePercent: dividendTaxRate,
      }),
    [profit, passThroughTaxRate, corporateTaxRate, dividendTaxRate]
  );

  return (
    <CalculatorPage
      title="Business Structure Tax Calculator"
      summary="See how the same business profit ends up taxed differently as a pass-through entity versus a C-corporation, retained or distributed."
      relatedConcept={{
        label: "Business & Startup Taxation",
        href: "/taxation/business-and-startup-taxation",
      }}
      inputs={
        <>
          <Field label="Business profit">
            <NumberInput value={profit} onChange={setProfit} prefix="$" min={0} />
          </Field>
          <Field label="Owner's personal tax rate (pass-through)">
            <NumberInput
              value={passThroughTaxRate}
              onChange={setPassThroughTaxRate}
              suffix="%"
              min={0}
              step={0.5}
            />
          </Field>
          <Field label="Corporate tax rate">
            <NumberInput
              value={corporateTaxRate}
              onChange={setCorporateTaxRate}
              suffix="%"
              min={0}
              step={0.5}
            />
          </Field>
          <Field label="Dividend tax rate (on distributed profit)">
            <NumberInput
              value={dividendTaxRate}
              onChange={setDividendTaxRate}
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
              C-corp, fully distributed — combined effective rate
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {result.distributedCombinedEffectiveRatePercent.toFixed(2)}%
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Stat
              label="Pass-through (after tax)"
              value={formatUSD(result.passThroughAfterTax)}
            />
            <Stat
              label="C-corp, retained (after tax so far)"
              value={formatUSD(result.corporateAfterTax)}
            />
            <Stat
              label="C-corp, distributed (after tax)"
              value={formatUSD(result.distributedAfterTax)}
            />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Pass-through:               ${formatUSD(profit)} × (1 − ${passThroughTaxRate}%) = ${formatUSD(result.passThroughAfterTax)}

C-corp, retained:           ${formatUSD(profit)} × (1 − ${corporateTaxRate}%) = ${formatUSD(result.corporateAfterTax)}
                             (second layer of tax deferred until distributed)

C-corp, fully distributed:  ${formatUSD(profit)} × (1 − ${corporateTaxRate}%) × (1 − ${dividendTaxRate}%) = ${formatUSD(result.distributedAfterTax)}
                             (combined effective rate: ${result.distributedCombinedEffectiveRatePercent.toFixed(2)}%)`}
          </pre>
          <p className="mt-3">
            The "C-corp, retained" figure isn't tax-free — it's the same
            profit taxed once so far, with the second layer deferred rather
            than eliminated. Whether double taxation ends up costing more
            than pass-through treatment depends entirely on how these three
            rates compare, and on how long distribution is delayed.
          </p>
        </>
      }
    />
  );
}
