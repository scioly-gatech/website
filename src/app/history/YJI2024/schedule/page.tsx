'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Lora } from 'next/font/google'
import React from 'react'
import Head from 'next/head'

const play = Lora({ subsets: ['latin'], display:"swap" })

export default function page() {
  return (
    <>
      <Head>
            title = Yellow Jacket Invitational Schedule
        </Head>
        <main className="dark:bg-black bg-slate-200 w-full md:min-h-[88vh] lg:min-h-[74vh] pb-12">
          <div className="text-white bg-[url('/images/curr/birdView-modified.jpg')] p-12 w-full text-center text-3xl font-bold flex justify-center items-center">
              <div className="flex justify-center text-center">
                  <h1 className={`border-8 border-lightOrange p-8 tracking-wide text-center text-4xl md:text-6xl ${play.className} drop-shadow-titleShadow`}>YJI Schedule</h1>
              </div>
          </div>
          <p className="bg-lightBlue text-darkBlue text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
          <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTJhZZRlymMLa0oQ2DUDTbj1-mC-jwaN9w1QVCQhTHrimCEDd1exgVO8gJS9anvhqU5MxuUqMXW4bTw/pubhtml?gid=1426480324&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="750"></iframe>
          </p>

        </main>
    </>
  )
}
