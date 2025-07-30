import { useRef, useEffect, useCallback } from 'react';
import { Fireworks } from 'fireworks-js';

export const useFireworks = () => {
  const containerRef = useRef(null);
  const fireworksRef = useRef(null);

  // 초기화
  useEffect(() => {
    if (!containerRef.current) return;

    fireworksRef.current = new Fireworks(containerRef.current, {
      autoresize: true,
      opacity: 0.5,
    });

    return () => {
      fireworksRef.current?.stop();
    };
  }, []);

  // 발사 함수
  const fire = useCallback(() => {
    fireworksRef.current?.start();

    // 3초 후 자동 종료 (원하면 제거 가능)
    setTimeout(() => fireworksRef.current?.stop(), 3000);
  }, []);

  return { fire, containerRef };
};