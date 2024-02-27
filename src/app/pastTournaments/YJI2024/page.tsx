'use client'

import React, { useCallback, useEffect } from 'react'
import allResults2023 from '../../../../data/allResults/allResults2023'
import eventResults2023 from '../../../../data/eventResults/eventResults2023'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import EmblaCarousel from '@/app/components/Carousel'
import Script from 'next/script'

export default function PastTournament2023() {
  const allPictures = [
    "/images/2023/2023-1.jpg", "/images/2023/2023-2.jpg", "/images/2023/2023-3.jpg", "/images/2023/2023-4.jpg", "/images/2023/2023-5.jpg", "/images/2023/2023-6.jpg", "/images/2023/2023-7.jpg", "/images/2023/2023-8.jpg", "/images/2023/2023-9.jpg", "/images/2023/2023-10.jpg", "/images/2023/2023-11.jpg", "/images/2023/2023-12.jpg", "/images/2023/2023-13.jpg", "/images/2023/2023-14.jpg", "/images/2023/2023-15.jpg", "/images/2023/2023-16.jpg", "/images/2023/2023-17.jpg", "/images/2023/2023-18.jpg", "/images/2023/2023-19.jpg", "/images/2023/2023-20.jpg", 
]



const allResults = allResults2023
const eventResults = eventResults2023

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
                                      style={{objectFit: "cover"}}
                                      src={imagePath}
                                      alt="Slideshow Picture"
                                      key={index}
                                      width={467}
                                      height={0}
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
      </div>
    </div>
    </>
  )
}
