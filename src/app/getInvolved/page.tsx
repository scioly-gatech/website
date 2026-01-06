'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Lora } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const play = Lora({ subsets: ['latin'], display: 'swap' })

export default function Page() {
  const { scrollY } = useScroll()

  // Subtle parallax shift
  const y = useTransform(scrollY, [0, 300], [0, -120])

  return (
    <>
      <Head>
        <title>GET INVOLVED</title>
      </Head>

      <main className="bg-white w-full pb-12">

        {/* HERO SECTION */}
        <div className="relative w-full h-[75vh] overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute inset-0 w-full h-[130%]"
          >
            <Image
              src="/images/getInvolved/getInvolved.jpg"
              alt="Get Involved"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-[#22344d]/50 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg"
            >
              <h1
                className={`${play.className} text-white text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.15em] uppercase`}
              >
                Get Involved
              </h1>
            </motion.div>
          </div>
        </div>

        {/* STATE TOURNAMENT FEATURE SECTION */}
        <section className={`${outfit.className} max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mt-20`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-black">
                2026 Div C Georgia State Tournament
              </h2>

              <p className="mt-3 text-xl md:text-2xl font-semibold tracking-wide text-neutral-700">
                April 4th, 2026
              </p>

              <p className="text-lg text-neutral-700">
                Science Olympiad at Georgia Tech is proud to host the
                2026 Division C Georgia State Tournament.
                This event brings together hundreds of high school students from across the state
                to compete in rigorous science and engineering challenges.
              </p>

              <p className="text-lg text-neutral-700">
                We are seeking dedicated volunteers to serve as
                event supervisors. Supervisors play a critical
                role in designing, running, and judging individual events, helping ensure a fair,
                educational, and exciting experience for all participants.
              </p>

              <a
                href="https://forms.gle/71n3rBztDKqZP4Yq5"
                className="inline-block mt-4 bg-[#2c4261] text-white px-8 py-3 rounded-md font-semibold tracking-wide hover:bg-[#2c4261]/90 transition"
              >
                Apply to Be an Event Supervisor
              </a>

              <p className="text-lg text-neutral-700">
                Deadline: January 5th, 2026
              </p>
            </div>

            <div className="relative w-full h-72 md:h-96 overflow-hidden shadow-lg">
              <Image
                src="/images/2025/YJI/1.jpg"
                alt="Georgia Science Olympiad State Tournament"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mt-20">
          <div className="border-t border-neutral-300" />
        </div>

        {/* YJI SECTION */}
        <section className={`${outfit.className} max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mt-20`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

            <div className="lg:col-span-1">
              <Image
                src="/images/getInvolved/cat.jpg"
                alt="Yellow Jacket Invitational"
                width={800}
                height={600}
                className="w-full h-auto shadow-lg"
              />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-black">
                2026 Yellow Jacket Invitational
              </h2>

              <p className="mt-3 text-xl md:text-2xl font-semibold tracking-wide text-neutral-700">
                January 31st, 2026
              </p>

              <p className="text-lg text-neutral-700">
                We are looking for volunteers to help with event logistics, proctoring,
                and general support to ensure a smooth and memorable experience for competitors.
                No prior Science Olympiad experience is required. Free food and t-shirts are provided!
              </p>

              <a
                href="https://forms.gle/NSidHDN1Z9D8CAy76"
                className="inline-block mt-4 bg-[#2c4261] text-white px-8 py-3 rounded-md font-semibold tracking-wide hover:bg-[#2c4261]/90 transition"
              >
                Sign Up to Volunteer
              </a>
            </div>

          </div>
        </section>

        {/* TECH STUDENT SECTION */}
        <section className={`${outfit.className} max-w-5xl mx-auto px-6 md:px-10 mt-24`}>
          <div className="bg-[#2c4261] text-white rounded-2xl shadow-xl p-10 md:p-14 space-y-10">

            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
                Are You a Tech Student? Join Science Olympiad!
              </h2>
            </div>

            <ol className="max-w-2xl mx-auto text-lg space-y-4 text-white/90">
              <li className="flex gap-3">
                <span className="font-semibold">1.</span>
                <span>
                  Visit{' '}
                  <a
                    href="https://gatech.campuslabs.com/engage/"
                    target="_blank"
                    className="underline font-medium hover:text-lightBlue transition"
                  >
                    Engage
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold">2.</span>
                <span>Log in using your Georgia Tech email</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold">3.</span>
                <span>
                  Click <span className="font-medium">Join</span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold">4.</span>
                <span>
                  Search for <span className="font-medium">Science Olympiad</span>
                </span>
              </li>
            </ol>
          </div>
        </section>

      </main>
    </>
  )
}



