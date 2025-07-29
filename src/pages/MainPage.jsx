import { useCountdown } from "../hooks/useCountdown";
import { useWindowSize } from "../hooks/useWindowSize";
import { formattedDate } from "../utils/formattedDate";

export const MainPage = () => {
  const targetDate = new Date("2025-08-25T00:00:00");
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const { width, height } = useWindowSize();

  return (
    <div>
      <h1>width: {width}</h1>
      <h1>height: {height}</h1>

      <div>
        <h2>{formattedDate(targetDate)}까지 남은 시간</h2>
        <p>{`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`}</p>
      </div>
    </div>
  );
};
