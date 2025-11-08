import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-cyan-200 flex flex-col items-center justify-center ">
      
            <p className="text-lg font-semibold">CyberLens</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
         
    </footer>
  );
};

export default Footer; 