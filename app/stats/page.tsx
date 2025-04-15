"use client";

import { useEffect, useState } from "react";

export default function Stats() {
  const [topPerformers, setTopPerformers] = useState([]);

  useEffect(() => {
    // Fetch the JSON file
    fetch('/data/top_performers.json')
      .then((res) => res.json())
      .then((data) => setTopPerformers(data));
  }, []);

  return (
    <div className="bg-[#232C33] text-[#DADFF7] min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">🔥 Top Performers Today</h1>
      <p className="text-lg text-[#B5B2C2] mb-8 text-center">
        Check out the top NBA players based on their performance scores!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topPerformers.length > 0 ? (
          topPerformers.map((player, index) => (
            <div
              key={index}
              className="bg-[#2E3A42] p-6 rounded-lg shadow-md border border-[#5A7D7C] hover:shadow-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-bold mb-2 text-[#A0C1D1]">{player.PLAYER_NAME}</h2>
              <p className="text-sm text-[#B5B2C2] mb-4">Team: {player.TEAM_ABBREVIATION}</p>
              <p className="text-lg text-[#DADFF7] font-medium">{player.Formatted_Stats}</p>
              <p className="text-sm text-[#A0C1D1] mt-2">
                Performance Score: <span className="font-bold">{player.Performance_Score.toFixed(1)}</span>
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-[#B5B2C2] col-span-full">
            Loading stats... Please wait.
          </p>
        )}
      </div>
    </div>
  );
}