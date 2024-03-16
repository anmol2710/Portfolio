import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="h-screen snap-start bg-gray-400 dark:bg-black p-5" id="Contacts">
      <div className="h-1/2 flex flex-col items-center justify-center">
        <h3 className="text-xl dark:text-white">Get In Touch</h3>
        <h3 className="font-bold text-5xl dark:text-white">Contact Me</h3>
        <div className=" flex flex-col gap-3 items-center mt-10 p-8 rounded-3xl border border-black shadow-md bg-black md:flex-row md:gap-6 dark:bg-slate-800 dark:shadow-white ">
          <div className=" flex items-center gap-2 text-white">
            <i className="fa-solid fa-envelope"></i>
            <p>anmolgarg271005@gmail.com</p>
          </div>
          <div className=" flex items-center gap-2 text-white">
            <Link to="/">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link to="https://www.linkedin.com/in/anmol-garg27/" target="_blank">Linkedin</Link>
          </div>
        </div>
      </div>
      <div className="h-1/2 flex flex-col items-center justify-center pt-32 ">
      <ul className="flex md:gap-6 text-xl flex-wrap font-medium">
              <li className="md:p-3 px-2 border-b-2 border-transparent hover:border-slate-700 dark:text-white dark:hover:border-white">
                <a href="#Experience">Experience</a>
              </li>
              <li className="md:p-3 px-2 border-b-2 border-transparent hover:border-slate-700 dark:text-white dark:hover:border-white">
                <a href="#Projects">Projects</a>
              </li>
              <li className="md:p-3 px-2 border-b-2 border-transparent hover:border-slate-700 dark:text-white dark:hover:border-white">
                <a href="#Contacts">Contact</a>
              </li>
            </ul>
      <div className="py-10 dark:text-white">
        <p className="text-center">Copyright <i className ="fa-regular fa-copyright"></i> 2024 Anmol Garg. All Rights Reserved</p>
      </div>
      </div>
    </section>
  );
};

export default Contact;
