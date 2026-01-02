'use client'
import Profile from "../components/Profile"
import { Libre_Franklin, Lora } from 'next/font/google'
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const libre = Libre_Franklin({ subsets: ['latin'] })
const play = Lora({ subsets: ['latin'], display: "swap" })

export default function MeetTeam() {

  const profiles = [
    { id: 1, name: "Ethan Maraldo", role: "President", imgRoute: "/images/execPics/Ethan.jpeg" },
    { id: 2, name: "Femke Kovoor", role: "Vice President Club Logistics", imgRoute: "/images/execPics/Femke.jpg" },
    { id: 3, name: "Krish Patil", role: "Vice President Tournament Logistics", imgRoute: "/images/execPics/Krish.jpeg" },
    { id: 4, name: "Victor Hesu", role: "Vice President Communications", imgRoute: "/images/execPics/Victor.jpg" },
    { id: 5, name: "Samrita Shetty", role: "Logistics Co-Director", imgRoute: "/images/execPics/Samrita.jpeg" },
    { id: 6, name: "Rachel Nam", role: "Logistics Co-Director", imgRoute: "/images/execPics/Blank.jpg" },
    { id: 7, name: "Thomas Becker", role: "Exam Co-Director", imgRoute: "/images/execPics/Thomas.JPG" },
    { id: 8, name: "Larissa Martin", role: "Exam Co-Director", imgRoute: "/images/execPics/Lyn.jpg" },
    { id: 9, name: "Devam Shrivastava", role: "Build Co-Director", imgRoute: "/images/execPics/Devam.jpeg" },
    { id: 10, name: "Nathan Donagi", role: "Build Co-Director", imgRoute: "/images/execPics/Blank.jpg" },
    { id: 11, name: "Justin Li", role: "Finance Co-Director", imgRoute: "/images/execPics/Justin.jpg" },
    { id: 12, name: "Sishnukeshav Balamurali", role: "Finance Co-Director", imgRoute: "/images/execPics/Blank.jpg" },
    { id: 13, name: "Swathi Mugundu Pradeep", role: "Creative Co-Director", imgRoute: "/images/execPics/Swathi.jpg" },
    { id: 14, name: "Melody Lee", role: "Creative Co-Director", imgRoute: "/images/execPics/Melody.jpeg" },
    { id: 15, name: "Johnny Chen", role: "Outreach Co-Director", imgRoute: "/images/execPics/Blank.jpg" },
    { id: 16, name: "Yaitihya Sahoo", role: "Outreach Co-Director", imgRoute: "/images/execPics/Blank.jpg" },
  ]

  return (
    <main className="bg-slate-200 dark:bg-black flex flex-col items-center w-full">

      {/* Header Section */}
      <div 
        className="flex flex-col lg:flex-row w-full bg-[url('/images/about/background-1.jpg')] bg-cover bg-center"
      >
        {/* Left Side: About Us Text */}
        <motion.div
          className="flex-1 flex items-center justify-center p-10 lg:p-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className={`${play.className} text-6xl lg:text-8xl font-bold text-white drop-shadow-titleShadow italic text-center lg:text-left`}>
            About Us
          </h1>
        </motion.div>

        {/* Right Side: Image (flush to edge) */}
        <motion.div
          className="flex-1 h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/images/about/team.jpg"
            alt="Picture of Exec Team"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>



      {/* About Text */}
      <div className="w-full">
        <p className={`${libre.className} text-lg lg:mx-64 mx-8 text-center p-4 flex justify-center border-4 border-darkBlue dark:text-white mt-4`}>
          Science Olympiad at Georgia Tech is an undergraduate student group with a mission to engage and empower students striving to become scientists and engineers through the Science Olympiad experience.
          <br /><br />
          We work around the year both within Georgia Tech and in the Atlanta area to promote Science Olympiad opportunities for students. We are especially excited to be hosting the Georgia Science Olympiad State Tournament for the 3rd year in a row and the very first Yellow Jacket Invitational, and this would not be possible without the dedication and effort of our members!
        </p>
      </div>

      <div id="line" className="border border-black w-[80%] mt-[5vh]"></div>

      {/* Team Section Header */}
      <h1 className={`text-lightBlue font-mono dark:text-darkBlue dark:bg-lightBlue font-bold text-3xl border-2 border-white m-2 p-6 lg:px-64 shadow-lg bg-darkBlue w-72 flex justify-center ${play.className}`}>
        🐝&nbsp;Our&nbsp;Team&nbsp;🐝
      </h1>

      {/* Profiles Grid */}
      <div className="lg:mx-72 grid grid-cols-1 twoCol:grid-cols-2 threeCol:grid-cols-3 mb-4">
        {profiles.map((profile, i) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: i * 0.1 }}
          >
            <Profile 
              name={profile.name} 
              role={profile.role} 
              imgRoute={profile.imgRoute} 
              color={profile.id % 2 === 0} 
            />
          </motion.div>
        ))}
      </div>

      <hr className="w-4/5 border-t-2 border-gray-300 my-10" />

    </main>
  )
}
