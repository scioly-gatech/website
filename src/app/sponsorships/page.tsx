'use client'
import React from 'react'
import { Playfair} from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const play = Playfair({ subsets: ['latin'], display: "swap" })

export default function Sponsorships() {

  return (
   <div id="allContent" className="bg-slate-200 dark:bg-darkBlue w-screen">
      <div id="topHeader" className = "bg-[url('/images/sponsor.jpg')] flex justify-center items-center h-[30vh]">
        <h1 className={`text-5xl lg:text-7xl font-bold text-white border-8 lg:mx-8 p-4 lg:p-8 lg:px-20 ${play.className}`}>Sponsorship</h1>
      </div>

<AnimatePresence>
  <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
  >
      <div id="why" className="flex flex-col lg:flex-row justify-around p-12">
        <h2 className={`text-center text-5xl italic text-black dark:text-white bg-lightOrange dark:bg-black p-8 lg:px-20 ${play.className}`}> Why Sponsor Science Olympiad @ Georgia Tech? </h2>
        <figure>
        </figure>
        <div className="flex flex-col items-center">
        <p className="text-center text-lg lg:text-2xl m-4 lg:m-12 dark:text-white"> Science Olympiad provides a STEM-oriented competition environment, where passionate high school students and Georgia Tech student volunteers coalesce. Funding is necessary to host the State tournament and workshops for Atlanta high school students on the prestigious and pricey Georgia Tech campus. If you or your company/organization is interested in contributing to this noble effort, we, the executive board of this organization, encourage you to view the document applicable to your position. </p>
        <figure>
          <Image src="/images/GTLogo.png" alt="GT Logo" width="250" height="157" className="shadow-2xl shadow-white"/>
          <figcaption className="sr-only">Georgia Tech Logo</figcaption>
        </figure>
        </div>
      </div>
      <h2 className="p-4 font-bold text-3xl animate-bounce text-center dark:text-white">&darr;</h2>
      </motion.div>
      </AnimatePresence>



      <div id="tiers">
      
      <AnimatePresence>
      <div className="flex flex-col items-center bg-lightOrange dark:bg-zinc-900">
          <h2 className={`mt-[4vh] text-6xl text-slate-900 bg-slate-200 p-4 m-4 mx-8 ${play.className}`}> Sponsorship Tiers</h2>
          <div id="tierContent" className="flex flex-row justify-evenly">

      <table className="lg:mt-8 border-separate lg:mx-72 border-spacing-x-8 lg:border-spacing-x-12 border-spacing-y-4">
        <tbody>
          <tr className="">
            <td>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}
          >
            <div className="lg:mt-[3vh] text-2xl lg:text-3xl text-slate-700 hover:bg-brightYellow dark:hover:text-slate-700 dark:text-white border-8 border-brightYellow shadow-xl shadow-brightYellow text-center lg:px-[24vh]">
            <h3 ><span className={`font-bold `}> Gold </span> <br />$2500+</h3>
            </div>
          </motion.div>
            </td>
            <td className="border-2 border-black dark:border-white ">
              <p className="text-lg dark:text-white">
                Your name/logo will be a major feature every time the Georgia Science Olympiad State Tournament is mentioned at the event or on our social media. 
                <br />
                <br />
                Press Release Example:  “The 2023 Georgia State Science Olympiad Competition Presented by…” 
                <br />
                <span className="bg-slate-200 dark:bg-darkBlue">This is in addition to the rewards from the previous level.</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
            <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1}}
        >
          <h3 className="mt-[3vh] text-2xl lg:text-3xl hover:bg-zinc-300 text-slate-700 dark:hover:text-slate-700 dark:text-white border-8 border-zinc-300 shadow-lg shadow-zinc-300 text-center "> <span className="font-bold">Silver </span><br />$1000+</h3>
        </motion.div>
            </td>
            <td className="border-2 border-black dark:border-white">
              <p className="text-lg dark:text-white">
                Your name/logo will be featured on the Science Olympiad at Georgia Tech Volunteer T-shirts. 
                <br />

                <span className="bg-slate-200 dark:bg-darkBlue">This is in addition to the rewards from the previous level.</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
            <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1}}
        >
          <h3 className="mt-[3vh] text-2xl lg:text-3xl hover:bg-amber-600 text-slate-700 dark:hover:text-slate-700 dark:text-white border-8 border-amber-600 shadow-lg shadow-amber-600 text-center"> <span className="font-bold">Bronze </span><br />$500+</h3>
        </motion.div>
            </td>
            <td className="border-2 border-black dark:border-white">
              <p className="text-lg dark:text-white">
            Your name/logo will be featured at the Georgia Science Olympiad State Tournament Awards Ceremony with over 500 prospective high school students, parents, and teachers. 
            </p>
            </td>
          </tr>
        </tbody>
      </table>

      </div>
      <h2 className="font-bold text-3xl animate-bounce p-12 dark:text-white">&darr;</h2>
      </div>
      </AnimatePresence>
      </div>

    <div id="GTSponsors" className="">

      <AnimatePresence>
        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:1}}
          className="flex flex-row justify-around p-12"
        >

