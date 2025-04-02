"use client";

export default function About() {
  return (
    <div className="bg-[#232C33] text-[#DADFF7] min-h-screen p-8">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 text-[#DADFF7]">
          About HoopKnowers
        </h1>
        <p className="text-lg text-[#B5B2C2]">
          Discover the vision, design, and future of HoopKnowers, your go-to NBA blog.
        </p>
      </header>

      {/* Project Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#DADFF7]">Project Overview</h2>
        <p className="text-lg text-[#B5B2C2] leading-relaxed">
          HoopKnowers is a modern NBA blog designed to provide fans with the latest news, stats, and insights. 
          The project emphasizes a clean and intuitive user experience, making it easy for users to explore content.
        </p>
      </section>

      {/* UI/UX Design */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#DADFF7]">UI/UX Design</h2>
        <p className="text-lg text-[#B5B2C2] mb-6 leading-relaxed">
          HoopKnowers is designed with a clean, modern aesthetic that prioritizes readability and user engagement. 
          The dark-themed interface enhances visual comfort, while carefully selected accent colors draw attention 
          to key information without overwhelming the user.
        </p>
        <ul className="list-disc list-inside text-[#B5B2C2] space-y-4">
          <li>
            <strong>Color Palette:</strong> A balanced mix of Gunmetal (#232C33) for the background, Lavender (#DADFF7) 
            for primary text, and Powder Blue (#A0C1D1) for interactive elements ensures a sleek and professional look.
          </li>
          <li>
            <strong>Typography:</strong> High-contrast, bold fonts for headlines and structured body text ensure optimal 
            readability across all devices.
          </li>
          <li>
            <strong>Responsiveness:</strong> A fully responsive layout guarantees a seamless experience on desktops, 
            tablets, and mobile devices.
          </li>
        </ul>
      </section>

      {/* Development & Architecture */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-[#DADFF7]">Development & Architecture</h2>
        <p className="text-lg text-[#B5B2C2] mb-6 leading-relaxed">
          HoopKnowers is built with performance and scalability in mind, leveraging modern technologies to create a fast 
          and intuitive user experience.
        </p>
        <ul className="list-disc list-inside text-[#B5B2C2] space-y-4">
          <li>
            <strong>Next.js & App Router:</strong> Enables server-side rendering (SSR) and dynamic routing, improving 
            performance and SEO.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> Utilized for efficient styling and rapid UI iteration, ensuring design 
            consistency across the platform.
          </li>
          <li>
            <strong>Component-Based Architecture:</strong> The application follows a modular approach, making it highly 
            scalable and maintainable.
          </li>
          <li>
            <strong>State Management:</strong> React’s built-in state management simplifies data handling without 
            unnecessary complexity.
          </li>
        </ul>
      </section>

      {/* Future Plans */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-[#DADFF7]">Future Plans</h2>
        <p className="text-lg text-[#B5B2C2] mb-6 leading-relaxed">
          HoopKnowers is constantly evolving to provide a richer and more personalized experience for users. Here are some 
          of the exciting features planned for future updates:
        </p>
        <ul className="list-disc list-inside text-[#B5B2C2] space-y-4">
          <li>
            <strong>Dark Mode Customization:</strong> More refined contrast settings and customizable themes to suit 
            individual user preferences.
          </li>
          <li>
            <strong>Interactive Visuals:</strong> Enhanced data visualizations, animated stat breakdowns, and hover 
            interactions for a richer experience.
          </li>
          <li>
            <strong>Personalized Dashboards:</strong> Users will be able to customize their feeds, track favorite players, 
            and receive tailored insights based on their interests.
          </li>
          <li>
            <strong>Microinteractions & Motion UI:</strong> Subtle animations and smooth transitions to make data-heavy 
            content feel more dynamic and engaging.
          </li>
          <li>
            <strong>Advanced Analytics:</strong> Real-time NBA stats and insights will be integrated to provide users with 
            up-to-date information.
          </li>
        </ul>
      </section>
    </div>
  );
}