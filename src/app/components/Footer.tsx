import {FaInstagramSquare} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import Link from "next/link";

export default function Footer() {

    const curr = new Date().getFullYear()

  return (
    <div className="bottom-1 min-w-screen flex flex-col items-center text-darkBlue bg-lightBlue dark:bg-darkBlue dark:text-lightBlue p-10">
    <nav className="hidden lg:block">
      <ul className="flex flex-row justify-center">
        <li className="p-1 m-1 hover:text-black hover:underline dark:hover:text-white">
          <Link href="/">Home</Link>
        </li >
        <li className="p-1 m-1 hover:text-black dark:hover:text-white hover:underline">
          <Link href="/aboutUs">About Us</Link>
        </li>
        <li className="p-1 m-1 hover:text-black dark:hover:text-white hover:underline">
          <Link href="/currentTournament">Georgia Tech Invitational</Link>
        </li>
        <li className="p-1 m-1 hover:text-black dark:hover:text-white hover:underline">
          <Link href="/sponsorships">Sponsorship</Link>
        </li>
        <li className="p-1 m-1 hover:text-black dark:hover:text-white hover:underline">
          <Link href="/contactUs">Contact Us</Link>
        </li>
      </ul>
    </nav>
      <p className="left-1/2 text-center">For more information about Science Olympiad, please visit <a href="https://www.soinc.org/" target="_blank" className="underline text-white">https://www.soinc.org/ </a></p>
      <p className="left-1/2 text-center">Created by <span className="text-yellow-300 font-bold">Science Olympiad @ Georgia Tech </span>{curr}</p>
      <ul id="socialMedia" className="flex flex-row">
        <li id="instagram" className="m-2">
          <a href="https://www.instagram.com/gtscioly/" target="_blank" className="text-3xl hover:brightness-150"><FaInstagramSquare /></a>
        </li>
        <li id="mail" className="m-2">
          <a href="mailto:scioly.gatech@gmail.com" className="text-3xl hover:brightness-150"><AiOutlineMail /></a>
        </li>
    </ul>
    </div>
  )
}
