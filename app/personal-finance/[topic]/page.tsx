import { notFound } from "next/navigation";
import ConceptPage from "@/components/ConceptPage";
import { personalFinanceConcepts } from "@/lib/content";

export function generateStaticParams() {
  return Object.keys(personalFinanceConcepts).map((topic) => ({ topic }));
}

export default async function PersonalFinanceTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const concept = personalFinanceConcepts[topic];
  if (!concept) notFound();
  return <ConceptPage {...concept} />;
}
