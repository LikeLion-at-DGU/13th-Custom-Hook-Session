import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../utils/calculateTime";

export const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  return timeLeft;
};
