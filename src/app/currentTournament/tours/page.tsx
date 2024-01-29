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

        {/** Documents   */}
        
        <p className="bg-lightBlue text-darkBlue text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg"> 
            The following makerspaces have offered to provide tours to Science Olympiad competitors during the invitational. Registration is limited for each makerspace tour, so <span className="font-bold"> all registrants are expected to attend their respective tours. </span> For more information about each makerspace, please consult the <a href="/currentTournament/updates" className="underline hover:opacity-50">Tournament Information</a> document. <br /><br /><span className="italic"> Registration will open on Tuesday, January 30th at 11 AM EST. </span>

        </p>
        {/** Registration for MILL       */}
        <div className="bg-darkOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl"> Materials Innovation and Learning Laboratory (MILL) </h2>
            <br />
            <p className="text-xl text-darkBlue"> The Materials Innovation and Learning Laboratory (The MILL) strives to serve as a hub for experiential education in Materials Science by providing hands-on scientific training with common equipment used in the discipline, nurturing the student staff to become engineering leaders, and fostering interdisciplinary collaboration across campus. They currently house over 30 pieces of equipment commonly found in both the materials industry and research labs. Some equipment includes high-tech microscopes for material characterization, 3D printers, and measurement devices such as a contact angle goniometer.
            </p>
            <br />
            <p className="text-darkBlue font-semibold italic">Attendees are expected to wear proper personal protective equipment:</p>
            <ul className="list-disc list-inside mx-8 text-lg text-black">
                <li> Long, cotton pants </li>
                <li> Closed toe shoes </li>
                <li> Safety glasses (provided) </li>
            </ul>
            <br />
            <p className="text-xl text-darkBlue"> For more information, please visit the <a href="https://mill.mse.gatech.edu/" target="_blank" className="underline hover:opacity-50"> MILL Website </a></p>
            <br />
            <div className="my-4">
                {/** <a href="https://www.signupgenius.com/go/10C0945ABAE29AAF8C43-47376663-mill#/" target="_blank" className="hover:opacity-50 bg-darkBlue p-4 shadow-white shadow-lg"> Registration </a>*/}
                <p className="bg-darkBlue p-4"> Registration </p>
            </div> 
        </div>

        {/** Registration for Invention Studio */}
        <div className="bg-lightOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl"> Invention Studio </h2>
            <br />
            <p className="text-xl text-darkBlue"> The Invention Studio is a student-run makerspace that provides access to a wide variety of tools including 3D printers, laser cutters, waterjets, wood tools, and more. It is staffed by Prototyping Instructors (PIs), student volunteers who are always on hand to offer training and support for projects. They support all students, staff, and faculty in building their dream project, whether it is for research, personal, or academic usage with tools that are 100% free to use. It is the largest makerspace on campus by size, and by daily users.
            </p>
            <br />
            <p className="text-xl text-darkBlue"> For more information, please visit the <a href="https://inventionstudio.gatech.edu/about/" target="_blank" className="underline hover:opacity-50"> Invention Studio Website </a></p>
            <br />
            <div className="my-4">
                {/** <a href="https://www.signupgenius.com/go/10C0945ABAE29AAF8C43-47376558-invention#/" target="_blank" className="hover:opacity-50 bg-darkBlue p-4 shadow-white shadow-lg"> Registration </a> */}
                <p className="bg-darkBlue p-4"> Registration </p>
            </div>
        </div>

        {/** Registration for Hive */}
        <div className="bg-darkOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl"> The HIVE (Interdisciplinary Design Commons) </h2>
            <br />
            <p className="text-xl text-darkBlue"> The Interdisciplinary Design Commons (IDC) is a 15,000 square foot, state-of-the-art makerspace that is located in the rotunda of the Van Leer Building at the heart of the Georgia Tech campus. Here, Tech students cultivate their making skills, create prototypes for their next big idea, or just build out their personal projects for fun! While the HIVE is considered the primary maker space for those interested in Electrical Engineering and other related disciplines, it is open to people from all backgrounds. They provide tools such as 3D printers, laser cutters, and spray paint booths to support the exploration of PCB fabrication, embedded systems, and much more.

            </p>
            <br />
            <p className="text-xl text-darkBlue"> For more information, please visit the <a href="https://hive.ece.gatech.edu/" target="_blank" className="underline hover:opacity-50"> HIVE Website </a></p>
            <br />
            <div className="my-4">
                {/** <a href="https://www.signupgenius.com/go/10C0945ABAE29AAF8C43-47427420-hive#/" target="_blank" className="hover:opacity-50 bg-darkBlue p-4 shadow-white shadow-lg"> Registration </a>*/}
                <p className="bg-darkBlue p-4"> Registration </p>
            </div>
        </div>
      </main>
    </>
  )
}
