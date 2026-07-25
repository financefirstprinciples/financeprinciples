export type CompoundingFrequency = "annual" | "monthly" | "daily";

export const COMPOUNDING_PERIODS_PER_YEAR: Record<CompoundingFrequency, number> = {
  annual: 1,
  monthly: 12,
  daily: 365,
};

export interface CompoundInterestInput {
  principal: number;
  annualRatePercent: number;
  years: number;
  frequency: CompoundingFrequency;
}

export interface CompoundInterestResult {
  finalBalance: number;
  totalInterest: number;
  effectiveAnnualRate: number;
  periodsPerYear: number;
}

/**
 * A = P(1 + r/n)^(n*t)
 * where r is the annual nominal rate, n is compounding periods per year, t is years.
 */
export function calculateCompoundInterest({
  principal,
  annualRatePercent,
  years,
  frequency,
}: CompoundInterestInput): CompoundInterestResult {
  const n = COMPOUNDING_PERIODS_PER_YEAR[frequency];
  const r = annualRatePercent / 100;

  const finalBalance =
    r === 0 ? principal : principal * Math.pow(1 + r / n, n * years);

  const totalInterest = finalBalance - principal;
  const effectiveAnnualRate = Math.pow(1 + r / n, n) - 1;

  return { finalBalance, totalInterest, effectiveAnnualRate, periodsPerYear: n };
}

export interface PresentValueInput {
  futureValue: number;
  annualRatePercent: number;
  years: number;
  frequency: CompoundingFrequency;
}

export interface PresentValueResult {
  presentValue: number;
  totalDiscount: number;
  periodsPerYear: number;
}

/**
 * PV = FV / (1 + r/n)^(n*t) — the inverse of compound interest, discounting
 * a future sum back to what it's worth today.
 */
export function calculatePresentValue({
  futureValue,
  annualRatePercent,
  years,
  frequency,
}: PresentValueInput): PresentValueResult {
  const n = COMPOUNDING_PERIODS_PER_YEAR[frequency];
  const r = annualRatePercent / 100;

  const presentValue =
    r === 0 ? futureValue : futureValue / Math.pow(1 + r / n, n * years);

  return { presentValue, totalDiscount: futureValue - presentValue, periodsPerYear: n };
}

export interface FutureValueInput {
  principal: number;
  contributionPerPeriod: number;
  annualRatePercent: number;
  years: number;
  frequency: CompoundingFrequency;
}

export interface FutureValueResult {
  futureValue: number;
  totalContributions: number;
  totalGrowth: number;
  periodsPerYear: number;
}

/**
 * FV = P(1+i)^N + C × [((1+i)^N − 1) / i]
 * where i is the periodic rate (r/n) and N is the total number of periods
 * (n*t). The second term is the future value of an ordinary annuity —
 * a contribution C made at the end of every period.
 */
export function calculateFutureValueWithContributions({
  principal,
  contributionPerPeriod,
  annualRatePercent,
  years,
  frequency,
}: FutureValueInput): FutureValueResult {
  const n = COMPOUNDING_PERIODS_PER_YEAR[frequency];
  const i = annualRatePercent / 100 / n;
  const N = n * years;
  const growthFactor = Math.pow(1 + i, N);

  const futureValueOfPrincipal = principal * growthFactor;
  const futureValueOfContributions =
    i === 0 ? contributionPerPeriod * N : contributionPerPeriod * ((growthFactor - 1) / i);

  const futureValue = futureValueOfPrincipal + futureValueOfContributions;
  const totalContributions = principal + contributionPerPeriod * N;

  return {
    futureValue,
    totalContributions,
    totalGrowth: futureValue - totalContributions,
    periodsPerYear: n,
  };
}

export interface RequiredContributionInput {
  targetFutureValue: number;
  principal: number;
  annualRatePercent: number;
  years: number;
  frequency: CompoundingFrequency;
}

export interface RequiredContributionResult {
  requiredContributionPerPeriod: number;
  periodsPerYear: number;
  totalContributions: number;
  totalGrowth: number;
}

/**
 * The algebraic inverse of calculateFutureValueWithContributions: solves
 * for the periodic contribution needed to reach a target future value,
 * given a starting principal that grows on its own in the meantime.
 */
