'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Lora } from 'next/font/google'
import React from 'react'
import Script from 'next/script'
import Head from 'next/head'

const play = Lora({ subsets: ['latin'], display:"swap" })

export default function page() {
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
      <Head>
            title = Get Involved
        </Head>
        <main className="dark:bg-black bg-slate-200 w-full md:min-h-[88vh] lg:min-h-[74vh] pb-12">

      {/** Heading */}
        <div className="text-white bg-[url('/images/getInvolved/join.jpg')] p-12 w-full">
            <AnimatePresence>
              <motion.div
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:1}}
                  className="text-3xl font-bold flex justify-center items-center max-w-full"
                >
                  
                    <div className="flex justify-center text-center lg:w-1/2 lg:mx-24">
                      <h1 className={`${play.className} drop-shadow-titleShadow text-4xl lg:p-8 lg:text-6xl border-8 border-lightOrange tracking-wide bg-white text-darkBlue`}>Get Involved</h1>
                    </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/** Links */}
          <div className="max-w-full flex flex-col items-center">

          <p className="bg-lightBlue text-black text-center text-xl lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg font-bold"> 
            If interested in being an event supervisor for our <span className="font-bold">2025 Division C State Tournament</span>, visit <a href="/states2025/esApp" className="underline hover:opacity-50 hover:cursor-pointer">here</a> for the application! 

        </p>
 
          <div className="text-blackborder-4 border-black bg-lightOrange text-center text-2xl m-8 lg:mx-72 p-8 shadow-2xl shadow-darkOrange">
              <h1 className="font-bold text-4xl">Join Science Olympiad</h1>
              <span>1. Go to </span><a href="https://engagesupport.campuslabs.com/hc/en-us" target="_blank" className="hover:text-darkOrange underline">Engage</a>
              <br />
              <p>2. Login using your Georgia Tech email </p>
              <p>3. Click join </p>
              <p>4. Search Science Olympiad </p>
              <br />
              <h1 className="font-bold text-4xl">General Volunteer Sign-Up</h1>
              <p> Information will be added soon! </p>
        </div>
      
          </div>
        </main>
    </>
  )
}
