"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Lora } from "next/font/google";
import React, { useMemo, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
  tournamentLocations,
  makerspaceLocations,
  transportLocations,
} from "../../../../../data/locations/yellowJacketInvitational";
import { LatLngExpression } from "leaflet";

const play = Lora({ subsets: ["latin"], display: "swap" });
const mapCenter: LatLngExpression = [33.776166952660056, -84.39819268319107];
const mapZoom = 17;
const mapHeight = "750px";
var currLoc;
var id;

// function Update_Location(pos) {
//   currLoc = pos.coords;
// }

export default function Page() {
  // For making LeafletJS map compatible with Next's SSR
  const CurrentTournamentMap = useMemo(
    () =>
      dynamic(() => import("@/app/components/TournamentMap"), {
        loading: () => (
          <div style={{ width: "100%", height: mapHeight }}>
            <p>Map Loading ...</p>
          </div>
        ),
        ssr: false,
      }),
    []
  );

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
      <Head>title = Tournament Map</Head>
      <main className="dark:bg-black bg-slate-200 w-full md:min-h-[88vh] lg:min-h-[74vh] pb-12">
        {/** Heading */}
        <div className="text-white bg-[url('/images/curr/birdView-modified.jpg')] p-12 w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold flex justify-center items-center max-w-full"
            >
              <div className="flex justify-center text-center lg:w-1/3 lg:mx-24">
                <h1
                  className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-5xl md:text-6xl ${play.className} drop-shadow-titleShadow`}
                >
                  YJI Map
                </h1>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/** Map */}
        <div className="bg-lightBlue text-darkBlue text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
          <p className="font-bold underline">
            Click on the markers for events, homerooms, and more!
          </p>
          <CurrentTournamentMap
            mapContainerProps={{
              center: mapCenter,
              zoom: mapZoom,
              style: { height: "750px", width: "100%" },
            }}
            tournamentLocations={tournamentLocations}
            makerspaceLocations={makerspaceLocations}
            transportLocations={transportLocations}
          />
        </div>
        
        {/** Key */}
        <div className="bg-darkBlue text-white text-xl m-4 text-center lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
          <p className="font-bold text-4xl underline">Key</p>
          <div className="flex flex-col lg:flex-row flex-wrap justify-center">
            <div className="basis-full lg:basis-5/12 border-4 border-black p-4 m-4 dark:text-white dark:border-white bg-indigo-950">
              <p className="font-bold text-3xl underline">Events</p>
              {tournamentLocations.map((tournamentLocation) => {
                if (!tournamentLocation.events) {
                  return null;
                }

                return (
                  <div className="mb-2" key={tournamentLocation.label}>
                    <p className="font-bold text-2xl">
                      {tournamentLocation.label}
                    </p>
                    <div>
                      <ul>
                        {tournamentLocation.events.map(
                          ({ eventName, eventRooms }) => {
                            return (
                              <li
                                key={eventName}
                              >{`${eventName} - ${eventRooms.join(", ")}`}</li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="basis-full lg:basis-5/12 border-4 border-black p-4 m-4 dark:text-white dark:border-white bg-sky-950">
              <p className="font-bold text-3xl underline">Home Rooms</p>
              {tournamentLocations.map((tournamentLocation) => {
                if (!tournamentLocation.schoolHomeRooms) {
                  return null;
                }

                return (
                  <div className="mb-2" key={tournamentLocation.label}>
                    <p className="font-bold text-2xl">
                      {tournamentLocation.label}
                    </p>
                    <div>
                      <ul>
                        {tournamentLocation.schoolHomeRooms.map(
                          ({ schoolName, homeRooms }) => {
                            return (
                              <li
                                key={schoolName}
                              >{`${schoolName} - ${homeRooms.join(", ")}`}</li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="basis-full lg:basis-5/12 border-4 border-black p-4 m-4 dark:text-white dark:border-white bg-blue-950">
              <p className="font-bold text-3xl underline">Makerspace Tours</p>
              {makerspaceLocations.map((makerspaceLocation) => {
                return (
                  <div className="mb-2" key={makerspaceLocation.label}>
                    <a
                      href={`/currentTournament/tours#${makerspaceLocation.hrefId}`}
                      className="underline hover:opacity-50"
                    >
                      <p className="font-bold">{`${makerspaceLocation.label} Tour`}</p>
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="basis-full lg:basis-5/12 border-4 border-black p-4 m-4 dark:text-white dark:border-white bg-teal-950">
              <p className="font-bold text-3xl underline">
                Parking and Drop Off
              </p>
              {transportLocations.map((transportLocation) => {
                return (
                  <div className="mb-2" key={transportLocation.label}>
                    <p className="font-bold">{transportLocation.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}