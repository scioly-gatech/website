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
          {/** Heading 
          <div className="text-white bg-[url('/images/curr/birdView-modified.jpg')] p-12 w-full">
            <AnimatePresence>
              <motion.div
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:1}}
                  className="text-3xl font-bold flex justify-center items-center max-w-full"
                >
                  
                    <div className="flex justify-center text-center lg:w-1/2 mx-4 lg:mx-24">
                      <h1 className={`${play.className} drop-shadow-titleShadow text-4xl lg:p-8 lg:text-6xl border-8 border-lightOrange tracking-wide`}>Makerspace Tours</h1>
                    </div>
              </motion.div>
            </AnimatePresence>
          </div>
*/}
        {/** Documents 
        
        <p className="bg-lightBlue text-darkBlue text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg"> 
            The following makerspaces have offered to provide tours to Science Olympiad competitors during the invitational. Registration is limited for each makerspace tour, so <span className="font-bold"> all registrants are expected to attend their respective tours. </span> For more information about each makerspace, please consult the <a href="/currentTournament/updates" className="underline hover:opacity-50">Tournament Information</a> document.

        </p>
        */}
        {/** Registration for MILL 
        <div className="bg-darkOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl"> Materials Innovation and Learning Laboratory (MILL) </h2>
            <br />
            <p className="text-xl text-darkBlue"> The MILL will offer two 45--minute sessions for 10 students each from 4:15 PM - 5:00 PM and 5:00 PM - 5:45 PM. Attendees are expected to wear proper personal protective equipment:
            </p>
            <ul className="list-disc list-inside mx-8 text-lg text-black">
                <li> Long, cotton pants </li>
                <li> Closed toe shoes </li>
                <li> Safety glasses (provided) </li>
            </ul>
            <br />
            <p className="text-xl text-darkBlue"> For more information, please visit the <a href="https://mill.mse.gatech.edu/" target="_blank" className="underline hover:opacity-50"> MILL Website </a></p>
            <br />
            <div className="my-4">
                <a href="https://www.signupgenius.com/go/10C0945ABAE29AAF8C43-47376663-mill#/" target="_blank" className="hover:opacity-50 bg-darkBlue p-4 shadow-white shadow-lg"> Registration </a>
            </div>
        </div>
      */}
        {/** Registration for Invention Studio 
        <div className="bg-lightOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl"> Invention Studio </h2>
            <br />
            <p className="text-xl text-darkBlue"> The Invention Studio will offer seven thirty-minute sessions for 30 students each from 4:00 PM - 4:30 PM, 4:15 PM - 4:45 PM, 4:30 PM - 5:00 PM, 4:45 PM to 5:15 PM, 5:00 PM - 5:30 PM, 5:15 PM - 5:45 PM, 5:30 PM - 6:00 PM
            </p>
            <br />
            <p className="text-xl text-darkBlue"> For more information, please visit the <a href="https://inventionstudio.gatech.edu/about/" target="_blank" className="underline hover:opacity-50"> Invention Studio Website </a></p>
            <br />
            <div className="my-4">
                <a href="https://www.signupgenius.com/go/10C0945ABAE29AAF8C43-47376558-invention#/" target="_blank" className="hover:opacity-50 bg-darkBlue p-4 shadow-white shadow-lg"> Registration </a>
            </div>
        </div>
*/}
        {/** Registration for Hive 
        <div className="bg-darkOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl"> The HIVE (Interdisciplinary Design Commons) </h2>
            <br />
            <p className="text-xl text-darkBlue"> The HIVE will offer four thirty-minute sessions for 20 students each from 4:00 PM - 4:30 PM, 4:30 PM - 5:00 PM, 5:00 PM - 5:30 PM, 5:30 PM - 6:00 PM
            </p>
            <br />
            <p className="text-xl text-darkBlue"> For more information, please visit the <a href="https://hive.ece.gatech.edu/" target="_blank" className="underline hover:opacity-50"> HIVE Website </a></p>
            <br />
            <div className="my-4">
                <a href="https://www.signupgenius.com/go/10C0945ABAE29AAF8C43-47427420-hive#/" target="_blank" className="hover:opacity-50 bg-darkBlue p-4 shadow-white shadow-lg"> Registration </a>
            </div>
        </div>
*/}
      </main>
    </>
  )
}
