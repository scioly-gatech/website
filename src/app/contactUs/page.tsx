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
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* LEFT: Rolling Contact Image */}
        <div className="flex items-center justify-center p-10 lg:p-16">
          <motion.div
            className="relative w-full max-w-md h-80 lg:h-[28rem]"
            initial={{ rotate: -360, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
            }}
          >
            <Image
              src="/images/contact/contact.png"
              alt="Contact Us"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>
        </div>

        {/* RIGHT: Logo + Contact Info */}
        <div
          className={`flex flex-col items-center justify-center px-8 lg:px-20 text-center ${outfit.className}`}
        >
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/officialLogo.png"
              alt="Science Olympiad at Georgia Tech Logo"
              width={280}
              height={280}
            />
          </div>

          {/* Text */}
          <div className="text-lg max-w-xl space-y-5">
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
