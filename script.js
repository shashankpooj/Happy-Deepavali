const wishes = [
  "May this Deepavali bring joy and prosperity to you and your family.",
  "Stay blessed and celebrate safely."
];

let wishIndex = 0;
const wishText = document.getElementById("wishText");

function displayWish() {
  wishText.innerHTML = wishes[wishIndex];
  wishIndex = (wishIndex + 1) % wishes.length;
}

displayWish();
setInterval(displayWish, 7000);

function createBlast() {
  const blast = document.createElement("div");
  blast.classList.add("blast");
  blast.style.left = `${Math.random() * window.innerWidth}px`;
  blast.style.top = `${Math.random() * window.innerHeight}px`;
  document.body.appendChild(blast);
  blast.addEventListener("animationend", () => {
      blast.remove();
  });
}

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle-fall");
  sparkle.style.left = `${Math.random() * window.innerWidth}px`;
  sparkle.style.animationDuration = `${Math.random() * 3 + 2}s`;
  document.body.appendChild(sparkle);
  sparkle.addEventListener("animationend", () => {
      sparkle.remove();
  });
}

setInterval(createBlast, 1000);
setInterval(createSparkle, 300);
