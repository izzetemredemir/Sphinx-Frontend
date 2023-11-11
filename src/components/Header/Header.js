import React from "react";
import ConnectButton from "../ConnectButton/ConnectButton";

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Sphinx DB</h1>{" "}
          {/* Text size reduced */}
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
