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
            title = Registered Teams and Payment Status
        </Head>
        <main className="dark:bg-black bg-slate-200 w-screen md:min-h-[88vh] lg:min-h-[74vh] pb-12">
          <div className="text-white bg-[url('/images/curr/birdView-modified.jpg')] p-12 w-screen text-center text-3xl font-bold flex justify-center items-center">
              <div className="flex justify-center text-center">
                  <h1 className={`border-8 border-lightOrange p-8 tracking-wide text-center text-6xl ${play.className}`}>Registered Teams</h1>
              </div>
          </div>
          <p className="bg-lightBlue text-darkBlue text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg"> 
          <a href="https://docs.google.com/spreadsheets/d/1z4jwXF153mhkRGWuLyKvkAcD6BVCTugrgrTZyNHgzHc/edit?usp=sharing" target="_blank" className="underline font-bold text-4xl"> Registered Teams/Payment Status </a>
            <br />
            Confirmed teams for the 2024 Yellow Jacket Invitational! 

            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQBluwwHqoC3GpygCkKHMHSCmFpDvGBal7WKuswi1TUJ4dpSslWS5kCeiJDRAOTWSdLagkESmFdNhbK/pubhtml?widget=true&amp;headers=false" width="100%" height="750"></iframe>
          </p>

        </main>
    </>
  )
}
