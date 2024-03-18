import React from "react";
import {Link} from "react-router-dom"
import image from "../asset/image.png";
import Navbar from "../components/Navbar";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="">
      <section className=" min-h-screen md:h-screen snap-start pb-6">
        <Navbar />
        <div className="flex items-center justify-center mt-10 md:mt-28">
          <div className="flex flex-wrap items-center justify-center gap-5 w-3/4 md:gap-20">
            <div className="bg-slate-400 rounded-full overflow-hidden shadow-lg shadow-black   ">
              <img className="w-96" src={image} alt="" />
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-xl font-medium ">Hello, I'm</p>
              <h1 className="text-3xl font-bold ">Anmol Garg</h1>
              <h3 className="text-2xl font-semibold text-gray-600 font-sans ">
                Learning Full Stack Dev
              </h3>
              <div className="flex gap-3 ">
                <Link to="https://www.linkedin.com/in/anmol-garg27/" target="_blank"><i className="fa-brands fa-linkedin text-3xl"></i></Link>
                <Link to="https://github.com/anmol2710" target="_blank"><i className="fa-brands fa-square-github text-3xl"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;
