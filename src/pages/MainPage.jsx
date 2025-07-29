import { useCountdown } from "../hooks/useCountdown";
import { useWindowSize } from "../hooks/useWindowSize";

export const MainPage = () => {
  const { width, height } = useWindowSize();
  const { days, hours, minutes, seconds } = useCountdown();
  return (
    <div>
      <h1>width: {width}</h1>
      <h1>height: {height}</h1>
    </div>
  );
};
