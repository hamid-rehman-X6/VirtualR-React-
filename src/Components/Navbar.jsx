import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assests/logo.png";
import { navItems } from "../DATA/projectData";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex justify-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="" />
              <span className="text-lg tracking-tight mt-2">Virtual R</span>
            </div>

            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex justify-center items-center space-x-12">
              <a href="" className="border rounded-md py-2 px-3">
                Sign In
              </a>
              <a
                href=""
                className=" rounded-md py-2 px-3  bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an Account
              </a>
            </div>

            <div className="lg:hidden md-flex flex-col justify-end">
              <button onClick={handleToggle}>{open ? <X /> : <Menu />}</button>
            </div>
          </div>

          {open && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>

              <div className="flex space-x-6">
                <a href="#" className="border rounded-md py-2 px-3">
                  Sign In
                </a>
                <a
                  href="#"
                  className="rounded-md bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3"
                >
                  Create an Account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
