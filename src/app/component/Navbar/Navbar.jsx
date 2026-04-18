'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 md:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
          >
            MyApp
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 text-base font-medium">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg border border-slate-300 text-slate-700"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="mt-4 flex flex-col gap-2 md:hidden bg-white rounded-2xl shadow-md border border-slate-200 p-4">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 rounded-xl text-slate-700 hover:bg-indigo-100 hover:text-indigo-600 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/todos"
                className="block px-4 py-2 rounded-xl text-slate-700 hover:bg-cyan-100 hover:text-cyan-600 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Todos
              </Link>
            </li>

            <li>
              <Link
                href="/posts"
                className="block px-4 py-2 rounded-xl text-slate-700 hover:bg-purple-100 hover:text-purple-600 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Posts
              </Link>
            </li>

            <li>
              <Link
                href="/foods"
                className="block px-4 py-2 rounded-xl text-slate-700 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Foods
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;