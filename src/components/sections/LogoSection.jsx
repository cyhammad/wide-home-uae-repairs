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
      <div className="mt-5 flex items-center justify-evenly">
        <div className="flex items-center justify-start md:w-2/5 md:flex-row md:justify-end">
          <Image
            className="flex"
            src="/logo.png"
            width={80}
            height={180}
            alt="Logo"
          />
          <h2 className="mx-3 mt-3 text-xl font-bold tracking-wider text-white">
            Wide Home UAE Repairs
          </h2>
        </div>
        <div className="hidden w-full text-lg md:block md:w-3/5">
          <ul className="mr-5 flex justify-center gap-10 font-bold text-white">
            <li>
              <Link href="" className="text-green hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link href="" className="hover:text-green">
                About Us
              </Link>
            </li>

            <li>
              <Link href="" className="hover:text-green">
                Services
              </Link>
            </li>

            <li>
              <Link href="" className="hover:text-green">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <button
          className="h-20 w-20 items-center justify-center rounded-3xl bg-green text-white focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          {showMenu ? "X" : "☰"}
        </button>
        {showMenu && (
          <div
            className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-green"
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
      <div className="flex h-3/5 flex-col justify-center">
        <h1 className="mt-10 text-center text-2xl font-extrabold tracking-wide text-green md:text-5xl">
          #1 The Fastest Service Center
        </h1>
        <p className="my-7 text-center text-lg font-normal tracking-wider text-white md:text-xl">
          When it comes to repairing your home appliances, you need a technician
          you can trust to deliver exceptional service.
        </p>
        <div className="mx-auto mt-5 flex flex-col gap-10 md:flex-row">
          <button
            className="flex flex-shrink-0 justify-center rounded-3xl border-4 border-none bg-green px-14 py-2.5 text-white transition duration-300 ease-in-out hover:bg-white hover:text-green"
            type="button"
          >
            Call Us
          </button>
          <button
            className="flex flex-shrink-0 rounded-3xl border-4 border-none bg-green px-14 py-2.5 text-white transition duration-300 ease-in-out hover:bg-white hover:text-green"
            type="button"
          >
            WhatsApp Us
          </button>
        </div>
      </div>
    </>
  );
};

export default LogoSection;
