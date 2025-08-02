import { useState, useEffect } from "react"; //리액트에서 useState, useEffect 훅을 불러옴

//useDice라는 커스텀 훅 정의 시작
export const useDice = () => {  //컴포넌트에서 const { diceValue, rollDice } = useDice();처럼 쓸 수 있게 해주는 함수임

  const [diceValue, setDiceValue] = useState(1); 
  //주사위 숫자를 저장할 상태(diceValue)를 만듦
  //diceValue: 현재 주사위 숫자, setDiceValue: 주사위 숫자를 변경하는 함수
  //초기 상태는 1로 설정함
  
  const [rolling, setRolling] = useState(false);
  //주사위가 굴러가고 있는지 여부를 나타내는 상태(rolling)를 만듦
  //초기 상태는 false, 클릭 시 true로 바뀌었다가 다 굴러가면 다시 false가 됨


  //사용자가 클릭시에 호출될 함수
  const rollDice = () => {
    if (!rolling) setRolling(true);
    //주사위가 이미 굴러가고 있으면(rolling이라면) 무시하고,
    //아니라면 rolling을 true로 바꿔서 주사위 굴릴 때의 애니메이션을 시작함
    //rolling 도중 중복 클릭을 막기 위함
  };

    useEffect(() => {
    //useEffect는 rolling이 true로 바뀌었을 때만 실행됨
    //주사위를 굴리기 시작하면(=주사위가 굴러가고 있는 rolling 상태이면) 애니메이션 효과가 여기에서 실행됨

      if (!rolling) return; //rolling이 false이면 아무것도 안함

      //<<주사위를 굴릴 때 숫자가 반복적으로 바뀌는 애니메이션 지정>>
      //0.1초마다 실행되는 반복 타이머 설정(숫자가 계속 바뀌게 하는 부분)
      const interval = setInterval(() => { 
        const newValue = Math.floor(Math.random() * 6) +1; //1.newValue가 가질 수 있는 숫자들을 만듦
        setDiceValue(newValue) //2. 굴려서 나온 새로운 숫자(newValue)로 주사위 상태를 변경해줌
      }, 100); //3. 100ms(0.1초)마다 위 로직 반복

      //<<위 애니메이션 멈추기>>
      //일정 시간이 지나면 interval을 멈추기 위한 타이머 설정
      const timeout = setTimeout(() => {
        clearInterval(interval);// 숫자 변경(위에서 정의한 interval) 중지
        setRolling(false); //rolling 상태 false로 되돌림
      }, 800); //1000ms(1초) 후 종료

      //useEffect에서 컴포넌트의 상태가 바뀌었을 경우, 정리해주는 함수를 return 해야 함
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };

  }, [rolling]);
  //rolling 상태가 바뀔 때마다 실행됨

  //!!정리!!
  // rolling이 true로 바뀌는 순간 useEffect가 작동하고,
  //애니메이션 시작 -> 멈춤 -> 상태 복귀(false)가 일어나는 흐름

  return { diceValue, rollDice, rolling };
  //diceValue(현재 숫자), rollDice(주사위 굴리는 함수), rolling(주사위 굴러가고 있는지에 대한 상태)를 외부에 전달하는 과정
  //컴포넌트에서 사용할 수 있도록 현재 상태와 함수들을 외부에 전달하는 것임
  //이제 jsx파일의 컴포넌트에서 useDice()로 불러와서 쓸 수 있게 됨

}; //훅 정의 종료