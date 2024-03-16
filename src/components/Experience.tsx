import React from 'react'

const Experience = () => {
  return (
    <section className='md:h-screen snap-start bg-gray-200 dark:bg-slate-800' id='Experience'>
        <div className="flex flex-col items-center justify-center p-5">
          <h1 className="text-xl dark:text-white">Explore my</h1>
          <h1 className="font-bold text-5xl dark:text-white">Experience</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10 p-5">
            <div className=" flex flex-col items-center gap-4 rounded-2xl p-5 w-[350px] h-[370px] border border-black md:w-[500px] md:h-[350px] dark:border-white shadow-md shadow-black dark:shadow-white">
              <div>
                <h1 className=" text-3xl text-slate-700 font-semibold text-center dark:text-white">
                  Frontend Development
                </h1>
              </div>
              <div className=" flex flex-wrap md:ml-8">
                <div className="w-1/2 p-4">
                  <h3 className=" text-xl font-semibold dark:text-white">HTML</h3>
                  <p className=" text-slate-600 font-medium dark:text-white">Experienced</p>
                </div>
                <div className="w-1/2 p-4">
                  <h3 className=" text-xl font-semibold dark:text-white">CSS</h3>
                  <p className=" text-slate-600 font-medium dark:text-white">Experienced</p>
                </div>
                <div className="w-1/2 p-4">
                  <h3 className=" text-xl font-semibold dark:text-white">JavaScript</h3>
                  <p className=" text-slate-600 font-medium dark:text-white">Experienced</p>
                </div>
                <div className="w-1/2 p-4">
                  <h3 className=" text-xl font-semibold dark:text-white">TypeScript</h3>
                  <p className=" text-slate-600 font-medium dark:text-white">Intermediate</p>
                </div>
                <div className="w-1/2 p-4">
                  <h3 className=" text-xl font-semibold dark:text-white">React</h3>
                  <p className=" text-slate-600 font-medium dark:text-white">Intermediate</p>
                </div>
                <div className="w-1/2 p-4">
                  <h3 className=" text-xl font-semibold dark:text-white">Tailwind</h3>
                  <p className=" text-slate-600 font-medium dark:text-white">Intermediate</p>
                </div>
              </div>
          </div>
          <div className=" flex flex-col items-center gap-4 rounded-2xl p-5 w-[350px] h-[350px] border border-black md:w-[500px] dark:border-white shadow-md shadow-black dark:shadow-white">
            <div>
              <h1 className=" text-3xl text-slate-700 font-semibold text-center dark:text-white">
                Backend Development
              </h1>
            </div>
            <div className=" flex flex-wrap md:ml-8">
              <div className="w-1/2 p-4">
                <h3 className=" text-xl font-semibold dark:text-white">Node JS</h3>
                <p className=" text-slate-600 font-medium dark:text-white">Intermediate</p>
              </div>
              <div className="w-1/2 p-4">
                <h3 className=" text-xl font-semibold dark:text-white">Express</h3>
                <p className=" text-slate-600 font-medium dark:text-white">Intermediate</p>
              </div>
              <div className="w-1/2 p-4">
                <h3 className=" text-xl font-semibold dark:text-white">MongoDB</h3>
                <p className=" text-slate-600 font-medium dark:text-white">Intermediate</p>
              </div>
              <div className="w-1/2 p-4">
                <h3 className=" text-xl font-semibold dark:text-white">Git</h3>
                <p className=" text-slate-600 font-medium dark:text-white">Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Experience