export function calculateRequiredContribution({
  targetFutureValue,
  principal,
  annualRatePercent,
  years,
  frequency,
}: RequiredContributionInput): RequiredContributionResult {
  const n = COMPOUNDING_PERIODS_PER_YEAR[frequency];
  const i = annualRatePercent / 100 / n;
  const N = n * years;
  const growthFactor = Math.pow(1 + i, N);

  const futureValueOfPrincipal = principal * growthFactor;
  const remainingNeeded = Math.max(0, targetFutureValue - futureValueOfPrincipal);

  const requiredContributionPerPeriod =
    i === 0 || N === 0 ? remainingNeeded / Math.max(1, N) : remainingNeeded / ((growthFactor - 1) / i);

  const totalContributions = principal + requiredContributionPerPeriod * N;

  return {
    requiredContributionPerPeriod,
    periodsPerYear: n,
    totalContributions,
    totalGrowth: targetFutureValue - totalContributions,
  };
}

export interface RetirementProjectionInput {
  currentAge: number;
  retirementAge: number;
  currentSavings: number;
  monthlyContribution: number;
  annualReturnPercent: number;
  inflationRatePercent: number;
}

export interface RetirementProjectionResult {
  yearsToRetirement: number;
  nominalSavingsAtRetirement: number;
  realSavingsAtRetirement: number;
  totalContributions: number;
  totalGrowth: number;
}

/**
 * Projects savings at retirement using the same future-value-with-
 * contributions math as everywhere else on the site, then divides by
 * (1 + inflation)^years to express the result in today's purchasing power.
 */
export function calculateRetirementProjection({
  currentAge,
  retirementAge,
  currentSavings,
  monthlyContribution,
  annualReturnPercent,
  inflationRatePercent,
}: RetirementProjectionInput): RetirementProjectionResult {
  const years = Math.max(0, retirementAge - currentAge);
  const fv = calculateFutureValueWithContributions({
    principal: currentSavings,
    contributionPerPeriod: monthlyContribution,
    annualRatePercent: annualReturnPercent,
    years,
    frequency: "monthly",
  });
  const realSavingsAtRetirement =
    fv.futureValue / Math.pow(1 + inflationRatePercent / 100, years);

  return {
    yearsToRetirement: years,
    nominalSavingsAtRetirement: fv.futureValue,
    realSavingsAtRetirement,
    totalContributions: fv.totalContributions,
    totalGrowth: fv.totalGrowth,
  };
}

export interface TraditionalVsRothInput {
  annualContribution: number;
  years: number;
  annualReturnPercent: number;
  currentTaxRatePercent: number;
  retirementTaxRatePercent: number;
}

export interface TraditionalVsRothResult {
  traditionalGrossFutureValue: number;
  traditionalAfterTaxFutureValue: number;
  rothContributionAfterTax: number;
  rothAfterTaxFutureValue: number;
  winner: "traditional" | "roth" | "tie";
  differenceAfterTax: number;
}

/**
 * Compares a Traditional-style account (contribute pre-tax, grow tax-free,
 * pay tax on withdrawal) against a Roth-style account (pay tax first, then
 * contribute what's left, grow and withdraw tax-free), given the same
 * pre-tax income available to save each year. Both sides reuse
 * calculateFutureValueWithContributions rather than reimplementing the
 * annuity math — only the tax treatment differs. Mathematically, the two
 * produce an identical after-tax result whenever the current and
 * retirement tax rates are equal; whichever rate is lower determines the
 * winner.
 */
export function calculateTraditionalVsRothComparison({
  annualContribution,
  years,
  annualReturnPercent,
  currentTaxRatePercent,
  retirementTaxRatePercent,
}: TraditionalVsRothInput): TraditionalVsRothResult {
  const traditionalGrossFutureValue = calculateFutureValueWithContributions({
    principal: 0,
    contributionPerPeriod: annualContribution,
    annualRatePercent: annualReturnPercent,
    years,
    frequency: "annual",
  }).futureValue;
  const traditionalAfterTaxFutureValue =
    traditionalGrossFutureValue * (1 - retirementTaxRatePercent / 100);

  const rothContributionAfterTax = annualContribution * (1 - currentTaxRatePercent / 100);
  const rothAfterTaxFutureValue = calculateFutureValueWithContributions({
    principal: 0,
    contributionPerPeriod: rothContributionAfterTax,
    annualRatePercent: annualReturnPercent,
    years,
    frequency: "annual",
  }).futureValue;

  const differenceAfterTax = traditionalAfterTaxFutureValue - rothAfterTaxFutureValue;
  const winner =
    Math.abs(differenceAfterTax) < 0.01
      ? "tie"
      : differenceAfterTax > 0
        ? "traditional"
        : "roth";

  return {
    traditionalGrossFutureValue,
    traditionalAfterTaxFutureValue,
    rothContributionAfterTax,
    rothAfterTaxFutureValue,
    winner,
    differenceAfterTax,
  };
}

