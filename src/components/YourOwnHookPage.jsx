import { useSetColor } from "../hooks/useSomething";

export const YourOwnHookPage = () => {
  // const { something... } = useSomething();
  // 하단 UI에 자유롭게 위에서 받아온 값들을 바인딩 해보세요~
  const { changeColor, bgColor } = useSetColor();

 
  return (
    <div style={{backgroundColor: bgColor}}> 
      <h2>useSomething 실습</h2>
      <button onClick={changeColor}> 배경색 바꾸기 </button>
    </div>
  );
};
