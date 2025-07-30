import { useEffect, useState } from "react";
const targetDate = new Date("2025-08-25T00:00:00");

export const useCountdown = (targetDate) => {
  const difference = targetDate.getTime() - Date().getTime();

  const Days = Math.floor(difference / (1000*60*60*24));



  return timeLeft;
};
