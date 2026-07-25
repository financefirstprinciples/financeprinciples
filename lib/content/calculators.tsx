import type { ComponentType } from "react";
import type { CalculatorMeta } from "@/lib/types";
import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import PresentValueCalculator from "@/components/calculators/PresentValueCalculator";
import NetPresentValueCalculator from "@/components/calculators/NetPresentValueCalculator";
import AmortizationCalculator from "@/components/calculators/AmortizationCalculator";
import RealVsNominalReturnCalculator from "@/components/calculators/RealVsNominalReturnCalculator";
import DiversificationImpactCalculator from "@/components/calculators/DiversificationImpactCalculator";
import IncomeStatementCalculator from "@/components/calculators/IncomeStatementCalculator";
import CashFlowCalculator from "@/components/calculators/CashFlowCalculator";
import DepreciationCalculator from "@/components/calculators/DepreciationCalculator";
import MarginalVsEffectiveTaxRateCalculator from "@/components/calculators/MarginalVsEffectiveTaxRateCalculator";
import DeductionVsCreditCalculator from "@/components/calculators/DeductionVsCreditCalculator";
import TaxableIncomeCalculator from "@/components/calculators/TaxableIncomeCalculator";
import PayrollTaxCalculator from "@/components/calculators/PayrollTaxCalculator";
import CapitalGainsTaxCalculator from "@/components/calculators/CapitalGainsTaxCalculator";
import BudgetCalculator from "@/components/calculators/BudgetCalculator";
import EmergencyFundCalculator from "@/components/calculators/EmergencyFundCalculator";
import DebtPayoffCalculator from "@/components/calculators/DebtPayoffCalculator";
import SavingsGoalCalculator from "@/components/calculators/SavingsGoalCalculator";
import MortgageCalculator from "@/components/calculators/MortgageCalculator";
import RetirementPlanningCalculator from "@/components/calculators/RetirementPlanningCalculator";
import IRRCalculator from "@/components/calculators/IRRCalculator";
import PaybackPeriodCalculator from "@/components/calculators/PaybackPeriodCalculator";
import DCFValuationCalculator from "@/components/calculators/DCFValuationCalculator";
import BondValuationCalculator from "@/components/calculators/BondValuationCalculator";
import FuturesPnLCalculator from "@/components/calculators/FuturesPnLCalculator";
import CapitalBudgetingDecisionCalculator from "@/components/calculators/CapitalBudgetingDecisionCalculator";
import CashConversionCycleCalculator from "@/components/calculators/CashConversionCycleCalculator";
import ReturnRatiosCalculator from "@/components/calculators/ReturnRatiosCalculator";
import WACCCalculator from "@/components/calculators/WACCCalculator";
import TraditionalVsRothCalculator from "@/components/calculators/TraditionalVsRothCalculator";
import BusinessStructureTaxCalculator from "@/components/calculators/BusinessStructureTaxCalculator";
import CreditUtilizationCalculator from "@/components/calculators/CreditUtilizationCalculator";
import BuyingVsRentingCalculator from "@/components/calculators/BuyingVsRentingCalculator";
import InsuranceExpectedValueCalculator from "@/components/calculators/InsuranceExpectedValueCalculator";
import TrialBalanceCalculator from "@/components/calculators/TrialBalanceCalculator";
import VATGSTCalculator from "@/components/calculators/VATGSTCalculator";
import CustomsDutyCalculator from "@/components/calculators/CustomsDutyCalculator";

export const calculators: Record<
  string,
  CalculatorMeta & { Component: ComponentType }
