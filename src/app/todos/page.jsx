import React from 'react';

const ToDoPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-cyan-50 to-blue-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
            To-Do List
          </h2>
          <p className="text-slate-500 text-lg">
            Total Tasks:
            <span className="ml-2 font-semibold text-cyan-600">
              {todos.length}
            </span>
          </p>
        </div>

        {/* Todo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {todos.slice(0, 30).map((todo) => (
            <div
              key={todo.id}
              className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
                      todo.completed
                        ? 'bg-green-100 text-green-600'
                        : 'bg-yellow-100 text-yellow-600'
                    }`}
                  >
                    {todo.completed ? 'Completed' : 'Pending'}
                  </span>

                  <h3 className="text-lg font-bold text-slate-800 leading-relaxed">
                    {todo.title}
                  </h3>
                </div>

                <div
                  className={`w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center ${
                    todo.completed
                      ? 'border-green-500 bg-green-500'
                      : 'border-slate-300'
                  }`}
                >
                  {todo.completed && (
                    <span className="text-white text-xs">✓</span>
                  )}
                </div>
              </div>

              <div className="mt-5 text-sm text-slate-500">
                Task ID: #{todo.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoPage;

