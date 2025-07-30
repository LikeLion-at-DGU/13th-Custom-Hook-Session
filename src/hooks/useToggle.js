import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [isOn, setOn] = useState(initialValue);

  const toggle = () => {
    setOn((prev) => !prev);
  };

  return { isOn, toggle };
};
