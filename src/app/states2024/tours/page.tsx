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
            title = Updates/Tournament Information
        </Head>
        <main className="dark:bg-black bg-slate-200 max-w-full md:min-h-[88vh] lg:min-h-[74vh] pb-12">
          {/** Heading */}
          <div className="text-white bg-[url('/images/2024/States/states-24.jpg')] p-12 w-full">
            <AnimatePresence>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1}}
                className="text-3xl font-bold flex justify-center items-center"
                >
                    <div className="flex justify-center text-center lg:w-1/3 lg:mx-12">
                    <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow`}>Makerspace Tours</h1>
                    </div>
            </motion.div>
            </AnimatePresence>
      </div>

        {/** Documents   */}
        
        <p className="bg-lightBlue text-darkBlue text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg"> 
            We will providing makerspace tours to Science Olympiad competitors during the invitational. Registration is limited for each makerspace tour, so <span className="font-bold"> all registrants are expected to attend their respective tours. </span> Coaches with students who miss their tours will be contacted after the tournament. <span className="italic">For more information, please consult the <a href="/states2024/info" className="underline hover:opacity-50">Tournament Information</a> document.</span>

        </p>
        {/** Registration      */}
        <div id="mill-tour" className="bg-darkOrange text-white text-center text-xl lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl"> Registration </h2>
            <br />
            <p className="text-xl text-darkBlue font-semibold"> Please put your school in the comment field when you sign up. Any sign-ups that do not list the school they are affiliated with will be removed. 
            </p>
            <br />
            <p className="text-black">Students should show up 5 minutes before the listed time outside CULC 144 and 152 (where awards are occurring) at the time the tour is scheduled to start. There will be no waiting for students that arrive late. </p>
            <br />
            <div className="my-4">
                <a href="https://www.signupgenius.com/go/10C0945ABAE29AAF8C43-48517559-georgia#/" target="_blank" className="hover:opacity-50 bg-darkBlue p-4 shadow-white shadow-lg"> Registration </a>
          </div> 
        </div>
      </main>
    </>
  )
}
