import { useCountdown } from "../hooks/useCountdown";
import { formattedDate } from "../utils/formattedDate";

export const CountdownExample = () => {
  const targetDate = new Date("2025-08-25T00:00:00");
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div>
      <h2>{formattedDate(targetDate)}까지 남은 시간</h2>
      <p>{`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`}</p>
    </div>
  );
};
