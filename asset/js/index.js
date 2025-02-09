const circle = document.getElementById("circle");
const fast = document.getElementById("border-animation");
let isFlipped = false;
let isAnimating = false;

function flipCircle() {
  if (isAnimating) return;
  isAnimating = true;

  isFlipped = !isFlipped;
  circle.style.transform = isFlipped
    ? "rotateY(180deg) translateY(0)"
    : "rotateY(0deg) translateY(0)";

  setTimeout(() => {
    circle.style.transform = isFlipped
      ? "rotateY(180deg) translateY(0)"
      : "rotateY(0deg) translateY(0)";

    setTimeout(() => {
      isAnimating = false;
    }, 1000);
  }, 500);
}


setInterval(() => {
  if (!isAnimating) {
    flipCircle();
  }
}, 3000);
