import { useSomething } from "../hooks/useTodayDate";

export const YourOwnHookPage = () => {
  const { formattedDate, progressPercent } = useSomething();

  return (
    <div>
      <h2>오늘의 날짜와 올해 경과율</h2>
      <p>오늘은 {formattedDate}입니다.</p>
      <p>이번 년도의 {progressPercent}%가 지났습니다.</p>
    </div>
  );
};

