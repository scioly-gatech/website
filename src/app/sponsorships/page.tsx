'use client'
import React from 'react'
import { Lora} from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Script from 'next/script'

const play = Lora({ subsets: ['latin'], display: "swap" })

export default function Sponsorships() {

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
   <div id="allContent" className="bg-slate-200 dark:bg-darkBlue w-full">
      <div id="topHeader" className = "bg-[url('/images/sponsorPage/sponsor.jpg')] flex justify-center items-center h-[30vh]">
        <h1 className={`text-5xl lg:text-7xl font-bold text-white border-8 lg:mx-8 p-4 lg:p-8 lg:px-20 ${play.className} drop-shadow-titleShadow`}>Sponsorship</h1>
      </div>

<AnimatePresence>
  <motion.div
    initial={{opacity:-1}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
  >
      <div id="why" className="flex flex-col lg:flex-row justify-around p-12">
        <div id="centerWhy" className="flex justify-center items-center">
          <h2 className={`text-center text-5xl italic text-black dark:text-white bg-lightOrange dark:bg-black p-8 lg:px-20 ${play.className}`}> Why Sponsor Science Olympiad @ Georgia Tech? </h2>
        </div>
        <figure>
        </figure>
        <div className="flex flex-col items-center">
        <p className="text-left text-lg lg:text-2xl m-4 lg:m-12 dark:text-white"> Science Olympiad provides a STEM-oriented competition environment, where passionate high school students and Georgia Tech student volunteers coalesce. Funding is necessary to host the State tournament and workshops for Atlanta high school students on the prestigious and pricey Georgia Tech campus. If you or your company/organization is interested in contributing to this noble effort, we, the executive board of this organization, encourage you to view the document applicable to your position. </p>
        <figure className="lg:mr-80">
          <Image src="/images/sponsorPage/GTLogo.png" alt="GT Logo" width="250" height="157" className=""/>
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
          <h2 className={`mt-[4vh] text-4xl lg:text-6xl text-slate-900 bg-slate-200 p-4 m-4 mx-8 ${play.className}`}> Sponsorship Tiers</h2>
          <div id="tierContent" className="flex flex-row justify-evenly">

      <table className="lg:mt-8 border-separate lg:mx-72 border-spacing-x-8 lg:border-spacing-x-12 border-spacing-y-4">
        <tbody>
          <tr className="">
            <td>
            <motion.div
            initial={{opacity:0, translateX:100}}
            whileInView={{opacity:1, translateX:0}}
            transition={{}}
          >
            <div className="lg:mt-[3vh] text-2xl lg:text-3xl text-slate-700 hover:bg-brightYellow dark:hover:text-slate-700 dark:text-white border-8 border-brightYellow shadow-xl shadow-brightYellow text-center lg:px-[24vh]">
            <h3 ><span className={`font-bold `}> Gold </span> <br />$2500+</h3>
            </div>
          </motion.div>
            </td>
            <td className="border-2 border-black dark:border-white ">
              <p className="text-lg dark:text-white">
                Major feature in all events, logo on any promotions, special mentions.
                <br />
                <span className="bg-slate-200 dark:bg-darkBlue">This is in addition to the rewards below.</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
            <motion.div
          initial={{opacity:0, translateX:100}}
          whileInView={{opacity:1, translateX:0}}
          transition={{delay:0.5}}
        >
          <h3 className="mt-[3vh] text-2xl lg:text-3xl hover:bg-zinc-300 text-slate-700 dark:hover:text-slate-700 dark:text-white border-8 border-zinc-300 shadow-lg shadow-zinc-300 text-center "> <span className="font-bold">Silver </span><br />$1000+</h3>
        </motion.div>
            </td>
            <td className="border-2 border-black dark:border-white">
              <p className="text-lg dark:text-white">
                Logo featured on t-shirts, mentions in selected events and media.
                <br />

                <span className="bg-slate-200 dark:bg-darkBlue">This is in addition to the rewards below.</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
            <motion.div
          initial={{opacity:0, translateX:100}}
          whileInView={{opacity:1, translateX:0}}
          transition={{delay:1}}
        >
          <h3 className="mt-[3vh] text-2xl lg:text-3xl hover:bg-amber-600 text-slate-700 dark:hover:text-slate-700 dark:text-white border-8 border-amber-600 shadow-lg shadow-amber-600 text-center"> <span className="font-bold">Bronze </span><br />$500+</h3>
        </motion.div>
            </td>
            <td className="border-2 border-black dark:border-white">
              <p className="text-lg dark:text-white">
            Acknowledgment during event, logo in program brochure.
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

      <AnimatePresence>
<div id="sponsors">
  <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:3}}
    className="flex flex-row justify-around p-12"
  >

<div id="logos">
  <div className={`text-center text-3xl px-12 italic text-white bg-darkBlue dark:bg-black ${play.className}`}>
      <div className="flex flex-col items-center">
      <h2 className="text-center">A special thanks to our sponsors for supporting us in hosting our tournaments!</h2> 
        <figure>
          <Image src="/images/sponsors/seal2.png" alt="Georgia Tech Seal" width="700" height="200"/>
          <figcaption className="sr-only">Picture of the Georgia Tech Seal next to the words Georgia Institute of Technology</figcaption>
        </figure>
      </div>
    </div>
      <figure className="flex flex-col items-center shadow-brightYellow border-brightYellow shadow-2xl border-4 p-4">
        {/** Sponsor Images */}
        <Image src="/images/sponsors/buzzfund.png" alt="Campus Services" width="350" height="300" className=""/>
        <figcaption className="sr-only"> Logo for Campus Services </figcaption>
        <Image src="/images/sponsors/ece.png" alt="School of Electrical and Computer Engineering" width="700" height="400" className=""/>
        <figcaption className="sr-only"> Logo for School of Electrical and Computer Engineering </figcaption>
        <Image src="/images/sponsors/gtsf.png" alt="Georgia Tech Alumni Association Student Foundation" width="700" height="400" className=""/>
        <figcaption className="sr-only"> Logo for Georgia Tech Alumni Association Student Foundation </figcaption>
        <Image src="/images/sponsors/mse.png" alt="School of Materials Science and Engineering" width="600" height="400" className=""/>
        <figcaption className="sr-only"> Logo for School of Materials Science and Engineering </figcaption>
        <Image src="/images/sponsors/parent.png" alt="Parents Fund For Student Life & Leadership" width="500" height="400" className=""/>
        <figcaption className="sr-only"> Logo for Parents Fund For Student Life & Leadership </figcaption>
        <Image src="/images/sponsors/sei.png" alt="Strategic Energy Institute" width="500" height="400" className=""/>
        <figcaption className="sr-only"> Logo for Strategic Energy Institute </figcaption>
        <Image src="/images/sponsors/gtri.png" alt="Georgia Tech Research Institute" width="550" height="400" className="mt-4"/>
        <figcaption className="sr-only"> Logo for Georgia Tech Research Institute</figcaption>
      </figure>
  </div>
  </motion.div>
    </div>
    </AnimatePresence>
   </div>
   </>
  )
}
