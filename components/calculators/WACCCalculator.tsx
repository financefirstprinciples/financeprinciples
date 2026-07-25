"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateCostOfEquityCAPM, calculateWACC, formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function WACCCalculator() {
  const [marketValueOfEquity, setMarketValueOfEquity] = useState(6000000);
  const [marketValueOfDebt, setMarketValueOfDebt] = useState(4000000);
  const [riskFreeRate, setRiskFreeRate] = useState(3);
  const [beta, setBeta] = useState(1.0);
  const [marketReturn, setMarketReturn] = useState(12);
  const [costOfDebt, setCostOfDebt] = useState(6);
  const [taxRate, setTaxRate] = useState(25);

  const costOfEquity = useMemo(
    () =>
      calculateCostOfEquityCAPM({
        riskFreeRatePercent: riskFreeRate,
        beta,
        marketReturnPercent: marketReturn,
      }),
    [riskFreeRate, beta, marketReturn]
  );

  const result = useMemo(
    () =>
      calculateWACC({
        marketValueOfEquity,
        marketValueOfDebt,
        costOfEquityPercent: costOfEquity,
        costOfDebtPercent: costOfDebt,
        taxRatePercent: taxRate,
      }),
    [marketValueOfEquity, marketValueOfDebt, costOfEquity, costOfDebt, taxRate]
  );

  const totalValue = marketValueOfEquity + marketValueOfDebt;

  return (
    <CalculatorPage
      title="Cost of Capital (WACC) Calculator"
      summary="Blend the cost of debt and the cost of equity, weighted by how much of a company is financed by each, into a single discount rate."
      relatedConcept={{
        label: "Cost of Capital (WACC)",
        href: "/finance/cost-of-capital",
      }}
      inputs={
        <>
          <Field label="Market value of equity">
            <NumberInput
              value={marketValueOfEquity}
              onChange={setMarketValueOfEquity}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Market value of debt">
            <NumberInput
              value={marketValueOfDebt}
              onChange={setMarketValueOfDebt}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Risk-free rate">
            <NumberInput
              value={riskFreeRate}
              onChange={setRiskFreeRate}
              suffix="%"
              min={0}
              step={0.1}
            />
          </Field>
          <Field label="Beta">
            <NumberInput value={beta} onChange={setBeta} min={0} step={0.05} />
          </Field>
          <Field label="Expected market return">
            <NumberInput
              value={marketReturn}
              onChange={setMarketReturn}
              suffix="%"
              min={0}
              step={0.1}
            />
          </Field>
          <Field label="Cost of debt (interest rate)">
            <NumberInput
              value={costOfDebt}
              onChange={setCostOfDebt}
              suffix="%"
              min={0}
              step={0.1}
            />
          </Field>
          <Field label="Tax rate">
            <NumberInput
              value={taxRate}
              onChange={setTaxRate}
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
              WACC
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {result.wacc.toFixed(2)}%
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              the minimum return this company needs to earn on new
              investments
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Cost of equity (CAPM)" value={`${costOfEquity.toFixed(2)}%`} />
            <Stat
              label="After-tax cost of debt"
              value={`${result.afterTaxCostOfDebtPercent.toFixed(2)}%`}
            />
            <Stat
              label="Weight of equity"
              value={`${(result.weightOfEquity * 100).toFixed(1)}%`}
            />
            <Stat
              label="Weight of debt"
              value={`${(result.weightOfDebt * 100).toFixed(1)}%`}
            />
            <Stat label="Total capital" value={formatUSD(totalValue)} />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Cost of equity (CAPM): ${riskFreeRate}% + ${beta} × (${marketReturn}% − ${riskFreeRate}%) = ${costOfEquity.toFixed(2)}%

Weight of equity: ${formatUSD(marketValueOfEquity)} / ${formatUSD(totalValue)} = ${(
  result.weightOfEquity * 100
).toFixed(1)}%
Weight of debt:   ${formatUSD(marketValueOfDebt)} / ${formatUSD(totalValue)} = ${(
  result.weightOfDebt * 100
).toFixed(1)}%

After-tax cost of debt: ${costOfDebt}% × (1 − ${taxRate}%) = ${result.afterTaxCostOfDebtPercent.toFixed(2)}%

WACC = (${(result.weightOfEquity * 100).toFixed(1)}% × ${costOfEquity.toFixed(2)}%) + (${(
  result.weightOfDebt * 100
).toFixed(1)}% × ${result.afterTaxCostOfDebtPercent.toFixed(2)}%)
     = ${result.wacc.toFixed(2)}%`}
          </pre>
          <p className="mt-3">
            This blended rate is what belongs in the discount rate slot of
            Net Present Value or DCF Valuation for this company — using just
            the cost of equity or just the cost of debt would misstate what
            the company actually needs to earn to satisfy everyone who
            financed it.
          </p>
        </>
      }
    />
  );
}
