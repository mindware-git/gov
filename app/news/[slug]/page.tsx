import { notFound } from "next/navigation";
import { newsData } from "@/lib/news-data";

export default function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = newsData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{article.date}</p>
      <div className="prose lg:prose-xl">
        <p>{article.content}</p>
      </div>
    </div>
  );
}
