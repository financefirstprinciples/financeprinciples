import { notFound } from "next/navigation";
import ConceptPage from "@/components/ConceptPage";
import { taxationConcepts } from "@/lib/content";

export function generateStaticParams() {
  return Object.keys(taxationConcepts).map((topic) => ({ topic }));
}

export default async function TaxationTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const concept = taxationConcepts[topic];
  if (!concept) notFound();
  return <ConceptPage {...concept} />;
}
