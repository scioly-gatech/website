'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Lora } from 'next/font/google'
import Script from 'next/script'
import Link from 'next/link'

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
      <div className="text-white bg-[url('/images/pastTournaments/pastTournamentsImage.jpg')] p-12 w-full">
        <AnimatePresence>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className="text-3xl font-bold flex justify-center items-center"
          >
              <div className="flex justify-center text-center w-1/2 lg:w-1/3 mx-8">
                <h1 className={`border-8 border-darkOrange lg:p-8 tracking-widetext-center text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow`}>Past Tournaments</h1>
              </div>
        </motion.div>
        </AnimatePresence>
      </div>
        <div id="states">
            <p className="text-center text-3xl lg:text-4xl m-4 lg:m-6 font-bold">State Tournaments</p>
            <ul className="flex flex-col justify-evenly self-center lg:justify-center items-center">
                <li className="hover:opacity-60 hover:transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:duration-500 my-4 lg:my-6">
                    <Link href="/pastTournaments/2022" className="bg-lightOrange text-2xl lg:text-3xl rounded-2xl p-4">2022 Tournament</Link>
                </li>
                <li className="hover:opacity-60 hover:transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:duration-500 my-4 lg:my-6">
                    <Link href="/pastTournaments/2023" className="bg-darkOrange text-2xl lg:text-3xl p-4 rounded-2xl">2023 Tournament</Link>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}
