import { useTextColor } from "../hooks/useTextColor";

export const YourOwnHookPage = () => {
  // const { something... } = useSomething();
  // 하단 UI에 자유롭게 위에서 받아온 값들을 바인딩 해보세요~
  const { color, changeColor } = useTextColor();

  return (
    <div>
      <h2 style={{ color }}>useSomething 실습</h2>
      <button className="modern-btn" onClick={changeColor}>
        색상 변경
      </button>
    </div>
  );
};