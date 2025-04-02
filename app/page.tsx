"use client";

import { useState } from "react";
import Link from "next/link"; // Import Link from Next.js

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Breaking Down the 2024 NBA MVP Race: Is It Already Decided?",
      content: `With less than 10 games remaining in the regular season, the race for the 2024 NBA MVP is nearing its conclusion. The top contenders have separated themselves from the pack, and while the final decision isn’t official, it’s becoming increasingly clear that this is a two-man battle between Shai Gilgeous-Alexander and Nikola Jokić.`,
    },
  ]);
  const [newArticle, setNewArticle] = useState({ title: "", content: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newArticle.title || !newArticle.content) {
      setMessage("Title and content are required.");
      return;
    }

    const newId = articles.length + 1;
    const updatedArticles = [
      ...articles,
      { id: newId, title: newArticle.title, content: newArticle.content },
    ];
    setArticles(updatedArticles);
    setNewArticle({ title: "", content: "" });
    setMessage("Article submitted successfully!");
  };

  return (
    <div className="bg-[#232C33] text-[#DADFF7] min-h-screen">
      {/* Hero Section */}
      <div className="p-8 flex flex-col items-center justify-center min-h-[50vh] bg-[#232C33] text-center">
        <h1 className="text-6xl font-light mb-4 tracking-wide text-[#DADFF7]">
          Welcome to HoopKnowers
        </h1>
        <p className="text-xl text-[#B5B2C2] mb-6">
          Your go-to source for NBA news, stats, and insights.
        </p>
        <a
          href="#articles"
          className="border border-[#5A7D7C] text-[#A0C1D1] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#5F8DA3] hover:text-[#232C33] hover:font-bold transition"
        >
          Read Latest Articles
        </a>
        <div className="mt-4 w-full border-t border-[#5A7D7C]"></div>
      </div>

      {/* Blog Post Feed */}
      <div id="articles" className="p-8 bg-[#2E3A42]">
        <h2 className="text-4xl font-bold mb-6 text-center text-[#DADFF7]">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-[#232C33] p-4 rounded-lg border border-[#5A7D7C] hover:shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold mb-2 text-[#DADFF7]">
                {article.title}
              </h3>
              <p className="text-sm text-[#B5B2C2]">
                {article.content.substring(0, 100)}...
              </p>
              <Link
                href={`/latest/${article.id}`} // Use Link for navigation
                className="text-[#A0C1D1] hover:underline mt-2 block"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Panel */}
      {isAdmin && (
        <div className="p-8 bg-[#232C33]">
          <h2 className="text-4xl font-bold mb-4 text-[#DADFF7]">Admin Panel</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Article Title"
              value={newArticle.title}
              onChange={(e) =>
                setNewArticle({ ...newArticle, title: e.target.value })
              }
              className="w-full p-2 border border-[#5A7D7C] rounded text-[#B5B2C2]"
              required
            />
            <textarea
              placeholder="Article Content"
              value={newArticle.content}
              onChange={(e) =>
                setNewArticle({ ...newArticle, content: e.target.value })
              }
              className="w-full p-2 border border-[#5A7D7C] rounded text-[#B5B2C2]"
              rows={6}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#A0C1D1] text-[#232C33] px-4 py-2 rounded hover:bg-[#8FB3C3]"
            >
              Submit
            </button>
          </form>
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
      )}
    </div>
  );
}
