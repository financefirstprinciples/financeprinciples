"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateRealReturn } from "@/lib/finance-math";
import { formatPercent } from "@/lib/tax";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function RealVsNominalReturnCalculator() {
  const [nominalRate, setNominalRate] = useState(7);
  const [inflationRate, setInflationRate] = useState(3);

  const result = useMemo(
    () =>
      calculateRealReturn({
        nominalRatePercent: nominalRate,
        inflationRatePercent: inflationRate,
      }),
    [nominalRate, inflationRate]
  );

  const gap = result.approximateRealReturn - result.preciseRealReturn;

  return (
    <CalculatorPage
      title="Real vs. Nominal Return Calculator"
      summary="See how much of a nominal return inflation actually eats into — and how the quick approximation compares to the precise calculation."
      relatedConcept={{
        label: "Real vs. Nominal Returns",
        href: "/finance/real-vs-nominal-returns",
      }}
      inputs={
        <>
          <Field label="Nominal return">
            <NumberInput
              value={nominalRate}
              onChange={setNominalRate}
              suffix="%"
              step={0.1}
            />
          </Field>
          <Field label="Inflation rate">
            <NumberInput
              value={inflationRate}
              onChange={setInflationRate}
              suffix="%"
              step={0.1}
            />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Precise real return
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatPercent(result.preciseRealReturn, 2)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat
              label="Approximate real return"
              value={formatPercent(result.approximateRealReturn, 2)}
            />
            <Stat label="Gap between the two" value={formatPercent(gap, 2)} />
          </div>
        </div>
      }
      explanation={
        <>
          <p>
            The approximation just subtracts:{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
              nominal − inflation
            </code>{" "}
            = {formatPercent(nominalRate / 100, 1)} −{" "}
            {formatPercent(inflationRate / 100, 1)} ={" "}
            {formatPercent(result.approximateRealReturn, 2)}.
          </p>
          <p className="mt-3">
            The precise version divides instead:{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
              (1 + nominal) / (1 + inflation) − 1
            </code>{" "}
            = {formatPercent(result.preciseRealReturn, 2)}. At these rates,
            the two methods differ by {formatPercent(Math.abs(gap), 2)} — a
            small gap here, but one that widens as the rates involved get
            larger, since the approximation ignores the interaction between
            the two rates.
          </p>
        </>
      }
    />
  );
}
