"use client";

import type { ReactNode } from "react";
import type { RelatedLink } from "@/lib/types";
import Link from "next/link";
import { useIsEmbeddedCalculator } from "@/components/calculators/embedded-context";

export default function CalculatorPage({
  title,
  summary,
  inputs,
  result,
  explanation,
  relatedConcept,
}: {
  title: string;
  summary: string;
  inputs: ReactNode;
  result: ReactNode;
  explanation: ReactNode;
  relatedConcept?: RelatedLink;
}) {
  const embedded = useIsEmbeddedCalculator();

  const grid = (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-5 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
        {inputs}
      </div>
      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        {result}
      </div>
    </div>
  );

  if (embedded) {
    return (
      <div>
        {grid}
        <div className="mt-10 space-y-3">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            How the math works
          </h3>
          <div className="text-zinc-700 dark:text-zinc-300">{explanation}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <p className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
        Calculator
      </p>
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        {title}
      </h1>
      <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">{summary}</p>

      {relatedConcept && (
        <Link
          href={relatedConcept.href}
          className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Read the {relatedConcept.label} concept page
        </Link>
      )}

      <div className="mt-10">{grid}</div>

      <div className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          How the math works
        </h2>
        <div className="text-zinc-700 dark:text-zinc-300">{explanation}</div>
      </div>
    </div>
  );
}
