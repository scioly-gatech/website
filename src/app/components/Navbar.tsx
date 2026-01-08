"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
        subsets: ["latin"],
        weight: ["400", "500", "600", "700"],
    });

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);


  return (
    <nav className={`${league_spartan.className} sticky top-0 z-50 bg-[#22344d] text-white`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Desktop Nav */}
        <ul className="hidden lg:flex w-full items-center justify-between text-lg tracking-wider">
          <li className="hover:text-[#d1be7b]">
            <Link href="/">HOME</Link>
          </li>
          <li className="hover:text-[#d1be7b]">
            <Link href="/YJI2026">YJI 2026</Link>
          </li>
          <li className="hover:text-[#d1be7b]">
            <Link href="/aboutUs">ABOUT US</Link>
          </li>
          <li className="hover:text-[#d1be7b]">
            <Link href="/getInvolved">GET INVOLVED</Link>
          </li>
          {/* <li className="hover:text-[#d1be7b]">
            <Link href="/sponsorships">SPONSORSHIP</Link>
          </li> */}
          <li className="hover:text-[#d1be7b]">
            <Link href="/pastTournaments">PAST TOURNAMENTS</Link>
          </li>
          <li className="hover:text-[#d1be7b]">
            <Link href="/virtualWorkshops">EVENT WORKSHOPS</Link>
          </li>
          <li className="hover:text-[#d1be7b]">
            <Link href="/contactUs">CONTACT US</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggle}
          className="lg:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile Slide-over */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-72 h-screen bg-gradient-to-b from-lightBlue to-white dark:from-darkBlue dark:to-black text-darkBlue dark:text-lightBlue p-6 lg:hidden"
          >
            <div className="flex justify-end mb-6">
              <button onClick={toggle} className="text-2xl">
                <RxCross1 />
              </button>
            </div>

            <ul className="flex flex-col gap-5 text-lg">
              <li>
                <Link href="/" onClick={toggle} className="flex items-center gap-2">
                  Home <AiOutlineHome />
                </Link>
              </li>
              <li>
                <Link href="/YJI2026" onClick={toggle}>
                  YJI 2026
                </Link>
              </li>
              <li>
                <Link href="/aboutUs" onClick={toggle}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contactUs" onClick={toggle} className="flex items-center gap-2">
                  Contact Us <AiOutlineMail />
                </Link>
              </li>
              <li>
                <Link href="/getInvolved" onClick={toggle}>
                  Get Involved
                </Link>
              </li>
              {/* <li>
                <Link href="/sponsorships" onClick={toggle}>
                  Sponsorship
                </Link>
              </li> */}
              <li>
                <Link href="/pastTournaments" onClick={toggle}>
                  Past Tournaments
                </Link>
              </li>
              <li>
                <Link href="/virtualWorkshops" onClick={toggle}>
                  Workshop Recordings
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
