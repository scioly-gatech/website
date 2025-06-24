import './globals.css'
import './embla.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Script from 'next/script'

const open = Open_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Science Olympiad at Georgia Tech',
  description: 'Science Olympiad @ Georgia Tech is a student organization dedicated to encouraging student participation in Science Olympiad. We are hosting the Georgia State Tournament for the third year consecutive year as well as the Yellow Jacket Invitational.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="min-w-fit">
      <body className={`${open.className} min-h-screen flex flex-col`}>
        <Navbar />
        <div className="grow bg-slate-200 dark:bg-black">
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
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
