import Link from "next/link";
import type { ConceptPageProps } from "@/lib/types";

export const personalFinanceConcepts: Record<string, ConceptPageProps> = {
  budgeting: {
    pillar: "personal-finance",
    slug: "budgeting",
    title: "Budgeting",
    summary:
      "Deciding in advance where your money goes, instead of finding out after it's already gone — confronting scarcity on purpose rather than by accident.",
    definition: (
      <p>
        <strong>Budgeting</strong> is the practice of planning, in advance,
        how much of your income will go toward different categories of
        spending and saving — rather than spending freely and discovering
        afterward whether there&apos;s anything left over.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Per{" "}
          <Link
            href="/foundations/scarcity-and-opportunity-cost"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Scarcity &amp; Opportunity Cost
          </Link>
          , money is limited, and every dollar spent on one thing is a
          dollar that can&apos;t be spent on something else. Without some
          kind of plan, that trade-off still happens — it just happens
          invisibly, one purchase at a time, and often becomes visible only
          when the money runs out before the month does, or when
          there&apos;s nothing left over for larger goals like an emergency
          fund or retirement.
        </p>
        <p>
          Budgeting brings that invisible trade-off out into the open by
          deciding, ahead of time, how income will be split across
          categories — necessities, wants, and savings — instead of
          discovering the split after the fact, purchase by purchase. This
          doesn&apos;t eliminate the trade-offs scarcity forces; it just
          makes them a deliberate choice instead of an accident, which makes
          it possible to notice and correct a mismatch — like spending too
          much on wants to ever save anything — before it becomes a crisis.
        </p>
        <p>
          One widely used starting point is the &quot;50/30/20&quot;
          framework: roughly 50% of take-home income toward needs (rent,
          groceries, utilities — costs with little real discretion), 30%
          toward wants (dining out, entertainment, discretionary spending),
          and 20% toward savings and paying down debt beyond the minimums.
          It&apos;s a rule of thumb, not a law — someone with high fixed
          costs in an expensive city, or aggressive savings goals, might
          reasonably use very different splits. What matters more than
          matching any specific framework is having some deliberate split
          at all, and adjusting it as circumstances change.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Someone takes home <strong>$4,000</strong> a month. Applying
          50/30/20:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Needs (50%):    $2,000
Wants (30%):    $1,200
Savings (20%):    $800`}
        </pre>
        <p>
          If their actual rent, bills, and groceries add up to $2,600 (65%
          of income), the split immediately reveals a mismatch: they&apos;d
          need to increase income, reduce needs (like cheaper rent), or
          accept a smaller wants/savings allocation than the framework
          suggests. The value isn&apos;t the framework&apos;s specific
          numbers — it&apos;s that the mismatch becomes visible and
          decidable up front, instead of discovered in a bank statement
          mid-month.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Budgeting means restricting yourself and cutting out anything fun.",
        reality:
          "Budgeting is about deciding how much goes toward each category, including wants — the 30% \"wants\" category in the 50/30/20 framework is a deliberate acknowledgment that discretionary spending is a normal, appropriate part of a budget, not something to eliminate.",
      },
      {
        claim: "The 50/30/20 split is the 'correct' budget everyone should use.",
        reality:
          "It's a common starting point, not a universal rule. Someone with unusually high fixed costs, aggressive debt, or specific savings goals may reasonably use very different percentages — what matters is having a deliberate split, not matching this exact one.",
      },
      {
        claim: "Budgeting is only necessary for people who don't earn much.",
        reality:
          "Without a plan, spending tends to expand to match whatever income is available, regardless of how much that income is — a deliberate budget matters at every income level.",
      },
    ],
    relatedConcepts: [
      {
        label: "Scarcity & Opportunity Cost",
        href: "/foundations/scarcity-and-opportunity-cost",
      },
      { label: "Emergency Funds", href: "/personal-finance/emergency-funds" },
    ],
    relatedCalculator: {
      label: "Budget Calculator",
      href: "/calculators/budget",
    },
  },

  "emergency-funds": {
    pillar: "personal-finance",
    slug: "emergency-funds",
    title: "Emergency Funds",
    summary:
      "A cash cushion set aside specifically to cover the unplanned expense or lost income that eventually happens to almost everyone — so a shock doesn't have to become debt.",
    definition: (
      <p>
        An <strong>emergency fund</strong> is money set aside and kept
        easily accessible — not invested in something that could lose value
        or take time to access — specifically to cover unplanned expenses:
        a job loss, a medical bill, a major car or home repair, without
        having to borrow to cover them.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Almost everyone eventually faces some expense they didn&apos;t
          plan for, or a stretch without income they didn&apos;t expect — a
          car repair, a medical bill, a layoff. These aren&apos;t remote,
          unlikely events; over a long enough stretch of time, something
          like this happens to nearly everyone. The real question isn&apos;t
          whether an unplanned expense will happen, but how it gets paid for
          when it does.
        </p>
        <p>
          Without money already set aside for exactly this purpose, the
          most available option is usually debt — a credit card, a payday
          loan — often at a high interest rate. Per{" "}
          <Link
            href="/finance/compound-interest"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Compound Interest
          </Link>
          , the same mechanism that grows savings over time works against a
          borrower with unpaid debt: an emergency covered by high-interest
          debt can end up costing far more than the original expense once
          interest compounds on an unpaid balance. An emergency fund exists
          to remove that need entirely, by having cash already set aside for
          exactly this kind of shock.
        </p>
        <p>
          This is really a form of self-insurance: instead of paying an
          insurer to absorb a risk, you absorb small-to-moderate shocks
          yourself, out of a dedicated cushion, reserving actual insurance
          for the rare, much larger risks — a serious illness, a totaled car
          — that a personal cash cushion realistically couldn&apos;t cover.
          Keeping the cushion in cash rather than{" "}
          <Link
            href="/finance/risk-and-return"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            invested
          </Link>{" "}
          means it isn&apos;t earning what it might otherwise, but
          that&apos;s the price of having it reliably available exactly when
          needed, without having to sell an investment at a bad moment or
          wait for it to become accessible.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Someone has <strong>$2,500</strong> in essential monthly expenses
          (rent, food, utilities, minimum debt payments) and wants a{" "}
          <strong>4-month</strong> cushion.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Target fund size: $2,500 × 4 = $10,000

Currently saved: $3,000
Monthly contribution: $400
Months to target: ($10,000 − $3,000) / $400 ≈ 18 months`}
        </pre>
        <p>
          At $400 a month, it takes about a year and a half to build the
          full cushion — a concrete number to plan around, rather than an
          open-ended goal.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "An emergency fund should be invested in stocks to grow faster.",
        reality:
          "The whole point is that the money needs to be available immediately, without risk of having lost value right when it's needed. Investing it defeats the purpose, even though it means missing out on potential investment growth.",
      },
      {
        claim: "Three to six months of expenses is a strict, one-size-fits-all rule.",
        reality:
          "It's a common range, but the right target depends on how stable someone's income is, whether others depend on them, and how quickly they could replace lost income — unpredictable income might reasonably call for more, very stable dual income for less.",
      },
      {
        claim: "If you have a credit card, you don't need an emergency fund.",
        reality:
          "A credit card can cover a shock in the moment, but at a cost — high-interest debt that compounds against you if it isn't paid off quickly, which is exactly the situation an emergency fund is meant to avoid.",
      },
    ],
    relatedConcepts: [
      { label: "Compound Interest", href: "/finance/compound-interest" },
      { label: "Risk & Return", href: "/finance/risk-and-return" },
      { label: "Budgeting", href: "/personal-finance/budgeting" },
    ],
    relatedCalculator: {
      label: "Emergency Fund Calculator",
      href: "/calculators/emergency-fund",
    },
  },

  "debt-payoff": {
    pillar: "personal-finance",
    slug: "debt-payoff",
    title: "Debt Payoff Strategies",
    summary:
      "When you owe multiple debts, the order you pay them off in changes how much interest you pay in total — and the mathematically best order isn't always the one that actually works for a real person.",
    definition: (
      <p>
        When someone has multiple debts at once, a{" "}
        <strong>debt payoff strategy</strong> is the order in which they
        direct any extra money — beyond each debt&apos;s minimum payment —
        toward paying down the balances. Two common strategies are the{" "}
        <strong>avalanche method</strong> (extra payments go to the
        highest-interest-rate debt first) and the{" "}
        <strong>snowball method</strong> (extra payments go to the smallest
        balance first).
      </p>
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
          , interest doesn&apos;t just apply to the original amount
          borrowed — it compounds on whatever balance remains, which means
          the same mechanism that grows a saver&apos;s balance over time
          also grows a borrower&apos;s balance if it isn&apos;t paid off.
          When someone owes multiple debts at different interest rates,
          every dollar of extra payment could go toward any one of them, and
          which one it goes toward changes how much total interest
          accumulates before everything is paid off.
        </p>
        <p>
          The avalanche method directs extra payments to whichever debt has
          the highest interest rate, regardless of its size. Mathematically,
          this minimizes total interest paid, because it stops the
          fastest-compounding balance from growing first. The snowball
          method instead directs extra payments to whichever debt has the
          smallest balance, regardless of its rate — mathematically not
          optimal, but it clears entire debts faster, producing an early,
          visible win that can be the difference between someone staying
          consistent with a payoff plan and giving up partway through.
        </p>
        <p>
          Neither method is objectively &quot;correct&quot; for every
          person, because a debt payoff plan only works if someone actually
          sticks with it. Avalanche saves more money on paper, assuming
          someone follows through until the end; snowball can save less in
          total interest but succeed more often in practice, because
          clearing a whole debt early feels different from watching a
          large, still-outstanding balance shrink slowly. The better
          strategy is whichever one someone will actually complete.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Two debts: a <strong>$1,000</strong> balance at{" "}
          <strong>8%</strong>, and a <strong>$5,000</strong> balance at{" "}
          <strong>20%</strong>, with $200 a month available beyond minimum
          payments.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Avalanche: extra $200 goes to the $5,000 debt first (higher rate),
           even though it's the bigger balance — takes longer to
           see any single debt fully gone, but saves more interest.

Snowball:  extra $200 goes to the $1,000 debt first (smaller
           balance), clearing it in a few months — an early win —
           before moving on to the $5,000 debt, at slightly more
           total interest than avalanche.`}
        </pre>
        <p>
          Try the{" "}
          <Link
            href="/calculators/debt-payoff"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Debt Payoff Calculator
          </Link>{" "}
          with your own balances, rates, and minimums to see the exact time
          and interest difference between the two strategies.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "The avalanche method is always the right choice because it's mathematically optimal.",
        reality:
          "It only saves more money if someone actually sticks with the plan until every debt is paid off. A technically optimal plan that gets abandoned halfway through can cost more in practice than a suboptimal plan that gets finished.",
      },
      {
        claim: "Minimum payments alone will eventually pay off debt in a reasonable time.",
        reality:
          "Minimum payments are often set low enough that a large share of each payment goes to interest, dragging out payoff for years and costing far more in total interest than paying any extra amount consistently.",
      },
      {
        claim: "It doesn't matter which debt gets extra payments, as long as you're paying more than the minimum somewhere.",
        reality:
          "Because higher-rate debt compounds faster, directing extra payments to a low-rate debt while a high-rate debt keeps growing can mean paying substantially more total interest than a deliberate avalanche or snowball order.",
      },
    ],
    relatedConcepts: [
      { label: "Compound Interest", href: "/finance/compound-interest" },
      { label: "Amortization", href: "/finance/amortization" },
      { label: "Budgeting", href: "/personal-finance/budgeting" },
    ],
    relatedCalculator: {
      label: "Debt Payoff Calculator",
      href: "/calculators/debt-payoff",
    },
  },

  "savings-goals": {
    pillar: "personal-finance",
    slug: "savings-goals",
    title: "Savings Goals",
    summary:
      "Working backward from a target amount and date, instead of just saving whatever happens to be left over — using compounding to figure out exactly how much needs to go in along the way.",
    definition: (
      <p>
        A <strong>savings goal</strong> approach means starting from a
        specific target — a dollar amount you want to have by a specific
        future date — and working backward to figure out how much needs to
        be saved regularly to get there, rather than saving whatever
        happens to be left over at the end of the month and hoping it adds
        up in time.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Per{" "}
          <Link
            href="/finance/time-value-of-money"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Time Value of Money
          </Link>
          , money set aside today and left to grow becomes worth more
          later, and that relationship works in both directions. Most of
          what&apos;s covered elsewhere on this site asks a
          forward-looking question: given what you save now, what will it
          become later? A savings goal asks the reverse: given what you
          need to become later, how much has to happen now?
        </p>
        <p>
          This distinction matters because &quot;save whatever&apos;s left
          over&quot; isn&apos;t actually a plan — it&apos;s whatever
          remains after every other spending decision has already been
          made, and it can easily fall short of a real target with no
          warning until the deadline arrives. Working backward from a
          specific goal and date turns the vague intention &quot;I should
          save for X&quot; into a concrete number: an exact amount that
          needs to be set aside each period, given how much time is
          available and how much that money is expected to grow along the
          way (see{" "}
          <Link
            href="/finance/compound-interest"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Compound Interest
          </Link>
          ) in the meantime.
        </p>
        <p>
          Because growth compounds, starting earlier dramatically lowers
          the amount that needs to be contributed each period to reach the
          same goal — the earlier money has more time to grow on its own,
          so less new money has to do the work directly. This is the same
          reason a small difference in when someone starts saving can
          produce a large difference in the monthly amount required, even
          for an identical target and an identical assumed return.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Target: <strong>$50,000</strong> in <strong>10 years</strong>,
          starting from <strong>$5,000</strong> already saved, at a{" "}
          <strong>6% annual return</strong>, compounded monthly.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Required monthly contribution: ≈ $250/month

If you wait 5 years to start instead (only 5 years left to the
same $50,000 target):
Required monthly contribution: ≈ $620/month`}
        </pre>
        <p>
          Waiting 5 years doesn&apos;t just add a little to the required
          contribution — it roughly two-and-a-half times it, because the
          delayed money loses 5 years of growth it can never get back. Try
          the{" "}
          <Link
            href="/calculators/savings-goal"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Savings Goal Calculator
          </Link>{" "}
          with your own target, timeline, and return assumption.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Saving whatever's left over each month is basically the same as having a savings goal.",
        reality:
          "Leftover savings depends entirely on spending in a given month and isn't tied to any specific target or deadline — it can easily fall short with no warning, unlike a goal-backward plan that produces a concrete required contribution up front.",
      },
      {
        claim: "Starting a few years later just means saving a little more each month to catch up.",
        reality:
          "Because of compounding, a shorter time horizon can require dramatically more per month for the same target, not just a little more — as the worked example shows, a 5-year delay more than doubled the required monthly contribution.",
      },
      {
        claim: "A savings goal calculation gives you a guaranteed number.",
        reality:
          "It depends on an assumed rate of return, which isn't guaranteed. A lower actual return than assumed means the target won't be met on schedule without adjusting the contribution.",
      },
    ],
    relatedConcepts: [
      { label: "Time Value of Money", href: "/finance/time-value-of-money" },
      { label: "Compound Interest", href: "/finance/compound-interest" },
      { label: "Budgeting", href: "/personal-finance/budgeting" },
    ],
    relatedCalculator: {
      label: "Savings Goal Calculator",
      href: "/calculators/savings-goal",
    },
  },

  "credit-scores": {
    pillar: "personal-finance",
    slug: "credit-scores",
    title: "Credit Scores",
    summary:
      "A number that summarizes how likely you are to repay borrowed money on time, based on your past borrowing behavior — a stand-in lenders use because they can't personally verify a stranger's trustworthiness.",
    definition: (
      <p>
        A <strong>credit score</strong> is a number — in the US, typically
        ranging from 300 to 850 — that summarizes how likely someone is to
        repay borrowed money on time, based on their history of borrowing
        and repayment. Lenders use it to quickly estimate the risk of
        lending to a particular person, without having to investigate that
        person&apos;s entire financial history by hand.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          A lender deciding whether to extend credit to a stranger faces
          the same basic problem a bank faces when deciding whether to
          trust a business&apos;s self-reported numbers, discussed in{" "}
          <Link
            href="/accounting/audits"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Audits
          </Link>
          : they have no personal, independent way to know how
          trustworthy this particular borrower is. Reviewing every
          applicant&apos;s entire financial history by hand would be far
          too slow and expensive to make lending practical at any real
          scale.
        </p>
        <p>
          A credit score solves this by condensing a person&apos;s
          borrowing and repayment history into a single, standardized
          number, built from factors like: whether payments have
          historically been made on time, how much of their available
          credit someone is currently using, how long they&apos;ve been
          borrowing responsibly, and how much new credit they&apos;ve
          recently sought. This gives a lender a fast, reasonably reliable
          estimate of risk — which, per{" "}
          <Link
            href="/finance/risk-and-return"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Risk &amp; Return
          </Link>
          , directly determines what interest rate a lender needs to
          charge to be compensated for the risk of lending to that
          specific person, or whether to extend credit at all.
        </p>
        <p>
          A credit score also creates a real{" "}
          <Link
            href="/foundations/incentives"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            incentive
          </Link>{" "}
          to borrow responsibly: paying on time and keeping balances low
          is rewarded with cheaper access to credit in the future, while
          missed payments and high balances make future borrowing more
          expensive — the same behavior that created the risk is what
          gets priced into the cost of addressing it.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>
          One of the most important factors is{" "}
          <strong>credit utilization</strong> — how much of your available
          credit you&apos;re currently using:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
          Utilization = Total balances owed / Total credit limit
        </pre>
        <p>
          A commonly cited rule of thumb is to keep utilization under
          roughly 30%, and lower is generally better still — not because
          there&apos;s anything wrong with using credit, but because
          consistently using a large share of your available credit is
          statistically associated with a higher risk of missed payments.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Two people apply for the same $20,000 auto loan. One has always
          paid every bill on time and keeps their credit card balances
          well under 30% of their limits. The other has missed several
          payments in the past two years and regularly maxes out their
          credit cards.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Same $20,000 loan, same lender:
  Strong credit history:  offered 6% interest
  Weak credit history:    offered 14% interest, or declined entirely`}
        </pre>
        <p>
          Same loan amount, same lender — the difference in credit history
          alone can mean thousands of dollars more in interest over the
          life of the loan, or the difference between being approved and
          being turned down.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Checking your own credit score lowers it.",
        reality:
          "Checking your own score is a 'soft inquiry' and doesn't affect it at all. Only certain 'hard inquiries' — when a lender checks your credit because you've applied for new credit — have a small, temporary effect.",
      },
      {
        claim: "Closing an old, unused credit card always helps your score.",
        reality:
          "It can actually hurt it — closing a card reduces your total available credit (raising your utilization ratio on any remaining balances) and can shorten your average account age, both of which can lower your score rather than raise it.",
      },
      {
        claim: "Carrying a balance and paying interest improves your credit score.",
        reality:
          "What matters for your score is paying on time and keeping utilization low, not paying interest. Paying your balance in full every month is generally best for both your score and your wallet.",
      },
    ],
    relatedConcepts: [
      { label: "Risk & Return", href: "/finance/risk-and-return" },
      { label: "Incentives", href: "/foundations/incentives" },
      { label: "Debt Payoff Strategies", href: "/personal-finance/debt-payoff" },
    ],
    relatedCalculator: {
      label: "Credit Utilization Calculator",
      href: "/calculators/credit-scores",
    },
  },

  "buying-vs-renting": {
    pillar: "personal-finance",
    slug: "buying-vs-renting",
    title: "Buying vs. Renting",
    summary:
      "Comparing 'my rent' to 'my mortgage payment' massively understates what buying really costs — a fair comparison has to include ownership costs, opportunity cost, and what you'd actually walk away with either way.",
    definition: (
      <p>
        The <strong>buy-vs-rent decision</strong> compares the total
        financial outcome of renting a home versus buying one over the
        same time horizon — not just comparing a monthly rent check to a
        monthly mortgage payment, but accounting for everything else
        ownership involves (a down payment, property tax, insurance,
        maintenance, and what the home is eventually worth) against
        everything renting involves (rent, and what the money that would
        have gone toward a down payment could have earned instead if
        invested).
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          It&apos;s tempting to compare buying and renting by just looking
          at the two monthly numbers — rent versus mortgage payment — but
          that comparison leaves out most of what actually matters. A
          mortgage payment alone ignores property tax, insurance,
          maintenance, and the upfront down payment. It also ignores{" "}
          <Link
            href="/foundations/scarcity-and-opportunity-cost"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            opportunity cost
          </Link>
          : the down payment is real money that, if you rented instead,
          could have been invested and grown on its own, per{" "}
          <Link
            href="/finance/compound-interest"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Compound Interest
          </Link>
          , rather than sitting locked up in a house.
        </p>
        <p>
          At the same time, renting isn&apos;t simply &quot;cheaper&quot;
          either: a mortgage payment is partly <strong>forced
          savings</strong> — a portion of every payment pays down
          principal you keep as equity, per{" "}
          <Link
            href="/finance/amortization"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Amortization
          </Link>
          — while rent is pure consumption of housing with nothing left
          over afterward. A fair comparison has to weigh both sides
          honestly: what a renter could build by investing the difference,
          against what an owner builds through home equity and any
          appreciation in the home&apos;s value.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>
          Rather than comparing monthly payments, a fair comparison tracks{" "}
          <strong>ending net worth</strong> under each path over the same
          horizon:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Owner's ending net worth  = Home value at the end − assumed selling costs
                             (the mortgage is assumed paid off by then)

Renter's ending net worth = [Down payment, invested and grown]
                             + [Monthly gap between owner's true cost and
                                rent, invested every month and grown]`}
        </pre>
        <p>
          The &quot;monthly gap&quot; captures the fact that an
          owner&apos;s true monthly cost — mortgage payment plus property
          tax, insurance, and maintenance — is often higher than rent on
          an equivalent home. A renter who actually invests that
          difference every month, instead of just spending it, is the
          honest comparison to an owner who&apos;s building equity instead.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A <strong>$400,000</strong> home with <strong>20%</strong> down
          ($80,000), a <strong>6%</strong> 30-year mortgage, versus renting
          an equivalent home for <strong>$1,800/month</strong>. Assume{" "}
          <strong>2%</strong>/year combined property tax, insurance, and
          maintenance, <strong>3%</strong>/year home appreciation, and a{" "}
          <strong>7%</strong>/year return if the difference is invested
          instead, over the full 30 years.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Owner's true monthly cost: ≈ $2,585 (mortgage payment + tax/insurance/maintenance)
Monthly gap vs. $1,800 rent: ≈ $785 — what a renter could invest instead

Home value after 30 years: ≈ $970,905
Owner's ending net worth (after ~7% selling costs): ≈ $903,142

Renter's ending net worth (down payment + monthly gap, both invested at 7%): ≈ $1,607,056

Renting and investing the difference wins by ≈ $703,914 here.`}
        </pre>
        <p>
          This isn&apos;t a claim that renting always wins — it wins here
          specifically because the assumed 7% investment return is well
          above the 3% home appreciation rate. Lower the assumed
          investment return, raise the appreciation rate, or shorten the
          time horizon in the{" "}
          <Link
            href="/calculators/buying-vs-renting"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Buying vs. Renting Calculator
          </Link>{" "}
          and the answer can flip entirely — the honest answer is
          &quot;it depends on these specific numbers,&quot; not a fixed
          rule.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Renting is always 'throwing money away' compared to buying.",
        reality:
          "As the worked example shows, a renter who actually invests the difference between rent and the true cost of owning can end up ahead — sometimes well ahead — depending on how investment returns compare to home appreciation. Renting isn't inherently wasteful; it just builds wealth differently.",
      },
      {
        claim: "The right comparison is just monthly rent versus the mortgage payment.",
        reality:
          "The mortgage payment alone leaves out property tax, insurance, maintenance, and the opportunity cost of the down payment — all of which materially change the comparison, sometimes by hundreds of thousands of dollars over a long horizon.",
      },
      {
        claim: "Buying is always the financially 'responsible' choice and renting is always the frivolous one.",
        reality:
          "Which one builds more wealth depends entirely on the specific numbers involved — interest rates, expected appreciation, expected investment returns, and how long you'll stay — not on a general rule that one is inherently more responsible than the other.",
      },
    ],
    relatedConcepts: [
      { label: "Amortization", href: "/finance/amortization" },
      {
        label: "Scarcity & Opportunity Cost",
        href: "/foundations/scarcity-and-opportunity-cost",
      },
      { label: "Compound Interest", href: "/finance/compound-interest" },
      { label: "First Home Purchase", href: "/personal-finance/first-home-purchase" },
    ],
    relatedCalculator: {
      label: "Buying vs. Renting Calculator",
      href: "/calculators/buying-vs-renting",
    },
  },

  "insurance-basics": {
    pillar: "personal-finance",
    slug: "insurance-basics",
    title: "Insurance Basics",
    summary:
      "Insurance trades a small, certain cost (the premium) for protection against a large, rare, and potentially devastating loss — a deliberate trade of expected value for reduced risk, not a bet designed to be profitable for you.",
    definition: (
      <p>
        <strong>Insurance</strong> is a way to trade a small, predictable,
        certain cost — the <strong>premium</strong> — for protection
        against a large, uncertain, and comparatively rare potential loss.
        Instead of facing the full, unpredictable cost of a disaster
        directly, you pay a modest, known amount regularly so that someone
        else absorbs that risk instead.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Some potential losses — a house burning down, a serious medical
          emergency, a costly lawsuit — are so large relative to what most
          people actually have saved that experiencing one directly could
          be financially devastating, even though the chance of it
          happening to any one person in a given year is low. If everyone
          tried to self-insure by saving up for their own personal
          worst-case scenario, most of that money would sit unused for
          most people, while the unlucky few who actually experienced the
          loss would often still come up short.
        </p>
        <p>
          Insurance solves this through <strong>risk pooling</strong>:
          many people facing a similar risk each pay a modest premium into
          a shared pool, and the relatively few people who actually suffer
          the loss in a given period get paid out from it. An insurer
          covering enough similar, largely independent risks can predict
          the total number and cost of claims across the whole pool fairly
          reliably, even though no individual person&apos;s own outcome is
          predictable at all — the same statistical logic behind{" "}
          <Link
            href="/finance/diversification"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Diversification
          </Link>
          , just applied to insurable losses instead of investment
          returns.
        </p>
        <p>
          Because insurers have to cover claims, administrative costs, and
          a profit margin, premiums collected across all policyholders
          exceed total payouts on average — which means insurance
          typically has a <strong>negative expected value</strong> for the
          average policyholder. That&apos;s not a flaw; per{" "}
          <Link
            href="/finance/risk-and-return"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Risk &amp; Return
          </Link>
          , people rationally accept a lower expected outcome in exchange
          for meaningfully lower risk all the time — insurance is that
          same trade-off applied to catastrophic, hard-to-absorb losses
          specifically, not every possible loss. This is also why{" "}
          <strong>deductibles</strong> exist: small, easily-absorbable
          losses aren&apos;t worth pooling (the cost of processing tiny
          claims would eat up the value), so insurance is structured to
          focus on the losses that would actually be catastrophic.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Expected loss = Probability of loss × Size of loss
Load (cost of certainty) = Annual premium − Expected loss`}
        </pre>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A homeowner faces roughly a <strong>0.4%</strong> annual chance
          of a major covered loss (fire, severe storm damage), which would
          cost about <strong>$300,000</strong> to rebuild. Home insurance
          costs <strong>$1,500</strong> a year.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Expected loss = $300,000 × 0.4% = $1,200
