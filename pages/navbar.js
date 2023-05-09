import Link from "next/link";
import { useState } from "react";
import { GrGithub } from "react-icons/gr";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r w-full border-gray-200 px-5 md:px-10 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="text-gray-900 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          guidodika
        </span>
        <button
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p>MENU</p>
        </button>
        <div class={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}>
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-900 dark:border-white rounded-sm md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <Link
                href="/"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 dark:hover:bg-gray-600 md:hover:bg-transparent md:hover:dark:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 dark:hover:bg-gray-600 md:hover:bg-transparent md:hover:dark:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 dark:hover:bg-gray-600 md:hover:bg-transparent md:hover:dark:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 dark:hover:bg-gray-600 md:hover:bg-transparent md:hover:dark:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 dark:hover:bg-gray-600 md:hover:bg-transparent md:hover:dark:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/guidodika/portfolio-nextjs-guidodika"
                target="_blank"
                class="md:hidden block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 dark:hover:bg-gray-600 md:hover:bg-transparent md:hover:dark:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white"
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
