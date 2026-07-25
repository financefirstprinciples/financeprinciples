"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateDCFValuation, formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function DCFValuationCalculator() {
  const [year1FreeCashFlow, setYear1FreeCashFlow] = useState(100000);
  const [growthRate, setGrowthRate] = useState(10);
  const [projectionYears, setProjectionYears] = useState(5);
  const [discountRate, setDiscountRate] = useState(12);
  const [terminalGrowthRate, setTerminalGrowthRate] = useState(3);

  const result = useMemo(
    () =>
      calculateDCFValuation({
        year1FreeCashFlow,
        growthRatePercent: growthRate,
        projectionYears,
        discountRatePercent: discountRate,
        terminalGrowthRatePercent: terminalGrowthRate,
      }),
    [year1FreeCashFlow, growthRate, projectionYears, discountRate, terminalGrowthRate]
  );

  const invalidTerminal = terminalGrowthRate >= discountRate;
  const terminalShareOfTotal =
    result.totalValue === 0 ? 0 : result.discountedTerminalValue / result.totalValue;

  return (
    <CalculatorPage
      title="DCF Valuation Calculator"
      summary="Project free cash flow, discount it back to today, and add a terminal value for everything beyond the projection period."
      relatedConcept={{ label: "Discounted Cash Flow (DCF) Valuation", href: "/finance/dcf-valuation" }}
      inputs={
        <>
          <Field label="Next year's free cash flow">
            <NumberInput
              value={year1FreeCashFlow}
              onChange={setYear1FreeCashFlow}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Growth rate during projection period">
            <NumberInput value={growthRate} onChange={setGrowthRate} suffix="%" step={0.5} />
          </Field>
          <Field label="Projection years">
            <NumberInput
              value={projectionYears}
              onChange={setProjectionYears}
              suffix="yrs"
              min={1}
            />
          </Field>
          <Field label="Discount rate (WACC)">
            <NumberInput
              value={discountRate}
              onChange={setDiscountRate}
              suffix="%"
              min={0}
              step={0.1}
            />
          </Field>
          <Field label="Terminal growth rate (after projection period)">
            <NumberInput
              value={terminalGrowthRate}
              onChange={setTerminalGrowthRate}
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
              Estimated total value
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {invalidTerminal ? "—" : formatUSD(result.totalValue)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat
              label="Sum of projected years"
              value={formatUSD(result.sumOfDiscountedCashFlows)}
            />
            <Stat
              label="Discounted terminal value"
              value={invalidTerminal ? "—" : formatUSD(result.discountedTerminalValue)}
            />
          </div>
        </div>
      }
      explanation={
        <>
          {invalidTerminal ? (
            <p>
              The terminal growth rate ({terminalGrowthRate}%) has to stay
              below the discount rate ({discountRate}%) for the terminal
              value formula to make sense — otherwise it implies a business
              growing faster than its discount rate forever, which produces
              an unrealistic, runaway number. Lower the terminal growth
              rate or raise the discount rate to see a result.
            </p>
          ) : (
            <>
              <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{result.projectedCashFlows
  .map(
    (cf, i) =>
      `Year ${i + 1}: ${formatUSD(cf)} → ${formatUSD(result.discountedCashFlows[i])} today`
  )
  .join("\n")}
{`
Terminal value: ${formatUSD(result.terminalValue)} → ${formatUSD(result.discountedTerminalValue)} today`}
              </pre>
              <p className="mt-3">
                The terminal value makes up{" "}
                {(terminalShareOfTotal * 100).toFixed(0)}% of the total
                estimated value here — a reminder that most of a DCF
                valuation usually rests on the single least certain
                assumption: what growth rate a business can sustain
                indefinitely.
              </p>
            </>
          )}
        </>
      }
    />
  );
}
