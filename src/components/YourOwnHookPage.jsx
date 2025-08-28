import { useState } from "react";

export const useBackgroundColor = (initialColor = "white") => {
  const [color, setColor] = useState(initialColor);

  const toggleColor = () => {
    setColor((prev) => (prev === "white" ? "lightblue" : "white"));
  };

  return { color, toggleColor };
};
