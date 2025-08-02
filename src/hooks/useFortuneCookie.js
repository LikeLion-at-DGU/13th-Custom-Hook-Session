// 여러분의 use{Something}을 만들어주세요!
// 정답은 없습니다. 커스텀훅의 필요성을 스스로 느껴보세요.
// 아이디어를 생각하고, 스스로 구현하다가 어려우면 손 들어주세요!
import { useState } from "react";

const fortunes = [
  {
    en: "Your efforts will make a positive impact on others.",
    ko: "당신의 노력은 다른 사람들에게 긍정적인 영향을 미칠 것입니다.",
  },
  {
    en: "Trust your intuition and make decisions.",
    ko: "자신의 직감을 믿고 결정을 내리세요.",
  },
  {
    en: "Sometimes we need to stop and take a look around.",
    ko: "때로는 멈춰 서서 주변을 돌아보는 여유가 필요합니다.",
  },
  {
    en: "Open your mind and try new experiences.",
    ko: "마음을 열고 새로운 경험에 도전하세요.",
  },
];

export function useFortuneCookie() {
  const [selected, setSelected] = useState(null);

  const selectFortune = (index) => {
    setSelected(fortunes[index]);
  };

  return {
    fortunes,
    selected,
    selectFortune,
  };
}