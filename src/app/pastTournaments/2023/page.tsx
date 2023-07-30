'use client'

import React, { useEffect } from 'react'
import allResults2023 from '../../../../data/allResults/allResults2023'
import eventResults2023 from '../../../../data/eventResults/eventResults2023'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

export default function PastTournament2023() {
const allPictures = [
    "/images/2023/2023-1.jpg", "/images/2023/2023-2.jpg", "/images/2023/2023-3.jpg", "/images/2023/2023-4.jpg", "/images/2023/2023-5.jpg"
]

let index1 = 0
let index2 = 1
let index3 = 2

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
  }
  setTimeout(() => changePicTimed(true), 4000)
  //Found solution on Stack Overflow response: https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously
}

function changePicSmall (right: boolean) {

  if (typeof(document) !== 'undefined') {
      const firstPic = document.getElementById("1s") as HTMLElement
      if (right === true) {
          index1 = (index1 + 1) % allPictures.length
      } else {
          index1 = ((index1 - 1) % allPictures.length)
          if (index1 < 0) {
              index1 = index1 + allPictures.length
          }
      }
      firstPic?.setAttribute("src", allPictures[index1])
  }
}

function changePicSmallTimed (right: boolean) {

  if (typeof(document) !== 'undefined') {
      const firstPic = document.getElementById("1s") as HTMLElement
      if (right === true) {
          index1 = (index1 + 1) % allPictures.length
      } else {
          index1 = ((index1 - 1) % allPictures.length)
          if (index1 < 0) {
              index1 = index1 + allPictures.length
          }
      }
      firstPic?.setAttribute("src", allPictures[index1])
  }
  setTimeout(() => changePicSmallTimed(true), 4000)
  //Found solution on Stack Overflow response: https://stackoverflow.com/questions/7188145/call-a-javascript-function-every-5-seconds-continuously
}

const allResults = allResults2023
const eventResults = eventResults2023

    useEffect(() => {
      if (window.innerWidth < 1024) {
        setTimeout(() => changePicSmallTimed(true), 4000)
      } else {
        setTimeout(() => changePicTimed(true), 4000)
      }
    }, [changePicSmallTimed, changePicTimed])

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
    <div className="flex flex-row justify-center lg:hidden">
    <button id="left" onClick={() => {
                changePicSmall(false)
                
                }} className="text-3xl"> &lt; </button>
    <figure id="carouselSmall" className="flex lg:hidden">
            <Image id="1s" src="/images/2023/2023-1.jpg" alt="Slideshow Picture" width="200" className="m-4"/>
    </figure>
    <button id="right" onClick={() => changePicSmall(true)} className="text-3xl"> &gt; </button>
    </div>


    <div id="carouselLarge" className="hidden lg:flex flex-row justify-center">

        <button id="left" onClick={() => {
                changePic(false)
                
                }} className="text-6xl"> &lt; </button>
        <div className="m-2">
            <Image id="1" src="/images/2023/2023-1.jpg" alt="Slideshow Picture" width="467" height="350" className=""/>
        </div>
        <div className='m-2'>
            <Image id="2" src="/images/2023/2023-2.jpg" alt="Slideshow Picture" width="467" height="350" className=""/>
        </div>
        <div className='m-2'>
            <Image id="3" src="/images/2023/2023-3.jpg" alt="Slideshow Picture" width="467" height="350" className=""/>
        </div>
        <button id="right" onClick={() => changePic(true)} className="text-6xl"> &gt; </button>
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
                <tr className={`${result.bold ? "font-bold": "font-normal"}`}>
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
                <tr>
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
