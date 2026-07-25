"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { compareDebtPayoffStrategies, type Debt } from "@/lib/personal-finance-math";
import { formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

const DEFAULT_DEBTS: Debt[] = [
  { name: "Credit card", balance: 1000, annualRatePercent: 8, minPayment: 50 },
  { name: "Car loan", balance: 5000, annualRatePercent: 20, minPayment: 150 },
];

export default function DebtPayoffCalculator() {
  const [debts, setDebts] = useState<Debt[]>(DEFAULT_DEBTS);
  const [extraPayment, setExtraPayment] = useState(200);

  const result = useMemo(
    () => compareDebtPayoffStrategies(debts, extraPayment),
    [debts, extraPayment]
  );

  function updateDebt(index: number, patch: Partial<Debt>) {
    setDebts((prev) => prev.map((d, i) => (i === index ? { ...d, ...patch } : d)));
  }

  function removeDebt(index: number) {
    setDebts((prev) => prev.filter((_, i) => i !== index));
  }

  function addDebt() {
    setDebts((prev) => [
      ...prev,
      { name: `Debt ${prev.length + 1}`, balance: 1000, annualRatePercent: 15, minPayment: 50 },
    ]);
  }

  return (
    <CalculatorPage
      title="Debt Payoff Calculator"
      summary="Compare the avalanche and snowball methods side by side for your own debts."
      relatedConcept={{
        label: "Debt Payoff Strategies",
        href: "/personal-finance/debt-payoff",
      }}
      inputs={
        <div className="space-y-4">
          {debts.map((debt, i) => (
            <div
              key={i}
              className="space-y-2 rounded-md border border-zinc-200 p-3 dark:border-zinc-800"
            >
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={debt.name}
                  onChange={(e) => updateDebt(i, { name: e.target.value })}
                  className="w-2/3 rounded-md border border-zinc-300 px-2 py-1 text-sm text-zinc-900 focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                />
                {debts.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDebt(i)}
                    className="text-xs font-medium text-red-600 hover:underline dark:text-red-400"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Field label="Balance">
                  <NumberInput
                    value={debt.balance}
                    onChange={(v) => updateDebt(i, { balance: v })}
                    prefix="$"
                    min={0}
                  />
                </Field>
                <Field label="Rate">
                  <NumberInput
                    value={debt.annualRatePercent}
                    onChange={(v) => updateDebt(i, { annualRatePercent: v })}
                    suffix="%"
                    min={0}
                    step={0.1}
                  />
                </Field>
                <Field label="Min payment">
                  <NumberInput
                    value={debt.minPayment}
                    onChange={(v) => updateDebt(i, { minPayment: v })}
                    prefix="$"
                    min={0}
                  />
                </Field>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addDebt}
            className="w-full rounded-md border border-dashed border-zinc-300 py-2 text-sm font-medium text-zinc-600 hover:border-blue-400 hover:text-blue-700 dark:border-zinc-700 dark:text-zinc-400"
          >
            + Add another debt
          </button>
          <Field label="Extra payment per month (beyond minimums)">
            <NumberInput value={extraPayment} onChange={setExtraPayment} prefix="$" min={0} />
          </Field>
        </div>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Avalanche: months to debt-free
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {result.avalanche.monthsToPayoff}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat
              label="Avalanche total interest"
              value={formatUSD(result.avalanche.totalInterestPaid)}
            />
            <Stat
              label="Snowball total interest"
              value={formatUSD(result.snowball.totalInterestPaid)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Avalanche months" value={String(result.avalanche.monthsToPayoff)} />
            <Stat label="Snowball months" value={String(result.snowball.monthsToPayoff)} />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Avalanche (highest rate first):  ${result.avalanche.monthsToPayoff} months, ${formatUSD(result.avalanche.totalInterestPaid)} total interest
Snowball  (smallest balance first): ${result.snowball.monthsToPayoff} months, ${formatUSD(result.snowball.totalInterestPaid)} total interest`}
          </pre>
          <p className="mt-3">
            Avalanche directs every extra dollar to whichever debt has the
            highest interest rate; snowball directs it to whichever debt
            has the smallest balance. Avalanche usually saves more in total
            interest — here,{" "}
            {formatUSD(
              Math.abs(
                result.snowball.totalInterestPaid - result.avalanche.totalInterestPaid
              )
            )}{" "}
            {result.avalanche.totalInterestPaid <= result.snowball.totalInterestPaid
              ? "less"
              : "more"}{" "}
            — but snowball clears individual debts sooner, which can matter
            more in practice than the math alone.
          </p>
          {(result.avalanche.reachedSafetyCap || result.snowball.reachedSafetyCap) && (
            <p className="mt-3 text-red-600 dark:text-red-400">
              At this extra payment amount, at least one debt never gets
              paid off within 100 years — the minimum payments likely
              aren&apos;t covering the interest that accrues. Try a larger
              extra payment.
            </p>
          )}
        </>
      }
    />
  );
}
