"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { evaluateCapitalBudgetingDecision, formatUSD } from "@/lib/finance-math";
import { formatPercent } from "@/lib/tax";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function CapitalBudgetingDecisionCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(5000);
  const [annualCashFlow, setAnnualCashFlow] = useState(1500);
  const [years, setYears] = useState(6);
  const [hurdleRate, setHurdleRate] = useState(8);

  const cashFlows = useMemo(
    () => Array(Math.max(0, Math.trunc(years || 0))).fill(annualCashFlow),
    [annualCashFlow, years]
  );

  const result = useMemo(
    () =>
      evaluateCapitalBudgetingDecision({
        initialInvestment,
        cashFlows,
        hurdleRatePercent: hurdleRate,
      }),
    [initialInvestment, cashFlows, hurdleRate]
  );

  const isAccept = result.verdict === "accept";

  return (
    <CalculatorPage
      title="Capital Budgeting Decision Calculator"
      summary="Pulls NPV, IRR, and Payback Period together into a single accept/reject verdict, and flags it when they don't all point the same direction."
      relatedConcept={{
        label: "Capital Budgeting Decision Rules",
        href: "/finance/capital-budgeting-decision-rules",
      }}
      inputs={
        <>
          <Field label="Initial investment (upfront cost)">
            <NumberInput
              value={initialInvestment}
              onChange={setInitialInvestment}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Cash flow received at the end of each year">
            <NumberInput value={annualCashFlow} onChange={setAnnualCashFlow} prefix="$" />
          </Field>
          <Field label="Number of years">
            <NumberInput value={years} onChange={setYears} suffix="yrs" min={0} />
          </Field>
          <Field label="Required rate of return (hurdle rate)">
            <NumberInput
              value={hurdleRate}
              onChange={setHurdleRate}
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
              Verdict
            </p>
            <p
              className={`text-4xl font-bold ${
                isAccept
                  ? "text-zinc-900 dark:text-zinc-100"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {isAccept ? "Accept" : "Reject"}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Stat label="NPV" value={formatUSD(result.npv)} />
            <Stat
              label="IRR"
              value={result.irr === null ? "—" : formatPercent(result.irr, 1)}
            />
            <Stat
              label="Payback"
              value={result.paybackYears === null ? "Never" : `${result.paybackYears.toFixed(2)} yrs`}
            />
          </div>
        </div>
      }
      explanation={
        <>
          <p>
            The verdict is driven by NPV: {formatUSD(result.npv)} at a{" "}
            {hurdleRate}% hurdle rate means this project is expected to{" "}
            {isAccept ? "create" : "destroy"} value relative to your
            required return, so the rule says{" "}
            <strong>{isAccept ? "accept" : "reject"}</strong>.
          </p>
          {result.irrAgreesWithNpv === false && (
            <p className="mt-3 text-red-600 dark:text-red-400">
              IRR disagrees with NPV here — an unusual sign of a cash flow
              pattern IRR handles poorly (see Internal Rate of Return).
              Trust the NPV-based verdict above.
            </p>
          )}
          {isAccept && result.longPaybackRelativeToHorizon && (
            <p className="mt-3">
              Worth noting: even though NPV and IRR both support accepting
              this project, its payback period (
              {result.paybackYears === null ? "never" : `${result.paybackYears.toFixed(2)} years`}
              ) is long relative to the {years}-year horizon — your capital
              stays tied up for most of the project&apos;s life. NPV
              already accounts for this in dollar terms, but it&apos;s a
              real liquidity consideration if you might need the money back
              sooner.
            </p>
          )}
          <p className="mt-3">
            NPV, IRR, and Payback Period measure different things — dollar
            value, rate of return, and time to recover capital. When they
            don&apos;t all point the same direction, NPV is the one built
            to trust, because it's the only one of the three that properly
            accounts for both the size and the timing of every cash flow.
          </p>
        </>
      }
    />
  );
}
