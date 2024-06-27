'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Lora } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'
import { ReactDOM } from 'react'

const play = Lora({ subsets: ['latin'], display: "swap" })

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
        <div className="text-blackborder-4 border-black bg-lightOrange flex flex-col items-center m-8 lg:mx-72 p-4 shadow-2xl shadow-white">
          <h2 className="text-3xl font-bold m-2 border-black border-4 p-2 text-center">We will be hosting the second annual Yellow Jacket Invitational on February 1st, 2025! <br /><br /> For the first time, we will be have both division B and C teams competing. </h2>
        </div>
        <div className="text-blackborder-4 border-black bg-lightOrange flex flex-col items-center m-8 lg:mx-72 p-4 shadow-2xl shadow-white">
          <h2 className="text-3xl font-bold m-2 border-black border-4 p-2 text-center">
            <h1> Interest Form </h1>
            <br>
            </br>
          <iframe height="700px" width="800px" src="https://docs.google.com/forms/d/e/1FAIpQLSfGgaHX6D247qVS7Q4jd7WJ4az5cyqaj-XIQQ1VPfxAYf80jw/viewform">

          </iframe>
          </h2>
        </div>
    </div>
    </>
  )
}