Load = $1,500 − $1,200 = $300  (20% above expected loss)`}
        </pre>
        <p>
          On average, this homeowner pays $300 more per year than their
          expected loss would suggest — the cost of transferring a
          catastrophic, unpredictable $300,000 risk onto an insurer,
          rather than absorbing it themselves. For the vast majority of
          years nothing happens and the $1,500 feels &quot;wasted,&quot;
          but the point isn&apos;t to come out ahead in a typical year —
          it&apos;s to never have to personally absorb the $300,000
          rebuild cost in the year it actually happens.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Insurance is a bad deal because you almost always pay in more than you get back.",
        reality:
          "That's true in dollar terms for the average policyholder, but that's not what insurance is for — it exists to reduce catastrophic risk, not to be a profitable bet. Paying a small, certain cost to avoid a rare but devastating loss is a rational trade, not a losing one.",
      },
      {
        claim: "A lower deductible is always better.",
        reality:
          "A lower deductible raises the premium, since the insurer now covers more of the smaller, more frequent losses too — losses that are often easy enough to absorb yourself. A higher deductible paired with a lower premium is often the more efficient choice when the goal is protection against rare, catastrophic losses specifically.",
      },
      {
        claim: "Insurance companies make money by finding reasons not to pay legitimate claims.",
        reality:
          "Insurers plan to pay claims regularly and reliably — that's the entire product. They're profitable because, across a large enough pool of similar risks, total premiums collected reliably exceed total claims paid plus costs, thanks to the law of large numbers, not because of withheld payouts.",
      },
    ],
    relatedConcepts: [
      { label: "Diversification", href: "/finance/diversification" },
      { label: "Risk & Return", href: "/finance/risk-and-return" },
      { label: "Emergency Funds", href: "/personal-finance/emergency-funds" },
    ],
    relatedCalculator: {
      label: "Expected Value of Insurance Calculator",
      href: "/calculators/insurance-basics",
    },
  },

  "first-home-purchase": {
    pillar: "personal-finance",
    slug: "first-home-purchase",
    title: "First Home Purchase",
    summary:
      "A mortgage is usually the largest debt most people ever take on, and a home the largest single purchase — getting it right means treating pre-approval as a ceiling, not a target, and budgeting for costs beyond the down payment.",
    definition: (
      <p>
        A <strong>first home purchase</strong> combines several ideas
        covered elsewhere on this site into one large, high-stakes
        decision: how much home you can genuinely afford (not just what a
        lender will approve), what a mortgage actually costs over time (
        <Link
          href="/finance/amortization"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Amortization
        </Link>
        ), whether buying beats renting for your specific situation (
        <Link
          href="/personal-finance/buying-vs-renting"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Buying vs. Renting
        </Link>
        ), and how to protect yourself financially before taking on that
        much debt (
        <Link
          href="/personal-finance/emergency-funds"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Emergency Funds
        </Link>
        ).
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          A mortgage is usually the largest debt most people ever take on,
          and a home is usually the largest single purchase of their
          life. The stakes of getting this particular decision wrong —
          overextending on monthly payments, buying without enough cash
          reserve left over, or treating a lender&apos;s pre-approval
          amount as a target instead of a ceiling — are much higher than
          most everyday financial decisions, which is why it&apos;s worth
          deliberately walking through it rather than treating it like any
          other purchase.
        </p>
        <p>
          A lender&apos;s pre-approval amount reflects that lender&apos;s
          own risk tolerance and debt-to-income limits — it is not a
          personalized judgment about what&apos;s actually comfortable for
          your budget and your other goals. Per{" "}
          <Link
            href="/personal-finance/budgeting"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Budgeting
          </Link>
          &apos;s 50/30/20 framing, a mortgage payment sized right at the
          edge of what a lender will approve can consume most or all of
          the &quot;needs&quot; category on its own, leaving little room
          for anything else — including the emergency fund a new homeowner
          needs more than ever.
        </p>
        <p>
          That last point matters more than it might seem: once you own a
          home, unpredictable maintenance costs — a broken furnace, a
          roof leak, a failed water heater — become entirely your
          responsibility in a way they never were as a renter. Per{" "}
          <Link
            href="/personal-finance/emergency-funds"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Emergency Funds
          </Link>
          , the right target fund size often needs to grow after buying a
          home, not shrink just because the down payment used up a lot of
          cash.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          A household earning enough take-home pay to comfortably follow
          the 50/30/20 budgeting framework gets pre-approved for a home
          with a $2,800 monthly mortgage payment — the maximum the lender
          will allow.
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`Buying at the full pre-approved amount:
  $2,800 mortgage payment alone consumes nearly the entire "needs" budget,
  leaving little room for property tax, insurance, maintenance, or an
  emergency fund contribution.

