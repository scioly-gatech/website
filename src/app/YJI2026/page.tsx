"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lora } from "next/font/google";
import Countdown from "@/app/components/Countdown";
import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const play = Lora({ subsets: ["latin"], display: "swap" });

export default function CurrentTournament() {
  return (
    <div className="bg-[#0b2e16] w-full min-h-screen flex flex-col items-center">

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="/images/yji/georgianature2.jpg"
          alt="YJI Hero Image"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />

        {/* Title Overlay */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-10 left-1/2 -translate-x-1/2 px-4 flex flex-col items-center w-full"
          >
            <h1
              className={`
                border-4 sm:border-6 lg:border-8 border-lightOrange
                px-4 sm:px-6 lg:px-8
                py-3 sm:py-4 lg:py-6
                tracking-wide
                text-3xl sm:text-4xl lg:text-6xl
                ${play.className}
                drop-shadow-titleShadow
                bg-black/20 text-white rounded-xl text-center
                max-w-[95vw] sm:max-w-[85vw] lg:max-w-none
              `}
            >
              Yellow Jacket Invitational
            </h1>

            {/* Date Block */}
            <div className="mt-8 flex justify-center w-full">
              <div
                className={`bg-[#18522b] text-white ${play.className}
                px-6 py-2 rounded-md
                text-base lg:text-xl tracking-widest text-center shadow-lg`}
              >
                January 31, 2026
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Countdown Section */}
      <div className="w-full max-w-4xl flex justify-center m-8 p-10">
        <div className="flex flex-col items-center gap-10">

          <span className="uppercase tracking-widest text-2xl lg:text-3xl font-bold opacity-90 text-white">
            Countdown to YJI 2026
          </span>

          <div className="scale-110 lg:scale-125 mt-2 mb-10">
            <Countdown targetDate="1-31-2026" />
          </div>

        </div>
      </div>

      {/* Registration Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch px-6">

          {/* Left Side */}
          <div className={`w-full lg:w-2/3 flex flex-col justify-center gap-6 ${outfit.className} lg:ml-20`}>

            <div className="flex flex-wrap items-center gap-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Registration is Now Live!
              </h2>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf3qhRDjCY6RJcp3QmP-PYVF-KnIJLL-k2siY1mPMOdKyfR8w/viewform?usp=sharing&ouid=115768010646187932553"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c2ebb9] hover:bg-[#a0c299] text-black font-semibold text-lg lg:text-xl px-4 py-2 rounded-lg transition-colors duration-300 shadow-md"
              >
                Sign Up
              </a>
            </div>

            <h3 className="text-xl lg:text-2xl font-semibold">
              Registration is open to both Division B and Division C!
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Registration opens: August 1st, 2025</li>
              <li>Standard Registration Closes: November 1st, 2025 ($150 per team)</li>
              <li>Late Registration Closes: January 9th, 2026 ($180 per team)</li>
            </ul>

            <p className="text-lg">
              For complete details, including penalty fees, team number limits,
              <br />
              and registration requirements, please refer to the registration form.
            </p>

            <a
              href="https://docs.google.com/spreadsheets/d/1BT2hHQufuZorei2g5WCbZpkftRFcOr9A5f9TKtuJ2KA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-max bg-[#0b2e16] hover:bg-[#15592b] text-white font-semibold text-lg py-3 px-4 rounded-lg shadow-md transition-colors duration-300"
            >
              List of Registered Teams
            </a>

          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/3 flex justify-center items-center lg:mr-20">
            <Image
              src="/images/yji/yji_win.jpg"
              alt="Registration Image"
              width={400}
              height={400}
              className="w-full h-auto shadow-lg"
            />
          </div>

        </div>
      </section>
    </div>
  );
}


