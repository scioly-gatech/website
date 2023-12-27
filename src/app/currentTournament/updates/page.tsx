'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Lora } from 'next/font/google'
import React from 'react'
import Script from 'next/script'
import Head from 'next/head'

const play = Lora({ subsets: ['latin'], display:"swap" })

export default function page() {
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
        <Head>
            title = Updates/Tournament Information
        </Head>
        <main className="dark:bg-black bg-slate-200 w-screen md:min-h-[88vh] lg:min-h-[74vh] pb-12">
          {/** Heading */}
          <div className="text-white bg-[url('/images/curr/birdView-modified.jpg')] p-12 w-screen">
            <AnimatePresence>
              <motion.div
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:1}}
                  className="text-3xl font-bold flex justify-center items-center max-w-screen"
                >
                    <div className="flex justify-center text-center lg:w-1/3 mx-24">
                      <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-5xl md:text-6xl ${play.className}`}>General Info & Updates</h1>
                    </div>
              </motion.div>
            </AnimatePresence>
          </div>

        {/** Documents */}
        <p className="bg-lightBlue text-darkBlue text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg"> 
        <a href="https://docs.google.com/document/d/1tj11nzepfx-TmxBQowxljnuDXGWi94pnHHVvmDwy8Qg/edit?usp=sharing" target="_blank" className="underline font-bold text-4xl"> Tournament Information </a>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vTAJKgutEODpvzm4NzgBcuhqj0ky6u9P7DMkQV31TaTa2BemLjdolwm0cMXUsr8ha729CfR_zSeOmi_/pub?embedded=true" width="90%" height="750" className="mt-4 md:ml-0 lg:ml-24"></iframe>
        </p>

        <p className="bg-darkBlue text-white text-center text-xl m-4 lg:m-12 lg:mx-72 p-5 shadow-darkBlue dark:shadow-white shadow-lg">
          <a href="https://docs.google.com/document/d/1Vnjq-zAN3x7LlF2YKXY5EmpDy5hn_R_0yhbFvusNeXM/edit?usp=sharing" target="_blank" className="underline font-bold text-4xl"> Tournament Communiques </a>
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vT6whnby-es2VAQPMgWjLA8TIGN76dEA4aED2jZfsN4qnCOZ9P_jBQXKAVCwQmUf8xF1KM6-DaafWfd/pub?embedded=true" width="90%" height="750" className="mt-4 md:ml-0 lg:ml-24"></iframe>
        </p>

      </main>
    </>
  )
}
