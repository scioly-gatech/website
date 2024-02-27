'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Lora } from "next/font/google"
import { useEffect } from "react"
import {BiSolidQuoteLeft, BiSolidQuoteRight} from 'react-icons/bi'
import Image from "next/image"
import EmblaCarousel from '@/app/components/Carousel'
import Script from "next/script"

const play = Lora({
  subsets:['latin'],
  display:'swap'
})

const indexToColor = {
  0: 'lightOrange',
  1: 'brightYellow',
  2: `darkOrange`
};

export default function Home() {

  const allPictures = [
    "/images/2023/2023-1.jpg", "/images/2023/2023-2.jpg", "/images/2023/2023-3.jpg", "/images/2023/2023-4.jpg", "/images/2023/2023-5.jpg", "/images/2023/2023-6.jpg", "/images/2023/2023-7.jpg", "/images/2023/2023-8.jpg", "/images/2023/2023-9.jpg", "/images/2023/2023-10.jpg", "/images/2023/2023-11.jpg", "/images/2023/2023-12.jpg", "/images/2023/2023-13.jpg", "/images/2023/2023-14.jpg", "/images/2023/2023-15.jpg", "/images/2023/2023-16.jpg", "/images/2023/2023-17.jpg", "/images/2023/2023-18.jpg", "/images/2023/2023-19.jpg", "/images/2023/2023-20.jpg", 
]

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
   
    <main className="bg-amber-50 dark:bg-darkBlue h-full w-full">
    <div id="topScreen" className="h-[24rem] flex justify-center items-center bg-[url(/images/home/atlantaSky.jpg)] ">
      <AnimatePresence>
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:4}}
        >
        <h1 className={`text-6xl text-center border-4 borer-white text-white drop-shadow-titleShadow font-bold lg:p-20 mx-12 w-full, ${play.className}`}><span>Science Olympiad @ Georgia Tech </span></h1>
      </motion.div>
      </AnimatePresence>
    </div>
    {/* For small screens
    <div id="carouselSmall" className="flex lg:hidden flex-row justify-center">
        <EmblaCarousel numOfShownElements={1}
                      maxElementWidth={467}
                      options={{ dragFree: true, loop: true, watchDrag: () => false, startIndex: 0 }}
                      onSlidesInViewChange={(inViewChildren, notInViewChildren) => {
                        // Make not in view children to be invisible so their shadows do not appear as well
                        inViewChildren.forEach(child => {
                          child.classList.add("shadow-2xl");
                          child.classList.remove("opacity-0");
                        });
                        notInViewChildren.forEach(child => {
                          child.classList.remove("shadow-2xl");
                          child.classList.add("opacity-0");
                        });
                      }}
                      viewportPadding={"0 50px"}// * For ensuring that the shadow of the most left and right elements is not cutoff by the buttons
                      contents={allPictures.map((imagePath, index) => {
                        const mod = index % 3;
                        if (mod != 0 && mod != 1 && mod != 2) {
                          return { node: <></>};
                        }
                        return {
                          node: <Image
                                  className={`block border-4 border-${indexToColor[mod]} shadow-2xl shadow-${indexToColor[mod]} rounded-full my-16 transition-opacity opacity-0 duration-300`}
                                  style={{objectFit: "cover"}}
                                  src={imagePath}
                                  alt="Slideshow Picture"
                                  key={index}
                                  width={467}
                                  height={0}
                                />
                          }
                      })} />
      </div>
      */}

      {/* For large screens*/}
      <div id="carouselLarge" className="hidden lg:flex flex-row justify-center">
        <EmblaCarousel numOfShownElements={3}
                      maxElementWidth={467}
                      options={{ dragFree: true, loop: true, watchDrag: () => false, startIndex: 1 }}  // Start 1 instead since the start position in Embla seems to be based on the middle element
                      onSlidesInViewChange={(inViewChildren, notInViewChildren) => {
                        // Make not in view children to be invisible so their shadows do not appear as well
                        inViewChildren.forEach(child => {
                          child.classList.remove("opacity-0");
                        });
                        notInViewChildren.forEach(child => {
                          child.classList.add("opacity-0");
                        });
                      }}
                      viewportPadding={"0 50px"} //For ensuring that the shadow of the most left and right elements is not cutoff by the buttons
                      contents={allPictures.map((imagePath, index) => {
                        const mod = index % 3;
                        if (mod != 0 && mod != 1 && mod != 2) {
                          return { node: <></>};
                        }

                        return {
                          node: <Image
                                  className={`block border-4 border-${indexToColor[mod]} shadow-2xl shadow-${indexToColor[mod]} rounded-full my-16 transition-opacity opacity-0 duration-300`}
                                  style={{objectFit: "cover"}}
                                  src={imagePath}
                                  alt="Slideshow Picture"
                                  key={index}
                                  width={467}
                                  height={0}
                                />
                          }
                      })} />
      </div>