export interface BusinessStructureTaxInput {
  profit: number;
  passThroughTaxRatePercent: number;
  corporateTaxRatePercent: number;
  dividendTaxRatePercent: number;
}

export interface BusinessStructureTaxResult {
  passThroughAfterTax: number;
  passThroughEffectiveRatePercent: number;
  corporateAfterTax: number;
  corporateEffectiveRatePercent: number;
  distributedAfterTax: number;
  distributedCombinedEffectiveRatePercent: number;
}

/**
 * Compares three ways the same profit can end up taxed, depending on
 * business structure and whether profit is distributed:
 * - Pass-through: taxed once, at the owner's personal rate.
 * - C-corp, retained: taxed once so far, at the corporate rate (the
 *   second layer is deferred until profit is eventually distributed).
 * - C-corp, distributed: taxed twice — once at the corporate rate, then
 *   again at the dividend rate on whatever's left — "double taxation."
 */
export function calculateBusinessStructureTax({
  profit,
  passThroughTaxRatePercent,
  corporateTaxRatePercent,
  dividendTaxRatePercent,
}: BusinessStructureTaxInput): BusinessStructureTaxResult {
  const passThroughAfterTax = profit * (1 - passThroughTaxRatePercent / 100);
  const corporateAfterTax = profit * (1 - corporateTaxRatePercent / 100);
  const distributedAfterTax = corporateAfterTax * (1 - dividendTaxRatePercent / 100);
  const distributedCombinedEffectiveRatePercent =
    profit === 0 ? 0 : (1 - distributedAfterTax / profit) * 100;

  return {
    passThroughAfterTax,
    passThroughEffectiveRatePercent: passThroughTaxRatePercent,
    corporateAfterTax,
    corporateEffectiveRatePercent: corporateTaxRatePercent,
    distributedAfterTax,
    distributedCombinedEffectiveRatePercent,
  };
}

export interface NPVResult {
  npv: number;
  discountedCashFlows: number[];
}

/**
 * NPV = −C0 + Σ CFt / (1+r)^t
 * where C0 is the initial outlay, CFt is the cash flow in period t
 * (t = 1, 2, ...), and r is the discount rate.
 */
export function calculateNPV(
  initialInvestment: number,
  cashFlows: number[],
  annualRatePercent: number
): NPVResult {
  const r = annualRatePercent / 100;
  const discountedCashFlows = cashFlows.map((cf, i) => cf / Math.pow(1 + r, i + 1));
  const npv = discountedCashFlows.reduce((sum, dcf) => sum + dcf, 0) - initialInvestment;
  return { npv, discountedCashFlows };
}

export interface IRRResult {
  irr: number | null;
}

/**
 * IRR is the discount rate at which NPV = 0. There's no algebraic solution
 * for most cash flow patterns, so this reuses calculateNPV inside a
 * bisection search, narrowing in on the rate where NPV crosses zero.
 * Returns null if no sign change is found in the search range (e.g. all
 * cash flows share the same sign, so no break-even rate exists).
 */
export function calculateIRR(initialInvestment: number, cashFlows: number[]): IRRResult {
  const npvAt = (ratePercent: number) => calculateNPV(initialInvestment, cashFlows, ratePercent).npv;

  let low = -99;
  let high = 1000;
  let npvLow = npvAt(low);
  const npvHigh = npvAt(high);

  if (npvLow === 0) return { irr: low / 100 };
  if (npvHigh === 0) return { irr: high / 100 };
  if (Math.sign(npvLow) === Math.sign(npvHigh)) return { irr: null };

  for (let i = 0; i < 100; i++) {
    const mid = (low + high) / 2;
    const npvMid = npvAt(mid);
    if (Math.abs(npvMid) < 0.005) return { irr: mid / 100 };
    if (Math.sign(npvMid) === Math.sign(npvLow)) {
      low = mid;
      npvLow = npvMid;
    } else {
      high = mid;
    }
  }
  return { irr: (low + high) / 200 };
}

