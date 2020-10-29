const footerEl = document.querySelector(".footer");
const webAdressInput = document.querySelector(".footer-input");
const webAdressButtonEl = document.querySelector(".footer-button");

// Show web-adress
webAdressInput.value = location.href;

webAdressButtonEl.addEventListener("click", copyWebAdress);

function copyWebAdress() {
  webAdressInput.select();
  document.execCommand("copy");
}

// Get random activity to do together

// Html elements
const randomContainer = document.querySelector(".random-activity-container");
const randomButton = document.querySelector(".random-button");
const activityContainer = document.querySelector(".activity-container");

// Array with activities
let activities = [
  "Baka en kaka",
  "Se på film",
  "Spela Hero Realms",
  "Öva på gitarr",
  "Skrik-sjunga tillsammans",
  "Baka bröd",
  "Ta en fika på stan",
  "Frågesport",
  "Dricka en kopp te",
  "Ta en promenad",
  "Byta massage med varandra",
  "Måla tillsammans",
  "Titta på Så mycket bättre",
  "Titta på Husdrömmar",
  "Titta på New Girl",
  "Planera något roligt äventyr",
  "Visa varandra roliga mems",
  "Prata om livets stora frågor",
  "Gör en fruktsallad och ät den",
  "Besök ett museeum",
  "Dela musik som betyder något för en",
  "Ta en powernap tillsammans",
  "Massera händer/fötter på varandra",
  "Titta på Bäst i test",
  "Titta på något TED-talk",
  "Laga en maträtt vi aldrig gjort förut",
  "Bada i havet",
];

// Get random activity from array when button is clicked
randomButton.addEventListener("click", () => {
  activityContainer.innerHTML = "";
  const randomActivity = document.createElement("p");
  randomActivity.className = "random-output";
  randomActivity.innerText =
    activities[Math.floor(Math.random() * activities.length)];
  activityContainer.appendChild(randomActivity);
});
