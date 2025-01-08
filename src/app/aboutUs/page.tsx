'use client'
import Profile from "../components/Profile"
import { Libre_Franklin, Lora } from 'next/font/google'

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Script from "next/script"

const libre = Libre_Franklin({subsets: ['latin']})

const play = Lora({
  subsets: ['latin'],
  display: "swap"
})

export default function MeetTeam() {

    const profiles = [
      {id: 1, name: "Jason Katz", role: "President", imgRoute: "/images/execPics/Jason.jpg", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 2, name: "Harsha Gaddipati", role: "Vice President Club Logistics", imgRoute: "/images/execPics/Harsha-cropped.jpg", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 3, name: "Morgan Duvall", role: "Vice President Tournament Logistics", imgRoute: "/images/execPics/Morgan.JPG", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 4, name: "Ethan Maraldo", role: "Logistics Co-Director", imgRoute: "images/execPics/Ethan.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 5, name: "Gopesh Singal", role: "Logistics Co-Director", imgRoute: "images/execPics/Gopesh.jpg", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 6, name: "Shriya Nayak", role: "Exam Co-Director", imgRoute: "/images/execPics/Shriya-cropped.JPG", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 7, name: "Devam Shrivastava", role: "Build Co-Director", imgRoute: "/images/execPics/Devam.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 8, name: "Victor Hesu", role: "Build Co-Director", imgRoute: "/images/execPics/Victor.jpg", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 9, name: "Vidit Pokharna", role: "Finance Officer", imgRoute: "/images/execPics/Vidit-cropped.jpg", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 10, name: "Justin Li", role: "Junior Finance Officer", imgRoute: "/images/execPics/Justin.jpg", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 11, name: "Femke Kovoor", role: "Social Director", imgRoute: "/images/execPics/Femke.jpg", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 12, name: "Aleena Khetani", role: "PR Co-Director", imgRoute: "/images/execPics/Aleena.png", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 13, name: "Aditi Abhilash", role: "PR Co-Director", imgRoute: "/images/execPics/Aditi.jpg", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 14, name: "Julie Young", role: "Outreach Co-Director", imgRoute: "/images/execPics/Julie-cropped.jpg", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 15, name: "Anish Kristipati", role: "Outreach Co-Director", imgRoute: "/images/execPics/Anish.jpg", info: "ANYTHING ANYTHING ANYTHING"},
      {id: 16, name: "Royce Arockiasamy", role: "Tech Lead", imgRoute: "/images/execPics/Royce.jpeg", info: "ANYTHING ANYTHING ANYTHING"},
    ]

  //Stagger animation below was modified from Leigh Halliday's YouTube tutorial titled 'Staggered Animations in React with Framer Motion in 5 Minutes'. The video can be found at this link: https://www.youtube.com/watch?v=u_95SPKE6vg&ab_channel=LeighHalliday

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-RQ1XF1G76X`}
      />

      <Script strategy="lazyOnload" id="main-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RQ1XF1G76X', {
          page_path: window.location.pathname,
          });
      `}
      </Script>
    <main className="bg-slate-200 dark:bg-black flex flex-col items-center w-full">
      <AnimatePresence>
        <div id="title" className="flex flex-row justify-center bg-[url('/images/about/background-1.jpg')] w-full py-10">
        <motion.div
          initial={{opacity:0.5}}
          animate={{opacity:1}}
          transition={{duration:2}}
        >
          <h1 className= {`${play.className} drop-shadow-titleShadow text-white dark:text-darkBlue dark:bg-white font-bold text-5xl border-8 border-lightOrange m-10 p-8 lg:px-48 flex justify-center`}>
           About&nbsp;Us 
          </h1>
          </motion.div>
          <figure className="hidden lg:block">
            <Image src="/images/about/gtbuilding.jpg" alt="Picture of one of the buildings on Georgia Tech's campus" width="300" height="200" className="mb-2"/>
            <figcaption className="sr-only">Picture of one of the buildings on the Georgia Tech campus/</figcaption>
          </figure>
        </div>
      <div className="w-full">
      <p className={`${libre.className} text-lg lg:mx-64 mx-8 text-center p-4 flex justify-center border-4 border-darkBlue dark:text-white mt-4`}>
      Science Olympiad at Georgia Tech is an undergraduate student group with a mission to engage and empower students striving to become scientists and engineers through the Science Olympiad experience. 
      <br/>
      <br />
        We work around the year both within Georgia Tech and in the Atlanta area to promote Science Olympiad opportunities for students. We are especially excited to be hosting the Georgia Science Olympiad State Tournament for the 3rd year in a row and the very first Yellow Jacket Invitational, and this would not be possible without the dedication and effort of our members!
      </p>
      </div>

      <div id="line" className="border border-black w-[80%] mt-[5vh]">
      </div>

      <h1 className={`text-lightBlue font-mono dark:text-darkBlue dark:bg-lightBlue font-bold text-3xl border-2 border-white m-2 p-6 lg:px-64 shadow-lg bg-darkBlue w-72 flex justify-center ${play.className}`}>
      🐝&nbsp;Our&nbsp;Team&nbsp;🐝
      </h1>
      </AnimatePresence>
      <AnimatePresence >
        <div className="lg:mx-72 grid grid-cols-1 twoCol:grid-cols-2 threeCol:grid-cols-3 mb-4">
          {profiles.map((profile, i) => (
            <motion.div
            key={profile.id}
            initial={{opacity:0.5}}
            whileInView={{opacity:1}}
            transition={{duration:0.2, delay:i*0.1}}
            >
              <Profile name={profile.name} role={profile.role} imgRoute={profile.imgRoute} color={profile.id % 2 === 0}/>
            </motion.div>
          ))}
          </div>
      </AnimatePresence>
      <hr />
    </main>
    </>
  )
}
