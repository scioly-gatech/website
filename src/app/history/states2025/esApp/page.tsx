'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Lora } from 'next/font/google'
import React from 'react'
import Head from 'next/head'

const play = Lora({ subsets: ['latin'], display:"swap" })

export default function page() {
  return (
    <>
      <Head>
            title = Volunteer Information
        </Head>
        <main className="dark:bg-black bg-slate-200 w-full md:min-h-[88vh] lg:min-h-[74vh] pb-12">

      {/** Heading */}
        <div className="text-white bg-[url('/images/2025/States/Skyline.jpg')] p-12 w-full">
            <AnimatePresence>
              <motion.div
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:1}}
                  className="text-3xl font-bold flex justify-center items-center max-w-full"
                >

                    <div className="flex justify-center text-center lg:w-1/2 lg:mx-24">
                      <h1 className={`${play.className} drop-shadow-titleShadow text-4xl lg:p-8 lg:text-6xl border-8 border-lightOrange tracking-wide`}>Event Supervisor Application</h1>
                    </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/** Links */}
          <p className="bg-lightBlue text-darkBlue text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
          <a href="https://forms.gle/MipMEJAsqozZp3Q38" target="_blank" className="underline font-bold text-2xl lg:text-4xl"> ES Sign-Up </a>
            <br />
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQ8BASJrZrSQyK49pTSKBeQ8TlNZG0PXO2nvvdQIMYBB2KKg/viewform" width="100%" height="750">Loading…</iframe>
          </p>

        </main>
    </>
  )
}
