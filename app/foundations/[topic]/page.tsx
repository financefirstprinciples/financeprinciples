import { notFound } from "next/navigation";
import ConceptPage from "@/components/ConceptPage";
import { foundationsConcepts } from "@/lib/content";

export function generateStaticParams() {
  return Object.keys(foundationsConcepts).map((topic) => ({ topic }));
}

export default async function FoundationsTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const concept = foundationsConcepts[topic];
  if (!concept) notFound();
  return <ConceptPage {...concept} />;
}
