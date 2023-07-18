var image = $("#image");
var speed = 0.5; // Adjust the speed as needed (0.1 is a sample value)

$(document).mousemove(function(e) {
  var mouseX = e.pageX - (image.width() / 2);
  var mouseY = e.pageY - (image.height() / 2);

  // Check if the cursor is over the button element
  var buttonElementNext = $(".button-right.next");
  var buttonElementBack = $(".button-right.back");
  var buttonRectNext = buttonElementNext[0].getBoundingClientRect();
  var buttonRectBack = buttonElementBack[0].getBoundingClientRect();
  var isCursorOverButtonNext = e.clientX >= buttonRectNext.left && e.clientX <= buttonRectNext.right && e.clientY >= buttonRectNext.top && e.clientY <= buttonRectNext.bottom;
  var isCursorOverButtonBack = e.clientX >= buttonRectBack.left && e.clientX <= buttonRectBack.right && e.clientY >= buttonRectBack.top && e.clientY <= buttonRectBack.bottom;
  
  // Check if the cursor is over the text element
  var textElement = $("#myLink");
  var textRect = textElement[0].getBoundingClientRect();
  var isCursorOverText = e.clientX >= textRect.left && e.clientX <= textRect.right && e.clientY >= textRect.top && e.clientY <= textRect.bottom;

  // Change the image that follows the cursor
  var cursorImage = "media/icons/cursor3.png"; // Default cursor image
  if (isCursorOverButtonNext) {
    cursorImage = "media/icons/cursor4.png"; // Cursor image for the next button
  } else if (isCursorOverButtonBack) {
    cursorImage = "media/icons/cursor4.png"; // Cursor image for the back button
  } else if (isCursorOverText) {
    cursorImage = "media/icons/cursor4.png"; // Cursor image for the text
  }
  image.attr("src", cursorImage);

  // Animate the image to the target position
  image.stop().animate({
    left: mouseX,
    top: mouseY
  }, speed * 1000);
});

document.addEventListener('DOMContentLoaded', function() {
  var buttonElementNext = document.querySelector(".button-right.next");
  var buttonElementBack = document.querySelector(".button-right.back");
  var textElement = document.getElementById('myLink');

  buttonElementNext.addEventListener('click', function() {
    window.location.href = 'simStep2.html'; // Replace with the desired URL of the button page
  });

  buttonElementBack.addEventListener('click', function() {
    window.location.href = 'expDesSim.html'; // Replace with the desired URL of the button page
  });

  textElement.addEventListener('click', function() {
    window.location.href = 'expDesSim.html'; // Replace with the desired URL of the text page
  });
});