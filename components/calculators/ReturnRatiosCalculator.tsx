"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateReturnRatios } from "@/lib/accounting-math";
import { formatPercent } from "@/lib/tax";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function ReturnRatiosCalculator() {
  const [netIncome, setNetIncome] = useState(100000);
  const [totalAssets, setTotalAssets] = useState(500000);
  const [totalDebt, setTotalDebt] = useState(100000);
  const [totalEquity, setTotalEquity] = useState(400000);

  const result = useMemo(
    () =>
      calculateReturnRatios({
        netIncome,
        totalAssets,
        totalDebt,
        totalEquity,
      }),
    [netIncome, totalAssets, totalDebt, totalEquity]
  );

  return (
    <CalculatorPage
      title="Return & Profitability Ratios Calculator"
      summary="See how efficiently a business turns what it owns, or what's invested in it, into profit."
      relatedConcept={{
        label: "Return & Profitability Ratios",
        href: "/accounting/return-and-profitability-ratios",
      }}
      inputs={
        <>
          <Field label="Net income">
            <NumberInput value={netIncome} onChange={setNetIncome} prefix="$" />
          </Field>
          <Field label="Total assets">
            <NumberInput value={totalAssets} onChange={setTotalAssets} prefix="$" min={0} />
          </Field>
          <Field label="Total debt">
            <NumberInput value={totalDebt} onChange={setTotalDebt} prefix="$" min={0} />
          </Field>
          <Field label="Total equity">
            <NumberInput value={totalEquity} onChange={setTotalEquity} prefix="$" min={0} />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Return on Assets (ROA)
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatPercent(result.roa, 1)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Return on Invested Capital (ROIC)" value={formatPercent(result.roic, 1)} />
            <Stat label="Total invested capital" value={`$${(totalDebt + totalEquity).toLocaleString()}`} />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`ROA  = Net Income / Total Assets                = ${formatPercent(result.roa, 1)}
ROIC = Net Income / (Total Debt + Total Equity)  = ${formatPercent(result.roic, 1)}`}
          </pre>
          <p className="mt-3">
            {Math.abs(result.roa - result.roic) < 0.001
              ? "ROA and ROIC match here because total assets happen to equal total debt plus total equity — that only holds when every asset is funded by invested capital, with no other liabilities like accounts payable in the mix."
              : "ROA and ROIC differ here because total assets don't exactly equal total debt plus total equity — some assets are funded by other liabilities (like accounts payable) that aren't counted as \"invested capital.\""}
          </p>
        </>
      }
    />
  );
}
