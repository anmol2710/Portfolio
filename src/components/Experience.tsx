import React from 'react'

const Experience = () => {
  return (
    <section className='md:h-screen snap-start bg-gray-200' id='Experience'>
        <div className="flex flex-col items-center justify-center p-5">
          <h1 className="text-xl ">Explore my</h1>
          <h1 className="font-bold text-5xl ">Experience</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10 p-5">
            <div className=" flex flex-col items-center gap-4 rounded-2xl p-5 w-[350px] h-[370px] border border-black md:w-[500px] md:h-[350px] shadow-md shadow-black">
              <div>
                <h1 className=" text-3xl text-slate-700 font-semibold text-center">
                  Frontend Development
                </h1>
              </div>
              <div className=" flex flex-wrap md:ml-8">
                <div className="w-1/2 p-4">
                  <h3 className=" text-xl font-semibold">HTML</h3>
                  <p className=" text-slate-600 font-medium">Experienced</p>
                </div>
                <div className="w-1/2 p-4">
                  <h3 className=" text-xl font-semibold">CSS</h3>
                  <p className=" text-slate-600 font-medium">Experienced</p>
                </div>
                <div className="w-1/2 p-4">
                  <h3 className=" text-xl font-semibold">JavaScript</h3>
                  <p className=" text-slate-600 font-medium">Experienced</p>
                </div>
                <div className="w-1/2 p-4">
                  <h3 className=" text-xl font-semibold">TypeScript</h3>
                  <p className=" text-slate-600 font-medium">Intermediate</p>
                </div>
                <div className="w-1/2 p-4">
                  <h3 className=" text-xl font-semibold">React</h3>
                  <p className=" text-slate-600 font-medium">Intermediate</p>
                </div>
                <div className="w-1/2 p-4">
                  <h3 className=" text-xl font-semibold">Tailwind</h3>
                  <p className=" text-slate-600 font-medium">Intermediate</p>
                </div>
              </div>
          </div>
          <div className=" flex flex-col items-center gap-4 rounded-2xl p-5 w-[350px] h-[350px] border border-black md:w-[500px] shadow-md shadow-black">
            <div>
              <h1 className=" text-3xl text-slate-700 font-semibold text-center">
                Backend Development
              </h1>
            </div>
            <div className=" flex flex-wrap md:ml-8">
              <div className="w-1/2 p-4">
                <h3 className=" text-xl font-semibold">Node JS</h3>
                <p className=" text-slate-600 font-medium">Intermediate</p>
              </div>
              <div className="w-1/2 p-4">
                <h3 className=" text-xl font-semibold">Express</h3>
                <p className=" text-slate-600 font-medium">Intermediate</p>
              </div>
              <div className="w-1/2 p-4">
                <h3 className=" text-xl font-semibold">MongoDB</h3>
                <p className=" text-slate-600 font-medium">Intermediate</p>
              </div>
              <div className="w-1/2 p-4">
                <h3 className=" text-xl font-semibold">Git</h3>
                <p className=" text-slate-600 font-medium">Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Experience