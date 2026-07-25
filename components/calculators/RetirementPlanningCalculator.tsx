"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateRetirementProjection, formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function RetirementPlanningCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(20000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [inflationRate, setInflationRate] = useState(3);

  const result = useMemo(
    () =>
      calculateRetirementProjection({
        currentAge,
        retirementAge,
        currentSavings,
        monthlyContribution,
        annualReturnPercent: annualReturn,
        inflationRatePercent: inflationRate,
      }),
    [currentAge, retirementAge, currentSavings, monthlyContribution, annualReturn, inflationRate]
  );

  return (
    <CalculatorPage
      title="Retirement Planning Calculator"
      summary="Project your savings at retirement in both nominal dollars and today's purchasing power."
      relatedConcept={{
        label: "Retirement Planning",
        href: "/finance/retirement-planning",
      }}
      inputs={
        <>
          <Field label="Current age">
            <NumberInput value={currentAge} onChange={setCurrentAge} min={0} />
          </Field>
          <Field label="Retirement age">
            <NumberInput value={retirementAge} onChange={setRetirementAge} min={0} />
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
          <Field label="Expected annual return">
            <NumberInput
              value={annualReturn}
              onChange={setAnnualReturn}
              suffix="%"
              min={0}
              step={0.1}
            />
          </Field>
          <Field label="Assumed inflation rate">
            <NumberInput
              value={inflationRate}
              onChange={setInflationRate}
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
              Savings at retirement (today&apos;s purchasing power)
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.realSavingsAtRetirement)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat
              label="Nominal savings at retirement"
              value={formatUSD(result.nominalSavingsAtRetirement)}
            />
            <Stat label="Years to retirement" value={String(result.yearsToRetirement)} />
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
            Over {result.yearsToRetirement} years, your {formatUSD(currentSavings)}{" "}
            starting balance plus {formatUSD(monthlyContribution)} a month at{" "}
            {annualReturn}% grows to {formatUSD(result.nominalSavingsAtRetirement)}{" "}
            in nominal dollars. But at {inflationRate}% inflation over that
            same stretch, that amount only buys as much as{" "}
            {formatUSD(result.realSavingsAtRetirement)} would today — the
            nominal figure alone overstates how much retirement spending
            this actually supports.
          </p>
          <p className="mt-3">
            Try lowering the current age (or raising the retirement age) to
            see how much a few extra years of compounding changes the
            result — often far more than raising the monthly contribution
            by the same proportion.
          </p>
        </>
      }
    />
  );
}
