'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Lora } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'
import { ReactDOM } from 'react'

const play = Lora({ subsets: ['latin'], display: "swap" })

export default function Payments() {
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
              <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow`}>Exams</h1>
              </div>
        </motion.div>
        </AnimatePresence>
      </div>
        <div className="bg-lightBlue text-center m-4 lg:m-12 lg:mx-48 shadow-darkBlue dark:shadow-white shadow-2xl p-8"> 
            
            <p className="sm:text-2xl lg:text-3xl font-bold md:border-darkBlue md:border-4 p-2 text-black bg-white mb-8"> Thank you to everyone who attended our 2025 Yellow Jacket Invitational! Please use the link below to see the published exams from the event. </p>
            <a href="https://drive.google.com/file/d/1egVORNPbZQE9YNJKJggjtunUvWXyNz7T/edit" target="_blank" className="sm:text-2xl lg:text-3xl bg-lightOrange underline hover:opacity-50 font-bold p-4"> Exams Link</a>
        </div>
    </div>
    </>
  )
}
