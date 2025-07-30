import { useState, useEffect } from "react";

export const CountdownExample = () => {
  const targetDate = new Date("2025-08-25T00:00:00");

  const calculateTimeLeft = (targetDate) => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      <h2>useCountdown 예제</h2>
      <h2>중앙해커톤까지 남은 시간</h2>
      <p>{`${timeLeft.days}일 ${timeLeft.hours}시간 ${timeLeft.minutes}분 ${timeLeft.seconds}초`}</p>
    </div>
  );
};
