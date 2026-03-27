'use client'

import React from 'react'
import allResultsYJI2026B from '../../../../data/allResults/YJI/allResultsYJI2026B'
import allResultsYJI2026C from '../../../../data/allResults/YJI/allResultsYJI2026C'
import eventResultsYJI2026B from '../../../../data/eventResults/yji/eventResultsYJI2026B'
import eventResultsYJI2026C from '../../../../data/eventResults/yji/eventResultsYJI2026C'
import Link from 'next/link'

const medalEmoji = ['🥇', '🥈', '🥉']

const medalColors = [
  'bg-yellow-50 border-yellow-400 dark:bg-yellow-950 dark:border-yellow-500',
  'bg-slate-50 border-slate-400 dark:bg-slate-800 dark:border-slate-400',
  'bg-orange-50 border-orange-400 dark:bg-orange-950 dark:border-orange-500',
]

function PodiumCard({ result, rank }) {
  return (
    <div className={`flex flex-col items-center justify-center border-2 rounded-2xl px-3 py-5 shadow-md w-full ${medalColors[rank]}`}>
      <span className="text-3xl sm:text-4xl mb-2">{medalEmoji[rank]}</span>
      <span className="text-sm sm:text-base font-bold leading-snug whitespace-pre-line text-center">
        {result.school}
      </span>
      {result.town && (
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{result.town}</span>
      )}
      <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
        #{result.key}
      </span>
    </div>
  )
}

function ResultsList({ results }) {
  return (
    <ul className="mt-4 w-full divide-y divide-gray-200 dark:divide-gray-700">
      {results.slice(3).map((result) => (
        <li
          key={result.key}
          className={`flex items-center justify-between py-2 px-3 ${result.bold ? 'font-semibold' : 'font-normal'}`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-sm w-6 text-right text-gray-400 dark:text-gray-500 shrink-0">{result.key}</span>
            <span className="text-sm sm:text-base truncate">{result.school}</span>
          </div>
          {result.town && (
            <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 ml-3 shrink-0 italic">{result.town}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

function DivisionResults({title, results, accentClass }) {
  const top3 = results.slice(0, 3)

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md flex-1">
      <h2 className={`border-4 ${accentClass} text-center text-lg sm:text-xl lg:text-2xl font-bold py-3 px-4 rounded-xl w-full`}>
        🏆 {title} 🏆
      </h2>

      {/* Mobile */}
      <div className="flex sm:hidden flex-col gap-3 w-full">
        {top3[0] && <PodiumCard result={top3[0]} rank={0} />}
        {top3[1] && <PodiumCard result={top3[1]} rank={1} />}
        {top3[2] && <PodiumCard result={top3[2]} rank={2} />}
      </div>

      {/* Desktop podium */}
      <div className="hidden sm:flex flex-row items-end gap-3 w-full">
        {top3[1] && (
          <div className="flex-1 flex flex-col pt-8">
            <PodiumCard result={top3[1]} rank={1} />
          </div>
        )}
        {top3[0] && (
          <div className="flex-1 flex flex-col pt-0">
            <PodiumCard result={top3[0]} rank={0} />
          </div>
        )}
        {top3[2] && (
          <div className="flex-1 flex flex-col pt-14">
            <PodiumCard result={top3[2]} rank={2} />
          </div>
        )}
      </div>

      {/* Results list fills remaining space */}
      <div className="w-full flex-1">
        <ResultsList results={results} />
      </div>
    </div>
  )
}

export default function YJITournament2026() {
  const allResultsB = allResultsYJI2026B
  const allResultsC = allResultsYJI2026C
  const eventResultsB = eventResultsYJI2026B
  const eventResultsC = eventResultsYJI2026C

  return (
    <div className="min-h-screen bg-white dark:bg-lightBlue dark:text-white">

      {/* Header */}
      <h1 className="bg-lightOrange dark:bg-black dark:text-white flex justify-center py-20">
        <div className="border-4 border-green-500 text-center text-4xl lg:text-6xl font-bold p-4 m-4 drop-shadow-titleShadow">
          2026 Yellow Jacket Invitational
        </div>
      </h1>

      {/* Exams link */}
      <div className="bg-green-200 dark:bg-green-950 dark:text-white flex justify-center py-10">
        <p className="text-3xl text-center font-bold p-4 my-4 bg-purple-500 rounded-xl w-1/3 lg:w-1/6 hover:opacity-60 hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] transition-all duration-300">
          <Link href="https://drive.google.com/drive/folders/1jpx6jMnmFTmXE5KQ185vRekH6mGl29Xt?usp=sharing" target="_blank">
            Exams
          </Link>
        </p>
      </div>

      {/* Overall Results */}
      <div className="bg-lightOrange dark:bg-black dark:text-white flex flex-col lg:flex-row justify-center items-stretch gap-12 py-14 px-6">
        <DivisionResults
          title="Div B Overall Results"
          results={allResultsB}
          accentClass="border-sky-400"
        />
        <DivisionResults
          title="Div C Overall Results"
          results={allResultsC}
          accentClass="border-violet-400"
        />
      </div>

      {/* Event Winners */}
      <div className="flex flex-col items-center gap-12 py-12 px-6">

        {/* Div B */}
        <div className="w-full max-w-2xl">
          <h2 className="border-4 border-green-400 text-center text-xl lg:text-2xl font-bold py-3 rounded-xl mb-4">
            🏅 Div B Event Winners 🏅
          </h2>
          <div className="flex flex-col gap-2">
            {eventResultsB.map((event) => (
              <div key={event.key} className="flex flex-row items-stretch rounded-xl overflow-hidden border border-orange-200 dark:border-orange-800 hover:shadow-md transition-shadow">
                <div className="w-1/2 bg-orange-50 dark:bg-orange-950 text-black dark:text-white px-4 py-3 text-sm sm:text-base font-medium flex items-center">
                  {event.event}
                </div>
                <div className="w-1/2 bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-3 text-sm sm:text-base italic border-l border-orange-200 dark:border-orange-800 flex items-center">
                  {event.school}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Div C */}
        <div className="w-full max-w-2xl">
          <h2 className="border-4 border-emerald-400 text-center text-xl lg:text-2xl font-bold py-3 rounded-xl mb-4">
            🏅 Div C Event Winners 🏅
          </h2>
          <div className="flex flex-col gap-2">
            {eventResultsC.map((event) => (
              <div key={event.key} className="flex flex-row items-stretch rounded-xl overflow-hidden border border-emerald-200 dark:border-emerald-800 hover:shadow-md transition-shadow">
                <div className="w-1/2 bg-emerald-50 dark:bg-emerald-950 text-black dark:text-white px-4 py-3 text-sm sm:text-base font-medium flex items-center">
                  {event.event}
                </div>
                <div className="w-1/2 bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-3 text-sm sm:text-base italic border-l border-emerald-200 dark:border-emerald-800 flex items-center">
                  {event.school}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}