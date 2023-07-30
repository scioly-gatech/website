'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Playfair } from 'next/font/google'

const play = Playfair({ subsets: ['latin'] })

export default function CurrentTournament() {
  return (
    <div className="dark:bg-black bg-slate-200 w-screen md:min-h-[88vh] lg:min-h-[74vh]">
      <AnimatePresence>
      <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}
        >
          <div className="text-white bg-[url('/images/birdView-modified.jpg')] p-12 w-screen text-center text-3xl font-bold flex justify-center items-center">
            <div className="flex justify-center text-center lg:w-1/3 mx-12">
              <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-6xl ${play.className}`}>Georgia Tech Invitational</h1>
            </div>
          </div>
      </motion.div>
      </AnimatePresence>
      <p className="bg-lightBlue text-darkBlue text-center text-xl m-4 sm:mx-8 lg:mx-72 shadow-darkBlue dark:shadow-white shadow-xl"> Science Olympiad @ Georgia Tech is hosting the very first Georgia Tech Invitational! We are so excited to host all 23 of the events for the 2023-2024 season. <br /> <br />More information including dates and registration are coming soon! </p>
      <figure className="w-screen flex justify-center mt-8">
        <img src="/images/view.jpg" alt="View of Georgia Tech campus" width="450" height="300" className="shadow-xl shadow-darkBlue dark:shadow-white mb-8"/>
        <figcaption className="sr-only">
          View of Georgia Tech campus with some of the Atlanta skyline in the background.
        </figcaption>
      </figure>
    </div>
  )
}
