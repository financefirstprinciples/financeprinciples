"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateCreditUtilization } from "@/lib/personal-finance-math";
import { formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function CreditUtilizationCalculator() {
  const [totalBalances, setTotalBalances] = useState(2000);
  const [totalCreditLimit, setTotalCreditLimit] = useState(10000);

  const result = useMemo(
    () => calculateCreditUtilization({ totalBalances, totalCreditLimit }),
    [totalBalances, totalCreditLimit]
  );

  const rating =
    result.utilizationPercent <= 10
      ? "Excellent"
      : result.utilizationPercent <= 30
        ? "Good"
        : "High";

  return (
    <CalculatorPage
      title="Credit Utilization Calculator"
      summary="See what share of your available credit you're currently using — one of the biggest factors in a credit score."
      relatedConcept={{ label: "Credit Scores", href: "/personal-finance/credit-scores" }}
      inputs={
        <>
          <Field label="Total balances owed (all revolving accounts)">
            <NumberInput
              value={totalBalances}
              onChange={setTotalBalances}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Total credit limit (all revolving accounts)">
            <NumberInput
              value={totalCreditLimit}
              onChange={setTotalCreditLimit}
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
              Credit utilization
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {result.utilizationPercent.toFixed(1)}%
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {rating} (rule of thumb)
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Balances owed" value={formatUSD(totalBalances)} />
            <Stat label="Available credit" value={formatUSD(totalCreditLimit)} />
          </div>
        </div>
      }
      explanation={
        <p>
          {formatUSD(totalBalances)} owed against {formatUSD(totalCreditLimit)}{" "}
          of available credit is {result.utilizationPercent.toFixed(1)}%
          utilization. A commonly cited rule of thumb is to stay under
          roughly 30%, with lower generally considered better still — not
          because using credit is bad, but because consistently using a
          large share of your available credit is statistically associated
          with a higher risk of missed payments.
        </p>
      }
    />
  );
}
