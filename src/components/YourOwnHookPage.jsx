import { useFortuneCookie } from "../hooks/useFortuneCookie";

export const YourOwnHookPage = () => {
  const { fortunes, selected, selectFortune } = useFortuneCookie();

  return (
    <div>
      {!selected ? (
        <>
          <h3>하나를 선택해 보세요!</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
            {fortunes.map((fortune, idx) => (
              <img
                key={idx}
                src="/FortuneCookie.png"
                alt={`포춘 쿠키 ${idx + 1}`}
                style={{ width: "100px", cursor: "pointer" }}
                onClick={() => selectFortune(idx)}
              />
            ))}
          </div>
        </>
      ) : (
        <div
          style={{
            border: "2px solid #8B5C2A",
            background: "#F5E9DA",
            borderRadius: "16px",
            width: "500px",
            margin: "15px auto",
          }}
        >
          <h3>오늘의 명언</h3>
          <p>{selected.en}</p>
          <p>{selected.ko}</p>
        </div>
      )}
    </div>
  );
};
