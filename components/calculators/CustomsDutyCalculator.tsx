"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateCustomsDuty } from "@/lib/tax";
import { formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function CustomsDutyCalculator() {
  const [declaredValue, setDeclaredValue] = useState(10000);
  const [dutyRate, setDutyRate] = useState(15);
  const [handlingFee, setHandlingFee] = useState(50);

  const result = useMemo(
    () =>
      calculateCustomsDuty({
        declaredValue,
        dutyRatePercent: dutyRate,
        handlingFee,
      }),
    [declaredValue, dutyRate, handlingFee]
  );

  return (
    <CalculatorPage
      title="Customs Duty Calculator"
      summary="Estimate the duty owed on an imported shipment, and the total landed cost once duty and fees are added."
      relatedConcept={{
        label: "Customs Duties & Tariffs",
        href: "/taxation/customs-duties-and-tariffs",
      }}
      inputs={
        <>
          <Field label="Declared value of goods">
            <NumberInput
              value={declaredValue}
              onChange={setDeclaredValue}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Duty rate (illustrative — verify current rates)">
            <NumberInput value={dutyRate} onChange={setDutyRate} suffix="%" min={0} step={0.5} />
          </Field>
          <Field label="Customs handling fee (flat, optional)">
            <NumberInput value={handlingFee} onChange={setHandlingFee} prefix="$" min={0} />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Total landed cost
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.totalLandedCost)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Duty owed" value={formatUSD(result.dutyOwed)} />
            <Stat label="Declared value" value={formatUSD(declaredValue)} />
          </div>
        </div>
      }
      explanation={
        <p>
          Duty owed: {formatUSD(declaredValue)} × {dutyRate}% ={" "}
          {formatUSD(result.dutyOwed)}. Total landed cost adds the declared
          value, the duty, and the flat handling fee:{" "}
          {formatUSD(declaredValue)} + {formatUSD(result.dutyOwed)} +{" "}
          {formatUSD(handlingFee)} = {formatUSD(result.totalLandedCost)}.
          Whether this cost gets passed on to customers or absorbed by the
          importer depends on how price-sensitive demand for the good is.
        </p>
      }
    />
  );
}
