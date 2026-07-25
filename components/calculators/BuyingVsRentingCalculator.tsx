"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import {
  calculateBuyVsRent,
  formatUSD,
  ASSUMED_SELLING_COST_PERCENT,
} from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function BuyingVsRentingCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [mortgageRate, setMortgageRate] = useState(6);
  const [years, setYears] = useState(30);
  const [monthlyRent, setMonthlyRent] = useState(1800);
  const [annualOwnershipCostPercent, setAnnualOwnershipCostPercent] = useState(2);
  const [homeAppreciation, setHomeAppreciation] = useState(3);
  const [investmentReturn, setInvestmentReturn] = useState(7);

  const result = useMemo(
    () =>
      calculateBuyVsRent({
        homePrice,
        downPaymentPercent,
        mortgageRatePercent: mortgageRate,
        years,
        monthlyRent,
        annualOwnershipCostPercent,
        homeAppreciationPercent: homeAppreciation,
        investmentReturnPercent: investmentReturn,
      }),
    [
      homePrice,
      downPaymentPercent,
      mortgageRate,
      years,
      monthlyRent,
      annualOwnershipCostPercent,
      homeAppreciation,
      investmentReturn,
    ]
  );

  const winnerLabel =
    result.winner === "tie" ? "Tie" : result.winner === "buy" ? "Buying wins" : "Renting wins";

  return (
    <CalculatorPage
      title="Buying vs. Renting Calculator"
      summary="Compare ending net worth under buying versus renting-and-investing-the-difference, over the same time horizon."
      relatedConcept={{
        label: "Buying vs. Renting",
        href: "/personal-finance/buying-vs-renting",
      }}
      inputs={
        <>
          <Field label="Home price">
            <NumberInput value={homePrice} onChange={setHomePrice} prefix="$" min={0} />
          </Field>
          <Field label="Down payment">
            <NumberInput
              value={downPaymentPercent}
              onChange={setDownPaymentPercent}
              suffix="%"
              min={0}
              step={1}
            />
          </Field>
          <Field label="Mortgage rate">
            <NumberInput
              value={mortgageRate}
              onChange={setMortgageRate}
              suffix="%"
              min={0}
              step={0.1}
            />
          </Field>
          <Field label="Years (mortgage term & comparison horizon)">
            <NumberInput value={years} onChange={setYears} suffix="yrs" min={1} />
          </Field>
          <Field label="Monthly rent (equivalent home)">
            <NumberInput value={monthlyRent} onChange={setMonthlyRent} prefix="$" min={0} />
          </Field>
          <Field label="Annual ownership costs (tax, insurance, maintenance)">
            <NumberInput
              value={annualOwnershipCostPercent}
              onChange={setAnnualOwnershipCostPercent}
              suffix="%/yr"
              min={0}
              step={0.1}
            />
          </Field>
          <Field label="Expected home price appreciation">
            <NumberInput
              value={homeAppreciation}
              onChange={setHomeAppreciation}
              suffix="%/yr"
              step={0.1}
            />
          </Field>
          <Field label="Expected investment return (if renting instead)">
            <NumberInput
              value={investmentReturn}
              onChange={setInvestmentReturn}
              suffix="%/yr"
              step={0.1}
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
              {formatUSD(Math.abs(result.differenceAtEnd))}
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              difference in ending net worth after {years} years
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Owner's ending net worth" value={formatUSD(result.ownerEndingNetWorth)} />
            <Stat
              label="Renter's ending net worth"
              value={formatUSD(result.renterEndingNetWorth)}
            />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Owner's true monthly cost: ${formatUSD(result.ownerMonthlyCost)} (mortgage + ownership costs)
Monthly gap vs. rent:      ${formatUSD(result.monthlyDifference)} (what a renter could invest instead)

Home value after ${years} years: ${formatUSD(result.homeValueAtEnd)}
Owner's ending net worth (after ~${ASSUMED_SELLING_COST_PERCENT}% assumed selling costs): ${formatUSD(result.ownerEndingNetWorth)}

Renter's ending net worth (down payment + monthly gap, both invested): ${formatUSD(result.renterEndingNetWorth)}`}
          </pre>
          <p className="mt-3">
            This assumes the mortgage is paid off entirely by the end of
            the {years}-year horizon, and that a renter actually invests
            the monthly gap rather than spending it. The result is
            sensitive to the gap between the assumed investment return and
            home appreciation rate — try adjusting either one to see how
            much it can flip the answer.
          </p>
        </>
      }
    />
  );
}
