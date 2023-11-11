import React from "react";

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Sphinx DB</h1>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
