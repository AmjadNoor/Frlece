import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-gray-50 border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-screen-xl px-4 py-2">
          <div className="flex gap-4 flex-row items-center justify-between">
            <div className="flex gap-3 items-center">
              <Image
                src={"https://i.postimg.cc/vB3bCpCB/Frlece.png"}
                alt="logo"
                width={80}
                height={80}
              />
              <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                Frlece
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-gray-800 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 hover:border-gray-400 transition duration-300">
                Login
              </button>
              <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
                Signup
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
