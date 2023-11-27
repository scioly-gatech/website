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
      <Head>
            title = Competitor Information
        </Head>
        <main className="dark:bg-black bg-slate-200 w-screen md:min-h-[88vh] lg:min-h-[74vh] pb-12">

          {/** Heading */}
          <div className="text-white bg-[url('/images/curr/birdView-modified.jpg')] p-12 w-screen text-center text-3xl font-bold flex justify-center items-center">
              <div className="flex justify-center text-center">
                  <h1 className={`border-8 border-lightOrange p-8 tracking-wide text-center text-6xl ${play.className}`}>Registration</h1>
              </div>
          </div>

          {/** Links */}
          <p className="bg-lightBlue text-darkBlue text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg"> 
            <span className="font-bold text-4xl underline"> Tournament Registration</span>
            <br />
            If your team is interested in participating in the 2024 Yellow Jacket Invitational, register using the following Google Form <span className="font-bold"> before January 13th @ 12 PM EST</span>:  <a href="https://forms.gle/6HqRES5dhBhiABpx6" target="_blank" className="underline font-bold"> https://forms.gle/6HqRES5dhBhiABpx6 </a>.

            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSedXGxt9dEoVBCpiyNbsANtSA-LrJtdbc169hyS1rJjYzkM2A/viewform?embedded=true" width="100%" height="750">Loading…</iframe>
          </p>

        </main>
    </>
  )
}
