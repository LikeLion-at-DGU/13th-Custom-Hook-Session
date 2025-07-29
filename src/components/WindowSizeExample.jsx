import { useWindowSize } from "../hooks/useWindowSize";

export const WindowSizeExample = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>useWindowSize 실습</h2>
      <p>화면 너비: {width}px</p>
      <p>화면 높이: {height}px</p>
    </div>
  );
};
