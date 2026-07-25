"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateDepreciation } from "@/lib/accounting-math";
import { formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function DepreciationCalculator() {
  const [cost, setCost] = useState(6000);
  const [salvageValue, setSalvageValue] = useState(0);
  const [usefulLifeYears, setUsefulLifeYears] = useState(10);
  const [decliningBalanceRate, setDecliningBalanceRate] = useState(2);

  const result = useMemo(
    () =>
      calculateDepreciation({
        cost,
        salvageValue,
        usefulLifeYears,
        decliningBalanceRate,
      }),
    [cost, salvageValue, usefulLifeYears, decliningBalanceRate]
  );

  const totalDecliningBalanceExpense = result.schedule.reduce(
    (sum, y) => sum + y.decliningBalanceExpense,
    0
  );

  return (
    <CalculatorPage
      title="Depreciation Calculator"
      summary="Compare straight-line and declining-balance depreciation side by side, year by year, for the same asset."
      relatedConcept={{ label: "Depreciation", href: "/accounting/depreciation" }}
      inputs={
        <>
          <Field label="Asset cost">
            <NumberInput value={cost} onChange={setCost} prefix="$" min={0} />
          </Field>
          <Field label="Estimated salvage value">
            <NumberInput value={salvageValue} onChange={setSalvageValue} prefix="$" min={0} />
          </Field>
          <Field label="Useful life (years)">
            <NumberInput
              value={usefulLifeYears}
              onChange={setUsefulLifeYears}
              suffix="yrs"
              min={1}
            />
          </Field>
          <Field label="Declining-balance accelerator (2 = double-declining)">
            <NumberInput
              value={decliningBalanceRate}
              onChange={setDecliningBalanceRate}
              min={1}
              step={0.5}
            />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Straight-line: annual expense
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.annualStraightLineExpense)}
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              every year for {usefulLifeYears} years
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat
              label="Declining balance: year 1 expense"
              value={formatUSD(result.schedule[0]?.decliningBalanceExpense ?? 0)}
            />
            <Stat
              label="Declining balance: total expensed"
              value={formatUSD(totalDecliningBalanceExpense)}
            />
          </div>
        </div>
      }
      explanation={
        <>
          <p>
            Straight-line spreads the cost evenly:{" "}
            {formatUSD(cost)} − {formatUSD(salvageValue)} salvage, divided
            by {usefulLifeYears} years, is {formatUSD(result.annualStraightLineExpense)}{" "}
            every year. Declining balance instead applies a fixed rate to
            whatever book value is left, front-loading the expense:
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Year  Straight-line    Declining balance    SL book value    DB book value
${result.schedule
  .map(
    (y) =>
      `${String(y.year).padEnd(6)}${formatUSD(y.straightLineExpense).padEnd(17)}${formatUSD(
        y.decliningBalanceExpense
      ).padEnd(21)}${formatUSD(y.straightLineEndingBookValue).padEnd(17)}${formatUSD(
        y.decliningBalanceEndingBookValue
      )}`
  )
  .join("\n")}`}
          </pre>
          <p className="mt-3">
            Both methods expense the same total amount over the asset&apos;s
            life ({formatUSD(cost - salvageValue)}) — declining balance just
            recognizes more of it in the earlier years and less in the
            later years, instead of spreading it evenly.
          </p>
        </>
      }
    />
  );
}
