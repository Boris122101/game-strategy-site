const strategies = [
  {
    game: "Valorant",
    tip: "Use agents like Brimstone to control areas with smoke.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
  },
  {
    game: "Valorant",
    tip: "Play around utility, don't take dry fights.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
  },
  {
    game: "Valorant",
    tip: "Learn lineups for post-plant plays with agents like Viper or KAY/O.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
  },
  {
    game: "Fortnite",
    tip: "Practice building in Creative Mode to get faster.",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732084.png"
  },
  {
    game: "Fortnite",
    tip: "Use edit courses to improve your reaction time.",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732084.png"
  },
  {
    game: "Fortnite",
    tip: "Carry mobility like Rift-to-Gos or Shockwaves.",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732084.png"
  },
  {
    game: "Minecraft",
    tip: "Always carry a water bucket to put out fires or break falls.",
    icon: "https://cdn-icons-png.flaticon.com/512/188/188987.png"
  },
  {
    game: "Minecraft",
    tip: "Light up caves with torches to stop mobs.",
    icon: "https://cdn-icons-png.flaticon.com/512/188/188987.png"
  },
  {
    game: "Minecraft",
    tip: "Enchant tools to speed up mining and combat.",
    icon: "https://cdn-icons-png.flaticon.com/512/188/188987.png"
  },
  {
    game: "Minecraft",
    tip: "Build a farm early to sustain food supply.",
    icon: "https://cdn-icons-png.flaticon.com/512/188/188987.png"
  },
  {
    game: "League of Legends",
    tip: "Focus on CSing early for a gold lead.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968804.png"
  },
  {
    game: "League of Legends",
    tip: "Always ward objectives before they spawn.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968804.png"
  },
  {
    game: "League of Legends",
    tip: "Communicate cooldowns during teamfights.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968804.png"
  },
  {
    game: "Apex Legends",
    tip: "Stick with your squad and ping often.",
    icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
  },
  {
    game: "Apex Legends",
    tip: "Use high ground to your advantage.",
    icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
  },
  {
    game: "Apex Legends",
    tip: "Swap armor quickly during fights.",
    icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
  },
  {
    game: "Call of Duty",
    tip: "Use cover and audio cues to win close fights.",
    icon: "https://cdn-icons-png.flaticon.com/512/1040/1040992.png"
  },
  {
    game: "Call of Duty",
    tip: "Reload only behind cover, not in the open.",
    icon: "https://cdn-icons-png.flaticon.com/512/1040/1040992.png"
  },
  {
    game: "Call of Duty",
    tip: "Use Ghost perk to stay off radar.",
    icon: "https://cdn-icons-png.flaticon.com/512/1040/1040992.png"
  },
  {
    game: "Call of Duty",
    tip: "Avoid using streaks indoors if they rely on line of sight.",
    icon: "https://cdn-icons-png.flaticon.com/512/1040/1040992.png"
  },
  {
    game: "CS:GO",
    tip: "Practice smokes and flashes for bombsites.",
    icon: "https://cdn-icons-png.flaticon.com/512/3334/3334896.png"
  },
  {
    game: "CS:GO",
    tip: "Always check common corners on entry.",
    icon: "https://cdn-icons-png.flaticon.com/512/3334/3334896.png"
  },
  {
    game: "CS:GO",
    tip: "Use shift to walk silently.",
    icon: "https://cdn-icons-png.flaticon.com/512/3334/3334896.png"
  },
  {
    game: "CS:GO",
    tip: "Stick with the team and trade kills.",
    icon: "https://cdn-icons-png.flaticon.com/512/3334/3334896.png"
  },
  {
    game: "Among Us",
    tip: "Fake tasks when you're the Impostor.",
    icon: "https://cdn-icons-png.flaticon.com/512/287/287221.png"
  },
  {
    game: "Among Us",
    tip: "Don't kill near security cameras.",
    icon: "https://cdn-icons-png.flaticon.com/512/287/287221.png"
  },
  {
    game: "Among Us",
    tip: "Use sabotage to separate and isolate players.",
    icon: "https://cdn-icons-png.flaticon.com/512/287/287221.png"
  },
];


const container = document.getElementById("strategy-container");
const searchInput = document.getElementById("searchInput");

function displayStrategies(filteredStrategies) {
  container.innerHTML = "";
  filteredStrategies.forEach(strategy => {
    const div = document.createElement("div");
    div.className = "strategy";
    div.innerHTML = `
      <div class="strategy-header">
        <img src="${strategy.icon}" alt="${strategy.game} icon" class="game-icon" />
        <h2>${strategy.game}</h2>
      </div>
      <p>${strategy.tip}</p>
    `;
    container.appendChild(div);
  });
}

