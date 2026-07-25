"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateNPV, formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function NetPresentValueCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualCashFlow, setAnnualCashFlow] = useState(3000);
  const [years, setYears] = useState(4);
  const [rate, setRate] = useState(8);

  const cashFlows = useMemo(
    () => Array(Math.max(0, Math.trunc(years || 0))).fill(annualCashFlow),
    [annualCashFlow, years]
  );

  const result = useMemo(
    () => calculateNPV(initialInvestment, cashFlows, rate),
    [initialInvestment, cashFlows, rate]
  );

  const totalUndiscountedCashFlow = annualCashFlow * cashFlows.length;
  const isPositive = result.npv >= 0;

  return (
    <CalculatorPage
      title="Net Present Value Calculator"
      summary="See whether an upfront cost is worth it, once every future cash flow it produces is discounted back to today's dollars."
      relatedConcept={{ label: "Net Present Value", href: "/finance/net-present-value" }}
      inputs={
        <>
          <Field label="Initial investment (upfront cost)">
            <NumberInput
              value={initialInvestment}
              onChange={setInitialInvestment}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Cash flow received at the end of each year">
            <NumberInput
              value={annualCashFlow}
              onChange={setAnnualCashFlow}
              prefix="$"
            />
          </Field>
          <Field label="Number of years">
            <NumberInput value={years} onChange={setYears} suffix="yrs" min={0} />
          </Field>
          <Field label="Discount rate (your opportunity cost)">
            <NumberInput
              value={rate}
              onChange={setRate}
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
              Net present value
            </p>
            <p
              className={`text-4xl font-bold ${
                isPositive
                  ? "text-zinc-900 dark:text-zinc-100"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {formatUSD(result.npv)}
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {isPositive
                ? "Positive — expected to create more value than it costs."
                : "Negative — expected to cost more than the value it creates."}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat
              label="Cash flows, undiscounted"
              value={formatUSD(totalUndiscountedCashFlow)}
            />
            <Stat
              label="Cash flows, discounted"
              value={formatUSD(
                result.discountedCashFlows.reduce((sum, dcf) => sum + dcf, 0)
              )}
            />
          </div>
        </div>
      }
      explanation={
        <>
          <p>
            The calculator discounts each year&apos;s cash flow back to
            today using{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
              PV = CF / (1 + r)^t
            </code>
            , adds all of those present values together, and subtracts the
            initial investment (the cash flow at time zero):
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
            {result.discountedCashFlows
              .map(
                (dcf, i) =>
                  `Year ${i + 1}: ${formatUSD(annualCashFlow)} → ${formatUSD(dcf)} today`
              )
              .join("\n") || "No years entered yet."}
          </pre>
          <p className="mt-3">
            Undiscounted, the {years}-year stream of cash flows totals{" "}
            {formatUSD(totalUndiscountedCashFlow)} — but discounted back to
            today at {rate}%, it&apos;s only worth{" "}
            {formatUSD(
              result.discountedCashFlows.reduce((sum, dcf) => sum + dcf, 0)
            )}
            . Subtracting the {formatUSD(initialInvestment)} upfront cost
            leaves an NPV of {formatUSD(result.npv)} — the difference
            between the naive undiscounted sum and NPV is exactly the cost
            of waiting for the money.
          </p>
        </>
      }
    />
  );
}
