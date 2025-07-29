import { useConfetti } from "../hooks/useConfetti";

export const ConfettiExample = () => {
  const { fire } = useConfetti();

  return (
    <div>
      <h2>useConfetti 실습</h2>
      <button className="modern-btn" onClick={fire}>
        폭죽 발사
      </button>
    </div>
  );
};
