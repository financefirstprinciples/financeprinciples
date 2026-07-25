"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateIRR, calculateNPV, formatUSD } from "@/lib/finance-math";
import { formatPercent } from "@/lib/tax";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function IRRCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualCashFlow, setAnnualCashFlow] = useState(3000);
  const [years, setYears] = useState(4);
  const [requiredRate, setRequiredRate] = useState(8);

  const cashFlows = useMemo(
    () => Array(Math.max(0, Math.trunc(years || 0))).fill(annualCashFlow),
    [annualCashFlow, years]
  );

  const result = useMemo(
    () => calculateIRR(initialInvestment, cashFlows),
    [initialInvestment, cashFlows]
  );

  const npvAtRequiredRate = useMemo(
    () => calculateNPV(initialInvestment, cashFlows, requiredRate).npv,
    [initialInvestment, cashFlows, requiredRate]
  );

  return (
    <CalculatorPage
      title="IRR Calculator"
      summary="Find the rate of return an investment actually produces — the same inputs as the NPV calculator, but answering a different question."
      relatedConcept={{
        label: "Internal Rate of Return (IRR)",
        href: "/finance/internal-rate-of-return",
      }}
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
            <NumberInput value={annualCashFlow} onChange={setAnnualCashFlow} prefix="$" />
          </Field>
          <Field label="Number of years">
            <NumberInput value={years} onChange={setYears} suffix="yrs" min={0} />
          </Field>
          <Field label="Your required rate of return (optional, for comparison)">
            <NumberInput
              value={requiredRate}
              onChange={setRequiredRate}
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
              Internal rate of return
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {result.irr === null ? "No solution found" : formatPercent(result.irr, 2)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Your required rate" value={formatPercent(requiredRate / 100, 1)} />
            <Stat
              label={`NPV at ${requiredRate}%`}
              value={formatUSD(npvAtRequiredRate)}
            />
          </div>
        </div>
      }
      explanation={
        <>
          {result.irr === null ? (
            <p>
              No break-even rate was found in a reasonable range — this
              usually means every cash flow shares the same sign (e.g. no
              upfront cost, or no positive returns), so there's no rate at
              which NPV crosses zero.
            </p>
          ) : (
            <>
              <p>
                At {formatPercent(result.irr, 2)}, this investment&apos;s
                NPV is exactly zero — that&apos;s the IRR. Compare it to
                your required rate of {formatPercent(requiredRate / 100, 1)}:{" "}
                {result.irr > requiredRate / 100
                  ? `since the IRR is higher, this investment is expected to outperform your required rate — its NPV at ${requiredRate}% is positive (${formatUSD(npvAtRequiredRate)}).`
                  : `since the IRR is lower, this investment is expected to underperform your required rate — its NPV at ${requiredRate}% is negative (${formatUSD(npvAtRequiredRate)}).`}
              </p>
              <p className="mt-3">
                This is the same underlying cash flow stream the{" "}
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
                  Net Present Value Calculator
                </code>{" "}
                uses — NPV assumes a rate and reports a dollar amount; IRR
                assumes a dollar amount of zero and reports a rate.
              </p>
            </>
          )}
        </>
      }
    />
  );
}
