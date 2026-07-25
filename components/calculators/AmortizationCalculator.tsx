"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import {
  calculateAmortization,
  formatUSD,
  type CompoundingFrequency,
} from "@/lib/finance-math";
import { Field, FrequencySelect, NumberInput, Stat } from "@/components/calculators/shared";

const LOAN_PURPOSES = [
  "Personal loan",
  "Auto loan",
  "Business term loan",
  "Mortgage / home loan",
  "Other loan",
] as const;

type LoanPurpose = (typeof LOAN_PURPOSES)[number];

export default function AmortizationCalculator() {
  const [principal, setPrincipal] = useState(200000);
  const [rate, setRate] = useState(6);
  const [years, setYears] = useState(30);
  const [frequency, setFrequency] = useState<CompoundingFrequency>("monthly");
  const [loanPurpose, setLoanPurpose] = useState<LoanPurpose>("Personal loan");
  const [originationFeePercent, setOriginationFeePercent] = useState(0);

  const result = useMemo(
    () =>
      calculateAmortization({
        principal,
        annualRatePercent: rate,
        years,
        frequency,
      }),
    [principal, rate, years, frequency]
  );

  const periodLabel =
    frequency === "annual" ? "year" : frequency === "monthly" ? "month" : "day";

  const originationFeeAmount = principal * (originationFeePercent / 100);
  const netProceeds = principal - originationFeeAmount;
  const hasFee = originationFeePercent > 0;

  return (
    <CalculatorPage
      title="Amortization Calculator"
      summary={`See how a fixed ${loanPurpose.toLowerCase()} payment splits between interest and principal, and how that split shifts over the life of the loan.`}
      relatedConcept={{ label: "Amortization", href: "/finance/amortization" }}
      inputs={
        <>
          <Field label="Loan purpose">
            <select
              value={loanPurpose}
              onChange={(e) => setLoanPurpose(e.target.value as LoanPurpose)}
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-blue-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            >
              {LOAN_PURPOSES.map((purpose) => (
                <option key={purpose} value={purpose}>
                  {purpose}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Loan amount (principal)">
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
          <Field label="Loan term (years)">
            <NumberInput value={years} onChange={setYears} suffix="yrs" min={1} />
          </Field>
          <Field label="Payment frequency">
            <FrequencySelect value={frequency} onChange={setFrequency} />
          </Field>
          <Field label="Origination fee (optional)">
            <NumberInput
              value={originationFeePercent}
              onChange={setOriginationFeePercent}
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
              Payment per {periodLabel}
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(result.paymentPerPeriod)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Total paid over the loan" value={formatUSD(result.totalPaid)} />
            <Stat label="Total interest paid" value={formatUSD(result.totalInterest)} />
          </div>
          {hasFee && (
            <div className="grid grid-cols-2 gap-4">
              <Stat label="Origination fee" value={formatUSD(originationFeeAmount)} />
              <Stat label="Net amount you receive" value={formatUSD(netProceeds)} />
            </div>
          )}
        </div>
      }
      explanation={
        <>
          <p>
            Every payment is the same size —{" "}
            {formatUSD(result.paymentPerPeriod)} — but how much of it goes
            toward interest versus principal shifts as the loan balance
            shrinks:
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`First payment:  ${formatUSD(result.firstPeriodInterest)} interest + ${formatUSD(result.firstPeriodPrincipal)} principal
Last payment:   ${formatUSD(result.lastPeriodInterest)} interest + ${formatUSD(result.lastPeriodPrincipal)} principal`}
          </pre>
          <p className="mt-3">
            Over {result.totalPeriods} payments, this loan costs{" "}
            {formatUSD(result.totalInterest)} in interest on top of the{" "}
            {formatUSD(principal)} borrowed — because early payments are
            mostly interest, paying extra toward principal early in the loan
            has an outsized effect on the total interest paid.
          </p>
          {hasFee && (
            <p className="mt-3">
              An <strong>origination fee</strong> is an upfront charge some
              lenders deduct from the loan before handing over the rest —
              here, {formatUSD(originationFeeAmount)} ({originationFeePercent}%
              of {formatUSD(principal)}), leaving you with{" "}
              {formatUSD(netProceeds)} in hand. Your payments are still
              calculated on the full {formatUSD(principal)} principal, so
              the fee makes this loan effectively more expensive than the{" "}
              {rate}% rate alone suggests — you're paying interest on money
              you never actually got to keep.
            </p>
          )}
        </>
      }
    />
  );
}
