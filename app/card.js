import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div
      className="relative h-64 overflow-hidden bg-center bg-cover group"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity"></div>
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-white">
        <div className="transition-transform transform group-hover:scale-105">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
