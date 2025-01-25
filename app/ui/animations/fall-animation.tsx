"use client";

export function FallAnimation({
  count,
  delayDuration,
  emoji,
}: {
  count: number;
  delayDuration: number;
  emoji: string;
}) {
  const createHeart = () => {
    // Create a heart element
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = `${4 + Math.random() * 4}s`;
    heart.textContent = emoji;
    heart.style.opacity = (0.2 + Math.random() * 0.5).toString();

    // Append the heart to the body
    document.body.appendChild(heart);
  };

  const heartInterval = setInterval(createHeart, delayDuration);

  // Stop generating hearts after 10 seconds
  setTimeout(() => {
    clearInterval(heartInterval);
  }, count * delayDuration);

  return () => {
    clearInterval(heartInterval);
  };
}
