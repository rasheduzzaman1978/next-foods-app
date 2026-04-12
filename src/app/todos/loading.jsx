import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 via-fuchsia-100 to-pink-100 px-4">
      <div className="relative w-full max-w-md">
        
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 rounded-[2rem] blur-2xl opacity-30 animate-pulse"></div>

        <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2rem] shadow-2xl p-8 text-center overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-200">
            <div className="h-full w-1/3 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 animate-[slide_2s_linear_infinite]"></div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full border-4 border-violet-200"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500 border-r-fuchsia-500 animate-spin"></div>

              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                %
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-800 mb-3">
            Loading ToDos
          </h2>

          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Please wait while we organize and prepare all your ToDo data.
          </p>

          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 rounded-2xl bg-violet-100 animate-pulse"></div>
            <div className="h-16 rounded-2xl bg-fuchsia-100 animate-pulse [animation-delay:0.2s]"></div>
            <div className="h-16 rounded-2xl bg-pink-100 animate-pulse [animation-delay:0.4s]"></div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(-120%);
            }
            100% {
              transform: translateX(320%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;