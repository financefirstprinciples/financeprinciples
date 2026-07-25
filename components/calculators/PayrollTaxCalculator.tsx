"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { formatUSD } from "@/lib/finance-math";
import { formatPercent } from "@/lib/tax";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function PayrollTaxCalculator() {
  const [annualWages, setAnnualWages] = useState(60000);
  const [retirementRate, setRetirementRate] = useState(6);
  const [retirementCap, setRetirementCap] = useState(160000);
  const [healthRate, setHealthRate] = useState(1.5);

  const result = useMemo(() => {
    const retirementTaxableWages = Math.min(annualWages, retirementCap);
    const retirementWithheld = retirementTaxableWages * (retirementRate / 100);
    const healthWithheld = annualWages * (healthRate / 100);
    const totalWithheld = retirementWithheld + healthWithheld;
    const effectiveRate = annualWages === 0 ? 0 : totalWithheld / annualWages;
    return { retirementWithheld, healthWithheld, totalWithheld, effectiveRate };
  }, [annualWages, retirementRate, retirementCap, healthRate]);

  return (
    <CalculatorPage
      title="Payroll Tax Calculator"
      summary="See how much gets withheld for a capped retirement program and an uncapped health program — and how the cap changes the effective rate as wages rise."
      relatedConcept={{ label: "Payroll Taxes", href: "/taxation/payroll-taxes" }}
      inputs={
        <>
          <Field label="Annual wages">
            <NumberInput value={annualWages} onChange={setAnnualWages} prefix="$" min={0} />
          </Field>
          <Field label="Retirement program rate">
            <NumberInput
              value={retirementRate}
              onChange={setRetirementRate}
              suffix="%"
              min={0}
              step={0.1}
            />
          </Field>
          <Field label="Retirement program wage cap">
            <NumberInput value={retirementCap} onChange={setRetirementCap} prefix="$" min={0} />
          </Field>
          <Field label="Health program rate (uncapped)">
            <NumberInput
              value={healthRate}
              onChange={setHealthRate}
              suffix="%"
              min={0}
              step={0.1}
            />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Total withheld from paycheck
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.totalWithheld)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Retirement portion" value={formatUSD(result.retirementWithheld)} />
            <Stat label="Health portion" value={formatUSD(result.healthWithheld)} />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Retirement: ${formatPercent(retirementRate / 100, 1)} × ${formatUSD(
  Math.min(annualWages, retirementCap)
)} (capped at ${formatUSD(retirementCap)}) = ${formatUSD(result.retirementWithheld)}
Health:     ${formatPercent(healthRate / 100, 1)} × ${formatUSD(annualWages)} (uncapped) = ${formatUSD(result.healthWithheld)}`}
          </pre>
          <p className="mt-3">
            Effective overall payroll tax rate:{" "}
            {formatPercent(result.effectiveRate, 2)} of wages. If your wages
            are above the {formatUSD(retirementCap)} cap, this effective
            rate falls as wages rise further — the retirement portion stops
            growing entirely once wages pass the cap, even though the
            stated rate never changes. Employers typically owe a separate,
            matching amount on top of what&apos;s shown here.
          </p>
        </>
      }
    />
  );
}
