import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaSection = () => {
  return (
    <div className="relative h-100 bg-gradient-to-r from-red-800 to-black flex items-center justify-center mt-20">
      <div className="text-center text-white p-4 mt-10">
        <h1 className="text-4xl font-bold mb-4">Follow Us</h1>
        <p className="text-lg mb-8">Stay connected with us through our social media channels.</p>
        <div className="flex space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebookF size={32} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaTwitter size={32} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaInstagram size={32} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedinIn size={32} />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
