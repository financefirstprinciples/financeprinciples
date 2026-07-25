import { notFound } from "next/navigation";
import ConceptPage from "@/components/ConceptPage";
import { accountingConcepts } from "@/lib/content";

export function generateStaticParams() {
  return Object.keys(accountingConcepts).map((topic) => ({ topic }));
}

export default async function AccountingTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const concept = accountingConcepts[topic];
  if (!concept) notFound();
  return <ConceptPage {...concept} />;
}
