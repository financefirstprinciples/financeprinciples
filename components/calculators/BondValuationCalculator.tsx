"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateBondPrice, formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function BondValuationCalculator() {
  const [faceValue, setFaceValue] = useState(1000);
  const [couponRate, setCouponRate] = useState(5);
  const [yearsToMaturity, setYearsToMaturity] = useState(10);
  const [marketYield, setMarketYield] = useState(7);

  const result = useMemo(
    () =>
      calculateBondPrice({
        faceValue,
        couponRatePercent: couponRate,
        yearsToMaturity,
        marketYieldPercent: marketYield,
      }),
    [faceValue, couponRate, yearsToMaturity, marketYield]
  );

  const priceAsPercentOfFace = faceValue === 0 ? 0 : (result.price / faceValue) * 100;
  const tradesAt =
    Math.abs(result.price - faceValue) < 0.5
      ? "par"
      : result.price > faceValue
        ? "a premium"
        : "a discount";

  return (
    <CalculatorPage
      title="Bond Valuation Calculator"
      summary="See what a bond is worth today, given its coupon, maturity, and the current market yield."
      relatedConcept={{ label: "Bond Valuation", href: "/finance/bond-valuation" }}
      inputs={
        <>
          <Field label="Face value">
            <NumberInput value={faceValue} onChange={setFaceValue} prefix="$" min={0} />
          </Field>
          <Field label="Annual coupon rate">
            <NumberInput value={couponRate} onChange={setCouponRate} suffix="%" min={0} step={0.1} />
          </Field>
          <Field label="Years to maturity">
            <NumberInput value={yearsToMaturity} onChange={setYearsToMaturity} suffix="yrs" min={0} />
          </Field>
          <Field label="Market yield">
            <NumberInput value={marketYield} onChange={setMarketYield} suffix="%" min={0} step={0.1} />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Bond price
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.price)}
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              trades at {tradesAt} ({priceAsPercentOfFace.toFixed(1)}% of face value)
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Annual coupon payment" value={formatUSD(result.couponPayment)} />
            <Stat label="Total coupons over the term" value={formatUSD(result.totalCouponsReceived)} />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`PV of coupons:    ${formatUSD(result.pvOfCoupons)}
PV of face value: ${formatUSD(result.pvOfFaceValue)}
Price:            ${formatUSD(result.price)}`}
          </pre>
          <p className="mt-3">
            {marketYield > couponRate
              ? `The market yield (${marketYield}%) is above the coupon rate (${couponRate}%), so this bond's fixed payments are less attractive than what's newly available — its price falls below face value to compensate.`
              : marketYield < couponRate
                ? `The market yield (${marketYield}%) is below the coupon rate (${couponRate}%), so this bond's fixed payments are more attractive than what's newly available — its price rises above face value.`
                : `The market yield exactly matches the coupon rate, so this bond prices at exactly its face value.`}
          </p>
        </>
      }
    />
  );
}
