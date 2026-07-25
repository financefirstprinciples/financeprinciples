export interface TrialBalanceRow {
  account: string;
  debit: number;
  credit: number;
}

export interface TrialBalanceResult {
  totalDebits: number;
  totalCredits: number;
  difference: number;
  isBalanced: boolean;
}

/**
 * Sums each column and checks they match. This only confirms total debits
 * equal total credits — it can't tell whether an individual row was posted
 * to the right account, only that the two columns agree in total.
 */
export function calculateTrialBalance(rows: TrialBalanceRow[]): TrialBalanceResult {
  const totalDebits = rows.reduce((sum, r) => sum + (r.debit || 0), 0);
  const totalCredits = rows.reduce((sum, r) => sum + (r.credit || 0), 0);
  const difference = totalDebits - totalCredits;

  return {
    totalDebits,
    totalCredits,
    difference,
    isBalanced: Math.abs(difference) < 0.005,
  };
}

export interface IncomeStatementInput {
  revenue: number;
  costOfGoodsSold: number;
  operatingExpenses: number;
  otherExpenses: number;
}

export interface IncomeStatementResult {
  grossProfit: number;
  grossMargin: number;
  operatingIncome: number;
  operatingMargin: number;
  netIncome: number;
  netMargin: number;
}

/**
 * Revenue − COGS = gross profit; gross profit − operating expenses =
 * operating income; operating income − other expenses (interest, taxes)
 * = net income. Each margin is the corresponding profit figure divided by
 * revenue.
 */
export function calculateIncomeStatement({
  revenue,
  costOfGoodsSold,
  operatingExpenses,
  otherExpenses,
}: IncomeStatementInput): IncomeStatementResult {
  const grossProfit = revenue - costOfGoodsSold;
  const operatingIncome = grossProfit - operatingExpenses;
  const netIncome = operatingIncome - otherExpenses;
  const safeDivide = (n: number) => (revenue === 0 ? 0 : n / revenue);

  return {
    grossProfit,
    grossMargin: safeDivide(grossProfit),
    operatingIncome,
    operatingMargin: safeDivide(operatingIncome),
    netIncome,
    netMargin: safeDivide(netIncome),
  };
}

export interface CashFlowInput {
  operatingCashFlow: number;
  investingCashFlow: number;
  financingCashFlow: number;
  startingCash: number;
}

export interface CashFlowResult {
  netChangeInCash: number;
  endingCash: number;
}

export function calculateCashFlow({
  operatingCashFlow,
  investingCashFlow,
  financingCashFlow,
  startingCash,
}: CashFlowInput): CashFlowResult {
  const netChangeInCash = operatingCashFlow + investingCashFlow + financingCashFlow;
  return { netChangeInCash, endingCash: startingCash + netChangeInCash };
}

export interface DepreciationInput {
  cost: number;
  salvageValue: number;
  usefulLifeYears: number;
  decliningBalanceRate: number;
}

export interface DepreciationYear {
  year: number;
  straightLineExpense: number;
  straightLineEndingBookValue: number;
  decliningBalanceExpense: number;
  decliningBalanceEndingBookValue: number;
}

export interface DepreciationResult {
  annualStraightLineExpense: number;
  schedule: DepreciationYear[];
}

/**
 * Straight-line: an equal (cost − salvage) / life expense every year.
 * Declining balance: a fixed rate (decliningBalanceRate / life — e.g. 2×
 * for "double-declining-balance") applied to the *remaining* book value
 * each year, front-loading the expense; never depreciates below salvage
 * value.
 */
export function calculateDepreciation({
  cost,
  salvageValue,
  usefulLifeYears,
  decliningBalanceRate,
}: DepreciationInput): DepreciationResult {
  const years = Math.max(1, Math.trunc(usefulLifeYears));
  const depreciableBase = Math.max(0, cost - salvageValue);
  const annualStraightLineExpense = depreciableBase / years;
  const dbRatePerYear = decliningBalanceRate / years;

  const schedule: DepreciationYear[] = [];
  let dbBookValue = cost;

  for (let year = 1; year <= years; year++) {
    const straightLineEndingBookValue = Math.max(
      salvageValue,
      cost - annualStraightLineExpense * year
    );

    let decliningBalanceExpense = dbBookValue * dbRatePerYear;
    if (dbBookValue - decliningBalanceExpense < salvageValue) {
      decliningBalanceExpense = Math.max(0, dbBookValue - salvageValue);
    }
    dbBookValue = Math.max(salvageValue, dbBookValue - decliningBalanceExpense);

    schedule.push({
      year,
      straightLineExpense: annualStraightLineExpense,
      straightLineEndingBookValue,
      decliningBalanceExpense,
      decliningBalanceEndingBookValue: dbBookValue,
    });
  }

  return { annualStraightLineExpense, schedule };
}

export interface CashConversionCycleInput {
  revenue: number;
  costOfGoodsSold: number;
  accountsReceivable: number;
  accountsPayable: number;
  inventory: number;
}

export interface CashConversionCycleResult {
  daysSalesOutstanding: number;
  daysInventoryOutstanding: number;
  daysPayableOutstanding: number;
  cashConversionCycle: number;
}

/**
 * DSO = AR/Revenue × 365, DIO = Inventory/COGS × 365,
 * DPO = AP/COGS × 365. Cycle = DSO + DIO − DPO: days cash is tied up in
 * receivables and inventory, minus days the business delays paying its
 * own suppliers.
 */
export function calculateCashConversionCycle({
  revenue,
  costOfGoodsSold,
  accountsReceivable,
  accountsPayable,
  inventory,
}: CashConversionCycleInput): CashConversionCycleResult {
  const daysSalesOutstanding = revenue === 0 ? 0 : (accountsReceivable / revenue) * 365;
  const daysInventoryOutstanding =
    costOfGoodsSold === 0 ? 0 : (inventory / costOfGoodsSold) * 365;
  const daysPayableOutstanding =
    costOfGoodsSold === 0 ? 0 : (accountsPayable / costOfGoodsSold) * 365;

  return {
    daysSalesOutstanding,
    daysInventoryOutstanding,
    daysPayableOutstanding,
    cashConversionCycle:
      daysSalesOutstanding + daysInventoryOutstanding - daysPayableOutstanding,
  };
}

export interface ReturnRatiosInput {
  netIncome: number;
  totalAssets: number;
  totalDebt: number;
  totalEquity: number;
}

export interface ReturnRatiosResult {
  roa: number;
  roic: number;
}

/** ROA = net income / total assets. ROIC = net income / (debt + equity). */
export function calculateReturnRatios({
  netIncome,
  totalAssets,
  totalDebt,
  totalEquity,
}: ReturnRatiosInput): ReturnRatiosResult {
  const investedCapital = totalDebt + totalEquity;
  return {
    roa: totalAssets === 0 ? 0 : netIncome / totalAssets,
    roic: investedCapital === 0 ? 0 : netIncome / investedCapital,
  };
}
