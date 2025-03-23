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
                    <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow`}>General Info</h1>
                    </div>
            </motion.div>
            </AnimatePresence>
      </div>
        
        <p className="bg-lightBlue text-black text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg font-bold"> 
            Please see the <a href="https://docs.google.com/document/d/1j9YKMA2QOkeO1PnCeraj5KCvax4C3yn5Auroo70hkhE/edit?tab=t.0" className="underline hover:cursor-pointer hover:opacity-50" target="_blank">tournament communiques</a> for current information. If you have any further questions, feel free to contact us at scioly.gatech@gmail.com!

        </p>

        <div className="bg-lightOrange text-black text-center text-xl lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="text-3xl font-bold underline md:no-underline md:border-black md:border-4 p-2 text-black bg-white mx-12"> Reminders </h2>
            <br />
            <ul className="font-semibold">
                <li >We will be using <span className="font-bold underline">National</span> level rules for all events.</li>
                <br />
                <li className="">The awards entry period will begin at 5:15 PM and will end at 5:45 PM. We anticipate awards ending somewhere between 7:00 PM and 7:30 PM. This will be updated on the schedule sheet in the coming days.
                </li>
                <br />
                <li>For day-of communications, we will be setting up a Remind class. The code to join will be shared at check-in. Additionally, we will have dedicated volunteers assigned to each building with homerooms/event rooms who will act as direct liaisons with tournament HQ, so there will always be an SO@GT representative nearby! <br /><span className="font-bold">Please note: we will not be checking the official email (scioly.gatech@gmail.com) the day of the tournament.</span>
                </li>
                <br />
                <li>We will be running two <span className="font-bold">trial events</span>, Protein Modeling (exam only) and Engineering CAD. Both events will be run for both Division B and C. Please note that for Division B Protein Modeling, the same rules will be used as Division C. You may bring up to 2 alternates who may compete in these trial events (full team members may compete in trial events as well).
                </li>
                <br />
                <li>An invoice containing payment details has been sent to you on or around November 8th. All checks should be made payable to Georgia Tech with Science Olympiad @ Georgia Tech in the memo sent to: 
                  <br/><br/>
                  Harsha Gaddipati<br/>
                  326032 Georgia Tech Station<br/>
                  Atlanta, GA 30332-1400<br/><br/>
                  If you would prefer to pay registration fees online rather than mailing a check, you can do so using our PayPal account: <span className="font-bold">@ScienceOlympiadGT</span>. Payment status can be found <a href="https://docs.google.com/spreadsheets/d/1kOYBfp-Gi84R9hhx1bvS9u9bnkPBmegz1RxKiB1jpck/edit?gid=0#gid=0" className="underline hover:cursor-pointer hover:opacity-50">here</a>. If you have sent in payment but it is not marked as received, please reach out as soon as possible.
                </li>
            </ul>
            
        </div>

        <p className="bg-lightBlue text-center m-4 lg:m-12 lg:mx-48 shadow-darkBlue dark:shadow-white shadow-2xl p-8"> 
            <a href="https://docs.google.com/document/d/1j9YKMA2QOkeO1PnCeraj5KCvax4C3yn5Auroo70hkhE/edit?tab=t.0" target="_blank" className="text-3xl font-bold underline md:no-underline md:border-black md:border-4 p-2 text-black bg-white hover:opacity-50"> Tournament Communiques Link</a>
            <iframe src="https://docs.google.com/document/d/1j9YKMA2QOkeO1PnCeraj5KCvax4C3yn5Auroo70hkhE/edit?tab=t.0" width="90%" height="750" className="mt-8 md:ml-0 lg:ml-24"></iframe>
        </p>
      </main>
    </>
  )
}
