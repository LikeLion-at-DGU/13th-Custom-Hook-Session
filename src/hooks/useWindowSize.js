// 커스텀훅 코드를 작성해보세요!
import { useEffect, useState } from "react";

//defalut 여부
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handelResize = () => { //setWindowSize를 호출
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  
    window.addEventListener("resize", handelResize);

    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  return windowSize;
};