import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-8 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
        
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>
          <div className="w-20 h-1 rounded-full bg-slate-700 overflow-hidden">
            <div className="h-full w-1/2 bg-cyan-400 animate-[loading_1.5s_ease-in-out_infinite]"></div>
          </div>
          <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse"></div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Fetching Posts
          </h2>

          <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
            We are collecting the latest post information and preparing everything for display.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="h-4 w-full rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse"></div>
          </div>

          <div className="h-4 w-5/6 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse"></div>
          </div>

          <div className="h-4 w-2/3 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse"></div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes loading {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(200%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;