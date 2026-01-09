let selectedSuspect = null;
let questionsAsked = 0;
const MAX_QUESTIONS = 3;

const suspectsDiv = document.getElementById("suspects");
const interrogationDiv = document.getElementById("interrogation");
const suspectName = document.getElementById("suspectName");
const response = document.getElementById("response");

// Display suspects
suspects.forEach((suspect, index) => {
  const btn = document.createElement("button");
  btn.innerText = suspect.name;
  btn.onclick = () => selectSuspect(index);
  suspectsDiv.appendChild(btn);
});

function selectSuspect(index) {
  selectedSuspect = suspects[index];
  questionsAsked = 0;
  suspectName.innerText = "Interrogating: " + selectedSuspect.name;
  response.innerText = "";
  interrogationDiv.style.display = "block";
}

function askQuestion(qIndex) {
  if (!selectedSuspect) return;

  if (questionsAsked >= MAX_QUESTIONS) {
    response.innerText = "❌ No more questions allowed!";
    return;
  }

  response.innerText = selectedSuspect.answers[qIndex];
  questionsAsked++;

  if (questionsAsked === MAX_QUESTIONS && selectedSuspect.guilty) {
    response.innerText += "\n⚠️ Something feels suspicious...";
  }
}

