# Roadmap

This tracks planned content across Foundations, Finance, Personal Finance,
Accounting, and Taxation, and what's actually been built so far.

**Before proposing a new batch of pages in a future session, read this file
first** — check what's already done, what's in progress, and what's
planned, and use it to inform build order (extend an in-progress section
toward "core complete" before starting a brand-new section, consistent with
the build-order approach used so far). After building a batch, update this
file to reflect the new state.

Status values: **Done**, **In progress** (some sub-items done, others
still planned), **Planned** (nothing built yet).

## Foundations (`/foundations`)

**Done** — all 5 planned pages built (capped at 5–6 per STANDARDS.md). No
calculators planned for this section by design.

- Scarcity & Opportunity Cost — Done
- Supply & Demand — Done
- Incentives — Done
- Inflation — Done
- What an Interest Rate Fundamentally Is — Done

## Finance (`/finance`)

### Time Value of Money — Done

- Compound Interest — Done (+ calculator)
- Time Value of Money — Done
- Present Value — Done (+ calculator)
- Real vs. Nominal Returns — Done (+ calculator)
- Amortization (loans & mortgages) — Done (+ calculator, includes optional
  origination fee & loan-purpose framing so it doubles as a personal/auto/
  business loan calculator without a separate page)

### Risk & Return — Done

- Risk & Return — Done
- Diversification — Done (+ calculator: adjustable-N idiosyncratic vs.
  market-wide shock illustrator)

### Capital Budgeting — Done

- Net Present Value (NPV) — Done (+ calculator, cross-links to IRR and
  Payback Period)
- Internal Rate of Return (IRR) — Done (+ calculator; reuses `calculateNPV`
  inside a bisection search rather than a separate formula, since IRR has
  no general closed-form solution)
- Payback Period — Done (+ calculator)
- Capital Budgeting Decision Rules — Done: new synthesis concept page
  (`/finance/capital-budgeting-decision-rules`) explaining why NPV is the
  tiebreaker when NPV/IRR/Payback disagree, with a worked two-project
  conflict example (Project A: fast payback, marginally higher IRR, small
  NPV; Project B: slower payback, marginally lower IRR, much larger NPV —
  NPV wins). Paired with the Capital Budgeting Decision Calculator, which
  reuses `calculateNPV`/`calculateIRR`/`calculatePaybackPeriod` via a new
  `evaluateCapitalBudgetingDecision` wrapper (no duplicated math), shows an
  accept/reject verdict, and flags a long payback period relative to the
  project horizon even when NPV/IRR both say accept.

### Corporate Finance & Valuation — Done

- Discounted Cash Flow (DCF) Valuation — Done (+ calculator: projected
  FCFs growing at a constant rate, discount rate/WACC, terminal growth
  rate → estimated value, using the standard Gordon growth / perpetuity
  growth terminal value formula)
- Cost of Capital (WACC) — Done (+ calculator: market value of equity/debt,
  cost of equity, cost of debt, tax rate → WACC, using
  `calculateWACC` in `lib/finance-math.ts`; after-tax cost of debt reflects
  the interest tax shield). Worked example ties back to DCF Valuation's
  own worked example, which had assumed a 12% WACC without deriving it.
  Cross-linked from Risk & Return, Net Present Value, and DCF Valuation.
- Capital Structure (Debt vs. Equity) — Done (no calculator — comparative/
  conceptual, like Risk & Return; worked example illustrates financial
  leverage amplifying ROE in both directions using a two-company, good-year/
  bad-year comparison). Cross-linked from and to Cost of Capital, and links
  forward to Return & Profitability Ratios.

Built inspired by the first-principles teaching philosophy already
established on this site (see STANDARDS.md) — not by reproducing any
specific author's or textbook's copyrighted material, structure, or
framing.

### Fixed Income — Done (minimal)

- Fixed Income — Done (no calculator; the umbrella/definitional concept,
  built as a minimal dependency page so Bond Valuation had something to
  link to)
- Bond Valuation — Done (+ calculator: face value, coupon rate, years to
  maturity, market yield → bond price; explains the inverse price/yield
  relationship as a direct consequence of Present Value discounting, not a
  market quirk)

### Futures & Derivatives — Done (forwards/futures only)