export interface PaybackPeriodResult {
  paybackYears: number | null;
  cumulativeCashFlows: number[];
}

/**
 * Adds up raw (undiscounted) cash flows year by year until they equal the
 * initial investment, interpolating within the year payback occurs.
 * Returns null if the cash flows never fully repay the investment.
 */
export function calculatePaybackPeriod(
  initialInvestment: number,
  cashFlows: number[]
): PaybackPeriodResult {
  let cumulative = 0;
  const cumulativeCashFlows: number[] = [];
  let paybackYears: number | null = null;

  for (let i = 0; i < cashFlows.length; i++) {
    const previousCumulative = cumulative;
    cumulative += cashFlows[i];
    cumulativeCashFlows.push(cumulative);
    if (paybackYears === null && cumulative >= initialInvestment) {
      const remaining = initialInvestment - previousCumulative;
      const fraction = cashFlows[i] === 0 ? 0 : remaining / cashFlows[i];
      paybackYears = i + fraction;
    }
  }

  return { paybackYears, cumulativeCashFlows };
}

export interface CapitalBudgetingDecisionInput {
  initialInvestment: number;
  cashFlows: number[];
  hurdleRatePercent: number;
}

export interface CapitalBudgetingDecisionResult {
  npv: number;
  irr: number | null;
  paybackYears: number | null;
  verdict: "accept" | "reject";
  irrAgreesWithNpv: boolean | null;
  longPaybackRelativeToHorizon: boolean;
}

/**
 * Combines NPV, IRR, and Payback Period into a single accept/reject
 * evaluation, reusing calculateNPV, calculateIRR, and
 * calculatePaybackPeriod rather than reimplementing any of that math.
 * NPV is the tiebreaker: the verdict is driven by NPV, with IRR and
 * Payback surfaced as secondary checks and flagged if they diverge.
 */
export function evaluateCapitalBudgetingDecision({
  initialInvestment,
  cashFlows,
  hurdleRatePercent,
}: CapitalBudgetingDecisionInput): CapitalBudgetingDecisionResult {
  const { npv } = calculateNPV(initialInvestment, cashFlows, hurdleRatePercent);
  const { irr } = calculateIRR(initialInvestment, cashFlows);
  const { paybackYears } = calculatePaybackPeriod(initialInvestment, cashFlows);

  const npvSaysAccept = npv > 0;
  const irrSaysAccept = irr === null ? null : irr > hurdleRatePercent / 100;
  const irrAgreesWithNpv = irrSaysAccept === null ? null : irrSaysAccept === npvSaysAccept;

  const longPaybackRelativeToHorizon =
    paybackYears === null || paybackYears > cashFlows.length * 0.75;

  return {
    npv,
    irr,
    paybackYears,
    verdict: npvSaysAccept ? "accept" : "reject",
    irrAgreesWithNpv,
    longPaybackRelativeToHorizon,
  };
}

export interface DCFValuationInput {
  year1FreeCashFlow: number;
  growthRatePercent: number;
  projectionYears: number;
  discountRatePercent: number;
  terminalGrowthRatePercent: number;
}

export interface DCFValuationResult {
  projectedCashFlows: number[];
  discountedCashFlows: number[];
  sumOfDiscountedCashFlows: number;
  terminalValue: number;
  discountedTerminalValue: number;
  totalValue: number;
}

/**
 * Projects free cash flow growing at a constant rate for the explicit
 * projection period, discounts each year back to today, then adds a
 * terminal value (the Gordon growth / perpetuity growth model) for
 * everything beyond the projection period, also discounted back to today.
 */
