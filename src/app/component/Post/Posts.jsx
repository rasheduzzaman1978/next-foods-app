'use client';
import React, { use } from 'react';

const Posts = ({ postPromise }) => {
  const posts = use(postPromise);
  console.log('posts:', posts);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
            Latest Posts
          </h1>
          <p className="text-slate-500 text-lg">
            Total Posts:
            <span className="font-semibold text-indigo-600 ml-1">
              {posts.length}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                    Post #{post.id}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-slate-600 leading-relaxed line-clamp-4">
                  {post.body}
                </p>

                <button className="mt-5 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;

