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
            title = Volunteer Information
        </Head>
        <main className="dark:bg-black bg-slate-200 w-full md:min-h-[88vh] lg:min-h-[74vh] pb-12">

      {/** Heading */}
        <div className="text-white bg-[url('/images/curr/birdView-modified.jpg')] p-12 w-full">
            <AnimatePresence>
              <motion.div
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:1}}
                  className="text-3xl font-bold flex justify-center items-center max-w-full"
                >
                  
                    <div className="flex justify-center text-center lg:w-1/2 mx-8 lg:mx-24">
                      <h1 className={`${play.className} drop-shadow-titleShadow text-4xl lg:p-8 lg:text-6xl border-8 border-lightOrange tracking-wide`}>Volunteer Information</h1>
                    </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/** Links */}
          <p className="bg-lightBlue text-darkBlue text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg"> 
          <a href="https://forms.gle/8GLDTkrM7Yr4w8Nm8" target="_blank" className="underline font-bold text-2xl lg:text-4xl"> General Volunteer Sign-Up </a>
            <br />


            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfwDl2peNj8t3DZEaZh8bkGEmBVjCgOEJyPGc8Z12o_DYlkBg/viewform?embedded=true" width="100%" height="750">Loading…</iframe>
          </p>

          <p className="bg-darkBlue text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
    
            <span className='font-bold text-2xl underline'>Event Supervisor Sign-Up</span> <br />
              Sign-ups to be an Event Supervisor for the Yellow Jacket Invitational are closed at this time. If you would still like to be involved in our tournament, fill out our general volunteer interest form!

          </p>

        </main>
    </>
  )
}