displayStrategies(strategies);

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");
  const filtered = strategies.filter(s =>
    s.game.toLowerCase().replace(/[^a-z0-9]/g, "").includes(value)
  );
  displayStrategies(filtered);
});
  {
    game: "Overwatch",
    tip: "Use high mobility heroes to contest objectives quickly.",
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969059.png"
  },
  {
    game: "Overwatch",
    tip: "Group up before pushing — solo plays usually fail.",
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969059.png"
  },
  {
    game: "Overwatch",
    tip: "Focus fire: call and target the same enemy as a team.",
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969059.png"
  },
  {
    game: "Overwatch",
    tip: "Use ultimates in combos, not randomly.",
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969059.png"
  },
  {
    game: "Overwatch",
    tip: "Protect your healers — they're the backbone of the team.",
    icon: "https://cdn-icons-png.flaticon.com/512/5969/5969059.png"
  },
  {
    game: "Roblox",
    tip: "Use trusted sources when installing new mods or games.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968843.png"
  },
  {
    game: "Roblox",
    tip: "In obbies, align your camera behind your character for better control.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968843.png"
  },
  {
    game: "Roblox",
    tip: "Join groups and events for free gear and items.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968843.png"
  },
  {
    game: "Roblox",
    tip: "Try multiple game modes to improve reflexes and creativity.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968843.png"
  },
  {
    game: "Elden Ring",
    tip: "Use Spirit Ashes to distract bosses and create openings.",
    icon: "https://cdn-icons-png.flaticon.com/512/1230/1230671.png"
  },
  {
    game: "Elden Ring",
    tip: "Level Vigor early to avoid being one-shot.",
    icon: "https://cdn-icons-png.flaticon.com/512/1230/1230671.png"
  },
  {
    game: "Elden Ring",
    tip: "Use terrain and horseback mobility in open-world fights.",
    icon: "https://cdn-icons-png.flaticon.com/512/1230/1230671.png"
  },
  {
    game: "Elden Ring",
    tip: "Craft arrows and bombs for ranged pressure without using FP.",
    icon: "https://cdn-icons-png.flaticon.com/512/1230/1230671.png"
  },
  {
    game: "Zelda: Tears of the Kingdom",
    tip: "Use fuse mechanics to create powerful weapons.",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732228.png"
  },
  {
    game: "Zelda: Tears of the Kingdom",
    tip: "Explore sky islands early for extra hearts and stamina.",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732228.png"
  },
  {
    game: "Zelda: Tears of the Kingdom",
    tip: "Use Zonai devices strategically in puzzle areas.",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732228.png"
  },
  {
    game: "Zelda: Tears of the Kingdom",
    tip: "Save often — auto-saves may not help during tricky fights.",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732228.png"
  },
  {
    game: "Rocket League",
    tip: "Focus on positioning more than flashy mechanics.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968792.png"
  },
  {
    game: "Rocket League",
    tip: "Rotate back post to cover net properly.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968792.png"
  },
  {
    game: "Rocket League",
    tip: "Use quick chat to communicate plays.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968792.png"
  },
  {
    game: "Rocket League",
    tip: "Don’t double commit — one challenge, one support.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968792.png"
  },
  {
    game: "Star Wars: Battlefront",
    tip: "Play the objective, not just kills.",
    icon: "https://cdn-icons-png.flaticon.com/512/950/950252.png"
  },
  {
    game: "Star Wars: Battlefront",
    tip: "Use cover often — open areas get you killed quickly.",
    icon: "https://cdn-icons-png.flaticon.com/512/950/950252.png"
  },
  {
    game: "Star Wars: Battlefront",
    tip: "Pick heroes based on map type and choke points.",
    icon: "https://cdn-icons-png.flaticon.com/512/950/950252.png"
  },
  {
    game: "Star Wars: Battlefront",
    tip: "Use ion weapons vs. vehicles and turrets.",
    icon: "https://cdn-icons-png.flaticon.com/512/950/950252.png"
  },
  {
    game: "Dead by Daylight",
    tip: "Use pallets smartly — don’t waste them early.",
    icon: "https://cdn-icons-png.flaticon.com/512/1121/1121790.png"
  },
  {
    game: "Dead by Daylight",
    tip: "Loop killers around strong structures.",
    icon: "https://cdn-icons-png.flaticon.com/512/1121/1121790.png"
  },
  {
    game: "Dead by Daylight",
    tip: "Use perks like Spine Chill and Borrowed Time for safety.",
    icon: "https://cdn-icons-png.flaticon.com/512/1121/1121790.png"
  },
  {
    game: "Dead by Daylight",
    tip: "Don’t rush saves when the killer is nearby.",
    icon: "https://cdn-icons-png.flaticon.com/512/1121/1121790.png"
  },
