'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Oswald } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' })
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' })

const title = 'Past Tournaments'

export default function CurrentTournament() {
  const { scrollY } = useScroll()

  // Parallax: image moves up as you scroll
  const imageY = useTransform(scrollY, [0, 600], [0, -200]) // starts slightly offset

  return (
    <div className="bg-white w-full">

      {/* ================= HEADER ================= */}
      <header className="relative w-full h-[75vh] overflow-hidden flex items-center justify-center">

        {/* PARALLAX IMAGE */}
        <motion.div
          style={{ y: imageY }}
          className="absolute top-0 left-0 w-full h-[140%]" // taller than header
        >
          <Image
            src="/images/pastTournaments/olympics.jpg"
            alt="Past tournaments"
            fill
            priority
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex justify-center items-center w-full"
        >
          <h1
            className={`
              ${oswald.className}
              text-center
              text-[clamp(2.25rem,5vw,4.75rem)]
              text-white
              border border-white
              bg-black/50
              px-6 py-4
              tracking-wide
            `}
          >
            {title}
          </h1>
        </motion.div>
      </header>

      {/* ================= CONTENT ================= */}
      <main className={`${outfit.className} flex flex-col lg:flex-row justify-center lg:min-h-[48vh] py-8`}>

        {/* STATE TOURNAMENT */}
        <section id="states-wrapper" className="flex-1">
          <p className="text-center text-3xl lg:text-4xl m-4 lg:m-6 font-bold underline">
            State Tournament
          </p>
          <ul className="flex flex-col items-center px-12">
            {['2022', '2023', '2024', '2025'].map((year, i) => (
              <li
                key={year}
                className="my-6 transition duration-500 hover:opacity-60 hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
              >
                <Link
                  href={`/pastTournaments/${year}`}
                  className={`${
                    i % 2 === 0 ? 'bg-lightOrange' : 'bg-darkOrange'
                  } text-2xl lg:text-3xl rounded-2xl p-4 px-12`}
                >
                  {year}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* YJI */}
        <section id="YJI-wrapper" className="flex-1">
          <p className="text-center text-3xl lg:text-4xl m-4 lg:m-6 font-bold underline">
            Yellow Jacket Invitational
          </p>
          <ul className="flex flex-col items-center">
            {['YJI2024', 'YJI2025', 'YJI2026'].map((year, i) => (
              <li
                key={year}
                className="my-6 transition duration-500 hover:opacity-60 hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]"
              >
                <Link
                  href={`/pastTournaments/${year}`}
                  className={`${
                    i % 2 === 0 ? 'bg-darkOrange' : 'bg-lightOrange'
                  } text-2xl lg:text-3xl rounded-2xl p-4 px-12`}
                >
                  {year.replace('YJI', '')}
                </Link>
              </li>
            ))}
          </ul>
        </section>

      </main>
    </div>
  )
}

