// get element
let circleBefore = document.querySelector("#circle-before");
let circleAfter = document.querySelector("#circle-after");
let dot = "";

for (i = 0; i < 20; i++) {
  dot += '<div class="dot"></div>';
}

circleAfter.innerHTML = dot;
circleBefore.innerHTML = dot;

let colorList = ["#62baea", "#62ea89", "#ea6262", "#62eae3", "#ea6262"];
let dottedCard = {
  element: document.getElementById("doted-card"),
  header: document.getElementById("doted"),
  color: "#62baea",
};

let zigzagCard = {
  element: document.getElementById("zigzag-card"),
  header: document.getElementById("zigzag"),
  color: "#62baea",
};

function getRandomColor(element) {
  let removeColor = element.color;
  let removeColorList = [...colorList];
  removeColorList.splice(removeColorList.indexOf(removeColor), 1);
  return removeColorList[Math.floor(Math.random() * removeColorList.length)];
}

dottedCard.element.addEventListener("click", () => {
  let color = getRandomColor(dottedCard);
  dottedCard.element.style.backgroundColor = color;
  dottedCard.header.style.color = color;
  dottedCard.color = color;
});

zigzagCard.element.addEventListener("click", () => {
  let color = getRandomColor(zigzagCard);
  zigzagCard.element.style.backgroundColor = color;
  zigzagCard.header.style.color = color;
  zigzagCard.color = color;
});
