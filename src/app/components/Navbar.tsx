'use client'

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Logo from "./Logo"
import {useEffect} from 'react'
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'

export default function Navbar() {

    //Below methods are used to add the hover effect to the site. Whenever the user enters the text area of the navbar, a dropdown menu appears. 
    useEffect(() => {
        if (typeof(document) !== 'undefined') {
            const currentHover = document.getElementById('current') as HTMLElement
            currentHover.addEventListener('mouseenter', showCurrent)
            currentHover.addEventListener('mouseleave', hideCurrent)
        }   
    }, [])

    function showCurrent() {
        if (typeof(document) !== 'undefined') {
            const aboutDrop = document.getElementById('currentDropdown') as HTMLElement
            aboutDrop.classList.remove('hidden')
            aboutDrop.classList.add('flex')
        }
    }

    function hideCurrent() {
        if (typeof(document) !== 'undefined') {
            const aboutDrop = document.getElementById('currentDropdown') as HTMLElement
            aboutDrop.classList.add('hidden')
            aboutDrop.classList.remove('flex')
        }
    }

    function toggleSmallNav() {
        if (typeof(document) !== 'undefined') {
            const smallNav = document.getElementById('smallNav') as HTMLElement
            smallNav.classList.toggle('hidden')
            smallNav.classList.toggle('absolute')
        }
    }

    //There is a small nav bar intended for devices with smaller screens. That navbar includes the hamburger menu, and will not usually be there. The larger nav bar is for larger devices like computers and is across the top page. 
  return (
    <main >
        <div id="smallNavBar" className="lgNav:hidden z-10">
            {/* Style for the hamburger menu was inspired by Dave Gray's Tailwind CSS Video: https://www.youtube.com/watch?v=lCxcTsOHrjo */}
            <AnimatePresence>
                <motion.div
                    initial={{opacity:0}}
                    animate={{rotate: 360, opacity: 1}}
                    transition={{delay:1}}
                >
                    <button onClick={toggleSmallNav} className="w-12 fixed right-0 pl-2 z-10">
                        <div id="topLine" className="border-2 border-white m-1"></div>
                        <div id="middleLine" className="border-2 border-white m-1"></div>
                        <div id="bottomLine" className="border-2 border-white m-1"></div>
                    </button>
                </motion.div>

            <nav id="smallNav" className="hidden right-0 p-2 text-darkBlue dark:text-lightBlue bg-gradient-to-b from-lightBlue to-white dark:from-darkBlue dark:to-black min-h-[100vh] z-10">
                <div className="flex flex-row justify-end">
                    <button onClick={toggleSmallNav} className="w-1/8 z-10">
                        <RxCross1 />
                    </button>
                </div>
                <ul onClick={toggleSmallNav}>
                    <li>
                        <Link href="/" className="font-bold flex flex-row"> 
                            <p> Home </p> <AiOutlineHome className="m-1"/> 
                        </Link>
                    </li>
                    <li>
                        <Link href="/aboutUs" className="font-bold my-3"> About Us </Link>
                    </li>
                    <li>
                        <Link href="/currentTournament" className="font-bold py-3"> GT Invitational </Link>
                    </li>
                    <li>
                        <Link href="/currentTournament/updates" className="my-2 mx-3"> General Info/Updates </Link>
                    </li>
                    <li>
                        <Link href="/currentTournament/teamInfo" className="my-2 mx-3"> Registered Teams </Link>
  </li>
                    <li>
                        <Link href="/currentTournament/volInfo" className="my-2 mx-3"> Volunteer Links </Link>
                    </li>
                    <li>
                        <Link href="/sponsorships" className="font-bold my-1"> Sponsorship </Link>
                    </li>
                    <li>
                        <Link href="/pastTournaments" className="font-bold my-1"> Past Tournaments </Link>
                    </li>
                    <li>
                        <Link href="/contactUs" className="font-bold flex flex-row"> 
                            <p> Contact Us </p> <AiOutlineMail className="m-1"/>  
                        </Link>
                    </li>
                </ul>
            </nav>

            </AnimatePresence>
        </div>

        <nav id="fullNavBar" className="hidden lgNav:flex sticky-top-0 shadow-md flex-row justify-between pr-5 text-white sm:hidden bg-black">
       
             <Link href="/" className="hover:text-lightOrange">
                <Logo />
             </Link>
            <ul className="flex justify-between whitespace-nowrap py-6">
            <li className="m-2 mx-6 hover:text-lightOrange">
                    <Link href="/" className="text-xl">Home</Link>
                </li>

                <li className="m-2 mx-6 hover:text-lightOrange">
                    <Link href="/aboutUs" className="text-xl">About Us</Link>
                </li>

                <div id="current">   
                    <li className="m-2 mx-6 flex-col items-center">
                        <Link href="/currentTournament" className="hover:text-lightOrange text-xl">Yellow Jacket Invitational</Link>
                        <ul id="currentDropdown" className="bg-gradient-to-b from-black dark:from-black to-lightBlue dark:to-darkBlue absolute mt-2 pl-0 pr-16 hidden flex-col z-10">
                            <li>
                                <Link href="/currentTournament/updates" className="hover:text-lightOrange text-xl"> General Info/Updates </Link>
                            </li>
                           <li>
                                <Link href="/currentTournament/teamInfo" className="hover:text-lightOrange text-xl"> Registered Teams </Link>
  </li>
                            <li>
                                <Link href="/currentTournament/volInfo" className="hover:text-lightOrange text-xl"> Volunteer Links </Link>
                            </li>
                        </ul>
                    </li>
                </div>

                <li className="m-2 mx-6 hover:text-lightOrange">
                    <Link href="/sponsorships" className="text-xl">Sponsorship</Link>
                </li>

                <div id="past" className="m-2 mx-5 hover:text-lightOrange">
                    <Link href="/pastTournaments" className="text-xl">Past Tournaments</Link>
                </div>

                <li className="m-2 mx-6 hover:text-lightOrange">
                    <Link href="/contactUs" className="text-xl">Contact Us</Link>
                </li>
            </ul>
        </nav>
    </main>
  )
}
