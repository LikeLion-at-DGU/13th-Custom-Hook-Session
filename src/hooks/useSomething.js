import { useState, useEffect } from "react";

export const useSetColor = () => {
  // 여러분의 use{Something}을 만들어주세요!
  // 정답은 없습니다. 커스텀훅의 필요성을 스스로 느껴보세요.
  // 아이디어를 생각하고, 스스로 구현하다가 어려우면 손 들어주세요!
  const [bgColor, setBgColor] = useState({
    bgColor: "",
  });

  const changeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setBgColor(`rgb(${r}, ${g}, ${b})`);
    console.log(bgColor);
  };

return { bgColor, changeColor }
};
