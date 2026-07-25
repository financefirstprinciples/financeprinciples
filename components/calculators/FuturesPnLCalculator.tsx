"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateFuturesPnL, formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function FuturesPnLCalculator() {
  const [agreedPrice, setAgreedPrice] = useState(5.0);
  const [marketPrice, setMarketPrice] = useState(4.2);
  const [numberOfContracts, setNumberOfContracts] = useState(10000);
  const [position, setPosition] = useState<"long" | "short">("short");

  const result = useMemo(
    () =>
      calculateFuturesPnL({
        agreedPrice,
        marketPrice,
        numberOfContracts,
        position,
      }),
    [agreedPrice, marketPrice, numberOfContracts, position]
  );

  const isProfit = result.profitOrLoss >= 0;

  return (
    <CalculatorPage
      title="Futures P&L Calculator"
      summary="See the profit or loss on a long or short futures position, given the agreed price and where the market price ended up."
      relatedConcept={{
        label: "Futures Contracts",
        href: "/finance/futures-contracts",
      }}
      inputs={
        <>
          <Field label="Position">
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value as "long" | "short")}
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="long">Long (agreed to buy)</option>
              <option value="short">Short (agreed to sell)</option>
            </select>
          </Field>
          <Field label="Agreed (contract) price">
            <NumberInput value={agreedPrice} onChange={setAgreedPrice} prefix="$" step={0.01} />
          </Field>
          <Field label="Actual market price at settlement">
            <NumberInput value={marketPrice} onChange={setMarketPrice} prefix="$" step={0.01} />
          </Field>
          <Field label="Number of contracts / units">
            <NumberInput
              value={numberOfContracts}
              onChange={setNumberOfContracts}
              min={0}
            />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {isProfit ? "Profit" : "Loss"}
            </p>
            <p
              className={`text-4xl font-bold ${
                isProfit
                  ? "text-zinc-900 dark:text-zinc-100"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {formatUSD(result.profitOrLoss)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat
              label="Total locked-in value"
              value={formatUSD(result.totalNotionalAtAgreedPrice)}
            />
            <Stat
              label="Price difference"
              value={`${formatUSD(marketPrice - agreedPrice)} / unit`}
            />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{position === "long"
  ? `Long P&L = (Market price − Agreed price) × contracts
         = (${formatUSD(marketPrice)} − ${formatUSD(agreedPrice)}) × ${numberOfContracts}
         = ${formatUSD(result.profitOrLoss)}`
  : `Short P&L = (Agreed price − Market price) × contracts
          = (${formatUSD(agreedPrice)} − ${formatUSD(marketPrice)}) × ${numberOfContracts}
          = ${formatUSD(result.profitOrLoss)}`}
          </pre>
          <p className="mt-3">
            This P&L is relative to what you&apos;d have gotten transacting
            at the market price instead — the whole point of locking in the
            agreed price was certainty, not necessarily coming out ahead.
          </p>
        </>
      }
    />
  );
}
