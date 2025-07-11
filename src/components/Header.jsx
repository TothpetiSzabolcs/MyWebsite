import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-md top-0 left-0 right-0 z-10 h-20 flex items-center">
      <div className="hidden md:grid grid-cols-3 items-center max-w-5xl mx-auto px-6 w-full h-20">
        <nav className="flex gap-10 justify-start">
          <Link
            to="/whoami"
            className="font-medium text-gray-300 hover:underline hover:underline-offset-10 transition-all duration-400 hover:text-blue-500"
          >
            Who Am I?
          </Link>
          <Link
            to="/projects"
            className="font-medium text-gray-300 hover:text-blue-500 hover:underline hover:underline-offset-10 transition-all duration-400"
          >
            Projects
          </Link>
        </nav>
        <span className="justify-self-center flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20 w-20 cursor-pointer" />
          </Link>
        </span>
        <nav className="flex gap-10 justify-end">
          <Link
            to="/getintouch"
            className="font-medium text-gray-300 hover:text-blue-500 hover:underline hover:underline-offset-10 transition-all duration-400"
          >
            Get In Touch
          </Link>
          <Link
            to="/experience"
            className="font-medium text-gray-300 hover:text-blue-500 hover:underline hover:underline-offset-10 transition-all duration-400"
          >
            Experiences
          </Link>
        </nav>
      </div>

      <div className="md:hidden flex items-center justify-between w-full px-6">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-20 w-20" />
        </Link>
        <button
          className="text-gray-200 text-3xl"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <HiMenu />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="flex-1" onClick={() => setOpen(false)}></div>
          <div className="bg-gray-950 w-1/4 min-w-[150px] h-full flex flex-col shadow-xl animate-slide-in-right ">
            <div className="flex justify-end p-4">
              <button
                className="text-gray-300 text-3xl"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <HiX className="text-white translate-y-2 -translate-x-2 text-3xl" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 mt-10">
              <Link
                to="/whoami"
                className="font-medium text-gray-300 text-lg hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                Who Am I?
              </Link>
              <Link
                to="/projects"
                className="font-medium text-gray-300 text-lg hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/getintouch"
                className="font-medium text-gray-300 text-lg hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                Get In Touch
              </Link>
              <Link
                to="/experience"
                className="font-medium text-gray-300 text-lg hover:text-blue-500"
                onClick={() => setOpen(false)}
              >
                Experiences
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
