// explore.js

// select
// use api to select correct audio files for each dropdown



// push to talk
// use api to text to speech

function pushToTalk() {
  document.querySelector("button").addEventListener("click", function () {
      const text = document.getElementById("text-to-speak").value;
      console.log(text);

      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }, false
  );
}

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  pushToTalk();
}