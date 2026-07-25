"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function TaxableIncomeCalculator() {
  const [grossIncome, setGrossIncome] = useState(70000);
  const [adjustments, setAdjustments] = useState(6000);
  const [deductions, setDeductions] = useState(14000);

  const result = useMemo(() => {
    const adjustedGrossIncome = Math.max(0, grossIncome - adjustments);
    const taxableIncome = Math.max(0, adjustedGrossIncome - deductions);
    return { adjustedGrossIncome, taxableIncome };
  }, [grossIncome, adjustments, deductions]);

  return (
    <CalculatorPage
      title="Taxable Income Calculator"
      summary="See how gross income narrows down to taxable income once adjustments and deductions are subtracted."
      relatedConcept={{ label: "Taxable Income", href: "/taxation/taxable-income" }}
      inputs={
        <>
          <Field label="Gross income">
            <NumberInput value={grossIncome} onChange={setGrossIncome} prefix="$" min={0} />
          </Field>
          <Field label="Adjustments / exclusions (e.g. retirement contributions)">
            <NumberInput value={adjustments} onChange={setAdjustments} prefix="$" min={0} />
          </Field>
          <Field label="Deductions (standard or itemized)">
            <NumberInput value={deductions} onChange={setDeductions} prefix="$" min={0} />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Taxable income
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.taxableIncome)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Gross income" value={formatUSD(grossIncome)} />
            <Stat
              label="Adjusted gross income (AGI)"
              value={formatUSD(result.adjustedGrossIncome)}
            />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Gross income:               ${formatUSD(grossIncome)}
− Adjustments:               ${formatUSD(adjustments)}
= Adjusted gross income:     ${formatUSD(result.adjustedGrossIncome)}
− Deductions:                ${formatUSD(deductions)}
= Taxable income:            ${formatUSD(result.taxableIncome)}`}
          </pre>
          <p className="mt-3">
            It&apos;s this {formatUSD(result.taxableIncome)} figure — not
            the original {formatUSD(grossIncome)} in gross income — that
            gets run through the tax brackets from Marginal vs. Effective
            Tax Rate.
          </p>
        </>
      }
    />
  );
}
