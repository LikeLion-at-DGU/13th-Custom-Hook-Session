
import { useToggle } from "../hooks/useToggle";

export const YourOwnHookPage = () => {
  const { isOn, toggle } = useToggle();

  return (
    <div>
      <h2>useToggle 실습!!</h2>
      <p>현재 상태: {isOn ? "❤️" : "⭐"}</p>
      <button onClick={toggle}>
        {isOn ? "하트" : "별"}
      </button>
    </div>
  );
};