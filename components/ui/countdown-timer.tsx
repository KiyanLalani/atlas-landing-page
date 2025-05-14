import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-05-15T16:30:00+01:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-4 text-white/90">
      <div className="text-center">
        <div className="text-4xl font-bold">{formatNumber(timeLeft.days)}</div>
        <div className="text-xs uppercase tracking-wider text-white/70">Days</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold">{formatNumber(timeLeft.hours)}</div>
        <div className="text-xs uppercase tracking-wider text-white/70">Hours</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold">{formatNumber(timeLeft.minutes)}</div>
        <div className="text-xs uppercase tracking-wider text-white/70">Minutes</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="text-center">
        <div className="text-4xl font-bold">{formatNumber(timeLeft.seconds)}</div>
        <div className="text-xs uppercase tracking-wider text-white/70">Seconds</div>
      </div>
    </div>
  );
}