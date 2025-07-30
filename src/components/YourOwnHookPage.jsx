import { useName } from "../hooks/useMyName";

export const YourOwnHookPage = () => {
  const { name, changeName } = useName();

  return (
    <div>
      <h2>useSomething 실습</h2>
      <p>{name}</p>
      <button className="modern-btn" onClick={changeName}>
        누구게
      </button>
    </div>
  );
};
