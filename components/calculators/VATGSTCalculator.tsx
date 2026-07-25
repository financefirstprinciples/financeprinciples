"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateConsumptionTax, type ConsumptionTaxMode } from "@/lib/tax";
import { formatUSD } from "@/lib/finance-math";
import { Field, NumberInput } from "@/components/calculators/shared";

const RATE_PRESETS = [
  { label: "Custom", rate: null },
  { label: "United Kingdom (VAT, standard rate)", rate: 20 },
  { label: "EU-generic (VAT, illustrative)", rate: 21 },
  { label: "India (GST, standard slab)", rate: 18 },
  { label: "Canada (GST, federal only)", rate: 5 },
];

export default function VATGSTCalculator() {
  const [amount, setAmount] = useState(100);
  const [rate, setRate] = useState(20);
  const [mode, setMode] = useState<ConsumptionTaxMode>("add");

  const result = useMemo(
    () => calculateConsumptionTax({ amount, ratePercent: rate, mode }),
    [amount, rate, mode]
  );

  return (
    <CalculatorPage
      title="VAT / GST Calculator"
      summary="Add tax to a price, or extract the tax portion from a tax-inclusive total."
      relatedConcept={{ label: "VAT / GST", href: "/taxation/vat-gst" }}
      inputs={
        <>
          <Field label="Mode">
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as ConsumptionTaxMode)}
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            >
              <option value="add">Add tax to a pre-tax price</option>
              <option value="extract">Extract tax from a tax-inclusive total</option>
            </select>
          </Field>
          <Field
            label={mode === "add" ? "Pre-tax price" : "Tax-inclusive total"}
          >
            <NumberInput value={amount} onChange={setAmount} prefix="$" min={0} />
          </Field>
          <Field label="Rate preset (illustrative — verify current rates)">
            <select
              onChange={(e) => {
                const preset = RATE_PRESETS.find((p) => p.label === e.target.value);
                if (preset?.rate !== null && preset?.rate !== undefined) {
                  setRate(preset.rate);
                }
              }}
              defaultValue="Custom"
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            >
              {RATE_PRESETS.map((p) => (
                <option key={p.label} value={p.label}>
                  {p.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Tax rate">
            <NumberInput value={rate} onChange={setRate} suffix="%" min={0} step={0.5} />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Total (tax-inclusive)
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.totalAmount)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Pre-tax amount
              </p>
              <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {formatUSD(result.preTaxAmount)}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Tax amount
              </p>
              <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {formatUSD(result.taxAmount)}
              </p>
            </div>
          </div>
        </div>
      }
      explanation={
        <p>
          {mode === "add"
            ? `${formatUSD(result.preTaxAmount)} plus ${rate}% tax adds ${formatUSD(result.taxAmount)}, for a total of ${formatUSD(result.totalAmount)}.`
            : `${formatUSD(result.totalAmount)} is a tax-inclusive total at ${rate}%. Working backward, ${formatUSD(result.preTaxAmount)} of that is the pre-tax price, and ${formatUSD(result.taxAmount)} of it is tax — dividing by (1 + rate) rather than just subtracting the rate from the total, since the rate applies to the pre-tax amount, not the total itself.`}
        </p>
      }
    />
  );
}
