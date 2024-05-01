"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const LogoSection = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fixed left-0 right-0 top-14 z-20 mb-2 mt-2 flex items-center justify-evenly bg-white py-2">
        <div className="flex items-center justify-start md:w-2/5 md:flex-row md:justify-end">
          <Image
            className="flex"
            src="/logo.png"
            width={80}
            height={180}
            alt="Logo"
          />
          <h2 className="mx-3 mt-3 font-bold text-red md:text-xl md:tracking-wider">
            Wide Home UAE Repairs
          </h2>
        </div>
        <div className="hidden w-full text-lg md:block md:w-3/5">
          <ul className="mr-5 flex justify-center gap-10 font-bold text-white">
            <li>
              <Link href="" className="text-red hover:text-black">
                Home
              </Link>
            </li>

            <li>
              <Link href="" className="text-black hover:text-red">
                About Us
              </Link>
            </li>

            <li>
              <Link href="" className="text-black hover:text-red">
                Services
              </Link>
            </li>

            <li>
              <Link href="" className="text-black hover:text-red">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <button
          className="h-20 w-20 items-center justify-center rounded-3xl px-2 text-black focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          {showMenu ? "X" : "☰"}
        </button>
        {showMenu && (
          <div
            className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-red"
            onClick={() => setShowMenu(false)}
          >
            <ul className="gap-10 text-xl font-semibold leading-10 tracking-widest text-white">
              <li>
                <Link href="" className="hover:text-gray-500">
                  Home
                </Link>
              </li>

              <li>
                <Link href="" className="hover:text-gray-500">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="" className="hover:text-gray-500">
                  Services
                </Link>
              </li>

              <li>
                <Link href="" className="hover:text-gray-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default LogoSection;
