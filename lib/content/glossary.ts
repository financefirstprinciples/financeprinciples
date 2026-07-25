import type { GlossaryTerm } from "@/lib/types";

/** Turns a term into a URL-safe anchor id, e.g. "Cost of Capital (WACC)" -> "cost-of-capital-wacc". */
export function slugifyTerm(term: string): string {
  return term
    .toLowerCase()
    .replace(/[()&/]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Every entry below reuses (in condensed form) the plain-language definition
// already written on its source concept page — see STANDARDS.md. Do not
// invent new definitions here; if a source page's wording changes, update
// the entry to match rather than letting the two drift apart.
export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "10-K",
    definition:
      "The annual filing US public companies make under securities law — an illustrative, US-specific label for the annual report.",
    pillar: "accounting",
    href: "/accounting/quarterly-vs-annual-reports",
  },
  {
    term: "10-Q",
    definition:
      "The quarterly filing US public companies make under securities law — an illustrative, US-specific label for the quarterly report.",
    pillar: "accounting",
    href: "/accounting/quarterly-vs-annual-reports",
  },
  {
    term: "50/30/20 Rule",
    definition:
      "A budgeting rule of thumb: roughly 50% of take-home income toward needs (rent, groceries, utilities), 30% toward wants (dining out, entertainment), and 20% toward savings and extra debt payments.",
    pillar: "personal-finance",
    href: "/personal-finance/budgeting",
  },
  {
    term: "Accounting Cycle",
    definition:
      "The repeating sequence of steps a business works through each period to turn raw recorded transactions into a finished, reliable financial report: recording, adjusting entries, trial balance, closing the books, drafting statements, review/audit, and publishing.",
    pillar: "accounting",
    href: "/accounting/the-accounting-cycle",
  },
  {
    term: "Accounting Equation",
    definition:
      "The identity Assets = Liabilities + Equity, tying together everything a business owns, everything it owes, and what's left for its owners. It's true by definition for any business at any moment, not a target to hit.",
    pillar: "accounting",
    href: "/accounting/accounting-equation",
  },
  {
    term: "Accounting Standards",
    definition:
      "The shared rulebook governing how businesses must measure, record, and present their financial numbers, so the same economic event gets reported the same way by every company that follows it.",
    pillar: "accounting",
    href: "/accounting/why-accounting-standards-exist",
  },
  {
    term: "Adjusted Gross Income (AGI)",
    definition:
      "An intermediate figure computed by subtracting certain adjustments from gross income; deductions are then subtracted from AGI to arrive at taxable income.",
    pillar: "taxation",
    href: "/taxation/taxable-income",
  },
  {
    term: "Adjusting Entries",
    definition:
      "Period-end entries that recognize events before the books close even though no new cash changed hands right then — an expense incurred but not yet paid, or revenue earned but not yet billed.",
    pillar: "accounting",
    href: "/accounting/the-accounting-cycle",
  },
  {
    term: "Amortization (Intangible Assets)",
    definition:
      "Spreading the cost of an intangible asset — something valuable with no physical form, like a patent or purchased software — across the years it's expected to provide value, rather than expensing it all at once.",
    pillar: "accounting",
    href: "/accounting/amortization-intangible-assets",
  },
  {
    term: "Amortization (Loans & Mortgages)",
    definition:
      "Paying off a loan through regular, fixed payments, where each payment covers the interest owed for that period plus a portion of the principal. The split shifts over time — early payments are mostly interest, later payments mostly principal — even though the payment amount stays the same.",
    pillar: "finance",
    href: "/finance/amortization",
  },
  {
    term: "Annual Report",
    definition:
      "The comprehensive, fully audited version of a company's financial report, published once a year, covering the full twelve months in far greater depth than a quarterly report.",
    pillar: "accounting",
    href: "/accounting/quarterly-vs-annual-reports",
  },
  {
    term: "Assets",
    definition:
      "Everything of value a business owns or controls — cash, equipment, inventory, buildings, and money owed to it by others.",
    pillar: "accounting",
    href: "/accounting/accounting-equation",
  },
  {
    term: "Audit",
    definition:
      "An independent examination of a business's financial statements and internal controls, performed by someone outside the company's own preparation process, to form a professional opinion on whether the statements fairly represent its financial position.",
    pillar: "accounting",
    href: "/accounting/audits",
  },
  {
    term: "Avalanche Method",
    definition:
      "A debt payoff strategy that directs extra payments to the highest-interest-rate debt first, regardless of its size — mathematically minimizes total interest paid.",
    pillar: "personal-finance",
    href: "/personal-finance/debt-payoff",
  },
  {
    term: "Balance Sheet",
    definition:
      "A snapshot, as of one specific date, of everything a business owns (assets), everything it owes (liabilities), and what's left over for its owners (equity).",
    pillar: "accounting",
    href: "/accounting/balance-sheet",
  },
  {
    term: "Behavioral Finance",
    definition:
      "The study of how real investors' psychological biases and emotions cause decisions that deviate, often in predictable and repeated ways, from what a purely rational decision-maker would do.",
    pillar: "finance",
    href: "/finance/behavioral-finance",
  },
  {
    term: "Beta",
    definition:
      "A measure of how much a stock's returns move relative to the overall market. A beta of 1.0 means the stock has historically moved in line with the market; a beta of 1.5 means it has swung about 1.5× as much. Used in CAPM to scale the market risk premium when estimating cost of equity.",
    pillar: "finance",
    href: "/finance/cost-of-capital",
  },
  {
    term: "Bond",
    definition:
      "A loan made by an investor to a government or company: the investor pays a price today, and the issuer promises fixed coupon payments plus the return of the bond's face value at maturity.",
    pillar: "finance",
    href: "/finance/bond-valuation",
    alsoDefinedOn: { label: "Fixed Income", href: "/finance/fixed-income" },
  },
  {
    term: "Bond Valuation",
    definition:
      "Figuring out what a bond is worth today by treating each remaining coupon payment and the face value at maturity as separate future cash flows, then discounting them at the current market yield for similar bonds.",
    pillar: "finance",
    href: "/finance/bond-valuation",
  },
  {
    term: "Budgeting",
    definition:
      "Planning, in advance, how much of your income will go toward different categories of spending and saving, rather than spending freely and discovering afterward whether anything is left over.",
    pillar: "personal-finance",
    href: "/personal-finance/budgeting",
  },
  {
    term: "Buy-vs-Rent Decision",
    definition:
      "Comparing the total financial outcome of renting versus buying a home over the same time horizon — not just monthly rent against a monthly mortgage payment, but everything ownership and renting each involve.",
    pillar: "personal-finance",
    href: "/personal-finance/buying-vs-renting",
  },
  {
    term: "C-Corporation",
    definition:
      "A business treated as its own separate legal taxpayer, distinct from its owners. It pays corporate income tax on its own profit, and shareholders pay personal income tax again on any of that profit paid out as a dividend.",
    pillar: "taxation",
    href: "/taxation/business-and-startup-taxation",
  },
  {
    term: "Capital Budgeting Decision Rules",
    definition:
      "The criteria used to decide whether an investment or project is worth undertaking, comparing its NPV, IRR, and Payback Period against a benchmark such as a required rate of return.",
    pillar: "finance",
    href: "/finance/capital-budgeting-decision-rules",
  },
  {
    term: "Capital Gain",
    definition:
      "The sale price of an asset minus its original purchase price (its cost basis).",
    pillar: "taxation",
    href: "/taxation/capital-gains-tax",
  },
  {
    term: "Capital Gains Tax",
    definition:
      "A tax on the profit made from selling an asset for more than what was originally paid for it — tax is owed only on the gain, not the full sale price.",
    pillar: "taxation",
    href: "/taxation/capital-gains-tax",
  },
  {
    term: "Capital Structure",
    definition:
      "The mix of debt (borrowed money that must be repaid with interest regardless of performance) and equity (money contributed by owners who share in profits and losses) a company uses to fund itself.",
    pillar: "finance",
    href: "/finance/capital-structure",
  },
  {
    term: "Capitalized (Lease)",
    definition:
      "Recording a lease on the balance sheet as both a \"right-of-use\" asset and a matching lease liability, discounted to today's dollars, instead of leaving it off the balance sheet entirely.",
    pillar: "accounting",
    href: "/accounting/lease-accounting",
  },
  {
    term: "CAPM (Capital Asset Pricing Model)",
    definition:
      "The standard model for estimating a company's cost of equity: start from the risk-free rate, then add the market risk premium scaled by the stock's beta. Re = Risk-Free Rate + Beta × (Market Return − Risk-Free Rate).",
    pillar: "finance",
    href: "/finance/cost-of-capital",
  },
  {
    term: "Cash Accounting",
    definition:
      "Recording revenue and expenses only when cash actually changes hands — a sale counts when payment is received, a bill counts when it's paid.",
    pillar: "accounting",
    href: "/accounting/accrual-vs-cash-accounting",
  },
  {
    term: "Cash Conversion Cycle",
    definition:
      "How many days it takes for money spent on inventory to work its way back around into cash collected from customers, net of how long the business takes to pay its own suppliers: DSO + DIO − DPO.",
    pillar: "accounting",
    href: "/accounting/cash-conversion-cycle",
  },
  {
    term: "Cash Flow Statement",
    definition:
      "Tracks how much actual cash moved into and out of a business over a period, split into operating, investing, and financing activities, explaining why its cash balance changed.",
    pillar: "accounting",
    href: "/accounting/cash-flow-statement",
  },
  {
    term: "Closing the Books",
    definition:
      "The step where temporary accounts (revenue and expenses) get zeroed out, with their net effect rolled into retained earnings, finalizing the period and giving the next one a clean start.",
    pillar: "accounting",
    href: "/accounting/the-accounting-cycle",
  },
  {
    term: "Compound Interest",
    definition:
      "Interest calculated on both the original principal and on any interest that amount has already earned, so each new round of interest is calculated on a growing balance — producing exponential rather than straight-line growth.",
    pillar: "finance",
    href: "/finance/compound-interest",
  },
  {
    term: "Consistency Principle",
    definition:
      "A company must use the same accounting methods period over period — the same depreciation method, the same inventory valuation method — rather than switching whenever it would flatter a given period's numbers.",
    pillar: "accounting",
    href: "/accounting/core-accounting-principles",
  },
  {
    term: "Core Accounting Principles",
    definition:
      "The handful of ideas — matching, historical cost vs. fair value, revenue recognition, and consistency — that show up inside both GAAP and IFRS despite their technical differences.",
    pillar: "accounting",
    href: "/accounting/core-accounting-principles",
  },
  {
    term: "Cost Basis",
    definition:
      "The original purchase price of an asset, subtracted from the sale price to determine the capital gain that's actually taxed.",
    pillar: "taxation",
    href: "/taxation/capital-gains-tax",
  },
  {
    term: "Cost of Capital (WACC)",
    definition:
      "A company's weighted average cost of capital — the average rate of return it needs to earn on its investments to satisfy everyone who supplied it money, blending the cost of debt and cost of equity in proportion to how much of the company each finances.",
    pillar: "finance",
    href: "/finance/cost-of-capital",
  },
  {
    term: "Cost of Debt",
    definition:
      "The interest rate lenders charge a company for borrowed money — compensation for giving up the use of their money and taking on repayment risk.",
    pillar: "finance",
    href: "/finance/cost-of-capital",
  },
  {
    term: "Cost of Equity",
    definition:
      "The return shareholders expect for the risk of owning a business whose value can rise or fall, and who are only paid after lenders if things go wrong — consistently higher than the cost of debt. Usually estimated using CAPM.",
    pillar: "finance",
    href: "/finance/cost-of-capital",
  },
  {
    term: "Cost of Goods Sold",
    definition: "The direct cost of whatever was actually sold, like ingredients in a bakery.",
    pillar: "accounting",
    href: "/accounting/income-statement",
  },
  {
    term: "Coupon Rate",
    definition:
      "The fixed percentage, set when a bond is issued and never changing, used to calculate its regular interest payment as Face Value × Coupon Rate.",
    pillar: "finance",
    href: "/finance/bond-valuation",
  },
  {
    term: "Credit (Accounting)",
    definition:
      "The right side of an accounting entry (not \"add\" as in everyday language) — increases liabilities, equity, and revenue, and decreases assets and expenses.",
    pillar: "accounting",
    href: "/accounting/double-entry-bookkeeping",
  },
  {
    term: "Credit Score",
    definition:
      "A number — in the US typically 300 to 850 — that summarizes how likely someone is to repay borrowed money on time, based on their borrowing and repayment history, letting lenders estimate risk quickly.",
    pillar: "personal-finance",
    href: "/personal-finance/credit-scores",
  },
  {
    term: "Credit Utilization",
    definition:
      "How much of your available credit you're currently using: total balances owed divided by total credit limit. A common rule of thumb is to keep it under roughly 30%.",
    pillar: "personal-finance",
    href: "/personal-finance/credit-scores",
  },
  {
    term: "Current Assets",
    definition:
      "Assets due or convertible to cash within roughly a year, such as cash, receivables, and inventory.",
    pillar: "accounting",
    href: "/accounting/balance-sheet",
  },
  {
    term: "Current Liabilities",
    definition:
      "Obligations due within about a year, such as unpaid bills or the short-term portion of a loan.",
    pillar: "accounting",
    href: "/accounting/balance-sheet",
  },
  {
    term: "Current Ratio",
    definition:
      "How many dollars of current assets exist for every dollar of current liabilities: Current Assets ÷ Current Liabilities.",
    pillar: "accounting",
    href: "/accounting/liquidity-and-working-capital",
  },
  {
    term: "Customs Duty & Tariff",
    definition:
      "A tax charged on goods as they cross an international border, typically paid by the importer at the point of entry, calculated as a percentage of the good's declared value.",
    pillar: "taxation",
    href: "/taxation/customs-duties-and-tariffs",
  },
  {
    term: "Days Inventory Outstanding (DIO)",
    definition: "How long, on average, inventory sits before it's sold.",
    pillar: "accounting",
    href: "/accounting/cash-conversion-cycle",
  },
  {
    term: "Days Payable Outstanding (DPO)",
    definition: "How long, on average, a business takes to pay its own suppliers.",
    pillar: "accounting",
    href: "/accounting/cash-conversion-cycle",
  },
  {
    term: "Days Sales Outstanding (DSO)",
    definition: "How long, on average, it takes to collect cash from customers after a sale.",
    pillar: "accounting",
    href: "/accounting/cash-conversion-cycle",
  },
  {
    term: "Debit",
    definition:
      "The left side of an accounting entry (not \"subtract\" as in everyday language) — increases assets and expenses, and decreases liabilities, equity, and revenue.",
    pillar: "accounting",
    href: "/accounting/double-entry-bookkeeping",
  },
  {
    term: "Debt",
    definition:
      "Borrowed money that a company must repay with interest, regardless of how the business performs.",
    pillar: "finance",
    href: "/finance/capital-structure",
  },
  {
    term: "Debt Payoff Strategy",
    definition:
      "When someone has multiple debts at once, the order in which extra money — beyond each debt's minimum payment — gets directed toward paying down balances.",
    pillar: "personal-finance",
    href: "/personal-finance/debt-payoff",
  },
  {
    term: "Declining-Balance Depreciation",
    definition:
      "An accelerated depreciation method that applies a fixed rate to whatever book value is left each year, recognizing more expense in an asset's early years and less later.",
    pillar: "accounting",
    href: "/accounting/depreciation",
  },
  {
    term: "Deductible",
    definition:
      "The amount of a loss a policyholder pays out of pocket before insurance covers the rest. Deductibles exist because small, easily-absorbable losses aren't worth pooling — a lower deductible means a higher premium, since the insurer covers more of the smaller, frequent losses too.",
    pillar: "personal-finance",
    href: "/personal-finance/insurance-basics",
  },
  {
    term: "Demand",
    definition:
      "How much of something people want to buy at a given price — and how that amount changes as the price changes. Usually, the lower the price, the more people want to buy.",
    pillar: "foundations",
    href: "/foundations/supply-and-demand",
  },
  {
    term: "Depletion",
    definition:
      "The accounting term for spreading the cost of natural resources (oil, timber, minerals) across the periods they're extracted or used — the same idea as depreciation and amortization, applied to a different asset category.",
    pillar: "accounting",
    href: "/accounting/amortization-intangible-assets",
  },
  {
    term: "Depreciation",
    definition:
      "Spreading the cost of a long-lasting physical asset — equipment, a vehicle, a building — across the years it's expected to be useful, recording a portion of that cost as an expense each year rather than all at once when purchased.",
    pillar: "accounting",
    href: "/accounting/depreciation",
  },
  {
    term: "Direct Tax",
    definition:
      "A tax levied on a specific person's or company's own income, profit, or gains, and paid directly to the government by that same person or company — income tax and capital gains tax are both direct taxes.",
    pillar: "taxation",
    href: "/taxation/direct-vs-indirect-tax",
  },
  {
    term: "Discount Rate",
    definition:
      "The assumed rate of return used to translate a future amount of money into today's-dollars terms (discounting), or to project a present amount forward in time (compounding). It should reflect what could otherwise be earned on money at a similar level of risk.",
    pillar: "finance",
    href: "/finance/time-value-of-money",
    alsoDefinedOn: { label: "Present Value", href: "/finance/present-value" },
  },
  {
    term: "Discounted Cash Flow (DCF) Valuation",
    definition:
      "Estimating what a company or asset is worth today by projecting the cash it's expected to generate in future years and discounting each year's cash flow back to today's dollars, then adding them together — the same logic as Net Present Value applied to an entire business.",
    pillar: "finance",
    href: "/finance/dcf-valuation",
  },
  {
    term: "Diversification",
    definition:
      "Spreading investments across multiple different assets, rather than concentrating money in just one or a few, so a bad outcome in any single investment doesn't disproportionately damage the whole portfolio.",
    pillar: "finance",
    href: "/finance/diversification",
  },
  {
    term: "Double Taxation",
    definition:
      "When the same dollar of corporate profit gets taxed twice — once at the corporate level when a C-corporation pays corporate income tax, and again at the shareholder level when that profit is paid out as a dividend and taxed as personal income.",
    pillar: "taxation",
    href: "/taxation/business-and-startup-taxation",
  },
  {
    term: "Double-Entry Bookkeeping",
    definition:
      "The method accountants use to record every transaction in two matched parts of equal dollar value — one debit and one credit — so total debits always equal total credits.",
    pillar: "accounting",
    href: "/accounting/double-entry-bookkeeping",
  },
  {
    term: "Effective Rate (Effective Annual Rate)",
    definition:
      "The actual percentage growth a balance experiences over one year; it rises slightly above the nominal rate as compounding happens more frequently, because interest gets folded back into the balance more often.",
    pillar: "finance",
    href: "/finance/compound-interest",
  },
  {
    term: "Effective Tax Rate",
    definition:
      "The rate you actually pay overall — total tax owed divided by total income. Because income is taxed in slices rather than all at one rate, the effective rate is always lower than the marginal rate whenever more than one slice of income is involved.",
    pillar: "taxation",
    href: "/taxation/marginal-vs-effective-tax-rate",
  },
  {
    term: "Emergency Fund",
    definition:
      "Money set aside and kept easily accessible — not invested in something that could lose value or take time to access — specifically to cover unplanned expenses without having to borrow to cover them.",
    pillar: "personal-finance",
    href: "/personal-finance/emergency-funds",
  },
  {
    term: "Equilibrium Price",
    definition:
      "The price a good actually trades at — the point where the amount buyers want to buy matches the amount sellers want to sell.",
    pillar: "foundations",
    href: "/foundations/supply-and-demand",
  },
  {
    term: "Equity",
    definition:
      "What's left over for a business's owners once liabilities are subtracted from assets. Raised as capital, it's money contributed by owners who share in the business's profits and losses but aren't owed a fixed repayment, unlike debt.",
    pillar: "accounting",
    href: "/accounting/accounting-equation",
    alsoDefinedOn: { label: "Capital Structure", href: "/finance/capital-structure" },
  },
  {
    term: "Excise Duty",
    definition:
      "A tax on a specific good — most commonly fuel, tobacco, or alcohol — rather than a general tax on consumption broadly. It's layered on top of whatever general consumption tax already applies, not a replacement for it.",
    pillar: "taxation",
    href: "/taxation/excise-duties",
  },
  {
    term: "Expenses",
    definition: "Costs incurred to run a business and generate its revenue.",
    pillar: "accounting",
    href: "/accounting/income-statement",
  },
  {
    term: "Face Value",
    definition: "The amount a bond's issuer promises to return to the investor when the bond matures, also called par value.",
    pillar: "finance",
    href: "/finance/bond-valuation",
  },
  {
    term: "Fair Value",
    definition:
      "Recording an asset at what it's worth today, typically used for actively traded investments where a reliable current market price exists.",
    pillar: "accounting",
    href: "/accounting/core-accounting-principles",
  },
  {
    term: "FIFO (First-In-First-Out)",
    definition:
      "An inventory valuation method that assumes the oldest inventory is sold first; required under IFRS and also allowed under GAAP.",
    pillar: "accounting",
    href: "/accounting/gaap-vs-ifrs",
  },
  {
    term: "Finance Lease",
    definition:
      "One of two lease categories, based on how closely the arrangement resembles actually owning the asset (whether it transfers ownership by the end, covers most of the asset's useful life, etc.); appears on the balance sheet alongside operating leases but is presented differently on the income statement.",
    pillar: "accounting",
    href: "/accounting/lease-accounting",
  },
  {
    term: "Financial Leverage",
    definition:
      "Using debt to fund a business instead of only equity; like a physical lever amplifying a force, borrowed money amplifies both the returns and the losses experienced by equity holders.",
    pillar: "finance",
    href: "/finance/capital-structure",
  },
  {
    term: "Financial Report Warning Signs",
    definition:
      "Recurring patterns — restated prior-period earnings, frequent auditor changes, footnotes contradicting headline numbers, MD&A that consistently blames external factors — that don't on their own prove wrongdoing, but appear disproportionately often in reports that later turned out to involve real problems.",
    pillar: "accounting",
    href: "/accounting/financial-report-warning-signs",
  },
  {
    term: "Financial Reporting",
    definition:
      "Packaging a business's recorded financial activity into standardized documents — the income statement, balance sheet, cash flow statement, plus supporting explanation — and delivering them, on a regular schedule, to outsiders who need to understand how it's doing.",
    pillar: "accounting",
    href: "/accounting/why-financial-reporting-exists",
  },
  {
    term: "Financing Activities",
    definition: "Cash from borrowing, repaying debt, or money moving to or from owners.",
    pillar: "accounting",
    href: "/accounting/cash-flow-statement",
  },
  {
    term: "First Home Purchase",
    definition:
      "The decision that combines several ideas at once: how much home you can genuinely afford (not just what a lender will approve), what a mortgage costs over time, whether buying beats renting for your situation, and how to protect yourself financially before taking on that much debt.",
    pillar: "personal-finance",
    href: "/personal-finance/first-home-purchase",
  },
  {
    term: "Fixed Income",
    definition:
      "A broad category of investments that pay a predetermined, scheduled stream of payments to the investor — most commonly interest payments plus a return of principal at a set future date — rather than a payout that varies unpredictably like a stock's.",
    pillar: "finance",
    href: "/finance/fixed-income",
  },
  {
    term: "Flat Tax",
    definition: "A tax that charges the same percentage no matter how much someone earns.",
    pillar: "taxation",
    href: "/taxation/progressive-taxation",
  },
  {
    term: "Footnotes & Disclosures",
    definition:
      "Supplementary explanations attached to financial statements that reveal the assumptions, methods, risks, and details behind the headline numbers — information that doesn't fit into a single line item but materially changes how it should be interpreted.",
    pillar: "accounting",
    href: "/accounting/footnotes-and-disclosures",
  },
  {
    term: "Forced Savings",
    definition:
      "The idea that a mortgage payment is partly forced savings — a portion of every payment pays down principal that the owner keeps as equity — unlike rent, which is pure consumption of housing with nothing left over afterward.",
    pillar: "personal-finance",
    href: "/personal-finance/buying-vs-renting",
  },
  {
    term: "Free Cash Flow (FCF)",
    definition:
      "The cash a business is projected to generate in a given year, used as the basic input that gets discounted back to today's dollars in a DCF valuation.",
    pillar: "finance",
    href: "/finance/dcf-valuation",
  },
  {
    term: "Futures Contract",
    definition:
      "An agreement made today to buy or sell a specific asset at a specific price on a specific future date, regardless of what the asset's market price actually turns out to be by then.",
    pillar: "finance",
    href: "/finance/futures-contracts",
  },
  {
    term: "Future Value",
    definition:
      "The amount a present sum of money will grow to at some future date, once it has been projected forward using compounding at a given rate.",
    pillar: "finance",
    href: "/finance/present-value",
    alsoDefinedOn: { label: "Time Value of Money", href: "/finance/time-value-of-money" },
  },
  {
    term: "GAAP",
    definition:
      "Generally Accepted Accounting Principles — the accounting standard used in the United States, set by the FASB (Financial Accounting Standards Board).",
    pillar: "accounting",
    href: "/accounting/gaap-vs-ifrs",
  },
  {
    term: "Gross Income",
    definition:
      "All the money you receive from every source before anything is subtracted — wages, tips, interest, business profit, and more.",
    pillar: "taxation",
    href: "/taxation/taxable-income",
  },
  {
    term: "Gross Margin",
    definition:
      "Revenue minus the direct cost of what was sold, divided by revenue — isolates how efficiently a business produces or delivers what it sells.",
    pillar: "accounting",
    href: "/accounting/profit-margins",
  },
  {
    term: "Historical Cost",
    definition:
      "Recording an asset at what was originally paid for it, rather than what it's worth today — used especially when a specialized asset has no active market, so a \"current value\" would just be a guess.",
    pillar: "accounting",
    href: "/accounting/core-accounting-principles",
  },
  {
    term: "Hurdle Rate (Required Rate of Return)",
    definition:
      "The minimum return an investment has to clear to be worth doing instead of the next-best alternative use of that money. For a company evaluating its own projects, this is usually its Cost of Capital (WACC).",
    pillar: "finance",
    href: "/finance/capital-budgeting-decision-rules",
    alsoDefinedOn: { label: "Cost of Capital (WACC)", href: "/finance/cost-of-capital" },
  },
  {
    term: "IFRS",
    definition:
      "International Financial Reporting Standards — the accounting standard used in most of the rest of the world, set by the IASB (International Accounting Standards Board).",
    pillar: "accounting",
    href: "/accounting/gaap-vs-ifrs",
  },
  {
    term: "Incentive",
    definition:
      "Anything — a reward, a cost, a rule, a price — that makes one choice more or less attractive relative to the alternatives.",
    pillar: "foundations",
    href: "/foundations/incentives",
  },
  {
    term: "Income Statement",
    definition:
      "A summary of a business's revenue and expenses over a specific stretch of time — a month, a quarter, a year — ending in a single bottom-line figure: net income (profit) or net loss.",
    pillar: "accounting",
    href: "/accounting/income-statement",
  },
  {
    term: "Indirect Tax",
    definition:
      "A tax built into the price of something you buy. The seller collects it at the point of sale and passes it along to the government, so you experience it as part of a price, not a separate bill addressed to you.",
    pillar: "taxation",
    href: "/taxation/direct-vs-indirect-tax",
  },
  {
    term: "Inflation",
    definition:
      "A sustained rise in the general price level of an economy — meaning, on average, each unit of currency buys a little less than it used to.",
    pillar: "foundations",
    href: "/foundations/inflation",
  },
  {
    term: "Input Tax",
    definition:
      "The tax a business has already paid on its own purchases; it gets credited against the output tax the business charges on its sales, so a VAT/GST business remits only the difference.",
    pillar: "taxation",
    href: "/taxation/vat-gst",
  },
  {
    term: "Insurance",
    definition:
      "A way to trade a small, predictable, certain cost (the premium) for protection against a large, uncertain, and comparatively rare potential loss, instead of facing the full, unpredictable cost of a disaster directly.",
    pillar: "personal-finance",
    href: "/personal-finance/insurance-basics",
  },
  {
    term: "Intangible Asset",
    definition:
      "Something valuable a business owns that has no physical form, like a patent, a trademark, or purchased software.",
    pillar: "accounting",
    href: "/accounting/amortization-intangible-assets",
  },
  {
    term: "Interest Rate",
    definition:
      "The price charged for borrowing money, or paid for lending it, expressed as a percentage of the amount borrowed or lent per period of time (usually a year).",
    pillar: "foundations",
    href: "/foundations/what-is-an-interest-rate",
  },
  {
    term: "Internal Controls",
    definition:
      "The policies, procedures, and checks a business puts in place to prevent and catch errors, fraud, and misuse of its assets and financial records — such as requiring a second signature on large payments.",
    pillar: "accounting",
    href: "/accounting/internal-controls",
  },
  {
    term: "Internal Rate of Return (IRR)",
    definition:
      "The discount rate at which an investment's net present value comes out to exactly zero — in other words, the annual rate of return the investment is actually expected to produce over its life.",
    pillar: "finance",
    href: "/finance/internal-rate-of-return",
  },
  {
    term: "Investing Activities",
    definition:
      "Cash from buying or selling long-term assets like equipment — often negative for a growing business, which isn't necessarily bad.",
    pillar: "accounting",
    href: "/accounting/cash-flow-statement",
  },
  {
    term: "Lease",
    definition:
      "An arrangement where a business pays to use an asset — office space, equipment, a vehicle — that it doesn't own outright, over some period of time, rather than buying it.",
    pillar: "accounting",
    href: "/accounting/lease-accounting",
  },
  {
    term: "Lease Accounting",
    definition:
      "The set of rules for how a lease arrangement gets recorded on a company's financial statements — specifically, whether and how the obligation to make future lease payments shows up on the balance sheet.",
    pillar: "accounting",
    href: "/accounting/lease-accounting",
  },
  {
    term: "Liabilities",
    definition: "Everything a business owes to outsiders — bank loans, unpaid bills, money borrowed in any form.",
    pillar: "accounting",
    href: "/accounting/accounting-equation",
  },
  {
    term: "LIFO (Last-In-First-Out)",
    definition:
      "An inventory valuation method that assumes the most recently purchased inventory is sold first; permitted under GAAP but not under IFRS.",
    pillar: "accounting",
    href: "/accounting/gaap-vs-ifrs",
  },
  {
    term: "Long Position",
    definition:
      "In a futures contract, whoever agrees to buy holds the long position, which profits when the market price ends up higher than the agreed price.",
    pillar: "finance",
    href: "/finance/futures-contracts",
  },
  {
    term: "Long-Term Assets",
    definition: "Assets not expected to convert to cash within about a year, like equipment and buildings.",
    pillar: "accounting",
    href: "/accounting/balance-sheet",
  },
  {
    term: "Long-Term Capital Gains",
    definition:
      "Gains from assets held longer (past a threshold, often one year), usually taxed at a lower rate than short-term gains — partly to avoid discouraging long-term holding, and partly because a gain built up over many years shouldn't be taxed as a single year's ordinary income.",
    pillar: "taxation",
    href: "/taxation/capital-gains-tax",
  },
  {
    term: "Long-Term Liabilities",
    definition: "Obligations due later, such as a mortgage or a long-term loan.",
    pillar: "accounting",
    href: "/accounting/balance-sheet",
  },
  {
    term: "Loss Aversion",
    definition:
      "The well-documented pattern where losses feel roughly twice as painful as an equivalent gain feels good, driving costly investing mistakes like panic-selling during a downturn.",
    pillar: "finance",
    href: "/finance/behavioral-finance",
  },
  {
    term: "Marginal Tax Rate",
    definition: "The rate applied to the next dollar you earn — the rate charged on the top slice of your income.",
    pillar: "taxation",
    href: "/taxation/marginal-vs-effective-tax-rate",
  },
  {
    term: "Market Efficiency",
    definition:
      "A market is efficient to the extent that current prices already reflect all the publicly available information about an asset, because new information gets absorbed into prices quickly as investors trade on it.",
    pillar: "finance",
    href: "/finance/index-funds-and-market-efficiency",
  },
  {
    term: "Market Risk Premium",
    definition:
      "The extra return the stock market as a whole is expected to earn over the risk-free rate — the compensation investors demand for taking on market-wide risk. Used in CAPM as (Market Return − Risk-Free Rate).",
    pillar: "finance",
    href: "/finance/cost-of-capital",
  },
  {
    term: "Materiality",
    definition:
      "Whether a potential error or misstatement is large enough that it could actually change a reasonable person's decision — the threshold auditors use to decide what's worth investigating, rather than checking every transaction.",
    pillar: "accounting",
    href: "/accounting/audits",
  },
  {
    term: "Matching Principle",
    definition:
      "Expenses are recorded in the same period as the revenue they helped generate, not just whenever cash happens to move.",
    pillar: "accounting",
    href: "/accounting/core-accounting-principles",
  },
  {
    term: "MD&A (Management's Discussion & Analysis)",
    definition:
      "The section of a financial report where a company's own leadership explains, in their own words, what happened during the period and why — a narrative, not a set of audited numbers.",
    pillar: "accounting",
    href: "/accounting/managements-discussion-and-analysis",
  },
  {
    term: "Net Income",
    definition:
      "The bottom-line profit figure on the income statement when revenue exceeds expenses (a net loss if expenses exceed revenue): Net Income = Revenue − Expenses.",
    pillar: "accounting",
    href: "/accounting/income-statement",
  },
  {
    term: "Net Margin",
    definition: "Profit after everything, including interest and taxes, divided by revenue — the bottom-line percentage.",
    pillar: "accounting",
    href: "/accounting/profit-margins",
  },
  {
    term: "Net Present Value (NPV)",
    definition:
      "The sum of the present values of every cash flow an investment is expected to produce — including the upfront cost as a negative cash flow today — discounted back to today's dollars at a chosen rate. Positive means the investment is expected to be worth more than it costs.",
    pillar: "finance",
    href: "/finance/net-present-value",
  },
  {
    term: "Nominal Rate (Nominal Interest Rate)",
    definition:
      "The annual interest rate quoted or advertised for a loan or investment, before taking into account how often it actually compounds.",
    pillar: "finance",
    href: "/finance/compound-interest",
  },
  {
    term: "Nominal Return",
    definition: "The percentage an investment grew by in raw dollar terms, with no adjustment for inflation or anything else.",
    pillar: "finance",
    href: "/finance/real-vs-nominal-returns",
  },
  {
    term: "Operating Activities",
    definition:
      "Cash from the core, everyday business — the number most worth watching closely, since it reflects the core business actually generating (or consuming) cash day to day.",
    pillar: "accounting",
    href: "/accounting/cash-flow-statement",
  },
  {
    term: "Operating Cycle",
    definition:
      "DSO + DIO — how long it takes to sell inventory and collect cash, without netting out the benefit of delayed supplier payments (unlike the more complete cash conversion cycle).",
    pillar: "accounting",
    href: "/accounting/cash-conversion-cycle",
  },
  {
    term: "Operating Expenses",
    definition: "Everything else it costs to run a business day to day, like rent, wages, and marketing.",
    pillar: "accounting",
    href: "/accounting/income-statement",
  },
  {
    term: "Operating Lease",
    definition:
      "One of two lease categories, based on how closely the arrangement resembles actually owning the asset; now appears on the balance sheet like a finance lease, but is presented differently on the income statement over the life of the lease.",
    pillar: "accounting",
    href: "/accounting/lease-accounting",
  },
  {
    term: "Operating Margin",
    definition:
      "Profit after also subtracting the everyday costs of running the business (rent, wages, marketing), divided by revenue.",
    pillar: "accounting",
    href: "/accounting/profit-margins",
  },
  {
    term: "Opportunity Cost",
    definition:
      "What you give up by choosing one option instead of another: the value of the next-best alternative you didn't pick.",
    pillar: "foundations",
    href: "/foundations/scarcity-and-opportunity-cost",
  },
  {
    term: "Output Tax",
    definition:
      "The tax a business charges on its sales; a VAT/GST business remits output tax minus input tax to the government.",
    pillar: "taxation",
    href: "/taxation/vat-gst",
  },
  {
    term: "Pass-Through Entity",
    definition:
      "A sole proprietorship, partnership, or most LLCs — a business not treated as its own separate taxpayer. Its profit \"passes through\" directly to the owners' personal tax returns and is taxed once, at each owner's individual rate.",
    pillar: "taxation",
    href: "/taxation/business-and-startup-taxation",
  },
  {
    term: "Payback Period",
    definition:
      "The amount of time it takes for an investment's cumulative cash flows, measured in raw undiscounted dollars, to equal its original upfront cost — how long until the investment has \"paid for itself.\"",
    pillar: "finance",
    href: "/finance/payback-period",
  },
  {
    term: "Payroll Taxes",
    definition:
      "Taxes charged specifically on wages and salaries — typically split between employee and employer — usually earmarked to fund specific programs like retirement and health benefits, rather than a government's general spending pool.",
    pillar: "taxation",
    href: "/taxation/payroll-taxes",
  },
  {
    term: "Pigouvian Cost",
    definition:
      "A cost that spills onto people outside the original transaction — for example, the healthcare and pollution costs of smoking or fuel use that extend beyond the buyer and seller. Named after economist Arthur Pigou.",
    pillar: "taxation",
    href: "/taxation/excise-duties",
  },
  {
    term: "Pigouvian Tax",
    definition:
      "A tax deliberately sized to make a good's price reflect more of its true, full cost to society, not just the cost to the immediate buyer and seller — what most excise duties actually are.",
    pillar: "taxation",
    href: "/taxation/excise-duties",
  },
  {
    term: "Pre-approval",
    definition:
      "A lender's pre-approval amount reflects that lender's own risk tolerance and debt-to-income limits — not a personalized judgment about what's actually comfortable for your budget. Best treated as a ceiling, not a target.",
    pillar: "personal-finance",
    href: "/personal-finance/first-home-purchase",
  },
  {
    term: "Premium (Insurance)",
    definition:
      "The small, predictable, certain cost paid regularly in exchange for an insurer absorbing the risk of a large, uncertain, potential loss.",
    pillar: "personal-finance",
    href: "/personal-finance/insurance-basics",
  },
  {
    term: "Present Value",
    definition:
      "The current worth of a sum of money that will be received or paid at some point in the future, discounted back at a given rate of return — how much you'd need to set aside today to end up with a specific amount later.",
    pillar: "finance",
    href: "/finance/present-value",
  },
  {
    term: "Principal",
    definition: "The original amount of money invested or borrowed, before any interest is added.",
    pillar: "finance",
    href: "/finance/compound-interest",
  },
  {
    term: "Profit Margin",
    definition:
      "A profit figure from the income statement expressed as a percentage of revenue rather than as a raw dollar amount, which cancels out the effect of business size so different-sized businesses can be compared.",
    pillar: "accounting",
    href: "/accounting/profit-margins",
  },
  {
    term: "Progressive Tax",
    definition:
      "A tax system that charges a higher rate as the amount being taxed (usually income) goes up, so people with higher incomes pay a larger percentage of their income in tax, not just a larger dollar amount.",
    pillar: "taxation",
    href: "/taxation/progressive-taxation",
  },
  {
    term: "Quarterly Report",
    definition: "A lighter, more frequent update on a company's performance, published roughly every three months.",
    pillar: "accounting",
    href: "/accounting/quarterly-vs-annual-reports",
  },
  {
    term: "Quick Ratio",
    definition:
      "Like the current ratio, but excludes inventory from current assets, since inventory can take real time to sell and convert to cash: (Current Assets − Inventory) ÷ Current Liabilities.",
    pillar: "accounting",
    href: "/accounting/liquidity-and-working-capital",
  },
  {
    term: "Real Return",
    definition:
      "The nominal return adjusted for inflation — what an investment actually grew by in terms of purchasing power, rather than just the raw number of dollars.",
    pillar: "finance",
    href: "/finance/real-vs-nominal-returns",
  },
  {
    term: "Reasonable Assurance",
    definition:
      "What an audit provides — not a guarantee that every number is perfectly correct, but an independent, informed opinion that the statements are free of material misstatement.",
    pillar: "accounting",
    href: "/accounting/audits",
  },
  {
    term: "Regressive Tax",
    definition:
      "A tax that effectively takes a bigger percentage bite out of lower incomes than higher ones — often not by design, but because of what the tax applies to.",
    pillar: "taxation",
    href: "/taxation/progressive-taxation",
  },
  {
    term: "Retirement Planning",
    definition:
      "Estimating how much money will be needed by the time someone stops earning a regular paycheck, and how much to set aside now and over time to reach that amount, accounting for how long the money needs to last, what it can earn while invested, and inflation.",
    pillar: "finance",
    href: "/finance/retirement-planning",
  },
  {
    term: "Return",
    definition:
      "What an investor gains, or loses, from an investment, usually expressed as a percentage of what was originally put in.",
    pillar: "finance",
    href: "/finance/risk-and-return",
  },
  {
    term: "Return on Assets (ROA)",
    definition:
      "Net income as a percentage of total assets — how much profit a business generates relative to everything it owns: Net Income ÷ Total Assets.",
    pillar: "accounting",
    href: "/accounting/return-and-profitability-ratios",
  },
  {
    term: "Return on Invested Capital (ROIC)",
    definition:
      "Profit as a percentage of the capital actually invested to run a business — its debt plus its equity: Net Income ÷ (Total Debt + Total Equity).",
    pillar: "accounting",
    href: "/accounting/return-and-profitability-ratios",
  },
  {
    term: "Revenue",
    definition: "Money earned from a business's core activity.",
    pillar: "accounting",
    href: "/accounting/income-statement",
  },
  {
    term: "Revenue Recognition Principle",
    definition: "Revenue counts when it's actually earned — goods or services delivered — not necessarily when cash is received.",
    pillar: "accounting",
    href: "/accounting/core-accounting-principles",
  },
  {
    term: "Risk",
    definition:
      "In a financial sense, the uncertainty about whether an investment's actual outcome will match what was expected, including the chance of losing some or all of what was put in.",
    pillar: "finance",
    href: "/finance/risk-and-return",
  },
  {
    term: "Risk-Free Rate",
    definition:
      "Roughly what a government bond pays — the safe baseline return used as the starting point in CAPM before adding compensation for a specific stock's risk.",
    pillar: "finance",
    href: "/finance/cost-of-capital",
  },
  {
    term: "Risk Pooling",
    definition:
      "Many people facing a similar risk each pay a modest premium into a shared pool, and the relatively few who actually suffer a loss get paid out from it — letting an insurer predict total claims reliably even though no individual outcome is predictable.",
    pillar: "personal-finance",
    href: "/personal-finance/insurance-basics",
  },
  {
    term: "Risk Premium",
    definition:
      "The portion of an investment's expected return that compensates for risk, layered on top of a baseline return for giving up the money's use and for expected inflation.",
    pillar: "finance",
    href: "/finance/risk-and-return",
  },
  {
    term: "Risk-Return Relationship",
    definition:
      "The observation that riskier investments have to offer a higher expected return than safer ones, on average — otherwise no one would rationally choose to take on the extra risk.",
    pillar: "finance",
    href: "/finance/risk-and-return",
  },
  {
    term: "Roth-Style Account",
    definition:
      "An account where you contribute money that's already been taxed (no deduction now), let it grow without being taxed along the way, then withdraw it completely tax-free in retirement.",
    pillar: "taxation",
    href: "/taxation/retirement-and-tax-advantaged-accounts",
  },
  {
    term: "Salvage Value",
    definition: "What an asset might still be worth — for resale or parts — at the end of its useful life; often assumed to be zero in simple examples.",
    pillar: "accounting",
    href: "/accounting/depreciation",
  },
  {
    term: "Sales Tax",
    definition:
      "A single-stage indirect tax charged once, at the point of final sale to the end consumer. Unlike VAT/GST, no tax is charged or credited at earlier stages of production.",
    pillar: "taxation",
    href: "/taxation/sales-tax",
  },
  {
    term: "Savings Goal",
    definition:
      "Starting from a specific target — a dollar amount you want to have by a specific future date — and working backward to figure out how much needs to be saved regularly to get there.",
    pillar: "personal-finance",
    href: "/personal-finance/savings-goals",
  },
  {
    term: "Scarcity",
    definition:
      "The basic fact that resources — money, time, energy, raw materials — are limited, while the things people want to do with them are not.",
    pillar: "foundations",
    href: "/foundations/scarcity-and-opportunity-cost",
  },
  {
    term: "Segregation of Duties",
    definition:
      "Splitting the responsibility for authorizing a transaction, recording it, and physically safeguarding the related asset across different people, so no single person can both cause a problem and cover it up alone.",
    pillar: "accounting",
    href: "/accounting/internal-controls",
  },
  {
    term: "Short Position",
    definition:
      "In a futures contract, whoever agrees to sell holds the short position, which profits when the market price ends up lower than the agreed price.",
    pillar: "finance",
    href: "/finance/futures-contracts",
  },
  {
    term: "Short-Term Capital Gains",
    definition: "Gains from assets held for a short period, often under a year, usually taxed at the same rates as ordinary income.",
    pillar: "taxation",
    href: "/taxation/capital-gains-tax",
  },
  {
    term: "Simple Interest",
    definition:
      "Interest earned only on the original principal, so a balance grows by the same fixed amount every period (a straight line) rather than accelerating the way compound interest does.",
    pillar: "finance",
    href: "/finance/compound-interest",
  },
  {
    term: "Sin Tax",
    definition:
      "An informal, colloquial nickname for excise duties on goods viewed as vices, like tobacco or alcohol — not a formal legal term; the actual legal term is \"excise duty.\"",
    pillar: "taxation",
    href: "/taxation/excise-duties",
  },
  {
    term: "Snowball Method",
    definition:
      "A debt payoff strategy where extra payments go to the smallest balance first, regardless of its rate. Not mathematically optimal, but it clears entire debts faster, producing an early, visible win.",
    pillar: "personal-finance",
    href: "/personal-finance/debt-payoff",
  },
  {
    term: "Stock",
    definition:
      "Equity — buying one makes an investor a part-owner of a company, with no promised payment schedule at all; what it's worth depends entirely on how the business performs and what other investors are willing to pay.",
    pillar: "finance",
    href: "/finance/stocks-vs-bonds",
  },
  {
    term: "Straight-Line Depreciation",
    definition:
      "The simplest depreciation method, spreading an asset's cost evenly across its useful life: Annual Depreciation = (Cost − Salvage Value) ÷ Useful Life.",
    pillar: "accounting",
    href: "/accounting/depreciation",
  },
  {
    term: "Supply",
    definition: "How much of something sellers are willing to offer at a given price. Usually, the higher the price, the more sellers are willing to produce or sell.",
    pillar: "foundations",
    href: "/foundations/supply-and-demand",
  },
  {
    term: "Tax Bracket",
    definition:
      "A range of income taxed at its own rate. Only the portion of income that falls inside a given bracket is taxed at that bracket's rate — the rest is still taxed at the lower rates for the brackets beneath it.",
    pillar: "taxation",
    href: "/taxation/marginal-vs-effective-tax-rate",
  },
  {
    term: "Tax Credit",
    definition:
      "A reduction of your final tax bill directly, dollar for dollar, after your tax has already been calculated. A $1,000 credit cuts $1,000 off what you owe, no matter what tax rate applies to you.",
    pillar: "taxation",
    href: "/taxation/deductions-vs-credits",
  },
  {
    term: "Tax Deduction",
    definition:
      "A reduction in the amount of your income that's subject to tax. You don't pay tax on a dollar that's deducted — its value depends on your marginal tax rate, so it's worth more, in dollars saved, to someone in a higher bracket.",
    pillar: "taxation",
    href: "/taxation/deductions-vs-credits",
  },
  {
    term: "Tax Shield (Interest Tax Deductibility)",
    definition:
      "Because interest paid on debt is tax deductible, it reduces a company's taxable income, so the government effectively absorbs part of the interest cost — which is why the cost of debt gets adjusted downward for taxes in the WACC formula.",
    pillar: "finance",
    href: "/finance/cost-of-capital",
  },
  {
    term: "Tax-Advantaged Retirement Account",
    definition:
      "A special category of investment account that changes the normal tax treatment of money saved for retirement, in exchange for restrictions like contribution limits and penalties for early withdrawal.",
    pillar: "taxation",
    href: "/taxation/retirement-and-tax-advantaged-accounts",
  },
  {
    term: "Taxable Income",
    definition:
      "The amount actually left over to apply a tax rate to, after specific adjustments and deductions are subtracted from gross income. Tax brackets apply to taxable income, not gross income.",
    pillar: "taxation",
    href: "/taxation/taxable-income",
  },
  {
    term: "Terminal Value",
    definition:
      "A single lump-sum estimate, used in DCF valuation, representing everything a business is expected to be worth from the end of its explicit projection period onward, assuming its cash flows keep growing at some steady, sustainable rate forever after.",
    pillar: "finance",
    href: "/finance/dcf-valuation",
  },
  {
    term: "Time Value of Money",
    definition:
      "The principle that a sum of money available today is worth more than the same sum received in the future, because money in hand now can be invested and put to work.",
    pillar: "finance",
    href: "/finance/time-value-of-money",
  },
  {
    term: "Traditional-Style Account",
    definition:
      "An account where you contribute money before it's taxed (reducing taxable income now), let it grow without being taxed along the way, then pay ordinary income tax when it's withdrawn in retirement.",
    pillar: "taxation",
    href: "/taxation/retirement-and-tax-advantaged-accounts",
  },
  {
    term: "Trial Balance",
    definition:
      "A listing of every account's balance in one place, checking that total debits equal total credits before anything else proceeds — catches a transaction recorded on only one side or with a mismatched amount, but not one posted correctly in total to the wrong account.",
    pillar: "accounting",
    href: "/accounting/the-accounting-cycle",
  },
  {
    term: "VAT / GST",
    definition:
      "An indirect, consumption-based tax collected at each stage of a product's production and distribution chain. Each business charges tax on what it sells but gets credit for the tax it already paid on what it bought, so tax ultimately applies only to the value each business added.",
    pillar: "taxation",
    href: "/taxation/vat-gst",
  },
  {
    term: "Working Capital",
    definition:
      "The difference between a business's current assets and its current liabilities. A positive number means more short-term resources than short-term obligations; a negative number means the reverse.",
    pillar: "accounting",
    href: "/accounting/liquidity-and-working-capital",
  },
  {
    term: "Yield",
    definition:
      "The return currently available on bonds of similar risk and maturity in the market today; used as the discount rate when valuing a bond, it moves in the opposite direction from bond prices.",
    pillar: "finance",
    href: "/finance/bond-valuation",
  },
];
