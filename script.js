const coin = document.querySelector('[data-container="coin"]');
const coinTitle = document.querySelector(".coin-title");
const button = document.querySelector('[data-button="Random"]');

function flipCoin() {
  if (coin.classList.contains("girando")) return;

  const random = Math.random() < 0.5;
  const rotacion = random ? 1800 : 1980;

  coin.style.transition = "none";
  coin.style.transform = "rotateX(0deg)";

  coin.offsetHeight;

  coin.style.transition = "transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1)";
  coin.classList.add("girando");
  coin.style.transform = `rotateX(${rotacion}deg)`;

  setTimeout(() => {
    coin.classList.remove("girando");
    coinTitle.textContent = random ? "Heads" : "Tails";
  }, 1500);
}

// Eventos click
coin.addEventListener("click", flipCoin);
button.addEventListener("click", flipCoin);
