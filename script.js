// Variables
var box = document.getElementById("box");
var startButton = document.getElementById("startButton");
var colors = ["red", "green", "blue", "orange", "purple"];
var startTime = 0;
var endTime = 0;

// Function to show the box
function showBox() {
  var top = Math.floor(Math.random() * 300) + 100;
  var left = Math.floor(Math.random() * 300) + 100;

  box.style.top = top + "px";
  box.style.left = left + "px";
  box.style.display = "block";

  startTime = new Date().getTime();
}

// Function to change box color
function changeBoxColor() {
  var index = Math.floor(Math.random() * colors.length);
  box.style.backgroundColor = colors[index];
}

// Function to delay box 
function appearAfterDelay() {
  var delay = Math.floor(Math.random() * 2000) + 1000; // 1–3 sec
  setTimeout(showBox, delay);
}

// Box click handler
box.onclick = function () {
  endTime = new Date().getTime();
  var reactionTime = (endTime - startTime) / 1000;

  alert("🎯 Your reaction time is: " + reactionTime + " seconds!");

  changeBoxColor();
  box.style.display = "none";
  appearAfterDelay();
};

// Start button click
startButton.onclick = function () {
  startButton.style.display = "none"; // hide start button
  appearAfterDelay(); // start game
};
