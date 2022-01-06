window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".colors div");
  const visual = document.querySelector(".visual");
  const colors = [
    "rgb(245, 13, 13)",
    "rgb(105, 35, 235)",
    "rgb(43, 233, 26)",
    "rgb(231, 63, 33)",
    "rgb(10, 166, 228)",
    "rgb(199, 233, 7),",
  ];

  // create sounds
  pads.forEach((pad, i) => {
    pad.addEventListener("click", function () {
      sounds[i].currentTime = 0;
      sounds[i].play();
      makebubbles(i);
    });
  });

  // create bubbles
  const makebubbles = (i) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[i];
    bubble.style.animation = "jump 1s linear";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
