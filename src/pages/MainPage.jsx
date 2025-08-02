import { useState } from "react";
import { ConfettiExample } from "../components/ConfettiExample";
import { CountdownExample } from "../components/CountdownExample";
import { WindowSizeExample } from "../components/WindowSizeExample";
import { FetchExample } from "../components/FetchExample";
import { YourOwnHookPage } from "../components/YourOwnHookPage";
import "../styles/Main.styled.css";

export const MainPage = () => {
  const [selected, setSelected] = useState(null);

  const renderComponent = () => {
    switch (selected) {
      case 1:
        return <WindowSizeExample />;
      case 2:
        return <CountdownExample />;
      case 3:
        return <ConfettiExample />;
      case 4:
        return <FetchExample />;
      case 5:
        return <YourOwnHookPage />;
      default:
        return null;
    }
  };

  return (
    <div className="main-container">
      {!selected ? (
        <>
          <h1 className="main-title">커스텀 훅 실습</h1>
          <div className="button-group">
            <button className="modern-btn" onClick={() => setSelected(1)}>
              useWindowSize
            </button>
            <button className="modern-btn" onClick={() => setSelected(2)}>
              useCountdown
            </button>
            <button className="modern-btn" onClick={() => setSelected(3)}>
              useConfetti
            </button>
            <button className="modern-btn" onClick={() => setSelected(4)}>
              useFetch
            </button>

            <button className="modern-btn" onClick={() => setSelected(5)}>
              useFortuneCookie
            </button>
          </div>
        </>
      ) : (
        <>
          <button className="back-btn" onClick={() => setSelected(null)}>
            뒤로가기
          </button>
          {renderComponent()}
        </>
      )}
    </div>
  );
};
