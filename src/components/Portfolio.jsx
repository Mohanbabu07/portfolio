import React from "react";
import tastehub from "../assets/portfolio/tastehub.png";
import tracker from "../assets/portfolio/tracker.png";
import scheduler from "../assets/portfolio/scheduler.png";
import Memory from "../assets/portfolio/Memory.png";
import disk from "../assets/portfolio/disk.png";
import page from "../assets/portfolio/page.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: tastehub,
      link: 'https://taste-hub.vercel.app/',
      repo: 'https://github.com/Mohanbabu07/Multi-vendor-Foodshop'
    },
    {
      id: 2,
      src: tracker,
      link: 'https://tracker-i5yc.onrender.com/',
      repo: 'https://github.com/Mohanbabu07/Expense-tracker'
    },
    {
      id: 3,
      src: scheduler,
      link: 'https://cpu-scheduling-simulation.netlify.app/',
      repo: 'https://github.com/Mohanbabu07/process_scheduler'
    },
    {
      id: 4,
      src: Memory,

      link: 'https://memory-management-algorithm.netlify.app/',
      repo: 'https://github.com/Mohanbabu07/Memory-Management-Simulator'
    },
    {
      id: 5,
      src: disk,
      link: 'hhttps://disk-scheduling-algorithm.netlify.app/',
      repo: 'https://github.com/Mohanbabu07/diskschedulingalgorithms'
    },
    {
      id: 6,
      src: page,
      link: 'https://page-replacementalgorithm.netlify.app/',
      repo: 'https://github.com/Mohanbabu07/pagereplacementalgorithm'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
