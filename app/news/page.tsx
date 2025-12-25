import Link from "next/link";
import { newsData } from "@/lib/news-data";

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">News</h1>
      <div className="space-y-4">
        {newsData
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )
          .map((article) => (
            <div key={article.id} className="border-b pb-4">
              <h2 className="text-2xl font-semibold">
                <Link
                  href={`/news/${article.slug}`}
                  className="hover:underline"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500">{article.date}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
