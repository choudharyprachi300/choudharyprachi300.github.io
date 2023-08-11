var image = $("#image");
var speed = 0.5; // Adjust the speed as needed (0.1 is a sample value)

$(document).mousemove(function(e) {
  var mouseX = e.pageX - (image.width() / 2);
  var mouseY = e.pageY - (image.height() / 2);

  // Check if the cursor is over the button element
  var buttonElementNext = $(".button-right.next");
  var buttonElementBack = $(".button-right.back");
  var buttonElementStart = $(".button-right.start");
  var buttonRectNext = buttonElementNext[0].getBoundingClientRect();
  var buttonRectBack = buttonElementBack[0].getBoundingClientRect();
  var buttonRectStart = buttonElementStart[0].getBoundingClientRect();
  var isCursorOverButtonNext = e.clientX >= buttonRectNext.left && e.clientX <= buttonRectNext.right && e.clientY >= buttonRectNext.top && e.clientY <= buttonRectNext.bottom;
  var isCursorOverButtonBack = e.clientX >= buttonRectBack.left && e.clientX <= buttonRectBack.right && e.clientY >= buttonRectBack.top && e.clientY <= buttonRectBack.bottom;
  var isCursorOverButtonStart = e.clientX >= buttonRectStart.left && e.clientX <= buttonRectStart.right && e.clientY >= buttonRectStart.top && e.clientY <= buttonRectStart.bottom;

  var sliderElementSpaces = $(".spaces");
  var sliderElementFloors = $(".floorss");
  var sliderRectSpaces = sliderElementSpaces[0].getBoundingClientRect();
  var sliderRectFloors = sliderElementFloors[0].getBoundingClientRect();
  var isCursorOverSliderSpaces = e.clientX >= sliderRectSpaces.left && e.clientX <= sliderRectSpaces.right && e.clientY >= sliderRectSpaces.top && e.clientY <= sliderRectSpaces.bottom;
  var isCursorOverSliderFloors = e.clientX >= sliderRectFloors.left && e.clientX <= sliderRectFloors.right && e.clientY >= sliderRectFloors.top && e.clientY <= sliderRectFloors.bottom;

  // Check if the cursor is over the text element
  var textElement = $("#myLink");
  var textRect = textElement[0].getBoundingClientRect();
  var isCursorOverText = e.clientX >= textRect.left && e.clientX <= textRect.right && e.clientY >= textRect.top && e.clientY <= textRect.bottom;

  // Change the image that follows the cursor
  var cursorImage = "media/icons/cursor7.png"; // Default cursor image
  if (isCursorOverButtonNext) {
    cursorImage = "media/icons/cursor4.png"; // Cursor image for the next button
  } else if (isCursorOverButtonBack) {
    cursorImage = "media/icons/cursor4.png"; // Cursor image for the back button
  } else if (isCursorOverButtonStart) {
    cursorImage = "media/icons/cursor4.png"; // Cursor image for the start button
  } else if (isCursorOverText) {
    cursorImage = "media/icons/cursor4.png"; // Cursor image for the text
  }  else if (isCursorOverSliderSpaces) {
    cursorImage = "media/icons/cursor5.png"; // Cursor image for the text
  } else if (isCursorOverSliderFloors) {
    cursorImage = "media/icons/cursor5.png"; // Cursor image for the text
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

  

  buttonElementBack.addEventListener('click', function() {
    window.location.href = 'simStep1.html'; // Replace with the desired URL of the button page
  });

  textElement.addEventListener('click', function() {
    window.location.href = 'index.html'; // Replace with the desired URL of the text page
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var slider = document.getElementById("mySlider1");
  var sliderValue = document.getElementById("slider-value1");

  console.log(sliderValue);

  slider.addEventListener("input", function() {
    var value = slider.value;
    sliderValue.textContent = value;
    sliderValue.setAttribute("data-value", value);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var slider = document.getElementById("mySlider2");
  var sliderValue = document.getElementById("slider-value2");

  console.log(sliderValue);

  slider.addEventListener("input", function() {
    var value = slider.value;
    sliderValue.textContent = value;
    sliderValue.setAttribute("data-value", value);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var slider1 = document.getElementById("mySlider1");
  var slider2 = document.getElementById("mySlider2");
  var slider1Value = document.getElementById("slider-value1");
  var slider2Value = document.getElementById("slider-value2");
  var startButton = document.getElementById("start-button");
  var nextButton = document.getElementById("next-button");
  var videoPlayer = document.getElementById("videoPlayer");

  var videoOptions = {
    "15-1": "media/iteration1-1Floors.mp4",
    "15-2": "media/iteration1-2Floors.mp4",
    "15-3": "media/iteration1-3Floors.mp4",
    "20-1": "media/iteration2-1Floors.mp4",
    "20-2": "media/iteration2-2Floors.mp4",
    "20-3": "media/iteration2-3Floors.mp4",
    "25-1": "media/iteration3-1Floors.mp4",
    "25-2": "media/iteration3-2Floors.mp4",
    "25-3": "media/iteration3-3Floors.mp4"
  };

  slider1.addEventListener("input", updateSliderValue);
  slider2.addEventListener("input", updateSliderValue);
  startButton.addEventListener("click", playSelectedVideo);

 nextButton.addEventListener("click", function() {
    var combination = slider1.value + "-" + slider2.value;
    var videoSrc = videoOptions[combination];

    if (!videoPlayer.paused || (videoSrc && videoPlayer.currentTime === 0)) {
      $('#message').fadeIn().delay(1500).fadeOut();
    } else {
      // Video has not been played yet, proceed to the next page
      var slider1Value = slider1.value;
      var slider2Value = slider2.value;
      window.location.href = "simStep4.html?slider1Value=" + slider1Value + "&slider2Value=" + slider2Value; // Replace with the desired URL
    }
  });

   function updateSliderValue() {
    slider1Value.textContent = slider1.value;
    slider2Value.textContent = slider2.value;
  }

  function playSelectedVideo() {
    var combination = slider1.value + "-" + slider2.value;
    var videoSrc = videoOptions[combination];

    if (videoSrc) {
      videoPlayer.src = videoSrc;
      videoPlayer.play();
    }
  }
});
