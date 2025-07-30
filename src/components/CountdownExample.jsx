import { useCountdown } from '../hooks/useCountdown';

export const CountdownExample = () => {
  const { timeLeft } = useCountdown();

  return (
    <div>
      <h2>useCountdown 예제</h2>
      <h2>중앙해커톤까지 남은 시간</h2>
      <p>{`${timeLeft.days}일 ${timeLeft.hours}시간 ${timeLeft.minutes}분 ${timeLeft.seconds}초`}</p>
    </div>
  );
};
