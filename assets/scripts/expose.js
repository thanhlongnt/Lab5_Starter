// expose.js

// selecting a horn

// TODO

// change volume on slider

// TODO
document.getElementById('volume').addEventListener("input", selectVolume);

function selectVolume() {
  const volumeSlider = document.getElementById('volume')
  const volumeImg = document.querySelector("#volume-controls img");
  volumeSlider.addEventListener('input', function(event) {
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
  
  });
}





window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}