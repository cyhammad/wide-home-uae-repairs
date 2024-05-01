"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const LogoSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full scroll-smooth ease-in-out ${isSticky ? "fixed top-0 z-20 shadow-md" : ""}`}
    >
      <div className="flex items-center justify-between bg-white px-4 py-2">
        <div className="flex items-center">
          <Image src="/logo.png" width={50} height={50} alt="Logo" />
          <h2 className="mx-3 text-lg font-bold text-red">
            Wide Home UAE Repairs
          </h2>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-10 text-lg font-semibold text-black">
            <li className="text-red hover:text-black">
              <Link href="">Home</Link>
            </li>
            <li className="hover:text-red">
              <Link href="">About Us</Link>
            </li>
            <li className="hover:text-red">
              <Link href="">Services</Link>
            </li>
            <li className="hover:text-red">
              <Link href="">Contact Us</Link>
            </li>
          </ul>
        </div>
        <button className="text-2xl md:hidden" onClick={toggleMenu}>
          {showMenu ? "X" : "☰"}
        </button>
      </div>
      {showMenu && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-red text-white"
          onClick={() => setShowMenu(false)}
        >
          <ul className="text-xl font-semibold text-white">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">About Us</Link>
            </li>
            <li>
              <Link href="">Services</Link>
            </li>
            <li>
              <Link href="">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LogoSection;
