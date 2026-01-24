"use client"; // IMPORTANT: Next.js 16 Client Component

import Link from "next/link";
import { usePathname } from "next/navigation"; // App Router hook

const Header = () => {
  const pathname = usePathname(); // get current path for active link

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-indigo-800 text-white shadow">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">🌦️WeatherApp</h1>

        {/* Navigation */}
        <ul className="flex items-center gap-4 text-lg">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`px-3 py-2 rounded transition ${
                  pathname === link.path
                    ? "bg-indigo-600 font-semibold"
                    : "hover:bg-indigo-700"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <Link
          href="/login"
          className="ml-4 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 font-semibold transition"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
