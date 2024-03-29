import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="h-screen snap-start p-5" id="Contacts">
      <div className="h-1/2 flex flex-col items-center justify-center">
        <h3 className="text-xl">Get In Touch</h3>
        <h3 className="font-bold text-5xl">Contact Me</h3>
        <div className=" flex flex-col gap-3 items-center mt-10 p-8 rounded-lg border-2 border-black shadow-md bg-black md:flex-row md:gap-6 ">
          <div className=" flex items-center gap-2 text-white font-semibold">
            <i className="fa-solid fa-envelope"></i>
            <p>anmolgarg271005@gmail.com</p>
          </div>
          <div className=" flex items-center gap-2 text-white font-semibold">
            <Link to="/">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link to="https://www.linkedin.com/in/anmol-garg27/" target="_blank">Linkedin</Link>
          </div>
        </div>
      </div>
      <div className="h-1/2 flex flex-col items-center justify-center pt-32 ">
      <ul className="flex md:gap-6 text-xl flex-wrap font-medium">
              <li className="md:p-3 px-2 border-b-2 border-transparent hover:border-slate-700">
                <a href="#Experience">Experience</a>
              </li>
              <li className="md:p-3 px-2 border-b-2 border-transparent hover:border-slate-700">
                <a href="#Projects">Projects</a>
              </li>
              <li className="md:p-3 px-2 border-b-2 border-transparent hover:border-slate-700">
                <a href="#Contacts">Contact</a>
              </li>
            </ul>
      <div className="py-10">
        <p className="text-center">Copyright <i className ="fa-regular fa-copyright"></i> 2024 Anmol Garg. All Rights Reserved</p>
      </div>
      </div>
    </section>
  );
};

export default Contact;