export function calculateDCFValuation({
  year1FreeCashFlow,
  growthRatePercent,
  projectionYears,
  discountRatePercent,
  terminalGrowthRatePercent,
}: DCFValuationInput): DCFValuationResult {
  const g = growthRatePercent / 100;
  const r = discountRatePercent / 100;
  const tg = terminalGrowthRatePercent / 100;
  const n = Math.max(1, Math.trunc(projectionYears));

  const projectedCashFlows: number[] = [];
  const discountedCashFlows: number[] = [];
  let cf = year1FreeCashFlow;
  for (let t = 1; t <= n; t++) {
    if (t > 1) cf = cf * (1 + g);
    projectedCashFlows.push(cf);
    discountedCashFlows.push(cf / Math.pow(1 + r, t));
  }

  const sumOfDiscountedCashFlows = discountedCashFlows.reduce((sum, v) => sum + v, 0);
  const finalYearCashFlow = projectedCashFlows[projectedCashFlows.length - 1] ?? 0;
  const terminalValue = r > tg ? (finalYearCashFlow * (1 + tg)) / (r - tg) : 0;
  const discountedTerminalValue = terminalValue / Math.pow(1 + r, n);
  const totalValue = sumOfDiscountedCashFlows + discountedTerminalValue;

  return {
    projectedCashFlows,
    discountedCashFlows,
    sumOfDiscountedCashFlows,
    terminalValue,
    discountedTerminalValue,
    totalValue,
  };
}

export interface AmortizationInput {
  principal: number;
  annualRatePercent: number;
  years: number;
  frequency: CompoundingFrequency;
}

export interface AmortizationResult {
  paymentPerPeriod: number;
  totalPaid: number;
  totalInterest: number;
  periodsPerYear: number;
  totalPeriods: number;
  firstPeriodInterest: number;
  firstPeriodPrincipal: number;
  lastPeriodInterest: number;
  lastPeriodPrincipal: number;
}

/**
 * Fixed-payment loan amortization. Payment = P × [r(1+r)^N] / [(1+r)^N − 1],
 * where r is the periodic rate and N is the total number of payments.
 */
export function calculateAmortization({
  principal,
  annualRatePercent,
  years,
  frequency,
}: AmortizationInput): AmortizationResult {
  const n = COMPOUNDING_PERIODS_PER_YEAR[frequency];
  const totalPeriods = n * years;
  const r = annualRatePercent / 100 / n;

  const paymentPerPeriod =
    r === 0
      ? principal / totalPeriods
      : (principal * (r * Math.pow(1 + r, totalPeriods))) /
        (Math.pow(1 + r, totalPeriods) - 1);

  const totalPaid = paymentPerPeriod * totalPeriods;
  const totalInterest = totalPaid - principal;

  const firstPeriodInterest = principal * r;
  const firstPeriodPrincipal = paymentPerPeriod - firstPeriodInterest;

  let lastPeriodInterest: number;
  if (r === 0) {
    lastPeriodInterest = 0;
  } else {
    const growth = Math.pow(1 + r, totalPeriods);
    const balanceBeforeLastPayment =
      totalPeriods <= 1
        ? principal
        : (principal * (growth - Math.pow(1 + r, totalPeriods - 1))) /
          (growth - 1);
    lastPeriodInterest = balanceBeforeLastPayment * r;
  }
  const lastPeriodPrincipal = paymentPerPeriod - lastPeriodInterest;

  return {
    paymentPerPeriod,
    totalPaid,
    totalInterest,
    periodsPerYear: n,
    totalPeriods,
    firstPeriodInterest,
    firstPeriodPrincipal,
    lastPeriodInterest,
    lastPeriodPrincipal,
  };
}

export interface RealReturnInput {
  nominalRatePercent: number;
  inflationRatePercent: number;
}

export interface RealReturnResult {
  approximateRealReturn: number;
  preciseRealReturn: number;
}

/**
 * Approximate: nominal − inflation. Precise: (1+nominal)/(1+inflation) − 1.
 * The two diverge more as the rates involved get larger.
 */
export function calculateRealReturn({
  nominalRatePercent,
  inflationRatePercent,
}: RealReturnInput): RealReturnResult {
  const nominal = nominalRatePercent / 100;
  const inflation = inflationRatePercent / 100;
  return {
    approximateRealReturn: nominal - inflation,
    preciseRealReturn: (1 + nominal) / (1 + inflation) - 1,
  };
}

export interface DiversificationImpactInput {
  numberOfHoldings: number;
  shockPercent: number;
}

export interface DiversificationImpactResult {
  idiosyncraticPortfolioImpact: number;
  marketWidePortfolioImpact: number;
}

/**
 * Simplified, equal-weighted illustration: a shock to one holding drags the
 * whole portfolio down by shock/N if it's specific to that one holding, but
 * by the full shock if it hits every holding at once (diversification can't
 * help with the second case).
 */
