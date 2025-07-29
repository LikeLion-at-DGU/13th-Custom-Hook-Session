import { useWindowSize } from "../hooks/useWindowSize";

export const MainPage = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <h1>width: {width}</h1>
      <h1>height: {height}</h1>
    </div>
  );
};
