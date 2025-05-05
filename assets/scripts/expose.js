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

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}