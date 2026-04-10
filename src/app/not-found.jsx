import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-red-100 px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-10 text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          404
        </div>

        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">
          Page Not Found
        </h1>

        <p className="text-slate-500 text-base leading-relaxed mb-8">
          Sorry, the page you are looking for does not exist or may have been
          moved to another location.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition duration-300"
          >
            Go Home
          </Link>

          <Link
            href="/foods"
            className="px-6 py-3 rounded-2xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition duration-300"
          >
            Browse Foods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;