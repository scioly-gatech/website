'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Lora } from 'next/font/google'
import Script from 'next/script'

const play = Lora({ subsets: ['latin'], display: "swap" })

export default function FAQs() {

  //When question is clicked, show corresponding answer function 
  function showAnswer(id: number) {
    if (typeof(document) !== 'undefined') {
      const answer = document.getElementById('answer' + id) as HTMLElement
      answer.classList.toggle('hidden')
      answer.classList.toggle('flex')
    } 
  }

  const questions = [
    {
      key: 1,
      question: "How many teams will be able to participate?",
      answer: "Due to logistical constraints, we will only be able to accept 50 Division C teams and 30 Division B teams. In the case we receive more sign-ups on the registration form than we are able to support, spots will be allotted on a first-come first-served basis."
    },
    {
      key: 2,
      question: "How many teams per school are allowed?",
      answer: "We can guarantee 2 teams per school per division (meaning schools with both B and C programs will be allowed a total of 4 teams) up to the division limits mentioned above. We may allow more than 2 teams per school on a case-by-case basis. On the registration form, you will be able to indicate how many teams you'd like to bring, but again, we will only be able to guarantee 2 teams at the time registration opens."

    },
    {
      key: 3,
      question: "When does registration start?",
      answer: "Registration will open Monday, September 2nd. We will send out a follow-up email with a link to the registration form once it officially opens and post the form on our website."
    },
    {
      key: 4,
      question: "When does registration close?",
      answer: "Registration will close Friday, December 13th."
    },
    {
      key: 5,
      question: "What is the registration fee per team?",
      answer: "e payable to Georgia Tech. The check MUST include Science Olympiad @ Georgia Tech in the memo line for it to be accepted. Please send the check to:"
    },
    {
      key: 6,
      question: "I need an invoice for payment!",
      answer: "Email scioly.gatech@gmail.com if you would need an invoice for payment."
    }
  ]
  
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
              <h1 className={`border-8 border-lightOrange lg:p-8 tracking-wide text-center text-4xl lg:text-6xl ${play.className} drop-shadow-titleShadow`}>FAQs</h1>
              </div>
        </motion.div>
        </AnimatePresence>
      </div>

        {/* Inspiration from Stack Overflow: https://stackoverflow.com/questions/39818569/pass-id-through-on-click-react-js */}

        {/*  FAQs */}
        <div className=" bg-lightOrange flex flex-col items-center p-4 shadow-2xl shadow-white">
          <h2 className="text-3xl font-bold m-2 mb-4 border-black border-4 p-2">General FAQs</h2>

          <ul className="w-full" id="questions_answers">
            {
              questions.map((item, i) => 
                <div key={i}>
                  <li className="pl-8 font-bold text-3xl bg-orange-300 py-4 w-full hover: cursor-pointer " onClick={() => showAnswer(i)}>{item.question}</li>
                  {i != 4 && <li id={"answer" + i} className="text-center bg-white text-2xl hidden"> {item.answer} </li>}
                  {i == 4 && <li id={"answer" + i} className="text-center bg-white text-2xl hidden"> We will have an early bird registration period from Sept. 2nd - Oct. 16th, during which registration will cost $110, and a standard registration period from Oct. 17th - Dec. 13th, during which registration will cost $150. Whether or not you qualify for early bird registration will be based on the time you fill out the registration form. <br /><br />We will be accepting checks made payable to Georgia Tech. The check MUST include Science Olympiad @ Georgia Tech in the memo line for it to be accepted. Please send the check to: 
                  <br/><br/>
                  Harsha Gaddipati<br/>
                  326032 Georgia Tech Station<br/>
                  Atlanta, GA 30332-1400<br/><br/>
                  Additionally, for those schools that have requested more than 2 teams, please only pay for the first 2 teams at this time. If we can accept more than 2 teams per school, we will send out more information to let you know this is the case. The price of any additional teams we are able to accept will still be considered early bird ($110/team) as long as the form was filled out with the correct number of teams by the early bird deadline.
                   </li>}
                </div>
              )
            }
          </ul>
        </div>
    </div>
    </>
  )
}
