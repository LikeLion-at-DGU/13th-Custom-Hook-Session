import { useEffect, useState } from "react";
import { useWindowSize } from '../hooks/useWindowSize';

export const WindowSizeExample = () => {

    const { windowSize } = useWindowSize();

    return (
        <div>
        <h2>useWindowSize 실습</h2>
        <p>화면 너비: {windowSize.width}px</p>
        <p>화면 높이: {windowSize.height}px</p>
        </div>
    );
}