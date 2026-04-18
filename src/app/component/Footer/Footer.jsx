import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              MyApp
            </h2>
            <p className="text-sm leading-relaxed text-slate-400">
              Discover delicious foods, explore useful posts, and manage your
              daily tasks in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="hover:text-indigo-400 transition-all duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/todos"
                  className="hover:text-cyan-400 transition-all duration-300"
                >
                  Todos
                </Link>
              </li>

              <li>
                <Link
                  href="/posts"
                  className="hover:text-purple-400 transition-all duration-300"
                >
                  Posts
                </Link>
              </li>

              <li>
                <Link
                  href="/foods"
                  className="hover:text-orange-400 transition-all duration-300"
                >
                  Foods
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <p className="text-sm text-slate-400 mb-2">
              Email: sifatabdullah1234@gmail.com
            </p>

            <p className="text-sm text-slate-400 mb-4">
              Phone: +880 1716651946
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-500 flex items-center justify-center transition-all duration-300"
              >
                F
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-sky-500 flex items-center justify-center transition-all duration-300"
              >
                T
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-500 flex items-center justify-center transition-all duration-300"
              >
                I
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;