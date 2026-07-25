import { notFound } from "next/navigation";
import { calculators } from "@/lib/content";

export function generateStaticParams() {
  return Object.keys(calculators).map((tool) => ({ tool }));
}

export default async function CalculatorToolPage({
  params,
}: {
  params: Promise<{ tool: string }>;
}) {
  const { tool } = await params;
  const entry = calculators[tool];
  if (!entry) notFound();
  const { Component } = entry;
  return <Component />;
}
