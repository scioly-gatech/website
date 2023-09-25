'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Lora } from 'next/font/google'
import React from 'react'
import Script from 'next/script'

const play = Lora({ subsets: ['latin'], display:"swap" })

export default function page() {
  return (
    <>
    <div className="dark:bg-black bg-slate-200 min-h-screen h-full w-screen">
      <div id="page setup" className="pb-12">
      <AnimatePresence>
      <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}
        >
          <div className="text-white bg-[url('/images/curr/birdView-modified.jpg')] p-12 w-screen text-center text-3xl font-bold flex justify-center items-center">
            <div className="flex justify-center text-center">
              <h1 className={`border-8 border-lightOrange p-8 tracking-wide text-center text-6xl ${play.className}`}>Policies</h1>
            </div>
          </div>
      </motion.div>
      </AnimatePresence>
      <p className="bg-lightBlue text-darkBlue text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg"> 
    <span className="font-bold text-xl"> Science Olympiad Code of Ethics </span>
    <br />

    Competitors for all tournaments are expected to follow the general rules outlined by National Science Olympiad which can be found at <a href="https://www.soinc.org/code-ethics-general-rules" className="underline font-bold"> https://www.soinc.org/code-ethics-general-rules </a>.

    </p>
    <p className="bg-darkBlue text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
    
    <span className='font-bold font-lg'>Spectator and Photography Policy</span> <br />

    Spectators will be allowed for the Bridge, Scrambler, Trajectory, and Flight events. Spectators must remain in designated spectator zones. To protect and assure the privacy of competitors’, event supervisors’ and volunteers’ information, photography will only be permitted to head coaches and other members of the same team with wristbands to respect the privacy of other team builds. Any violation of this prohibition may violate the SOINC Student, Coach, and Parent Pledges, and SOINC Media Recommendations.
    <br /><br />
    Volunteers and event supervisors reserve the right to ask any spectator to leave the premises of the event for any reason. Event supervisors may penalize the spectator’s affiliated team for unsportsmanlike behavior at their discretion.

    </p>
    <p className="bg-lightBlue text-darkBlue text-center text-xl p-5 m-4 lg:mx-72 shadow-darkBlue dark:shadow-white shadow-lg"> 
    <span className="font-bold font-lg"> Wristband Policy </span> 
    <br />
    During check-in, coaches will receive one wristband for the head coach and 15 wristbands for their students. Wristbands are required for all students competing in events. Trial events will not require wristbands. Impound will not require wristbands. Students will be required to be wearing a wristband in order to compete; we will not be providing extra wristbands if they are lost. </p>
    </div>
    </div>
    </>
  )
}
