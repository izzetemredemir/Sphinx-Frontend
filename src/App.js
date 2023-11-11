import React, { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");
  const [proofTx, setProofTx] = useState("");

  const apiUrl = "https://api.example.com"; // Replace with the actual API URL

  const handleInsertClick = async () => {
    try {
      const response = await fetch(`${apiUrl}/insert`, {
        method: "POST",
        // Add other options if needed
      });
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateClick = async () => {
    try {
      const response = await fetch(`${apiUrl}/update`, {
        method: "PUT",
        // Add other options if needed
      });
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`${apiUrl}/delete`, {
        method: "DELETE",
        // Add other options if needed
      });
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  const handleProveQueryClick = async () => {
    try {
      const response = await fetch(`${apiUrl}/query?query=${query}`);
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto mt-8">
          <h1 className="text-2xl font-bold">Proof of Query</h1>

          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4">
            <strong className="font-bold">Connected to MongoDB:</strong>
            <span className="block sm:inline">
              The connected database is named "sphinxTest" on your localhost
              MongoDB.
            </span>
          </div>

          <p className="mt-4">
            On this page, you can perform off-chain database queries and
            generate proofs for Starknet Layer 3 in the Sphinx project.
          </p>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Database Information</h2>
            <p>
              Example database model:
              <pre className="border rounded p-2 mt-2">
                {`{
                "currentState": {
                  "UserId": "12345",
                  "balance": 100
                },
                "query": {
                  "operation": "update",
                  "field": "balance",
                  "newData": 110
                },
                "afterState": {
                  "field": "balance",
                  "newData": 110
                }
              }`}
              </pre>
            </p>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mx-2"
              onClick={handleInsertClick}
            >
              Insert
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mx-2"
              onClick={handleUpdateClick}
            >
              Update
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mx-2"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">
              Previous and Current States of Executed Database Query
            </h2>
            <textarea
              className="border rounded p-2 w-full"
              rows="4"
              placeholder="Enter your query..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            ></textarea>
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 mt-4"
              onClick={handleProveQueryClick}
            >
              Prove Query
            </button>
          </div>

          {result && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold">Result:</h2>
              <pre className="border rounded p-2 mt-2">{result}</pre>
            </div>
          )}
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Proof Tx</h2>
            <div className="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded relative">
              {proofTx}
            </div>
          </div>
          <div className="mt-4"></div>

          <footer className="text-center text-gray-500 mt-4">
            &copy; 2023 SphinxDB
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
