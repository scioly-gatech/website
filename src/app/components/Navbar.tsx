'use client'

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Logo from "./Logo"
import {useEffect} from 'react'
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'

export default function Navbar() {

    // Below methods are used to add the hover effect to the site. Whenever the user enters the text area of the navbar, a dropdown menu appears. There could be an easier way to make a function Navbar such as with using other libraries, but this is the current implementation. 
    useEffect(() => {
        if (typeof(document) !== 'undefined') {
            const contactHover = document.getElementById('contact-dropdown-title') as HTMLElement
            contactHover.addEventListener('mouseenter', showContactDropdown)
            contactHover.addEventListener('mouseleave', hideContactDropdown)
            const yjiHover = document.getElementById('YJI-dropdown-title') as HTMLElement
            yjiHover.addEventListener('mouseenter', showYJIDropdown)
            yjiHover.addEventListener('mouseleave', hideYJIDropdown)
            const statesHover = document.getElementById('States-dropdown-title') as HTMLElement
            statesHover.addEventListener('mouseenter', showStatesDropdown)
            statesHover.addEventListener('mouseleave', hideStatesDropdown)
        }   
    }, [])

    //TODO: Make these functions more resusable. Impracticle to create individual dropdowns for each part of the header. 
    // Helper functions to show and hide the "Contact Us" dropdown menu
    function showContactDropdown() {
        if (typeof(document) !== 'undefined') {
            const contactDrop = document.getElementById('contact-dropdown') as HTMLElement
            contactDrop.classList.remove('hidden')
            contactDrop.classList.add('flex')
        }
    }

    function hideContactDropdown() {
        if (typeof(document) !== 'undefined') {
            const contactDrop = document.getElementById('contact-dropdown') as HTMLElement
            contactDrop.classList.add('hidden')
            contactDrop.classList.remove('flex')
        }
    }

    // Helper functions to show and hide the "YJI" dropdown menu
    function showYJIDropdown() {
        if (typeof(document) !== 'undefined') {
            const yjiDrop = document.getElementById('YJI-dropdown') as HTMLElement
            yjiDrop.classList.remove('hidden')
            yjiDrop.classList.add('flex')
        }
    }

    function hideYJIDropdown() {
        if (typeof(document) !== 'undefined') {
            const yjiDrop = document.getElementById('YJI-dropdown') as HTMLElement
            yjiDrop.classList.add('hidden')
            yjiDrop.classList.remove('flex')
        }
    }

        // Helper functions to show and hide the "State Tournament" dropdown menu
        function showStatesDropdown() {
            if (typeof(document) !== 'undefined') {
                const yjiDrop = document.getElementById('States-dropdown') as HTMLElement
                yjiDrop.classList.remove('hidden')
                yjiDrop.classList.add('flex')
            }
        }
    
        function hideStatesDropdown() {
            if (typeof(document) !== 'undefined') {
                const yjiDrop = document.getElementById('States-dropdown') as HTMLElement
                yjiDrop.classList.add('hidden')
                yjiDrop.classList.remove('flex')
            }
        }

    function toggleSmallNav() {
        if (typeof(document) !== 'undefined') {
            const smallNav = document.getElementById('smallNav') as HTMLElement
            smallNav.classList.toggle('hidden')
            smallNav.classList.toggle('fixed')
        }
    }

    //TODO: Create a singular nav bar instead of 2 independent ones. 

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
                        <button onClick={toggleSmallNav} className="w-1/8 z-10 text-2xl">
                            <RxCross1 />
                        </button>
                    </div>
                    <ul onClick={toggleSmallNav} className="text-xl">
                        <li>
                            <Link href="/" className="font-bold flex flex-row"> 
                                <p> Home </p> <AiOutlineHome className="m-1"/> 
                            </Link>
                        </li>
                        <li>
                            <Link href="/YJI2025" className="font-bold py-3"> YJI 2025 </Link>
                        </li>
                        <li>
                            <Link href="/YJI2025/exams" className="flex flex-row my-1 mx-3"> 
                                <p> Exams </p>  
                            </Link>
                            <Link href="/YJI2025/generalInfo" className="flex flex-row my-1 mx-3"> 
                                <p> General Info </p>  
                            </Link>
                        </li>
                        <li>
                            <Link href="/YJI2025/schedules" className="flex flex-row my-1 mx-3"> 
                                <p> Schedules </p>  
                            </Link>
                        </li>
                        <li>
                            <Link href="/YJI2025/map" className="flex flex-row my-1 mx-3"> 
                                <p> Map </p>  
                            </Link>
                        </li>
                        <li>
                            <Link href="/YJI2025/homeRooms" className="flex flex-row my-1 mx-3"> 
                                <p> Home Rooms </p>  
                            </Link>
                        </li>
                        <li>
                            <Link href="/YJI2025/paymentStatus" className="flex flex-row my-1 mx-3"> 
                                <p> Payment Status </p>  
                            </Link>
                        </li>
                        <li>
                            <Link href="/YJI2025/faq" className="flex flex-row my-1 mx-3"> 
                                <p> FAQs </p>  
                            </Link>
                        </li>
                        <li>
                            <Link href="/states2025" className="font-bold py-3"> States 2025 </Link>
                        </li>
                        <li>
                            <Link href="/states2025/esApp" className="flex flex-row my-1 mx-3"> 
                                <p> ES App </p>  
                            </Link>
                        </li>
                        <li>
                            <Link href="/aboutUs" className="font-bold my-3"> About Us </Link>
                        </li>
                         <li>
                            <Link href="/contactUs" className="flex flex-row my-1 mx-3"> 
                                <p> Contact Us </p> <AiOutlineMail className="m-1"/>  
                            </Link>
                        </li>
                        <li>
                            <Link href="/getInvolved" className="font-bold my-3"> Get Involved </Link>
                        </li>
                        <li>
                            <Link href="/sponsorships" className="font-bold my-1"> Sponsorship </Link>
                        </li>
                        <li>
                            <Link href="/pastTournaments" className="font-bold my-1"> Past Tournaments </Link>
                        </li>
                        <li>
                            <Link href="/virtualWorkshops" className="font-bold flex flex-row"> 
                                Workshop Recordings 
                            </Link>
                        </li>
                    </ul>
                </nav>
            </AnimatePresence>
        </div>

        {/* Beginning of full nav bar */}
        <nav id="fullNavBar" className="hidden lgNav:flex sticky-top-0 shadow-md flex-row justify-between pr-5 text-white sm:hidden bg-black">
       
             <Link href="/" className="hover:text-lightOrange">
                <Logo />
             </Link>
            <ul className="flex justify-between whitespace-nowrap py-6">
            <li className="m-2 mx-6 hover:text-lightOrange">
                    <Link href="/" className="text-xl">Home</Link>
                </li>

                <div id="YJI-dropdown-title">   
                    <li className="m-2 mx-6 flex-col items-center">
                        <Link href="/YJI2025" className="hover:text-lightOrange text-xl">YJI 2025</Link>
                        <ul id="YJI-dropdown" className="bg-gradient-to-b from-black dark:from-black to-lightBlue dark:to-darkBlue absolute mt-2 py-2 pl-0 pr-8 hidden flex-col z-10">
                            <li>
                                <Link href="/YJI2025/exams" className="hover:text-lightOrange text-xl"> Exams </Link>
                            </li>
                            <li>
                                <Link href="/YJI2025/generalInfo" className="hover:text-lightOrange text-xl"> General Info </Link>
                            </li>
                            <li>
                                <Link href="/YJI2025/schedules" className="hover:text-lightOrange text-xl"> Schedules </Link>
                            </li>
                            <li>
                                <Link href="/YJI2025/map" className="hover:text-lightOrange text-xl"> Map </Link>
                            </li>
                            <li>
                                <Link href="/YJI2025/homeRooms" className="hover:text-lightOrange text-xl"> Home Rooms </Link>
                            </li>
                            <li>
                                <Link href="/YJI2025/paymentStatus" className="hover:text-lightOrange text-xl"> Payment Status </Link>
                            </li>
                            <li>
                                <Link href="/YJI2025/faq" className="hover:text-lightOrange text-xl"> FAQs </Link>
                            </li>
                        </ul>
                    </li>
                </div>

                <div id="States-dropdown-title">   
                    <li className="m-2 mx-6 flex-col items-center">
                        <Link href="/states2025" className="hover:text-lightOrange text-xl">States 2025</Link>
                        <ul id="States-dropdown" className="bg-gradient-to-b from-black dark:from-black to-lightBlue dark:to-darkBlue absolute mt-2 py-2 pl-0 pr-8 hidden flex-col z-10">
                            <li>
                                <Link href="/states2025/esApp" className="hover:text-lightOrange text-xl"> ES Application </Link>
                            </li>
                        </ul>
                    </li>
                </div>
                
                <div id="contact-dropdown-title">   
                    <li className="m-2 mx-6 flex-col items-center">
                        <Link href="/aboutUs" className="hover:text-lightOrange text-xl">About Us</Link>
                        <ul id="contact-dropdown" className="bg-gradient-to-b from-black dark:from-black to-lightBlue dark:to-darkBlue absolute mt-2 py-2 pl-0 pr-8 hidden flex-col z-10">
                            <li>
                                <Link href="/contactUs" className="hover:text-lightOrange text-xl"> Contact Us </Link>
                            </li>
                            
                        </ul>
                    </li>
                </div>

                <li className="m-2 mx-6 hover:text-lightOrange">
                    <Link href="/getInvolved" className="text-xl">Get Involved</Link>
                </li>

                <li className="m-2 mx-6 hover:text-lightOrange">
                    <Link href="/sponsorships" className="text-xl">Sponsorship</Link>
                </li>

                <div id="past" className="m-2 mx-5 hover:text-lightOrange">
                    <Link href="/pastTournaments" className="text-xl">Past Tournaments</Link>
                </div>

                <div id="past" className="m-2 mx-5 hover:text-lightOrange">
                    <Link href="/virtualWorkshops" className="text-xl">Workshop Recordings</Link>
                </div>
            </ul>
        </nav>
    </main>
  )
}
