"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import {
  calculateTrialBalance,
  type TrialBalanceRow,
} from "@/lib/accounting-math";
import { formatUSD } from "@/lib/finance-math";
import { NumberInput } from "@/components/calculators/shared";

const DEFAULT_ROWS: TrialBalanceRow[] = [
  { account: "Cash", debit: 8000, credit: 0 },
  { account: "Equipment", debit: 12000, credit: 0 },
  { account: "Accounts Payable", debit: 0, credit: 2000 },
  { account: "Loan Payable", debit: 0, credit: 10000 },
  { account: "Owner's Equity", debit: 0, credit: 6000 },
  { account: "Revenue", debit: 0, credit: 9000 },
  { account: "Expenses", debit: 7000, credit: 0 },
];

export default function TrialBalanceCalculator() {
  const [rows, setRows] = useState<TrialBalanceRow[]>(DEFAULT_ROWS);

  const result = useMemo(() => calculateTrialBalance(rows), [rows]);

  function updateRow(index: number, patch: Partial<TrialBalanceRow>) {
    setRows((prev) => prev.map((r, i) => (i === index ? { ...r, ...patch } : r)));
  }

  function removeRow(index: number) {
    setRows((prev) => prev.filter((_, i) => i !== index));
  }

  function addRow() {
    setRows((prev) => [
      ...prev,
      { account: `Account ${prev.length + 1}`, debit: 0, credit: 0 },
    ]);
  }

  return (
    <CalculatorPage
      title="Trial Balance Checker"
      summary="List out account balances and confirm total debits equal total credits — the checkpoint before statements get drafted."
      relatedConcept={{
        label: "How a Financial Report Gets Made",
        href: "/accounting/the-accounting-cycle",
      }}
      inputs={
        <div className="space-y-4">
          {rows.map((row, i) => (
            <div
              key={i}
              className="space-y-2 rounded-md border border-zinc-200 p-3 dark:border-zinc-800"
            >
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={row.account}
                  onChange={(e) => updateRow(i, { account: e.target.value })}
                  className="w-2/3 rounded-md border border-zinc-300 px-2 py-1 text-sm text-zinc-900 focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                />
                {rows.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeRow(i)}
                    className="text-xs font-medium text-red-600 hover:underline dark:text-red-400"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Debit
                  </span>
                  <NumberInput
                    value={row.debit}
                    onChange={(v) => updateRow(i, { debit: v })}
                    prefix="$"
                    min={0}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Credit
                  </span>
                  <NumberInput
                    value={row.credit}
                    onChange={(v) => updateRow(i, { credit: v })}
                    prefix="$"
                    min={0}
                  />
                </label>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addRow}
            className="w-full rounded-md border border-dashed border-zinc-300 py-2 text-sm font-medium text-zinc-600 hover:border-blue-400 hover:text-blue-700 dark:border-zinc-700 dark:text-zinc-400"
          >
            + Add another account
          </button>
        </div>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {result.isBalanced ? "Balanced" : "Out of balance"}
            </p>
            <p
              className={`text-4xl font-bold ${
                result.isBalanced
                  ? "text-zinc-900 dark:text-zinc-100"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {result.isBalanced ? "✓" : formatUSD(Math.abs(result.difference))}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Total debits
              </p>
              <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {formatUSD(result.totalDebits)}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Total credits
              </p>
              <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {formatUSD(result.totalCredits)}
              </p>
            </div>
          </div>
        </div>
      }
      explanation={
        <>
          <p>
            {result.isBalanced
              ? `Total debits and total credits both come to ${formatUSD(result.totalDebits)} — the books balance, so this checkpoint passes.`
              : `Debits and credits differ by ${formatUSD(Math.abs(result.difference))} — something was recorded on only one side, or with mismatched amounts, and needs to be found before drafting statements from these numbers.`}
          </p>
          <p className="mt-3">
            A balanced result only confirms the two columns match in total —
            it doesn&apos;t confirm every transaction was posted to the
            right account. A transaction entered with equal, correct
            amounts but in the wrong account entirely would still balance
            perfectly here while still being wrong.
          </p>
        </>
      }
    />
  );
}
