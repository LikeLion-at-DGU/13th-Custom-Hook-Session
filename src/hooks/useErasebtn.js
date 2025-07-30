import { useState, useEffect } from "react";

export const useErasebtn = (initialValue) => {
  const [erase, setErase] = useState(initialValue);

  const toggleErase = () => {
    
    setErase((prev) => !prev);
  };

  return { erase, toggleErase };
};