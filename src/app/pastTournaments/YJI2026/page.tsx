'use client'

import React from 'react'
import allResultsYJI2026B from '../../../../data/allResults/YJI/allResultsYJI2026B'
import allResultsYJI2026C from '../../../../data/allResults/YJI/allResultsYJI2026C'
import eventResultsYJI2026B from '../../../../data/eventResults/yji/eventResultsYJI2026B'
import eventResultsYJI2026C from '../../../../data/eventResults/yji/eventResultsYJI2026C'
import Link from 'next/link'

import { Rubik_Dirt } from 'next/font/google'

const rubikDirt = Rubik_Dirt({
  weight: '400',
  subsets: ['latin'],
})

type Result = {
  key: number
  school: string
  town?: string
  bold?: boolean
}

type EventResult = {
  key: number
  event: string
  school: string
}

type PodiumCardProps = {
  result: Result
  rank: number
}

type ResultsListProps = {
  results: Result[]
}

type DivisionResultsProps = {
  title: string
  results: Result[]
  accentClass: string
}

const medalEmoji = ['🥇', '🥈', '🥉']

const medalColors = [
  'bg-green-100 border-green-600 dark:bg-green-900 dark:border-green-400',
  'bg-stone-100 border-stone-500 dark:bg-stone-800 dark:border-stone-400',
  'bg-amber-100 border-amber-700 dark:bg-amber-900 dark:border-amber-500',
]

