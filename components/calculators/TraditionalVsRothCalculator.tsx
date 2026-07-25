"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateTraditionalVsRothComparison, formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function TraditionalVsRothCalculator() {
  const [annualContribution, setAnnualContribution] = useState(5000);
  const [years, setYears] = useState(30);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [currentTaxRate, setCurrentTaxRate] = useState(24);
  const [retirementTaxRate, setRetirementTaxRate] = useState(24);

  const result = useMemo(
    () =>
      calculateTraditionalVsRothComparison({
        annualContribution,
        years,
        annualReturnPercent: annualReturn,
        currentTaxRatePercent: currentTaxRate,
        retirementTaxRatePercent: retirementTaxRate,
      }),
    [annualContribution, years, annualReturn, currentTaxRate, retirementTaxRate]
  );

  const winnerLabel =
    result.winner === "tie"
      ? "Tie"
      : result.winner === "traditional"
        ? "Traditional wins"
        : "Roth wins";

  return (
    <CalculatorPage
      title="Traditional vs. Roth Calculator"
      summary="Compare the after-tax retirement value of a Traditional-style account against a Roth-style account, given the same pre-tax savings each year."
      relatedConcept={{
        label: "Retirement & Tax-Advantaged Accounts",
        href: "/taxation/retirement-and-tax-advantaged-accounts",
      }}
      inputs={
        <>
          <Field label="Pre-tax income saved per year">
            <NumberInput
              value={annualContribution}
              onChange={setAnnualContribution}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Years until retirement">
            <NumberInput value={years} onChange={setYears} suffix="yrs" min={1} />
          </Field>
          <Field label="Expected annual return">
            <NumberInput
              value={annualReturn}
              onChange={setAnnualReturn}
              suffix="%"
              step={0.1}
            />
          </Field>
          <Field label="Current marginal tax rate">
            <NumberInput
              value={currentTaxRate}
              onChange={setCurrentTaxRate}
              suffix="%"
              min={0}
              step={0.5}
            />
          </Field>
          <Field label="Expected marginal tax rate in retirement">
            <NumberInput
              value={retirementTaxRate}
              onChange={setRetirementTaxRate}
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
              {winnerLabel}
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {result.winner === "tie"
                ? formatUSD(result.traditionalAfterTaxFutureValue)
                : formatUSD(Math.abs(result.differenceAfterTax))}
            </p>
            {result.winner !== "tie" && (
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                more after-tax value than the other option
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat
              label="Traditional (after tax)"
              value={formatUSD(result.traditionalAfterTaxFutureValue)}
            />
            <Stat
              label="Roth (after tax)"
              value={formatUSD(result.rothAfterTaxFutureValue)}
            />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Traditional: grows to ${formatUSD(result.traditionalGrossFutureValue)} pre-tax,
             taxed at ${retirementTaxRate}% on withdrawal → ${formatUSD(result.traditionalAfterTaxFutureValue)} after tax

Roth: only ${formatUSD(result.rothContributionAfterTax)}/yr contributed after paying ${currentTaxRate}% tax now,
      grows tax-free → ${formatUSD(result.rothAfterTaxFutureValue)} after tax (already tax-free)`}
          </pre>
          <p className="mt-3">
            {result.winner === "tie"
              ? "With the same tax rate now and in retirement, the deduction Traditional gives you today and the tax-free withdrawal Roth gives you later cancel out exactly — both land on the same after-tax value."
              : `${winnerLabel === "Traditional wins" ? "Traditional" : "Roth"} comes out ahead here because your ${
                  result.winner === "traditional" ? "retirement" : "current"
                } tax rate (${result.winner === "traditional" ? retirementTaxRate : currentTaxRate}%) is lower than your ${
                  result.winner === "traditional" ? "current" : "retirement"
                } tax rate (${result.winner === "traditional" ? currentTaxRate : retirementTaxRate}%) — not because either account type is inherently better.`}
          </p>
        </>
      }
    />
  );
}
