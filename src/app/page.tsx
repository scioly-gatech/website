"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const allPictures = [
  "/images/2023/2023-1.jpg",
  "/images/2023/2023-2.jpg",
  "/images/2023/2023-3.jpg",
  "/images/2023/2023-4.jpg",
  "/images/2023/2023-5.jpg",
  "/images/2023/2023-6.jpg",
  "/images/2023/2023-7.jpg",
  "/images/2023/2023-8.jpg",
];

export default function Home() {
  const [angle, setAngle] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);
  const rotationSpeed = 0.001;

  // Track window width (client-safe)
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Rotation animation
  useEffect(() => {
    let animationFrame: number;
    const rotate = () => {
      setAngle((prev) => prev + rotationSpeed);
      animationFrame = requestAnimationFrame(rotate);
    };
    rotate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Orbit radii (unchanged behavior)
  const rx = Math.min(320, windowWidth * 0.35);
  const ry = Math.min(280, windowWidth * 0.28);

  // ✅ ONLY change: responsive orbit image size
  const orbitImageSize = Math.min(120, Math.max(70, windowWidth * 0.12));

  return (
    <main className="w-full flex flex-col items-center bg-[#2c4261] overflow-x-hidden">

      {/* Orbit Wrapper */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] flex justify-center items-center mt-12 mb-12 overflow-hidden">

        {/* Center Logo */}
        <div className="z-20">
          <Image
            src="/images/home/Professional SO@GT Logo.png"
            alt="Science Olympiad Logo"
            width={400}
            height={400}
            className="w-[220px] sm:w-[260px] lg:w-[350px] h-auto mx-auto"
            priority
          />
        </div>

        {/* Orbiting Images */}
        <div className="absolute inset-0 flex justify-center items-center">
          {allPictures.map((src, i) => {
            const angleOffset =
              (i / allPictures.length) * 2 * Math.PI + angle;

            const x = rx * Math.cos(angleOffset);
            const y = ry * Math.sin(angleOffset);

            const scale =
              Math.abs(Math.sin(angleOffset)) < 0.3 ? 1.4 : 1;

            return (
              <div
                key={i}
                className="absolute transition-transform duration-300"
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${scale})`,
                }}
              >
                <div
                  className="rounded-full overflow-hidden shadow-lg"
                  style={{
                    width: orbitImageSize,
                    height: orbitImageSize,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Orbit Image ${i + 1}`}
                    width={orbitImageSize}
                    height={orbitImageSize}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* White Section */}
      <section className="w-full bg-white py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-8 px-6">

          <div className="w-full lg:w-1/3">
            <Image
              src="/images/home/techtower.jpg"
              alt="Tech Tower"
              width={600}
              height={400}
              className="w-full h-auto shadow-lg"
            />
          </div>

          <div
            className={`w-full lg:w-2/3 flex flex-col justify-center ${outfit.className}`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
              We&apos;re Buzzing with Excitement...
            </h2>
            <p className="text-lg lg:text-xl text-black">
              The Georgia Tech campus will be the bustling hub for two Science
              Olympiad competitions in 2026: our 3rd annual Yellow Jacket
              Invitational and the Georgia Division C State Tournament.
              Volunteers from Georgia Tech and other top tier universities
              around the country will apply their expertise to run more than 23
              different STEM events and create an unforgettable competition
              experience.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}