Buying a more modest home instead ($2,100/month mortgage):
  Leaves real room in the budget for ownership costs beyond the mortgage,
  plus continued emergency fund contributions after the down payment.`}
        </pre>
        <p>
          Both homes were within what the lender was willing to approve —
          only one of them actually fits comfortably within the
          household&apos;s own budget once every cost of ownership, not
          just the mortgage payment, is accounted for.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Getting pre-approved for a certain amount means you should spend right up to that amount.",
        reality:
          "Pre-approval reflects a lender's risk tolerance and debt-to-income limits, not a personalized read on what's comfortable for your own budget and other goals — see Budgeting.",
      },
      {
        claim: "Once the down payment is made, you're financially set for homeownership.",
        reality:
          "Unpredictable maintenance costs are a real, ongoing part of owning a home that renters don't face directly — see Emergency Funds, whose target often needs to grow after buying, not shrink.",
      },
      {
        claim: "A 20% down payment is always the right amount to put down.",
        reality:
          "Putting down more than necessary lowers monthly payments and can avoid extra mortgage insurance costs, but it also ties up capital that could otherwise be invested or kept as a liquidity cushion — see Buying vs. Renting for how that trade-off is actually weighed.",
      },
    ],
    relatedConcepts: [
      { label: "Buying vs. Renting", href: "/personal-finance/buying-vs-renting" },
      { label: "Emergency Funds", href: "/personal-finance/emergency-funds" },
      { label: "Amortization", href: "/finance/amortization" },
      { label: "Budgeting", href: "/personal-finance/budgeting" },
    ],
    relatedCalculator: {
      label: "Mortgage Calculator",
      href: "/calculators/mortgage",
    },
  },
};
