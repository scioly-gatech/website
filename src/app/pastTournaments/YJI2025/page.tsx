'use client'

import React, { useCallback, useEffect } from 'react'
import allResultsYJI2025B from '../../../../data/allResults/allResultsYJI2025B'
import allResultsYJI2025C from '../../../../data/allResults/allResultsYJI2025C'
import eventResultsYJI2025B from '../../../../data/eventResults/eventResultsYJI2025B'
import eventResultsYJI2025C from '../../../../data/eventResults/eventResultsYJI2025C'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import EmblaCarousel from '@/app/components/Carousel'
import Link from 'next/link'

export default function YJITournament2025() {
  const allPictures = [
    "/images/2025/YJI/1.jpg", "/images/2025/YJI/2.jpg", "/images/2025/YJI/3.jpg", "/images/2025/YJI/4.jpg", "/images/2025/YJI/6.jpg", "/images/2025/YJI/7.jpg", "/images/2025/YJI/8.jpg"
]

const allResultsB = allResultsYJI2025B
const allResultsC = allResultsYJI2025C
const eventResultsB = eventResultsYJI2025B
const eventResultsC = eventResultsYJI2025C

  return (
    <>
    <div className="min-h-screen bg-white dark:bg-lightBlue dark:text-white">
      <h1 className="bg-lightOrange dark:bg-black  dark:text-white flex justify-center py-20">
        <div id="borderDiv" className="border-4 border-green-500 text-center text-4xl lg:text-6xl font-bold p-4 m-4 drop-shadow-titleShadow"> 2025 Yellow Jacket Invitational
        </div>
      </h1>


      {/* For small screens*/}
    {/* <div id="carouselSmall" className="flex lg:hidden flex-row justify-center">

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
      </div> */}

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
      <p className="text-3xl text-center font-bold p-4 my-4 bg-green-500 rounded-xl w-1/3 lg:w-1/6 hover:opacity-60 hover:transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:duration-500">
        <Link href="https://drive.google.com/drive/u/2/folders/1OpN_nn9gztiPVLHnxrHHQEG91ASNSXAb" target='__blank'>All Photos</Link>
      </p>
    </div>

    <div id="exams" className="bg-green-200 dark:bg-green-950 dark:text-white flex flex-row justify-center py-10 sm:text-sm lg:text-2xl">
        <p className="text-3xl text-center font-bold p-4 my-4 bg-purple-500 rounded-xl w-1/3 lg:w-1/6 hover:opacity-60 hover:transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:duration-500">
        <Link href="https://drive.google.com/drive/u/1/folders/1egVORNPbZQE9YNJKJggjtunUvWXyNz7T" target='_blank'>Exams</Link>
      </p>
      </div>

      <div id="overallResults" className="bg-lightOrange dark:bg-black dark:text-white flex flex-col lg:flex-row justify-center py-10 sm:text-sm lg:text-2xl">
        <div className="m-4">
            <h2 className="border-4 border-sky-400 text-center sm:text-lg lg:text-3xl font-bold py-4">
            🏆 Div B Overall Results 🏆
            </h2>
            <table className="table-auto border-separate border-spacing-x-2 mt-4 sm:mx-4">
                <tbody>
            {
                allResultsB.map((result) => {
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
        <div className="m-4">
            <h2 className="border-4 border-sky-400 text-center sm:text-lg lg:text-3xl font-bold py-4">
            🏆 Div C Overall Results 🏆
            </h2>
            <table className="table-auto border-separate border-spacing-x-2 mt-4 sm:mx-4">
                <tbody>
            {
                allResultsC.map((result) => {
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
      </div>
      <div id="eventResults" className="items-center py-10 sm:text-sm lg:text-2xl flex flex-col justify-center">
        <div id="AA" className="m-4">
            <h2 className="border-4 border-green-400 text-center sm:text-lg lg:text-3xl font-bold py-4 text-black">
            🏅 Div B Event Winners 🏅
            </h2>
            <table className="table-auto mt-4 border-separate lg:border-spacing-x-8">
                <tbody>
                {eventResultsB.map((event) => {
                return (
                    <tr key={event.key}>
                    <td className="m-3 text-black dark:text-black border-2 p-2 rounded-2xl shadow-inner shadow-darkOrange">
                    {event.event}
                    </td>
                    <td className="italic border-2 p-2 rounded-2xl shadow-inner shadow-lightOrange text-black">
                    {event.school}
                    </td>
                    </tr>
                )
                })}
                </tbody>
            </table>
            <div className="flex justify-center">
            {/* <p className="text-3xl text-center font-bold p-4 my-4 bg-green-400 rounded-xl hover:opacity-60 hover:transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:duration-500">
            <Link href="https://www.duosmium.org/results/2024-03-30_GA_states_aa_flight_c/" target='__blank'>All Results</Link>
            </p> */}
            </div>
        </div>
        <div id="A">
            <h2 className="border-4 border-emerald-400 text-center sm:text-lg lg:text-3xl font-bold py-4 text-black">
            🏅 Div C Event Winners 🏅
            </h2>
            <table className="table-auto mt-4 border-separate lg:border-spacing-x-8">
                <tbody>
                {eventResultsC.map((event) => {
                return (
                    <tr key={event.key}>
                    <td className="m-3 text-black dark:text-black border-2 p-2 rounded-2xl shadow-inner shadow-darkOrange">
                    {event.event}
                    </td>
                    <td className="italic border-2 p-2 rounded-2xl shadow-inner shadow-lightOrange text-black">
                    {event.school}
                    </td>
                    </tr>
                )
                })}
                </tbody>
            </table>
            {/* <div className="flex justify-center">
            <p className="text-3xl text-center font-bold p-4 my-4 bg-violet-400 rounded-xl hover:opacity-60 hover:transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:duration-500">
            <Link href="https://www.duosmium.org/results/2024-03-30_GA_states_a_flight_c/" target='__blank'>A All Results</Link>
            </p>
            </div> */}
        </div>
      </div>

      <div id="overallResults" className="bg-lightOrange dark:bg-black dark:text-white flex flex-col items-center py-4 sm:text-sm lg:text-2xl">
        <h2 className="border-4 border-sky-500 text-center sm:text-lg lg:text-3xl font-bold py-4">
        Tournament Information
        </h2>
        <div className="w-full flex justify-center my-8">
          <iframe src="https://docs.google.com/document/d/1j9YKMA2QOkeO1PnCeraj5KCvax4C3yn5Auroo70hkhE/edit?tab=t.0" width="90%" height="750" className="text-center lg:w-1/2"></iframe>
        </div>
      </div>

    </div>
    </>
  )
}
