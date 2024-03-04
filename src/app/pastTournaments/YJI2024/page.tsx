'use client'

import React, { useCallback, useEffect } from 'react'
import allResultsYJI2024 from '../../../../data/allResults/allResultsYJI2024'
import eventResultsYJI2024 from '../../../../data/eventResults/eventResultsYJI2024'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import EmblaCarousel from '@/app/components/Carousel'
import Script from 'next/script'
import Link from 'next/link'

export default function YJITournament2024() {
  const allPictures = [
    "/images/2024/YJIPictures/YJI_1.jpg", "/images/2024/YJIPictures/YJI_2.jpg", "/images/2024/YJIPictures/YJI_3.jpg", "/images/2024/YJIPictures/YJI_4.jpg", "/images/2024/YJIPictures/YJI_5.jpg", "/images/2024/YJIPictures/YJI_6.jpg", "/images/2024/YJIPictures/YJI_7.jpg", "/images/2024/YJIPictures/YJI_10.jpg", "/images/2024/YJIPictures/YJI_11.jpg"
]

const allResults = allResultsYJI2024
const eventResults = eventResultsYJI2024

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
    <div className="min-h-screen bg-white dark:bg-lightBlue dark:text-white">
      <h1 className="bg-lightOrange dark:bg-black  dark:text-white flex justify-center py-20">
        <div id="borderDiv" className="border-4 border-pink-300 text-center text-4xl lg:text-6xl font-bold p-4 m-4 drop-shadow-titleShadow"> 2024 Yellow Jacket Invitational
        </div>
      </h1>


    <AnimatePresence>
    <motion.div
            initial={{opacity:0.5}}
            animate={{opacity:1}}
            transition={{duration:1}}
        >
     
      {/* For small screens*/}
    <div id="carouselSmall" className="flex lg:hidden flex-row justify-center">
        
        <EmblaCarousel numOfShownElements={1}
                      maxElementWidth={467}
                      options={{ dragFree: true, loop: true, watchDrag: () => false, startIndex: 0 }}
                      contents={allPictures.map((imagePath, index) => {
                        return {
                          node: <Image
                                      className={`block`}
                                      style={{objectFit: "cover", width:467, height:352}}
                                      src={imagePath}
                                      alt="Slideshow Picture"
                                      key={index}
                                      width={467}
                                      height={352}
                                    />
                        }
                      })}/> 
      </div>
     
      {/* For large screens*/}
      <div id="carouselLarge" className="hidden lg:flex flex-row justify-center">
        <EmblaCarousel numOfShownElements={3}
                      maxElementWidth={467}
                      options={{ dragFree: true, loop: true, watchDrag: () => false, startIndex: 1 }} // Start 1 instead since the start position in Embla seems to be based on the middle element
                      contents={allPictures.map((imagePath, index) => {
                        return {
                          node: <Image
                                      className={`block`}
                                      style={{objectFit: "cover", width:467, height:352}}
                                      src={imagePath}
                                      alt="Slideshow Picture"
                                      key={index}
                                      width={467}
                                      height={352}
                                    />
                        }
                      })} /> 
      </div>

    <div className="flex justify-center">
      <p className="text-3xl text-center font-bold p-4 my-4 bg-pink-300 rounded-xl w-1/3 lg:w-1/6 hover:opacity-60 hover:transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:duration-500">
        <Link href="https://photos.app.goo.gl/a4nUMNFUTm5BHeKx6" target='__blank'>All Photos</Link>
      </p>
    </div>
    </motion.div>
    </AnimatePresence> 

      <div id="overallResults" className="bg-lightOrange dark:bg-black dark:text-white flex flex-col items-center py-10 sm:text-sm lg:text-2xl">
        <h2 className="border-4 border-red-500 text-center sm:text-lg lg:text-3xl font-bold py-4">
        🏆 Overall Results 🏆
        </h2>
        <table className="table-auto border-separate border-spacing-x-2 mt-4 sm:mx-4">
            <tbody>
          {
            allResults.map((result) => {
              return (
                <tr key={result.key} className={`${result.bold ? "font-bold": "font-normal"}`}>
                  <td className="m-3">
                    {result.key}
                  </td>
                  <td className="lg:w-96">
                    {result.school}
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
      <div id="eventResults" className="flex flex-col items-center py-10 sm:text-sm lg:text-2xl">
        <h2 className="border-4 border-pink-400 text-center sm:text-lg lg:text-3xl font-bold py-4 text-black">
        🏅 Event Winners 🏅
        </h2>
        <table className="table-auto mt-4 border-separate lg:border-spacing-x-48 px-12">
            <tbody>
            {eventResults.map((event) => {
              return (
                <tr key={event.key}>
                <td className="m-3 text-black dark:text-black border-2 p-2 rounded-2xl shadow-inner shadow-darkOrange">
                  {event.event}
                </td>
                <td className="italic border-2 p-2 rounded-2xl shadow-inner shadow-darkOrange text-black">
                  {event.school}
                </td>
                </tr>
              )
            })}
            </tbody>
        </table>
        <div className="flex justify-center">
        <p className="text-3xl text-center font-bold p-4 my-4 bg-pink-300 rounded-xl hover:opacity-60 hover:transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:duration-500">
          <Link href="https://www.duosmium.org/results/2024-02-03_yellow_jacket_invitational_c/" target='__blank'>All Results</Link>
        </p>
    </div>
      </div>
    
      <div id="overallResults" className="bg-lightOrange dark:bg-black dark:text-white flex flex-col items-center py-4 sm:text-sm lg:text-2xl">
        <h2 className="border-4 border-red-500 text-center sm:text-lg lg:text-3xl font-bold py-4">
        Tournament Information
        </h2>
        <div className="w-full flex justify-center my-8">
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vTAJKgutEODpvzm4NzgBcuhqj0ky6u9P7DMkQV31TaTa2BemLjdolwm0cMXUsr8ha729CfR_zSeOmi_/pub?embedded=true" width="90%" height="750" className="text-center lg:w-1/2"></iframe>
        </div>
      </div>
     
    </div>
    </>
  )
}
