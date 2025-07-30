import { useState } from "react";

export const useSomething = (initialValue = "") => {
  const [something, setSomething] = useState(initialValue);

  const onChange = (e) => {
    setSomething(e.target.value);
  };

  return { something, onChange };
};
