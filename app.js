// when the ballRollButton is clicked, run a function that adds the 'ball-roll' class to the box
$("#ball-roll-btn").on("click", function makeItRoll() {
  $("#box").addClass("ball-roll");
});

// reset the class when any animation on the box element ends
$("#box").on("animationend", function cleanUp() {
  $("#box").removeClass();
});


// when the ballRollButton is clicked, run a function that adds the 'ball-roll' class to the box
$("#shrink-btn").on("click", function makeItShrink() {
  $("#box").addClass("shrink");
});

// reset the class when any animation on the box element ends
$("#box").on("animationend", function cleanUp() {
  $("#box").removeClass();
});

// when the ballRollButton is clicked, run a function that adds the 'ball-roll' class to the box
$("#pulse-btn").on("click", function makeItPulse() {
  $("#box").addClass("pulse");
});

// reset the class when any animation on the box element ends
$("#box").on("animationend", function cleanUp() {
  $("#box").removeClass();
});


// when the ballRollButton is clicked, run a function that adds the 'ball-roll' class to the box
$("#grow-btn").on("click", function makeItGrow() {
  $("#box").addClass("grow");
});

$("#box").on("animationend", function cleanUp() {
  $("#box").removeClass();
});

// when the ballRollButton is clicked, run a function that adds the 'ball-roll' class to the box


$("#rotate-btn").on("click", function makeItRotate() {
  $("#box").addClass("rotate");
});

$("#box").on("animationend", function cleanUp() {
  $("#box").removeClass();
});


$("#color-btn").on("click", function makeItRotate() {
  $("#box").addClass("color");
});

$("#box").on("animationend", function cleanUp() {
  $("#box").removeClass();
});

// when the ballRollButton is clicked, run a function that adds the 'ball-roll' class to the box
$("#remove-animations").on("click", function makeItPulse() {
  $("#box").removeClass();
});

// reset the class when any animation on the box element ends
$("#box").on("animationend", function cleanUp() {
  $("#box").removeClass();
});