- Futures Contracts — Done (+ long/short P&L calculator). Explicitly
  scoped to futures/forwards; options pricing (Black-Scholes) intentionally
  not covered — a separate, later topic if the site goes there.

### Investing & Markets — Done (minimal, no calculators)

- Stocks vs. Bonds — Done. Bonds as the fixed claim, stocks as the
  residual claim, framed as a direct consequence of Capital Structure
  (issuer's side) and Risk & Return (why the residual claim needs a higher
  expected return). Cross-linked to Bond Valuation and Capital Structure.
- Index Funds & Market Efficiency — Done. Root argument: any easy, safe
  way to beat the market gets competed away (ties to Supply & Demand and
  Risk & Return), which is why a low-cost index fund is a reasonable
  default. Worked example compares a 1.5%-fee stock-picker against a
  0.1%-fee index fund at identical 8% gross returns over 20 years (≈
  $35,236 vs. ≈ $45,755 — fees alone cost over $10,500). Reuses the
  Diversification concept rather than re-deriving it.

Both pages are comparative/conceptual, no calculator, same pattern as
Risk & Return.

### Retirement Planning — Done

- Retirement Planning — Done (+ calculator: current age, retirement age,
  current savings, monthly contribution, expected return, inflation →
  projected savings at retirement in both nominal and real terms; reuses
  `calculateFutureValueWithContributions` via a new
  `calculateRetirementProjection` wrapper rather than duplicating the
  annuity math). Ties back to Compound Interest and Time Value of Money.

### Mortgage / Home Loan Calculator — Done

A dedicated calculator reusing the existing amortization math in
`lib/finance-math.ts`, with mortgage-specific inputs (home price, down
payment %, term, rate, optional property tax/insurance escrow) and a
combined monthly payment breakdown. Pairs with the existing Amortization
concept page (linked inline from its worked example) rather than a new
concept page.

### Behavioral Finance — Done (minimal, no calculator)

- Behavioral Finance — Done. Single umbrella page (root problem: standard
  finance models assume rational actors, real investors don't always act
  that way) built around loss aversion — losses feel roughly twice as
  painful as equivalent gains feel good — and its practical investing
  consequence, panic-selling during a downturn. Worked example ties
  directly back to Risk & Return's point about long time horizons
  absorbing short-term swings. Cross-linked to Risk & Return, Index Funds
  & Market Efficiency, and Diversification. Other biases (overconfidence,
  herd behavior, anchoring) intentionally left unqueued — can be added as
  separate pages later if this section should grow further.

## Personal Finance (`/personal-finance`)

**Done** — a new pillar (own route group, nav entry, homepage section),
parallel to Finance/Accounting/Taxation, covering practical everyday money
decisions rather than financial theory.

- Budgeting — Done (+ calculator: 50/30/20 split)
- Emergency Funds — Done (+ calculator: target size & months-to-target)
- Debt Payoff Strategies — Done (+ calculator: avalanche vs. snowball
  month-by-month simulation, supports any number of debts)
- Savings Goals — Done (+ calculator: required monthly contribution to
  hit a target amount by a target date, reuses the same annuity math as
  Compound Interest via a new `calculateRequiredContribution` function)
