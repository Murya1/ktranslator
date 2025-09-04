// Simple login authentication
const validUsername = "admin";
const validPassword = "12345";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  if (user === validUsername && pass === validPassword) {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("translatorContainer").style.display = "block";
  } else {
    message.style.color = "red";
    message.innerText = "Invalid username or password!";
  }
}

// Dataset (English → Karai-Karai)
let translationDict = {
  "hello": "sannu",
  "food": "abinci",
  "water": "ruwa",
  "house": "gida",
  "school": "makaranta",
  "friend": "aboki",
  "love": "kauna",
  "book": "littafi",
  "go": "je",
  "come": "zo"
};

// Translate word
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("translateBtn").addEventListener("click", () => {
    const word = document.getElementById("englishWord").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");

    if (!word) {
      resultDiv.innerHTML = "<span style='color:red;'>Please enter a word.</span>";
      return;
    }

    const translation = translationDict[word] || "Translation not found!";
    resultDiv.innerHTML = `<b>Karai-Karai:</b> ${translation}`;
  });
});
