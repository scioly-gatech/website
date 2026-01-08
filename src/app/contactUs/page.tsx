'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      {/* Container for both sections */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-6xl px-4">

        {/* LEFT: Rolling Contact Image */}
        <motion.div
          className="relative w-72 sm:w-80 md:w-96 h-64 sm:h-72 md:h-80 lg:h-[28rem]"
          initial={{ rotate: -360, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Image
            src="/images/contact/contact.png"
            alt="Contact Us"
            fill
            className="object-contain rounded-2xl"
            priority
          />
        </motion.div>

        {/* RIGHT: Logo + Contact Info */}
        <div
          className={`flex flex-col items-center text-center ${outfit.className} mb-8`}
        >
          {/* Logo */}
          <div className="mb-2 lg:mb-4">
            <Image
              src="/images/officialLogo.png"
              alt="Science Olympiad at Georgia Tech Logo"
              width={280}
              height={280}
            />
          </div>

          {/* Text */}
          <div className="text-lg space-y-4 mb-8 max-w-lg">
            <p>
              If you have any questions or comments regarding competing,
              sponsoring, or anything else related to Science Olympiad at
              Georgia Tech, we would love to hear from you!
            </p>

          </div>
        </div>

      </div>
    </div>
  )
}
