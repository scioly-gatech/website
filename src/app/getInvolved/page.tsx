'use client'

import { AnimatePresence, motion, useMotionValue, useTransform, useViewportScroll } from 'framer-motion'
import { Lora } from 'next/font/google'
import React, { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'

const play = Lora({ subsets: ['latin'], display: 'swap' })

export default function Page() {
  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [0, 400], [0, -200]) // adjust range to control scroll effect

  return (
    <>
      <Head>
        <title>Get Involved</title>
      </Head>

      <main className="dark:bg-black bg-slate-200 w-full pb-12">

        {/* HERO SECTION */}
        <div className="relative w-full h-screen overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute top-0 left-0 w-full h-[150%]" // taller than viewport for vertical parallax
          >
            <Image
              src="/images/getInvolved/getInvolved.jpg"
              alt="Get Involved"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>

          <div className="relative z-10 flex justify-center items-center h-screen">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex justify-center text-center"
              >
                <h1
                  className={`
                    ${play.className}
                    drop-shadow-titleShadow
                    text-4xl
                    lg:text-6xl
                    p-6
                    lg:p-8
                    border-8
                    border-lightOrange
                    tracking-wide
                    bg-white
                    text-darkBlue
                  `}
                >
                  Get Involved
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-full flex flex-col items-center mt-12">

          <p className="bg-lightBlue text-black text-center text-xl lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg font-bold">
            If interested in being an event supervisor for our{" "}
            <span className="font-bold">2025 Division C State Tournament</span>,
            visit{" "}
            <a
              href="/states2025/esApp"
              className="underline hover:opacity-50 hover:cursor-pointer"
            >
              here
            </a>{" "}
            for the application!
          </p>

          <div className="border-4 border-black bg-lightOrange text-center text-2xl m-8 lg:mx-72 p-8 shadow-2xl shadow-darkOrange">
            <h1 className="font-bold text-4xl mb-4">Join Science Olympiad</h1>

            <p>
              1. Go to{" "}
              <a
                href="https://engagesupport.campuslabs.com/hc/en-us"
                target="_blank"
                className="hover:text-darkOrange underline"
              >
                Engage
              </a>
            </p>
            <p>2. Login using your Georgia Tech email</p>
            <p>3. Click Join</p>
            <p>4. Search Science Olympiad</p>

            <br />

            <h1 className="font-bold text-4xl mb-2">General Volunteer Sign-Up</h1>
            <p>Information will be added soon!</p>
          </div>

        </div>
      </main>
    </>
  )
}