> = {
  "compound-interest": {
    slug: "compound-interest",
    title: "Compound Interest Calculator",
    summary:
      "Project how a lump sum grows under annual, monthly, or daily compounding.",
    relatedConcept: {
      label: "Compound Interest",
      href: "/finance/compound-interest",
    },
    Component: CompoundInterestCalculator,
  },
  "present-value": {
    slug: "present-value",
    title: "Present Value Calculator",
    summary:
      "Find out how much a future sum of money is worth today, given a discount rate and time horizon.",
    relatedConcept: {
      label: "Present Value",
      href: "/finance/present-value",
    },
    Component: PresentValueCalculator,
  },
  "net-present-value": {
    slug: "net-present-value",
    title: "Net Present Value Calculator",
    summary:
      "See whether an upfront cost is worth it, once every future cash flow it produces is discounted back to today's dollars.",
    relatedConcept: {
      label: "Net Present Value",
      href: "/finance/net-present-value",
    },
    Component: NetPresentValueCalculator,
  },
  amortization: {
    slug: "amortization",
    title: "Amortization Calculator",
    summary:
      "See how a fixed loan payment splits between interest and principal, and how that split shifts over the life of the loan.",
    relatedConcept: {
      label: "Amortization",
      href: "/finance/amortization",
    },
    Component: AmortizationCalculator,
  },
  "real-vs-nominal-returns": {
    slug: "real-vs-nominal-returns",
    title: "Real vs. Nominal Return Calculator",
    summary:
      "See how much of a nominal return inflation actually eats into — and how the quick approximation compares to the precise calculation.",
    relatedConcept: {
      label: "Real vs. Nominal Returns",
      href: "/finance/real-vs-nominal-returns",
    },
    Component: RealVsNominalReturnCalculator,
  },
  diversification: {
    slug: "diversification",
    title: "Diversification Impact Illustrator",
    summary:
      "See how much a single holding's bad year actually drags down a diversified portfolio — and why diversification can't protect against a shock that hits every holding at once.",
    relatedConcept: {
      label: "Diversification",
      href: "/finance/diversification",
    },
    Component: DiversificationImpactCalculator,
  },
  "income-statement": {
    slug: "income-statement",
    title: "Income Statement & Margin Calculator",
    summary:
      "Turn revenue and expenses into net income, then into gross, operating, and net margin — the same figures at every stage of the income statement.",
    relatedConcept: {
      label: "The Income Statement",
      href: "/accounting/income-statement",
    },
    Component: IncomeStatementCalculator,
  },
  "cash-flow-statement": {
    slug: "cash-flow-statement",
    title: "Cash Flow Calculator",
    summary:
      "Add up operating, investing, and financing activity to see how much a business's actual cash balance changed over a period.",
    relatedConcept: {
      label: "The Cash Flow Statement",
      href: "/accounting/cash-flow-statement",
    },
    Component: CashFlowCalculator,
  },
  depreciation: {
    slug: "depreciation",
    title: "Depreciation Calculator",
    summary:
      "Compare straight-line and declining-balance depreciation side by side, year by year, for the same asset.",
    relatedConcept: {
      label: "Depreciation",
      href: "/accounting/depreciation",
    },
    Component: DepreciationCalculator,
  },
  "marginal-vs-effective-tax-rate": {
    slug: "marginal-vs-effective-tax-rate",
    title: "Marginal vs. Effective Tax Rate Calculator",
    summary:
      "Enter your own income and see your bracket-by-bracket breakdown, your marginal rate, and your effective rate.",
    relatedConcept: {
      label: "Marginal vs. Effective Tax Rate",
      href: "/taxation/marginal-vs-effective-tax-rate",
    },
    Component: MarginalVsEffectiveTaxRateCalculator,
  },
  "deductions-vs-credits": {
    slug: "deductions-vs-credits",
    title: "Deduction vs. Credit Calculator",
    summary:
      "See exactly how much tax the same dollar amount saves you as a deduction versus as a credit, at your marginal rate.",
    relatedConcept: {
      label: "Tax Deductions vs. Tax Credits",
      href: "/taxation/deductions-vs-credits",
    },
    Component: DeductionVsCreditCalculator,
  },
  "taxable-income": {
    slug: "taxable-income",
    title: "Taxable Income Calculator",
    summary:
      "See how gross income narrows down to taxable income once adjustments and deductions are subtracted.",
    relatedConcept: {
      label: "Taxable Income",
      href: "/taxation/taxable-income",
    },
    Component: TaxableIncomeCalculator,
  },
  "payroll-taxes": {
    slug: "payroll-taxes",
    title: "Payroll Tax Calculator",
    summary:
      "See how much gets withheld for a capped retirement program and an uncapped health program — and how the cap changes the effective rate as wages rise.",
    relatedConcept: {
      label: "Payroll Taxes",
      href: "/taxation/payroll-taxes",
    },
    Component: PayrollTaxCalculator,
  },
  "capital-gains-tax": {
    slug: "capital-gains-tax",
    title: "Capital Gains Tax Calculator",
    summary:
      "See how the same gain is taxed differently depending on whether it's held short-term or long-term before selling.",
    relatedConcept: {
      label: "Capital Gains Tax",
      href: "/taxation/capital-gains-tax",
    },
    Component: CapitalGainsTaxCalculator,
  },
  "retirement-and-tax-advantaged-accounts": {
    slug: "retirement-and-tax-advantaged-accounts",
    title: "Traditional vs. Roth Calculator",
    summary:
      "Compare the after-tax retirement value of a Traditional-style account against a Roth-style account, given the same pre-tax savings each year.",
    relatedConcept: {
      label: "Retirement & Tax-Advantaged Accounts",
      href: "/taxation/retirement-and-tax-advantaged-accounts",
    },
    Component: TraditionalVsRothCalculator,
  },
  "business-and-startup-taxation": {
    slug: "business-and-startup-taxation",
    title: "Business Structure Tax Calculator",
    summary:
      "See how the same business profit ends up taxed differently as a pass-through entity versus a C-corporation, retained or distributed.",
    relatedConcept: {
      label: "Business & Startup Taxation",
      href: "/taxation/business-and-startup-taxation",
    },
    Component: BusinessStructureTaxCalculator,
  },
  "vat-gst": {
    slug: "vat-gst",
    title: "VAT / GST Calculator",
    summary:
      "Add tax to a price, or extract the tax portion from a tax-inclusive total.",
    relatedConcept: {
      label: "VAT / GST",
      href: "/taxation/vat-gst",
    },
    Component: VATGSTCalculator,
  },
  "customs-duties-and-tariffs": {
    slug: "customs-duties-and-tariffs",
    title: "Customs Duty Calculator",
    summary:
      "Estimate the duty owed on an imported shipment, and the total landed cost once duty and fees are added.",
    relatedConcept: {
      label: "Customs Duties & Tariffs",
      href: "/taxation/customs-duties-and-tariffs",
    },
    Component: CustomsDutyCalculator,
  },
  budget: {
    slug: "budget",
    title: "Budget Calculator",
    summary:
      "Apply the 50/30/20 rule of thumb to your take-home income as a starting point for a budget.",
    relatedConcept: {
      label: "Budgeting",
      href: "/personal-finance/budgeting",
    },
    Component: BudgetCalculator,
  },
  "emergency-fund": {
    slug: "emergency-fund",
    title: "Emergency Fund Calculator",
    summary:
      "Find your target cushion size, and how long it'll take to get there at your current savings rate.",
    relatedConcept: {
      label: "Emergency Funds",
      href: "/personal-finance/emergency-funds",
    },
    Component: EmergencyFundCalculator,
  },
  "debt-payoff": {
    slug: "debt-payoff",
    title: "Debt Payoff Calculator",
    summary: "Compare the avalanche and snowball methods side by side for your own debts.",
    relatedConcept: {
      label: "Debt Payoff Strategies",
      href: "/personal-finance/debt-payoff",
    },
    Component: DebtPayoffCalculator,
  },
  "savings-goal": {
    slug: "savings-goal",
    title: "Savings Goal Calculator",
    summary:
      "Work backward from a target amount and date to find the monthly contribution that gets you there.",
    relatedConcept: {
      label: "Savings Goals",
      href: "/personal-finance/savings-goals",
    },
    Component: SavingsGoalCalculator,
  },
  "credit-scores": {
    slug: "credit-scores",
    title: "Credit Utilization Calculator",
    summary:
      "See what share of your available credit you're currently using — one of the biggest factors in a credit score.",
    relatedConcept: {
      label: "Credit Scores",
      href: "/personal-finance/credit-scores",
    },
    Component: CreditUtilizationCalculator,
  },
  "buying-vs-renting": {
    slug: "buying-vs-renting",
    title: "Buying vs. Renting Calculator",
    summary:
      "Compare ending net worth under buying versus renting-and-investing-the-difference, over the same time horizon.",
    relatedConcept: {
      label: "Buying vs. Renting",
      href: "/personal-finance/buying-vs-renting",
    },
    Component: BuyingVsRentingCalculator,
  },
  "insurance-basics": {
    slug: "insurance-basics",
    title: "Expected Value of Insurance Calculator",
    summary:
      "See how a policy's premium compares to the mathematically expected loss it's protecting against.",
    relatedConcept: {
      label: "Insurance Basics",
      href: "/personal-finance/insurance-basics",
    },
    Component: InsuranceExpectedValueCalculator,
  },
  mortgage: {
    slug: "mortgage",
    title: "Mortgage Calculator",
    summary:
      "See your full monthly mortgage payment — principal, interest, and an estimated escrow for property tax and insurance — plus the underlying amortization.",
    relatedConcept: {
      label: "Amortization",
      href: "/finance/amortization",
    },
    Component: MortgageCalculator,
  },
  "retirement-planning": {
    slug: "retirement-planning",
    title: "Retirement Planning Calculator",
    summary:
      "Project your savings at retirement in both nominal dollars and today's purchasing power.",
    relatedConcept: {
      label: "Retirement Planning",
      href: "/finance/retirement-planning",
    },
    Component: RetirementPlanningCalculator,
  },
  "internal-rate-of-return": {
    slug: "internal-rate-of-return",
    title: "IRR Calculator",
    summary:
      "Find the rate of return an investment actually produces — the same inputs as the NPV calculator, but answering a different question.",
    relatedConcept: {
      label: "Internal Rate of Return (IRR)",
      href: "/finance/internal-rate-of-return",
    },
    Component: IRRCalculator,
  },
  "payback-period": {
    slug: "payback-period",
    title: "Payback Period Calculator",
    summary:
      "Find out how long it takes for an investment's raw cash flows to add back up to its original cost.",
    relatedConcept: {
      label: "Payback Period",
      href: "/finance/payback-period",
    },
    Component: PaybackPeriodCalculator,
  },
  "dcf-valuation": {
    slug: "dcf-valuation",
    title: "DCF Valuation Calculator",
    summary:
      "Project free cash flow, discount it back to today, and add a terminal value for everything beyond the projection period.",
    relatedConcept: {
      label: "Discounted Cash Flow (DCF) Valuation",
      href: "/finance/dcf-valuation",
    },
    Component: DCFValuationCalculator,
  },
  "cost-of-capital": {
    slug: "cost-of-capital",
    title: "Cost of Capital (WACC) Calculator",
    summary:
      "Blend the cost of debt and the cost of equity, weighted by how much of a company is financed by each, into a single discount rate.",
    relatedConcept: {
      label: "Cost of Capital (WACC)",
      href: "/finance/cost-of-capital",
    },
    Component: WACCCalculator,
  },
  "bond-valuation": {
    slug: "bond-valuation",
    title: "Bond Valuation Calculator",
    summary:
      "See what a bond is worth today, given its coupon, maturity, and the current market yield.",
    relatedConcept: {
      label: "Bond Valuation",
      href: "/finance/bond-valuation",
    },
    Component: BondValuationCalculator,
  },
  "futures-contracts": {
    slug: "futures-contracts",
    title: "Futures P&L Calculator",
    summary:
      "See the profit or loss on a long or short futures position, given the agreed price and where the market price ended up.",
    relatedConcept: {
      label: "Futures Contracts",
      href: "/finance/futures-contracts",
    },
    Component: FuturesPnLCalculator,
  },
  "capital-budgeting-decision": {
    slug: "capital-budgeting-decision",
    title: "Capital Budgeting Decision Calculator",
    summary:
      "Pulls NPV, IRR, and Payback Period together into a single accept/reject verdict, and flags it when they don't all point the same direction.",
    relatedConcept: {
      label: "Capital Budgeting Decision Rules",
      href: "/finance/capital-budgeting-decision-rules",
    },
    Component: CapitalBudgetingDecisionCalculator,
  },
  "cash-conversion-cycle": {
    slug: "cash-conversion-cycle",
    title: "Cash Conversion Cycle Calculator",
    summary:
      "Find out how many days cash stays tied up in inventory and receivables, net of how long you take to pay suppliers.",
    relatedConcept: {
      label: "The Cash Conversion Cycle",
      href: "/accounting/cash-conversion-cycle",
    },
    Component: CashConversionCycleCalculator,
  },
  "return-and-profitability-ratios": {
    slug: "return-and-profitability-ratios",
    title: "Return & Profitability Ratios Calculator",
    summary:
      "See how efficiently a business turns what it owns, or what's invested in it, into profit.",
    relatedConcept: {
      label: "Return & Profitability Ratios",
      href: "/accounting/return-and-profitability-ratios",
    },
    Component: ReturnRatiosCalculator,
  },
  "the-accounting-cycle": {
    slug: "the-accounting-cycle",
    title: "Trial Balance Checker",
    summary:
      "List out account balances and confirm total debits equal total credits — the checkpoint before statements get drafted.",
    relatedConcept: {
      label: "How a Financial Report Gets Made",
      href: "/accounting/the-accounting-cycle",
    },
    Component: TrialBalanceCalculator,
  },
};
