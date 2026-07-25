"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateAmortization, formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [years, setYears] = useState(30);
  const [rate, setRate] = useState(6);
  const [monthlyEscrow, setMonthlyEscrow] = useState(400);

  const downPaymentAmount = homePrice * (downPaymentPercent / 100);
  const loanAmount = Math.max(0, homePrice - downPaymentAmount);

  const amortization = useMemo(
    () =>
      calculateAmortization({
        principal: loanAmount,
        annualRatePercent: rate,
        years,
        frequency: "monthly",
      }),
    [loanAmount, rate, years]
  );

  const totalMonthlyPayment = amortization.paymentPerPeriod + monthlyEscrow;

  return (
    <CalculatorPage
      title="Mortgage Calculator"
      summary="See your full monthly mortgage payment — principal, interest, and an estimated escrow for property tax and insurance — plus the underlying amortization."
      relatedConcept={{ label: "Amortization", href: "/finance/amortization" }}
      inputs={
        <>
          <Field label="Home price">
            <NumberInput value={homePrice} onChange={setHomePrice} prefix="$" min={0} />
          </Field>
          <Field label="Down payment">
            <NumberInput
              value={downPaymentPercent}
              onChange={setDownPaymentPercent}
              suffix="%"
              min={0}
              step={1}
            />
          </Field>
          <Field label="Loan term (years)">
            <NumberInput value={years} onChange={setYears} suffix="yrs" min={1} />
          </Field>
          <Field label="Interest rate">
            <NumberInput value={rate} onChange={setRate} suffix="%" min={0} step={0.1} />
          </Field>
          <Field label="Property tax & insurance (monthly estimate, optional)">
            <NumberInput value={monthlyEscrow} onChange={setMonthlyEscrow} prefix="$" min={0} />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Total monthly payment
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatUSD(totalMonthlyPayment)}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat
              label="Principal & interest"
              value={formatUSD(amortization.paymentPerPeriod)}
            />
            <Stat label="Escrow (tax & insurance)" value={formatUSD(monthlyEscrow)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Down payment" value={formatUSD(downPaymentAmount)} />
            <Stat label="Loan amount" value={formatUSD(loanAmount)} />
          </div>
        </div>
      }
      explanation={
        <>
          <p>
            The home price minus your {downPaymentPercent}% down payment (
            {formatUSD(downPaymentAmount)}) leaves a {formatUSD(loanAmount)}{" "}
            loan, amortized over {years} years at {rate}% — the same fixed-payment
            math as any other loan (see{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
              Amortization
            </code>
            ):
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`First payment:  ${formatUSD(amortization.firstPeriodInterest)} interest + ${formatUSD(amortization.firstPeriodPrincipal)} principal
Last payment:   ${formatUSD(amortization.lastPeriodInterest)} interest + ${formatUSD(amortization.lastPeriodPrincipal)} principal
Total interest over the loan: ${formatUSD(amortization.totalInterest)}`}
          </pre>
          <p className="mt-3">
            <strong>Escrow</strong> is a reserve account many lenders
            collect into every month, alongside your principal and interest,
            so they can pay your property tax and homeowners insurance bills
            on your behalf when they come due — instead of you having to pay
            those large annual bills yourself in one lump sum. It&apos;s not
            part of the loan itself, but it&apos;s typically bundled into
            the single monthly payment you actually send.
          </p>
        </>
      }
    />
  );
}
