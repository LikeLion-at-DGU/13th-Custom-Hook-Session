import {useWindowSize} from "../hooks/useWindowSize"

export const WindowSizeExample = () => {
  // 실습 1. 하단 코드를 useWindowSize (커스텀 훅으로 바꿔주세요!)
  const {windowSize} = useWindowSize();


  return (
    <div>
      <h2>useWindowSize 실습</h2>
      <p>화면 너비: {windowSize.width}px</p>
      <p>화면 높이: {windowSize.height}px</p>
    </div>
  );
};
