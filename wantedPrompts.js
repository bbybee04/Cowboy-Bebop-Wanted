function shufflePhrases(name = "?") {
  const firstLetter = name ? name.charAt(0).toUpperCase() : "?";

  /*const name = document.getElementById("nameInput").value.trim();
  const firstLetter = name ? name.charAt(0).toUpperCase() : "?";*/

  const phrases1 = [
    `Name starting with "${firstLetter}"`,
    "Losing their vape",
    "For being too prideful",
    "For being queer",
    "For not registering",
    "For not checking in",
    "Wanted for being <br>an energy drink addict",
    "Wanted for trying <br>to check in late",
    "Being a picky eater",
    "Being a short masc",
    "Sleeping in past 12",
    "Going to bed after <br>sunrise",
    "Staying with your <br>toxic partner",
    "Going back to that toxic ex",
    "Being ginormous",
    "Being pick me",
    "Not listening to music",
    "Being a performative <br>masc",
    "Being friends with <br>your ex",
    "Not drinking water",
    "Not eating",
    "Dressing like a bum",
    "Being performative <br>male coded",
    "Looking like you <br>own a labubu",
    "Loving your job",
    "Being an alcoholic",
    "Drinking black coffee",
    "Being unc",
    "Looking like a <br>heterosexual",
    "Party hopping",
    "Being too nonchalant"
  ];

  const phrases2 = [
  "Stealing spaceships", "Time travel without<br> a permit", "Smuggling instant<br> ramen", "Jaywalking in zero <br>gravity",
  "Downloading consciousness <br>illegally", "Evading space taxes", "Pirating intergalactic <br>radio", "Trespassing",
  "Vandalizing hologram <br>billboards", "Vandalizing warp gates", "Hacking satellites", "Using fake ID",
  "Fighting in noodle <br>bars", "Selling counterfeit <br>moon rocks", "Throwing shade in <br>public", "Unauthorized teleportation",
  "Starting a cult", "Loitering", "Smuggling alien pets", "Graffitiing star cruisers", "Overusing time loops", "Arguing with robots",
  "Selling counterfeit IDs", "Telling bad jokes", "Insider Trading", "Hacking vending machines", "Illegal street racing",
  "Overusing AI assistants", "Hijacking cargo shipments", "Forging holographic IDs", "Evading planetary customs",
  "Possession of restricted AI", "Defacing propaganda <br>posters", "Breaking out of <br>asteroid prison", "Unpaid parking tickets <br>(312 of them)",
  "Building illegal robots", "Crashing space parties", "Breaking the <br>4th wall"];

  const phrases3 = ["Murder", "Manslaughter", "Armed Robbery", "Burglary", "Grand Theft Auto", "Grand larceny",
  "Shoplifting", "Pickpocketing", "Identity theft", "Embezzlement", "Fraud", "Forgery", "Money laundering", "Arson",
  "Vandalism", "Drug trafficking", "Extortion"];

  /*/ Shuffle using Fisher-Yates
  for (let i = phrases1.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [phrases1[i], phrases1[j]] = [phrases1[j], phrases1[i]];
  }*/

  const shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  shuffle(phrases1);
  shuffle(phrases2);
  shuffle(phrases3);

  // Pick one from each
  /*const phrase = [phrases1[Math.floor(Math.random() * phrases1.length)],
  phrases2[Math.floor(Math.random() * phrases2.length)],
  phrases3[Math.floor(Math.random() * phrases3.length)]];*/

  
  const wp1 = phrases1[Math.floor(Math.random() * phrases1.length)];
  const wp2 = phrases2[Math.floor(Math.random() * phrases2.length)];
  const wp3 = phrases3[Math.floor(Math.random() * phrases3.length)];

  /*//Display shuffled phrases
  const output = document.getElementById("output");
  output.innerHTML = "";
  phrases1.forEach(phrase => {
    const li = document.createElement("li");
    li.textContent = phrase;
    output.appendChild(li);
  });

  const output = document.getElementById("output");
  if (output) {
    output.textContent = phrase;   // just show the random combined string
  }

  output.innerHTML = phrase.replace(/\n/g, "\n");*/
  return {
    wp1,
    wp2,
    wp3,
    combined: `|${wp1}|<br>|${wp2}|<br>|${wp3}|`
  };
}

