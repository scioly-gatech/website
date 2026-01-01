"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lora } from "next/font/google";
import Countdown from "@/app/components/Countdown";
import Image from "next/image";

const play = Lora({ subsets: ["latin"], display: "swap" });

export default function CurrentTournament() {
  return (
    <div className="bg-[#0b2e16] w-full min-h-screen flex flex-col items-center">

      {/* Hero Section */}
      <div className="relative w-full h-[70vh] lg:h-[80vh]">
        <Image
          src="/images/yji/georgianature2.jpg"
          alt="YJI Hero Image"
          fill
          style={{ objectFit: "cover" }}
          quality={100} // Keep max quality
        />

        {/* Title Overlay */}
        {/* Title Overlay */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-10 left-1/2 transform -translate-x-1/2 px-4"
          >
            <h1
              className={`whitespace-nowrap border-8 border-lightOrange lg:p-8 tracking-wide text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow bg-black/20 text-white rounded-xl text-center`}
            >
              Yellow Jacket Invitational
            </h1>
          </motion.div>
        </AnimatePresence>


      </div>

      {/* Countdown Section */}
      <div className="w-full max-w-4xl flex flex-col items-center m-8 p-6 bg-lightBlue dark:bg-darkBlue dark:text-white shadow-2xl shadow-[#c5d4e6] rounded-xl">
        <h2 className="text-3xl mb-4 text-center font-bold">
          We will be hosting the third annual Yellow Jacket Invitational on January 31st, 2026!
        </h2>
        <Countdown targetDate="1-31-2026" eventName="YJI 2026" />
      </div>

      {/* Registration Section */}
      <div className="w-full max-w-4xl flex flex-col items-center m-8 p-6 bg-lightBlue dark:bg-darkBlue dark:text-white shadow-2xl shadow-[#c5d4e6] rounded-xl">
        <h2 className="text-3xl text-center font-bold mb-4">
          Registration is now live! Sign up{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf3qhRDjCY6RJcp3QmP-PYVF-KnIJLL-k2siY1mPMOdKyfR8w/viewform?usp=sharing&ouid=115768010646187932553"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lightOrange underline"
          >
            here
          </a>
        </h2>
        <h3 className="text-xl text-center font-semibold mb-4">
          Registration is open to both Division B and Division C!
        </h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Registration opens: August 1st, 2025</li>
          <li>Standard Registration Closes: November 1st, 2025 ($150 per team)</li>
          <li>Late Registration Closes: January 9th, 2026 ($180 per team)</li>
        </ul>
        <p className="mb-4 text-center">
          For complete details, including penalty fees, team number limits,
          <br />
          and registration requirements, please refer to the registration form.
        </p>
        <p className="mb-2 text-center">
          Check out a list of teams who have registered{" "}
          <a
            href="https://docs.google.com/spreadsheets/d/1BT2hHQufuZorei2g5WCbZpkftRFcOr9A5f9TKtuJ2KA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lightOrange underline"
          >
            here
          </a>
          !
        </p>
      </div>
    </div>
  );
}
