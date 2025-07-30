import { useFireworks } from "../hooks/useFireworks";

export const YourOwnHookPage = () => {
  const { fire, containerRef } = useFireworks();

  return (
    <div>
      <h2>useFireworks 예제</h2>

      {/* 불꽃놀이가 표시될 영역 */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "300px",
          background: "#000",
          marginBottom: "20px",
        }}
      />

      <button className="modern-btn" onClick={fire}>
        불꽃놀이 발사
      </button>
    </div>
  );
};