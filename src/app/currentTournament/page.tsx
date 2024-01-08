'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Lora } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'

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
      <div className="text-white bg-[url('/images/curr/birdView-modified.jpg')] p-12 w-full">
        <AnimatePresence>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className="text-3xl font-bold flex justify-center items-center"
          >
              <div className="flex justify-center text-center lg:w-1/3 mx-12">
                <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-6xl ${play.className}`}>Yellow Jacket Invitational</h1>
              </div>
        </motion.div>
        </AnimatePresence>
      </div>
        {/*<p className="bg-lightBlue text-darkBlue text-center text-4xl m-4 sm:mx-8 lg:mx-72 shadow-darkBlue dark:shadow-white shadow-xl"> Science Olympiad @ Georgia Tech is hosting the very first Yellow Jacket Invitational! </p>*/}
        <figure className="w-full flex justify-center mt-8 pb-8">
          <Image src="/images/curr/YJIFlier.png" alt="Yellow Jacket Invitational Promotional Flyer" width="700" height="300"/>
          <figcaption className="sr-only">
            2024 Yellow Jacket Invitational applications are open! The premier Division C invitational of the southeast will be held on February 3rd, 2024 at Georgia Tech. Applications close on January 13th, and we will close appls early if we reach capacity, so make sure to register early. The is a fee of $125 per team for up to 2 teams, although 3rd and 4th teams may be allowed on a case to case basis. For more information, please visit https://sciolygatech.org. 
          </figcaption>
        </figure>
      
      {/*<figure className="w-full flex justify-center mt-8">
        <Image src="/images/curr/view.jpg" alt="View of Georgia Tech campus" width="450" height="300" className="shadow-xl shadow-darkBlue dark:shadow-white mb-8"/>
        <figcaption className="sr-only">
          View of Georgia Tech campus with some of the Atlanta skyline in the background.
        </figcaption>
  </figure>*/}
    </div>
    </>
  )
}
