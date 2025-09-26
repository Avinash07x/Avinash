import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Avinash Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
