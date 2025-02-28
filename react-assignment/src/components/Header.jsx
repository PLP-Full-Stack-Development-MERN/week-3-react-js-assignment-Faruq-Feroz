import React from 'react';

const Header = ({ title }) => {
    return (
      <header className="bg-blue-600 text-white py-4 px-6 mb-6">
        <h1 className="text-2xl font-bold">{title}</h1>
      </header>
    );
  };

export default Header;