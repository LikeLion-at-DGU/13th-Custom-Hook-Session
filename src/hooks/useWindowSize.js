// 커스텀훅 코드를 작성해보세요!
import { useEffect, useState } from "react";

export const useWindowSize = () => {
    // 실습 1. 하단 코드를 useWindowSize (커스텀 훅으로 바꿔주세요!)
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { windowSize }
    // return (
    //   <div>
    //     <h2>useWindowSize 실습</h2>
    //     <p>화면 너비: {windowSize.width}px</p>
    //     <p>화면 높이: {windowSize.height}px</p>
    //   </div>
    // );
};
