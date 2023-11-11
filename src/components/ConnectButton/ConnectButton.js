import React, { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { motion } from "framer-motion";

const ConnectButton = () => {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-center items-center">
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        {isConnected ? (
          <motion.button
            className="bg-green-600 text-white text-sm py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={() => disconnect()}
          >
            {`${address?.slice(0, 5)}...${address?.slice(-6)}`}
          </motion.button>
        ) : (
          <motion.button
            className="bg-green-600 text-white text-sm py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={toggleModal}
          >
            Connect Wallet
          </motion.button>
        )}

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm flex justify-center items-center z-10">
            <div className="bg-gray-800 text-white rounded-lg p-6 m-4 max-w-sm w-full">
              <span
                className="absolute top-4 right-4 text-lg cursor-pointer"
                onClick={toggleModal}
              >
                &times;
              </span>
              <div className="flex flex-col items-center">
                {connectors.map((connector, index) => (
                  <button
                    key={connector.id}
                    className="bg-green-500 text-white text-sm py-2 px-4 my-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    onClick={() => {
                      connect({ connector });
                      toggleModal();
                    }}
                  >
                    Connect with {connector.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.nav>
    </div>
  );
};

export default ConnectButton;
