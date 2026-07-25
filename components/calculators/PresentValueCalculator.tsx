"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import {
  calculatePresentValue,
  formatUSD,
  type CompoundingFrequency,
} from "@/lib/finance-math";
import { formatPercent } from "@/lib/tax";
import { Field, FrequencySelect, NumberInput, Stat } from "@/components/calculators/shared";

export default function PresentValueCalculator() {
  const [futureValue, setFutureValue] = useState(50000);
  const [rate, setRate] = useState(6);
  const [years, setYears] = useState(15);
  const [frequency, setFrequency] = useState<CompoundingFrequency>("annual");

  const result = useMemo(
    () =>
      calculatePresentValue({
        futureValue,
        annualRatePercent: rate,
        years,
        frequency,
      }),
    [futureValue, rate, years, frequency]
  );

  const discountPercent = futureValue === 0 ? 0 : result.totalDiscount / futureValue;

  return (
    <CalculatorPage
      title="Present Value Calculator"
      summary="Find out how much a future sum of money is worth today, given a discount rate and time horizon."
      relatedConcept={{ label: "Present Value", href: "/finance/present-value" }}
      inputs={
        <>
          <Field label="Future value (amount you'll receive later)">
            <NumberInput
              value={futureValue}
              onChange={setFutureValue}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Annual discount rate">
            <NumberInput
              value={rate}
              onChange={setRate}
              suffix="%"
              min={0}
              step={0.1}
            />
          </Field>
          <Field label="Time horizon (years)">
            <NumberInput value={years} onChange={setYears} suffix="yrs" min={0} />
          </Field>
          <Field label="Compounding frequency">
            <FrequencySelect value={frequency} onChange={setFrequency} />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Present value
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.presentValue)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Total discount" value={formatUSD(result.totalDiscount)} />
            <Stat
              label="Discount as % of future value"
              value={formatPercent(discountPercent, 1)}
            />
          </div>
        </div>
      }
      explanation={
        <>
          <p>
            The calculator applies{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
              PV = FV / (1 + r/n)^(n×t)
            </code>
            , where <code>FV</code> is the future amount you entered,{" "}
            <code>r</code> is the annual discount rate as a decimal,{" "}
            <code>n</code> is the number of compounding periods per year (
            {result.periodsPerYear} for {frequency} compounding), and{" "}
            <code>t</code> is the number of years.
          </p>
          <p className="mt-3">
            At {formatPercent(rate / 100, 1)} compounded {frequency},{" "}
            {formatUSD(futureValue)} in {years} years is worth{" "}
            {formatUSD(result.presentValue)} today — a discount of{" "}
            {formatUSD(result.totalDiscount)} ({formatPercent(discountPercent, 1)}{" "}
            of the future value).
          </p>
        </>
      }
    />
  );
}
