// expose.js

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

// TODO
document.getElementById('volume').addEventListener("input", selectVolume);

function selectVolume() {
  const volumeSlider = document.getElementById('volume')
  const volumeImg = document.querySelector("#volume-controls img");
  console.log(volumeSlider.value);
  
  if (volumeSlider.value == 0) {
    volumeImg.src = "assets/icons/volume-level-0.svg";
  } 
  else if ( 1 < volumeSlider.value && volumeSlider.value < 33) {
    volumeImg.src = "assets/icons/volume-level-1.svg";
  } 
  else if (33 < volumeSlider.value && volumeSlider.value < 67) {
    volumeImg.src = "assets/icons/volume-level-2.svg";
  } 
  else {
    volumeImg.src = "assets/icons/volume-level-3.svg";
  }
}

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}