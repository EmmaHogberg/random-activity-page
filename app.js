// Html elements
const themeButtonsEl = document.querySelector(".theme-buttons");
const randomContainerEl = document.querySelector(".random-activity-container");
const activityButtonEl = document.querySelector(".random-button");
const tvButtonEl = document.querySelector(".tv-button");
const activityContainerEl = document.querySelector(".activity-container");

// Array with activities
const activities = [
  "Baka en kaka",
  "Titta på film",
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
  "Spela badminton",
  "Pyssla med lera",
  "Ta en promenad i skogen",
  "Titta på Fab 5",
  "Läsa högt ur en bok tillsammans",
  "Titta på New Girl",
  "Planera något roligt äventyr",
  "Lyssna på Helgsmål i P1",
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
  "Skapa poesi om vardagen",
  "Bygg något coolt av gipsbindor",
  "Utmana varandra på ett parti kubb",
  "Titta på Det sitter i väggarna",
  "Titta på The Alienist",
  "Laga något i lägenheten som vi länge tänkt fixa",
  "Lyssna på Sommar i P1",
];

// Listen for click on activity-button and get random activity
activityButtonEl.addEventListener("click", getRandomActivity);

// Function to get random activity from activitis (array)
function getRandomActivity() {
  activityContainerEl.innerHTML = "";
  const randomActivity = document.createElement("p");
  randomActivity.className = "activity-output";
  randomActivity.innerText =
    activities[Math.floor(Math.random() * activities.length)];
  activityContainerEl.appendChild(randomActivity);
}

// Listen for click on TV-button and get random TV activity
tvButtonEl.addEventListener("click", getTvActivity);

// Function to filter random TV activity from activitis (array)
function getTvActivity() {
  activityContainerEl.innerHTML = "";
  const randomActivity = document.createElement("p");
  randomActivity.className = "activity-output";
  const tvActivities = activities.filter((activity) =>
    activity.includes("Titta")
  );
  randomActivity.innerText =
    tvActivities[Math.floor(Math.random() * tvActivities.length)];
  activityContainerEl.appendChild(randomActivity);
}

// Listening for click on colortheme-buttons
themeButtonsEl.addEventListener("click", addThemeColor);

// Function to change color theme on site
function addThemeColor(element) {
  const themeEl = document.querySelectorAll(".theme");
  const selectedColor = element.target.dataset.color;
  for (let i = 0; i < themeEl.length; i++) {
    themeEl[i].className = "theme " + selectedColor;
  }
}

// Footer html-element
const footerEl = document.querySelector("footer");
const reloadButtonEl = document.querySelector(".reload-button");
const webAdressInputEl = document.querySelector(".footer-input");
const webAdressButtonEl = document.querySelector(".footer-button");

// Listen for click on reload-button and reload site with location.reload when clicked
reloadButtonEl.addEventListener("click", () => {
  location.reload();
});

// Listen for click and copy location-href to clipboard
webAdressInputEl.value = location.href;

webAdressButtonEl.addEventListener("click", () => {
  webAdressInputEl.select();
  document.execCommand("copy");
});

// Add info about host and protocol
const host = document.createElement("p");
host.innerText = `This site is hosted by ${location.host} and uses the "${location.protocol}"-protocol`;
footerEl.appendChild(host);

// Console.log to log out all activities
console.log(activities);
