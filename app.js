window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".colors div");
  const visual = document.querySelector(".visual");
  const colors = [
    "rgb(238, 82, 113)",
    "rgb(231, 63, 33)",
    "rgb(105, 35, 235)",
    "rgb(43, 233, 26)",
    "rgb(10, 166, 228)",
    "rgb(199, 233, 7)",
  ];

  // create sounds
  pads.forEach((color, index) => {
    color.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      makebubbles(index);
    });
  });

  // create bubbles
  const makebubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease-in-out";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
