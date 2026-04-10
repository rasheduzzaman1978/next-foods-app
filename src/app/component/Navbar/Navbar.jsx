import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          MyApp
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-2 md:gap-4 text-sm md:text-base font-medium flex-wrap justify-end">
          <li>
            <Link
              href="/"
              className="px-4 py-2 rounded-xl text-slate-700 hover:bg-indigo-100 hover:text-indigo-600 transition-all duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/todos"
              className="px-4 py-2 rounded-xl text-slate-700 hover:bg-cyan-100 hover:text-cyan-600 transition-all duration-300"
            >
              Todos
            </Link>
          </li>

          <li>
            <Link
              href="/posts"
              className="px-4 py-2 rounded-xl text-slate-700 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300"
            >
              Posts
            </Link>
          </li>

          <li>
            <Link
              href="/foods"
              className="px-4 py-2 rounded-xl text-slate-700 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300"
            >
              Foods
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
