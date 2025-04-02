import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#232C33] text-[#DADFF7] p-4 flex items-center justify-between">
      {/* Blog Title */}
      <h1 className="text-2xl font-bold">
        <Link href="/">HoopKnowers</Link>
      </h1>

      {/* Navigation Links */}
      <nav className="flex gap-6 text-sm uppercase tracking-wide">
        <Link href="/latest" className="hover:font-bold">
          Latest
        </Link>
        <Link href="/about" className="hover:font-bold">
          About
        </Link>
      </nav>
    </header>
  );
}