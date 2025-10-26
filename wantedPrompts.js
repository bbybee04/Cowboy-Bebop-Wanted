function shufflePhrases() {
  const name = document.getElementById("nameInput").value.trim();
  const firstLetter = name ? name.charAt(0).toUpperCase() : "?";

  const phrases = [
    `Name starting with "${firstLetter}"`,
    "Losing their vape",
    "For being too prideful",
    "For being queer",
    "For not registering",
    "For not checking in",
    "Wanted for being an energy drink addict",
    "Wanted for trying to check in late",
    "Being a picky eater",
    "Being a short masc",
    "Sleeping in past 12",
    "Going to bed after sunrise",
    "Staying with your toxic partner",
    "Going back to that toxic ex",
    "Being ginormous",
    "Being pick me",
    "Not listening to music",
    "Being a performative masc",
    "Being friends with your ex",
    "Not drinking water",
    "Not eating",
    "Dressing like a bum",
    "Being performative male coded",
    "Looking like you own a labubu",
    "Loving your job",
    "Being an alcoholic",
    "Drinking black coffee",
    "Being unc",
    "Looking like a heterosexual",
    "Party hopping"
  ];

  // Shuffle using Fisher-Yates
  for (let i = phrases.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [phrases[i], phrases[j]] = [phrases[j], phrases[i]];
  }

  // Display shuffled phrases
  const output = document.getElementById("output");
  output.innerHTML = "";
  phrases.forEach(phrase => {
    const li = document.createElement("li");
    li.textContent = phrase;
    output.appendChild(li);
  });
}