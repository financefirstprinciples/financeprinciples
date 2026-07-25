"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateInsuranceExpectedValue } from "@/lib/personal-finance-math";
import { formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function InsuranceExpectedValueCalculator() {
  const [probabilityOfLoss, setProbabilityOfLoss] = useState(0.4);
  const [lossAmount, setLossAmount] = useState(300000);
  const [annualPremium, setAnnualPremium] = useState(1500);

  const result = useMemo(
    () =>
      calculateInsuranceExpectedValue({
        probabilityOfLossPercent: probabilityOfLoss,
        lossAmount,
        annualPremium,
      }),
    [probabilityOfLoss, lossAmount, annualPremium]
  );

  return (
    <CalculatorPage
      title="Expected Value of Insurance Calculator"
      summary="See how a policy's premium compares to the mathematically expected loss it's protecting against."
      relatedConcept={{ label: "Insurance Basics", href: "/personal-finance/insurance-basics" }}
      inputs={
        <>
          <Field label="Probability of loss in a year">
            <NumberInput
              value={probabilityOfLoss}
              onChange={setProbabilityOfLoss}
              suffix="%"
              min={0}
              step={0.1}
            />
          </Field>
          <Field label="Size of loss if it happens">
            <NumberInput value={lossAmount} onChange={setLossAmount} prefix="$" min={0} />
          </Field>
          <Field label="Annual premium">
            <NumberInput
              value={annualPremium}
              onChange={setAnnualPremium}
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
              Load above expected loss
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.loadAboveExpectedValue)}
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {result.loadPercentOfPremium.toFixed(1)}% of the premium
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Expected loss" value={formatUSD(result.expectedLoss)} />
            <Stat label="Annual premium" value={formatUSD(annualPremium)} />
          </div>
        </div>
      }
      explanation={
        <p>
          A {probabilityOfLoss}% chance of a {formatUSD(lossAmount)} loss
          gives an expected loss of {formatUSD(result.expectedLoss)}. The{" "}
          {formatUSD(annualPremium)} premium is{" "}
          {formatUSD(Math.abs(result.loadAboveExpectedValue))}{" "}
          {result.loadAboveExpectedValue >= 0 ? "above" : "below"} that —
          roughly what you're paying, on average, for the certainty of not
          facing this loss yourself, on top of the insurer's own costs and
          profit. That doesn't make it a bad deal: the point of insurance
          is protection against the rare, catastrophic year, not a
          favorable bet in a typical one.
        </p>
      }
    />
  );
}
