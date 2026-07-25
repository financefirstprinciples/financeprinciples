"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateIncomeStatement } from "@/lib/accounting-math";
import { formatUSD } from "@/lib/finance-math";
import { formatPercent } from "@/lib/tax";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function IncomeStatementCalculator() {
  const [revenue, setRevenue] = useState(20000);
  const [costOfGoodsSold, setCostOfGoodsSold] = useState(6000);
  const [operatingExpenses, setOperatingExpenses] = useState(10000);
  const [otherExpenses, setOtherExpenses] = useState(0);

  const result = useMemo(
    () =>
      calculateIncomeStatement({
        revenue,
        costOfGoodsSold,
        operatingExpenses,
        otherExpenses,
      }),
    [revenue, costOfGoodsSold, operatingExpenses, otherExpenses]
  );

  return (
    <CalculatorPage
      title="Income Statement & Margin Calculator"
      summary="Turn revenue and expenses into net income, then into gross, operating, and net margin — the same figures at every stage of the income statement."
      relatedConcept={{ label: "The Income Statement", href: "/accounting/income-statement" }}
      inputs={
        <>
          <Field label="Revenue">
            <NumberInput value={revenue} onChange={setRevenue} prefix="$" min={0} />
          </Field>
          <Field label="Cost of goods sold">
            <NumberInput
              value={costOfGoodsSold}
              onChange={setCostOfGoodsSold}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Operating expenses (rent, wages, marketing)">
            <NumberInput
              value={operatingExpenses}
              onChange={setOperatingExpenses}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Other expenses (interest, taxes)">
            <NumberInput
              value={otherExpenses}
              onChange={setOtherExpenses}
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
              Net income
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.netIncome)}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Stat label="Gross margin" value={formatPercent(result.grossMargin, 1)} />
            <Stat label="Operating margin" value={formatPercent(result.operatingMargin, 1)} />
            <Stat label="Net margin" value={formatPercent(result.netMargin, 1)} />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Revenue:                    ${formatUSD(revenue)}
− Cost of goods sold:        ${formatUSD(costOfGoodsSold)}
= Gross profit:              ${formatUSD(result.grossProfit)}   (${formatPercent(result.grossMargin, 1)} margin)

− Operating expenses:        ${formatUSD(operatingExpenses)}
= Operating income:          ${formatUSD(result.operatingIncome)}   (${formatPercent(result.operatingMargin, 1)} margin)

− Other expenses:            ${formatUSD(otherExpenses)}
= Net income:                ${formatUSD(result.netIncome)}   (${formatPercent(result.netMargin, 1)} margin)`}
          </pre>
          <p className="mt-3">
            Each margin divides the profit figure at that stage by revenue,
            which is what makes it possible to compare this business&apos;s
            efficiency to one of a completely different size.
          </p>
        </>
      }
    />
  );
}
