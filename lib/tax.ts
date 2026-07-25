import type { CountryTaxProfile, TaxBracket } from "./types";

export interface BracketBreakdown {
  bracket: TaxBracket;
  incomeInBracket: number;
  taxForBracket: number;
  lowerBound: number;
}

export interface ProgressiveTaxResult {
  totalTax: number;
  marginalRate: number;
  effectiveRate: number;
  breakdown: BracketBreakdown[];
}

/**
 * Computes tax owed under a progressive bracket schedule, plus the marginal
 * rate (rate on the next dollar earned) and effective rate (total tax / total income).
 */
export function calculateProgressiveTax(
  income: number,
  brackets: TaxBracket[]
): ProgressiveTaxResult {
  let remainingIncome = Math.max(income, 0);
  let lowerBound = 0;
  let totalTax = 0;
  let marginalRate = brackets[0]?.rate ?? 0;
  const breakdown: BracketBreakdown[] = [];

  for (const bracket of brackets) {
    const bracketCeiling = bracket.upTo ?? Infinity;
    const bracketWidth = bracketCeiling - lowerBound;
    const incomeInBracket = Math.min(remainingIncome, bracketWidth);

    if (incomeInBracket > 0) {
      const taxForBracket = incomeInBracket * bracket.rate;
      totalTax += taxForBracket;
      breakdown.push({ bracket, incomeInBracket, taxForBracket, lowerBound });
      marginalRate = bracket.rate;
      remainingIncome -= incomeInBracket;
    }

    lowerBound = bracketCeiling;
    if (remainingIncome <= 0) break;
  }

  const effectiveRate = income > 0 ? totalTax / income : 0;

  return { totalTax, marginalRate, effectiveRate, breakdown };
}

export type ConsumptionTaxMode = "add" | "extract";

export interface ConsumptionTaxInput {
  amount: number;
  ratePercent: number;
  mode: ConsumptionTaxMode;
}

export interface ConsumptionTaxResult {
  preTaxAmount: number;
  taxAmount: number;
  totalAmount: number;
}

/**
 * "add" treats amount as the pre-tax price and adds tax on top.
 * "extract" treats amount as a tax-inclusive total and backs out how much
 * of it is tax: preTax = total / (1 + rate).
 */
export function calculateConsumptionTax({
  amount,
  ratePercent,
  mode,
}: ConsumptionTaxInput): ConsumptionTaxResult {
  const rate = ratePercent / 100;
  if (mode === "extract") {
    const preTaxAmount = amount / (1 + rate);
    return { preTaxAmount, taxAmount: amount - preTaxAmount, totalAmount: amount };
  }
  const taxAmount = amount * rate;
  return { preTaxAmount: amount, taxAmount, totalAmount: amount + taxAmount };
}

export interface CustomsDutyInput {
  declaredValue: number;
  dutyRatePercent: number;
  handlingFee: number;
}

export interface CustomsDutyResult {
  dutyOwed: number;
  totalLandedCost: number;
}

/** Landed cost = declared value + duty owed + any flat handling fee. */
export function calculateCustomsDuty({
  declaredValue,
  dutyRatePercent,
  handlingFee,
}: CustomsDutyInput): CustomsDutyResult {
  const dutyOwed = declaredValue * (dutyRatePercent / 100);
  return { dutyOwed, totalLandedCost: declaredValue + dutyOwed + handlingFee };
}

export function formatCurrency(amount: number, profile: CountryTaxProfile): string {
  return `${profile.currencySymbol}${Math.round(amount).toLocaleString("en-US")}`;
}

export function formatPercent(rate: number, digits = 1): string {
  return `${(rate * 100).toFixed(digits)}%`;
}
