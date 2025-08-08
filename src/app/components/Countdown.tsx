import { useState, useEffect } from 'react';

// I made this component!! - Johnny

const TIME_CONSTANTS = {
  MILLISECONDS_IN_SECOND: 1000,
  MILLISECONDS_IN_MINUTE: 60 * 1000,
  MILLISECONDS_IN_HOUR: 60 * 60 * 1000,
  MILLISECONDS_IN_DAY: 24 * 60 * 60 * 1000
};

const getTimeDifference = (currentDate: Date, targetDate: Date) => {
    const diff = targetDate.getTime() - currentDate.getTime()
    return (diff > 0 ? diff : 0);
}
type CountdownProps = {
    targetDate: string
    eventName: string
}
export default function Countdown(props: CountdownProps) {
    // Update current date/time every second
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isClient, setIsClient] = useState(false); //hydration stuff i don't really get
    useEffect(() => {
        setIsClient(true);
        const timer = setInterval(() => {
        setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!isClient) {
        return (<h3 className="text-xl text-center font-semibold">Loading...</h3>);
    }

    const targetDate = new Date(props.targetDate);
    let timeLeft = getTimeDifference(currentDate, targetDate);

    const days = Math.floor(timeLeft / TIME_CONSTANTS.MILLISECONDS_IN_DAY);
    timeLeft = timeLeft % TIME_CONSTANTS.MILLISECONDS_IN_DAY;
    const hours = Math.floor(timeLeft / TIME_CONSTANTS.MILLISECONDS_IN_HOUR);
    timeLeft = timeLeft % TIME_CONSTANTS.MILLISECONDS_IN_HOUR;
    const minutes = Math.floor(timeLeft / TIME_CONSTANTS.MILLISECONDS_IN_MINUTE);
    timeLeft = timeLeft % TIME_CONSTANTS.MILLISECONDS_IN_MINUTE;
    const seconds = Math.floor(timeLeft / TIME_CONSTANTS.MILLISECONDS_IN_SECOND);
    return(
        <h2 className="text-3xl m-2 p-2 text-center font-bold">{days} Days : {hours} Hours : {minutes} Minutes : {seconds} Seconds until {props.eventName}</h2>
    );
}