'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Lora } from 'next/font/google'
import Image from 'next/image'
import { ReactDOM } from 'react'

const play = Lora({ subsets: ['latin'], display: "swap" })

export default function Schedules() {
  return (
    <>

    <div className="dark:bg-black bg-slate-200 w-full md:min-h-[88vh] lg:min-h-[74vh]">
      <div className="text-white bg-[url('/images/2025/States/Skyline.jpg')] p-12 w-full">
        <AnimatePresence>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className="text-3xl font-bold flex justify-center items-center"
          >
              <div className="flex justify-center text-center lg:w-1/3 lg:mx-12">
              <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow`}>Schedule</h1>
              </div>
        </motion.div>
        </AnimatePresence>
      </div>
        <div className="bg-lightOrange text-center m-4 lg:m-12 lg:mx-48 shadow-darkBlue dark:shadow-white shadow-2xl p-8">
            <a href="https://docs.google.com/spreadsheets/d/18lVOOCPZhAx_y_tM50xhPdlC4QSzOGoU4vnoQDZIs-Y/edit?gid=0#gid=0" target="_blank" className="text-3xl mb-8 font-bold underline md:no-underline md:border-black md:border-4 p-2 text-black bg-white hover:opacity-50"> Schedule Link</a>
            <iframe src="https://docs.google.com/spreadsheets/d/18lVOOCPZhAx_y_tM50xhPdlC4QSzOGoU4vnoQDZIs-Y/edit?gid=0#gid=0" width="90%" height="750" className="mt-8 md:ml-0 lg:ml-24"></iframe>
        </div>
    </div>
    </>
  )
}
