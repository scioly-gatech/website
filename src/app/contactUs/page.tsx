import React from 'react'
import {FaInstagramSquare} from "react-icons/fa"
import { Lora } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'

const play = Lora({ 
  subsets: ['latin'],
  display: "swap"
 })

export default function ContactUs() {
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
    <div className="bg-amber-50 dark:bg-black h-full">
        <div id="all content" className="max-w-full flex flex-col items-center">
          <div id="header" className="bg-[url('/images/contact/contact.jpg')] w-full flex justify-center items-center h-48">
            <h1 className={`text-white font-bold border-8 p-4 m-16 text-5xl md:text-7xl text-center ${play.className} drop-shadow-titleShadow`}>Contact Us </h1>
          </div>
        <p className="text-blackborder-4 border-black bg-lightOrange text-center text-2xl m-8 lg:mx-72 p-4 shadow-2xl shadow-darkOrange">
          If you have any questions or comments regarding competing, sponsoring, or anything else related to Science Olympiad at Georgia Tech, we would love to hear from you! 
          <br />
          <br />
         <span className="font-bold">Email: </span><a href="malito:scioly.gatech@gmail.com" className="hover:text-darkOrange">scioly.gatech@gmail.com</a>
         <br />
         <span className="font-bold">Instagram: </span><a href="https://www.instagram.com/gtscioly/" target="_blank" className="hover:text-darkOrange">@gtscioly</a>
        </p>
        <figure className="mb-8">
          <Image src="/images/officialLogo.png" alt="Picture of the Science Olympiad at Georgia Tech Logo" width="350" height="350"/>
          <figcaption className="sr-only">
            Picture of the Science Olympiad at Georgia Tech Logo
          </figcaption>
        </figure>
        </div>
    </div>
    </>
  )
}
