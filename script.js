const coins = {
  quarter: 25,
  dime: 10,
  nickel: 5,
  penny: 1
};
const amountInput = document.getElementById("amount");
//console.log(amountInput.valueAsNumber);
//console.log(amountInput)
const coinItBtn = document.querySelector("button");
const coinDisplayParent = document.getElementById("coinDisplay");

amountInput.addEventListener("change", () => {
  getCoins(amountInput.valueAsNumber), playAudio();
});
//coinItBtn.addEventListener('mouseup', () => console.log('hello'))
//console.log(coinItBtn)

//const coins =[ 25, 10, 5, 1 ];

function getCoins(amount) {
  if (amount == 0) {
    coinDisplayParent.innerHTML = "";
  }
  // define total as amount that can be manipulated
  let total = amount;

  //create empty array
  const coinArr = [];

  Object.values(coins).forEach((coin, i) => {
    while (total >= coin) {
      // add coin to array if coin value is less than total
      coinArr.push(Object.keys(coins)[i]);
      //displayCoinImage(coinArr)
      // subtract coin value from given amount
      total -= coin;
    }
  });

  displayCoinImage(coinArr);
  //coinDisplayParent.innerHTML = coinArr.join(', ')
  return coinArr;
}

function displayCoinImage(Arr) {
  coinDisplayParent.innerHTML = "";
  Arr.forEach(coin => {
    console.log(coin);
    if (coin === "penny") createImage("img/Penny.png", 100, 100, "penny");
    if (coin === "nickel") createImage("img/Nickel.jpg", 100, 100, "nickel");
    if (coin === "dime") createImage("img/Dime.png", 100, 100, "dime");
    if (coin === "quarter") createImage("img/Quarter.png", 100, 100, "quarter");
  });
}

function createImage(src, width, height, alt) {
  let img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  coinDisplayParent.appendChild(img);
}

function playAudio() {
  const audio = new Audio("audio/coins-in-hand-4.wav");
  audio.play();
}