function PodiumCard({ result, rank }: PodiumCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center border-2 rounded-2xl px-3 py-5 shadow-md hover:shadow-xl transition-shadow duration-300 w-full ${medalColors[rank]}`}
    >
      <span className="text-3xl sm:text-4xl mb-2">{medalEmoji[rank]}</span>

      <span className="text-sm sm:text-base font-bold leading-snug whitespace-pre-line text-center text-black">
        {result.school}
      </span>

      {result.town && (
        <span className="text-xs text-black dark:text-black mt-1 text-center">
          {result.town}
        </span>
      )}

      <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-black dark:text-black">
        #{result.key}
      </span>
    </div>
  )
}

function ResultsList({ results }: ResultsListProps) {
  return (
    <ul className="mt-4 w-full divide-y divide-green-200 dark:divide-green-800">
      {results.slice(3).map((result) => (
        <li
          key={result.key}
          className={`flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between py-2 px-3 ${result.bold ? 'font-semibold' : 'font-normal'}`}
        >
          {/* School + Town container */}
          <div className="flex flex-col sm:flex-row items-center gap-3 min-w-0 text-center sm:text-left">
            {/* Rank */}
            <span className="text-sm w-6 text-center sm:text-right text-white dark:text-white shrink-0">
              {result.key}
            </span>

            {/* School and town stacked */}
            <div className="flex flex-col">
              <span className="text-sm sm:text-base truncate">{result.school}</span>
              {result.town && (
                <span className="text-xs sm:text-sm text-white dark:text-white italic mt-1">
                  {result.town}
                </span>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

function DivisionResults({ title, results, accentClass }: DivisionResultsProps) {
  const top3 = results.slice(0, 3)

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md flex-1">
      <h2
        className={`border-4 ${accentClass} text-center text-lg sm:text-xl lg:text-2xl font-bold py-3 px-4 rounded-xl w-full`}
      >
        🏆 {title} 🏆
      </h2>

      {/* Mobile Podium */}
      <div className="flex sm:hidden flex-col gap-3 w-full items-center">
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

      <div className="w-full flex-1">
        <ResultsList results={results} />
      </div>
    </div>
  )
}

export default function YJITournament2026() {
  const allResultsB = allResultsYJI2026B as Result[]
  const allResultsC = allResultsYJI2026C as Result[]
  const eventResultsB = eventResultsYJI2026B as EventResult[]
  const eventResultsC = eventResultsYJI2026C as EventResult[]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1a14] text-gray-900 dark:text-green-100">

      {/* Header */}
      <h1 className="bg-[#3b6b48] dark:bg-[#3b6b48] flex justify-center py-20">
        <div
          className={`${rubikDirt.className} border-4 border-white text-center text-white dark:text-white text-4xl lg:text-6xl font-bold p-4 m-4 shadow-lg uppercase`}
        >
          2026 Yellow Jacket Invitational
        </div>
      </h1>

      {/* Exams link + YouTube Video */}
      <div className="bg-[#bfe0c8] dark:bg-[#bfe0c8] flex flex-col items-center py-10">

        {/* Exams Button */}
        <p className="text-2xl text-center font-bold p-4 my-4 bg-[#3b6b48] text-white rounded-xl w-1/2 sm:w-1/3 lg:w-1/6 hover:bg-green-800 hover:scale-105 transition-all duration-300">
          <Link
            href="https://drive.google.com/drive/folders/1jpx6jMnmFTmXE5KQ185vRekH6mGl29Xt?usp=sharing"
            target="_blank"
          >
            Exams
          </Link>
        </p>

        {/* YouTube Video Embed */}
        <div className="mt-6 w-full max-w-xl aspect-video">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/lD41akxuV60?si=ZIsZkpSVIqauSkNS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>

      {/* Overall Results */}
      <div className="bg-[#302a25] dark:bg-[#302a25] text-white flex flex-col items-center lg:flex-row justify-center gap-12 py-14 px-6">
        <DivisionResults
          title="Div B Overall Results"
          results={allResultsB}
          accentClass="border-white"
        />
        <DivisionResults
          title="Div C Overall Results"
          results={allResultsC}
          accentClass="border-white"
        />
      </div>

      {/* Event Winners */}
      <div className="flex flex-col items-center gap-12 py-12 px-6">

        {/* Div B */}
        <div className="w-full max-w-2xl">
          <h2 className="border-4 border-green-600 text-center text-xl lg:text-2xl font-bold py-3 rounded-xl mb-4">
            🏅 Div B Event Winners 🏅
          </h2>
          <div className="flex flex-col gap-2">
            {eventResultsB.map((event) => (
              <div
                key={event.key}
                className="flex flex-col sm:flex-row items-center sm:items-stretch rounded-xl overflow-hidden border border-green-300 dark:border-green-800 hover:shadow-md transition-shadow"
              >
                <div className="w-full sm:w-1/2 bg-green-50 dark:bg-[#112018] px-4 py-3 text-sm sm:text-base font-medium flex items-center justify-center sm:justify-start text-center sm:text-left">
                  {event.event}
                </div>
                <div className="w-full sm:w-1/2 bg-white dark:bg-[#0f1a14] px-4 py-3 text-sm sm:text-base italic border-t sm:border-t-0 sm:border-l border-green-300 dark:border-green-800 flex items-center justify-center sm:justify-start text-center sm:text-left">
                  {event.school}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Div C */}
        <div className="w-full max-w-2xl">
          <h2 className="border-4 border-amber-700 text-center text-xl lg:text-2xl font-bold py-3 rounded-xl mb-4">
            🏅 Div C Event Winners 🏅
          </h2>
          <div className="flex flex-col gap-2">
            {eventResultsC.map((event) => (
              <div
                key={event.key}
                className="flex flex-col sm:flex-row items-center sm:items-stretch rounded-xl overflow-hidden border border-amber-300 dark:border-amber-800 hover:shadow-md transition-shadow"
              >
                <div className="w-full sm:w-1/2 bg-amber-50 dark:bg-[#1a140f] px-4 py-3 text-sm sm:text-base font-medium flex items-center justify-center sm:justify-start text-center sm:text-left">
                  {event.event}
                </div>
                <div className="w-full sm:w-1/2 bg-white dark:bg-[#0f1a14] px-4 py-3 text-sm sm:text-base italic border-t sm:border-t-0 sm:border-l border-amber-300 dark:border-amber-800 flex items-center justify-center sm:justify-start text-center sm:text-left">
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