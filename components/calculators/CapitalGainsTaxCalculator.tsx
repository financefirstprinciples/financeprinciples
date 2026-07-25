"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function CapitalGainsTaxCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(5000);
  const [salePrice, setSalePrice] = useState(8000);
  const [ordinaryRate, setOrdinaryRate] = useState(24);
  const [longTermRate, setLongTermRate] = useState(15);

  const result = useMemo(() => {
    const gain = Math.max(0, salePrice - purchasePrice);
    const shortTermTax = gain * (ordinaryRate / 100);
    const longTermTax = gain * (longTermRate / 100);
    return { gain, shortTermTax, longTermTax, difference: shortTermTax - longTermTax };
  }, [purchasePrice, salePrice, ordinaryRate, longTermRate]);

  return (
    <CalculatorPage
      title="Capital Gains Tax Calculator"
      summary="See how the same gain is taxed differently depending on whether it's held short-term or long-term before selling."
      relatedConcept={{ label: "Capital Gains Tax", href: "/taxation/capital-gains-tax" }}
      inputs={
        <>
          <Field label="Purchase price">
            <NumberInput value={purchasePrice} onChange={setPurchasePrice} prefix="$" min={0} />
          </Field>
          <Field label="Sale price">
            <NumberInput value={salePrice} onChange={setSalePrice} prefix="$" min={0} />
          </Field>
          <Field label="Ordinary income rate (short-term)">
            <NumberInput
              value={ordinaryRate}
              onChange={setOrdinaryRate}
              suffix="%"
              min={0}
              step={0.5}
            />
          </Field>
          <Field label="Long-term capital gains rate">
            <NumberInput
              value={longTermRate}
              onChange={setLongTermRate}
              suffix="%"
              min={0}
              step={0.5}
            />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Capital gain
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.gain)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Tax if short-term" value={formatUSD(result.shortTermTax)} />
            <Stat label="Tax if long-term" value={formatUSD(result.longTermTax)} />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Gain: ${formatUSD(salePrice)} − ${formatUSD(purchasePrice)} = ${formatUSD(result.gain)}

Short-term (ordinary rate): ${formatUSD(result.gain)} × ${ordinaryRate}% = ${formatUSD(result.shortTermTax)}
Long-term (LTCG rate):      ${formatUSD(result.gain)} × ${longTermRate}% = ${formatUSD(result.longTermTax)}`}
          </pre>
          <p className="mt-3">
            Same gain, same investment — holding it long-term instead of
            short-term before selling saves {formatUSD(result.difference)}{" "}
            in tax here, purely because of the holding period.
          </p>
        </>
      }
    />
  );
}
