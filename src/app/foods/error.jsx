'use client';

import React from 'react';
import Link from 'next/link';

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-pink-50 to-orange-100 px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-10 text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          !
        </div>

        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">
          Oops! Something Went Wrong
        </h1>

        <p className="text-slate-500 text-base leading-relaxed mb-3">
          Something unexpected happened while loading this page.
        </p>

        <p className="text-slate-400 text-sm mb-8">
          Please try again in a moment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-md hover:opacity-90 transition duration-300"
          >
            Try Again
          </button>

          <Link
             href="/"
            className="px-6 py-3 rounded-2xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition duration-300"
            >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;