"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculatePaybackPeriod, formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function PaybackPeriodCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualCashFlow, setAnnualCashFlow] = useState(3000);
  const [years, setYears] = useState(4);

  const cashFlows = useMemo(
    () => Array(Math.max(0, Math.trunc(years || 0))).fill(annualCashFlow),
    [annualCashFlow, years]
  );

  const result = useMemo(
    () => calculatePaybackPeriod(initialInvestment, cashFlows),
    [initialInvestment, cashFlows]
  );

  return (
    <CalculatorPage
      title="Payback Period Calculator"
      summary="Find out how long it takes for an investment's raw cash flows to add back up to its original cost."
      relatedConcept={{ label: "Payback Period", href: "/finance/payback-period" }}
      inputs={
        <>
          <Field label="Initial investment (upfront cost)">
            <NumberInput
              value={initialInvestment}
              onChange={setInitialInvestment}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Cash flow received at the end of each year">
            <NumberInput value={annualCashFlow} onChange={setAnnualCashFlow} prefix="$" min={0} />
          </Field>
          <Field label="Number of years">
            <NumberInput value={years} onChange={setYears} suffix="yrs" min={0} />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Payback period
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {result.paybackYears === null
                ? "Never pays back"
                : `${result.paybackYears.toFixed(2)} years`}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Upfront cost" value={formatUSD(initialInvestment)} />
            <Stat
              label="Total cash flow received"
              value={formatUSD(cashFlows.reduce((sum, cf) => sum + cf, 0))}
            />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{result.cumulativeCashFlows
  .map((cum, i) => `After year ${i + 1}: ${formatUSD(cum)} cumulative`)
  .join("\n") || "Enter a number of years above zero to see the cumulative breakdown."}
          </pre>
          <p className="mt-3">
            {result.paybackYears === null
              ? "The cash flows entered never add up to the full upfront cost within the years given — try more years or a larger annual cash flow."
              : "This measure deliberately ignores the time value of money — it treats every dollar of cash flow the same, no matter when it arrives, which is what makes it simpler (but less rigorous) than NPV or IRR."}
          </p>
        </>
      }
    />
  );
}
