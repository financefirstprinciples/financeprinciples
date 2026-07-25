"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateEmergencyFund } from "@/lib/personal-finance-math";
import { formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function EmergencyFundCalculator() {
  const [monthlyEssentialExpenses, setMonthlyEssentialExpenses] = useState(2500);
  const [targetMonths, setTargetMonths] = useState(4);
  const [currentSavings, setCurrentSavings] = useState(3000);
  const [monthlyContribution, setMonthlyContribution] = useState(400);

  const result = useMemo(
    () =>
      calculateEmergencyFund({
        monthlyEssentialExpenses,
        targetMonths,
        currentSavings,
        monthlyContribution,
      }),
    [monthlyEssentialExpenses, targetMonths, currentSavings, monthlyContribution]
  );

  return (
    <CalculatorPage
      title="Emergency Fund Calculator"
      summary="Find your target cushion size, and how long it'll take to get there at your current savings rate."
      relatedConcept={{
        label: "Emergency Funds",
        href: "/personal-finance/emergency-funds",
      }}
      inputs={
        <>
          <Field label="Monthly essential expenses">
            <NumberInput
              value={monthlyEssentialExpenses}
              onChange={setMonthlyEssentialExpenses}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Target months of coverage (commonly 3–6)">
            <NumberInput value={targetMonths} onChange={setTargetMonths} min={1} step={1} />
          </Field>
          <Field label="Current savings">
            <NumberInput value={currentSavings} onChange={setCurrentSavings} prefix="$" min={0} />
          </Field>
          <Field label="Monthly contribution">
            <NumberInput
              value={monthlyContribution}
              onChange={setMonthlyContribution}
              prefix="$"
              min={0}
            />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Target fund size
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.targetFundSize)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Still needed" value={formatUSD(result.amountRemaining)} />
            <Stat
              label="Months to target"
              value={
                result.monthsToTarget === null
                  ? "—"
                  : result.monthsToTarget === 0
                    ? "Reached"
                    : String(result.monthsToTarget)
              }
            />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Target: ${formatUSD(monthlyEssentialExpenses)} × ${targetMonths} months = ${formatUSD(result.targetFundSize)}
Still needed: ${formatUSD(result.targetFundSize)} − ${formatUSD(currentSavings)} = ${formatUSD(result.amountRemaining)}`}
          </pre>
          <p className="mt-3">
            {result.monthsToTarget === null
              ? "Add a monthly contribution above zero to see how long it'll take to reach the target."
              : result.monthsToTarget === 0
                ? "You've already reached your target — this cushion is meant to sit in cash, not be invested."
                : `At ${formatUSD(monthlyContribution)} a month, it'll take about ${result.monthsToTarget} months to build the full cushion.`}
          </p>
        </>
      }
    />
  );
}
