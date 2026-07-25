"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import {
  calculateCompoundInterest,
  formatUSD,
  type CompoundingFrequency,
} from "@/lib/finance-math";
import { formatPercent } from "@/lib/tax";

const FREQUENCY_OPTIONS: { value: CompoundingFrequency; label: string }[] = [
  { value: "annual", label: "Annually" },
  { value: "monthly", label: "Monthly" },
  { value: "daily", label: "Daily" },
];

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(20);
  const [frequency, setFrequency] = useState<CompoundingFrequency>("monthly");

  const result = useMemo(
    () =>
      calculateCompoundInterest({
        principal,
        annualRatePercent: rate,
        years,
        frequency,
      }),
    [principal, rate, years, frequency]
  );

  return (
    <CalculatorPage
      title="Compound Interest Calculator"
      summary="See how a lump sum grows over time under different compounding frequencies."
      relatedConcept={{ label: "Compound Interest", href: "/finance/compound-interest" }}
      inputs={
        <>
          <Field label="Principal (starting amount)">
            <NumberInput
              value={principal}
              onChange={setPrincipal}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Annual interest rate">
            <NumberInput
              value={rate}
              onChange={setRate}
              suffix="%"
              min={0}
              step={0.1}
            />
          </Field>
          <Field label="Time horizon (years)">
            <NumberInput value={years} onChange={setYears} suffix="yrs" min={0} />
          </Field>
          <Field label="Compounding frequency">
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as CompoundingFrequency)}
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            >
              {FREQUENCY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Final balance
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.finalBalance)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Total interest earned" value={formatUSD(result.totalInterest)} />
            <Stat
              label="Effective annual rate"
              value={formatPercent(result.effectiveAnnualRate, 2)}
            />
          </div>
        </div>
      }
      explanation={
        <>
          <p>
            The calculator applies the compound interest formula{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
              A = P × (1 + r/n)^(n×t)
            </code>
            , where <code>P</code> is your principal (starting amount),{" "}
            <code>r</code> is the annual nominal rate — the rate you were
            quoted, before accounting for compounding — as a decimal,{" "}
            <code>n</code> is the number of compounding periods per year (
            {result.periodsPerYear} for {frequency} compounding), and{" "}
            <code>t</code> is the number of years.
          </p>
          <p className="mt-3">
            Because interest gets added to the balance more than once a
            year, more frequent compounding produces a slightly higher{" "}
            <em>effective</em> annual rate — the rate you actually earn —
            than the nominal rate you were quoted. Here, a quoted{" "}
            {formatPercent(rate / 100, 2)} compounds to an effective{" "}
            {formatPercent(result.effectiveAnnualRate, 2)} per year.
          </p>
        </>
      }
    />
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </span>
      {children}
    </label>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{label}</p>
      <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{value}</p>
    </div>
  );
}

function NumberInput({
  value,
  onChange,
  prefix,
  suffix,
  min,
  step = 1,
}: {
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  step?: number;
}) {
  return (
    <div className="relative">
      {prefix && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
          {prefix}
        </span>
      )}
      <input
        type="number"
        value={Number.isNaN(value) ? "" : value}
        min={min}
        step={step}
        onChange={(e) => onChange(e.target.valueAsNumber)}
        className={`w-full rounded-md border border-zinc-300 py-2 text-zinc-900 focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 ${
          prefix ? "pl-7" : "pl-3"
        } ${suffix ? "pr-12" : "pr-3"}`}
      />
      {suffix && (
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">
          {suffix}
        </span>
      )}
    </div>
  );
}
