import Link from "next/link";
import React, { useState, useContext } from "react";
import { GrGithub } from "react-icons/gr";
import { useEffect } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 0) {
        setNavbarBg("backdrop-blur-3xl");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar z-20 fixed w-full border-gray-200 px-5 md:px-10 ${navbarBg}`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="text-gray-900 self-center text-2xl font-lobster whitespace-nowrap dark:text-white">
          guidodika
        </span>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p>MENU</p>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isOpen ? "block " : "hidden"
          }`}
        >
          <ul className="font-medium bg-gray-200 rounded-xl dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent flex flex-col p-4 md:p-0 mt-4 border border-gray-900 dark:border-white md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 dark:hover:bg-gray-600 md:hover:bg-transparent md:hover:dark:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 dark:hover:bg-gray-600 md:hover:bg-transparent md:hover:dark:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 dark:hover:bg-gray-600 md:hover:bg-transparent md:hover:dark:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 dark:hover:bg-gray-600 md:hover:bg-transparent md:hover:dark:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 dark:hover:bg-gray-600 md:hover:bg-transparent md:hover:dark:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/guidodika/portfolio-nextjs-guidodika"
                target="_blank"
                className="md:hidden block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 dark:hover:bg-gray-600 md:hover:bg-transparent md:hover:dark:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white"
              >
                Source Code This Website
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <a
            href="https://github.com/guidodika/portfolio-nextjs-guidodika"
            target="_blank"
          >
            <button className="p-3 bg-gray-600 hover:bg-gray-500 text-white rounded-3xl flex items-center gap-2 ">
              Source Code <GrGithub />
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
