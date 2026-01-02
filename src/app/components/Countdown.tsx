'use client';

import { useState, useEffect } from 'react';

const TIME_CONSTANTS = {
  MILLISECONDS_IN_SECOND: 1000,
  MILLISECONDS_IN_MINUTE: 60 * 1000,
  MILLISECONDS_IN_HOUR: 60 * 60 * 1000,
  MILLISECONDS_IN_DAY: 24 * 60 * 60 * 1000,
};

const getTimeDifference = (currentDate: Date, targetDate: Date) => {
  const diff = targetDate.getTime() - currentDate.getTime();
  return diff > 0 ? diff : 0;
};

type CountdownProps = {
  targetDate: string;
};

export default function Countdown({ targetDate }: CountdownProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return (
      <div className="flex justify-center">
        <span className="text-lg font-semibold opacity-70">Loading…</span>
      </div>
    );
  }

  const target = new Date(targetDate);
  let timeLeft = getTimeDifference(currentDate, target);

  const days = Math.floor(timeLeft / TIME_CONSTANTS.MILLISECONDS_IN_DAY);
  timeLeft %= TIME_CONSTANTS.MILLISECONDS_IN_DAY;

  const hours = Math.floor(timeLeft / TIME_CONSTANTS.MILLISECONDS_IN_HOUR);
  timeLeft %= TIME_CONSTANTS.MILLISECONDS_IN_HOUR;

  const minutes = Math.floor(timeLeft / TIME_CONSTANTS.MILLISECONDS_IN_MINUTE);
  timeLeft %= TIME_CONSTANTS.MILLISECONDS_IN_MINUTE;

  const seconds = Math.floor(timeLeft / TIME_CONSTANTS.MILLISECONDS_IN_SECOND);

  const blocks = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center gap-6">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="
              flex flex-col items-center justify-center
              w-28 h-28 lg:w-32 lg:h-32
              rounded-2xl
              bg-white/80 dark:bg-black/30
              backdrop-blur-md
              shadow-lg
            "
          >
            <span className="text-4xl lg:text-5xl font-extrabold tabular-nums">
              {block.value.toString().padStart(2, '0')}
            </span>
            <span className="text-xs lg:text-sm uppercase tracking-widest opacity-70 mt-1">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

