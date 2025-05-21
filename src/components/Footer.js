// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-70 backdrop-blur-sm py-4 px-6 mt-8 rounded-lg shadow-md">
      <div className="container mx-auto text-center">
        <p className="text-gray-700 mb-2">
          Projet réalisé par <span className="font-medium">Relmy Mathieu</span>, <span className="font-medium">Harig Rayane</span>, <span className="font-medium">Lecat Leo</span> de la classe 1G5
        </p>
        <p className="text-sm text-gray-500">© 2025 - Projet EMC</p>
      </div>
    </footer>
  );
};

export default Footer;