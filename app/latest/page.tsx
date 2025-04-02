"use client";

import Link from "next/link";

export default function Latest() {
  const articles = [
    {
      id: 1,
      title: "Breaking Down the 2024 NBA MVP Race: Is It Already Decided?",
      content: `With less than 10 games remaining in the regular season, the race for the 2024 NBA MVP is nearing its conclusion. The top contenders have separated themselves from the pack, and while the final decision isn’t official, it’s becoming increasingly clear that this is a two-man battle between Shai Gilgeous-Alexander and Nikola Jokić.

🔹 **Shai Gilgeous-Alexander (OKC Thunder)** – The Thunder have won 14 of their last 15 games, and SGA has been the driving force behind their dominant season. Averaging 32.9 PPG on elite efficiency, he has led OKC to the top of the Western Conference, making a strong argument for his first MVP.

🔹 **Nikola Jokić (Denver Nuggets)** – The two-time MVP has once again proven his value, posting 29.3 PPG, 12.8 RPG, and 10.3 APG. After missing five games, he returned with a 39-point triple-double, reminding everyone that Denver simply isn’t the same without him. If he finishes the season averaging a triple-double, his case for a third MVP will be hard to ignore.

**Giannis: The Dark Horse?**
While Giannis Antetokounmpo remains in the mix, his case is less convincing than in previous years. With 30.2 PPG and 12 RPG, he has been a dominant force, but injuries and inconsistency within the Bucks’ roster might hold him back. Still, finishing the season with a 30-point double-double is no small feat.

**The Rest of the Pack**
Beyond the top three, Jayson Tatum and LeBron James round out the top five, but neither has a serious chance to win the award. Tatum is leading Boston to another deep playoff run, but his numbers don’t quite match the MVP favorites. Meanwhile, LeBron’s longevity at 40 is remarkable, but the Lakers’ inconsistency prevents him from truly entering the MVP conversation.

**The Verdict: Who Wins?**
As of now, it’s a coin flip between SGA and Jokić. OKC’s unexpected rise gives SGA a compelling case, but Jokić’s impact and statistical dominance could secure him his third MVP. With just weeks left, every game matters—but no matter who wins, this has been one of the most competitive MVP races in recent memory.

Who’s your pick? SGA or Jokić? Let the debate begin. 🔥🏆`,
    },
  ];

  return (
    <div className="bg-[#232C33] text-[#DADFF7] min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Latest Articles</h1>
      <div className="space-y-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-[#2E3A42] p-6 rounded-lg shadow-md border border-[#5A7D7C]"
          >
            <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
            <p className="text-[#B5B2C2] whitespace-pre-line">
              {article.content.substring(0, 300)}...
            </p>
            <Link
              href={`/latest/${article.id}`}
              className="text-[#A0C1D1] hover:underline mt-4 block font-semibold"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}