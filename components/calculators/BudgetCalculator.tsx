"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateBudgetSplit } from "@/lib/personal-finance-math";
import { formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function BudgetCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(4000);

  const result = useMemo(
    () => calculateBudgetSplit({ monthlyIncome }),
    [monthlyIncome]
  );

  return (
    <CalculatorPage
      title="Budget Calculator"
      summary="Apply the 50/30/20 rule of thumb to your take-home income as a starting point for a budget."
      relatedConcept={{ label: "Budgeting", href: "/personal-finance/budgeting" }}
      inputs={
        <>
          <Field label="Monthly take-home income">
            <NumberInput value={monthlyIncome} onChange={setMonthlyIncome} prefix="$" min={0} />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Needs (50%)
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.needs)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Wants (30%)" value={formatUSD(result.wants)} />
            <Stat label="Savings & extra debt paydown (20%)" value={formatUSD(result.savings)} />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Needs (50%):    ${formatUSD(result.needs)}
Wants (30%):    ${formatUSD(result.wants)}
Savings (20%):  ${formatUSD(result.savings)}`}
          </pre>
          <p className="mt-3">
            These numbers are a starting point, not a rule — someone with
            unusually high fixed costs or aggressive savings goals might
            reasonably use very different percentages. What matters is
            having a deliberate split at all, and adjusting it once you
            compare it against your actual spending.
          </p>
        </>
      }
    />
  );
}
