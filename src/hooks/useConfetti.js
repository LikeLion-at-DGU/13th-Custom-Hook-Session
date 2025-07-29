import confetti from "canvas-confetti";

export const useConfetti = () => {
  const fire = () => {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 },
    });
  };
  return { fire };
};