<AnimatePresence>
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:3}}
    >
    <div id="mission" className="bg-darkOrange flex flex-col items-center p-8 dark:bg-black mx-0 lg:mx-24">
        <h2 className={`text-3xl lg:text-5xl ${play.className} border-4 border-black lg:w-1/2 text-center py-2 my-4 dark:text-white dark:border-white`}>Mission Statement</h2>
        <p className="hidden lg:flex text-3xl text-center dark:text-white"><BiSolidQuoteLeft className="text-darkBlue dark:text-white hidden lg:block"/> Engage Science Olympiad Alumni at Georgia Tech in organizing events and motivating students by serving the Science Olympiad community. <BiSolidQuoteRight className="text-darkBlue dark:text-white hidden lg:block"/></p>
        <p className="flex lg:hidden text-3xl text-center dark:text-white">&ldquo; Engage Science Olympiad Alumni at Georgia Tech in organizing events and motivating students by serving the Science Olympiad community. &rdquo; </p>
    </div>
    </motion.div>

    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
    >
    <div id="serviceSmall" className={`flex lg:hidden flex-col items-center w-full`}>
      <div className="flex flex-col items-center">
        <h2 className={`bg-lightOrange ${play.className} text-6xl p-2 m-2`}>Our Service</h2>
      </div>
      <p className="text-2xl border-4 border-black p-4 m-4 dark:text-white dark:border-white"> Science Olympiad @ Georgia Tech is proud to announce that it will be hosting the very first Yellow Jacket Invitational in addition to the Georgia State Division C Science Olympiad competition for the third consecutive year. Georgia Tech student volunteers bring their various expertise and immense passion for science to writing exams, fabricating supplies, preparing labs, and hosting workshops to provide an optimal and memorable competition experience for high school students.</p>
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
    <div id="tournamentSmall" className={`flex lg:hidden flex-col items-center bg-lightBlue dark:bg-black w-full`}>
      <div className="flex flex-col items-center">
        <h2 className={`bg-lightOrange ${play.className} text-6xl p-2 m-2`}>Our Tournament</h2>
      </div>
      <p className="text-2xl border-4 border-black p-4 m-4 dark:text-white dark:border-white"> The Georgia Tech campus will be the bustling hub for two events: the Georgia Division C Science Olympiad Tournament and the Yellow Jacket Invitational. Centered around the Clough Undergraduate Learning Commons&apos; lab spaces. Centered around the Clough Undergraduate Learning Commons and using its state-of-the-art lab spaces, these competitions promise an immersive and challenging experience. Participants can look forward to 23 official competitive events, alongside a variety of intriguing trial events scheduled for the day. Additionally, the campus will be alive with interactive workshops and informative sessions. </p>
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
    <div id="serviceLarge" className={`hidden lg:flex flex-row justify-evenly items-center p-16 mx-12`}>
      <div className="flex flex-col items-center">
        <h2 className={`bg-darkOrange dark:bg-black dark:text-white ${play.className} text-6xl p-2 m-2 lg:py-24 lg:px-8 lg:mr-4 rounded`}>Our Service</h2>
      </div>
      <p className="text-2xl w-1/2 border-4 border-black p-4 m-4 dark:text-white dark:border-white">Science Olympiad @ Georgia Tech is proud to announce that it will be hosting the very first Yellow Jacket Invitational in addition to the Georgia State Division C Science Olympiad competition for the third consecutive year. Georgia Tech student volunteers bring their various expertise and immense passion for science to writing exams, fabricating supplies, preparing labs, and hosting workshops to provide an optimal and memorable competition experience for high school students.</p>
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
    <div id="tournamentLarge" className="bg-darkOrange dark:bg-black hidden lg:flex flex-row justify-evenly items-center p-8 mx-24">
      <figure>
        <Image src="/images/home/main2.jpg" alt="Students competing in a build event at the state competition" width="400" height="267"/>
        <figcaption className="sr-only">Image of two students placing the plane that they built into a box at the Science Olympiad 2023 State Tournament.</figcaption>
      </figure>
      <p className="text-2xl w-1/2 border-4 border-black dark:border-white dark:text-white m-4 p-4"> The Georgia Tech campus will be the bustling hub for two events: the Georgia Division C Science Olympiad Tournament and the Yellow Jacket Invitational. Centered around the Clough Undergraduate Learning Commons&apos; lab spaces. Centered around the Clough Undergraduate Learning Commons and using its state-of-the-art lab spaces, these competitions promise an immersive and challenging experience. Participants can look forward to 23 official competitive events, alongside a variety of intriguing trial events scheduled for the day. Additionally, the campus will be alive with interactive workshops and informative sessions. </p>
      <div className="justify items-center">
          <h2 className={`bg-lightOrange dark:bg-black dark:text-white ${play.className} text-6xl py-28 px-4 text-center`}>Our Tournament</h2>
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
      <figure className="flex flex-col items-center shadow-brightYellow border-brightYellow shadow-2xl border-4 p-4 bg-lightBlue">
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

    </main>
    </>
  )
}
