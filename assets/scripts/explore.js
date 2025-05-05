// explore.js

// select
// use api to select correct audio files for each dropdown



// push to talk
// use api to text to speech
const synth = window.speechSynthesis;
function pushToTalk() {
  document.querySelector("button").addEventListener("click", function () {
      const text = document.getElementById("text-to-speak").value;
      const img = document.querySelector("#explore img");
      console.log(text);

      const utterance = new SpeechSynthesisUtterance(text);      

      utterance.onstart = () => {
        img.src = "assets/images/smiling-open.png";
      };
      
      utterance.onend = () => {
        img.src = "assets/images/smiling.png";
      };

      speechSynthesis.speak(utterance);

      // img.src = "assets/images/smiling.png"
      // img.src = "assets/images/smiling.png"

    }, false
  );
}

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  pushToTalk();
}