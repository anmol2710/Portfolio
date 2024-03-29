import React from 'react'
import {Link} from "react-router-dom"

const Projects = () => {
  return (
    <section className='md:h-screen snap-start  p-5' id='Projects'>
        <div className="flex flex-col items-center justify-center p-5">
          <h1 className="text-xl ">Browse my</h1>
          <h1 className="font-bold text-5xl ">Projects</h1>
        </div>

        <div className=' flex items-center flex-wrap justify-center md:gap-10'>
        <div className='flex items-center justify-center mt-7'>
            <div className=' h-[350px] w-[250px] border-2 border-black rounded-xl py-7 px-5 flex flex-col items-center justify-between  shadow-[6px_6px_1px_black]'>
                <h1 className=' text-3xl font-bold text-center'>E-Notes Frontend</h1>
                <div className=' text-justify mt-5'>
                    <p>I have created a website for my class students. In which they can Sign Up and get their class Notes and Lab Practical.</p>
                </div>
                    <div className=' w-full flex items-center justify-between mt-5'>
                        <Link to="https://github.com/anmol2710/E-Note-Frontend" target='_blank' className=' bg-black text-white px-3 py-2 rounded-2xl font-semibold'>Github</Link>
                        <Link to="https://e--notes.vercel.app/" target='_blank' className=' border border-black px-3 py-2 rounded-2xl font-semibold '>Live Demo</Link>
                    </div>
            </div>
        </div>
        <div className='flex items-center justify-center mt-7'>
            <div className=' h-[350px] w-[250px] border-2 border-black rounded-xl py-7 px-5 flex flex-col items-center justify-between  shadow-[6px_6px_1px_black] '>
                <h1 className=' text-3xl font-bold text-center'>E-Notes Backend</h1>
                <div className=' text-justify mt-5'>
                    <p>This is the backend used by my previous site E-Notes. It store all users signup and login data.</p>
                </div>
                    <div className=' w-full flex items-center justify-between mt-5'>
                        <Link to="https://github.com/anmol2710/E-notes-backend" target='_blank' className=' bg-black text-white px-3 py-2 rounded-2xl font-semibold '>Github</Link>
                        <Link to="https://e-notes-backend.vercel.app/" target='_blank' className=' border border-black px-3 py-2 rounded-2xl font-semibold  '>Live Demo</Link>
                    </div>
            </div>
        </div>
        <div className='flex items-center justify-center mt-7'>
            <div className=' h-[350px] w-[250px] border-2 border-black rounded-xl py-7 px-5 flex flex-col items-center justify-between  shadow-[6px_6px_1px_black] '>
                <h1 className=' text-3xl font-bold text-center'>E-Notes Android</h1>
                <div className=' text-justify mt-5'>
                    <p>I have created a android app for my class students. In which they can Sign Up and get their class Notes and Lab Practical.</p>
                </div>
                    <div className=' w-full flex items-center justify-between mt-5'>
                        <Link to="https://github.com/anmol2710/E-Notes-Android" target='_blank' className=' bg-black text-white px-3 py-2 rounded-2xl font-semibold '>Github</Link>
                        <Link to="https://github.com/anmol2710/E-Notes-Android" target='_blank' className=' border border-black px-3 py-2 rounded-2xl font-semibold '>Live Demo</Link>
                    </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Projects