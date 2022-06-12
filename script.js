const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  updateDOM();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  updateDOM();
});

function updateDOM() {
  circles.forEach((circle, ix) => {
    if (ix < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  if (actives.length === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }

  if (actives.length !== 1) {
    prev.disabled = false;
  } else {
    prev.disabled = true;
  }

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}
