'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Lora } from 'next/font/google'


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
              <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow`}>YJI 2025</h1>
              </div>
        </motion.div>
        </AnimatePresence>
      </div>
        <div className="text-blackborder-4 border-black light:bg-lightBlue dark:bg-darkBlue dark:text-white flex flex-col items-center m-8 lg:mx-72 p-4 shadow-2xl shadow-white">
          <h2 className="text-3xl m-2 p-2 text-center font-bold">We will be hosting the second annual Yellow Jacket Invitational on February 1st, 2025! <br /><br /> For the first time, we will be have both division B and C teams competing. </h2>
          <h3 className="text-xl text-center font-semibold">Unfortunately, Div B registration is now closed due to reaching the max team limit (updated on October 23 2024)</h3>
          <div></div>
          <h3 className="text-xl text-center font-semibold">Unfortunately, Div C registration is now closed due to reaching the max team limit (updated on October 29 2024)</h3>
          <br /><br />
          <h3 className="text-2xl text-center font-semibold">Please visit our <a href="/YJI2025/generalInfo" className="underline hover:opacity-50 cursor-pointer">General Info page</a> for more information!</h3>
        </div>

    </div>
    </>
  )
}
