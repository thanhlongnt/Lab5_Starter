// expose.js
const jsConfetti = new JSConfetti();

// selecting a horn

function selectHorn() {
  document.getElementById("horn-select").addEventListener("input", function () {
    const hornSelect = document.getElementById("horn-select");
    const hornImage = document.querySelector("img");
    const hornAudio = document.querySelector("audio");
    
    if (hornSelect.value === "air-horn") {
      hornImage.src = "./assets/images/air-horn.svg";
      hornAudio.src = "./assets/audio/air-horn.mp3";
    } else if (hornSelect.value === "car-horn") {
      hornImage.src = "./assets/images/car-horn.svg";
      hornAudio.src = "./assets/audio/car-horn.mp3";
    } else if (hornSelect.value === "party-horn") {
      hornImage.src = "./assets/images/party-horn.svg";
      hornAudio.src = "./assets/audio/party-horn.mp3";
    } else {
      hornImage.src = "./assets/images/no-image.png";
      hornAudio.src = "";
    }
  }, false);
}

// change volume on slider

function selectVolume() {
  document.getElementById('volume').addEventListener("input", function () {
    const volumeSlider = document.getElementById('volume')
    const volumeImg = document.querySelector("#volume-controls img");
    const audio = document.querySelector("#expose audio");

    console.log(volumeSlider.value);
    audio.volume = volumeSlider.value / 100
    console.log(audio.volume)
    
    if (volumeSlider.value == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    } 
    else if (volumeSlider.value < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    } 
    else if (volumeSlider.value < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    } 
    else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
    
  }, false);
}

// play sound when button is clicked
function playSound() {
  const hornSelect = document.getElementById("horn-select");
  const hornAudio = document.querySelector("audio");
  const playButton = document.querySelector("button");
  
  playButton.addEventListener("click", function () {
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
    hornAudio.play();
  }, false);
}


window.addEventListener('DOMContentLoaded', init);

function init() {
  selectHorn();
  selectVolume();
  playSound();
}