import { useState } from "react";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/white_logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app bg-[#E66B2D] text-white">
      <nav>
        <div className="max-w-screen mx-auto">
          <div className="flex mx-auto justify-between w-11/12 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16">
              {/* logo */}
              <div>
                <a
                  href="/home"
                  className="flex gap-1 items-left ">
                  <img src={logo} alt="Logo" className="size-28" />
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 text-lg">
                <a href="#">Home</a>
                <a href="#">Benefits</a>
                <a href="#">Our Classes</a>
                <a href="#">Contact Us</a>
                <Link to="/branch-locator">Branch Locator</Link>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="size-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 bg-opacity-95 w-full justify-center  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "max-h-screen"
          }`}
        >
          <div className="px-8">
            <div className="flex items-center text-black flex-col gap-4">
              <a href="#">Home</a>
              <a href="#">Benefits</a>
              <a href="#">Our Classes</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;