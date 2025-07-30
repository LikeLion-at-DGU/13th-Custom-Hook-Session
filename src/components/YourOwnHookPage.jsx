import { useModal } from "../hooks/useAlert";

export const YourOwnHookPage = () => {
  const { modal } = useModal();
  // const { something... } = useSomething();
  // 하단 UI에 자유롭게 위에서 받아온 값들을 바인딩 해보세요~
  return (
    <div>
      <h2>useSomething 실습</h2>
      <button className="modern-btn" onClick={modal}>
        눌러바 궁금하지?? ... 그치?
      </button>
    </div>
  );
};

