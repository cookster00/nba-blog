import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      {/* Blog Title */}
      <h1 className="text-2xl font-bold">
        <Link href="/">HoopKnowers</Link>
      </h1>

      {/* Navigation Links */}
      <nav className="flex gap-6 text-sm uppercase tracking-wide">
        <Link href="/latest" className="hover:underline">
          Latest
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/credits" className="hover:underline">
          Credits
        </Link>
      </nav>
    </header>
  );
}