import { useState } from 'react';

export const useTextColor = () => {
  // 여러분의 use{Something}을 만들어주세요!
  // 정답은 없습니다. 커스텀훅의 필요성을 스스로 느껴보세요.
  // 아이디어를 생각하고, 스스로 구현하다가 어려우면 손 들어주세요!
  const [color, setColor] = useState('black');

  const changeColor = () => {
    // 예시로 색상을 랜덤하게 바꾸거나, 정해진 목록에서 바꿀 수 있음
    const colors = ['red', 'blue', 'green', 'orange', 'purple'];
    const nextColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(nextColor);
  };

  return { color, changeColor };
};