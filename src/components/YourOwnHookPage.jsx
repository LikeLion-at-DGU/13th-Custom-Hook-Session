import React from "react";
import { useSomething } from "../hooks/useSomething";

export const YourOwnHookPage = () => {
  const { something, onChange } = useSomething("");

  return (
    <div>
      <h2>useSomething 실습</h2>
      <label>
        값을 입력해 보세요:&nbsp;
        <input type="text" value={something} onChange={onChange} />
      </label>
      <p>
        입력된 값: <strong>{something}</strong>
      </p>
    </div>
  );
};
