'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Lora } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'
import { ReactDOM } from 'react'

const play = Lora({ subsets: ['latin'], display: "swap" })
const Countdown = () => {
  const today = new Date(Date.now())
  const day = today.getDate()
  var diff
  if (day == 3) {
    return(
    <div className="p-8 bg-darkOrange w-1/4 text-2xl text-center m-4 shadow-xl shadow-white">
      <p className="font-bold underline"> 0 Days Remaining</p>
      <p className="">🐝 The Yellow Jacket Invitational has started! 🐝</p>
    </div>)
  } else if (day > 4) {
    diff = 3 + (31 - day)
  } else {
    diff = 3 - day
  }
  return(<p className="p-8 bg-darkOrange lg:w-1/4 text-2xl text-center m-4 shadow-xl shadow-white"><span className="font-bold px-1 text-white bg-darkBlue rounded-full">{diff}</span> Day{diff == 1? '':'s'} Until Yellow Jacket Invitational!</p>)
}

export default function CurrentTournament() {
  return (
    <>
    <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-RQ1XF1G76X`}
      />

      <Script strategy="lazyOnload" id="main-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RQ1XF1G76X', {
          page_path: window.location.pathname,
          });
      `}
      </Script>
      
    <div className="dark:bg-black bg-slate-200 w-full md:min-h-[88vh] lg:min-h-[74vh]">
      <div className="text-white bg-[url('/images/curr/birdView-modified.jpg')] p-12 w-full">
        <AnimatePresence>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className="text-3xl font-bold flex justify-center items-center"
          >
              <div className="flex justify-center text-center lg:w-1/3 mx-12">
                <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow`}>Yellow Jacket Invitational</h1>
              </div>
        </motion.div>
        </AnimatePresence>
      </div>
        <div className="text-blackborder-4 border-black bg-lightOrange flex flex-col items-center m-8 lg:mx-72 p-4 shadow-2xl shadow-white">
          <h2 className="text-3xl font-bold m-2 border-black border-4 p-2 text-center">Tournament Countdown</h2>
          <Countdown/>
        </div>
    </div>
    </>
  )
}
