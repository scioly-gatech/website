'use client'

import BeeProfile from "../components/BeeProfile"
import { Libre_Franklin, Lora } from 'next/font/google'
import { motion } from "framer-motion"
import Image from "next/image"
import { Outfit } from "next/font/google"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
})

const libre = Libre_Franklin({ subsets: ['latin'] })
const play = Lora({ subsets: ['latin'], display: "swap" })

export default function MeetTeam() {

  const profiles = [
    { id: 1, name: "Ethan Maraldo", role: "President", imgRoute: "/images/execPics/Ethan.jpeg" },
    { id: 2, name: "Femke Kovoor", role: "VP of Club Logistics & Outreach", imgRoute: "/images/execPics/Femke.jpg" },
    { id: 3, name: "Krish Patil", role: "VP of Tournament Logistics", imgRoute: "/images/execPics/Krish.jpeg" },
    { id: 4, name: "Victor Hesu", role: "Director of Communications", imgRoute: "/images/execPics/Victor.jpg" },
    { id: 5, name: "Samrita Shetty", role: "Logistics Co-Director", imgRoute: "/images/execPics/Samrita.jpeg" },
    { id: 6, name: "Rachel Nam", role: "Logistics Co-Director", imgRoute: "/images/execPics/Rachel.jpg" },
    { id: 7, name: "Thomas Becker", role: "Exam Co-Director", imgRoute: "/images/execPics/Thomas.JPG" },
    { id: 8, name: "Larissa Martin", role: "Exam Co-Director", imgRoute: "/images/execPics/Lyn.jpg" },
    { id: 9, name: "Devam Shrivastava", role: "Build Co-Director", imgRoute: "/images/execPics/Devam.jpeg" },
    { id: 10, name: "Nathan Donagi", role: "Build Co-Director", imgRoute: "/images/execPics/Nathan.jpg" },
    { id: 11, name: "Justin Li", role: "Finance Co-Director", imgRoute: "/images/execPics/Justin.jpg" },
    { id: 12, name: "Sishnukeshav Balamurali", role: "Finance Co-Director", imgRoute: "/images/execPics/Sishnu.jpg" },
    { id: 13, name: "Swathi Mugundu Pradeep", role: "Creative Co-Director", imgRoute: "/images/execPics/Swathi.jpg" },
    { id: 14, name: "Melody Lee", role: "Creative Co-Director", imgRoute: "/images/execPics/Melody.jpeg" },
    { id: 15, name: "Johnny Chen", role: "Outreach Co-Director", imgRoute: "/images/execPics/Johnny.jpg" },
    { id: 16, name: "Yaitihya Sahoo", role: "Outreach Co-Director", imgRoute: "/images/execPics/Yaiti.jpg" },
  ]

  const sectionAnim = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className={`bg-slate-200 flex flex-col items-center w-full ${outfit.className}`}>

      {/* Header */}
      <div className="flex flex-col lg:flex-row w-full bg-[url('/images/about/background-1.jpg')] bg-cover bg-center">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/images/about/title.png"
            alt="Title"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/images/about/team.jpg"
            alt="Exec Team"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* About */}
      <p className="text-lg lg:mx-64 mx-8 text-center p-4 text-black mt-6">
        Science Olympiad at Georgia Tech is an undergraduate student group with a mission to engage and empower students striving to become scientists and engineers through the Science Olympiad experience.
        <br /><br />
        We work year-round to promote Science Olympiad opportunities for students both within and outside of Georgia. We are especially excited to be hosting the Georgia Science Olympiad State Tournament for the 5th year in a row and our 3rd annual Yellow Jacket Invitational!
      </p>

      <div className="border border-black w-[80%] my-12" />

      {/* Team Header */}
      <h1
        className={`text-lightBlue font-bold text-3xl border-2 border-white p-6 shadow-lg bg-darkBlue w-72 flex justify-center ${play.className}`}
      >
        Our Team
      </h1>

      {/* PRESIDENTS */}
      <motion.section
        variants={sectionAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full mt-14"
      >
        <h2 className="text-2xl font-bold text-center mb-8">Presidents</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
            {profiles.slice(0, 4).map(p => (
              <BeeProfile key={p.id} {...p} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* ALL OTHER SECTIONS */}
      {[
        { title: "Logistics", range: [4, 6] },
        { title: "Exam", range: [6, 8] },
        { title: "Build", range: [8, 10] },
        { title: "Finance", range: [10, 12] },
        { title: "Creative", range: [12, 14] },
        { title: "Outreach", range: [14, 16] },
      ].map(({ title, range }) => (
        <motion.section
          key={title}
          variants={sectionAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full mt-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
              {profiles.slice(range[0], range[1]).map(p => (
                <BeeProfile key={p.id} {...p} />
              ))}
            </div>
          </div>
        </motion.section>
      ))}

      <hr className="w-4/5 border-t-2 border-gray-300 my-16" />
    </main>
  )
}



