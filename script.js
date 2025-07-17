// Variables
var box = document.getElementById("box");
var colors = ["red", "green", "blue", "orange", "purple"];
var startTime = 0;
var endTime = 0;

// Function to show the box at a random position
function showBox() {
  var top = Math.floor(Math.random() * 300) + 100;
  var left = Math.floor(Math.random() * 300) + 100;

  box.style.top = top + "px";
  box.style.left = left + "px";
  box.style.display = "block";

  startTime = new Date().getTime(); // start time
}

// Function to change the color randomly
function changeBoxColor() {
  var index = Math.floor(Math.random() * colors.length);
  box.style.backgroundColor = colors[index];
}

// Function to make the box appear after a delay
function appearAfterDelay() {
  var delay = Math.floor(Math.random() * 2000) + 1000; // 1–3 seconds
  setTimeout(showBox, delay);
}

// On box click
box.onclick = function () {
  endTime = new Date().getTime(); // end time
  var reactionTime = (endTime - startTime) / 1000;

  alert("🎯 Your reaction time is: " + reactionTime + " seconds!");

  changeBoxColor();
  box.style.display = "none";
  appearAfterDelay();
};

// Start the game
appearAfterDelay();
