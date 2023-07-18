console.log("hello world");

	var windowWidth = $(window).width();

$(window).on("mousemove", function(evt) {
  var mouseX = evt.pageX;
  var isSecondHalf = mouseX > windowWidth * (1 / 2);

  if (isSecondHalf) {
    $('body').addClass("selected");
  } else {
    $('body').removeClass("selected");
  }
});


	var image = $("#image");
var speed = 0.5; // Adjust the speed as needed (0.1 is a sample value)

$(document).mousemove(function(e) {
  var mouseX = e.pageX - (image.width() / 2);
  var mouseY = e.pageY - (image.height() / 2);

  // Check if the cursor is in the second half of the screen
  var windowWidth = $(window).width();
  var isSecondHalf = mouseX > windowWidth * (1/2)- (image.width() / 2);

  // Change the background image and other properties
  if (isSecondHalf) {
    $('body').addClass("selected");
  } else {
    $('body').removeClass("selected");
  }

  // Change the image that follows the cursor
  var cursorImage = isSecondHalf ? "media/icons/cursor2.png" : "media/icons/cursor1.png";
  image.attr("src", cursorImage);

  // Animate the image to the target position
  image.stop().animate({
    left: mouseX,
    top: mouseY
  }, speed * 1000);
});

$(document).ready(function() {
  var windowWidth = $(window).width();
  var halfScreenWidth = windowWidth / 2;

  $(document).on("click", function(evt) {
    var mouseX = evt.pageX;

    if (mouseX < halfScreenWidth) {
      window.location.href = "simStep1.html";
    }
  });
});
