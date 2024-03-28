'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Lora } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'
import { ReactDOM } from 'react'

const play = Lora({ subsets: ['latin'], display: "swap" })

export default function Info() {
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
      
    <div className="dark:bg-black bg-slate-200 w-full md:min-h-[88vh] lg:min-h-[74vh]">
      <div className="text-white bg-[url('/images/2024/States/states-24.jpg')] p-12 w-full">
        <AnimatePresence>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1}}
            className="text-3xl font-bold flex justify-center items-center"
          >
              <div className="flex justify-center text-center lg:w-1/3 lg:mx-12">
              <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow`}>Prize/Club Sponsors</h1>
              </div>
        </motion.div>
        </AnimatePresence>
      </div>

        {/** Smilebelleofficial */}
        <div className="bg-lightOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg ">
            <h2 className="font-bold text-4xl drop-shadow-otherShadow"> Smile Belle </h2>
            <br />
            <p className="text-xl text-darkBlue"> As a daily fashion jewelry brand, SmileBelle aims to provide more people to find their own beauty with affordable jewelry. Be bold to do "SmileBelle"! Just smile your way, it is worth a million. SmileBelle offers a platform for you to share your pleasure and joy with your BFF, family members and be yourself.
            </p>
            <br />
            <p className="text-xl text-darkBlue"> To be eligible to win jewelry sets (includes necklaces, earrings, bracelets & more) make sure to follow <a href="https://www.instagram.com/smilebelleofficial/" target="_blank" className="underline hover:opacity-50 font-bold"> @smilebelleofficial </a> on instagram before you visit the table. </p>
            <br />
        </div>

        {/** Rile */}
        <div className="bg-darkOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl drop-shadow-otherShadow"> Rile </h2>
            <br />
            <p className="text-xl text-darkBlue"> Rile is a family run skincare brand aimed towards making products specifically for teens! Stop by the CULC between 4-6 to get some free merch and products, alongside with entering their giveaway for a chance at winning: a jacket, bucket hat, t-shirt, headband, bag, air fresheners, and more!
            </p>
            <br />
            <p className="text-xl text-darkBlue"> Make sure to follow <a href="https://www.instagram.com/get.rile/" target="_blank" className="underline hover:opacity-50 font-bold"> @get.rile </a> before visiting the table! If you're interested in more information, visit <a href="https://rile.co/" target="_blank" className="underline hover:opacity-50 font-bold"> rile.co </a></p>
            <br />
        </div>

        {/** Beauty by Earth */}
        <div className="bg-lightOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl drop-shadow-otherShadow"> Beauty by Earth </h2>
            <br />
            <p className="text-xl text-darkBlue"> Beauty by Earth is devoted to pure, effective ingredients that overflow with natural goodness. Their award-winning, non-toxic and always cruelty-free products unleash your natural beauty while helping you, your family and the planet thrive. Why? Because they believe everyone deserves skincare products that bring out their best, without hidden toxins or ludicrous price tags.
            </p>
            <br />
            <p className="text-xl text-darkBlue"> For more information, visit <a href="https://beautybyearth.com/" target="_blank" className="underline hover:opacity-50 font-bold"> beautybyearth.com</a>. Follow <a href="https://www.instagram.com/beautybyearth/" target="_blank" className="underline hover:opacity-50 font-bold"> @beautybyearth </a> before visiting the table!</p>
            <br />
        </div>

        {/** Bumble for Friendsh */}
        <div className="bg-darkOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl drop-shadow-otherShadow"> Bumble for Friends </h2>
            <br />
            <p className="text-xl text-darkBlue"> Bumble For Friends is about exactly that, friends. Whether you moved to a new city, found a new hobby, or just want a new person to talk to—Bumble For Friends is about finding your kinda people.
            </p>
            <br />
        </div>

        {/** Georgia Tech EcoCar */}
        <div className="bg-lightOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl drop-shadow-otherShadow"> Georgia Tech EcoCar </h2>
            <br />
            <p className="text-xl text-darkBlue"> Georgia Tech EcoCar competes in the EcoCAR EV Challenge which is the latest Advanced Vehicle Technology Competition <a href="https://avtcseries.org/" target="_blank" className="underline hover:opacity-50 font-bold">(AVTC)</a> sponsored by General Motors, MathWorks, and the US Department of Energy. This four-year (2022-2026) competition challenges 13 North American schools to redesign a 2023 Cadillac Lyriq to maximize energy efficiency using advanced electric propulsion systems, vehicle connectivity, and vehicle automation.
            </p>
            <br />
            <p className="text-xl text-darkBlue"> Additional information on the competition can be found <a href="https://ecocarevchallenge.org/ecocar-ev-challenge/" target="_blank" className="underline hover:opacity-50 font-bold"> here</a>.</p>
            <br />
        </div>

        {/** Green Cell */}
        <div className="bg-darkOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl drop-shadow-otherShadow"> Green Cell </h2>
            <br />
            <p className="text-xl text-darkBlue"> Green Cell is a voluntary group, passionate about raising awareness about human-created environmental issues and promoting conscious consumerism. They work to tackle environmental issues on many fronts including: raising awareness about the effects of human-created harm to our environment, educating the community on how each of our everyday decisions actively contributes to aggravating environmental issues, and encouraging sustainable products and practices in everyday-living essential to a better, safer, and healthier life.
            </p>
            <br />
            <p className="text-xl text-darkBlue"> For more information, visit <a href="https://www.greencellatl.com/" target="_blank" className="underline hover:opacity-50 font-bold"> www.greencellatl.com</a>.</p>
            <br />
        </div>

        {/** Hexlabs */}
        <div className="bg-lightOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl drop-shadow-otherShadow"> Hexlabs </h2>
            <br />
            <p className="text-xl text-darkBlue"> HexLabs is a student-led, nonprofit organization that throws large-scale hackathons to spread the opportunity for innovation to high school and college students. We partner with companies to cultivate an environment of enrichment and growth for our participants to be able to learn new skills and use them to bring new ideas to life.
            </p>
            <br />
            <p className="text-xl text-darkBlue"> HexLabs will be hosting Catalyst, a hackathon for high school students on Saturday April 6th at the Klaus Advanced Computing Building at Georgia Tech.
            </p>
            <br />
            <p className="text-xl text-darkBlue"> Catalyst will be a day of STEAM-related activities directed toward high school students all throughout Georgia!
            </p>
            <br />
            <p className="text-darkBlue font-semibold italic">This will be an opportunity for participants to:</p>
            <ul className="list-disc list-inside mx-8 text-lg text-black">
                <li> Learn about the world of STEAM and Computer Science as a career path </li>
                <li> Gain insight into impactful, widely-known technology companies </li>
                <li> Receive mentorship from college students and other industry professionals </li>
                <li> Connect with opportunities at Georgia Tech to further their education and exposure</li>
            </ul>
            <br />
            <p className="text-xl text-darkBlue"> For more information, visit <a href="https://hexlabs.org/" target="_blank" className="underline hover:opacity-50 font-bold"> https://hexlabs.org</a> and <a href="https://catalyst.hexlabs.org/" target="_blank" className="underline hover:opacity-50 font-bold"> https://catalyst.hexlabs.org</a>.</p>
            <br />
        </div>

        {/** Friends of MSF Georgia Institute of Technology Chapter */}
        <div className="bg-darkOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl drop-shadow-otherShadow"> Friends of MSF Georgia Institute of Technology Chapter </h2>
            <br />
            <p className="text-xl text-darkBlue"> Doctors Without Borders (known by its French name: Médecins Sans Frontières - MSF) is an international, independent, medical humanitarian organization that delivers emergency aid to people affected by armed conflict, epidemics, natural disasters and exclusion from healthcare.
            </p>
            <br />
            <p className="text-xl text-darkBlue"> Friends of MSF looks to get the GT community engaged with the work of MSF, promote its campaigns, and hold meetings related to MSF and pre-health.
            </p>
            <br />
        </div>

        {/** Create-X */}
        <div className="bg-lightOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl drop-shadow-otherShadow"> Create-X </h2>
            <br />
            <p className="text-xl text-darkBlue"> CREATE-X is a Georgia Tech initiative to instill entrepreneurial confidence in students and empower them to launch successful startups.
            </p>
            <br />
            <p className="text-xl text-darkBlue"> CREATE-X gives students every advantage it can to help support them in launching their products. Their program is built with the flexibility to meet their needs, whether they need instruction in the fundamentals of entrepreneurship, the resources to develop products, or a driven, business minded community with which to build and connect. Regardless of the pathway they take, they want all Georgia Tech students to be equipped with business know-how and the confidence that brings because of that spirit will prepare them to impact the world in the way they dream.
            </p>
            <br />
        </div>

        {/** Big Data Big Impact @ GT */}
        <div className="bg-darkOrange text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
            <h2 className="font-bold text-4xl drop-shadow-otherShadow"> Big Data Big Impact @ GT</h2>
            <br />
            <p className="text-xl text-darkBlue"> Big Data Big Impact is a Georgia Institute of Technology College of Computing (CoC) organization focused on leveraging big data to provide insight into some of the world's greatest social challenges, from poverty to climate action.
            </p>
            <br />
            <p className="text-xl text-darkBlue"> They pride themselves on offering students valuable hands-on opportunities to pursue excellence and growth in computer science and career development.
            </p>
            <br />
        </div>
        
    </div>
    </>
  )
}
