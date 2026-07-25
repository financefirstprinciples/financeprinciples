"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateCashFlow } from "@/lib/accounting-math";
import { formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function CashFlowCalculator() {
  const [startingCash, setStartingCash] = useState(5000);
  const [operatingCashFlow, setOperatingCashFlow] = useState(2000);
  const [investingCashFlow, setInvestingCashFlow] = useState(-2000);
  const [financingCashFlow, setFinancingCashFlow] = useState(-1000);

  const result = useMemo(
    () =>
      calculateCashFlow({
        operatingCashFlow,
        investingCashFlow,
        financingCashFlow,
        startingCash,
      }),
    [operatingCashFlow, investingCashFlow, financingCashFlow, startingCash]
  );

  const isPositive = result.netChangeInCash >= 0;

  return (
    <CalculatorPage
      title="Cash Flow Calculator"
      summary="Add up operating, investing, and financing activity to see how much a business's actual cash balance changed over a period."
      relatedConcept={{
        label: "The Cash Flow Statement",
        href: "/accounting/cash-flow-statement",
      }}
      inputs={
        <>
          <Field label="Starting cash balance">
            <NumberInput value={startingCash} onChange={setStartingCash} prefix="$" />
          </Field>
          <Field label="Cash from operating activities">
            <NumberInput value={operatingCashFlow} onChange={setOperatingCashFlow} prefix="$" />
          </Field>
          <Field label="Cash from investing activities">
            <NumberInput value={investingCashFlow} onChange={setInvestingCashFlow} prefix="$" />
          </Field>
          <Field label="Cash from financing activities">
            <NumberInput value={financingCashFlow} onChange={setFinancingCashFlow} prefix="$" />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Net change in cash
            </p>
            <p
              className={`text-4xl font-bold ${
                isPositive
                  ? "text-zinc-900 dark:text-zinc-100"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {formatUSD(result.netChangeInCash)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Starting cash" value={formatUSD(startingCash)} />
            <Stat label="Ending cash" value={formatUSD(result.endingCash)} />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Operating: ${formatUSD(operatingCashFlow)}
Investing: ${formatUSD(investingCashFlow)}
Financing: ${formatUSD(financingCashFlow)}
Net change in cash: ${formatUSD(result.netChangeInCash)}

Starting cash ${formatUSD(startingCash)} + net change ${formatUSD(result.netChangeInCash)} = ending cash ${formatUSD(result.endingCash)}`}
          </pre>
          <p className="mt-3">
            A negative total here doesn&apos;t automatically mean trouble —
            it matters which category it&apos;s coming from. Negative
            investing cash flow often just means the business is growing
            (buying equipment); a negative from operating activities is the
            more serious warning sign, since that's the core business
            itself consuming cash rather than generating it.
          </p>
        </>
      }
    />
  );
}
