// ---- section 1 ----
const targetBox1 = document.querySelector("#target-1");

// välj den klickbara texten och lägg på lyssnare efter klick med en funktion som körs
document.querySelector("#txt").addEventListener("click", function () {
  targetBox1.style.backgroundColor = "pink";
});

// välj box1, lägg lyssnare på klick och kör funktionen
document.querySelector("#box1").addEventListener("click", function () {
  targetBox1.style.display = "none";
});

// ---- section 2 ----
const targetClasses = document.querySelector("#target-classes");
const btnAddClass = document.querySelector("#box2");
const btnRemoveClass = document.querySelector("#box3");
const btnToggleClass = document.querySelector("#box4");

btnAddClass.addEventListener("click", function (event) {
  // event behövs egentligen inte men vi skriver ut det i konsolen för att visa vad som klickats
  console.log(event.target);
  targetClasses.classList.add("large");
});

btnRemoveClass.addEventListener("click", function (event) {
  // event behövs egentligen inte men vi skriver ut det i konsolen för att visa vad som klickats
  console.log(event.target);
  targetClasses.classList.remove("large");
});

btnToggleClass.addEventListener("click", function (event) {
  // event behövs egentligen inte men vi skriver ut det i konsolen för att visa vad som klickats
  console.log(event.target);
  targetClasses.classList.toggle("large");
});

// ---- section 3 ----
const targetFunc = document.querySelector("#target-func");
document.querySelector("#box5").addEventListener("click", changeBg);
document.querySelector("#box6").addEventListener("mouseover", changeBg);
document.querySelector("#box7").addEventListener("mouseout", changeBg);

function changeBg(event) {
  console.log(`funktion triggad på`, event.type);
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let randomColor = `rgb(${r},${g},${b})`;
  console.log(randomColor);
  targetFunc.style.backgroundColor = randomColor;
}

// ---- section 4 ----
const img = document.querySelector("#target-src");
const btnChangeText = document.querySelector("#box8");
const btnImg1 = document.querySelector("#box9");
const btnImg2 = document.querySelector("#box10");

btnChangeText.addEventListener("click", function () {
  btnChangeText.innerHTML = "Coolt";
});

btnImg1.addEventListener("click", function () {
  img.setAttribute("src", "img/pexels-artem-podrez-7048694.jpg");
});

btnImg2.addEventListener("click", function () {
  img.setAttribute("src", "img/pexels-emma-li-10154784.jpg");
});

// ---- rainbow ----
const targetRainbow = document.querySelector("#target-rainbow");
document.querySelector("#box11").addEventListener("click", function () {
  intervalId = setInterval(nextColor, 5);
});
document.querySelector("#box12").addEventListener("click", function () {
  clearInterval(intervalId);
});
let intervalId = null;
let r = 0;
let g = 0;
let b = 0;

function nextColor() {
  // rött inte max och de andra på 0, öka rött
  if (r <= 255 && g == 0 && b == 0) {
    r++;
  }
  // rött max, grönt inte max, blått 0, öka grönt
  if (r == 255 && g <= 255 && b == 0) {
    g++;
  }

  if (r == 255 && g == 255 && b < 255) {
    b++;
  }

  // vändning vid vitt, räkna nedåt istället
  if (r > 0 && g == 255 && b == 255) {
    r--;
  }

  if (r == 0 && g > 0 && b == 255) {
    g--;
  }

  if (r == 0 && g == 0 && b > 0) {
    b--;
  }

  let currentRainbow = `rgb(${r},${g},${b})`;
  // console.log(currentRainbow);
  targetRainbow.style.borderColor = currentRainbow;
}
