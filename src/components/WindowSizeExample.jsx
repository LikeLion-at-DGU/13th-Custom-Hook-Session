import { useWindowSize } from "../hooks/useWindowSize";

export const WindowSizeExample = () => {
  // 실습 1. 하단 코드를 useWindowSize (커스텀 훅으로 바꿔주세요!)
  // const { windowSize } = useWindowSize(); // 훅이 객체를 반환하고, 그 객체 안에 windowSize라는 속성이 있는 경우
  const windowSize = useWindowSize();  // 이건 useWindowSize()가 windowSize 객체 자체를 반환하는 경우에만 사용

  return (
    <div>
      <h2>useWindowSize 실습</h2>
      <p>화면 너비: {windowSize.width}px</p>
      <p>화면 높이: {windowSize.height}px</p>
    </div>
  );
};

