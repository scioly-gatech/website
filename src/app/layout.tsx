import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const rubik = Rubik({ subsets: ['latin'] })
const open = Open_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Science Olympiad at Georgia Tech',
  description: 'Science Olympiad @ Georgia Tech is a student organization dedicated to encouraging student participation in Science Olympiad. We are hosting the Georgia State Tournament for the third year consecutive year as well as the Georgia Tech Invitational.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-w-fit">
      <body className={open.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
