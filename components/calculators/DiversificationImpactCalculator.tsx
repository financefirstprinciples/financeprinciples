"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateDiversificationImpact } from "@/lib/finance-math";
import { formatPercent } from "@/lib/tax";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function DiversificationImpactCalculator() {
  const [numberOfHoldings, setNumberOfHoldings] = useState(20);
  const [shockPercent, setShockPercent] = useState(-40);

  const result = useMemo(
    () =>
      calculateDiversificationImpact({
        numberOfHoldings,
        shockPercent,
      }),
    [numberOfHoldings, shockPercent]
  );

  return (
    <CalculatorPage
      title="Diversification Impact Illustrator"
      summary="See how much a single holding's bad year actually drags down a diversified portfolio — and why diversification can't protect against a shock that hits every holding at once."
      relatedConcept={{ label: "Diversification", href: "/finance/diversification" }}
      inputs={
        <>
          <Field label="Number of holdings in the portfolio">
            <NumberInput
              value={numberOfHoldings}
              onChange={setNumberOfHoldings}
              min={1}
              step={1}
            />
          </Field>
          <Field label="Shock to the affected holding(s)">
            <NumberInput value={shockPercent} onChange={setShockPercent} suffix="%" step={1} />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              If just one holding is hit
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {formatPercent(result.idiosyncraticPortfolioImpact, 2)}
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              portfolio-wide impact
            </p>
          </div>
          <div>
            <Stat
              label="If the shock hits every holding at once (market-wide)"
              value={formatPercent(result.marketWidePortfolioImpact, 2)}
            />
          </div>
        </div>
      }
      explanation={
        <>
          <p>
            This assumes an equal-weighted portfolio of{" "}
            {numberOfHoldings} holdings, with the other holdings otherwise
            flat. If the shock is specific to just one holding, only{" "}
            {formatPercent(1 / Math.max(1, numberOfHoldings), 1)} of the
            portfolio is exposed to it, so the portfolio-wide impact is the
            shock divided by the number of holdings:{" "}
            {formatPercent(shockPercent / 100, 1)} / {numberOfHoldings} ={" "}
            {formatPercent(result.idiosyncraticPortfolioImpact, 2)}.
          </p>
          <p className="mt-3">
            But if the same shock hits every holding simultaneously — a
            broad market decline, for instance — every holding drops
            together, so the portfolio-wide impact is the full{" "}
            {formatPercent(result.marketWidePortfolioImpact, 2)}, no matter
            how many holdings the portfolio has. Diversification reduces the
            first kind of risk; it can't touch the second.
          </p>
        </>
      }
    />
  );
}
