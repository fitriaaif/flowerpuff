"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/Logo.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-[#FEFBF6] dark:bg-gray-900 fixed w-full z-50 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={Logo} className="h-8" alt="Flowerpuff Logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="pt-serif-bold text-white bg-[#E6A4B4] hover:bg-[#FEFBF6] hover:text-[#E6A4B4] border border-[#E6A4B4] focus:ring-4 focus:outline-none font-large rounded-[30px] text-sm px-16 py-2 text-center md:visible md:w-auto md:p-4 hidden sm:hidden md:block"
            >
              Contact us
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 hover:text-white rounded-lg md:hidden hover:bg-[#E6A4B4]  focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 pt-serif-bold border rounded-l md:space-x-16 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  href="/"
                  className="block py-8 px-12 text-xl text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-[#E6A4B4] md:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block py-8 px-12 text-xl text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-[#E6A4B4] md:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block py-8 px-12 text-xl text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-[#E6A4B4] md:p-0"
                >
                  Products
                </Link>
              </li>
              <li className="md:hidden">
                <Link
                  href="/contact"
                  className="block py-8 px-12 text-xl text-[#E6A4B4] rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:p-0"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
