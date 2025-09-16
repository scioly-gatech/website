'use client'
import Profile from "../components/Profile"
import { Libre_Franklin, Lora } from 'next/font/google'

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const libre = Libre_Franklin({subsets: ['latin']})

const play = Lora({
  subsets: ['latin'],
  display: "swap"
})

export default function MeetTeam() {

    const profiles = [
      {id: 1, name: "Ethan Maraldo", role: "President", imgRoute: "/images/execPics/Ethan.jpeg"},
      {id: 2, name: "Femke Kovoor", role: "Vice President Club Logistics", imgRoute: "/images/execPics/Femke.jpg"},
      {id: 3, name: "Krish Patil", role: "Vice President Tournament Logistics", imgRoute: "/images/execPics/Blank.jpg"},
      {id: 4, name: "Victor Hesu", role: "Vice President Communications", imgRoute: "/images/execPics/Victor.jpg"},
      {id: 5, name: "Samrita Shetty ", role: "Logistics Co-Director", imgRoute: "/images/execPics/Samrita.jpeg"},
      {id: 6, name: "Rachel Nam", role: "Logistics Co-Director", imgRoute: "/images/execPics/Blank.jpg"},
      {id: 7, name: "Thomas Becker", role: "Exam Co-Director", imgRoute: "/images/execPics/Thomas.JPG"},
      {id: 8, name: "Larissa Martin ", role: "Exam Co-Director", imgRoute: "/images/execPics/Blank.JPG"},
      {id: 9, name: "Devam Shrivastava", role: "Build Co-Director", imgRoute: "/images/execPics/Devam.jpeg"},
      {id: 10, name: "Nathan Donagi", role: "Build Co-Director", imgRoute: "/images/execPics/Blank.jpg"},
      {id: 11, name: "Justin Li", role: "Finance Co-Director", imgRoute: "/images/execPics/Justin.jpg"},
      {id: 12, name: "Sishnukeshav Balamurali", role: "Finance Co-Director", imgRoute: "/images/execPics/Blank.jpg"},
      {id: 13, name: "Swathi Mugundu Pradeep", role: "Creative Co-Director", imgRoute: "/images/execPics/Swathi.jpg"},
      {id: 14, name: "Melody Lee", role: "Creative Co-Director", imgRoute: "/images/execPics/Melody.jpeg"},
      {id: 15, name: "Johnny Chen", role: "Outreach Co-Director", imgRoute: "/images/execPics/Blank.jpg"},
      {id: 16, name: "Yaitihya Sahoo", role: "Outreach Co-Director", imgRoute: "/images/execPics/Blank.jpg"},

    ]

  //Stagger animation below was modified from Leigh Halliday's YouTube tutorial titled 'Staggered Animations in React with Framer Motion in 5 Minutes'. The video can be found at this link: https://www.youtube.com/watch?v=u_95SPKE6vg&ab_channel=LeighHalliday

  return (
    <>
    <main className="bg-slate-200 dark:bg-black flex flex-col items-center w-full">
      <AnimatePresence>
        <div id="title" className="flex flex-row justify-center bg-[url('/images/about/background-1.jpg')] w-full py-10">
        <motion.div
          initial={{opacity:0.5}}
          animate={{opacity:1}}
          transition={{duration:2}}
        >
          <h1 className= {`${play.className} drop-shadow-titleShadow text-white dark:text-darkBlue dark:bg-white font-bold text-5xl border-8 border-lightOrange m-10 p-8 lg:px-48 flex justify-center`}>
           About&nbsp;Us
          </h1>
          </motion.div>
          <figure className="hidden lg:block">
            <Image src="/images/about/gtbuilding.jpg" alt="Picture of one of the buildings on Georgia Tech's campus" width="300" height="200" className="mb-2"/>
            <figcaption className="sr-only">Picture of one of the buildings on the Georgia Tech campus/</figcaption>
          </figure>
        </div>
      <div className="w-full">
      <p className={`${libre.className} text-lg lg:mx-64 mx-8 text-center p-4 flex justify-center border-4 border-darkBlue dark:text-white mt-4`}>
      Science Olympiad at Georgia Tech is an undergraduate student group with a mission to engage and empower students striving to become scientists and engineers through the Science Olympiad experience.
      <br/>
      <br />
        We work around the year both within Georgia Tech and in the Atlanta area to promote Science Olympiad opportunities for students. We are especially excited to be hosting the Georgia Science Olympiad State Tournament for the 3rd year in a row and the very first Yellow Jacket Invitational, and this would not be possible without the dedication and effort of our members!
      </p>
      </div>

      <div id="line" className="border border-black w-[80%] mt-[5vh]">
      </div>

      <h1 className={`text-lightBlue font-mono dark:text-darkBlue dark:bg-lightBlue font-bold text-3xl border-2 border-white m-2 p-6 lg:px-64 shadow-lg bg-darkBlue w-72 flex justify-center ${play.className}`}>
      🐝&nbsp;Our&nbsp;Team&nbsp;🐝
      </h1>
      </AnimatePresence>
      <AnimatePresence >
        <div className="lg:mx-72 grid grid-cols-1 twoCol:grid-cols-2 threeCol:grid-cols-3 mb-4">
          {profiles.map((profile, i) => (
            <motion.div
            key={profile.id}
            initial={{opacity:0.5}}
            whileInView={{opacity:1}}
            transition={{duration:0.2, delay:i*0.1}}
            >
              <Profile name={profile.name} role={profile.role} imgRoute={profile.imgRoute} color={profile.id % 2 === 0}/>
            </motion.div>
          ))}
          </div>
      </AnimatePresence>
      <hr />
    </main>
    </>
  )
}