- Credit Scores — Done (+ calculator: credit utilization). Root problem
  framed as the same asymmetric-information issue as Audits (lenders can't
  personally verify a stranger's trustworthiness), resolved via a
  standardized signal instead. Cross-linked to Risk & Return and
  Incentives.
- Buying vs. Renting — Done (+ calculator: ending net worth under buying
  vs. renting-and-investing-the-difference over the same horizon; reuses
  `calculateAmortization`, `calculateCompoundInterest`, and
  `calculateFutureValueWithContributions` via a new `calculateBuyVsRent`
  wrapper in `lib/finance-math.ts` — no duplicated math). Worked example
  hand-verified: $400k home / 20% down / 6% / 30yr vs. $1,800/mo rent, 3%
  appreciation, 7% investment return → renting-and-investing wins by
  ≈$703,914, with the result explicitly framed as sensitive to the
  appreciation-vs-investment-return gap, not a fixed rule.
- Insurance Basics — Done (+ calculator: expected value of insurance).
  Root problem framed as risk pooling, explicitly tied to Diversification
  (same law-of-large-numbers logic applied to insurable losses instead of
  investment returns) and Risk & Return (trading expected value for
  reduced risk).
- First Home Purchase — Done (no new calculator — synthesis page linking
  to the existing Mortgage Calculator, Buying vs. Renting, Emergency
  Funds, and Budgeting). Root problem: pre-approval reflects a lender's
  risk tolerance, not a personalized read on what's actually affordable.

All four previously-unqueued Personal Finance ideas are now built.

## Accounting (`/accounting`)

### Core — In progress

- Accounting Equation — Done
- Double-Entry Bookkeeping — Done
- Accrual vs. Cash Accounting — Done
- The Income Statement — Done (+ calculator, shared with Profit Margins
  below — one tool computes both)
- The Balance Sheet — Done
- The Cash Flow Statement — Done (+ calculator)
- Depreciation — Done (+ calculator: straight-line vs. declining-balance
  side by side; the concept page's mechanics section was extended to
  introduce declining-balance before the calculator used it)
- Profit Margins — Done (+ calculator, shared with The Income Statement)
- Amortization (accounting sense: intangible assets) — Done (no dedicated
  calculator — the straight-line math is identical to Depreciation's, so
  the page links directly to the existing Depreciation Calculator instead
  of duplicating it). Distinct from Finance's loan Amortization page — same
  word, different concept; the page explicitly disambiguates and cross-links
  to `/finance/amortization`. Root problem ties back to Accrual vs. Cash
  Accounting, same as Depreciation.

Accounting's Core section is now fully Done.

### Financial Statement Analysis — Done (Batch H)

Four new pages under `/accounting/[topic]` (same routing pattern as the
rest of Accounting):

- **Liquidity & Working Capital** — Done. Working Capital, Current Ratio,
  Quick Ratio; ties back to the Balance Sheet's current/long-term split
  (cross-linked both ways).
- **The Cash Conversion Cycle** — Done (+ calculator). DSO, DPO, DIO, and
  the combined cycle; root problem ties back to Accrual vs. Cash Accounting
  (profitable on paper, cash-poor in practice). Calculator inputs: revenue,
  COGS, accounts receivable, accounts payable, inventory → DSO/DPO/DIO +
  cycle in days. Math lives in `calculateCashConversionCycle`
  (`lib/accounting-math.ts`).
- **Return & Profitability Ratios** — Done (+ calculator). ROA and ROIC,
  explicitly distinguished from Profit Margins (margin = profit per sales
  dollar; ROA/ROIC = profit per dollar invested/owned). Cross-linked from
  Profit Margins, and links forward to DCF Valuation. Calculator inputs:
  net income, total assets, total debt, total equity → ROA, ROIC. Math
  lives in `calculateReturnRatios` (`lib/accounting-math.ts`).
- **Lease Accounting** — Done (no calculator — conceptual). Why leases were
  historically off-balance-sheet, why that changed (leases now capitalized
  as both an asset and a liability), operating vs. finance leases at a
  plain-language level, referencing ASC 842/IFRS 16 by name without
  reproducing their technical text. Worked example: an office lease
  before/after capitalization.

Wiring: all four pages register in `accountingConcepts`
(`lib/content/accounting.tsx`), which automatically feeds the Accounting
homepage listing and the search index — no separate registry to update.
Cross-links confirmed: Balance Sheet → Working Capital, Profit Margins →
Return & Profitability Ratios, Return & Profitability Ratios → DCF
Valuation. Production build (`npm run build`) verified clean with all 12
accounting pages and 28 calculators generating successfully.

### Internal Controls — Done (minimal, no calculator)

- Internal Controls — Done. Core idea is segregation of duties (splitting
  authorization, recording, and custody of an asset across different
  people so no one person can both cause and hide a problem), with the
  root problem framed as an information-asymmetry/trust problem — owners
  can't watch every transaction, so the process itself has to provide
  assurance. Mentions the opportunity/incentive/rationalization framing
  auditors use (by name, in plain language, not reproducing any specific
  textbook's text). Cross-linked to Double-Entry Bookkeeping and forward
  to Audits.

### Audits — Done (minimal, no calculator)

- Audits — Done. Root problem: financial statements are prepared by the
  same management whose performance they reflect (a conflict of interest,
  ties to Incentives), and outside users have no independent way to verify
  them — an audit provides an independent opinion that restores enough
  trust for outsiders to rely on the numbers. Covers materiality
  (cost-benefit reasoning, not checking every transaction) and "reasonable
  assurance, not absolute assurance." Cross-linked to Internal Controls.

Neither page has a calculator — both are process/assurance topics, not
quantitative formulas, consistent with how Risk & Return, Capital
Structure, and Lease Accounting were built without one.

### Financial Reporting — Done

Six new pages under `/accounting/[topic]` (same routing pattern as the
rest of Accounting), covering how a financial report actually gets
assembled and delivered, distinct from the three statements themselves:

- **Why Financial Reporting Exists** — Done. Root problem: owners,
  investors, and lenders aren't in the room day-to-day and can't just take
  management's word for it (ties to Audits). Frames the three statements
  as the "what" and this section as the "how it gets assembled and
  delivered." Cross-linked from/to Income Statement, Balance Sheet, Cash
  Flow Statement, Audits.
- **How a Financial Report Gets Made: The Accounting Cycle** — Done
  (+ calculator: Trial Balance Checker). Walks the seven-step sequence
  (record → adjust → trial balance → close → draft statements → review/
  audit → publish) using Maria's bakery as the continuing example, and
  explains explicitly why the order matters (can't draft from unchecked
  books, can't audit numbers that could still change). The trial balance
  gets its own clearly-labeled step: what it catches (one-sided or
  mismatched-amount errors) versus what it can't (correct amounts posted
  to the wrong account). Calculator lets the user add/remove account rows
  (name, debit, credit) and shows Balanced/Out-of-balance, using a new
  `calculateTrialBalance` in `lib/accounting-math.ts`; explanation text
  reinforces that balancing doesn't guarantee correctness. Cross-linked
  from Income Statement, Balance Sheet, and Cash Flow Statement.
- **Quarterly vs. Annual Reports** — Done (no calculator — comparative/
  conceptual). Frequent-lighter-review vs. full-audited-annual as a
  deliberate timeliness/rigor trade-off, not two lengths of the same
  thing. Names the US's 10-Q/10-K explicitly flagged as one country's
  terminology, consistent with how Taxation handles jurisdiction-specific
  examples.
- **Footnotes & Disclosures** — Done (no calculator). Root problem: two
  companies can report identical headline numbers while footnotes reveal
  very different underlying risk (worked example: same $500,000 net
  income, very different depreciation assumptions, litigation exposure,
  and customer concentration). Cross-linked to Depreciation.
- **MD&A: Management's Discussion & Analysis** — Done (no calculator).
  Explicit media-literacy framing: MD&A is a narrative written by the
  same management whose performance it describes, not an audited number —
  useful context, not to be taken at face value. Cross-linked to Audits.
- **Reading a Report: Warning Signs** — Done (no calculator). Pattern-level
  signals (restated earnings, frequent auditor changes, footnotes
  contradicting headlines, MD&A that never accepts responsibility),
  explicitly framed as reasons to look closer, not proof of wrongdoing.

Wiring: all six pages register in `accountingConcepts`
(`lib/content/accounting.tsx`), which automatically feeds the Accounting
homepage listing and the search index. The Trial Balance Checker
calculator registers in `lib/content/calculators.tsx` and — per the
site-wide inline-calculator pattern — appears both as its own page at
`/calculators/the-accounting-cycle` and embedded directly on the
accounting-cycle concept page.

Note: Audits and Internal Controls were believed still-planned when this
batch was scoped, but both were already built in an earlier session (see
their own sections above) — this batch links to them directly rather than
as "coming soon."

### Accounting Standards — Done

Three new pages under `/accounting/[topic]`, closing the GAAP vs. IFRS
gap from the original site spec and complementing Financial Reporting
(that section covers HOW a report gets assembled; this one covers the
RULES that govern what the numbers inside it mean):

- **Why Accounting Standards Exist** — Done (no calculator —
  umbrella/conceptual). Root problem: without shared rules, two companies
  could report wildly different numbers for economically identical
  situations — same underlying reasoning as why Taxation treats country
  systems comparatively. Worked example: two companies both reporting
  "$1,000,000 revenue" via different recognition timing. Cross-linked
  from Why Financial Reporting Exists and The Accounting Cycle.
- **GAAP vs. IFRS** — Done (no calculator). Comparative, high-level
  treatment (FASB/US vs. IASB/rest-of-world), covering two genuine
  divergences in plain language — LIFO permitted under GAAP but not
  IFRS, and IFRS's more permissive capitalization of development costs —
  explicitly flagged as illustrative, not an exhaustive technical
  catalog, since both bodies revise specific rules over time. Worked
  example hand-verified: 100 units @ $10 + 100 @ $12, 100 sold → LIFO
  COGS $1,200 vs. FIFO COGS $1,000, same underlying activity.
- **Core Accounting Principles** — Done (no calculator — the heart of
  this section). Four principles that live inside both GAAP and IFRS:
  Matching, Historical Cost vs. Fair Value, Revenue Recognition, and
  Consistency. Uses one continuing example (Maria's bakery) threaded
  through all four, then a closing synthesis paragraph showing all four
  principles operating simultaneously in one snapshot. Cross-linked to
  Accrual vs. Cash Accounting, Depreciation, Footnotes & Disclosures, The
  Accounting Cycle, and GAAP vs. IFRS — and linked back to from all of
  those pages except GAAP vs. IFRS, which links to it directly.

## Taxation (`/taxation`)

### Core comparative framework — Done

- Marginal vs. Effective Tax Rate — Done (+ calculator: lets a user enter
  their own income across US/UK/India/EU-generic brackets, since the
  concept page's built-in country selector only shows a fixed sample
  income)
- Progressive Taxation — Done (no calculator — comparative/conceptual,
  covered by the Marginal vs. Effective calculator)
- Tax Deductions vs. Tax Credits — Done (+ calculator)
- Taxable Income — Done (+ calculator)
- Payroll Taxes — Done (+ calculator: shows the cap-driven regressive
  effect at different income levels)

### Capital Gains Tax — Done (+ calculator)

### Retirement & Tax-Advantaged Accounts — Done

Covers the universal Traditional-style (pre-tax contribution, taxed on
withdrawal) vs. Roth-style (post-tax contribution, tax-free withdrawal)
distinction rather than any one country's specific account rules (401(k),
IRA, UK workplace pensions, India's EPF/NPS, etc. are named as examples but
not modeled individually — no country selector, same approach as Capital
Gains Tax). Root problem ties back to Compound Interest (ordinary accounts
lose growth to tax drag every year) and Incentives (why governments
subsidize retirement saving). Worked example derives the key first-
principles insight algebraically: Traditional and Roth produce identical
after-tax value when the current and retirement tax rate are equal, so the
real decision is which rate will be lower, not which account "sounds"
better. (+ calculator: Traditional vs. Roth Calculator, reuses
`calculateFutureValueWithContributions` via a new
`calculateTraditionalVsRothComparison` wrapper in `lib/finance-math.ts`.)

### Business & Startup Taxation — Done

Core distinction: pass-through taxation (profit taxed once, at the
owner's personal rate) vs. C-corporation double taxation (taxed once at
the corporate level, again at the shareholder level when distributed as a
dividend). Explicitly ties back to Cost of Capital — this is the actual
structural reason interest is tax-deductible but dividends aren't, not
just an arbitrary rule. Also ties retained-vs-distributed profit to the
value of tax deferral established in Retirement & Tax-Advantaged Accounts.
Worked example uses realistic current-ish US rates (32% personal / 21%
corporate / 15% dividend) to show double taxation isn't automatically much
worse than pass-through at today's rates. (+ calculator: Business
Structure Tax Calculator, using a new `calculateBusinessStructureTax` in
`lib/finance-math.ts`.)

### Indirect Taxation — Done

Five new pages under `/taxation/[topic]` (same routing pattern as the
rest of Taxation), closing the direct-tax-only gap in everything built
previously, and completing the originally-spec'd VAT/GST calculator that
was never built:

- **Direct vs. Indirect Tax** — Done (no calculator — umbrella/conceptual).
  Who a tax is levied on (a person's own income) vs. who collects it (a
  seller, built into a price). Cross-links to all six existing direct-tax
  pages (Progressive Taxation, Marginal vs. Effective Tax Rate, Capital
  Gains Tax, Payroll Taxes, Deductions vs. Credits, Taxable Income).
- **VAT / GST** — Done (+ calculator). Explains the output-tax-minus-
  input-tax credit mechanism with a hand-verified three-stage worked
  example (wood $100 → table $300 → retail $500 at 10%, remitted as
  $10 + $20 + $20 = $50, matching 10% of the final price exactly).
- **Sales Tax** — Done (no separate calculator — deliberately reuses the
  VAT/GST Calculator instance via the same `relatedCalculator` href,
  matching the spec's "same instance, same code" instruction). Same
  $100/$300/$500 product walked through single-stage collection instead,
  for a direct mechanical contrast with VAT/GST.
- **Customs Duties & Tariffs** — Done (+ calculator: declared value, duty
  rate, flat handling fee → duty owed + total landed cost). Explicitly
  corrects the "foreign countries pay tariffs" misconception and ties the
  price/quantity effect to Supply & Demand.
- **Excise Duties** — Done (no calculator — conceptual). Pigouvian tax
  framing defined in plain language, tied to Incentives (taxing a
  behavior to discourage it, not just to raise revenue).

Math lives in `lib/tax.ts`: `calculateConsumptionTax` (shared by VAT/GST
and Sales Tax, supports both "add tax" and "extract tax from a
tax-inclusive total" modes) and `calculateCustomsDuty`.

## Calculators built so far (37)

Finance: Compound Interest, Present Value, Net Present Value, Amortization
(+ mortgage/personal-loan framing), Real vs. Nominal Returns,
Diversification Impact Illustrator, Mortgage, Retirement Planning, IRR,
Payback Period, DCF Valuation, Bond Valuation, Futures P&L, Capital
Budgeting Decision, Cost of Capital (WACC).

Personal Finance: Budget, Emergency Fund, Debt Payoff, Savings Goal,
Credit Utilization, Buying vs. Renting, Expected Value of Insurance.

Accounting: Income Statement & Margin (shared), Cash Flow, Depreciation,
Cash Conversion Cycle, Return & Profitability Ratios, Trial Balance
Checker.

Taxation: Marginal vs. Effective Tax Rate, Deduction vs. Credit, Taxable
Income, Payroll Tax, Capital Gains Tax, Traditional vs. Roth (Retirement &
Tax-Advantaged Accounts), Business Structure Tax, VAT/GST (shared by VAT/
GST and Sales Tax concept pages), Customs Duty.

## Queued batches (not yet built)

None currently queued. Every section identified in this file's own
"Planned"/"unqueued" markers, including the Glossary, has now been built.
All originally-planned content from the project brief (`prompt.txt`) is
complete.

## Glossary (`/glossary`) — Done

Built as the final piece of the original site spec. 184 terms extracted
from the plain-language definitions already written inline across every
concept page in all five pillars (Foundations, Finance, Personal Finance,
Accounting, Taxation) — condensed to 1-2 sentences each, not reworded from
scratch, per STANDARDS.md's plain-language requirement. Data lives in
`lib/content/glossary.ts` (`glossaryTerms`), typed via the new
`GlossaryTerm` interface in `lib/types.ts`.

- Alphabetical listing grouped by first letter, with a jump-to-letter nav
  strip at the top (`app/glossary/page.tsx`). Terms starting with a digit
  (10-K, 10-Q, 50/30/20 Rule) group under a leading "#" bucket.
- Each entry is tagged with its pillar (Foundations/Finance/Personal
  Finance/Accounting/Taxation) and links back to the concept page where
  it's covered in full depth. A handful of terms defined identically on
  two pages (Equity, Discount Rate, Future Value, Bond) note both sources
  via an `alsoDefinedOn` link rather than duplicating entries.
- Search integration: glossary terms are appended to the shared
  `searchIndex` in `lib/content/index.ts` under a new `"glossary"`
  pillar tag, so typing e.g. "EBITDA"-style terms like "WACC" or "trial
  balance" into the homepage search box surfaces the glossary entry
  directly, deep-linked to its anchor (`/glossary#<slug>`).
- Cross-linking: rather than hand-editing ~50 concept pages, `ConceptPage`
  itself (the shared component every concept page renders through) was
  extended to automatically show a small "Also in the Glossary: ..." line
  above the Related section, listing any glossary terms sourced from that
  specific page — a light-touch, single-component change instead of a
  per-page rewrite.
- Nav: "Glossary" added to `SiteHeader`'s top-level links, plus a teaser
  section on the homepage (`app/page.tsx`) linking to `/glossary`.

Verified with `npx tsc --noEmit` (clean) and `npm run build` (clean,
`/glossary` generated as a static route alongside all existing pages).
