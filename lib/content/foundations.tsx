import Link from "next/link";
import type { ConceptPageProps } from "@/lib/types";

export const foundationsConcepts: Record<string, ConceptPageProps> = {
  "scarcity-and-opportunity-cost": {
    pillar: "foundations",
    slug: "scarcity-and-opportunity-cost",
    title: "Scarcity & Opportunity Cost",
    summary:
      "Why every choice has a cost, even when no money changes hands: picking one option means giving up whatever the next-best option would have gotten you.",
    definition: (
      <div className="space-y-3">
        <p>
          <strong>Scarcity</strong> is the basic fact that resources — money,
          time, energy, raw materials — are limited, while the things people
          want to do with them are not. There&apos;s never enough of
          everything for everyone to do everything.
        </p>
        <p>
          <strong>Opportunity cost</strong> is what you give up by choosing
          one option instead of another: the value of the next-best
          alternative you didn&apos;t pick. Every time scarcity forces a
          choice, opportunity cost is the price of that choice — measured not
          necessarily in dollars, but in whatever you gave up to get what you
          chose.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          If resources were unlimited — infinite money, infinite time,
          infinite of everything — choosing one thing would never require
          giving up another; you could just have it all. But nothing works
          that way: a dollar spent on one thing can&apos;t also be spent on
          something else, and an hour spent on one activity can&apos;t also
          be spent on another. Scarcity is the reason choices exist at all.
        </p>
        <p>
          Once scarcity forces a choice, there has to be some way to weigh
          what you&apos;re gaining against what you&apos;re giving up.
          Opportunity cost is that comparison: it names the value of the best
          alternative you passed up. It&apos;s worth tracking because the
          sticker price of a decision is often not the full cost — the real
          cost includes what that same money, time, or effort could have done
          instead.
        </p>
        <p>
          This idea sits underneath nearly every financial decision, because
          money spent or held one way is money that can&apos;t be spent,
          saved, or invested another way. It&apos;s exactly why a concept
          like{" "}
          <Link
            href="/finance/time-value-of-money"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Time Value of Money
          </Link>{" "}
          exists: a dollar today has an opportunity cost precisely because it
          could be put to work right away — earning or saving something —
          instead of sitting idle or arriving later.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Say you have <strong>$20</strong> of saved-up allowance. You&apos;re
          deciding between buying a video game right now, or leaving the $20
          in a savings account that pays 5% a year.
        </p>
        <p>
          If you buy the game, the $20 is gone from the account — a year from
          now it would otherwise have grown to $21. That $1 is the
          opportunity cost of buying the game today: the amount you gave up
          by not choosing the alternative.
        </p>
        <p>
          The same logic applies to time, not just money. If you spend a free
          Saturday afternoon watching TV instead of working a part-time shift
          that pays $15 an hour, the opportunity cost of that afternoon is
          the money you didn&apos;t earn — even though no cash ever left your
          wallet.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Opportunity cost only applies to money.",
        reality:
          "It applies to anything scarce, including time and energy. Choosing to spend an afternoon on one activity has an opportunity cost even when no money is involved, because that same afternoon could have gone toward something else.",
      },
      {
        claim: "If something is free, it has no opportunity cost.",
        reality:
          "\"Free\" only means no money changes hands — it doesn't mean nothing was given up. A free event still costs you the time spent attending it, time that could have gone to something else.",
      },
      {
        claim: "Opportunity cost is just another word for regret.",
        reality:
          "Opportunity cost describes what a choice cost at the moment it was made — it applies even to choices you'd happily make again, and even to good decisions, not just ones you regret.",
      },
    ],
    relatedConcepts: [
      { label: "Supply & Demand", href: "/foundations/supply-and-demand" },
      { label: "Time Value of Money", href: "/finance/time-value-of-money" },
    ],
  },

  "supply-and-demand": {
    pillar: "foundations",
    slug: "supply-and-demand",
    title: "Supply & Demand",
    summary:
      "How the price of anything gets set: buyers competing for a limited supply, and sellers competing for buyers, meeting at a price both sides can live with.",
    definition: (
      <div className="space-y-3">
        <p>
          <strong>Demand</strong> is how much of something people want to buy
          at a given price — and how that amount changes as the price
          changes. Usually, the lower the price, the more people want to buy.
        </p>
        <p>
          <strong>Supply</strong> is how much of something sellers are
          willing to offer at a given price. Usually, the higher the price,
          the more sellers are willing to produce or sell.
        </p>
        <p>
          The price a good actually trades at is the point where the amount
          buyers want to buy matches the amount sellers want to sell — often
          called the <em>equilibrium</em> price.
        </p>
      </div>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Because of{" "}
          <Link
            href="/foundations/scarcity-and-opportunity-cost"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            scarcity
          </Link>
          , there&apos;s rarely enough of any good for everyone to have as
          much of it as they&apos;d want for free. Something has to determine
          who gets it and how much. Price is that mechanism: it rations a
          scarce good among everyone who wants it, without anyone having to
          decide by hand who deserves it.
        </p>
        <p>
          Supply and demand describe the two forces that push price toward a
          specific level. If a price is set too low, more people want to buy
          than sellers are willing to provide — buyers compete for the
          limited amount, and price gets bid upward. If a price is set too
          high, sellers have more to offer than buyers want — sellers compete
          for the scarce buyers, and price gets pushed down. Price keeps
          moving until the amount offered and the amount wanted line up.
        </p>
        <p>
          This is why prices carry information: a rising price is usually a
          signal that a good has become more scarce relative to how much
          people want it, and a falling price usually signals the opposite —
          without anyone needing to announce why.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          You&apos;re running a lemonade stand on a hot day. At{" "}
          <strong>$1 a cup</strong>, you sell out of your 20 cups within an
          hour — demand at that price is higher than your supply for the day.
        </p>
        <p>
          The next weekend you make 40 cups instead, still at $1 — but
          it&apos;s a cooler day and you only sell 15. Supply now exceeds
          demand at that price, and cups go to waste.
        </p>
        <p>
          On the next hot day, you raise the price to $1.50: fewer people buy
          per cup, but you still sell all 20 and earn more per cup, because
          demand at the higher price still roughly matches your supply.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Sellers can charge whatever they want.",
        reality:
          "Charging more than buyers are willing to pay just means fewer or no sales. Price is constrained by demand, not freely chosen — a seller can set a price, but the market decides whether anyone buys at it.",
      },
      {
        claim: "More demand always means higher prices.",
        reality:
          "Only if supply doesn't rise to meet it. If sellers can easily produce more, higher demand can be satisfied without the price moving much at all.",
      },
      {
        claim: "Supply and demand only apply to physical goods like lemonade or gas.",
        reality:
          "The same forces set wages (the price of labor) and interest rates (the price of money) — see What an Interest Rate Fundamentally Is.",
      },
    ],
    relatedConcepts: [
      {
        label: "Scarcity & Opportunity Cost",
        href: "/foundations/scarcity-and-opportunity-cost",
      },
      { label: "Incentives", href: "/foundations/incentives" },
      {
        label: "What an Interest Rate Fundamentally Is",
        href: "/foundations/what-is-an-interest-rate",
      },
    ],
  },

  incentives: {
    pillar: "foundations",
    slug: "incentives",
    title: "Incentives",
    summary:
      "People and businesses adjust what they do based on the rewards and costs attached to their choices — change the reward or the cost, and behavior follows.",
    definition: (
      <p>
        An <strong>incentive</strong> is anything — a reward, a cost, a rule,
        a price — that makes one choice more or less attractive relative to
        the alternatives. Because people generally pick the option that
        leaves them best off given the incentives in front of them, changing
        the incentives tends to change the choice people make.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Because of{" "}
          <Link
            href="/foundations/scarcity-and-opportunity-cost"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            scarcity
          </Link>
          , people constantly have to choose between competing uses of their
          limited time and money. Incentives are what tip those choices one
          way or another: raise the reward for doing something, or the cost
          of not doing it, and more people will do it; do the reverse, and
          fewer will.
        </p>
        <p>
          This matters beyond individual choices, because it means the
          design of a system — a tax code, a company&apos;s pay structure, a
          government program — shapes the behavior of everyone operating
          inside it, often more than the system&apos;s stated intent does. A
          rule meant to encourage saving, discourage pollution, or reward
          hard work only works if the incentive it actually creates lines up
          with that intent. When it doesn&apos;t, people still respond
          rationally to the incentive that&apos;s actually there, not the one
          that was intended — which is why policies and pay structures can
          backfire in ways their designers never expected.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Imagine a parent pays $5 per chore completed, with no limit. A kid
          who wants more spending money will likely do more chores — the
          incentive (money) is directly tied to the behavior (chores).
        </p>
        <p>
          Now imagine the parent instead pays a flat $20 allowance every
          week, no matter how many chores get done. The incentive to do any
          individual chore drops sharply, because doing it or skipping it no
          longer changes the payout. The chores probably get done less often
          — not because the kid changed, but because the incentive did.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Incentives are always about money.",
        reality:
          "Non-monetary things — time saved, recognition, avoiding punishment, convenience — are incentives too, and are often stronger motivators than a cash reward.",
      },
      {
        claim: "People always respond to an incentive exactly the way it was designed to work.",
        reality:
          "People respond to the actual incentive created, which sometimes differs from what the designer intended, producing unintended side effects the designer didn't foresee.",
      },
      {
        claim: "Incentives only matter for big decisions like careers or taxes.",
        reality:
          "Incentives shape everyday small choices too — where to shop for a better deal, whether to pack lunch instead of buying it, whether to walk or drive somewhere close.",
      },
    ],
    relatedConcepts: [
      { label: "Supply & Demand", href: "/foundations/supply-and-demand" },
      {
        label: "Marginal vs. Effective Tax Rate",
        href: "/taxation/marginal-vs-effective-tax-rate",
      },
    ],
  },

  inflation: {
    pillar: "foundations",
    slug: "inflation",
    title: "Inflation",
    summary:
      "Prices don't rise on their own — inflation is what happens when the amount of money chasing goods grows faster than the goods themselves.",
    definition: (
      <p>
        <strong>Inflation</strong> is a sustained rise in the general price
        level of an economy — meaning, on average, each unit of currency buys
        a little less than it used to. It isn&apos;t any single price going
        up (that can happen for all sorts of reasons); it&apos;s prices
        rising broadly, across most goods and services, over time.
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Money has no value for its own sake — it&apos;s only useful because
          people accept it in exchange for goods and services. That means the
          &quot;value&quot; of a unit of currency is really about how much it
          can be traded for. When the amount of money circulating in an
          economy grows faster than the amount of goods and services
          available to buy with it, there&apos;s more money competing for the
          same stuff — and, per{" "}
          <Link
            href="/foundations/supply-and-demand"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            supply and demand
          </Link>
          , more buyers chasing a limited supply pushes prices up.
        </p>
        <p>
          This can happen a few different ways: a government or central bank
          adds more money to the economy than the economy&apos;s output
          grows to match, demand for goods rises faster than producers can
          supply them, or the cost of producing goods (materials, wages)
          rises and gets passed on in higher prices. In every case the root
          shape is the same: more money, or more demand, chasing the same or
          fewer goods.
        </p>
        <p>
          Inflation matters for nearly every financial decision because it
          erodes the purchasing power of money that just sits still. A
          dollar held as cash loses a little of its buying power every year
          inflation is positive — a large part of why people invest instead
          of only holding cash, and why{" "}
          <Link
            href="/finance/compound-interest"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            interest
          </Link>{" "}
          needs to outpace inflation to grow real wealth, rather than just
          keep up with rising prices.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Imagine a small island economy with exactly 10 lemonade stands,
          each selling one cup a day, and everyone on the island has $10 to
          spend. At that supply of cups and that amount of money, cups settle
          around $1 each.
        </p>
        <p>
          Now imagine everyone on the island suddenly receives an extra $10 —
          but the island still only produces 10 cups of lemonade a day, no
          more. People now have more money but the same amount of lemonade to
          buy. Buyers start offering more than $1 to make sure they get a
          cup, and the price rises — say, to $2 a cup. Nothing changed about
          the lemonade; what changed is how much money was chasing it.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Inflation happens because businesses get greedy and raise prices.",
        reality:
          "A business raising its price is the symptom, not the cause. Prices rise across the board when more money or demand is chasing the same supply of goods — not because sellers as a group suddenly decided to charge more.",
      },
      {
        claim: "Inflation is always bad for everyone.",
        reality:
          "Low, steady inflation is a normal feature of a growing economy and can even help borrowers, since fixed debts get easier to pay off in real terms. Very high or unpredictable inflation is what causes the real damage.",
      },
      {
        claim: "Inflation means everything gets more expensive by the same amount.",
        reality:
          "Inflation is an average across many goods — some prices rise much faster than the average, others rise slower or even fall, even while the overall price level goes up.",
      },
    ],
    relatedConcepts: [
      { label: "Supply & Demand", href: "/foundations/supply-and-demand" },
      {
        label: "What an Interest Rate Fundamentally Is",
        href: "/foundations/what-is-an-interest-rate",
      },
      { label: "Time Value of Money", href: "/finance/time-value-of-money" },
    ],
  },

  "what-is-an-interest-rate": {
    pillar: "foundations",
    slug: "what-is-an-interest-rate",
    title: "What an Interest Rate Fundamentally Is",
    summary:
      "An interest rate is the price of money itself — what it costs to borrow it, and what you're paid to lend it, for a given amount of time.",
    definition: (
      <p>
        An <strong>interest rate</strong> is the price charged for borrowing
        money, or paid for lending it, expressed as a percentage of the
        amount borrowed or lent per period of time (usually a year). It
        answers the question: what does it cost to use someone else&apos;s
        money for a while, instead of your own?
      </p>
    ),
    whyThisExists: (
      <div className="space-y-3">
        <p>
          Money is something everyone needs but not everyone has enough of at
          the same time: some people have more than they need right now and
          would like to put it to use, while others need more than they
          currently have. Lending bridges that gap — but lending isn&apos;t
          free for the lender. Handing money to a borrower means the lender
          gives up using that money themselves for the loan period (an{" "}
          <Link
            href="/foundations/scarcity-and-opportunity-cost"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            opportunity cost
          </Link>
          ), and takes on the chance the borrower doesn&apos;t pay it all
          back.
        </p>
        <p>
          An interest rate is the price that compensates the lender for both
          of those things, and — like any price — it&apos;s shaped by{" "}
          <Link
            href="/foundations/supply-and-demand"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            supply and demand
          </Link>
          : the pool of money available to lend (savers, banks) against the
          pool of people wanting to borrow it. When more people want to
          borrow than there is money available to lend, rates rise; when
          there&apos;s more money available to lend than people wanting to
          borrow it, rates fall.
        </p>
        <p>
          A rate also has to account for{" "}
          <Link
            href="/foundations/inflation"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            inflation
          </Link>
          : if prices are expected to rise 3% over the year, a lender who
          only charged enough to break even in today&apos;s dollars would
          actually be repaid in dollars worth less than what they lent. So a
          real-world interest rate is roughly built from three pieces
          stacked together: enough to offset expected inflation, enough to
          compensate for giving up the money&apos;s use, and enough to
          compensate for the risk the borrower doesn&apos;t repay in full.
        </p>
      </div>
    ),
    mechanics: (
      <div className="space-y-3">
        <p>
          Roughly speaking, an interest rate can be thought of as three
          pieces added together:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
          {`interest rate ≈ expected inflation + a "real" return for waiting + a risk premium`}
        </pre>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>expected inflation</strong> — compensates the lender for
            prices rising while the loan is outstanding, so they&apos;re
            repaid in money worth roughly as much as what they lent
          </li>
          <li>
            <strong>a &quot;real&quot; return for waiting</strong> —
            compensates for giving up the use of the money itself,
            independent of inflation
          </li>
          <li>
            <strong>a risk premium</strong> — compensates for the chance the
            borrower doesn&apos;t repay in full, or repays late; riskier
            borrowers are charged more
          </li>
        </ul>
        <p>
          This is why a government bond (a very low risk of not being repaid)
          usually carries a lower rate than a credit card (a much higher risk
          of default) even in the same economy at the same time — the
          inflation and waiting pieces are similar, but the risk piece is
          very different.
        </p>
      </div>
    ),
    workedExample: (
      <div className="space-y-3">
        <p>
          Say a friend asks to borrow $100 for a year. If you expect prices
          to rise 3% over that year, and you&apos;d otherwise be fine just
          holding the cash, you might ask for 3% interest just to keep pace
          with inflation — $103 back.
        </p>
        <p>
          But if this friend has missed payments before, you&apos;d
          reasonably want more than $103, to compensate for the real chance
          you don&apos;t get fully repaid — say, 3% for inflation plus
          another 7% for the risk, or $110 back. A bank lending to a stranger
          with an excellent credit history would charge less than that, and a
          bank lending to a stranger with a poor credit history would charge
          more — the same idea, priced differently based on risk.
        </p>
      </div>
    ),
    misconceptions: [
      {
        claim: "Interest rates are just numbers banks pick.",
        reality:
          "Banks operate within a market shaped by the supply of money available to lend, the demand to borrow it, inflation expectations, and risk — they don't set rates in a vacuum.",
      },
      {
        claim: "There's one interest rate in an economy at any given time.",
        reality:
          "Many different rates coexist at once, because risk and loan length differ. A 30-year mortgage, a short-term government bond, and a credit card all carry different risk and time horizons, so they carry different rates.",
      },
      {
        claim: "A higher interest rate always means the lender is being unfair.",
        reality:
          "A higher rate is often just pricing in higher risk (a less reliable borrower) or a longer wait — not unfair treatment on its own.",
      },
    ],
    relatedConcepts: [
      { label: "Compound Interest", href: "/finance/compound-interest" },
      { label: "Inflation", href: "/foundations/inflation" },
      {
        label: "Scarcity & Opportunity Cost",
        href: "/foundations/scarcity-and-opportunity-cost",
      },
    ],
  },
};
