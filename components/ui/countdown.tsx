"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 18,
    hours: 21,
    minutes: 21,
    seconds: 2
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft({
        days: 18,
        hours: 21,
        minutes: 21,
        seconds: 2
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="flex flex-col items-center rounded-lg border bg-card p-4">
        <span className="text-3xl font-bold">{timeLeft.days}</span>
        <span className="text-sm text-muted-foreground">Days</span>
      </div>
      <div className="flex flex-col items-center rounded-lg border bg-card p-4">
        <span className="text-3xl font-bold">{timeLeft.hours}</span>
        <span className="text-sm text-muted-foreground">Hours</span>
      </div>
      <div className="flex flex-col items-center rounded-lg border bg-card p-4">
        <span className="text-3xl font-bold">{timeLeft.minutes}</span>
        <span className="text-sm text-muted-foreground">Minutes</span>
      </div>
      <div className="flex flex-col items-center rounded-lg border bg-card p-4">
        <span className="text-3xl font-bold">{timeLeft.seconds}</span>
        <span className="text-sm text-muted-foreground">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;