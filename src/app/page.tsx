'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Lora } from "next/font/google"
import { useEffect } from "react"
import {BiSolidQuoteLeft, BiSolidQuoteRight} from 'react-icons/bi'
import Image from "next/image"
import Script from "next/script"
import Head from "next/head"

const play = Lora({
  subsets:['latin'],
  display:'swap'
})

export default function Home() {

  const allPictures = [
    "/images/2023/2023-1.jpg", "/images/2023/2023-2.jpg", "/images/2023/2023-3.jpg", "/images/2023/2023-4.jpg", "/images/2023/2023-5.jpg"
]

let index1 = 0
let index2 = 1
let index3 = 2

let index = 0

let count = 0

function changePic (right: boolean) {

    if (typeof(document) !== 'undefined') {
        const firstPic = document.getElementById("1") as HTMLElement
        const secondPic = document.getElementById("2") as HTMLElement
        const thirdPic = document.getElementById("3") as HTMLElement
        if (right === true) {
            index1 = (index1 + 1) % allPictures.length
            index2 = (index2 + 1) % allPictures.length
            index3 = (index3 + 1) % allPictures.length
        } else {
            index1 = ((index1 - 1) % allPictures.length)
            index2 = ((index2 - 1) % allPictures.length)
            index3 = ((index3 - 1) % allPictures.length)
            if (index1 < 0) {
                index1 = index1 + allPictures.length
            }
            if (index2 < 0) {
                index2 = index2 + allPictures.length
            }
            if (index3 < 0) {
                index3 = index3 + allPictures.length
            }
        }
        firstPic.setAttribute("src", allPictures[index1])
        secondPic.setAttribute("src", allPictures[index2])
        thirdPic.setAttribute("src", allPictures[index3])
    }
}

function changePicTimed (right: boolean) {
  if (typeof(document) !== 'undefined') {
      const firstPic = document.getElementById("1") as HTMLElement
      const secondPic = document.getElementById("2") as HTMLElement
      const thirdPic = document.getElementById("3") as HTMLElement
      if (right === true) {
          index1 = (index1 + 1) % allPictures.length
          index2 = (index2 + 1) % allPictures.length
          index3 = (index3 + 1) % allPictures.length
      } else {
          index1 = ((index1 - 1) % allPictures.length)
          index2 = ((index2 - 1) % allPictures.length)
          index3 = ((index3 - 1) % allPictures.length)
          if (index1 < 0) {
              index1 = index1 + allPictures.length
          }
          if (index2 < 0) {
              index2 = index2 + allPictures.length
          }
          if (index3 < 0) {
              index3 = index3 + allPictures.length
          }
      }
      firstPic?.setAttribute("src", allPictures[index1])
      secondPic?.setAttribute("src", allPictures[index2])
      thirdPic?.setAttribute("src", allPictures[index3])
      if (firstPic) {
        setTimeout(() => changePicTimed(true), 6000)
        //Found solution on Stack Overflow response: https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously
      }
  }
}

function changePicSmall (right: boolean) {

  if (typeof(document) !== 'undefined') {
      const firstPic = document.getElementById("1s") as HTMLElement
      if (right === true) {
          index = (index + 1) % allPictures.length
      } else {
          index = ((index - 1) % allPictures.length)
          if (index < 0) {
              index = index + allPictures.length
          }
      }
      firstPic?.setAttribute("src", allPictures[index])
  }
}

function changePicSmallTimed (right: boolean) {

  if (typeof(document) !== 'undefined') {
      const firstPic = document.getElementById("1s") as HTMLElement
      if (right === true) {
          index = (index + 1) % allPictures.length
      } else {
          index = ((index - 1) % allPictures.length)
          if (index < 0) {
              index = index + allPictures.length
          }
      }
      firstPic?.setAttribute("src", allPictures[index])
      if (firstPic) {
        setTimeout(() => changePicSmallTimed(true), 6000)
        //Found solution on Stack Overflow response: https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously
      }
  }
}

useEffect(() => {
    if (window.screen.width < 1024) {
      setTimeout(() => changePicSmallTimed(true), 4000)
      count++
    } else {
      setTimeout(() => changePicTimed(true), 4000)
      count++
    }
}, [])
  return (
    <>
    <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="main-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
      `}
      </Script> 
   
    <main className="bg-slate-200 dark:bg-darkBlue h-full w-screen">
    <AnimatePresence>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:4}}
        className="h-[24rem] flex justify-center items-center bg-[url(/images/home/atlantaSky.jpg)] "
      >
       <h1 className={`text-6xl text-center border-4 borer-white text-white lg:p-20 m-4 mx-12 w-screen, ${play.className}`}><span className="">Science Olympiad @ Georgia Tech </span></h1>
    </motion.div>
    </AnimatePresence>

    <div id="smallCarousel" className="flex lg:hidden flex-row justify-center py-16 ">

        <button id="left" onClick={() => {
                changePicSmall(false)
                
                }} className="text-5xl dark:text-white"> &lt; </button>
        <div className="m-2">
            <img id="1s" src="/images/2023/2023-1.jpg" alt="Slideshow Picture" width="467" height="350" className="border-4 border-brightYellow shadow-2xl shadow-brightYellow rounded-full"/>
        </div>
        <button id="right" onClick={() => changePicSmall(true)} className="text-5xl dark:text-white"> &gt; </button>
    </div>

    <div id="carousel" className="hidden lg:flex flex-row justify-center py-16 ">

        <button id="left" onClick={() => {
                changePic(false)
                
                }} className="text-6xl"> &lt; </button>
        <div className="m-2">
            <img id="1" src="/images/2023/2023-1.jpg" alt="Slideshow Picture" width="467" height="350" className="border-4 border-lightOrange shadow-2xl shadow-lightOrange rounded-full"/>
        </div>
        <div className='m-2'>
            <img id="2" src="/images/2023/2023-2.jpg" alt="Slideshow Picture" width="467" height="350" className="border-4 border-brightYellow shadow-2xl shadow-brightYellow rounded-full"/>
        </div>
        <div className='m-2'>
            <img id="3" src="/images/2023/2023-3.jpg" alt="Slideshow Picture" width="467" height="350" className="border-4 border-darkOrange shadow-2xl shadow-darkOrange rounded-full"/>
        </div>
        <button id="right" onClick={() => changePic(true)} className="text-6xl"> &gt; </button>
    </div>
  
<AnimatePresence>
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:3}}
    >
    <div id="mission" className="bg-lightBlue flex flex-col items-center p-8 dark:bg-black w-screen">
        <h2 className={`text-5xl ${play.className} border-4 border-black lg:w-1/2 text-center py-2 my-4 dark:text-white dark:border-white`}>Mission Statement</h2>
        <p className="hidden lg:flex text-3xl text-center dark:text-white"><BiSolidQuoteLeft className="text-darkBlue dark:text-white hidden lg:block"/> Engage Science Olympiad Alumni at Georgia Tech in organizing events and motivating students by serving the Science Olympiad community. <BiSolidQuoteRight className="text-darkBlue dark:text-white hidden lg:block"/></p>
        <p className="flex lg:hidden text-3xl text-center dark:text-white">&ldquo; Engage Science Olympiad Alumni at Georgia Tech in organizing events and motivating students by serving the Science Olympiad community. &rdquo; </p>
    </div>
    </motion.div>

    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
    >
    <div id="serviceSmall" className={`flex lg:hidden flex-col items-center w-screen`}>
      <div className="flex flex-col items-center">
        <h2 className={`bg-lightOrange ${play.className} text-6xl p-2 m-2`}>Our Service</h2>
      </div>
      <p className="text-2xl border-4 border-black p-4 m-4 dark:text-white dark:border-white">Science Olympiad @ Georgia Tech is hosting the Georgia State Division C Science Olympiad competition for the second consecutive year this year. Georgia Tech student volunteers with various expertise and immense passion for science coalesce to write exams, fabricate supplies, prepare labs, and host workshops to provide an optimal competition experience for high school students.</p>
      <figure className="m-2">
        <Image src="/images/home/main1.jpg" alt="Students competing in the Bridge event at the state competition" width="400" height="267"/>
        <figcaption className="sr-only">Image of two students competing in the Bridge event and getting their device set up. Science Olympiad volunteers can be seen in the background of the photo taken during the 2023 State Competition.</figcaption>
      </figure>
    </div>
    </motion.div>

    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
    >
    <div id="tournamentSmall" className={`flex lg:hidden flex-col items-center bg-lightBlue dark:bg-black w-screen`}>
      <div className="flex flex-col items-center">
        <h2 className={`bg-lightOrange ${play.className} text-6xl p-2 m-2`}>Our Tournament</h2>
      </div>
      <p className="text-2xl border-4 border-black p-4 m-4 dark:text-white dark:border-white">The Georgia State Division C Science Olympiad competition will be hosted at Georgia Tech, centralized around the Clough Undergraduate Learning Commons&apos; lab spaces. In addition to the 23 competitive events, several trial events will be hosted on competition day. Various major-specific and specialized Georgia Tech student organizations will host workshops and information sessions around campus to provide high school students with an experience in specific fields. Special tournament directors from the Georgia Science Olympiad organization will ensure fairness in scoring and resolving miscellaneous issues.</p>
      <figure className="m-2">
        <Image src="/images/home/main2.jpg" alt="Students competing in a build event at the state competition" width="400" height="267"/>
        <figcaption className="sr-only">Image of two students placing the plane that they built into a box at the Science Olympiad 2023 State Tournament.</figcaption>
      </figure>
    </div>
    </motion.div>

    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
    >
    <div id="serviceLarge" className={`hidden lg:flex flex-row justify-evenly items-center p-16`}>
      <div className="flex flex-col items-center">
        <h2 className={`bg-lightOrange ${play.className} text-6xl p-2 m-2 lg:py-24 lg:px-8 lg:mr-4 `}>Our Service</h2>
      </div>
      <p className="text-2xl w-1/2 border-4 border-black p-4 m-4 dark:text-white dark:border-white">Science Olympiad @ Georgia Tech is hosting the Georgia State Division C Science Olympiad competition for the second consecutive year this year. Georgia Tech student volunteers with various expertise and immense passion for science coalesce to write exams, fabricate supplies, prepare labs, and host workshops to provide an optimal competition experience for high school students.</p>
      <figure className="m-2">
        <Image src="/images/home/main1.jpg" alt="Students competing in the Bridge event at the state competition" width="400" height="267"/>
        <figcaption className="sr-only">Image of two students competing in the Bridge event and getting their device set up. Science Olympiad volunteers can be seen in the background of the photo taken during the 2023 State Competition.</figcaption>
      </figure>
    </div>
    </motion.div>

    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
    >
    <div id="tournamentLarge" className="bg-lightBlue dark:bg-black hidden lg:flex flex-row justify-evenly items-center p-16">
      <figure>
        <Image src="/images/home/main2.jpg" alt="Students competing in a build event at the state competition" width="400" height="267"/>
        <figcaption className="sr-only">Image of two students placing the plane that they built into a box at the Science Olympiad 2023 State Tournament.</figcaption>
      </figure>
      <p className="text-2xl w-1/2 border-4 border-black dark:border-white dark:text-white m-4 p-4">The Georgia State Division C Science Olympiad competition will be hosted at Georgia Tech, centralized around the Clough Undergraduate Learning Commons&apos; lab spaces. In addition to the 23 competitive events, several trial events will be hosted on competition day. Various major-specific and specialized Georgia Tech student organizations will host workshops and information sessions around campus to provide high school students with an experience in specific fields. Special tournament directors from the Georgia Science Olympiad organization will ensure fairness in scoring and resolving miscellaneous issues.</p>
      <div className="justify items-center">
          <h2 className={`bg-lightOrange ${play.className} text-6xl py-28 px-4 text-center`}>Our Tournament</h2>
      </div>
    </div>
    </motion.div>

  </AnimatePresence>

  <AnimatePresence>
<div id="sponsors">
  <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:3}}
    className="flex flex-row justify-around p-12"
  >

<div id="schools">
  <div className={`text-center text-3xl px-12 italic text-white bg-darkBlue dark:bg-black ${play.className}`}>
      <div className="flex flex-col items-center">
      <h2 className="text-center">A special thanks to our sponsors for supporting us in hosting our tournaments!</h2> 
        <figure>

        </figure>
        <figure>
          <Image src="/images/sponsors/seal2.png" alt="Georgia Tech Seal" width="826" height="200"/>
          <figcaption className="sr-only">Picture of the Georgia Tech Seal next to the words Georgia Institute of Technology</figcaption>
        </figure>
      </div>
    </div>
      <h3 id="gold" className={`${play.className} font-bold text-5xl bg-brightYellow m-4 text-center`}> Gold </h3>
      <figure className="flex justify-center">
        <Image src="/images/sponsors/MSE.png" alt="Georgia Tech School of Materials Science and Engineering" width="900" height="400" className="shadow-brightYellow border-brightYellow shadow-2xl border-4 p-4 m-2"/>
        <figcaption className="sr-only">Picture of the Georgia Tech School of Materials Science and Engineering Logo</figcaption>
      </figure>
      <h3 id="silver" className={`${play.className} font-bold text-5xl m-4 bg-zinc-300 text-center`}>Silver</h3>
        <figure className="flex justify-center">
          <Image src="/images/sponsors/ChBE.png" alt="Georgia Tech School of Chemical and Biomolecular Engineering" width="850" height="400" className="shadow-zinc-300 border-zinc-300 shadow-2xl border-4 p-4 m-2"/>
          <figcaption className="sr-only">Picture of the Georgia Tech School of Chemical and Biomolecular Engineering Logo</figcaption>
        </figure>
      <h3 id="bronze" className={`${play.className} font-bold text-5xl m-4 bg-amber-600 text-center`}>Bronze</h3>
        <figure className="flex justify-center">
        <Image src="/images/sponsors/Design2.png" alt="Georgia Tech College of Design" width="800" height="100" className="shadow-amber-600 border-amber-600 shadow-2xl border-4 p-4 m-2"/>
          <figcaption className="sr-only">Picture of the Georgia Tech College of Design Logo</figcaption>
        </figure>
  </div>
  </motion.div>
    </div>
    </AnimatePresence>

    </main>
    </>
  )
}
