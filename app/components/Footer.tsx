"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminAccess = () => {
    if (password === "4248") {
      setIsAdmin(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <footer className="bg-gray-800 text-[#B0B0B0] p-6 text-center">
      {/* Horizontal Divider */}
      <div className="w-full border-t border-[#87A878] mb-6"></div>

      {/* Admin Access */}
      {!isAdmin ? (
        <div className="mt-4">
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-600 rounded mb-3 block mx-auto text-gray-900"
          />
          <button
            onClick={handleAdminAccess}
            className="border border-[#87A878] text-[#87A878] px-3 py-1 rounded text-sm font-semibold hover:bg-[#87A878] hover:text-white transition"
          >
            Admin Access
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      ) : (
        <div className="mt-4">
          <p className="text-green-500 mb-2">Admin access granted!</p>
          <Link
            href="/articlesubmit"
            className="border border-[#87A878] text-[#87A878] px-3 py-1 rounded text-sm font-semibold hover:bg-[#87A878] hover:text-white transition"
          >
            Go to Submit Article
          </Link>
        </div>
      )}

      {/* Footer Content */}
      <p className="text-sm uppercase tracking-wide mt-6">
        &copy; 2025 HoopKnowers. All rights reserved.
      </p>
    </footer>
  );
}