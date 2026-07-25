import Link from "next/link";
import type { ConceptPageProps } from "@/lib/types";
import { US, UK, IN, EU } from "@/lib/tax-country-data";

export const taxationConcepts: Record<string, ConceptPageProps> = {
  "marginal-vs-effective-tax-rate": {
    pillar: "taxation",
    slug: "marginal-vs-effective-tax-rate",
    title: "Marginal vs. Effective Tax Rate",
    summary:
      "Your marginal rate is the tax on your next dollar of income. Your effective rate is the tax on all of it, blended together.",
    definition: (
      <div className="space-y-3">
        <p>
          The <strong>marginal tax rate</strong> is the rate applied to the
          next dollar you earn — the rate charged on the top slice of your
          income.
        </p>
        <p>
          The <strong>effective tax rate</strong> is the rate you actually
          pay overall: total tax owed divided by total income. Because
          income is taxed in slices rather than all at one rate (more on why
          below), the effective rate is always lower than the marginal rate
          whenever more than one slice of your income is involved.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Imagine if earning one more dollar bumped your <em>entire</em>{" "}
          income into a higher tax rate. A raise could then leave you with
          less take-home pay than before, once your whole paycheck got taxed
          at the new, higher rate — earning more would sometimes make you
          worse off. That would punish people for earning more and
          discourage anyone from taking a raise, a bonus, or a better job —
          a bad{" "}
          <Link
            href="/foundations/incentives"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            incentive
          </Link>{" "}
          to build into a tax system.
        </p>
        <p>
          Most income tax systems avoid this by taxing income in slices
          instead of all at once. Income is divided into brackets (ranges of
          income, sometimes also called bands), and each bracket has its own
          rate. Only the portion of your income that falls inside a given
          bracket is taxed at that bracket&apos;s rate — the rest is still
          taxed at the lower rates for the brackets beneath it. This design
          is called a <em>progressive</em> tax system, and it&apos;s why
          earning more can never actually shrink your take-home pay.
        </p>
        <p>
          The distinction between marginal and effective rates matters
          because brackets are usually described by their top rate
          (&quot;the 32% bracket&quot;), which makes it easy to assume your
          whole income gets taxed at that rate. It doesn&apos;t — the
          effective rate, which blends every bracket you touched, is what
          tells you the real, overall cost.
        </p>
      </div>
    ),
    countrySelector: {
      disclaimer:
        "The bracket figures shown below are simplified, illustrative examples for teaching the marginal-vs-effective concept. They are not current official tax figures and should not be used for filing or planning — always verify against your local tax authority.",
      countries: [US, UK, IN, EU],
    },
    misconceptions: [
      {
        claim: "Earning more can put you in a higher bracket and shrink your take-home pay.",
        reality:
          "Because only the income above each threshold is taxed at the higher rate, earning one more dollar can never reduce your after-tax income in a standard progressive system — your take-home pay still rises, just by slightly less per dollar in the new bracket.",
      },
      {
        claim: "Your marginal rate is the rate you pay on all your income.",
        reality:
          "Your marginal rate only applies to the top slice of income. The rest is taxed at the lower rates for the brackets beneath it, which is exactly why the effective rate — the blended average — is always lower than the marginal rate whenever more than one bracket applies.",
      },
      {
        claim: "Two countries with the same top marginal rate tax people the same amount.",
        reality:
          "Effective rates depend on the entire bracket structure — where the thresholds between brackets sit, how many brackets there are, and whether any income is taxed at 0% — so two systems with an identical top rate can produce very different effective rates for the same income.",
      },
    ],
    relatedConcepts: [
      { label: "Progressive Taxation", href: "/taxation/progressive-taxation" },
      { label: "Tax Deductions vs. Tax Credits", href: "/taxation/deductions-vs-credits" },
      { label: "Incentives", href: "/foundations/incentives" },
    ],
    relatedCalculator: {
      label: "Marginal vs. Effective Tax Rate Calculator",
      href: "/calculators/marginal-vs-effective-tax-rate",
    },
  },

  "progressive-taxation": {
    pillar: "taxation",
    slug: "progressive-taxation",
    title: "Progressive Taxation",
    summary:
      "A tax system where the rate rises as income rises, so tax is matched to ability to pay — contrasted with flat and regressive systems, which don't adjust for it.",
    definition: (
      <div className="space-y-3">
        <p>
          A <strong>progressive tax</strong> system charges a higher tax rate
          as the amount being taxed (usually income) goes up, so people with
          higher incomes pay a larger percentage of their income in tax, not
          just a larger dollar amount.
        </p>
        <p>
          It&apos;s one of three broad patterns a tax can follow. A{" "}
          <strong>flat tax</strong> charges the same percentage no matter how
          much someone earns. A <strong>regressive tax</strong> effectively
          takes a bigger percentage bite out of lower incomes than higher
          ones — often not by design, but because of what the tax applies
          to.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Governments need revenue to pay for things everyone relies on —
          roads, schools, courts, defense — and the simplest way to raise it
          would be to charge every taxpayer the same flat percentage of their
          income. But a flat percentage doesn&apos;t cost everyone the same
          amount in any meaningful sense: someone earning $30,000 a year
          needs nearly all of it to cover rent, food, and other essentials,
          while someone earning $300,000 a year can comfortably cover their
          needs and still have most of that income left over as
          discretionary spending. Taking the same 20% from both people takes
          away necessities from the first person, but only a slice of extra
          spending money from the second — the identical rate lands very
          differently depending on how much income someone already has to
          spare.
        </p>
        <p>
          Progressive taxation is a response to that mismatch: instead of
          charging everyone the same rate, it charges a higher rate on
          income above certain thresholds (see{" "}
          <Link
            href="/taxation/marginal-vs-effective-tax-rate"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Marginal vs. Effective Tax Rate
          </Link>{" "}
          for exactly how those brackets work), so people pay a larger share
          of their income in tax as their income grows past what&apos;s
          needed to cover essential spending. The goal is to match the tax
          burden to someone&apos;s ability to pay, rather than just the
          dollar amount they happen to earn.
        </p>
        <p>
          Not every tax works this way. A flat tax is simpler to administer,
          but the unevenness described above still applies. A regressive tax
          often arises by accident rather than by design: a flat sales tax
          on groceries, for instance, charges the same rate to every
          shopper, but groceries make up a much bigger share of a
          lower-income household&apos;s spending than a higher-income
          household&apos;s — so the same tax rate consumes a bigger share of
          the lower earner&apos;s income, even though the posted rate never
          changed.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Consider two earners — one making <strong>$30,000</strong> a year,
          one making <strong>$300,000</strong> — under three different tax
          systems.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Flat tax at 20%:
  $30k earner:  pays $6,000   → keeps $24,000  (effective rate: 20%)
  $300k earner: pays $60,000  → keeps $240,000 (effective rate: 20%)

Progressive tax (10% up to $40k, 30% above):
  $30k earner:  all $30k in the 10% bracket → pays $3,000  (effective rate: 10%)
  $300k earner: $4,000 (10% of $40k) + $78,000 (30% of $260k) = $82,000 (effective rate: ~27%)`}
        </pre>
        <p>
          Under the flat tax, both earners pay the same 20% — the $6,000
          just costs the lower earner far more in practical terms. Under the
          progressive system, both earners are taxed at the same 10% rate on
          their first $40,000, but the higher earner ends up paying a much
          higher rate overall — about 27% effective versus 10% for the lower
          earner. For the full breakdown of how brackets stack to produce
          that effective rate, see{" "}
          <Link
            href="/taxation/marginal-vs-effective-tax-rate"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Marginal vs. Effective Tax Rate
          </Link>
          .
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "A progressive tax system means the rich pay all the tax and everyone else pays none.",
        reality:
          "Nearly everyone still pays tax on the income that falls above the lowest bracket. Higher earners pay a higher rate on their upper income — they aren't the only ones paying, and lower earners aren't exempt.",
      },
      {
        claim: "A flat tax is inherently more 'fair' because everyone pays the same rate.",
        reality:
          "'Fair' depends on what you're measuring. A flat rate treats everyone the same in percentage terms, but not in terms of what that percentage actually costs each person given what they have left over.",
      },
      {
        claim: "Sales tax is progressive because everyone pays the same posted rate at checkout.",
        reality:
          "A flat rate applied to purchases is often regressive in effect, because necessities consume a bigger share of a lower earner's income than a higher earner's — even though the rate itself is identical for everyone.",
      },
    ],
    relatedConcepts: [
      {
        label: "Marginal vs. Effective Tax Rate",
        href: "/taxation/marginal-vs-effective-tax-rate",
      },
      {
        label: "Tax Deductions vs. Tax Credits",
        href: "/taxation/deductions-vs-credits",
      },
    ],
  },

  "deductions-vs-credits": {
    pillar: "taxation",
    slug: "deductions-vs-credits",
    title: "Tax Deductions vs. Tax Credits",
    summary:
      "A deduction reduces the income you're taxed on; a credit reduces the tax bill itself, dollar for dollar — the difference determines how much each one actually saves you.",
    definition: (
      <div className="space-y-3">
        <p>
          A <strong>tax deduction</strong> reduces the amount of your income
          that&apos;s subject to tax — your{" "}
          <Link
            href="/taxation/taxable-income"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            taxable income
          </Link>
          . You don&apos;t pay tax on a dollar that&apos;s deducted, but you
          still pay tax on the rest at whatever rate applies to it.
        </p>
        <p>
          A <strong>tax credit</strong> reduces your final tax bill directly,
          dollar for dollar, after your tax has already been calculated. A
          $1,000 credit cuts $1,000 off what you owe, no matter what tax rate
          applies to you.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Governments often want to encourage certain choices — saving for
          retirement, buying a home, paying for education — or to account
          for costs that reduce how much someone can really afford to pay in
          tax, like business expenses or medical bills. Deductions exist to
          let taxpayers subtract certain costs before a tax rate is ever
          applied, so tax is calculated on a more accurate picture of what a
          person can actually spare, rather than their raw income.
        </p>
        <p>
          But a deduction&apos;s value depends on your{" "}
          <Link
            href="/taxation/marginal-vs-effective-tax-rate"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            marginal tax rate
          </Link>
          : someone in a 32% bracket saves 32 cents of tax for every dollar
          deducted, while someone in a 12% bracket only saves 12 cents for
          that same dollar. The identical deduction is worth more, in actual
          dollars saved, to whoever earns more and faces a higher rate — a
          direct side effect of how deductions interact with a{" "}
          <Link
            href="/taxation/progressive-taxation"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            progressive
          </Link>{" "}
          system.
        </p>
        <p>
          Tax credits exist as an alternative that doesn&apos;t have that
          effect. Because a credit comes off the final tax bill rather than
          off taxable income, it&apos;s worth exactly the same number of
          dollars to every taxpayer who qualifies, regardless of their
          bracket. Governments reach for a credit instead of a deduction
          specifically when they want a benefit&apos;s value to not shrink
          or grow depending on how much someone earns — a credit aimed at
          helping lower-income families, for instance, would badly miss the
          point if it were worth less to the very people it&apos;s meant to
          help.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>The tax actually saved by each works out differently:</p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Deduction: tax saved = deduction amount × your marginal tax rate
Credit:    tax saved = credit amount, in full, regardless of tax rate`}
        </pre>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Two taxpayers are each eligible for a <strong>$1,000</strong>{" "}
          deduction, and, separately, a <strong>$1,000</strong> credit. One
          is in the <strong>12%</strong> bracket, the other in the{" "}
          <strong>32%</strong> bracket.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`12% bracket taxpayer:  $1,000 deduction → saves $120   |   $1,000 credit → saves $1,000
32% bracket taxpayer:  $1,000 deduction → saves $320   |   $1,000 credit → saves $1,000`}
        </pre>
        <p>
          The credit saves exactly $1,000 for both taxpayers. The deduction
          saves nearly three times as much for the higher earner — not
          because the deduction is bigger, but purely because of their
          higher marginal rate.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "A $1,000 deduction and a $1,000 credit save you the same amount of tax.",
        reality:
          "They don't, except by coincidence. A credit always saves the full amount; a deduction only saves your marginal rate multiplied by the amount — which is less than the full amount for anyone taxed below 100%.",
      },
      {
        claim: "Deductions and credits are basically the same thing, just named differently.",
        reality:
          "They act at different points in the calculation — a deduction lowers the income tax is calculated on, a credit lowers the bill after tax is calculated — and that difference gives them very different value depending on income.",
      },
      {
        claim: "Everyone benefits equally from a given deduction.",
        reality:
          "The dollar value of a deduction rises with your marginal tax rate, so an identical deduction is worth more, in tax saved, to higher earners in a progressive system.",
      },
    ],
    relatedConcepts: [
      {
        label: "Marginal vs. Effective Tax Rate",
        href: "/taxation/marginal-vs-effective-tax-rate",
      },
      { label: "Progressive Taxation", href: "/taxation/progressive-taxation" },
      { label: "Taxable Income", href: "/taxation/taxable-income" },
    ],
    relatedCalculator: {
      label: "Deduction vs. Credit Calculator",
      href: "/calculators/deductions-vs-credits",
    },
  },

  "taxable-income": {
    pillar: "taxation",
    slug: "taxable-income",
    title: "Taxable Income",
    summary:
      "Not every dollar you earn gets taxed — taxable income is what's left after specific adjustments and deductions strip away income the tax code doesn't count.",
    definition: (
      <div className="space-y-3">
        <p>
          <strong>Gross income</strong> is all the money you receive from
          every source before anything is subtracted — wages, tips, interest,
          business profit, and more.
        </p>
        <p>
          <strong>Taxable income</strong> is the amount actually left over to
          apply a tax rate to, after specific adjustments and deductions are
          subtracted from gross income. Tax brackets (see{" "}
          <Link
            href="/taxation/marginal-vs-effective-tax-rate"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Marginal vs. Effective Tax Rate
          </Link>
          ) apply to taxable income, not gross income — so two people with
          identical gross incomes can end up with very different tax bills
          if they qualify for different deductions.
        </p>
        <p>
          Many tax systems compute this in stages. The U.S., for example,
          first subtracts certain adjustments from gross income to get{" "}
          <em>adjusted gross income (AGI)</em>, then subtracts deductions
          from AGI to arrive at taxable income. Other countries use
          different terms and a different order of steps, but the
          underlying idea — narrowing &quot;everything you earned&quot; down
          to &quot;the amount actually taxed&quot; — is the same.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          If a tax system simply applied its rate to gross income, it would
          tax money that a person or business never really got to keep or
          benefit from. A business that earns $500,000 in revenue but spends
          $450,000 on rent, wages, and supplies to generate that revenue
          doesn&apos;t actually have $500,000 available to pay tax on — it
          has $50,000. An employee who puts part of their paycheck directly
          into a retirement account hasn&apos;t spent that money on anything
          yet, and many tax systems choose not to tax it until it&apos;s
          later withdrawn. Charging tax on the full gross amount in either
          case would tax money that isn&apos;t real, current, disposable
          income.
        </p>
        <p>
          Taxable income exists to narrow gross income down to a number that
          better reflects what a person or business can actually afford to
          have taxed, using two kinds of subtractions: adjustments and
          exclusions that remove income the tax code has decided not to
          count in the first place (like certain retirement contributions),
          and deductions that subtract specific allowed costs — business
          expenses, or for individuals, either a flat &quot;standard
          deduction&quot; or an itemized list of qualifying expenses (see{" "}
          <Link
            href="/taxation/deductions-vs-credits"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Tax Deductions vs. Tax Credits
          </Link>
          ). What&apos;s left after both is taxable income — the number tax
          brackets actually apply to.
        </p>
        <p>
          This is why two people who earn the exact same gross income can
          owe very different amounts of tax: their gross income might be
          identical, but the adjustments and deductions that shrink it down
          to taxable income rarely are.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Someone earns <strong>$70,000</strong> in wages (gross income).
          They contribute <strong>$6,000</strong> to a retirement account
          that&apos;s excluded from this year&apos;s tax, and they claim a{" "}
          <strong>$14,000</strong> standard deduction.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Gross income:                     $70,000
− Retirement contribution:         $6,000  (excluded from this year's tax)
= Adjusted gross income (AGI):    $64,000
− Standard deduction:             $14,000
= Taxable income:                 $50,000`}
        </pre>
        <p>
          It&apos;s this <strong>$50,000</strong> figure, not the original
          $70,000 in wages, that gets run through the tax brackets described
          in Marginal vs. Effective Tax Rate.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Your tax bracket is based on your total salary or gross income.",
        reality:
          "Brackets apply to taxable income, which is usually meaningfully lower than gross income once adjustments and deductions are subtracted out.",
      },
      {
        claim: "AGI (or a country's equivalent intermediate figure) and taxable income are the same thing.",
        reality:
          "AGI is an intermediate step — gross income minus adjustments. Deductions are subtracted after that to reach taxable income, so the two are different numbers in the same calculation, not interchangeable terms.",
      },
      {
        claim: "Money put into a retirement account, or other excluded income, disappears from your finances.",
        reality:
          "It's excluded from this year's taxable income, not gone. Many systems still tax it later — for example, when it's withdrawn in retirement — so the benefit is in timing the tax, not avoiding it indefinitely.",
      },
    ],
    relatedConcepts: [
      {
        label: "Marginal vs. Effective Tax Rate",
        href: "/taxation/marginal-vs-effective-tax-rate",
      },
      {
        label: "Tax Deductions vs. Tax Credits",
        href: "/taxation/deductions-vs-credits",
      },
      { label: "Progressive Taxation", href: "/taxation/progressive-taxation" },
    ],
    relatedCalculator: {
      label: "Taxable Income Calculator",
      href: "/calculators/taxable-income",
    },
  },

  "payroll-taxes": {
    pillar: "taxation",
    slug: "payroll-taxes",
    title: "Payroll Taxes",
    summary:
      "A separate tax taken directly out of wages to fund specific programs like retirement and healthcare — distinct from income tax, with its own rate, base, and rules.",
    definition: (
      <p>
        <strong>Payroll taxes</strong> are taxes charged specifically on
        wages and salaries — typically split between the employee (withheld
        directly from their paycheck) and the employer (paid on top,
        separately) — usually earmarked to fund specific programs, most
        commonly retirement and health-related benefits, rather than going
        into a government&apos;s general spending pool the way income tax
        usually does.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Programs like a national retirement pension or a public health
          insurance system work differently from general government
          spending on things like roads or courts: they&apos;re designed to
          pay out benefits tied to how much a specific person — or their
          employer, on their behalf — contributed over their working life,
          closer in spirit to a mandatory group insurance or savings plan
          than to a public good funded from whatever tax revenue happens to
          come in. Funding that kind of program purely from general income
          tax revenue would blur the direct link between what someone paid
          in and what they&apos;re entitled to receive. Payroll taxes exist
          to keep that link separate and dedicated.
        </p>
        <p>
          This is also why payroll taxes usually work differently from
          income tax in ways that matter. They&apos;re often charged on wage
          income specifically, not on investment income like capital gains
          or dividends; frequently split between employee and employer so
          the visible cost is shared; and sometimes capped at a certain wage
          level, because the benefit the program eventually pays out is also
          capped — unlike a{" "}
          <Link
            href="/taxation/progressive-taxation"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            progressive
          </Link>{" "}
          income tax, a payroll tax that&apos;s funding one specific,
          capped benefit doesn&apos;t need to keep taking a rising share of
          income indefinitely.
        </p>
        <p>
          Because payroll tax is administered separately from income tax,
          it&apos;s also easy to overlook when estimating a true tax
          burden: someone comparing tax rates using only their income tax
          bracket is missing a real, mandatory cost taken directly from
          every paycheck, on top of income tax.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Consider a simplified, illustrative payroll tax: employees pay{" "}
          <strong>6%</strong> of wages up to a <strong>$160,000</strong>{" "}
          annual cap toward a retirement program, plus <strong>1.5%</strong>{" "}
          of all wages, uncapped, toward a health program. Employers
          separately match both amounts.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Earning $60,000 a year:
  Retirement: 6% × $60,000            = $3,600  (under the cap)
  Health:     1.5% × $60,000          =   $900  (uncapped)
  Withheld from paycheck:             = $4,500
  (employer separately pays another $4,500 — not visible on the paycheck)

Earning $300,000 a year:
  Retirement: 6% × $160,000 (capped)  = $9,600  (not 6% of the full $300,000)
  Health:     1.5% × $300,000         = $4,500  (uncapped)
  Withheld from paycheck:             = $14,100`}
        </pre>
        <p>
          Notice that the $300,000 earner&apos;s retirement withholding is
          only 3.2% of their total wages ($9,600 ÷ $300,000), even though
          the stated rate is 6% — the cap means income above $160,000
          isn&apos;t taxed for that program at all, so the retirement
          portion actually takes a smaller share of income as wages rise
          past the cap.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Payroll tax is just another name for income tax.",
        reality:
          "It's a separate tax, calculated differently — often a flat rate on wages up to a cap, split between employee and employer — and earmarked for specific programs rather than general government revenue.",
      },
      {
        claim: "Only employees pay payroll tax.",
        reality:
          "Employers typically owe a matching share on top of what's withheld from the employee — a real cost of employing someone that never shows up on that employee's paycheck at all.",
      },
      {
        claim: "Because it funds programs like retirement or healthcare, payroll tax must be progressive like income tax.",
        reality:
          "Many payroll tax systems are capped, which makes them behave regressively as a share of income for high earners — income above the cap isn't taxed for that program at all, even though it's still fully taxed for income tax purposes.",
      },
    ],
    relatedConcepts: [
      { label: "Progressive Taxation", href: "/taxation/progressive-taxation" },
      { label: "Taxable Income", href: "/taxation/taxable-income" },
    ],
    relatedCalculator: {
      label: "Payroll Tax Calculator",
      href: "/calculators/payroll-taxes",
    },
  },

  "capital-gains-tax": {
    pillar: "taxation",
    slug: "capital-gains-tax",
    title: "Capital Gains Tax",
    summary:
      "A tax on the profit from selling an investment or asset for more than you paid for it — separate from income tax on wages, often with its own, different rates.",
    definition: (
      <div className="space-y-3">
        <p>
          <strong>Capital gains tax</strong> is a tax on the profit made from
          selling an asset — a stock, a bond, a piece of property — for more
          than what was originally paid for it. The{" "}
          <strong>capital gain</strong> is simply the sale price minus the
          original purchase price (the &quot;cost basis&quot;); tax is owed
          only on that gain, not on the full sale price.
        </p>
        <p>
          Many tax systems also distinguish between <strong>short-term</strong>{" "}
          gains (from assets held for a short period, often under a year)
          and <strong>long-term</strong> gains (held longer), usually taxing
          short-term gains at the same rates as ordinary income and
          long-term gains at a lower rate.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Income from working a job and profit from selling an investment
          are both real increases in what someone can spend — in that
          sense, taxing both makes sense under the same basic logic as any
          income tax (see{" "}
          <Link
            href="/taxation/taxable-income"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Taxable Income
          </Link>
          ): a gain is a genuine increase in someone&apos;s ability to pay
          tax, whether it came from a paycheck or from an investment. So
          most tax systems apply some tax to capital gains, just as they do
          to wages.
        </p>
        <p>
          But capital gains differ from wages in a way that shapes how
          they&apos;re often taxed: a gain isn&apos;t realized gradually
          like a salary — it can build up silently for years as an
          asset&apos;s value rises, then get taxed all at once in the
          single year it&apos;s sold, even though the increase in value
          happened little by little over a much longer stretch. Many
          systems tax gains on assets held for longer at a lower rate than
          gains on assets held briefly, partly to avoid discouraging people
          from holding productive investments for the long run just to
          sidestep a tax bill, and partly because a gain that built up over
          many years, taxed as if it were a single year&apos;s ordinary
          income, could otherwise push someone into a much higher marginal
          bracket than their situation really reflects.
        </p>
        <p>
          This creates a real{" "}
          <Link
            href="/foundations/incentives"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            incentive
          </Link>{" "}
          that shapes investor behavior: because long-term gains are
          usually taxed at a lower rate than short-term gains, investors
          often have a reason to hold an appreciating asset past the
          long-term threshold rather than sell it early, purely because of
          the tax difference — a decision driven by the tax rules, not
          necessarily by what's best for the investment itself.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Someone buys <strong>$5,000</strong> of stock, which grows to{" "}
          <strong>$8,000</strong> — a capital gain of <strong>$3,000</strong>.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Sold after 8 months (short-term):
  Taxed at ordinary income rate (24%) → tax owed: $720

Sold after 14 months (long-term):
  Taxed at lower long-term rate (15%) → tax owed: $450`}
        </pre>
        <p>
          Same $3,000 gain, same investment — the only difference is how
          long it was held before selling, and that alone changes the tax
          bill by $270.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Capital gains tax applies to your entire investment when you sell it.",
        reality:
          "It applies only to the gain — the sale price minus what you originally paid — not to the full sale proceeds. There's no tax owed on money that's just a return of your own original investment.",
      },
      {
        claim: "Selling an investment at a loss has no tax consequence.",
        reality:
          "Many systems let a capital loss offset capital gains (or, up to certain limits, other income), reducing overall tax owed. A loss isn't purely bad news — it can carry a real tax benefit too.",
      },
      {
        claim: "The short-term/long-term distinction is based on the size of the gain, not the holding period.",
        reality:
          "It's based purely on how long the asset was held before selling, regardless of how large or small the gain is — a huge gain held long-term and a tiny gain held long-term both qualify for the same lower rate, and the reverse holds for short-term gains.",
      },
    ],
    relatedConcepts: [
      { label: "Taxable Income", href: "/taxation/taxable-income" },
      { label: "Risk & Return", href: "/finance/risk-and-return" },
      { label: "Incentives", href: "/foundations/incentives" },
    ],
    relatedCalculator: {
      label: "Capital Gains Tax Calculator",
      href: "/calculators/capital-gains-tax",
    },
  },

  "retirement-and-tax-advantaged-accounts": {
    pillar: "taxation",
    slug: "retirement-and-tax-advantaged-accounts",
    title: "Retirement & Tax-Advantaged Accounts",
    summary:
      "Special accounts that change when — or whether — tax is paid on money saved for retirement, which removes a drag on compounding that an ordinary investment account doesn't escape.",
    definition: (
      <div className="space-y-3">
        <p>
          A <strong>tax-advantaged retirement account</strong> is a special
          category of investment account that changes the normal tax
          treatment of money saved for retirement, in exchange for
          restrictions like limits on how much can be contributed each year
          and penalties for withdrawing the money early.
        </p>
        <p>
          Countries structure these accounts differently — 401(k)s and IRAs
          in the US, workplace pensions in the UK, the EPF and NPS in
          India, and so on — but nearly all of them follow one of two
          underlying patterns:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Traditional-style:</strong> contribute money before
            it&apos;s taxed (which reduces taxable income now), let it grow
            without being taxed along the way, then pay ordinary income tax
            when it&apos;s withdrawn in retirement.
          </li>
          <li>
            <strong>Roth-style:</strong> contribute money that&apos;s
            already been taxed (no deduction now), let it grow without
            being taxed along the way, then withdraw it completely tax-free
            in retirement.
          </li>
        </ul>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Per{" "}
          <Link
            href="/finance/compound-interest"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Compound Interest
          </Link>
          , growth compounds on itself over decades — but in an ordinary
          investment account, every year&apos;s gains are exposed to tax
          (dividend tax, or{" "}
          <Link
            href="/taxation/capital-gains-tax"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            capital gains tax
          </Link>{" "}
          when sold), which quietly shrinks the amount left to keep
          compounding, year after year. Over a multi-decade retirement
          horizon, that repeated drag adds up to a meaningfully smaller
          balance than the same money would reach if it could grow
          undisturbed by tax.
        </p>
        <p>
          Governments have a genuine policy reason to care whether people
          save enough for retirement — someone who arrives at old age with
          no savings typically becomes dependent on public support. Per{" "}
          <Link
            href="/foundations/incentives"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Incentives
          </Link>
          , one effective way to encourage a behavior is to make it more
          rewarding, so many tax systems create special accounts that
          remove at least one layer of taxation from retirement savings
          specifically — either by letting contributions go in before tax
          (Traditional-style, deferring tax to withdrawal) or by letting
          growth come out completely tax-free (Roth-style, in exchange for
          no deduction up front). Either way, the money inside the account
          escapes the annual tax drag that money in an ordinary account
          can&apos;t avoid, which is what makes these accounts genuinely
          more valuable than an equivalent ordinary investment account, not
          just a bookkeeping difference.
        </p>
        <p>
          It&apos;s tempting to assume Roth-style accounts are simply
          &quot;better&quot; because the word &quot;tax-free&quot; sounds
          unambiguously good. But Traditional and Roth aren&apos;t a free
          lunch versus each other — Traditional trades a deduction today
          for a tax bill later, and Roth trades no deduction today for no
          tax bill later. Which one actually leaves more money in your
          pocket depends entirely on comparing your{" "}
          <Link
            href="/taxation/marginal-vs-effective-tax-rate"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            marginal tax rate
          </Link>{" "}
          today against your expected marginal tax rate in retirement — see
          the worked example below.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>
          Suppose the same pre-tax income, <code>C</code>, is available to
          save either way, it grows at rate <code>r</code> for{" "}
          <code>N</code> years, your current marginal tax rate is{" "}
          <code>T_now</code>, and your expected marginal tax rate in
          retirement is <code>T_ret</code>:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Traditional after-tax value = C × (1 + r)ᴺ × (1 − T_ret)
Roth after-tax value        = C × (1 − T_now) × (1 + r)ᴺ`}
        </pre>
        <p>
          Notice both formulas contain the same growth term,{" "}
          <code>C × (1 + r)ᴺ</code> — the only difference is whether the{" "}
          <code>(1 − tax rate)</code> factor is applied using today&apos;s
          rate or retirement&apos;s rate. That means the two are
          mathematically identical whenever <code>T_now = T_ret</code>: the
          deduction Traditional gives you now and the tax-free withdrawal
          Roth gives you later cancel out exactly. The only thing that
          actually decides a winner is whether your tax rate turns out to
          be higher or lower in retirement than it is today.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Someone saves <strong>$5,000</strong> of pre-tax income a year for{" "}
          <strong>30</strong> years, earning <strong>7%</strong> annually.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Same tax rate now and in retirement (24% both times):
  Traditional: grows to ≈ $472,304, taxed at 24% on withdrawal → ≈ $358,951 after tax
  Roth:        only $3,800/yr contributed after 24% tax, grows to ≈ $358,951 after tax
  → Identical. The deduction and the tax-free withdrawal cancel out exactly.

Lower tax rate in retirement (24% now, 12% in retirement):
  Traditional: same $472,304 balance, taxed at only 12% on withdrawal → ≈ $415,628 after tax
  Roth:        same $358,951 after-tax value as before (Roth doesn't care about retirement rate)
  → Traditional wins by about $56,677, purely because the withdrawal is taxed at a lower rate
    than the rate the deduction was worth back when it was contributed.`}
        </pre>
        <p>
          The lesson isn&apos;t &quot;Traditional is better&quot; — a
          higher expected tax rate in retirement flips the advantage
          entirely to Roth. It&apos;s that the choice hinges on comparing
          two tax rates, not on which account sounds more appealing.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Roth accounts are always the better choice because withdrawals are tax-free.",
        reality:
          "As the worked example shows, Traditional and Roth are mathematically identical when the current and retirement tax rate are the same, and Traditional actually comes out ahead when the retirement rate is lower — 'tax-free later' isn't automatically better than 'a deduction now.'",
      },
      {
        claim: "Tax-advantaged accounts let you avoid paying tax on retirement savings entirely.",
        reality:
          "Traditional-style accounts only defer the tax to withdrawal, and Roth-style accounts require paying tax upfront on the contribution. Neither eliminates tax on the underlying income — both just remove tax from the investment growth in between.",
      },
      {
        claim: "401(k), IRA, and similar accounts work the same way in every country.",
        reality:
          "The specific account names, contribution limits, and withdrawal rules vary significantly by country. What's portable is the underlying Traditional-style / Roth-style structure — pay tax now or pay tax later — not any particular country's exact rules.",
      },
    ],
    relatedConcepts: [
      { label: "Compound Interest", href: "/finance/compound-interest" },
      {
        label: "Marginal vs. Effective Tax Rate",
        href: "/taxation/marginal-vs-effective-tax-rate",
      },
      { label: "Taxable Income", href: "/taxation/taxable-income" },
      { label: "Incentives", href: "/foundations/incentives" },
    ],
    relatedCalculator: {
      label: "Traditional vs. Roth Calculator",
      href: "/calculators/retirement-and-tax-advantaged-accounts",
    },
  },

  "business-and-startup-taxation": {
    pillar: "taxation",
    slug: "business-and-startup-taxation",
    title: "Business & Startup Taxation",
    summary:
      "The legal form a business takes — sole proprietorship, partnership, or corporation — determines whether its profit is taxed once, or twice, before an owner ever sees it.",
    definition: (
      <div className="space-y-3">
        <p>
          A <strong>pass-through entity</strong> (a sole proprietorship, a
          partnership, or most LLCs) isn&apos;t treated as its own separate
          taxpayer. Its profit &quot;passes through&quot; directly to the
          owners&apos; personal tax returns and is taxed once, at each
          owner&apos;s individual tax rate — whether or not the profit was
          actually paid out to them in cash.
        </p>
        <p>
          A <strong>C-corporation</strong> is treated as its own separate
          legal taxpayer, distinct from its owners (shareholders). The
          corporation pays corporate income tax on its own profit. If it
          then pays out some of that already-taxed profit to shareholders
          as a <strong>dividend</strong>, each shareholder pays personal
          income tax on that dividend too — so the same dollar of profit
          gets taxed twice: once at the corporate level, once at the
          shareholder level. This is called <strong>double
          taxation</strong>.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          When a business earns profit, a tax system has to decide who
          counts as the taxpayer: the business itself, treated as its own
          legal &quot;person,&quot; or only the individual owners. This
          isn&apos;t a minor bookkeeping detail — it&apos;s a fundamental
          design choice with real financial consequences, because it
          determines how many times the same dollar of profit gets taxed
          before an owner can actually spend it.
        </p>
        <p>
          Pass-through treatment exists because, for a small business with
          one owner or a handful of partners, there&apos;s no meaningful
          difference between &quot;the business&quot; and &quot;the
          person(s) who own it&quot; — treating the business as a separate
          taxpayer on top of the owner would tax the exact same profit
          twice for no real reason. Corporate treatment exists because a
          large company with thousands of shareholders, ongoing outside
          investment, and shares that trade hands constantly genuinely
          needs to be treated as its own persistent legal entity, separate
          from whoever happens to own its stock at a given moment — and tax
          law follows that same separation.
        </p>
        <p>
          Double taxation isn&apos;t an oversight — it&apos;s the direct
          consequence of treating the corporation as its own taxpayer. It
          also explains something from{" "}
          <Link
            href="/finance/cost-of-capital"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Cost of Capital
          </Link>
          : why interest paid to lenders is tax-deductible for a
          corporation, but dividends paid to shareholders aren&apos;t.
          Interest is deducted before the corporation&apos;s taxable profit
          is even calculated, and the lender then pays personal income tax
          on that interest — so that dollar is only taxed once in total.
          Dividends come out of profit that&apos;s already been taxed at
          the corporate level, and then get taxed again at the
          shareholder&apos;s level — a genuine second layer of tax that
          interest never goes through. That difference in tax treatment is
          a real, structural reason debt is cheaper than equity, not just
          an incidental rule.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Pass-through:              After-tax = Profit × (1 − Personal rate)

C-corp, profit retained:   After-tax (so far) = Profit × (1 − Corporate rate)

C-corp, profit distributed: After-tax = Profit × (1 − Corporate rate) × (1 − Dividend rate)`}
        </pre>
        <p>
          &quot;Retained&quot; means the corporation keeps the profit
          instead of paying it out as a dividend — the second layer of tax
          is deferred, not eliminated, until the profit is eventually
          distributed or the shareholder sells stock whose value reflects
          that retained profit (taxed then as{" "}
          <Link
            href="/taxation/capital-gains-tax"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            capital gains
          </Link>
          ). That deferral has real value — per{" "}
          <Link
            href="/taxation/retirement-and-tax-advantaged-accounts"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Retirement &amp; Tax-Advantaged Accounts
          </Link>
          , delaying a tax bill lets the full pre-tax amount keep
          compounding in the meantime, the same underlying benefit as a
          Traditional-style retirement account.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A business earns <strong>$100,000</strong> of profit. Its owner
          is in a <strong>32%</strong> personal tax bracket. The corporate
          tax rate is <strong>21%</strong>, and the dividend tax rate is{" "}
          <strong>15%</strong>.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Pass-through:
  $100,000 × (1 − 32%) = $68,000 after tax  (effective rate: 32%)

C-corp, profit retained (not yet distributed):
  $100,000 × (1 − 21%) = $79,000 after tax so far  (effective rate: 21% — second layer deferred)

C-corp, profit fully distributed as a dividend:
  $100,000 × (1 − 21%) × (1 − 15%) = $67,150 after tax  (combined effective rate: 32.85%)`}
        </pre>
        <p>
          Notice how close the pass-through and fully-distributed C-corp
          outcomes end up here — $68,000 versus $67,150 — because
          today&apos;s corporate and dividend rates are both relatively
          low. Double taxation isn&apos;t automatically a disaster; how
          much it costs depends entirely on the specific rates involved,
          and it can be deferred substantially by retaining profit instead
          of distributing it right away.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "A C-corporation always pays more total tax than a pass-through business.",
        reality:
          "As the worked example shows, the gap depends entirely on the specific personal, corporate, and dividend tax rates involved, and retaining profit instead of distributing it defers the second layer of tax — sometimes for years, sometimes indefinitely.",
      },
      {
        claim: "Self-employed people don't pay payroll tax since they don't have an employer.",
        reality:
          "Per Payroll Taxes, a self-employed person owes 'self-employment tax' — both the employee's and the employer's share combined — because there's no separate employer to split the cost with. It doesn't disappear; it lands entirely on the individual.",
      },
      {
        claim: "Choosing a business structure is purely a tax-minimization decision.",
        reality:
          "Liability protection, the ability to raise outside investment, and the number and type of allowed owners often matter just as much as the tax outcome — venture-backed startups are almost always structured as C-corporations regardless of the tax trade-off, because investors typically require it.",
      },
    ],
    relatedConcepts: [
      { label: "Cost of Capital (WACC)", href: "/finance/cost-of-capital" },
      { label: "Payroll Taxes", href: "/taxation/payroll-taxes" },
      { label: "Capital Gains Tax", href: "/taxation/capital-gains-tax" },
      {
        label: "Retirement & Tax-Advantaged Accounts",
        href: "/taxation/retirement-and-tax-advantaged-accounts",
      },
    ],
    relatedCalculator: {
      label: "Business Structure Tax Calculator",
      href: "/calculators/business-and-startup-taxation",
    },
  },

  "direct-vs-indirect-tax": {
    pillar: "taxation",
    slug: "direct-vs-indirect-tax",
    title: "Direct vs. Indirect Tax",
    summary:
      "A direct tax is levied on a specific person or company's own income or gains, paid straight to the government. An indirect tax is built into the price of something you buy — you experience it as a price, not a bill.",
    definition: (
      <div className="space-y-3">
        <p>
          A <strong>direct tax</strong> is levied on a specific
          person&apos;s or company&apos;s own income, profit, or gains,
          and paid directly to the government by that same person or
          company —{" "}
          <Link
            href="/taxation/progressive-taxation"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            income tax
          </Link>{" "}
          and{" "}
          <Link
            href="/taxation/capital-gains-tax"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            capital gains tax
          </Link>{" "}
          are both direct taxes.
        </p>
        <p>
          An <strong>indirect tax</strong> is built into the price of
          something you buy. The seller collects it at the point of sale
          and passes it along to the government — so you experience it as
          part of a price, not as a separate bill addressed to you
          personally.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Governments need revenue from more than one source, and
          different <strong>tax bases</strong> — what, exactly, gets taxed
          — behave very differently and reach different people. Direct
          taxes are tied to a specific taxpayer&apos;s own income or
          gains, which makes it straightforward to build in{" "}
          <Link
            href="/taxation/progressive-taxation"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            progressivity
          </Link>{" "}
          — charging higher earners a higher rate — since the tax is
          calculated directly against that person&apos;s own financial
          situation.
        </p>
        <p>
          Indirect taxes are tied to transactions and consumption
          instead. They&apos;re collected incidentally, through ordinary
          commerce, which means they reach virtually everyone who buys
          anything — including people whose income would otherwise be
          hard for a government to tax directly, like informal or
          under-the-table earners, or visiting tourists who earn nothing
          in the country at all but still spend money there. This makes
          indirect tax a genuinely different, complementary revenue base
          rather than just another way to collect the same money.
        </p>
        <p>
          One subtlety worth flagging early: who&apos;s legally
          responsible for handing a tax to the government isn&apos;t
          always the same as who actually ends up bearing its cost
          economically. Indirect taxes make this especially visible — a
          business remits the tax, but typically passes its cost on to
          the buyer through the price. As{" "}
          <Link
            href="/taxation/customs-duties-and-tariffs"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Customs Duties &amp; Tariffs
          </Link>{" "}
          will show, this distinction between who pays and who bears the
          cost matters even more once prices start shifting in response to
          the tax.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Someone earns a paycheck and separately buys a $20 shirt in a
          jurisdiction with a 10% indirect consumption tax.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Direct tax: a slice of income tax is withheld from the paycheck itself,
             calculated against this specific person's earnings.

Indirect tax: the $20 shirt costs $22 at checkout — the extra $2 is
               collected by the store and passed to the government,
               charged the same way regardless of whether the $20 came
               from a paycheck, a gift, or savings.`}
        </pre>
        <p>
          The direct tax is calculated against this specific person&apos;s
          income. The indirect tax doesn&apos;t care where the $20 came
          from at all — it&apos;s triggered purely by the purchase.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Indirect taxes are less significant than direct taxes.",
        reality:
          "In many countries, indirect taxes like VAT/GST fund an enormous share of total government revenue — sometimes more than income tax. 'Indirect' describes the mechanism, not the scale.",
      },
      {
        claim: "Only businesses actually pay indirect taxes.",
        reality:
          "Businesses remit indirect taxes to the government, but the cost is typically passed through to the end consumer in the price. The business is usually a collection intermediary, not the one ultimately bearing the cost.",
      },
      {
        claim: "Whether a tax is direct or indirect depends on its rate or how complicated it is to calculate.",
        reality:
          "It depends on who the tax is levied on and who collects it — a specific person's own income versus a transaction — not on the tax's size, structure, or complexity.",
      },
    ],
    relatedConcepts: [
      { label: "Progressive Taxation", href: "/taxation/progressive-taxation" },
      {
        label: "Marginal vs. Effective Tax Rate",
        href: "/taxation/marginal-vs-effective-tax-rate",
      },
      { label: "Capital Gains Tax", href: "/taxation/capital-gains-tax" },
      { label: "Payroll Taxes", href: "/taxation/payroll-taxes" },
      {
        label: "Tax Deductions vs. Tax Credits",
        href: "/taxation/deductions-vs-credits",
      },
      { label: "Taxable Income", href: "/taxation/taxable-income" },
      { label: "VAT / GST", href: "/taxation/vat-gst" },
    ],
  },

  "vat-gst": {
    pillar: "taxation",
    slug: "vat-gst",
    title: "VAT / GST — Value Added Tax / Goods and Services Tax",
    summary:
      "An indirect tax collected at every stage of production, where each business is credited for tax it already paid — so the same total tax gets collected in pieces instead of all at once, and evasion at one stage doesn't erase what was already collected earlier.",
    definition: (
      <p>
        <strong>VAT</strong> (Value Added Tax) — called <strong>GST</strong>{" "}
        (Goods and Services Tax) in some countries — is an{" "}
        <Link
          href="/taxation/direct-vs-indirect-tax"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          indirect
        </Link>
        , consumption-based tax collected at each stage of a product&apos;s
        production and distribution chain. Each business charges tax on
        what it sells, but gets credit for the tax it already paid on what
        it bought — so tax ultimately applies only to the{" "}
        <strong>value each business actually added</strong>, not to the
        full price over and over again.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Taxing income isn&apos;t the only way to raise government
          revenue — taxing <strong>consumption</strong>, what people
          actually spend, is a genuinely different base that reaches
          spending regardless of where the money came from (a paycheck,
          savings, a gift). VAT/GST is built on that consumption base, but
          it makes one specific design choice worth understanding: instead
          of taxing only the final retail sale once, it collects a little
          tax at <em>every</em> stage along the way.
        </p>
        <p>
          That design has a real advantage over collecting everything at
          one final point (see{" "}
          <Link
            href="/taxation/sales-tax"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Sales Tax
          </Link>
          ): each business in the chain has its own incentive to document
          its purchases accurately, since doing so is how it claims credit
          for tax it already paid. That creates a self-reinforcing paper
          trail across the whole supply chain — evasion at any single
          stage doesn&apos;t erase the tax that was already correctly
          collected at earlier stages, unlike a system where all the tax
          rides on one single, final transaction.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>
          Each business remits the tax it charged on sales (
          <strong>output tax</strong>), minus the tax it already paid on
          its own purchases (<strong>input tax</strong>), keeping the
          credit system self-correcting stage by stage:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
          Tax remitted by a business = Output tax (on sales) − Input tax (already paid on purchases)
        </pre>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A wooden table moves through three stages, with a{" "}
          <strong>10%</strong> VAT rate at each one:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Stage 1 — Supplier sells wood to a manufacturer for $100 (+ $10 VAT = $110 total)
  Supplier remits: $10 output tax − $0 input tax = $10

Stage 2 — Manufacturer sells the finished table to a retailer for $300 (+ $30 VAT = $330 total)
  Manufacturer remits: $30 output tax − $10 input tax (paid to supplier) = $20

Stage 3 — Retailer sells the table to a customer for $500 (+ $50 VAT = $550 total)
  Retailer remits: $50 output tax − $30 input tax (paid to manufacturer) = $20

Total government revenue: $10 + $20 + $20 = $50`}
        </pre>
        <p>
          $50 is exactly 10% of the final $500 sale price — the same
          total a single tax on the final sale would raise, just
          collected in three pieces along the way, each proportional to
          the value that stage actually added ($100 of value at stage 1,
          then $200 more at each of the next two stages).
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "VAT means the government collects more total tax than a single sales tax at the same rate, since it's charged at every stage.",
        reality:
          "As the worked example shows, once every business's input tax credit is netted out, the total collected across the whole chain equals the same rate applied once to the final price — VAT isn't extra tax stacked on top at each stage.",
      },
      {
        claim: "Businesses pay VAT out of their own profit at every stage.",
        reality:
          "Each business generally passes its VAT along in the price it charges and gets credited for VAT it already paid — in principle, a business's own profit isn't directly reduced by VAT. It's ultimately the end consumer, who has no one further to pass the cost to, who bears it.",
      },
      {
        claim: "VAT and sales tax are basically the same thing with a different name.",
        reality:
          "They're mechanically distinct. VAT collects and credits tax at every stage of the supply chain; sales tax collects once, only at the final retail sale — see Sales Tax for a side-by-side comparison using the same example.",
      },
    ],
    relatedConcepts: [
      { label: "Direct vs. Indirect Tax", href: "/taxation/direct-vs-indirect-tax" },
      { label: "Sales Tax", href: "/taxation/sales-tax" },
      {
        label: "Customs Duties & Tariffs",
        href: "/taxation/customs-duties-and-tariffs",
      },
    ],
    relatedCalculator: {
      label: "VAT / GST Calculator",
      href: "/calculators/vat-gst",
    },
  },

  "sales-tax": {
    pillar: "taxation",
    slug: "sales-tax",
    title: "Sales Tax",
    summary:
      "A single-stage indirect tax charged once, at the final sale to the end consumer — no tax and no credits at the earlier wholesale stages, unlike VAT/GST's multi-stage system.",
    definition: (
      <p>
        <strong>Sales tax</strong> is a single-stage{" "}
        <Link
          href="/taxation/direct-vs-indirect-tax"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          indirect tax
        </Link>{" "}
        charged once, at the point of final sale to the end consumer.
        Unlike{" "}
        <Link
          href="/taxation/vat-gst"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          VAT/GST
        </Link>
        , no tax is charged or credited at earlier stages of production —
        only the last retail transaction is taxed at all.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          VAT/GST&apos;s multi-stage credit-and-collect system has real
          advantages, but it also asks every business in a supply chain —
          raw material suppliers, manufacturers, wholesalers, retailers —
          to track input and output tax and file accordingly. Sales tax
          trades away VAT/GST&apos;s anti-evasion paper trail for
          dramatically simpler administration: only the final retailer has
          to collect and remit anything at all. Every business earlier in
          the chain is left out of tax collection entirely, since only the
          final sale to an end consumer counts as a taxable event.
        </p>
        <p>
          That simplicity is exactly why some jurisdictions — notably US
          states, most of which levy sales tax rather than a VAT — prefer
          this approach: far fewer businesses ever have to deal with tax
          collection machinery in the first place.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Using the exact same wooden table and the same{" "}
          <strong>10%</strong> rate as{" "}
          <Link
            href="/taxation/vat-gst"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            VAT/GST&apos;s worked example
          </Link>
          , to see the mechanical difference directly:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Supplier sells wood to manufacturer for $100 — no tax (not a final sale)
Manufacturer sells table to retailer for $300 — no tax (not a final sale)
Retailer sells table to customer for $500 + $50 sales tax (10%) = $550 total

Total government revenue: $50, collected entirely at the final step,
by a single business, in a single transaction.`}
        </pre>
        <p>
          Same $50 total as the VAT/GST example — but collected through
          one remittance by one business, instead of three separate
          remittances of $10, $20, and $20 across three different
          businesses. The math is the same as VAT/GST at this single
          stage — try it below.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Sales tax and VAT always raise the same total revenue, so it doesn't matter which system a country uses.",
        reality:
          "Totals can match in a simple example, but sales tax is more vulnerable to evasion at that single final point — if the retailer under-reports or operates informally, all the tax on that item is lost. VAT/GST preserves the tax already collected at earlier stages even if a later stage evades.",
      },
      {
        claim: "Sales tax applies to every transaction along the supply chain.",
        reality:
          "It applies only at the final sale to the end consumer. Wholesale and business-to-business transactions earlier in the chain are generally exempt — that's exactly why it's called 'single-stage.'",
      },
      {
        claim: "A retailer keeps the sales tax it collects as extra revenue.",
        reality:
          "The retailer collects it on the government's behalf and remits it — it isn't the retailer's own money, similar to how an employer withholding payroll tax from a paycheck isn't keeping that money either.",
      },
    ],
    relatedConcepts: [
      { label: "VAT / GST", href: "/taxation/vat-gst" },
      { label: "Direct vs. Indirect Tax", href: "/taxation/direct-vs-indirect-tax" },
      { label: "Payroll Taxes", href: "/taxation/payroll-taxes" },
    ],
    relatedCalculator: {
      label: "VAT / GST Calculator",
      href: "/calculators/vat-gst",
    },
  },

  "customs-duties-and-tariffs": {
    pillar: "taxation",
    slug: "customs-duties-and-tariffs",
    title: "Customs Duties & Tariffs",
    summary:
      "A tax on goods crossing a border, paid by the importer — historically a simple, easy-to-enforce revenue source, now used more often to shift prices in favor of domestic industry or as a trade and political tool.",
    definition: (
      <p>
        A <strong>customs duty</strong> (or <strong>tariff</strong>) is a
        tax charged on goods as they cross an international border,
        typically paid by the <strong>importer</strong> at the point of
        entry, calculated as a percentage of the good&apos;s declared
        value.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Historically, taxing goods at a border was one of the easiest
          points for a government to actually collect revenue — a literal
          chokepoint everything has to physically pass through, simple to
          inspect and enforce, long before income tax or VAT
          infrastructure existed. Revenue was the original, primary
          purpose.
        </p>
        <p>
          Modern tariffs are more often used for a different reason:
          deliberately shifting the relative price of imported goods
          versus domestic ones. Per{" "}
          <Link
            href="/foundations/supply-and-demand"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Supply &amp; Demand
          </Link>
          , raising a good&apos;s price reduces the quantity people buy
          of it — so a tariff on imported steel makes imported steel more
          expensive, shifting some buyers toward domestically produced
          steel instead (the protective effect a government is often
          deliberately aiming for) and reducing the overall quantity of
          the imported good purchased.
        </p>
        <p>
          A common misconception is worth correcting directly here: a
          tariff is <strong>not</strong> paid by the foreign country or
          exporter. It&apos;s paid by the domestic <strong>importer</strong>{" "}
          bringing the goods across the border. That importer then faces
          a choice: absorb the added cost itself, accepting a smaller
          profit margin, or pass some or all of it on to its own customers
          through a higher price. In practice it&apos;s usually a mix of
          both, split based on how willing buyers are to reduce their
          purchases in response to a higher price — the same underlying{" "}
          <Link
            href="/foundations/supply-and-demand"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Supply &amp; Demand
          </Link>{" "}
          logic that governs any price change.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A company imports <strong>$10,000</strong> worth of goods,
          facing a <strong>15%</strong> tariff and a flat{" "}
          <strong>$50</strong> customs handling fee.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Duty owed: $10,000 × 15% = $1,500
Total landed cost: $10,000 + $1,500 + $50 = $11,550`}
        </pre>
        <p>
          If the importer passes the full tariff through, prices to its
          own customers rise by roughly 15%. If those customers are
          price-sensitive and would buy substantially less at a higher
          price, the importer might instead absorb part of the $1,500
          itself — accepting a smaller margin rather than losing sales to
          substitutes — rather than passing all of it through.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Tariffs are paid by the foreign country or the exporting company.",
        reality:
          "Tariffs are paid by the domestic importer bringing goods across the border, not by the foreign government or exporter. This is one of the most common misunderstandings about how tariffs actually work.",
      },
      {
        claim: "The full cost of a tariff always gets passed on to consumers in higher prices.",
        reality:
          "It's typically split between the importer (absorbing some of the cost through reduced margins) and the consumer (paying some of it through higher prices), depending on how sensitive demand for the good is to price changes.",
      },
      {
        claim: "Tariffs exist only to raise government revenue, like most other taxes.",
        reality:
          "Historically revenue was the primary purpose, but modern tariffs are more often used to protect domestic industries from foreign competition or as leverage in trade negotiations and political disputes, with revenue as a secondary effect.",
      },
    ],
    relatedConcepts: [
      { label: "Supply & Demand", href: "/foundations/supply-and-demand" },
      { label: "Direct vs. Indirect Tax", href: "/taxation/direct-vs-indirect-tax" },
      { label: "Excise Duties", href: "/taxation/excise-duties" },
    ],
    relatedCalculator: {
      label: "Customs Duty Calculator",
      href: "/calculators/customs-duties-and-tariffs",
    },
  },

  "excise-duties": {
    pillar: "taxation",
    slug: "excise-duties",
    title: "Excise Duties",
    summary:
      "A tax on specific goods — commonly fuel, tobacco, or alcohol — layered on top of general consumption tax, often deliberately sized to discourage the behavior, not just to raise revenue.",
    definition: (
      <p>
        An <strong>excise duty</strong> is a tax on a specific good — most
        commonly fuel, tobacco, or alcohol — rather than a general tax on
        consumption broadly, the way{" "}
        <Link
          href="/taxation/vat-gst"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          VAT/GST
        </Link>{" "}
        or{" "}
        <Link
          href="/taxation/sales-tax"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          sales tax
        </Link>{" "}
        apply to nearly everything. It&apos;s layered on top of whatever
        general consumption tax already applies, not a replacement for it.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Some goods impose real costs on people who aren&apos;t part of
          the original purchase at all: smoking creates healthcare costs
          that extend well beyond the smoker&apos;s own medical bills,
          burning fuel contributes to pollution costs borne broadly, and
          heavy alcohol consumption creates costs — healthcare, accidents
          — beyond the drinker alone. Economists call a cost like this,
          one that spills onto people outside the original transaction, a{" "}
          <strong>Pigouvian cost</strong> (named after the economist
          Arthur Pigou). A <strong>Pigouvian tax</strong> — which is what
          most excise duties actually are — is deliberately sized to make
          a good&apos;s price reflect more of its true, full cost to
          society, not just the cost to the immediate buyer and seller.
        </p>
        <p>
          This is a meaningfully different goal from most taxes. Per{" "}
          <Link
            href="/foundations/incentives"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Incentives
          </Link>
          , people respond to the incentives placed in front of them —
          taxing a specific behavior more heavily makes that behavior
          comparatively more costly, nudging at least some people toward
          using less of it. Excise duties are designed with that
          behavioral effect as a deliberate part of the policy, alongside
          the very real revenue they also raise — unlike VAT/GST or income
          tax, which aren&apos;t trying to change anyone&apos;s behavior,
          just raise revenue broadly.
        </p>
        <p>
          Excise duties on goods viewed as vices are sometimes informally
          called a &quot;<strong>sin tax</strong>&quot; — a colloquial
          nickname, not a formal legal term.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A government adds a <strong>$2-per-pack</strong> excise duty on
          cigarettes, on top of whatever general sales tax or VAT already
          applies to the purchase.
        </p>
        <p>
          This raises the price of a pack meaningfully above what
          production and distribution costs alone would justify. Some
          smokers — especially the most price-sensitive, like younger
          people or lower-income buyers — reduce how much they smoke or
          quit entirely; that deterrent effect is a deliberate part of the
          policy&apos;s design, not an accidental side effect. The revenue
          collected is also often earmarked toward healthcare costs
          connected to smoking, directly tying the tax back to the social
          cost that justified it in the first place.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Excise duties are just VAT/GST or sales tax under a different name.",
        reality:
          "They're layered on top of general consumption tax, applying to a small set of specific goods — not a replacement for the general consumption tax, which typically still applies as well.",
      },
      {
        claim: "Excise duties exist purely to raise revenue, the same as any other tax.",
        reality:
          "They do raise real revenue, but a defining feature is that they're deliberately sized to discourage the specific behavior or consumption, not just to collect money efficiently — the behavioral effect is often as much the point as the revenue.",
      },
      {
        claim: "'Sin tax' is the formal legal term for these taxes.",
        reality:
          "It's an informal, colloquial nickname for excise duties on goods viewed as vices. The actual legal and technical term across jurisdictions is 'excise duty' or 'excise tax.'",
      },
    ],
    relatedConcepts: [
      {
        label: "Customs Duties & Tariffs",
        href: "/taxation/customs-duties-and-tariffs",
      },
      { label: "Incentives", href: "/foundations/incentives" },
      { label: "Direct vs. Indirect Tax", href: "/taxation/direct-vs-indirect-tax" },
    ],
  },
};
