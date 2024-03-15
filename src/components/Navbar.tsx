import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-center py-10 dark:bg-slate-900">
        <div className="flex items-center justify-around w-3/4">
          <div>
            <h1 className="text-3xl font-bold dark:text-white">
              <Link to="/">Anmol Garg</Link>
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-6 text-xl flex-wrap font-medium">
              <li className="p-3 border-b-2 border-transparent hover:border-slate-700 dark:text-white dark:hover:border-white">
                <a href="#Experience">Experience</a>
              </li>
              <li className="p-3 border-b-2 border-transparent hover:border-slate-700 dark:text-white dark:hover:border-white">
                <a href="#Projects">Projects</a>
              </li>
              <li className="p-3 border-b-2 border-transparent hover:border-slate-700 dark:text-white dark:hover:border-white">
                <a href="#Contacts">Contact</a>
              </li>
            </ul>
          </div>
          <div className=" md:hidden dark:text-white">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>
      {isOpen ? (
        <>
          <div className="md:hidden dark:bg-slate-900">
            <ul className="flex flex-col items-center gap-2 text-xl flex-wrap font-medium">
            <li className="p-3 border-b-2 border-transparent hover:border-slate-700 dark:text-white dark:hover:border-white">
                <a href="#Experience">Experience</a>
              </li>
              <li className="p-3 border-b-2 border-transparent hover:border-slate-700 dark:text-white dark:hover:border-white">
                <a href="#Projects">Projects</a>
              </li>
              <li className="p-3 border-b-2 border-transparent hover:border-slate-700 dark:text-white dark:hover:border-white">
                <a href="#Contacts">Contact</a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
