"use client";

import { useState } from "react";

export default function ArticleSubmit() {
  const [newArticle, setNewArticle] = useState({ title: "", content: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newArticle.title || !newArticle.content) {
      setMessage("Title and content are required.");
      return;
    }

    // Simulate article submission
    setMessage("Article submitted successfully!");
    setNewArticle({ title: "", content: "" });
  };

  return (
    <div className="bg-[#FFFCF9] text-gray-900 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#B0B0B0]">
        Submit a New Article
      </h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
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
      {message && <p className="mt-4 text-green-500 text-center">{message}</p>}
    </div>
  );
}