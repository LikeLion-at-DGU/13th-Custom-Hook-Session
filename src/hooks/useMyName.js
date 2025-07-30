import { useEffect, useState } from "react";
import { useConfetti } from "./useConfetti";

export const useName = () => {
  // 여러분의 use{name}을 만들어주세요!
  // 정답은 없습니다. 커스텀훅의 필요성을 스스로 느껴보세요.
  // 아이디어를 생각하고, 스스로 구현하다가 어려우면 손 들어주세요!
  const [name, setName] = useState("아기사자");
  const { fire2 } = useConfetti();

  const changeName = () => {
    setName((prev) => (prev === "아기사자" ? "아기사자 백지연" : "아기사자"));
  };

  useEffect(() => {
    fire2();
  }, [name]);

  return {
    name,
    changeName,
  };
};
