'use client'

import React, { useCallback, useEffect } from 'react'
import allResults2023 from '../../../../data/allResults/allResults2023'
import eventResults2023 from '../../../../data/eventResults/eventResults2023'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import EmblaCarousel from '@/app/components/Carousel'

export default function PastTournament2023() {
const allPictures = [
    "/images/2023/2023-1.jpg", "/images/2023/2023-2.jpg", "/images/2023/2023-3.jpg", "/images/2023/2023-4.jpg", "/images/2023/2023-5.jpg"
]

const allResults = allResults2023
const eventResults = eventResults2023

  return (
    <div className="min-h-screen bg-white dark:bg-blue-950 dark:text-white">
      <h1 className="bg-lightOrange dark:bg-black  dark:text-white flex justify-center py-20">
        <div id="borderDiv" className="border-4 border-lime-400 text-center text-2xl lg:text-6xl font-bold p-4 m-4">
        2023 State Division C Tournament
        </div>
      </h1>


    <AnimatePresence>
    <motion.div
            initial={{opacity:0.5}}
            animate={{opacity:1}}
            transition={{duration:1}}
        >
      {/* For small screens*/}
      <div id="carouselSmall" className="flex flex-row justify-center lg:hidden">
        <EmblaCarousel numOfShownElements={1}
                      elementWidth={200}
                      options={{ dragFree: true, loop: true }}> 
              {allPictures.map(imagePath => {
                return <Image
                  className="block"
                  style={{objectFit: "cover"}}
                  src={imagePath}
                  alt="Slideshow Picture"
                  width={200}
                  height={150}
                />
              })}
        </EmblaCarousel>
      </div>
      
      {/* For large screens*/}
      <div id="carouselLarge" className="hidden lg:flex flex-row justify-center">
        <EmblaCarousel numOfShownElements={3}
                      elementWidth={467}
                      options={{ dragFree: true, loop: true }}> 
              {allPictures.map(imagePath => {
                return <Image
                  className="block"
                  style={{objectFit: "cover"}}
                  src={imagePath}
                  alt="Slideshow Picture"
                  width={467}
                  height={350}
                />
              })}
        </EmblaCarousel>
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
        <h2 className="border-4 border-lime-400 text-center sm:text-lg lg:text-3xl font-bold py-4">
        🏅 Event Winners 🏅
        </h2>
        <table className="table-auto mt-4 border-separate lg:border-spacing-x-48 px-12">
            <tbody>
            {eventResults.map((event) => {
              return (
                <tr key={event.key}>
                <td className="m-3 text-darkBlue dark:text-lightBlue">
                  {event.event}
                </td>
                <td>
                  {event.school}
                </td>
                </tr>
              )
            })}
            </tbody>
        </table>
      </div>
    </div>
  )
}
