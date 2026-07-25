import Link from "next/link";
import type { ConceptPageProps } from "@/lib/types";

export const financeConcepts: Record<string, ConceptPageProps> = {
  "compound-interest": {
    pillar: "finance",
    slug: "compound-interest",
    title: "Compound Interest",
    summary:
      "Interest that earns interest on itself — the mechanism that turns steady saving into exponential growth.",
    definition: (
      <p>
        Compound interest is interest calculated on both the original amount
        you invested (the <strong>principal</strong>) and on any interest that
        amount has already earned. Each time interest is added to the
        balance, the next round of interest is calculated on the new, larger
        balance — not just the original principal.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Interest exists because lending money isn&apos;t free for the
          lender. If you lend a friend $20 for a month, you can&apos;t spend
          that $20 yourself while it&apos;s out on loan — and there&apos;s
          some chance they never pay you back at all. Interest is how a
          lender gets compensated for both of those things: giving up the
          use of their money for a while, and taking on the risk it
          might not come back. The same idea scales up from a friend lending
          $20 to a bank lending someone money for a car or a house — whoever
          lends money is owed something extra in return, and that something
          extra is interest. See{" "}
          <Link
            href="/foundations/what-is-an-interest-rate"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            What an Interest Rate Fundamentally Is
          </Link>{" "}
          for more on how that compensation gets priced.
        </p>
        <p>
          Putting money in a savings account, or investing it, is really
          just lending your money out — to a bank, or to a company — and
          collecting interest in return. That&apos;s also why a dollar
          today is worth more than a dollar a year from now: a dollar in
          hand right now can start earning that &ldquo;something extra&rdquo;
          immediately, while a dollar arriving later can&apos;t. See{" "}
          <Link
            href="/finance/time-value-of-money"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Time Value of Money
          </Link>{" "}
          for more on that idea. Compound interest is what happens when the
          interest you&apos;ve already earned gets added to the amount
          you&apos;re lending out, so it starts earning its own interest
          too.
        </p>
        <p>
          If you only earned interest on your original principal (
          <em>simple interest</em>), your balance would grow by the same
          fixed amount every period — a straight line. But once earned
          interest is left in the account, it starts earning its own
          interest. Each period&apos;s gain builds on a larger base than the
          last, so growth curves upward instead of running flat. This is why
          long time horizons matter more than most people intuitively expect:
          the effect is small early on and large later, because each
          period&apos;s growth multiplies the balance (scales it up by a
          percentage) rather than just adding the same fixed amount on top
          each time.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>The balance after compounding is given by:</p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
          A = P × (1 + r/n)^(n×t)
        </pre>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <code>P</code> — principal, the starting balance
          </li>
          <li>
            <code>r</code> — the annual <em>nominal</em> interest rate (the
            rate you were quoted or advertised, before taking into account
            how often it compounds), as a decimal
          </li>
          <li>
            <code>n</code> — number of times interest compounds per year
            (1 = annual, 12 = monthly, 365 = daily)
          </li>
          <li>
            <code>t</code> — number of years the money is invested
          </li>
          <li>
            <code>A</code> — the resulting balance after t years
          </li>
        </ul>
        <p>
          Total interest earned is simply <code>A − P</code>. As{" "}
          <code>n</code> increases, the <em>effective</em> annual rate
          (the actual percentage growth over one year) rises slightly above
          the nominal rate <code>r</code>, because interest gets folded back
          into the balance more often — the quoted rate stays the same, but
          you actually earn a bit more than that number suggests.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Suppose you invest <strong>$10,000</strong> at a{" "}
          <strong>7% annual rate</strong>, compounded <strong>monthly</strong>
          , for <strong>20 years</strong>.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`n = 12, r = 0.07, t = 20
A = 10,000 × (1 + 0.07/12)^(12×20)
A = 10,000 × (1.005833...)^240
A ≈ $40,387`}
        </pre>
        <p>
          Of that ${(40387).toLocaleString()} balance, about{" "}
          <strong>$30,387</strong> is interest — over triple the original
          principal — even though the nominal rate never changed. Try the{" "}
          <Link
            href="/calculators/compound-interest"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            compound interest calculator
          </Link>{" "}
          to see how changing the frequency or time horizon shifts the
          result.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Compounding monthly instead of annually makes a huge difference.",
        reality:
          "It helps, but the gap between annual and monthly compounding at the same nominal rate is usually a fraction of a percentage point in effective rate — small compared to the effect of a higher rate or a longer time horizon.",
      },
      {
        claim: "Compound interest only matters for investing, not debt.",
        reality:
          "The same math applies to credit cards, loans, and mortgages — compounding works against you exactly the way it works for you as a saver, which is why an unpaid credit card balance at a high interest rate can grow so quickly.",
      },
      {
        claim: "Doubling your rate doubles your final balance.",
        reality:
          "Because growth is exponential, doubling the rate more than doubles the final balance over long horizons — and small rate differences compound into large gaps given enough time.",
      },
    ],
    relatedConcepts: [
      { label: "Time Value of Money", href: "/finance/time-value-of-money" },
      { label: "Present Value", href: "/finance/present-value" },
      {
        label: "What an Interest Rate Fundamentally Is",
        href: "/foundations/what-is-an-interest-rate",
      },
    ],
    relatedCalculator: {
      label: "Compound Interest Calculator",
      href: "/calculators/compound-interest",
    },
  },

  "time-value-of-money": {
    pillar: "finance",
    slug: "time-value-of-money",
    title: "Time Value of Money",
    summary:
      "A dollar today is worth more than a dollar tomorrow — the foundational idea behind compounding, discounting, and comparing cash flows across time.",
    definition: (
      <p>
        Time value of money is the principle that a sum of money available
        today is worth more than the same sum received at some point in the
        future, because money in hand now can be invested and put to work.
        It&apos;s the foundational idea behind nearly every other concept in
        finance — compounding, discounting, and comparing cash flows that
        arrive at different points in time all rest on it.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Money rarely arrives at the same moment you need to compare it. A
          job offer might pay a bonus today or a larger bonus in two years;
          a business might choose between a smaller payoff now and a bigger
          payoff later. You can&apos;t compare these fairly just by looking
          at the dollar amounts, because holding a dollar today comes with
          something a future dollar doesn&apos;t: the chance to put it to
          work right away. If you had that dollar now, you could save it,
          invest it, or spend it to avoid borrowing at interest later —
          earning or saving something in return. Economists call the value
          of the best thing you give up by waiting the{" "}
          <Link
            href="/foundations/scarcity-and-opportunity-cost"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            opportunity cost
          </Link>{" "}
          of waiting, and it&apos;s the reason today&apos;s dollar and a
          same-sized future dollar aren&apos;t actually worth the same
          amount.
        </p>
        <p>
          Time value of money supplies the missing piece: a way to translate
          amounts that arrive at different times onto a common basis, using
          an assumed rate of return (the <em>discount rate</em>). Moving
          money forward in time is{" "}
          <Link
            href="/finance/compound-interest"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            compounding
          </Link>
          ; moving money backward in time is{" "}
          <Link
            href="/finance/present-value"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            discounting
          </Link>
          . Nearly every situation in finance where money changes hands at
          different times — a savings account, a loan, a business deciding
          whether a big purchase is worth it — is really just this same
          principle applied to a specific set of amounts and dates.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>
          Time value of money is expressed in two directions, depending on
          which way you&apos;re moving in time:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`FV = PV × (1 + r/n)^(n×t)   — moving forward (compounding)
PV = FV / (1 + r/n)^(n×t)   — moving backward (discounting)`}
        </pre>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <code>PV</code> — present value, the amount in today&apos;s
            dollars
          </li>
          <li>
            <code>FV</code> — future value, the amount at some future date
          </li>
          <li>
            <code>r</code> — the discount/interest rate, as a decimal, per
            year
          </li>
          <li>
            <code>n</code> — number of compounding periods per year
          </li>
          <li>
            <code>t</code> — number of years between the two points in time
          </li>
        </ul>
        <p>
          Both formulas describe the same relationship — they&apos;re just
          solved for different variables. Which one you use depends on
          whether you know the earlier amount and want to project it
          forward, or know the later amount and want to translate it back to
          today.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Suppose you&apos;re offered a choice: <strong>$1,000 today</strong>
          , or <strong>$1,050 in one year</strong>. Which is better depends
          entirely on what rate you could otherwise earn on money between
          now and then.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`At 8% opportunity cost:
PV of $1,050 in 1 year = 1,050 / 1.08 ≈ $972.22 → take the $1,000 today

At 3% opportunity cost:
PV of $1,050 in 1 year = 1,050 / 1.03 ≈ $1,019.42 → take the $1,050 later`}
        </pre>
        <p>
          The $1,050 figure never changes — only the discount rate does.
          This is why time-value-of-money problems always require an
          assumed rate; without one, &ldquo;$1,000 today vs. $1,050 in a
          year&rdquo; has no right answer. Try the{" "}
          <Link
            href="/calculators/present-value"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            present value calculator
          </Link>{" "}
          to see how the crossover rate shifts with different amounts and
          time horizons.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Time value of money is just another way of saying inflation erodes your money.",
        reality:
          "Inflation is a related but separate factor. Time value of money exists even in a world with zero inflation, purely because money in hand today can be invested to earn a real return that money arriving later cannot capture.",
      },
      {
        claim: "A higher future amount is always the better choice.",
        reality:
          "Whether a larger, later amount beats a smaller, sooner one depends entirely on the discount rate you could otherwise earn. The two amounts have to be moved onto the same point in time before they can be compared fairly.",
      },
      {
        claim: "Time value of money only matters for big investment decisions.",
        reality:
          "It applies to any situation involving a delayed payment — choosing between a lump-sum payout and installments, negotiating payment terms, or deciding whether to pay a bill early to capture a discount.",
      },
    ],
    relatedConcepts: [
      { label: "Compound Interest", href: "/finance/compound-interest" },
      { label: "Present Value", href: "/finance/present-value" },
      {
        label: "Scarcity & Opportunity Cost",
        href: "/foundations/scarcity-and-opportunity-cost",
      },
    ],
  },

  "present-value": {
    pillar: "finance",
    slug: "present-value",
    title: "Present Value",
    summary:
      "The current worth of a future sum of money, discounted back at a given rate — how much you'd need today to end up with a specific amount later.",
    definition: (
      <p>
        Present value is the current worth of a sum of money that will be
        received (or paid) at some point in the future, discounted back at a
        given rate of return. It answers a simple question: how much would
        you need to set aside today, at a given rate, to end up with a
        specific amount later?
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Because of the{" "}
          <Link
            href="/finance/time-value-of-money"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            time value of money
          </Link>
          , a dollar promised in the future is worth less than a dollar in
          hand today — the size of that gap depends on how long you have to
          wait and what rate you could otherwise earn. Present value makes
          that gap concrete: it converts a future amount into
          today&apos;s-dollars terms so it can be compared, added, or
          subtracted alongside other amounts of money without adjusting for
          timing in your head.
        </p>
        <p>
          This is the calculation behind almost every situation where you
          need to know what future money is worth right now: deciding
          whether to take a smaller lump-sum payment today instead of a
          bigger payout spread over several years, or figuring out how much
          to invest now to cover a known future expense like a tuition bill
          or a down payment on a house.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>
          Present value is the compound interest formula solved for the
          starting amount instead of the ending amount:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
          PV = FV / (1 + r/n)^(n×t)
        </pre>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <code>FV</code> — future value, the known amount at a future date
          </li>
          <li>
            <code>r</code> — annual discount rate, as a decimal
          </li>
          <li>
            <code>n</code> — compounding periods per year
          </li>
          <li>
            <code>t</code> — years between now and the future date
          </li>
          <li>
            <code>PV</code> — present value, the equivalent amount today
          </li>
        </ul>
        <p>
          The gap between <code>FV</code> and <code>PV</code> — the{" "}
          <em>discount</em> — grows larger the higher the rate and the
          longer the time horizon, for the same reason compound interest
          grows a balance faster under those conditions.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Suppose you want to know how much to invest today, at a{" "}
          <strong>6% annual rate compounded annually</strong>, to have{" "}
          <strong>$50,000 in 15 years</strong> — say, for a future tuition
          payment.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`n = 1, r = 0.06, t = 15
PV = 50,000 / (1.06)^15
PV = 50,000 / 2.3966...
PV ≈ $20,863`}
        </pre>
        <p>
          You&apos;d need to set aside about <strong>$20,863</strong> today;
          the remaining <strong>$29,137</strong> of the eventual $50,000
          comes from compounding over the 15 years. Try the{" "}
          <Link
            href="/calculators/present-value"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            present value calculator
          </Link>{" "}
          to see how a higher rate or a shorter time horizon changes how
          much you&apos;d need today.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "A higher discount rate makes a future payment worth more today.",
        reality:
          "It's the opposite. A higher rate implies a higher opportunity cost for waiting, so the future amount gets discounted more heavily and its present value is lower.",
      },
      {
        claim: "Present value calculations are only useful for large financial decisions like bonds or company valuations.",
        reality:
          "The same math applies to any decision involving money at different points in time — choosing between a smaller payment now and a larger one later, comparing a signing bonus paid immediately to a bigger bonus paid out over future years, or figuring out how much to save today for a known future cost.",
      },
      {
        claim: "Present value tells you the 'right' amount to pay for something.",
        reality:
          "It tells you what a future cash flow is worth given the discount rate you choose to assume. Change the assumed rate and the present value changes just as much — the number is only as good as the rate behind it.",
      },
    ],
    relatedConcepts: [
      { label: "Time Value of Money", href: "/finance/time-value-of-money" },
      { label: "Compound Interest", href: "/finance/compound-interest" },
    ],
    relatedCalculator: {
      label: "Present Value Calculator",
      href: "/calculators/present-value",
    },
  },

  "risk-and-return": {
    pillar: "finance",
    slug: "risk-and-return",
    title: "Risk & Return",
    summary:
      "Investments that carry more uncertainty about their outcome have to offer a higher expected return, or no one would rationally accept the extra risk.",
    definition: (
      <div className="space-y-3">
        <p>
          <strong>Risk</strong>, in a financial sense, is the uncertainty
          about whether an investment&apos;s actual outcome will match what
          you expected — including the chance you could lose some or all of
          what you put in.
        </p>
        <p>
          <strong>Return</strong> is what you gain, or lose, from an
          investment, usually expressed as a percentage of what you
          originally put in.
        </p>
        <p>
          The <strong>risk-return relationship</strong> is the observation
          that riskier investments have to offer a higher expected return
          than safer ones, on average — otherwise no one would choose to
          take on the extra risk instead of a safer option.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          If a risky investment and a safe investment offered the exact same
          expected return, every rational investor would choose the safe
          one — there&apos;d be nothing to gain from taking on the extra
          uncertainty, and something to lose. For anyone to willingly accept
          added risk, the riskier option has to promise something extra in
          return. If it didn&apos;t, money would drain out of risky
          investments and into safe ones until, per{" "}
          <Link
            href="/foundations/supply-and-demand"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            supply and demand
          </Link>
          , the risky option was forced to offer a higher return to attract
          anyone back, or the safe option&apos;s return got bid down by
          everyone piling into it.
        </p>
        <p>
          This is the same idea behind{" "}
          <Link
            href="/foundations/what-is-an-interest-rate"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            What an Interest Rate Fundamentally Is
          </Link>
          : part of any rate of return is compensation for risk — a{" "}
          <em>risk premium</em> — layered on top of a baseline return for
          giving up the money&apos;s use and for expected inflation. A
          government bond from a stable country carries very low risk of
          not being repaid, so it can offer a low return and still attract
          lenders. A new small business borrowing money, or a young
          company&apos;s stock, carries a much higher risk of loss, so it
          has to promise a higher expected return to attract anyone willing
          to put money in.
        </p>
        <p>
          &quot;Expected&quot; is the key qualifier — risk and return
          describe averages and probabilities, not guarantees. A risky
          investment offers a higher expected return precisely because its
          actual outcome is uncertain: it might do far better than a safe
          investment, or it might do far worse, including losing money
          outright. If a &quot;risky&quot; investment could only ever turn
          out better than a safe one, it wouldn&apos;t actually be risky.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Compare a government bond paying a steady <strong>3%</strong> a
          year with very low default risk, against a small company&apos;s
          stock that has historically averaged <strong>10%</strong> a year
          but has had individual years where it lost 30% or more.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`$10,000 in the bond after 1 year:
  Reliably about $10,300 in almost every scenario.

$10,000 in the stock after 1 year:
  Could be $11,000 in a good year, or $7,000 in a bad year —
  the average across many years lands near 10%, but any single
  year varies widely.`}
        </pre>
        <p>
          This is why the bond suits money you can&apos;t afford to lose —
          a bill due next month — while the stock suits money that can
          withstand swings over a much longer time horizon, the same
          horizon that makes{" "}
          <Link
            href="/finance/compound-interest"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            compounding
          </Link>{" "}
          add up over time.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "A high expected return always means a good investment.",
        reality:
          "Return has to be judged against the risk taken to get it. A high return with a wide range of possible bad outcomes isn't automatically better than a lower, more reliable return, especially for money you can't afford to lose.",
      },
      {
        claim: "Low risk means no chance of loss.",
        reality:
          "\"Low risk\" is relative, not zero. Even government bonds carry some risk — inflation eroding their real value, or in rare cases, default. \"Low\" describes a smaller, narrower range of likely outcomes, not a guarantee.",
      },
      {
        claim: "Taking on more risk guarantees a higher return.",
        reality:
          "A higher expected return is what riskier investments have to offer, on average, to attract investors. It isn't a guarantee for any individual outcome — that unpredictability is exactly what makes it risky.",
      },
    ],
    relatedConcepts: [
      {
        label: "What an Interest Rate Fundamentally Is",
        href: "/foundations/what-is-an-interest-rate",
      },
      { label: "Supply & Demand", href: "/foundations/supply-and-demand" },
      { label: "Compound Interest", href: "/finance/compound-interest" },
      { label: "Cost of Capital (WACC)", href: "/finance/cost-of-capital" },
    ],
  },

  "real-vs-nominal-returns": {
    pillar: "finance",
    slug: "real-vs-nominal-returns",
    title: "Real vs. Nominal Returns",
    summary:
      "The percentage your money grew by (nominal) isn't the same as how much more it can actually buy (real) — inflation eats into the difference.",
    definition: (
      <div className="space-y-3">
        <p>
          <strong>Nominal return</strong> is the percentage an investment
          grew by in raw dollar terms, with no adjustment for anything else.
        </p>
        <p>
          <strong>Real return</strong> is the nominal return adjusted for
          inflation — what your money actually grew by in terms of
          purchasing power, not just in the number of dollars.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          A dollar today and a dollar a year from now aren&apos;t stable,
          unchanging units. Because of{" "}
          <Link
            href="/foundations/inflation"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            inflation
          </Link>
          , a dollar a year from now typically buys a little less than a
          dollar today does. That means a percentage return measured in raw
          dollars can overstate how much better off you actually are,
          because part of that percentage gain is just keeping pace with a
          shrinking measuring stick, not real growth in what you can buy.
        </p>
        <p>
          Real return strips that effect out, answering a more useful
          question: after accounting for inflation, how much more can this
          money actually buy than before? This matters because comparing
          nominal returns across different time periods, or different
          countries, can be misleading if inflation rates differ — a 10%
          nominal return during a year of 8% inflation represents far less
          real growth than a 10% nominal return during a year of 1%
          inflation, even though the nominal number is identical in both
          cases.
        </p>
        <p>
          This is also why it isn&apos;t enough for an investment to just
          beat 0% to grow real wealth — it has to outpace inflation, not
          merely stay positive, for its real return to be positive at all.
          Cash sitting in a low- or no-interest account can show a positive
          (or zero) nominal return while quietly losing real value every
          year inflation runs above that rate.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>
          A quick approximation, and the more precise version it&apos;s
          approximating:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`approximate: real return ≈ nominal return − inflation rate
precise:     real return = (1 + nominal return) / (1 + inflation rate) − 1`}
        </pre>
        <p>
          The subtraction is close enough for everyday purposes when rates
          are small — a few percent — but the gap between the two versions
          widens as the rates involved get larger.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Suppose an investment returns <strong>7%</strong> nominal in a
          year where inflation runs at <strong>3%</strong>.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Approximate real return ≈ 7% − 3% = 4%
Precise real return = (1.07 / 1.03) − 1 ≈ 3.88%`}
        </pre>
        <p>
          $10,000 invested grows to $10,700 in nominal dollars. But if a
          basket of goods that cost $10,000 at the start of the year now
          costs $10,300 (3% inflation), that $10,700 buys about 3.88% more
          of that same basket than the original $10,000 could — matching
          the precise real-return figure, not the rougher 4% approximation.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "A positive nominal return always means you're better off.",
        reality:
          "If inflation exceeds the nominal return, the real return is negative — you end up with more dollars, but those dollars buy less than your original amount could.",
      },
      {
        claim: "Real return always equals nominal return minus inflation, exactly.",
        reality:
          "Subtracting is a close approximation for small rates, but the precise calculation divides (1 + nominal) by (1 + inflation) instead. The two methods diverge more as the rates involved get larger.",
      },
      {
        claim: "Inflation only matters for cash sitting still, not for invested money.",
        reality:
          "Inflation erodes the purchasing power of any return that doesn't outpace it, invested or not. The real-return calculation applies to any nominal figure, not just idle cash.",
      },
    ],
    relatedConcepts: [
      { label: "Inflation", href: "/foundations/inflation" },
      { label: "Compound Interest", href: "/finance/compound-interest" },
      { label: "Time Value of Money", href: "/finance/time-value-of-money" },
    ],
    relatedCalculator: {
      label: "Real vs. Nominal Return Calculator",
      href: "/calculators/real-vs-nominal-returns",
    },
  },

  diversification: {
    pillar: "finance",
    slug: "diversification",
    title: "Diversification",
    summary:
      "Spreading money across different investments so that no single one's bad outcome can sink the whole portfolio — reducing risk without necessarily giving up expected return.",
    definition: (
      <p>
        <strong>Diversification</strong> is spreading investments across
        multiple different assets, rather than concentrating money in just
        one or a few, so that a bad outcome in any single investment
        doesn&apos;t disproportionately damage the whole portfolio.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Per{" "}
          <Link
            href="/finance/risk-and-return"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Risk &amp; Return
          </Link>
          , every individual investment carries some uncertainty about its
          outcome. But not all of that uncertainty comes from the same
          source: some of it is specific to that one investment alone — a
          single company&apos;s product fails, its factory has a bad year,
          its leadership makes a poor decision — while some of it is shared
          across nearly everything at once, like a broad economic downturn
          that drags most investments down together.
        </p>
        <p>
          The risk that&apos;s specific to one investment can be reduced by
          simply not putting all your money into that one thing. Hold
          twenty different companies instead of one, and a single company
          having a uniquely bad year barely dents your overall results,
          because the other nineteen aren&apos;t affected by that
          company&apos;s specific problem — some might even be having an
          especially good year at the same time. Spread across enough
          different, sufficiently unrelated investments, this
          company-specific risk mostly cancels out, without you having had
          to give up any expected return to get that benefit — which is why
          diversification is sometimes described as one of the only ways to
          reduce risk without a real cost attached.
        </p>
        <p>
          The risk shared across everything at once can&apos;t be
          diversified away this way, because by definition it affects all
          or most of your holdings simultaneously — owning a hundred
          companies instead of one doesn&apos;t protect you if the whole
          economy slows down and drags nearly every company down with it.
          Diversification reduces the first kind of risk, not the second.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Compare holding all your money in a single small company&apos;s
          stock against spreading it across 20 unrelated companies.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Single company, hit by a product recall:
  Portfolio impact: roughly a 40% drop (the whole thing was exposed)

20 unrelated companies, one of them hit by the same recall:
  Portfolio impact: roughly a 2% drop (only ~1/20th of the portfolio
  was exposed; the other 19 aren't affected by that company's problem)`}
        </pre>
        <p>
          But if a broad recession hits and most companies decline together,
          both the single-company holding and the 20-company portfolio
          would likely fall — diversification doesn&apos;t protect against
          that shared, economy-wide risk.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Diversification guarantees you won't lose money.",
        reality:
          "It reduces exposure to any single investment's specific bad luck, but it can't protect against risk that affects everything at once, like a broad market downturn.",
      },
      {
        claim: "Diversification always means you make less money than concentrating your money in the single best investment.",
        reality:
          "Only in hindsight, if you could have known which single investment would do best. Going in, you can't know that in advance — diversification exists specifically because you can't reliably pick the one winner ahead of time.",
      },
      {
        claim: "Owning many stocks is automatically diversified.",
        reality:
          "If all the stocks are in the same industry or exposed to the same specific risk — twenty different oil companies, for instance — they can still move together and fail to protect you the way diversification across genuinely unrelated investments would.",
      },
    ],
    relatedConcepts: [
      { label: "Risk & Return", href: "/finance/risk-and-return" },
    ],
    relatedCalculator: {
      label: "Diversification Impact Illustrator",
      href: "/calculators/diversification",
    },
  },

  "net-present-value": {
    pillar: "finance",
    slug: "net-present-value",
    title: "Net Present Value (NPV)",
    summary:
      "Present Value applied to a whole stream of future cash flows at once, netted against the upfront cost — the standard way to judge whether an investment is worth making.",
    definition: (
      <p>
        <strong>Net present value (NPV)</strong> is the sum of the present
        values of every cash flow an investment is expected to produce —
        including the upfront cost, counted as a negative cash flow today —
        discounted back to today&apos;s dollars at a chosen rate. If the
        total is positive, the investment is expected to be worth more, in
        today&apos;s-dollars terms, than it costs; if negative, it&apos;s
        expected to be worth less.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          <Link
            href="/finance/present-value"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Present Value
          </Link>{" "}
          answers &quot;what is one future amount worth today?&quot; but
          real investment decisions rarely involve just one future amount —
          a piece of equipment might cost money today and then generate cash
          flow for each of the next several years; a business project might
          require an upfront investment and pay out returns over time. To
          evaluate a decision like that, every one of those future cash
          flows needs to be translated back to today&apos;s dollars — not
          just one — and then combined into a single, comparable figure.
        </p>
        <p>
          Net present value does exactly that: it discounts every expected
          future cash flow back to today, the same way Present Value
          discounts a single amount, then adds all of those present values
          together, including the upfront cost, counted as a negative cash
          flow happening right now, at time zero. The result is a single
          number in today&apos;s dollars that answers the real underlying
          question directly: after accounting for the time value of money,
          is this investment expected to create more value than it costs,
          or less?
        </p>
        <p>
          The discount rate matters enormously here, just as it does for
          Present Value — it should reflect what you could otherwise earn
          on your money at a similar level of{" "}
          <Link
            href="/finance/risk-and-return"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            risk
          </Link>
          . Too low a discount rate makes future cash flows look more
          valuable than they really are relative to the alternative uses of
          that money; too high a rate understates them. NPV is only as
          trustworthy as the discount rate and the cash-flow estimates that
          go into it. For a company evaluating its own projects, that rate
          is usually its{" "}
          <Link
            href="/finance/cost-of-capital"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Cost of Capital (WACC)
          </Link>{" "}
          — the return needed to satisfy everyone who financed the company,
          and the benchmark used in{" "}
          <Link
            href="/finance/capital-budgeting-decision-rules"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Capital Budgeting Decision Rules
          </Link>
          .
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>Every expected cash flow, discounted and summed:</p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
          NPV = CF₀ + CF₁/(1+r)¹ + CF₂/(1+r)² + ... + CFₙ/(1+r)ⁿ
        </pre>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <code>CFₜ</code> — the cash flow expected in year t (
            <code>CF₀</code> is usually negative — the upfront cost)
          </li>
          <li>
            <code>r</code> — the discount rate, matching what you could
            otherwise earn on your money at a similar level of risk
          </li>
          <li>
            <code>n</code> — the number of years the investment produces
            cash flow
          </li>
        </ul>
        <p>
          The decision rule is simple once NPV is calculated: a positive NPV
          means the investment is expected to create more value than it
          costs; a negative NPV means the opposite.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A small business considers buying a{" "}
          <strong>$10,000</strong> machine expected to generate{" "}
          <strong>$3,000</strong> of extra cash flow at the end of each of
          the next <strong>4 years</strong>, using an{" "}
          <strong>8%</strong> discount rate.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Year 0: −$10,000
Year 1:  $3,000 / 1.08¹ ≈ $2,778
Year 2:  $3,000 / 1.08² ≈ $2,572
Year 3:  $3,000 / 1.08³ ≈ $2,382
Year 4:  $3,000 / 1.08⁴ ≈ $2,205

NPV ≈ −$10,000 + $2,778 + $2,572 + $2,382 + $2,205 ≈ −$64`}
        </pre>
        <p>
          In raw, undiscounted terms, $3,000 × 4 years = $12,000 sounds like
          a lot more than the $10,000 cost. But once each year&apos;s cash
          flow is discounted back to today, the total is only worth about
          $9,936 in today&apos;s dollars — just barely below the $10,000
          cost, for a slightly negative NPV. At an 8% discount rate, this
          investment is expected to destroy a small amount of value rather
          than create it. Try the{" "}
          <Link
            href="/calculators/net-present-value"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Net Present Value Calculator
          </Link>{" "}
          to see how a different discount rate or cash flow changes the
          result.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "If the total, undiscounted cash flows are bigger than the cost, the investment is worth it.",
        reality:
          "Summing raw future cash flows ignores that money received later is worth less than money received now. NPV can be negative even when the simple sum of future cash flows exceeds the upfront cost, exactly as in the worked example above.",
      },
      {
        claim: "A higher discount rate makes an investment's NPV look better.",
        reality:
          "It's the opposite. A higher discount rate shrinks the present value of future cash flows more heavily, pushing NPV lower, because it implies a higher bar — a higher opportunity cost — the investment has to clear.",
      },
      {
        claim: "NPV tells you with certainty whether an investment will succeed.",
        reality:
          "NPV is only as good as its inputs. The cash-flow estimates and the discount rate are both assumptions about the future, not guarantees, and a modest change in either can flip NPV's sign.",
      },
    ],
    relatedConcepts: [
      { label: "Present Value", href: "/finance/present-value" },
      { label: "Time Value of Money", href: "/finance/time-value-of-money" },
      { label: "Risk & Return", href: "/finance/risk-and-return" },
      {
        label: "Internal Rate of Return (IRR)",
        href: "/finance/internal-rate-of-return",
      },
      { label: "Payback Period", href: "/finance/payback-period" },
      {
        label: "Capital Budgeting Decision Rules",
        href: "/finance/capital-budgeting-decision-rules",
      },
      { label: "Cost of Capital (WACC)", href: "/finance/cost-of-capital" },
    ],
    relatedCalculator: {
      label: "Net Present Value Calculator",
      href: "/calculators/net-present-value",
    },
  },

  amortization: {
    pillar: "finance",
    slug: "amortization",
    title: "Amortization",
    summary:
      "How a fixed loan payment splits between interest and principal each period — and why the same payment pays down more principal, and less interest, over time.",
    definition: (
      <p>
        <strong>Amortization</strong>, in the loan sense, is the process of
        paying off a loan through a series of regular, fixed payments, where
        each payment covers the interest owed for that period plus a
        portion of the original amount borrowed (the{" "}
        <strong>principal</strong>). Over the life of the loan, the split
        between interest and principal within each payment shifts — early
        payments are mostly interest, later payments are mostly principal —
        even though the total payment amount stays the same. The same math
        applies whether the loan is a mortgage on a house, an auto loan, a
        personal loan, or a business term loan — any loan repaid through
        fixed periodic payments works this way.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          A loan like a mortgage, a car loan, a personal loan, or a business
          term loan is really just{" "}
          <Link
            href="/foundations/what-is-an-interest-rate"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            interest
          </Link>{" "}
          applied to whatever principal is still outstanding, recalculated
          every period. If a borrower only ever paid the interest due each
          period and never touched the principal, they&apos;d owe just as
          much at the end as at the start — interest with no repayment. A
          fixed loan payment has to do two things at once: cover the
          interest that&apos;s accrued since the last payment, and chip away
          at the amount still owed, so the balance eventually reaches zero.
        </p>
        <p>
          Amortization is the schedule that makes this work with a constant
          payment amount every period, despite the interest portion of that
          payment shrinking over time. Early on, the loan balance is
          largest, so the interest owed each period is largest too —
          meaning most of an early payment goes toward interest, and only a
          small slice actually reduces the principal. As the balance
          shrinks, the interest owed each period shrinks with it, so a
          growing share of each identical payment goes toward principal
          instead. The payment amount never changes, but what it
          accomplishes shifts dramatically over the life of the loan.
        </p>
        <p>
          This is why paying even a little extra toward principal early in
          a loan can save a disproportionate amount of interest over the
          life of the loan: reducing the principal sooner means every
          future period&apos;s interest is calculated on a smaller balance,
          compounding the effect (see{" "}
          <Link
            href="/finance/compound-interest"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Compound Interest
          </Link>
          ) in the borrower&apos;s favor instead of the lender&apos;s.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>The fixed payment amount is given by:</p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
          Payment = P × [r(1+r)ⁿ] / [(1+r)ⁿ − 1]
        </pre>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <code>P</code> — the principal, the amount borrowed
          </li>
          <li>
            <code>r</code> — the interest rate per payment period (the
            annual rate divided by the number of payments per year)
          </li>
          <li>
            <code>n</code> — the total number of payments over the life of
            the loan
          </li>
        </ul>
        <p>
          Each period, that fixed payment splits into interest (the
          remaining balance × <code>r</code>) and principal (the rest of
          the payment) — and the remaining balance shrinks accordingly for
          the next period&apos;s calculation.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A <strong>$200,000</strong> loan at a{" "}
          <strong>6% annual rate</strong>, paid monthly over{" "}
          <strong>30 years</strong> (360 payments), works out to a fixed
          payment of about <strong>$1,199</strong> a month.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Payment 1:   $1,000 interest + $199 principal   (balance: $200,000)
Payment 181: $711 interest   + $489 principal    (balance: ~$142,000)`}
        </pre>
        <p>
          The payment amount never changes, but by payment 181 — roughly
          halfway through the loan — more than twice as much of it is going
          toward principal compared to payment 1, purely because the
          balance interest is calculated on has shrunk. Try the{" "}
          <Link
            href="/calculators/amortization"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Amortization Calculator
          </Link>{" "}
          to see how the rate, term, or loan amount changes this split. For
          a full mortgage payment — including property tax and insurance
          collected alongside it — try the{" "}
          <Link
            href="/calculators/mortgage"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Mortgage Calculator
          </Link>
          .
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Each loan payment reduces the balance by the same amount.",
        reality:
          "The payment amount is fixed, but the split between interest and principal changes every period — early payments barely touch the balance, later payments pay it down much faster.",
      },
      {
        claim: "Paying a little extra each month has only a small effect on how quickly you pay off a loan.",
        reality:
          "Because interest is calculated on the remaining balance, extra principal payments made early in the loan compound in the borrower's favor and can shave years — and a disproportionate amount of interest — off a long loan.",
      },
      {
        claim: "A lower monthly payment always means you're paying less for the loan overall.",
        reality:
          "A lower payment often comes from stretching the loan over more periods, which usually means more total interest paid over the life of the loan, even though each individual payment is smaller.",
      },
    ],
    relatedConcepts: [
      { label: "Compound Interest", href: "/finance/compound-interest" },
      {
        label: "What an Interest Rate Fundamentally Is",
        href: "/foundations/what-is-an-interest-rate",
      },
    ],
    relatedCalculator: {
      label: "Amortization Calculator",
      href: "/calculators/amortization",
    },
  },

  "retirement-planning": {
    pillar: "finance",
    slug: "retirement-planning",
    title: "Retirement Planning",
    summary:
      "Figuring out how much to save for a stretch of life with no paycheck — driven by how long you'll need the money to last, what it can earn along the way, and how much inflation eats into it by then.",
    definition: (
      <p>
        <strong>Retirement planning</strong> is the process of estimating
        how much money you&apos;ll need to have saved by the time you stop
        earning a regular paycheck, and how much you need to set aside now
        and over time to reach that amount — accounting for how long the
        money needs to last, what it can earn while invested, and how much
        inflation erodes its purchasing power along the way.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          At some point, most people stop earning a regular paycheck from
          work, but their expenses don&apos;t stop. That gap has to be
          covered by something — savings and investments built up over a
          working life — and figuring out how much needs to be built up
          requires answering a chain of related questions: how much will
          you need to spend each year in retirement? How many years might
          retirement last? What can savings realistically earn while
          invested, both before and after retirement? None of these
          questions has a single right answer, but ignoring them
          doesn&apos;t make the underlying need go away — it just means
          finding out too late whether there&apos;s enough.
        </p>
        <p>
          Two forces make retirement planning harder than it first looks.
          First, per{" "}
          <Link
            href="/foundations/inflation"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Inflation
          </Link>
          , prices decades from now will almost certainly be meaningfully
          higher than they are today, so a dollar amount that sounds like
          plenty today may not stretch nearly as far by the time it&apos;s
          actually needed — retirement math has to account for a target
          number of future dollars, not today&apos;s dollars, or a plan can
          look comfortably funded and still fall short. Second, per{" "}
          <Link
            href="/finance/compound-interest"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Compound Interest
          </Link>
          , money invested early has vastly more time to compound than
          money invested later, so the same monthly contribution produces a
          dramatically larger final balance the earlier it starts — which
          is why &quot;start early&quot; isn&apos;t just generic advice,
          it&apos;s a direct, calculable consequence of how compounding
          works.
        </p>
        <p>
          Put together, retirement planning is really{" "}
          <Link
            href="/finance/time-value-of-money"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Time Value of Money
          </Link>{" "}
          and Compound Interest applied to a very long, very consequential
          time horizon: a target amount, a rate-of-return assumption, an
          inflation assumption, and a number of years to get there. Change
          any one of those inputs — start five years later, assume a
          slightly lower return, ignore inflation entirely — and the
          required outcome changes substantially, which is exactly why
          it&apos;s worth running the actual numbers instead of guessing.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Someone is <strong>30</strong>, plans to retire at{" "}
          <strong>65</strong> (35 years to grow), currently has{" "}
          <strong>$20,000</strong> saved, contributes{" "}
          <strong>$500</strong> a month, expects a{" "}
          <strong>7%</strong> average annual return, and assumes{" "}
          <strong>3%</strong> inflation.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Nominal savings at 65:  ≈ $1,130,000
Real (today's-dollar) purchasing power: ≈ $402,000`}
        </pre>
        <p>
          The nominal number looks like a comfortable seven figures — but
          in terms of what it can actually buy, 35 years of 3% inflation
          shrinks it to roughly a third of that. Planning around the
          nominal figure alone would badly overstate how much retirement
          spending this actually supports. Try the{" "}
          <Link
            href="/calculators/retirement-planning"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Retirement Planning Calculator
          </Link>{" "}
          with your own age, contribution, and assumptions.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "There's a single 'magic number' retirement target that applies to everyone.",
        reality:
          "The right target depends on individual spending needs, expected lifespan, other income sources like a pension, and risk tolerance — there's no universal number, only a personal calculation.",
      },
      {
        claim: "Retirement savings only need to grow until the day you retire.",
        reality:
          "For most people, savings need to keep growing — and get spent down gradually — for potentially decades after retirement too, since a retirement can easily last 20 to 30+ years. The money isn't finished working just because a paycheck stops.",
      },
      {
        claim: "If you're behind on saving, there's nothing to be done since you can't get the missed years of compounding back.",
        reality:
          "Lost time can't be recovered, but contributing more per period, adjusting the planned retirement age, or adjusting expected spending can all still meaningfully change the outcome — being behind changes the math, it doesn't make the math impossible.",
      },
    ],
    relatedConcepts: [
      { label: "Compound Interest", href: "/finance/compound-interest" },
      { label: "Time Value of Money", href: "/finance/time-value-of-money" },
      { label: "Inflation", href: "/foundations/inflation" },
      {
        label: "Real vs. Nominal Returns",
        href: "/finance/real-vs-nominal-returns",
      },
    ],
    relatedCalculator: {
      label: "Retirement Planning Calculator",
      href: "/calculators/retirement-planning",
    },
  },

  "internal-rate-of-return": {
    pillar: "finance",
    slug: "internal-rate-of-return",
    title: "Internal Rate of Return (IRR)",
    summary:
      "The discount rate at which an investment's NPV is exactly zero — in other words, the actual annual rate of return the investment is expected to produce.",
    definition: (
      <p>
        <strong>Internal rate of return (IRR)</strong> is the discount rate
        at which an investment&apos;s{" "}
        <Link
          href="/finance/net-present-value"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          net present value
        </Link>{" "}
        comes out to exactly zero. Put differently, it&apos;s the annual
        rate of return the investment is expected to actually produce over
        its life — the rate at which the upfront cost and the value of the
        future cash flows it generates exactly balance out.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Per Net Present Value, the standard way to judge whether an
          investment is worth its upfront cost is to discount its future
          cash flows at a chosen rate — usually the return you could
          otherwise get on a similarly risky investment — and see whether
          the result is positive or negative. That approach requires
          picking a discount rate before doing anything else. But often the
          more natural question runs the other way: given these cash flows,
          what rate of return is this investment actually producing? IRR
          answers exactly that.
        </p>
        <p>
          IRR is the discount rate at which NPV comes out to precisely
          zero — the exact break-even point between the upfront cost and
          everything the investment pays back afterward, once the time
          value of money is accounted for. If the rate you&apos;d actually
          require (or could get elsewhere at similar risk) is lower than
          the IRR, the investment is worth it, because it&apos;s expected
          to outperform the alternative; if your required rate is higher
          than the IRR, it isn&apos;t, because the alternative is actually
          the better use of the money.
        </p>
        <p>
          This is why IRR and NPV are really two views of the same
          underlying cash flows, not two separate calculations: NPV assumes
          a rate and reports a dollar amount; IRR assumes a dollar amount
          of zero and reports a rate. Because IRR doesn&apos;t require
          picking a discount rate up front, it&apos;s useful for comparing
          very different investments on a single, rate-like number — but it
          can behave oddly, or even produce more than one mathematically
          valid answer, when cash flows switch sign multiple times over an
          investment&apos;s life. That&apos;s one reason NPV is generally
          treated as the more reliable of the two when they disagree.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>IRR is the rate that satisfies:</p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
          0 = CF₀ + CF₁/(1+IRR)¹ + CF₂/(1+IRR)² + ... + CFₙ/(1+IRR)ⁿ
        </pre>
        <p>
          Unlike Present Value or NPV, there&apos;s no way to isolate IRR
          algebraically for most cash flow patterns — it has to be found by
          trying different rates until NPV lands on (or very near) zero,
          which is exactly what the calculator does automatically behind
          the scenes.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Using the same cash flow stream from the Net Present Value
          example — a <strong>$10,000</strong> upfront cost, followed by{" "}
          <strong>$3,000</strong> at the end of each of 4 years — the IRR
          comes out to approximately <strong>7.71%</strong>.
        </p>
        <p>
          This matches what was found there: at an assumed 8% discount rate
          — just above this 7.71% IRR — NPV was slightly negative, meaning
          the required rate exceeded what the investment could actually
          deliver. Try the{" "}
          <Link
            href="/calculators/internal-rate-of-return"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            IRR Calculator
          </Link>{" "}
          to see how changing any cash flow shifts this rate.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "A higher IRR always means a better investment.",
        reality:
          "IRR ignores the actual size of an investment and its cash flows. A small investment with a very high IRR can create less total value than a larger investment with a more modest IRR — NPV, which reports dollars rather than a rate, is the more reliable measure of total value created.",
      },
      {
        claim: "IRR and NPV always agree on whether an investment is worth it.",
        reality:
          "They generally agree for a simple project with one upfront cost and consistently positive cash flows afterward, but can give conflicting signals for more complex cash flow patterns, or when comparing projects of very different scales.",
      },
      {
        claim: "There's always exactly one IRR for a given set of cash flows.",
        reality:
          "If the cash flows change sign more than once over a project's life — money going out, then in, then out again — there can be multiple mathematically valid IRRs, or none at all. This essentially never happens for a project with a single upfront cost followed by straightforward inflows.",
      },
    ],
    relatedConcepts: [
      { label: "Net Present Value", href: "/finance/net-present-value" },
      { label: "Payback Period", href: "/finance/payback-period" },
      { label: "Present Value", href: "/finance/present-value" },
      {
        label: "Capital Budgeting Decision Rules",
        href: "/finance/capital-budgeting-decision-rules",
      },
    ],
    relatedCalculator: {
      label: "IRR Calculator",
      href: "/calculators/internal-rate-of-return",
    },
  },

  "payback-period": {
    pillar: "finance",
    slug: "payback-period",
    title: "Payback Period",
    summary:
      "How long it takes for an investment's cash flows to add back up to its original cost — a simple, popular measure that ignores the time value of money on purpose, in exchange for simplicity.",
    definition: (
      <p>
        The <strong>payback period</strong> is the amount of time it takes
        for an investment&apos;s cumulative cash flows to equal its
        original upfront cost — in other words, how long until the
        investment has &quot;paid for itself,&quot; measured in raw,
        undiscounted dollars.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Per Present Value, money that arrives later is worth less than
          the same amount arriving sooner, so a properly rigorous
          evaluation of an investment should discount future cash flows —
          which is exactly what NPV and IRR do. But that rigor comes at a
          cost: NPV and IRR require picking, or solving for, a discount
          rate, and their output — a dollar amount or a percentage —
          doesn&apos;t directly answer a question that&apos;s often
          front-of-mind for a person or business with limited cash on hand:
          how long is my money going to be tied up in this before I see any
          of it back?
        </p>
        <p>
          The payback period answers that question directly, and
          deliberately ignores discounting to do it: it just adds up raw
          cash flows year by year until they equal the original cost, and
          reports how long that took. This makes it far simpler to compute
          and explain than NPV or IRR, and it directly captures a real
          concern — liquidity risk, the danger of tying up money for a very
          long time in something that might not go as planned. A project
          with a 2-year payback period returns your capital much sooner
          than one with a 10-year payback period, even if the 10-year
          project has a higher NPV overall.
        </p>
        <p>
          The simplicity is also the limitation: by ignoring the time value
          of money, payback period treats a dollar received in year 1 as
          worth exactly the same as a dollar received in year 5, and it
          ignores everything that happens after the payback point entirely
          — a project that pays back in 3 years and then produces nothing
          further looks identical, under this measure, to one that pays
          back in 3 years and then produces enormous cash flows for another
          decade. That&apos;s exactly why payback period is typically used
          alongside NPV and IRR as a quick liquidity check, rather than as
          the main decision tool on its own.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>
          Payback period is the point where cumulative cash flow first
          reaches the upfront cost:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
          Payback period = year where cumulative cash flow first ≥ upfront cost
        </pre>
        <p>
          It&apos;s usually refined to a fraction of a year rather than
          rounded up to the next whole year, by interpolating how far into
          the payback year the remaining balance is actually covered.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          The same <strong>$10,000</strong> upfront cost, followed by{" "}
          <strong>$3,000</strong> at the end of each of 4 years:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`After year 1: $3,000 cumulative  ($7,000 still short)
After year 2: $6,000 cumulative  ($4,000 still short)
After year 3: $9,000 cumulative  ($1,000 still short)
After year 4: $12,000 cumulative — paid back partway through year 4

Payback period ≈ 3 + ($1,000 / $3,000) ≈ 3.33 years`}
        </pre>
        <p>
          NPV said this investment barely broke even (slightly negative) at
          an 8% discount rate; payback period says the money comes back in
          about 3.3 years, out of a 4-year project — a useful, easy-to-grasp
          number even though it doesn&apos;t, by itself, say whether the
          investment cleared the bar of a required return.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "A shorter payback period always means a better investment.",
        reality:
          "Payback period says nothing about what happens after the payback point. A project with a short payback but nothing further can be worth less overall than one with a longer payback that keeps paying off long afterward.",
      },
      {
        claim: "Payback period and NPV/IRR will always point to the same decision.",
        reality:
          "Because payback period ignores the timing and size of cash flows after the payback point, and ignores discounting entirely, it can favor a project that NPV or IRR would actually reject, or vice versa.",
      },
      {
        claim: "Payback period accounts for the fact that a dollar today is worth more than a dollar later.",
        reality:
          "Standard payback period deliberately does not discount — it treats every dollar of cash flow the same regardless of when it arrives, which is the whole reason it's simpler, but less rigorous, than NPV or IRR.",
      },
    ],
    relatedConcepts: [
      { label: "Net Present Value", href: "/finance/net-present-value" },
      {
        label: "Internal Rate of Return (IRR)",
        href: "/finance/internal-rate-of-return",
      },
      { label: "Present Value", href: "/finance/present-value" },
      {
        label: "Capital Budgeting Decision Rules",
        href: "/finance/capital-budgeting-decision-rules",
      },
    ],
    relatedCalculator: {
      label: "Payback Period Calculator",
      href: "/calculators/payback-period",
    },
  },

  "dcf-valuation": {
    pillar: "finance",
    slug: "dcf-valuation",
    title: "Discounted Cash Flow (DCF) Valuation",
    summary:
      "A company or asset is worth the cash it will generate in the future, discounted back to today — DCF is Net Present Value applied to an entire business instead of a single project.",
    definition: (
      <p>
        <strong>Discounted cash flow (DCF) valuation</strong> estimates
        what a company or asset is worth today by projecting the cash
        it&apos;s expected to generate in future years and discounting each
        year&apos;s cash flow back to today&apos;s dollars — the same way{" "}
        <Link
          href="/finance/net-present-value"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Net Present Value
        </Link>{" "}
        discounts a project&apos;s cash flows — then adding them all
        together.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Per{" "}
          <Link
            href="/finance/present-value"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Present Value
          </Link>
          , any future sum of money is worth less today than its face
          amount, because of the time value of money — and per Net Present
          Value, that same idea extends to a whole stream of cash flows,
          not just one. A business is, at its core, just a much longer,
          less certain stream of future cash — the cash it&apos;s expected
          to generate for its owners, year after year. DCF valuation is the
          direct application of that same logic to an entire company: if
          you can estimate the cash flows a business will produce, and
          discount each one back to today, the sum of all those discounted
          amounts is a reasonable estimate of what the whole business is
          worth right now.
        </p>
        <p>
          The one wrinkle a single project doesn&apos;t usually have is
          that most businesses don&apos;t have a fixed, known end date — a
          project might run for 4 or 5 years and then stop, but a healthy
          company could plausibly keep generating cash indefinitely. Rather
          than projecting cash flows forever, which nobody can do reliably,
          DCF valuation typically projects cash flows explicitly for a
          handful of years — often 5 to 10 — and then estimates a single
          lump-sum value, called the <strong>terminal value</strong>, that
          represents everything the business is expected to be worth from
          that point onward, assuming its cash flows keep growing at some
          steady, sustainable rate after that. The terminal value gets
          discounted back to today just like every other year&apos;s cash
          flow, and often ends up being the single largest piece of the
          total valuation.
        </p>
        <p>
          The rate used to discount every cash flow is usually a
          company&apos;s{" "}
          <Link
            href="/finance/cost-of-capital"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            cost of capital
          </Link>{" "}
          — often called <strong>WACC</strong> (weighted average cost of
          capital) — which blends the return a company&apos;s lenders
          require with the
          return its shareholders require, weighted by how much of the
          company is funded by each. It plays exactly the same role here as
          the discount rate in Net Present Value: too low a rate overstates
          the business&apos;s value, too high a rate understates it, and
          the whole estimate is only as trustworthy as the cash flow
          projections and discount rate that go into it — assumptions about
          a highly uncertain future, not verified facts.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>Explicit projection years, plus a discounted terminal value:</p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Value = Σ [FCFₜ / (1+r)ᵗ]  (for each projected year)  +  Terminal Value / (1+r)ⁿ

Terminal Value = FCFₙ × (1 + g) / (r − g)`}
        </pre>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <code>FCFₜ</code> — free cash flow projected for year t
          </li>
          <li>
            <code>r</code> — the discount rate, often a company&apos;s WACC
          </li>
          <li>
            <code>g</code> — the terminal (long-run) growth rate, assumed
            to continue forever after the projection period
          </li>
          <li>
            <code>n</code> — the number of years explicitly projected
          </li>
        </ul>
        <p>
          The terminal value formula only makes sense when the discount
          rate is higher than the terminal growth rate — a business
          can&apos;t be assumed to grow faster than its discount rate
          forever without the math breaking down into an unrealistic,
          runaway number.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A small business projects <strong>$100,000</strong> of free cash
          flow next year, growing <strong>10%</strong> a year for{" "}
          <strong>5</strong> years, then a <strong>3%</strong> terminal
          growth rate forever after, discounted at a{" "}
          <strong>12%</strong> rate (its WACC).
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Sum of discounted years 1–5:  ≈ $430,767
Terminal value (discounted back to today): ≈ $950,770

Total estimated value: ≈ $1,381,537`}
        </pre>
        <p>
          Notice that the terminal value — a single number built on the
          least certain assumption of all, a constant long-run growth rate
          — makes up nearly 70% of the total estimated value here.
          Try the{" "}
          <Link
            href="/calculators/dcf-valuation"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            DCF Valuation Calculator
          </Link>{" "}
          to see how sensitive the total is to the growth and discount rate
          assumptions.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "DCF gives an objective, precise value for a company.",
        reality:
          "Every input — the cash flow projections, the discount rate, and especially the terminal growth rate — is an assumption about an uncertain future. Small changes in any of them, especially the terminal growth rate, can swing the estimated value dramatically.",
      },
      {
        claim: "The explicit projection years are the most important part of a DCF.",
        reality:
          "As the worked example shows, the terminal value — representing everything beyond the projection period — very often makes up the majority of the total estimated value, even though it's built on the simplest, least certain assumption of all.",
      },
      {
        claim: "A higher assumed growth rate always increases the estimated value.",
        reality:
          "Mostly true, but the terminal value formula breaks down, or produces unrealistic values, if the assumed terminal growth rate gets close to or exceeds the discount rate — terminal growth has to stay safely below the discount rate for the model to make sense at all.",
      },
    ],
    relatedConcepts: [
      { label: "Net Present Value", href: "/finance/net-present-value" },
      { label: "Present Value", href: "/finance/present-value" },
      { label: "Risk & Return", href: "/finance/risk-and-return" },
      { label: "Cost of Capital (WACC)", href: "/finance/cost-of-capital" },
    ],
    relatedCalculator: {
      label: "DCF Valuation Calculator",
      href: "/calculators/dcf-valuation",
    },
  },

  "cost-of-capital": {
    pillar: "finance",
    slug: "cost-of-capital",
    title: "Cost of Capital (WACC)",
    summary:
      "The blended rate a company must earn to satisfy both its lenders and its shareholders, weighted by how much of the company is actually financed by each — used as the discount rate in NPV and DCF Valuation.",
    definition: (
      <p>
        A company&apos;s <strong>cost of capital</strong> — usually called{" "}
        <strong>WACC</strong> (weighted average cost of capital) — is the
        average rate of return it needs to earn on its investments to
        satisfy everyone who supplied it money: the lenders it owes interest
        to, and the shareholders who expect a return for the risk of owning
        the business. It&apos;s a weighted average because it blends the
        cost of debt and the cost of equity in proportion to how much of the
        company is actually financed by each.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Every dollar a company invests in itself had to come from
          somewhere. Broadly, there are two sources: borrowing (
          <strong>debt</strong>) or money contributed by owners (
          <strong>equity</strong>). Neither is free. Lenders charge interest
          — that&apos;s the <strong>cost of debt</strong>. Shareholders
          don&apos;t charge an explicit interest rate, but per{" "}
          <Link
            href="/finance/risk-and-return"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Risk &amp; Return
          </Link>
          , they still expect compensation for the risk of owning a
          business whose value can rise or fall, and who only get paid after
          lenders do if the company runs into trouble — that expected return
          is the <strong>cost of equity</strong>, and it&apos;s
          consistently higher than the cost of debt, precisely because
          equity holders bear more risk.
        </p>
        <p>
          Every investment a company makes — a new factory, an
          acquisition, an entire project evaluated with{" "}
          <Link
            href="/finance/net-present-value"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Net Present Value
          </Link>{" "}
          — has to clear a bar: it needs to earn enough to compensate both
          the lenders and the shareholders whose money is funding it. If a
          company is financed by a mix of debt and equity, that bar
          isn&apos;t just the cost of debt or just the cost of equity — it
          has to be a blend of both, weighted by how much of the
          company&apos;s financing actually comes from each source. That
          blended rate is WACC, and it&apos;s exactly the discount rate
          used as{" "}
          <code>r</code> in Net Present Value and in{" "}
          <Link
            href="/finance/dcf-valuation"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            DCF Valuation
          </Link>
          : too low a WACC makes a bad investment look acceptable, too high
          a WACC makes a good one look unacceptable.
        </p>
        <p>
          There&apos;s one more wrinkle: interest paid on debt is tax
          deductible — it reduces the company&apos;s taxable income, so the
          government effectively absorbs part of the interest cost. Dividend
          payments to shareholders get no such deduction; they&apos;re paid
          out of profit that&apos;s already been taxed. That&apos;s why the
          cost of debt gets adjusted downward for taxes in the WACC formula,
          while the cost of equity doesn&apos;t — debt has a genuine,
          built-in tax advantage that equity doesn&apos;t share.
        </p>
        <p>
          Cost of debt is usually easy to observe — it&apos;s close to the
          interest rate a company actually pays its lenders. Cost of equity
          is harder, since shareholders never state a required rate the way
          a lender states an interest rate. The most common way to estimate
          it is the <strong>Capital Asset Pricing Model (CAPM)</strong>: start
          from a safe baseline (the <em>risk-free rate</em>, roughly what a
          government bond pays), add the extra return the stock market as a
          whole is expected to demand over that baseline (the{" "}
          <em>market risk premium</em>), scaled by how much more or less this
          particular stock moves than the market as a whole (its{" "}
          <em>beta</em>). A stock with a beta of 1.0 is exactly as volatile
          as the market and gets exactly the market risk premium; a riskier
          stock with a beta of 1.5 gets 1.5× that premium on top of the
          risk-free rate.
        </p>
        <p>
          WACC also answers a question that comes up in{" "}
          <Link
            href="/finance/capital-budgeting-decision-rules"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Capital Budgeting Decision Rules
          </Link>
          : what rate should count as the &quot;required rate of return,&quot;
          or <strong>hurdle rate</strong>, a project has to clear? For a
          company evaluating its own investments, the hurdle rate is usually
          its own WACC — a project that doesn&apos;t earn at least enough to
          cover WACC isn&apos;t even earning back the cost of the money
          funding it, regardless of how good it might look on any other
          measure.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>Cost of equity, via CAPM:</p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
          Re = Rf + β × (Rm − Rf)
        </pre>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <code>Rf</code> — the risk-free rate
          </li>
          <li>
            <code>β</code> (beta) — how much the stock moves relative to the
            overall market
          </li>
          <li>
            <code>Rm</code> — the expected return of the overall market;{" "}
            <code>(Rm − Rf)</code> is the market risk premium
          </li>
        </ul>
        <p>Once cost of equity is known, it feeds into WACC:</p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
          WACC = (E / V) × Re + (D / V) × Rd × (1 − Tax rate)
        </pre>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <code>E</code> — market value of equity; <code>D</code> —
            market value of debt; <code>V</code> — total (E + D)
          </li>
          <li>
            <code>Rd</code> — cost of debt, the interest rate lenders
            charge, before tax
          </li>
        </ul>
        <p>
          <code>(E / V)</code> and <code>(D / V)</code> are the
          weights — the share of total financing that comes from each
          source — and they always add up to 100%.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A company is financed with <strong>$6 million</strong> of equity
          and <strong>$4 million</strong> of debt — $10 million in total. The
          risk-free rate is <strong>3%</strong>, the expected market return
          is <strong>12%</strong>, and this stock&apos;s beta is{" "}
          <strong>1.0</strong> (it moves in line with the market). The
          company can borrow at a <strong>6%</strong> interest rate, and it
          faces a <strong>25%</strong> tax rate.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Cost of equity (CAPM): Re = 3% + 1.0 × (12% − 3%) = 12%

Weight of equity: $6M / $10M = 60%
Weight of debt:   $4M / $10M = 40%

After-tax cost of debt: 6% × (1 − 25%) = 4.5%

WACC = (60% × 12%) + (40% × 4.5%)
     = 7.2% + 1.8%
     = 9.0%`}
        </pre>
        <p>
          This company needs to earn at least 9% on a new investment — its
          hurdle rate for{" "}
          <Link
            href="/finance/capital-budgeting-decision-rules"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Capital Budgeting Decision Rules
          </Link>{" "}
          — to satisfy both its lenders and its shareholders. Recall the{" "}
          <Link
            href="/finance/dcf-valuation"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            DCF Valuation
          </Link>{" "}
          worked example, which discounted cash flows at a 12% rate
          &quot;its WACC&quot; without showing where that number came from
          — this is exactly the calculation that would produce a number
          like that, for a company with a different equity/debt mix or
          higher-risk shareholders demanding a bigger return.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Debt is always cheaper than equity, so a company should just borrow as much as possible.",
        reality:
          "Debt has a lower explicit rate, but borrowing more increases the risk of default, which drives up both the interest rate lenders demand and the return shareholders require on the remaining equity. Loading up on debt doesn't keep lowering WACC indefinitely — see Capital Structure.",
      },
      {
        claim: "WACC is a fixed, objectively correct number for a company.",
        reality:
          "The cost of equity in particular is an estimate of what shareholders require, not an observable market rate the way an interest rate is — different reasonable assumptions can produce meaningfully different WACC figures for the same company.",
      },
      {
        claim: "A company with no debt has a zero cost of capital.",
        reality:
          "An all-equity company still has a cost of capital — it's simply 100% the cost of equity. Having no debt doesn't mean money is free; shareholders still require a return for the risk they're taking.",
      },
      {
        claim: "A beta of 1.0 means a stock's price will exactly match the market tomorrow.",
        reality:
          "Beta describes an average, long-run relationship between a stock's returns and the market's, not a guarantee for any single day or year. A beta of 1.0 means the stock has historically moved in line with the market on average, not that it will track it exactly going forward.",
      },
    ],
    relatedConcepts: [
      { label: "Risk & Return", href: "/finance/risk-and-return" },
      { label: "Net Present Value", href: "/finance/net-present-value" },
      {
        label: "Discounted Cash Flow (DCF) Valuation",
        href: "/finance/dcf-valuation",
      },
      { label: "Capital Structure (Debt vs. Equity)", href: "/finance/capital-structure" },
      {
        label: "Capital Budgeting Decision Rules",
        href: "/finance/capital-budgeting-decision-rules",
      },
    ],
    relatedCalculator: {
      label: "Cost of Capital (WACC) Calculator",
      href: "/calculators/cost-of-capital",
    },
  },

  "capital-structure": {
    pillar: "finance",
    slug: "capital-structure",
    title: "Capital Structure (Debt vs. Equity)",
    summary:
      "How a company chooses to finance itself — with debt, equity, or some mix of both — and why that choice amplifies both a business's potential returns and its potential losses for shareholders.",
    definition: (
      <div className="space-y-3">
        <p>
          A company&apos;s <strong>capital structure</strong> is the mix of{" "}
          <strong>debt</strong> (borrowed money that must be repaid with
          interest, regardless of how the business performs) and{" "}
          <strong>equity</strong> (money contributed by owners, who share in
          the business&apos;s profits and losses but aren&apos;t owed a
          fixed repayment) that a company uses to fund itself.
        </p>
        <p>
          Using debt to fund a business, instead of only equity, is called{" "}
          <strong>financial leverage</strong> — the same idea as a physical
          lever amplifying a force, borrowed money amplifies the returns
          (and losses) experienced by the equity holders.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          A company could, in principle, fund every investment purely with
          equity — never borrowing a cent. But per{" "}
          <Link
            href="/finance/cost-of-capital"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Cost of Capital
          </Link>
          , debt is consistently cheaper than equity, because lenders are
          repaid before shareholders and bear less risk, so they demand a
          lower return. That creates a real incentive to fund at least part
          of a business with debt rather than equity alone — doing so can
          lower the company&apos;s overall cost of capital and increase the
          return left over for shareholders, since the profit gets divided
          among fewer capital contributors once lenders are paid their fixed
          amount.
        </p>
        <p>
          But that amplification cuts both ways. Debt has to be repaid on
          schedule no matter how the business performs — a bad year
          doesn&apos;t reduce a loan payment the way it reduces a
          shareholder&apos;s return. The more debt a company takes on, the
          larger that fixed obligation becomes relative to the business, and
          the more of the business&apos;s ups and downs land entirely on the
          shrinking pool of equity. Too much debt, and a bad year that a
          debt-free company could absorb comfortably can push a
          heavily-indebted one into default. This is why lenders and
          shareholders alike demand higher returns from more heavily
          indebted companies — the risk genuinely is higher.
        </p>
        <p>
          Choosing a capital structure is choosing how much of this
          amplification a company wants: more debt raises the potential
          reward to shareholders in good years, but raises the potential for
          serious trouble in bad ones. There&apos;s no single right answer —
          a stable business with predictable cash flow (a utility company)
          can safely carry more debt than a volatile one (an early-stage
          startup) whose ability to make loan payments in a bad year is far
          less certain.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Two identical companies each hold <strong>$1,000,000</strong> in
          assets and generate <strong>$120,000</strong> of operating profit
          in a good year, or just <strong>$20,000</strong> in a bad year —
          before any interest. Company A is funded entirely with equity.
          Company B is funded with $600,000 of debt at 6% interest and only
          $400,000 of equity.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Good year ($120,000 operating profit):
  Company A (all-equity):    $120,000 profit / $1,000,000 equity = 12.0% return
  Company B (leveraged):     $120,000 − $36,000 interest = $84,000
                              $84,000 / $400,000 equity = 21.0% return

Bad year ($20,000 operating profit):
  Company A (all-equity):    $20,000 profit / $1,000,000 equity = 2.0% return
  Company B (leveraged):     $20,000 − $36,000 interest = −$16,000
                              −$16,000 / $400,000 equity = −4.0% return`}
        </pre>
        <p>
          In the good year, Company B&apos;s shareholders earn a much higher
          return than Company A&apos;s — 21% versus 12% — because the fixed
          $36,000 interest cost leaves more of the upside concentrated in a
          smaller pool of equity. But in the bad year, Company B&apos;s
          shareholders actually lose money, while Company A&apos;s still
          earn a small positive return, because Company B&apos;s $36,000
          interest payment is due regardless of how the business performed.
          Same underlying business, same operating results — leverage just
          redistributes the outcome, amplifying it in both directions for
          the equity holders.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "More debt always means more risk for a company, full stop.",
        reality:
          "It means more risk for the equity holders specifically, and more risk of default for the company overall. Whether that's a problem depends heavily on how stable and predictable the company's cash flow is — a predictable business can safely carry leverage that would be dangerous for a volatile one.",
      },
      {
        claim: "A company should always take on more debt, since debt is cheaper than equity.",
        reality:
          "As the worked example shows, more debt raises the potential reward but also raises the potential for loss, and beyond some point the added default risk actually drives up the cost of both debt and equity, working against the goal of lowering the overall cost of capital.",
      },
      {
        claim: "Equity is 'safer' for a company than debt because there's no fixed obligation.",
        reality:
          "Equity is safer for the company's survival, since there's no fixed payment that must be made regardless of performance. But that safety is exactly what shifts risk onto shareholders instead, which is why equity investors demand a higher expected return than lenders in the first place.",
      },
    ],
    relatedConcepts: [
      { label: "Cost of Capital (WACC)", href: "/finance/cost-of-capital" },
      { label: "Risk & Return", href: "/finance/risk-and-return" },
      {
        label: "Return & Profitability Ratios",
        href: "/accounting/return-and-profitability-ratios",
      },
    ],
  },

  "fixed-income": {
    pillar: "finance",
    slug: "fixed-income",
    title: "Fixed Income",
    summary:
      "Investments that promise a specific, scheduled stream of payments — most commonly bonds — as opposed to investments like stocks whose payouts aren't fixed or guaranteed in advance.",
    definition: (
      <p>
        <strong>Fixed income</strong> is a broad category of investments
        that pay a predetermined, scheduled stream of payments to the
        investor — most commonly interest payments plus a return of
        principal at a set future date — rather than a payout that varies
        unpredictably like a stock&apos;s dividend or price. The most
        common form of fixed income is a <strong>bond</strong>: a loan made
        by the investor to a government or company, in exchange for those
        scheduled payments.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Per{" "}
          <Link
            href="/foundations/what-is-an-interest-rate"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            What an Interest Rate Fundamentally Is
          </Link>
          , lending money to someone else — giving up its use for a while,
          taking on the risk they might not pay it back — is compensated
          with interest. Fixed income investments are essentially that same
          lending relationship, formalized and standardized so it can be
          issued in large amounts to many different lenders at once, and
          often resold between investors before the loan is even repaid. A
          government or company that needs to borrow money issues a bond
          specifying exactly what it will pay, and when, and investors buy
          those bonds knowing upfront exactly what payment schedule to
          expect — hence &quot;fixed&quot; income.
        </p>
        <p>
          This predictability is the whole point, and it&apos;s what
          distinguishes fixed income from investments like stocks. Per{" "}
          <Link
            href="/finance/risk-and-return"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Risk &amp; Return
          </Link>
          , riskier investments have to offer a higher expected return to
          attract investors — a stock&apos;s future price and dividends
          aren&apos;t promised or scheduled in advance, so stock investors
          are compensated with, on average, higher expected returns for
          bearing that uncertainty. A bond&apos;s payments, by contrast,
          are specified upfront and don&apos;t change based on how well the
          issuer&apos;s business happens to do that year, barring the
          issuer running into serious trouble — which is why fixed income
          investments generally carry lower expected returns than stocks:
          investors are trading away some upside in exchange for that
          certainty.
        </p>
        <p>
          &quot;Fixed income&quot; is really an umbrella term — government
          bonds, corporate bonds, and other similarly structured debt
          instruments all fall under it — but the underlying idea across
          all of them is the same: money lent today, in exchange for a
          defined, scheduled series of payments, rather than an open-ended
          share of however a business happens to perform. See{" "}
          <Link
            href="/finance/bond-valuation"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Bond Valuation
          </Link>{" "}
          for how a bond&apos;s set schedule of payments translates into a
          price today.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Compare buying stock in a company versus buying one of its bonds.
          Buying stock means your return depends entirely on how the
          company performs — it could soar, or it could pay you nothing at
          all. Buying one of the company&apos;s bonds instead means
          you&apos;re promised, say, $50 twice a year for 10 years and
          $1,000 back at the end, regardless of how well or poorly the
          company&apos;s stock performs, as long as the company doesn&apos;t
          default. One accepts the company&apos;s performance risk for
          higher potential upside; the other accepts a known schedule for a
          lower, more certain return.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Fixed income means risk-free.",
        reality:
          "Fixed income issuers can still default, and factors like inflation can erode the real value of fixed payments. \"Fixed\" describes the payment schedule, not a guarantee of getting paid, or that the payments will be worth as much as expected.",
      },
      {
        claim: "All bonds pay the same, low, predictable return.",
        reality:
          "Yields and risk vary enormously across fixed income — a government bond from a stable country and a bond from a financially shaky company are both technically \"fixed income,\" but carry very different risk and return.",
      },
      {
        claim: "Fixed income only means bonds.",
        reality:
          "Bonds are the most common form, but other debt instruments can also fall under the fixed income umbrella if they follow a similarly fixed, scheduled payment structure.",
      },
    ],
    relatedConcepts: [
      {
        label: "What an Interest Rate Fundamentally Is",
        href: "/foundations/what-is-an-interest-rate",
      },
      { label: "Risk & Return", href: "/finance/risk-and-return" },
      { label: "Bond Valuation", href: "/finance/bond-valuation" },
    ],
  },

  "bond-valuation": {
    pillar: "finance",
    slug: "bond-valuation",
    title: "Bond Valuation",
    summary:
      "A bond is worth the present value of everything it will pay you — its regular coupon payments plus its face value at maturity — discounted at the return available on similar bonds today.",
    definition: (
      <div className="space-y-3">
        <p>
          A <strong>bond</strong> is a loan you make to a government or
          company: you pay a price today, and in exchange the issuer
          promises to pay you a fixed <strong>coupon</strong> (interest
          payment) on a regular schedule, plus return the bond&apos;s{" "}
          <strong>face value</strong> (also called <em>par value</em>) when
          it matures.
        </p>
        <p>
          <strong>Bond valuation</strong> is the process of figuring out
          what a bond is actually worth today — its price — given those
          promised future payments and the return currently available on
          similar bonds, called the <strong>yield</strong>.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Once a bond is issued, its coupon payments are fixed — locked in
          at whatever rate applied when it was created. But interest rates
          in the broader market don&apos;t stay fixed; they move up and
          down over time, and new bonds keep getting issued at whatever the
          current going rate is. That creates a problem for anyone trying
          to buy or sell an existing bond partway through its life: its
          price can&apos;t just stay at face value forever, because the
          fixed coupon it pays might now be more or less attractive than
          what a brand-new bond of similar risk is currently offering.
        </p>
        <p>
          Bond valuation solves this the same way{" "}
          <Link
            href="/finance/present-value"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Present Value
          </Link>{" "}
          solves any future cash flow problem: treat every one of the
          bond&apos;s remaining payments — each coupon, plus the face value
          at maturity — as a separate future cash flow, and discount each
          one back to today using the current market yield for bonds of
          similar risk and maturity. The bond&apos;s price is simply the
          sum of all those discounted payments. If the bond&apos;s fixed
          coupon is more generous than what new bonds are currently paying,
          its price gets bid up above face value to compensate; if
          it&apos;s less generous than current rates, its price gets
          pushed down below face value, so a buyer is still getting a
          competitive overall return either way.
        </p>
        <p>
          This is why bond prices and yields always move in opposite
          directions: when market yields rise, existing bonds with lower,
          locked-in coupons become less attractive relative to new bonds
          paying the higher going rate, so their price has to fall to keep
          offering a competitive return — and the reverse happens when
          yields fall. This relationship isn&apos;t a coincidence or a
          market quirk; it&apos;s a direct, mechanical consequence of
          discounting a fixed set of payments at a higher or lower rate,
          exactly the same math as Present Value.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>Every remaining coupon, plus the face value, discounted at the yield:</p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
          Price = Σ [Coupon / (1+y)ᵗ]  +  Face Value / (1+y)ᴺ
        </pre>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <code>Coupon</code> — the fixed periodic interest payment (Face
            Value × Coupon Rate)
          </li>
          <li>
            <code>y</code> — the market yield, the return available on
            similar bonds today
          </li>
          <li>
            <code>N</code> — the number of coupon payments remaining until
            maturity
          </li>
        </ul>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A <strong>$1,000</strong> face value bond with a{" "}
          <strong>5%</strong> annual coupon ($50 a year) and{" "}
          <strong>10 years</strong> to maturity.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Market yield = 5% (matches the coupon): price = $1,000 exactly (par)
Market yield = 7%: price ≈ $859.53 (below face value)`}
        </pre>
        <p>
          When the yield matches the coupon rate exactly, the bond prices
          at exactly its face value. When market yields rise above the
          coupon rate, the bond&apos;s fixed 5% payments look less
          attractive than what&apos;s newly available, so its price falls
          to compensate — the same $50-a-year, $1,000-at-maturity payment
          stream is worth less once a buyer could get 7% elsewhere. Try the{" "}
          <Link
            href="/calculators/bond-valuation"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Bond Valuation Calculator
          </Link>{" "}
          to see how the coupon, maturity, or yield changes the price.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "A bond's price always equals its face value.",
        reality:
          "Price only equals face value (\"par\") when the market yield happens to exactly match the coupon rate. Otherwise the bond trades above (a \"premium\") or below (a \"discount\") face value.",
      },
      {
        claim: "Rising interest rates are good news for bond investors already holding bonds.",
        reality:
          "Rising market yields push the market price of existing, lower-coupon bonds down, so a bondholder who needs to sell before maturity would receive less than face value — though one who holds to maturity still gets the full face value regardless of price swings in between.",
      },
      {
        claim: "The coupon rate and the yield are the same thing.",
        reality:
          "The coupon rate is a fixed percentage set when the bond was issued and never changes. The yield reflects the current return available in the market and moves constantly — the two only coincide when a bond happens to be priced exactly at par.",
      },
    ],
    relatedConcepts: [
      { label: "Present Value", href: "/finance/present-value" },
      { label: "Fixed Income", href: "/finance/fixed-income" },
      {
        label: "What an Interest Rate Fundamentally Is",
        href: "/foundations/what-is-an-interest-rate",
      },
    ],
    relatedCalculator: {
      label: "Bond Valuation Calculator",
      href: "/calculators/bond-valuation",
    },
  },

  "futures-contracts": {
    pillar: "finance",
    slug: "futures-contracts",
    title: "Futures Contracts",
    summary:
      "Agreeing today on a price for something you'll buy or sell in the future — locking in certainty now, in exchange for giving up the chance to benefit if the price moves in your favor instead.",
    definition: (
      <p>
        A <strong>futures contract</strong> (or its close relative, a{" "}
        <strong>forward contract</strong>) is an agreement made today to
        buy or sell a specific asset — a commodity, a currency, a financial
        instrument — at a specific price, on a specific future date,
        regardless of what the asset&apos;s market price actually turns
        out to be by then. Whoever agrees to buy holds the{" "}
        <strong>long</strong> position; whoever agrees to sell is{" "}
        <strong>short</strong>.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Many businesses and individuals have to plan around a price that
          won&apos;t actually be known until some point in the future — a
          farmer doesn&apos;t know what price their crop will fetch at
          harvest months from now; an airline doesn&apos;t know what
          it&apos;ll pay for fuel next quarter; a company expecting payment
          in a foreign currency next year doesn&apos;t know today&apos;s
          exchange rate will still apply. That uncertainty is itself a real
          cost and a real risk (per{" "}
          <Link
            href="/finance/risk-and-return"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Risk &amp; Return
          </Link>
          ), even before anything actually happens — planning, budgeting,
          and pricing all become harder when a key input could swing
          significantly in either direction.
        </p>
        <p>
          A futures or forward contract exists to remove that specific
          uncertainty, by letting two parties agree today on the price for
          a future transaction, regardless of where the market price
          actually ends up. The farmer can lock in a sale price for their
          crop months before harvest, guaranteeing a specific revenue
          regardless of whether crop prices later rise or fall; the airline
          can lock in a fuel price, protecting its budget from a spike; a
          business expecting foreign currency can lock in today&apos;s
          exchange rate for a payment months away. In every case, the
          contract trades away the chance of benefiting if the price moves
          favorably, in exchange for protection against the price moving
          unfavorably — certainty, not a bet on a better outcome.
        </p>
        <p>
          Because both sides commit to a fixed price regardless of where
          the market actually ends up, a futures contract is fundamentally
          a zero-sum arrangement between the two parties involved: whatever
          one side gains relative to just transacting at the future market
          price, the other side loses by exactly the same amount, since
          they&apos;re both anchored to the same agreed price while the
          market moves around it. This is different from simply owning an
          asset outright, where both a buyer&apos;s gain and a seller&apos;s
          foregone gain move together with the market rather than against
          each other.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Long position P&L:  (Market price at settlement − Agreed price) × contracts
Short position P&L: (Agreed price − Market price at settlement) × contracts`}
        </pre>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            A <strong>long</strong> position profits when the market price
            ends up higher than the agreed price — you locked in a price
            that turned out to be a bargain.
          </li>
          <li>
            A <strong>short</strong> position profits when the market price
            ends up lower than the agreed price — you locked in a price
            that turned out to be a premium.
          </li>
        </ul>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A farmer sells — goes short — a futures contract locking in a
          corn price of <strong>$5.00/bushel</strong> for{" "}
          <strong>10,000 bushels</strong>, months before harvest.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Market falls to $4.20/bushel at harvest:
  Short P&L = ($5.00 − $4.20) × 10,000 = +$8,000 (locked in the better price)

Market rises to $5.80/bushel at harvest:
  Short P&L = ($5.00 − $5.80) × 10,000 = −$8,000 (gave up the higher price)`}
        </pre>
        <p>
          Either way, the farmer&apos;s total revenue is fixed at $50,000
          (10,000 × $5.00) — the futures contract didn&apos;t necessarily
          make the farmer richer, it made their revenue predictable, which
          was the entire point.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Futures contracts are primarily a way to make speculative bets, not to manage risk.",
        reality:
          "While futures can be used to speculate — betting on price direction without ever intending to buy or sell the underlying asset — their original and still-common purpose is the opposite: transferring away price risk that a business or individual would otherwise have to bear.",
      },
      {
        claim: "If the market price ends up better than the agreed price, you can just walk away from a futures contract.",
        reality:
          "A futures contract is a binding commitment — walking away isn't an option, barring closing out the position beforehand with an offsetting trade. That firm commitment on both sides is exactly what makes the price-locking work.",
      },
      {
        claim: "Going 'long' or 'short' a futures contract means the same thing as owning or not owning the underlying asset.",
        reality:
          "A futures position is a separate financial agreement about a future price, not ownership of the actual underlying asset — settlement can even happen entirely in cash, with no asset ever changing hands.",
      },
    ],
    relatedConcepts: [
      { label: "Risk & Return", href: "/finance/risk-and-return" },
      { label: "Diversification", href: "/finance/diversification" },
    ],
    relatedCalculator: {
      label: "Futures P&L Calculator",
      href: "/calculators/futures-contracts",
    },
  },

  "capital-budgeting-decision-rules": {
    pillar: "finance",
    slug: "capital-budgeting-decision-rules",
    title: "Capital Budgeting Decision Rules",
    summary:
      "When NPV, IRR, and Payback Period disagree about a project, NPV wins — because it's the only one of the three that gets both the size and the timing of every cash flow right.",
    definition: (
      <p>
        <strong>Capital budgeting decision rules</strong> are the criteria
        used to decide whether a specific investment or project is worth
        undertaking, by comparing its{" "}
        <Link
          href="/finance/net-present-value"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Net Present Value
        </Link>
        ,{" "}
        <Link
          href="/finance/internal-rate-of-return"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Internal Rate of Return
        </Link>
        , and{" "}
        <Link
          href="/finance/payback-period"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Payback Period
        </Link>{" "}
        against some benchmark — most commonly a required rate of return,
        sometimes called a <strong>hurdle rate</strong>: the minimum return
        an investment has to clear to be worth doing instead of the
        next-best alternative use of that money.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          NPV, IRR, and Payback Period all describe the same underlying set
          of cash flows, but they each answer a slightly different
          question: NPV asks how much value a project creates in
          today&apos;s dollars at a given required return; IRR asks what
          rate of return the project actually delivers; Payback Period asks
          how long it takes to get the money back, ignoring discounting
          entirely. For most straightforward projects — a single upfront
          cost followed by steady positive cash flows — all three point to
          the same conclusion, so it rarely matters which one you lead
          with.
        </p>
        <p>
          The trouble is that &quot;most straightforward projects&quot;
          isn&apos;t &quot;every project.&quot; NPV and IRR can rank two
          projects differently when they&apos;re of very different scale;
          Payback Period ignores everything after the payback point and
          the time value of money entirely, so it can favor a project the
          other two would rank lower, or vice versa. A real decision-maker
          facing a genuine choice has to know which measure to trust when
          they don&apos;t all agree — waiting for unanimous agreement
          isn&apos;t always an option.
        </p>
        <p>
          The standard rule resolves this by treating NPV as the primary
          decision criterion whenever the measures conflict, because
          it&apos;s the only one of the three that correctly accounts for
          both the size and the timing of every cash flow, discounted at
          the actual required rate of return (see{" "}
          <Link
            href="/finance/time-value-of-money"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Time Value of Money
          </Link>
          ). IRR can be misled by unusual cash flow patterns or by ignoring
          project scale; Payback Period ignores discounting and everything
          after the payback point by design. NPV has neither of those
          blind spots — it directly answers the question that actually
          matters: does this project make the decision-maker better off,
          in today&apos;s dollars, than the next-best alternative use of
          the same money? Accept when NPV is positive, reject when
          it&apos;s negative — and when IRR or Payback Period seem to
          suggest otherwise, that&apos;s a signal to look more closely at
          why, not a reason to override NPV.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Accept if NPV > 0   (equivalently: IRR > required/hurdle rate)
Reject if NPV < 0   (equivalently: IRR < required/hurdle rate)`}
        </pre>
        <p>
          Payback Period is typically used as a secondary liquidity check —
          how long money stays tied up — rather than the primary
          accept/reject criterion. When NPV and IRR disagree about which of
          two projects is better, rather than whether a single project
          clears the bar at all, NPV is still the one to trust, because it
          reports value in dollars rather than a rate, and dollars are what
          actually get spent or reinvested.
        </p>
        <p>
          Where does the required/hurdle rate itself come from? For a
          company evaluating its own projects, it&apos;s usually the
          company&apos;s{" "}
          <Link
            href="/finance/cost-of-capital"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Cost of Capital (WACC)
          </Link>{" "}
          — the blended return needed to satisfy both its lenders and its
          shareholders. A project that can&apos;t clear WACC isn&apos;t
          earning back the cost of the money funding it, regardless of what
          NPV, IRR, or Payback Period individually suggest.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Two projects, each costing <strong>$5,000</strong> upfront,
          evaluated at an 8% hurdle rate:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Project A: $6,000 back after 1 year
  NPV ≈ $556      IRR ≈ 20.0%      Payback ≈ 0.83 years

