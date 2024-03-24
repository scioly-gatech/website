'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Lora } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'
import { ReactDOM } from 'react'

const play = Lora({ subsets: ['latin'], display: "swap" })

export default function Merch() {
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
              <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow`}>Merch</h1>
              </div>
        </motion.div>
        </AnimatePresence>
      </div>

        <p className="bg-lightBlue text-center m-4 lg:m-12 lg:mx-72 shadow-darkBlue dark:shadow-white shadow-2xl p-8"> 
            <a href="https://georgia-science-olympiad.printify.me/products" target="_blank" className="text-3xl font-bold underline md:no-underline md:border-black md:border-4 p-2 text-black hover:opacity-50"> Order Form </a>
            <iframe src="https://drive.google.com/file/d/1OIOmKWZjjSl4yiB1npoXHBU169c89_j-/preview" width="90%" height="750" allow="autoplay" className="mt-8 ml-12"></iframe>
        </p>

    </div>
    </>
  )
}
