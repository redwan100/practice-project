import React from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { PiStackOverflowLogoDuotone } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="bg-[#0B72B5] py-4">
      <div className="my-container w-full">
        {/* nav top bar  */}
        <div className="flex justify-between items-center">
          {/* left side  */}
          <div className="flex items-center gap-6">
            <PiStackOverflowLogoDuotone className="text-white" size={30} />
            <div className="w-[80%] grid grid-cols-[1fr,_40px] items-center rounded-[3px] overflow-hidden relative">
              <FiSearch
                className="absolute left-1 top-1/2 -translate-y-1/2 opacity-75 text-[#0B72B5]"
                size={14}
              />
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full h-full border-none outline-none py-1 pl-5 pr-1 placeholder:text-[#0B72B5] text-[#0B72B5] "
              />
              <button className="bg-[#1C5077] text-white py-1 px-2 font-semibold">
                All
              </button>
            </div>
          </div>

          {/* right side  */}
          <div>
            <ul className="flex items-center gap-3 text-gray-50">
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
              <li>
                <NavLink to={"/signup"}>Signup</NavLink>
              </li>
              <li>
                <NavLink to={"/cart"}>Cart</NavLink>
              </li>
              <li>
                <RxAvatar size={30} />
              </li>
            </ul>
          </div>
        </div>

        {/* nav bottom  */}
        <div className="mt-4">
          <ul className="text-white flex justify-between items-center gap-2">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li className="relative group">
              <NavLink className="flex items-center">
                Products <MdKeyboardArrowDown />
              </NavLink>

              {/* sub menu items */}
              <ul className="absolute top-5 left-3 bg-gray-300 rounded-md p-2 z-20 text-gray-900 hidden opacity-0 group-hover:block group-hover:opacity-100">
                <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 rounded-[2px] px-2">
                  Digital Arts
                </li>
                <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 rounded-[2px] px-2">
                  E-Book
                </li>
                <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 rounded-[2px] px-2">
                  Stock Photos
                </li>
                <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 rounded-[2px] px-2">
                  Subscriptions
                </li>
              </ul>
            </li>
            <li className="relative">
              <NavLink className="flex items-center">Pricing</NavLink>
            </li>
            <li className="relative">
              <NavLink className="flex items-center">About</NavLink>
            </li>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li className="relative group">
              <NavLink className="flex items-center">
                Products <MdKeyboardArrowDown />
              </NavLink>

              {/* sub menu items */}
              <ul className="absolute top-5 left-3 bg-gray-300 rounded-md p-2 z-20 text-gray-900 hidden opacity-0 group-hover:block group-hover:opacity-100">
                <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 rounded-[2px] px-2">
                  Digital Arts
                </li>
                <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 rounded-[2px] px-2">
                  E-Book
                </li>
                <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 rounded-[2px] px-2">
                  Stock Photos
                </li>
                <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 rounded-[2px] px-2">
                  Subscriptions
                </li>
              </ul>
            </li>
            <li className="relative">
              <NavLink className="flex items-center">Pricing</NavLink>
            </li>
            <li className="relative">
              <NavLink className="flex items-center">About</NavLink>
            </li>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li className="relative group">
              <NavLink className="flex items-center">
                Products <MdKeyboardArrowDown />
              </NavLink>

              {/* sub menu items */}
              <ul className="absolute top-5 left-3 bg-gray-300 rounded-md p-2 z-20 text-gray-900 hidden opacity-0 group-hover:block group-hover:opacity-100">
                <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 rounded-[2px] px-2">
                  Digital Arts
                </li>
                <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 rounded-[2px] px-2">
                  E-Book
                </li>
                <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 rounded-[2px] px-2">
                  Stock Photos
                </li>
                <li className="cursor-pointer hover:bg-gray-500 hover:text-gray-50 rounded-[2px] px-2">
                  Subscriptions
                </li>
              </ul>
            </li>
            <li className="relative">
              <NavLink className="flex items-center">Pricing</NavLink>
            </li>
            <li className="relative">
              <NavLink className="flex items-center">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
