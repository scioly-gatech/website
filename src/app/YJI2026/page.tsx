'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Lora } from 'next/font/google'
import Countdown from '@/app/components/Countdown'


const play = Lora({ subsets: ['latin'], display: "swap" })

export default function CurrentTournament() {

  return (
    <>

    <div className="dark:bg-black bg-slate-200 w-full md:min-h-[88vh] lg:min-h-[74vh]">
      <div className="text-white bg-[url('/images/2024/States/states-24.jpg')] p-12 w-full">
        <AnimatePresence>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className="text-3xl font-bold flex justify-center items-center"
          >
              <div className="flex justify-center text-center lg:w-1/3 lg:mx-12">
              <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow`}>YJI 2026</h1>
              </div>
        </motion.div>
        </AnimatePresence>
      </div>
        <div className="text-blackborder-4 border-black light:bg-lightBlue dark:bg-darkBlue dark:text-white flex flex-col items-center m-8 lg:mx-72 p-4 shadow-2xl shadow-[#c5d4e6]">
          <h2 className="text-3xl m-2 p-2 text-center font-bold">We will be hosting the third annual Yellow Jacket Invitational on January 31st, 2026!</h2>
          <Countdown targetDate='1-31-2026' eventName='YJI 2026' />
        </div>
        <div className="text-blackborder-4 border-black light:bg-lightBlue dark:bg-darkBlue dark:text-white flex flex-col items-center m-8 lg:mx-72 p-4 shadow-2xl shadow-[#c5d4e6]">
          <h2 className="text-3xl m-2 text-center font-bold">
            Registration is now live! Sign up <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3qhRDjCY6RJcp3QmP-PYVF-KnIJLL-k2siY1mPMOdKyfR8w/viewform?usp=sharing&ouid=115768010646187932553"
                target="_blank" rel="noopener noreferrer" className="hover:text-lightOrange underline">here</a>
          </h2>
          <br />
          <h3 className="text-xl text-center font-semibold">
            Registration is open to both Division B and Division C!
          </h3>
          <br />
          <ul className="list-disc">
              <li>Registration opens: August 1st, 2025</li>
              <li>Standard Registration Closes: November 1st, 2025 ($150 per team)</li>
              <li>Late Registration Closes: January 9th, 2026 ($180 per team)</li>
          </ul>
          <br />
          <p> For complete details, including penalty fees, team number limits,<br /> and registration requirements, please refer to the registration form.</p>
          <br />
          <p className="mb-2">Check out a list of teams who have registered <a href="https://docs.google.com/spreadsheets/d/1BT2hHQufuZorei2g5WCbZpkftRFcOr9A5f9TKtuJ2KA/edit?usp=sharing"
            target="_blank" rel="noopener noreferrer" className="hover:text-lightOrange underline">here</a>!</p>
        </div>
    </div>
    </>
  )
}