<div id="sponsorsSmall" className="block lg:hidden">
<div className={`text-center text-5xl italic text-white bg-darkBlue dark:bg-black ${play.className}`}>
            <h2 >Georgia Tech Departmental Sponsorships</h2>
            <div className="flex">
              <figure>
                <Image src="images/seal.png" alt="Georgia Tech Seal" width="1000" height="242"/>
                <figcaption className="sr-only">Picture of the Georgia Tech seal next to the words Georgia Institute of Technology</figcaption>
              </figure>
            </div>
          </div>
      <div id="schools" className="">
            <h3 id="gold" className={`${play.className} font-bold text-5xl bg-brightYellow m-4 text-center`}> Gold </h3>
            <p className="text-3xl m-2 shadow-2xl shadow-brightYellow border-4 border-brightYellow font-bold text-center dark:text-white">
              Georgia Tech School of Materials Science and Engineering
            </p>
            <h3 id="silver" className={`${play.className} font-bold text-5xl m-4 bg-zinc-300 text-center`}>Silver</h3>
            <p className="text-3xl m-2 shadow-2xl shadow-zinc-300 border-4 border-zinc-300 font-bold text-center dark:text-white">
              Georgia Tech School of Chemical and Biomolecular Engineering
            </p>
            <h3 id="bronze" className={`${play.className} font-bold text-5xl m-4 bg-amber-600 text-center`}>Bronze</h3>
            <p className="text-3xl m-2 shadow-2xl shadow-amber-600 border-4 border-amber-600 font-bold text-center dark:text-white">
              Georgia Tech College of Design
            </p>
          </div>
          </div>


    <div id="sponsorsLarge" className="hidden lg:block">
      <div id="schools" className="">
            <h3 id="gold" className={`${play.className} font-bold text-5xl bg-brightYellow m-4 text-center`}> Gold </h3>
            <p className="text-3xl m-2 shadow-2xl shadow-brightYellow border-4 border-brightYellow font-bold text-center dark:text-white">
              Georgia Tech School of Materials Science and Engineering
            </p>
            <h3 id="silver" className={`${play.className} font-bold text-5xl m-4 bg-zinc-300 text-center`}>Silver</h3>
            <p className="text-3xl m-2 shadow-2xl shadow-zinc-300 border-4 border-zinc-300 font-bold text-center dark:text-white">
              Georgia Tech School of Chemical and Biomolecular Engineering
            </p>
            <h3 id="bronze" className={`${play.className} font-bold text-5xl m-4 bg-amber-600 text-center`}>Bronze</h3>
            <p className="text-3xl m-2 shadow-2xl shadow-amber-600 border-4 border-amber-600 font-bold text-center dark:text-white">
              Georgia Tech College of Design
            </p>
          </div>
          <div className={`text-center text-5xl italic text-white bg-darkBlue dark:bg-black ${play.className}`}>
            <h2 >Georgia Tech Departmental Sponsorships</h2>
            <div className="flex">
              <figure>
                <Image src="images/seal.png" alt="Georgia Tech Seal" width="1000" height="242"/>
                <figcaption className="sr-only">Picture of the Georgia Tech seal next to the words Georgia Institute of Technology</figcaption>
              </figure>
            </div>
          </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <h2 className="p-4 font-bold text-3xl animate-bounce text-center dark:text-white">&darr;</h2>
    </div>
   
   <div id="contact" className="bg-lightOrange dark:bg-zinc-900 py-24">
      <AnimatePresence>
      <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:3}}
        >
          <h2 className="border-4 border-black dark:border-white dark:text-white text-2xl md:text-4xl text-center lg:mx-48 mx-8 lg:p-36 leading-relaxed">We thank you for making any contributions! Please do not hesitate to reach out to us with any questions by emailing <a href="malito:scioly.gatech@gmail.com" className="underline font-semibold hover:opacity-50">scioly.gatech@gmail.com</a> </h2>

        </motion.div>
      </AnimatePresence>
   </div>
   </div>
    
  )
}
