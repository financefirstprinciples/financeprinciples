export interface BudgetSplitInput {
  monthlyIncome: number;
}

export interface BudgetSplitResult {
  needs: number;
  wants: number;
  savings: number;
}

/** The 50/30/20 rule of thumb: needs / wants / savings, as a starting point, not a rule. */
export function calculateBudgetSplit({ monthlyIncome }: BudgetSplitInput): BudgetSplitResult {
  return {
    needs: monthlyIncome * 0.5,
    wants: monthlyIncome * 0.3,
    savings: monthlyIncome * 0.2,
  };
}

export interface EmergencyFundInput {
  monthlyEssentialExpenses: number;
  targetMonths: number;
  currentSavings: number;
  monthlyContribution: number;
}

export interface EmergencyFundResult {
  targetFundSize: number;
  amountRemaining: number;
  monthsToTarget: number | null;
}

export function calculateEmergencyFund({
  monthlyEssentialExpenses,
  targetMonths,
  currentSavings,
  monthlyContribution,
}: EmergencyFundInput): EmergencyFundResult {
  const targetFundSize = monthlyEssentialExpenses * targetMonths;
  const amountRemaining = Math.max(0, targetFundSize - currentSavings);
  const monthsToTarget =
    amountRemaining === 0
      ? 0
      : monthlyContribution > 0
        ? Math.ceil(amountRemaining / monthlyContribution)
        : null;

  return { targetFundSize, amountRemaining, monthsToTarget };
}

export interface CreditUtilizationInput {
  totalBalances: number;
  totalCreditLimit: number;
}

export interface CreditUtilizationResult {
  utilizationPercent: number;
}

/** Total balances owed as a percentage of total available credit across all revolving accounts. */
export function calculateCreditUtilization({
  totalBalances,
  totalCreditLimit,
}: CreditUtilizationInput): CreditUtilizationResult {
  const utilizationPercent =
    totalCreditLimit === 0 ? 0 : (totalBalances / totalCreditLimit) * 100;
  return { utilizationPercent };
}

export interface InsuranceExpectedValueInput {
  probabilityOfLossPercent: number;
  lossAmount: number;
  annualPremium: number;
}

export interface InsuranceExpectedValueResult {
  expectedLoss: number;
  loadAboveExpectedValue: number;
  loadPercentOfPremium: number;
}

/**
 * Expected loss = probability × size of loss. The "load" is how much the
 * premium exceeds that expected loss — roughly what you're paying, on
 * average, for the certainty of not facing the loss yourself, on top of
 * the insurer's own administrative costs and profit.
 */
export function calculateInsuranceExpectedValue({
  probabilityOfLossPercent,
  lossAmount,
  annualPremium,
}: InsuranceExpectedValueInput): InsuranceExpectedValueResult {
  const expectedLoss = lossAmount * (probabilityOfLossPercent / 100);
  const loadAboveExpectedValue = annualPremium - expectedLoss;
  const loadPercentOfPremium =
    annualPremium === 0 ? 0 : (loadAboveExpectedValue / annualPremium) * 100;

  return { expectedLoss, loadAboveExpectedValue, loadPercentOfPremium };
}

export interface Debt {
  name: string;
  balance: number;
  annualRatePercent: number;
  minPayment: number;
}

export interface DebtPayoffResult {
  monthsToPayoff: number;
  totalInterestPaid: number;
  reachedSafetyCap: boolean;
}

export interface DebtPayoffComparison {
  avalanche: DebtPayoffResult;
  snowball: DebtPayoffResult;
}

const MAX_SIMULATION_MONTHS = 1200; // 100 years, a safety cap against runaway loops

function simulatePayoff(
  debts: Debt[],
  extraPayment: number,
  strategy: "avalanche" | "snowball"
): DebtPayoffResult {
  const remaining = debts.map((d) => ({ ...d }));
  let totalInterestPaid = 0;
  let months = 0;

  while (remaining.some((d) => d.balance > 0.01) && months < MAX_SIMULATION_MONTHS) {
    months++;
    const active = remaining.filter((d) => d.balance > 0.01);
    const target =
      strategy === "avalanche"
        ? active.reduce((a, b) => (b.annualRatePercent > a.annualRatePercent ? b : a))
        : active.reduce((a, b) => (b.balance < a.balance ? b : a));

    for (const d of remaining) {
      if (d.balance <= 0.01) continue;
      const monthlyRate = d.annualRatePercent / 100 / 12;
      const interest = d.balance * monthlyRate;
      totalInterestPaid += interest;
      d.balance += interest;

      let payment = Math.min(d.minPayment, d.balance);
      if (d === target) payment = Math.min(payment + extraPayment, d.balance);
      d.balance = Math.max(0, d.balance - payment);
    }
  }

  return {
    monthsToPayoff: months,
    totalInterestPaid,
    reachedSafetyCap: months >= MAX_SIMULATION_MONTHS,
  };
}

/**
 * Simulates paying off multiple debts month by month under two orderings:
 * avalanche (extra payments to the highest rate first) and snowball
 * (extra payments to the smallest balance first).
 */
export function compareDebtPayoffStrategies(
  debts: Debt[],
  extraPayment: number
): DebtPayoffComparison {
  return {
    avalanche: simulatePayoff(debts, extraPayment, "avalanche"),
    snowball: simulatePayoff(debts, extraPayment, "snowball"),
  };
}