Project B: $1,500 a year for 6 years
  NPV ≈ $1,934    IRR ≈ 19.9%      Payback ≈ 3.33 years`}
        </pre>
        <p>
          By IRR and Payback Period, Project A looks (very slightly)
          better — a marginally higher rate of return, and capital back
          more than four times faster. But Project B creates well over
          three times as much value in today&apos;s dollars. The standard
          rule says trust NPV: Project B is the better choice, because
          total value created matters more than the rate of return or the
          speed of getting capital back, once a project has already
          cleared the hurdle rate. Try the{" "}
          <Link
            href="/calculators/capital-budgeting-decision"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Capital Budgeting Decision Calculator
          </Link>{" "}
          with your own project&apos;s numbers.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "If IRR is higher, the project is always better.",
        reality:
          "As the worked example shows, a project with a higher IRR can still create less total value — a lower NPV — than an alternative with a slightly lower IRR but larger cash flows. Rate of return and total value created are different things.",
      },
      {
        claim: "A shorter payback period means a project is definitely the safer or better choice.",
        reality:
          "Payback period ignores everything that happens after the money is recovered. A fast-payback project that stops producing value soon after can create far less total value than a slower one that keeps paying off for years.",
      },
      {
        claim: "If NPV, IRR, and Payback Period disagree, the project's numbers must be wrong.",
        reality:
          "Disagreement between the three is a normal, expected result of the fact that they measure different things — dollar value, rate, and time. It isn't a sign of an error, and when it happens, NPV is the one to lean on.",
      },
    ],
    relatedConcepts: [
      { label: "Net Present Value", href: "/finance/net-present-value" },
      {
        label: "Internal Rate of Return (IRR)",
        href: "/finance/internal-rate-of-return",
      },
      { label: "Payback Period", href: "/finance/payback-period" },
      { label: "Time Value of Money", href: "/finance/time-value-of-money" },
      { label: "Cost of Capital (WACC)", href: "/finance/cost-of-capital" },
    ],
    relatedCalculator: {
      label: "Capital Budgeting Decision Calculator",
      href: "/calculators/capital-budgeting-decision",
    },
  },

  "stocks-vs-bonds": {
    pillar: "finance",
    slug: "stocks-vs-bonds",
    title: "Stocks vs. Bonds",
    summary:
      "A bond makes you a lender to a company, owed a fixed schedule of payments; a stock makes you an owner, with no promised payment at all but a direct share in everything the company earns.",
    definition: (
      <div className="space-y-3">
        <p>
          A <strong>bond</strong> is a loan — buying one makes you a lender
          to whoever issued it (a company or a government), entitled to a{" "}
          fixed schedule of interest payments and the return of your
          principal at maturity, exactly as described in{" "}
          <Link
            href="/finance/bond-valuation"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Bond Valuation
          </Link>
          . The issuer owes you that schedule regardless of how well or
          poorly the business actually performs.
        </p>
        <p>
          A <strong>stock</strong> is <strong>equity</strong> — buying one
          makes you a part-owner of the company, per{" "}
          <Link
            href="/finance/capital-structure"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Capital Structure
          </Link>
          . There&apos;s no promised payment schedule at all: what a stock
          is worth, and whether it pays you anything, depends entirely on
          how the business actually performs and what other investors are
          willing to pay for a share of it.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Every company financing itself has to offer outside investors
          one of two fundamentally different deals, per{" "}
          <Link
            href="/finance/capital-structure"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Capital Structure
          </Link>
          : a fixed claim (lend money, get a promised return, get repaid
          before anyone else if things go wrong) or a residual claim (own a
          slice of the company, get paid only what&apos;s left over after
          every fixed obligation is met, but keep all the further upside if
          the company does exceptionally well). Bonds are the fixed claim;
          stocks are the residual claim. Both exist because different
          investors want different things — some want predictable income
          and are willing to give up the unlimited upside for it, others
          want to share fully in a company&apos;s growth and are willing to
          accept much less certainty in exchange.
        </p>
        <p>
          This is a direct application of{" "}
          <Link
            href="/finance/risk-and-return"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Risk &amp; Return
          </Link>
          : because a stockholder is paid only after every lender and every
          other fixed obligation is satisfied, stocks are structurally
          riskier than that same company&apos;s bonds — and per Risk &amp;
          Return, they have to offer a higher expected return on average to
          attract anyone willing to accept that added risk. Historically,
          diversified stock portfolios have outperformed bonds over long
          time horizons precisely because of this extra risk, not despite
          it.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A company raises money by issuing both a bond and stock. A bond
          holder who lent $1,000 at 5% interest is owed exactly{" "}
          <strong>$50 a year</strong>, plus their $1,000 back at maturity —
          whether the company has an excellent year or a mediocre one. A
          shareholder who put in $1,000 is owed nothing specific at all: in
          a great year, the stock might be worth $1,400; in a bad year, it
          might be worth $700, or the company could even go under and the
          shareholder could be paid nothing, after lenders are repaid
          first.
        </p>
        <p>
          Same company, same $1,000 investment — the bond holder traded
          away the big upside for a predictable, contractually promised
          return; the shareholder traded away that certainty for
          unlimited upside and a share of whatever&apos;s genuinely left
          over.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Stocks are just riskier bonds.",
        reality:
          "They're structurally different claims, not points on the same scale. A bond is a contractual promise to pay a fixed amount; a stock is ownership with no promised payment of any kind — the 'extra risk' in a stock comes from having no fixed claim at all, not from a bond-like promise that's simply less reliable.",
      },
      {
        claim: "A company's stock and its bonds always move together.",
        reality:
          "They can diverge significantly. A company under financial stress might see its stock collapse while its bonds hold up reasonably well, because bondholders are legally first in line to be repaid — the two securities carry genuinely different risk.",
      },
      {
        claim: "Bonds are risk-free.",
        reality:
          "Bonds are lower-risk than that same issuer's stock, not risk-free. A bond issuer can still default, and per Real vs. Nominal Returns, even a government bond carries inflation risk to its real purchasing power.",
      },
    ],
    relatedConcepts: [
      { label: "Risk & Return", href: "/finance/risk-and-return" },
      { label: "Capital Structure (Debt vs. Equity)", href: "/finance/capital-structure" },
      { label: "Bond Valuation", href: "/finance/bond-valuation" },
      {
        label: "Index Funds & Market Efficiency",
        href: "/finance/index-funds-and-market-efficiency",
      },
    ],
  },

  "index-funds-and-market-efficiency": {
    pillar: "finance",
    slug: "index-funds-and-market-efficiency",
    title: "Index Funds & Market Efficiency",
    summary:
      "Consistently picking winning stocks is far harder than it looks, because any easy, safe way to beat the market gets competed away — which is exactly why owning a low-cost slice of the whole market is a reasonable default for most investors.",
    definition: (
      <div className="space-y-3">
        <p>
          A <strong>market</strong> is <strong>efficient</strong> to the
          extent that current prices already reflect all the publicly
          available information about an asset — new information gets
          absorbed into prices quickly as investors trade on it, rather
          than sitting around unexploited.
        </p>
        <p>
          An <strong>index fund</strong> is a fund that simply buys a
          broad, representative slice of an entire market (or a large
          segment of it) — hundreds or thousands of companies at once —
          instead of trying to pick which individual companies will do
          best.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          If a stock were obviously about to rise in price — a genuine,
          well-known bargain — investors would rush to buy it right away,
          which per{" "}
          <Link
            href="/foundations/supply-and-demand"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Supply &amp; Demand
          </Link>{" "}
          would push its price up immediately, until it was no longer
          such an obvious bargain. Any easy, low-risk way to beat the
          market gets bought away almost as soon as enough people notice
          it — which is exactly why finding one consistently, year after
          year, is so difficult even for full-time professional investors
          with enormous resources.
        </p>
        <p>
          This connects directly to{" "}
          <Link
            href="/finance/risk-and-return"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Risk &amp; Return
          </Link>
          : if there were a reliable way to earn a higher return without
          taking on any extra risk, it wouldn&apos;t stay available for
          long — money would flood toward it until the opportunity was
          gone. So on average, most professional stock-pickers don&apos;t
          reliably beat a simple, low-cost index fund that just owns the
          whole market, after their fees are accounted for — not because
          they aren&apos;t skilled, but because so many skilled people are
          all competing for the same mispricings that few are left
          uncorrected for long.
        </p>
        <p>
          Index funds also deliver{" "}
          <Link
            href="/finance/diversification"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Diversification
          </Link>{" "}
          automatically and cheaply: owning a slice of hundreds or
          thousands of companies at once means one company&apos;s bad news
          barely moves the total, exactly the idiosyncratic-risk-canceling
          effect that page describes — without having to research and buy
          each company individually.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Two investors each put <strong>$10,000</strong> into the stock
          market for 20 years. One spends significant time and money trying
          to pick individual winning stocks, paying a manager 1.5% a year
          in fees to do so. The other simply buys a low-cost index fund
          charging 0.1% a year and holds it the whole time.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`If both portfolios earn the same underlying 8% return before fees:
  Stock-picker (8% − 1.5% fees = 6.5% net):  $10,000 → ≈ $35,236 after 20 years
  Index fund (8% − 0.1% fees = 7.9% net):    $10,000 → ≈ $45,755 after 20 years`}
        </pre>
        <p>
          Even with identical underlying performance, the 1.4 percentage
          point fee gap alone costs the stock-picker over $10,500 here —
          and that&apos;s before accounting for the very real chance the
          stock-picker&apos;s choices underperform the market average
          rather than just matching it.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Market efficiency means stock prices are always exactly 'correct.'",
        reality:
          "It means prices quickly absorb available information, not that they're perfectly accurate at every moment. Prices can still be wrong, sometimes badly — efficiency just means it's very hard to know in advance, and consistently, which direction they're wrong in.",
      },
      {
        claim: "If markets are efficient, nobody can ever beat the market.",
        reality:
          "Some investors do beat the market in any given period, including by genuine skill and some by luck alone. The claim is narrower: doing so reliably and consistently, over and over, after fees, is extremely difficult — not that it's mathematically impossible for anyone, ever.",
      },
      {
        claim: "An index fund is a single 'safe' investment.",
        reality:
          "An index fund still carries the market's own risk in full — if the overall stock market falls, a stock market index fund falls right along with it. What it removes is idiosyncratic, single-company risk and stock-picking risk, not market-wide risk. See Diversification.",
      },
    ],
    relatedConcepts: [
      { label: "Diversification", href: "/finance/diversification" },
      { label: "Risk & Return", href: "/finance/risk-and-return" },
      { label: "Supply & Demand", href: "/foundations/supply-and-demand" },
      { label: "Stocks vs. Bonds", href: "/finance/stocks-vs-bonds" },
    ],
  },

  "behavioral-finance": {
    pillar: "finance",
    slug: "behavioral-finance",
    title: "Behavioral Finance",
    summary:
      "Real investors don't behave like the perfectly rational decision-makers traditional finance theory assumes — predictable psychological patterns, like losses hurting more than equivalent gains feel good, lead to real, costly mistakes.",
    definition: (
      <p>
        <strong>Behavioral finance</strong> studies how real investors&apos;
        psychological biases and emotions cause them to make decisions that
        deviate — often in predictable, repeated ways — from what a purely
        rational decision-maker would do. Traditional finance theory (the
        kind behind Risk &amp; Return, Net Present Value, and most of the
        rest of this site) generally assumes rational actors; behavioral
        finance studies the real, systematic ways actual human behavior
        departs from that assumption.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Models like{" "}
          <Link
            href="/finance/risk-and-return"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Risk &amp; Return
          </Link>{" "}
          and{" "}
          <Link
            href="/finance/net-present-value"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Net Present Value
          </Link>{" "}
          are genuinely useful, but they assume decision-makers evaluate
          information calmly and consistently. Real people don&apos;t
          always do that, and researchers studying actual investor
          behavior have found specific, recurring psychological patterns
          that lead to worse financial outcomes — patterns worth
          understanding precisely because they&apos;re common enough to
          predict, not because any one person is uniquely bad at investing.
        </p>
        <p>
          The single most well-documented pattern is{" "}
          <strong>loss aversion</strong>: losses tend to feel roughly twice
          as painful as an equivalent gain feels good. Losing $1,000 hurts
          noticeably more than gaining $1,000 feels rewarding, even though
          the dollar amount is identical. That asymmetry, on its own,
          doesn&apos;t sound dangerous — but it quietly drives two very
          costly, very common investing mistakes: panic-selling during a
          downturn (locking in a loss out of proportion to how much the
          underlying investment thesis actually changed), and holding onto
          a losing investment far too long, hoping to &quot;get back to
          even&quot; before selling, rather than objectively reassessing
          whether it&apos;s still worth holding.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          An investor buys a diversified stock index fund at $100 a share
          as part of a long-term retirement plan. A market downturn drags
          it to $60 a share — a 40% paper loss. Loss aversion makes that
          $40-per-share decline feel disproportionately painful, and the
          investor sells everything to &quot;stop the bleeding.&quot;
        </p>
        <p>
          But per{" "}
          <Link
            href="/finance/risk-and-return"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Risk &amp; Return
          </Link>
          , a diversified stock portfolio is exactly the kind of investment
          suited to a long time horizon that can absorb short-term swings
          — nothing about a temporary market-wide decline necessarily means
          the underlying companies are now worth 40% less over the long
          run. By selling at $60, the investor doesn&apos;t just experience
          a paper loss anymore — loss aversion has pushed them into locking
          it in permanently, right before any eventual recovery, purely
          because the decline felt unbearable in the moment.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Behavioral finance means markets are completely irrational and unpredictable.",
        reality:
          "It means individual investors often behave irrationally in specific, recurring, and fairly predictable ways — not that markets as a whole are chaotic. It's an additional, real-world layer on top of the rational models covered elsewhere on this site, not a replacement for them.",
      },
      {
        claim: "Loss aversion just means people don't like losing money, which is obvious.",
        reality:
          "It specifically means losses hurt more than an equivalent gain feels good, not merely that losses feel bad. That asymmetry — not simple risk aversion — is what drives specific, costly, predictable behaviors like panic-selling and holding losing positions too long.",
      },
      {
        claim: "Knowing about these biases is enough to stop them from affecting you.",
        reality:
          "Being aware of loss aversion doesn't make someone immune to feeling it in the moment a portfolio drops 40%. This is exactly why practical tools — automatic contributions, a written long-term plan, broadly diversified index funds — matter: they reduce the number of high-stakes emotional decisions an investor actually has to make in real time.",
      },
    ],
    relatedConcepts: [
      { label: "Risk & Return", href: "/finance/risk-and-return" },
      {
        label: "Index Funds & Market Efficiency",
        href: "/finance/index-funds-and-market-efficiency",
      },
      { label: "Diversification", href: "/finance/diversification" },
    ],
  },
};
