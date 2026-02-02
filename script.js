let coin = 0;
const coinEl = document.getElementById("coin");
const tapBtn = document.getElementById("tapBtn");

tapBtn.addEventListener("click", () => {
  coin++;
  coinEl.innerText = coin;

  // small glow effect
  tapBtn.style.filter = "brightness(1.3)";
  setTimeout(() => {
    tapBtn.style.filter = "brightness(1)";
  }, 80);
});
