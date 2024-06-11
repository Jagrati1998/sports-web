import React from 'react';

const BackgroundImageSection = () => {
  const imageUrl = 'https://i.pinimg.com/originals/f3/a1/85/f3a185a4c840e0c2f734db29a07a812d.png';

  return (
    <div
      className="relative h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white p-4">
          <h1 className="text-4xl font-bold mb-4"> Learn More ...</h1>
          <p className="text-lg mb-4">This is a beautiful section with a background image.</p>
          
        </div>
      </div>
    </div>
  );
};

export default BackgroundImageSection;
