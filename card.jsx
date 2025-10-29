import React from "react";

const Card = ({ title, body }) => (
  <div className="p-4 border rounded-lg shadow-sm dark:border-gray-700 hover:shadow-md transition">
    <h3 className="font-semibold mb-2 text-lg">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm">{body}</p>
  </div>
);

export default Card;
