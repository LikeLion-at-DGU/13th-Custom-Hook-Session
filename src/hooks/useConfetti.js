import confetti from "canvas-confetti";

export const useConfetti = () => {
  const fire = () => {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  const fire2 = () => {
    confetti({
      particleCount: 100,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });
  };
  return { fire, fire2 };
};
