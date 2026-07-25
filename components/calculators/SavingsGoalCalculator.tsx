"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateRequiredContribution, formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function SavingsGoalCalculator() {
  const [targetAmount, setTargetAmount] = useState(50000);
  const [years, setYears] = useState(10);
  const [currentSavings, setCurrentSavings] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(6);

  const result = useMemo(
    () =>
      calculateRequiredContribution({
        targetFutureValue: targetAmount,
        principal: currentSavings,
        annualRatePercent: annualReturn,
        years,
        frequency: "monthly",
      }),
    [targetAmount, currentSavings, annualReturn, years]
  );

  return (
    <CalculatorPage
      title="Savings Goal Calculator"
      summary="Work backward from a target amount and date to find the monthly contribution that gets you there."
      relatedConcept={{
        label: "Savings Goals",
        href: "/personal-finance/savings-goals",
      }}
      inputs={
        <>
          <Field label="Target amount">
            <NumberInput value={targetAmount} onChange={setTargetAmount} prefix="$" min={0} />
          </Field>
          <Field label="Years to reach your goal">
            <NumberInput value={years} onChange={setYears} suffix="yrs" min={1} />
          </Field>
          <Field label="Current savings">
            <NumberInput value={currentSavings} onChange={setCurrentSavings} prefix="$" min={0} />
          </Field>
          <Field label="Expected annual return">
            <NumberInput
              value={annualReturn}
              onChange={setAnnualReturn}
              suffix="%"
              min={0}
              step={0.1}
            />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Required monthly contribution
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.requiredContributionPerPeriod)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Total you'll contribute" value={formatUSD(result.totalContributions)} />
            <Stat label="Growth from returns" value={formatUSD(result.totalGrowth)} />
          </div>
        </div>
      }
      explanation={
        <>
          <p>
            Starting from {formatUSD(currentSavings)} and contributing{" "}
            {formatUSD(result.requiredContributionPerPeriod)} every month for{" "}
            {years} years at {annualReturn}% annually reaches{" "}
            {formatUSD(targetAmount)}. Of that total, {formatUSD(result.totalGrowth)}{" "}
            comes purely from investment growth, not from money you put in
            directly.
          </p>
          <p className="mt-3">
            Try shortening the time horizon to see how much the required
            monthly contribution rises — the less time money has to
            compound, the more of the goal has to come from new
            contributions instead of growth.
          </p>
        </>
      }
    />
  );
}