export function calculateDiversificationImpact({
  numberOfHoldings,
  shockPercent,
}: DiversificationImpactInput): DiversificationImpactResult {
  const shock = shockPercent / 100;
  const n = Math.max(1, numberOfHoldings);
  return {
    idiosyncraticPortfolioImpact: shock / n,
    marketWidePortfolioImpact: shock,
  };
}

export interface BondValuationInput {
  faceValue: number;
  couponRatePercent: number;
  yearsToMaturity: number;
  marketYieldPercent: number;
}

export interface BondValuationResult {
  couponPayment: number;
  price: number;
  pvOfCoupons: number;
  pvOfFaceValue: number;
  totalCouponsReceived: number;
}

/**
 * Price = PV of the fixed coupon stream + PV of the face value at
 * maturity, both discounted at the current market yield — the same
 * present-value logic as any other future cash flow, applied to a bond's
 * fixed payment schedule.
 */
export function calculateBondPrice({
  faceValue,
  couponRatePercent,
  yearsToMaturity,
  marketYieldPercent,
}: BondValuationInput): BondValuationResult {
  const couponPayment = faceValue * (couponRatePercent / 100);
  const y = marketYieldPercent / 100;
  const n = Math.max(0, Math.trunc(yearsToMaturity));

  const pvOfCoupons =
    y === 0 ? couponPayment * n : couponPayment * (1 - Math.pow(1 + y, -n)) / y;
  const pvOfFaceValue = faceValue / Math.pow(1 + y, n);

  return {
    couponPayment,
    price: pvOfCoupons + pvOfFaceValue,
    pvOfCoupons,
    pvOfFaceValue,
    totalCouponsReceived: couponPayment * n,
  };
}

export interface FuturesPnLInput {
  agreedPrice: number;
  marketPrice: number;
  numberOfContracts: number;
  position: "long" | "short";
}

export interface FuturesPnLResult {
  profitOrLoss: number;
  totalNotionalAtAgreedPrice: number;
}

/**
 * Long profits when the market price ends up above the agreed price;
 * short profits when it ends up below — both sides are anchored to the
 * same agreed price while the market moves around it.
 */
export function calculateFuturesPnL({
  agreedPrice,
  marketPrice,
  numberOfContracts,
  position,
}: FuturesPnLInput): FuturesPnLResult {
  const priceDifference =
    position === "long" ? marketPrice - agreedPrice : agreedPrice - marketPrice;

  return {
    profitOrLoss: priceDifference * numberOfContracts,
    totalNotionalAtAgreedPrice: agreedPrice * numberOfContracts,
  };
}

export interface WACCInput {
  marketValueOfEquity: number;
  marketValueOfDebt: number;
  costOfEquityPercent: number;
  costOfDebtPercent: number;
  taxRatePercent: number;
}

export interface WACCResult {
  weightOfEquity: number;
  weightOfDebt: number;
  afterTaxCostOfDebtPercent: number;
  wacc: number;
}

/**
 * WACC = (E/V) × Re + (D/V) × Rd × (1 − Tax rate)
 * where V = E + D. Debt's cost is tax-adjusted because interest payments
 * are tax-deductible; equity's cost gets no such adjustment, since
 * dividends are paid from after-tax profit.
 */
export function calculateWACC({
  marketValueOfEquity,
  marketValueOfDebt,
  costOfEquityPercent,
  costOfDebtPercent,
  taxRatePercent,
}: WACCInput): WACCResult {
  const totalValue = marketValueOfEquity + marketValueOfDebt;
  const weightOfEquity = totalValue === 0 ? 0 : marketValueOfEquity / totalValue;
  const weightOfDebt = totalValue === 0 ? 0 : marketValueOfDebt / totalValue;
  const afterTaxCostOfDebtPercent = costOfDebtPercent * (1 - taxRatePercent / 100);
  const wacc = weightOfEquity * costOfEquityPercent + weightOfDebt * afterTaxCostOfDebtPercent;

  return { weightOfEquity, weightOfDebt, afterTaxCostOfDebtPercent, wacc };
}

export interface CAPMInput {
  riskFreeRatePercent: number;
  beta: number;
  marketReturnPercent: number;
}

