"use client";

import { useState } from "react";
import StatsDashboard from "./components/StatsDashboard";
import Footer from "./components/Footer";

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false); // Toggle between Home and Admin views
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "NBA Finals Recap",
      content: "A thrilling series that kept fans on the edge of their seats.",
    },
    {
      id: 2,
      title: "Top 10 Players of 2025",
      content: "Ranking the best players of the season.",
    },
  ]);
  const [newArticle, setNewArticle] = useState({ title: "", content: "" });
  const [message, setMessage] = useState("");

  // Handle form submission for new articles
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
    <div className="bg-[#FFFCF9] text-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="p-8 flex flex-col items-center justify-center min-h-[50vh] bg-gray-800 text-center">
        <h1 className="text-6xl font-light mb-4 tracking-wide text-[#B0B0B0]">
          Welcome to HoopKnowers
        </h1>
        <p className="text-xl text-[#B0B0B0] mb-6">
          Your go-to source for NBA news, stats, and insights.
        </p>
        <a
          href="#articles"
          className="border border-[#87A878] text-[#87A878] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#87A878] hover:text-white transition"
        >
          Read Latest Articles
        </a>
        <div className="mt-4 w-full border-t border-[#87A878]"></div>
      </div>

      {/* Blog Post Feed */}
      <div id="articles" className="p-8">
        <h2 className="text-4xl font-bold mb-6 text-center">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-gray-800 p-4 rounded-lg border border-[#87A878] hover:shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold mb-2 text-[#B0B0B0]">
{article.title}
</h3>
              <p className="text-sm text-gray-400">
                {article.content.substring(0, 100)}...
              </p>
              <a
                href="#"
                className="text-[#87A878] hover:underline mt-2 block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Admin Panel */}
      {isAdmin && (
        <div className="p-8 bg-gray-800">
          <h2 className="text-4xl font-bold mb-4 text-[#B0B0B0]">Admin Panel</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Article Title"
              value={newArticle.title}
              onChange={(e) =>
                setNewArticle({ ...newArticle, title: e.target.value })
              }
              className="w-full p-2 border rounded text-gray-900"
              required
            />
            <textarea
              placeholder="Article Content"
              value={newArticle.content}
              onChange={(e) =>
                setNewArticle({ ...newArticle, content: e.target.value })
              }
              className="w-full p-2 border rounded text-gray-900"
              rows={6}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#87A878] text-white px-4 py-2 rounded hover:bg-green-600"
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
