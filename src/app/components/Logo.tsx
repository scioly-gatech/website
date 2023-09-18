import React from 'react'
import Image from 'next/image'

export default function Logo() {
  const size = 80
  return (
    <section>
        <Image src="/images/officialLogo.png" width={size} height={size} alt="Georgia Tech Science Olympiad Home" className="ml-2"/>
    </section>
  )
}
