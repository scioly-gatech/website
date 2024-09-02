'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Lora } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'
import { ReactDOM } from 'react'

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
      <div className="text-white bg-[url('/images/2024/States/states-24.jpg')] p-12 w-full">
        <AnimatePresence>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className="text-3xl font-bold flex justify-center items-center"
          >
              <div className="flex justify-center text-center lg:w-1/3 lg:mx-12">
              <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow`}>YJI 2025</h1>
              </div>
        </motion.div>
        </AnimatePresence>
      </div>
        <div className="text-blackborder-4 border-black bg-darkOrange flex flex-col items-center m-8 lg:mx-72 p-4 shadow-2xl shadow-white">
          <h2 className="text-3xl font-bold m-2 border-black border-4 p-2 text-center">We will be hosting the second annual Yellow Jacket Invitational on February 1st, 2025! <br /><br /> For the first time, we will be have both division B and C teams competing. </h2>
        </div>
        {/* <div className="text-blackborder-4 border-black bg-lightOrange flex flex-col items-center m-8 lg:mx-72 p-4 shadow-2xl shadow-white">
          <h2 className="text-3xl font-bold m-2 border-black border-4 p-2 text-center">
            <h1> Interest Form </h1>
            <br>
            </br>
          <iframe height="700px" width="800px" src="https://docs.google.com/forms/d/e/1FAIpQLSfGgaHX6D247qVS7Q4jd7WJ4az5cyqaj-XIQQ1VPfxAYf80jw/viewform">
          </iframe>
          </h2>
          
        </div> */}
        <p className="bg-lightOrange text-black border-4 border-black text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg"> 
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSftYdiG5C9d8CfHPMhuwKC0Rz0MbJW_Xh9rw1TLxQEoH1Ze-Q/viewform" target="_blank" className="underline font-bold text-2xl lg:text-4xl"> Sign-Up Form </a>
            <br /><br />
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSftYdiG5C9d8CfHPMhuwKC0Rz0MbJW_Xh9rw1TLxQEoH1Ze-Q/viewform" width="100%" height="750">Loading…</iframe>
        </p>
        <div className=" bg-darkOrange flex flex-col items-center m-8 lg:mx-72 p-4 shadow-2xl shadow-white">
          <h2 className="text-3xl font-bold m-2 border-black border-4 p-2 text-center">FAQ</h2>
          <p className="text-xl">
          <span className="font-bold">Q: </span>How many teams will be able to participate?
          <br />
          <span className="font-bold">A: </span>Due to logistical constraints, we will only be able to accept 50 Division C teams and 30 Division B teams. In the case we receive more sign-ups on the registration form than we are able to support, spots will be allotted on a first-come first-served basis.
          <br />
          <br />
          <span className="font-bold">Q: </span> How many teams per school are allowed? 
          <br />
          <span className="font-bold">A: </span>We can guarantee 2 teams per school per division (meaning schools with both B and C programs will be allowed a total of 4 teams) up to the division limits mentioned above. We may allow more than 2 teams per school on a case-by-case basis. On the registration form, you will be able to indicate how many teams you'd like to bring, but again, we will only be able to guarantee 2 teams at the time registration opens.
          <br />
          <br />
          <span className="font-bold">Q:</span> When does registration start?
          <br />
          <span className="font-bold">A: </span>Registration will open Monday, September 2nd. We will send out a follow-up email with a link to the registration form once it officially opens and post the form on our website.
          <br />
          <br />
          <span className="font-bold">Q: </span> When does registration close?
          <br />
          <span className="font-bold">A: </span>Registration will close Friday, December 13th.
          <br />
          <br />
          <span className="font-bold">Q: </span> What is the registration fee per team?
          <br />
          <span className="font-bold">A: </span>We will have an early bird registration period from Sept. 2nd - Oct. 16th, during which registration will cost $110, and a standard registration period from Oct. 17th - Dec. 13th, during which registration will cost $150. Whether or not you qualify for early bird registration will be based on the time you fill out the registration form.
          <br />
          </p>
        </div>
    </div>
    </>
  )
}
