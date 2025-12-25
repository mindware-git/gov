export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  date: string;
  content: string;
}

export const newsData: NewsArticle[] = [
  {
    id: 1,
    slug: "first-post",
    title: "First News Post",
    date: "2025-12-01",
    content:
      "This is the full content of the first news post. It's a great starting point for our news section.",
  },
  {
    id: 2,
    slug: "community-update",
    title: "Community Update",
    date: "2025-12-05",
    content:
      "Here is a community update. We are excited to announce new features and improvements to the platform. Stay tuned for more details.",
  },
  {
    id: 3,
    slug: "platform-launch",
    title: "Official Platform Launch",
    date: "2025-11-20",
    content:
      "The Gov platform has officially launched. We are thrilled to bring this project to the public and look forward to your feedback.",
  },
];
