import { useMemo } from "react";

export const useSomething = () => {
  const today = useMemo(() => new Date(), []);
  const year = today.getFullYear();
  const start = new Date(`${year}-01-01`);
  const end = new Date(`${year + 1}-01-01`);
  const progress =
    ((today.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100;

  const formattedDate = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  const progressPercent = progress.toFixed(1);

  return {
    formattedDate,
    progressPercent,
  };
};
