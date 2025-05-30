const wordList = [
  "mumbai",
  "delhi",
  "kolkata",
  "chennai",
  "bengaluru",
  "hyderabad",
  "ahmedabad",
  "pune",
  "jaipur",
  "lucknow",
  "kanpur",
  "nagpur",
  "visakhapatnam",
  "bhopal",
  "patna",
  "vadodara",
  "ludhiana",
  "agra",
  "nashik",
  "faridabad"
];

let currentWord = "";
let scrambled = "";
let score = 0;

function scramble(word) {
  return word.split('').sort(() => Math.random() - 0.5).join('');
}

function newWord() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  currentWord = wordList[randomIndex];
  scrambled = scramble(currentWord);
  while (scrambled === currentWord) {
    scrambled = scramble(currentWord); // avoid unscrambled match
  }
  document.getElementById("scrambled-word").textContent = scrambled;
  document.getElementById("user-input").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  const userInput = document.getElementById("user-input").value.toLowerCase().trim();
  if (userInput === currentWord) {
    document.getElementById("feedback").textContent = "✅ Correct!";
    score++;
    document.getElementById("score").textContent = "Score: " + score;
    setTimeout(newWord, 1000);
  } else {
    document.getElementById("feedback").textContent = "❌ Try again!";
  }
}

// Initialize game
window.onload = newWord;