/**
 * CAPM: Re = risk-free rate + beta × (market return − risk-free rate).
 * Beta measures how much a stock moves relative to the overall market
 * (1.0 = moves with the market); the bracketed term is the market risk
 * premium, the extra return the market as a whole demands over the
 * risk-free rate.
 */
export function calculateCostOfEquityCAPM({
  riskFreeRatePercent,
  beta,
  marketReturnPercent,
}: CAPMInput): number {
  return riskFreeRatePercent + beta * (marketReturnPercent - riskFreeRatePercent);
}

export interface BuyVsRentInput {
  homePrice: number;
  downPaymentPercent: number;
  mortgageRatePercent: number;
  years: number;
  monthlyRent: number;
  annualOwnershipCostPercent: number;
  homeAppreciationPercent: number;
  investmentReturnPercent: number;
}

export interface BuyVsRentResult {
  downPayment: number;
  ownerMonthlyCost: number;
  monthlyDifference: number;
  homeValueAtEnd: number;
  ownerEndingNetWorth: number;
  renterEndingNetWorth: number;
  winner: "buy" | "rent" | "tie";
  differenceAtEnd: number;
}

/**
 * Assumed cost to sell a home at the end of the horizon (agent commission,
 * closing costs) — not exposed as an input, to keep the calculator's
 * input count manageable; disclosed explicitly wherever this result is shown.
 */
export const ASSUMED_SELLING_COST_PERCENT = 7;

/**
 * Compares ending net worth under two paths over the same horizon, rather
 * than just comparing a monthly rent check to a monthly mortgage payment.
 * Simplifying assumption: the mortgage term equals the comparison horizon
 * (the loan is fully paid off by the end), so owner's ending net worth is
 * simply the home's value at the end, net of assumed selling costs.
 * The renter, meanwhile, invests both the lump sum that would have been a
 * down payment and the ongoing monthly gap between the owner's true
 * monthly cost (mortgage payment + ownership costs) and rent — reusing
 * calculateAmortization, calculateCompoundInterest, and
 * calculateFutureValueWithContributions rather than duplicating any of
 * that math.
 */
export function calculateBuyVsRent({
  homePrice,
  downPaymentPercent,
  mortgageRatePercent,
  years,
  monthlyRent,
  annualOwnershipCostPercent,
  homeAppreciationPercent,
  investmentReturnPercent,
}: BuyVsRentInput): BuyVsRentResult {
  const downPayment = homePrice * (downPaymentPercent / 100);
  const loanAmount = Math.max(0, homePrice - downPayment);

  const amortization = calculateAmortization({
    principal: loanAmount,
    annualRatePercent: mortgageRatePercent,
    years,
    frequency: "monthly",
  });

  const annualOwnershipCost = homePrice * (annualOwnershipCostPercent / 100);
  const ownerMonthlyCost = amortization.paymentPerPeriod + annualOwnershipCost / 12;
  const monthlyDifference = ownerMonthlyCost - monthlyRent;

  const homeValueAtEnd = homePrice * Math.pow(1 + homeAppreciationPercent / 100, years);
  const ownerEndingNetWorth = homeValueAtEnd * (1 - ASSUMED_SELLING_COST_PERCENT / 100);

  const renterInvestmentFromDownPayment = calculateCompoundInterest({
    principal: downPayment,
    annualRatePercent: investmentReturnPercent,
    years,
    frequency: "monthly",
  }).finalBalance;

  const renterInvestmentFromMonthlyDiff = calculateFutureValueWithContributions({
    principal: 0,
    contributionPerPeriod: monthlyDifference,
    annualRatePercent: investmentReturnPercent,
    years,
    frequency: "monthly",
  }).futureValue;

  const renterEndingNetWorth = renterInvestmentFromDownPayment + renterInvestmentFromMonthlyDiff;

  const differenceAtEnd = ownerEndingNetWorth - renterEndingNetWorth;
  const winner =
    Math.abs(differenceAtEnd) < 1 ? "tie" : differenceAtEnd > 0 ? "buy" : "rent";

  return {
    downPayment,
    ownerMonthlyCost,
    monthlyDifference,
    homeValueAtEnd,
    ownerEndingNetWorth,
    renterEndingNetWorth,
    winner,
    differenceAtEnd,
  };
}

export function formatUSD(amount: number): string {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
}
