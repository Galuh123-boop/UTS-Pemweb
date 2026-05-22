import React from "react";

interface CardProductProps {
  title: string;
  description: string;
}

const CardProduct: React.FC<CardProductProps> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-md border-r-4 border-red-800 hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <h3 className="text-red-900 font-semibold text-lg mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        {description}
      </p>

      <button className="bg-red-900 text-white text-xs px-4 py-2 rounded">
        INFO SELENGKAPNYA
      </button>
    </div>
  );
};

export default CardProduct;