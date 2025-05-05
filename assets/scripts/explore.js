// explore.js

const synth = window.speechSynthesis;
let voices = [];

// select
// use api to select correct audio files for each dropdown

function selectVoice() {
  const voiceSelect = document.getElementById("voice-select");

  function populateVoices() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  // ensure voices are loaded before populating the select element
  synth.addEventListener("voiceschanged", populateVoices);
  populateVoices();
}

// push to talk
// use api to text to speech
function pushToTalk() {
  document.querySelector("button").addEventListener("click", function () {
      const text = document.getElementById("text-to-speak").value;
      const img = document.querySelector("#explore img");
      const voiceSelect = document.getElementById("voice-select");
      console.log(text);

      const utterance = new SpeechSynthesisUtterance(text);      

      utterance.onstart = () => {
        img.src = "assets/images/smiling-open.png";
      };
      
      utterance.onend = () => {
        img.src = "assets/images/smiling.png";
      };

      const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterance.voice = voices[i];
          break;
        }
      }

      speechSynthesis.speak(utterance);

      // img.src = "assets/images/smiling.png"
      // img.src = "assets/images/smiling.png"

    }, false
  );
}

window.addEventListener('DOMContentLoaded', init);

function init() {
  pushToTalk();
  selectVoice();
}