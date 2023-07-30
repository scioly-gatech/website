import React from 'react'
import allResults2022 from '../../../../data/allResults/allResults2022'
import eventResults2022 from '../../../../data/eventResults/eventResults2022'
import Image from 'next/image'

const allResults = allResults2022
const eventResults = eventResults2022

export default function PastTournament2022() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-600 dark:text-white">
      <h1 className="bg-sky-100 dark:bg-black dark:text-white flex justify-center py-20">
        <div id="borderDiv" className="border-4 border-brightYellow text-center text-2xl lg:text-6xl font-bold p-4 m-4">
        2022 State Division C Tournament
        </div>
      </h1>
      
      <div id="center h2" className="flex justify-center">
        <h2 className="border-4 border-lightOrange lg:w-1/4 text-center m-4 p-3 text-xl font-bold font-mono">
          State Comes To Tech!
        </h2>
      </div>
      <div className="dark:text-white flex flex-col lg:flex-row justify-center m-3">
        <p className="text-xl lg:w-1/4 p-4">
        Science Olympiad at Georgia Tech was honored to host the Division C State Tournament for the first time on the Georgia Tech campus for the 2021-2022 season. 30 teams came from across the state to the premier public institution in science and engineering to kick off what we hope to be a long-standing Science Olympiad tradition.
        </p>
        <figure>
          <Image src="/images/2022Pic.jpg" alt="Georgia Tech Student Center" width="375" height="285"/>
          <figcaption className="sr-only">
            Picture of the Student Center on the Georgia Tech campus
          </figcaption>
        </figure>
      </div>
      <div id="overallResults" className="bg-sky-100 dark:bg-black dark:text-white flex flex-col items-center py-10 sm:text-sm lg:text-2xl">
        <h2 className="border-4 border-darkOrange text-center sm:text-lg lg:text-3xl font-bold py-4">
        🏆 Overall Results 🏆
        </h2>
        <table className="table-auto border-separate lg:border-spacing-x-8 mt-4">
          <tbody>
          {
            allResults.map((result) => {
              return (
                <tr key={result.key} className={`${result.bold ? "font-bold": "font-normal"}`}>
                  <td className="m-3">
                    {result.key}
                  </td>
                  <td>
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
        <h2 className="border-4 border-brightYellow text-center sm:text-lg lg:text-3xl font-bold py-4">
        🏅 Event Winners 🏅
        </h2>
        <table className="table-auto mt-4 border-separate lg:border-spacing-x-48">
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
