import React from "react";

const Navbar = () => (
  <nav className="bg-white dark:bg-gray-800 shadow p-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
        PLP Task Manager
      </h1>
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded text-sm"
      >
        🌙 Toggle Theme
      </button>
    </div>
  </nav>
);

export default Navbar;
