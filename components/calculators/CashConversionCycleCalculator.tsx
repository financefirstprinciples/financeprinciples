"use client";

import { useMemo, useState } from "react";
import CalculatorPage from "@/components/CalculatorPage";
import { calculateCashConversionCycle } from "@/lib/accounting-math";
import { formatUSD } from "@/lib/finance-math";
import { Field, NumberInput, Stat } from "@/components/calculators/shared";

export default function CashConversionCycleCalculator() {
  const [revenue, setRevenue] = useState(240000);
  const [costOfGoodsSold, setCostOfGoodsSold] = useState(72000);
  const [accountsReceivable, setAccountsReceivable] = useState(6000);
  const [accountsPayable, setAccountsPayable] = useState(3000);
  const [inventory, setInventory] = useState(2000);

  const result = useMemo(
    () =>
      calculateCashConversionCycle({
        revenue,
        costOfGoodsSold,
        accountsReceivable,
        accountsPayable,
        inventory,
      }),
    [revenue, costOfGoodsSold, accountsReceivable, accountsPayable, inventory]
  );

  return (
    <CalculatorPage
      title="Cash Conversion Cycle Calculator"
      summary="Find out how many days cash stays tied up in inventory and receivables, net of how long you take to pay suppliers."
      relatedConcept={{
        label: "The Cash Conversion Cycle",
        href: "/accounting/cash-conversion-cycle",
      }}
      inputs={
        <>
          <Field label="Revenue (annual)">
            <NumberInput value={revenue} onChange={setRevenue} prefix="$" min={0} />
          </Field>
          <Field label="Cost of goods sold (annual)">
            <NumberInput
              value={costOfGoodsSold}
              onChange={setCostOfGoodsSold}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Accounts receivable">
            <NumberInput
              value={accountsReceivable}
              onChange={setAccountsReceivable}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Accounts payable">
            <NumberInput
              value={accountsPayable}
              onChange={setAccountsPayable}
              prefix="$"
              min={0}
            />
          </Field>
          <Field label="Inventory">
            <NumberInput value={inventory} onChange={setInventory} prefix="$" min={0} />
          </Field>
        </>
      }
      result={
        <div className="flex h-full flex-col justify-center space-y-6">
          <div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Cash conversion cycle
            </p>
            <p className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
              {result.cashConversionCycle.toFixed(1)} days
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Stat label="DSO" value={`${result.daysSalesOutstanding.toFixed(1)} days`} />
            <Stat label="DIO" value={`${result.daysInventoryOutstanding.toFixed(1)} days`} />
            <Stat label="DPO" value={`${result.daysPayableOutstanding.toFixed(1)} days`} />
          </div>
        </div>
      }
      explanation={
        <>
          <pre className="overflow-x-auto rounded-lg bg-zinc-100 p-4 text-sm dark:bg-zinc-800">
{`DSO = (${formatUSD(accountsReceivable)} / ${formatUSD(revenue)}) × 365 ≈ ${result.daysSalesOutstanding.toFixed(1)} days
DIO = (${formatUSD(inventory)} / ${formatUSD(costOfGoodsSold)}) × 365 ≈ ${result.daysInventoryOutstanding.toFixed(1)} days
DPO = (${formatUSD(accountsPayable)} / ${formatUSD(costOfGoodsSold)}) × 365 ≈ ${result.daysPayableOutstanding.toFixed(1)} days

Cash conversion cycle = DSO + DIO − DPO ≈ ${result.cashConversionCycle.toFixed(1)} days`}
          </pre>
          <p className="mt-3">
            {result.cashConversionCycle < 0
              ? "A negative cycle means cash comes in from customers before it has to go out to suppliers — an efficient position, not a warning sign."
              : `Cash is tied up for about ${result.cashConversionCycle.toFixed(1)} days between spending it on inventory and getting it back from customers, net of the delay in paying suppliers.`}
          </p>
        </>
      }
    />
  );
}
