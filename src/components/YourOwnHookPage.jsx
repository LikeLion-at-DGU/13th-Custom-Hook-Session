import { useDice } from "../hooks/useDiceValue";
import { styled } from "styled-components";

const Dice = styled.div`
  display: flex;
  font-size: 100px;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  border: 1px solid;
  margin: 0 auto 30px auto;
  justify-content: center;
  background-color: #e7e7e7;
`

export const RollDice = () => {
  const { diceValue, rollDice, rolling } = useDice();
  // const { something... } = useSomething(); <- 이런 형태로 활용!
  // 하단 UI에 자유롭게 위에서 받아온 값들을 바인딩 해보세요~
  return (
    <div>
      <Dice>{diceValue}</Dice> 
      <button 
      onClick={rollDice}
      className="modern-btn">
        {rolling ? "굴리는 중..." : "주사위 굴리기"}
      </button>
    </div>
  );
};
