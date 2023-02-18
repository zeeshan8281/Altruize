import React from 'react';
import { Link } from "react-router-dom";
import Web3 from 'web3';

const Navbar = () => {

	return <div>
			const Navbar = () => {
  const handleConnectWallet = async() => {
    if (typeof window.ethereum !== 'undefined') {
        try {
          // Request account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          
          // Get the user's address
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          const address = accounts[0];
    
          // Store the user's address in state or local storage
          // Redirect the user to a page for connected users
        } catch (error) {
          console.error(error);
        }
      } else {
        // Handle the case where Web3 is not available
      }
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Your logo here */}
            <Link to="/">
              <img
                className="h-8 w-auto justify-left"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </Link>
            <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-auto"
                >
                  Home
            </Link>
            <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-auto"
                >
                  About
            </Link>
            <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-auto"
                >
                  Features
            </Link>
            <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium w-auto"
                >
                  Our Team
            </Link>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <button
              onClick={handleConnectWallet}
              className="bg-indigo-500 hover:bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
	</div>;
};

export default Navbar;
