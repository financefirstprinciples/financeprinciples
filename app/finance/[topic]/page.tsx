import { notFound } from "next/navigation";
import ConceptPage from "@/components/ConceptPage";
import { financeConcepts } from "@/lib/content";

export function generateStaticParams() {
  return Object.keys(financeConcepts).map((topic) => ({ topic }));
}

export default async function FinanceTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const concept = financeConcepts[topic];
  if (!concept) notFound();
  return <ConceptPage {...concept} />;
}
