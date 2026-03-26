const players = [
  { 
    id:1, 
    name:"Voffi", 
    avatar:"https://yeeplist.page.gd/images/Voffi.png", 
    title:"Mythic Yeep", 
    score:20, 
    rank:"https://yeeplist.page.gd/images/Mythic.png",  
    categories:[
      {cat:"Mace PvP", pos:"Tier: 2 | Low", img:"https://yeeplist.page.gd/images/Mace_Tier2.png"},
      {cat:"Credits And Testers", pos:"Dev", img:"https://yeeplist.page.gd/images/credits.png"}
    ]
  },  
  { 
    id:2, 
    name:"Yellowmellow13", 
    avatar:"https://yeeplist.page.gd/images/YellowM.jpeg", 
    title:"Mythic Yeep", 
    score:6, 
    team:"The Regulation",
    rank:"https://yeeplist.page.gd/images/Mythic.png",  
    categories:[
      {cat:"Mace PvP", pos:"Tier: 3 | Low", img:"https://yeeplist.page.gd/images/Mace_Tier3.png"},
      {cat:"Credits And Testers", pos:"Smp Tester", img:"https://yeeplist.page.gd/images/Desert.png"}
    ]
  },
    { 
    id:3, 
    name:"WooperYeeps", 
    avatar:"https://yeeplist.page.gd/images/Wooper.png", 
    title:"Mythic Yeep", 
    score:45, 
    team:"Divine Intervention",
    rank:"https://yeeplist.page.gd/images/Mythic.png",  
    categories:[
      {cat:"Mace PvP", pos:"Tier: 1 | Low", img:"https://yeeplist.page.gd/images/Mace_Tier1.png"},
      {cat:"Credits And Testers", pos:"Mace Tester", img:"https://yeeplist.page.gd/images/SwarmSlayer.jpg"}
    ]
  },
];
const yeepsRanks = [
  { img:"https://yeeplist.page.gd/images/Newb.png", label:"Newb Yeep (0-25)" },
  { img:"https://yeeplist.page.gd/images/Street.png", label:"Street Yeep (25-50)" },
  { img:"https://yeeplist.page.gd/images/Battle.png", label:"Battle Yeep (50-100)" },
  { img:"https://yeeplist.page.gd/images/Master.png", label:"Master Yeep (100-150)" },
  { img:"https://yeeplist.page.gd/images/Elite.png", label:"Elite Yeep (150-200)" },
  { img:"https://yeeplist.page.gd/images/War.png", label:"War Yeep (200-300)" },
  { img:"https://yeeplist.page.gd/images/Mythic.png", label:"Mythic Yeep (300-400)" },
  { img:"https://yeeplist.page.gd/images/Divine.png", label:"Divine Yeep (400+)" },
  { img:"https://yeeplist.page.gd/images/Bat_Tier1.png", label:"Unbloced: No Blocked items" },
  { img:"https://yeeplist.page.gd/images/Tier1.png", label:"Smp: Sesonal items banned, 10k Cotton 2x Damage" },
  { img:"https://yeeplist.page.gd/images/Mace_Tier1.png", label:"Mace: 10k Cotton, Macing Gadjets" },
  { img:"https://yeeplist.page.gd/images/Tier1.png", label:"Bat: Only Bats, One normal Cotton Generator" },
  { img:"https://yeeplist.page.gd/images/Tier1.png", label:"Snow: Freeze Gloves, Hot coco, Freeze item, wings" },
];
let activeCategory = null;
    
const leaderboard = document.getElementById("leaderboard");
const searchInput = document.getElementById("search");
const sidebar = document.querySelector(".sidebar");
const wrap = document.querySelector(".wrap");


function renderList(list){
  leaderboard.innerHTML = "";

  list.forEach(p=>{
    const el = document.createElement("div");
    el.className = "card";

    const teamHTML = p.team
      ? `<div class="player-team">${p.team}</div>`
      : "";

    el.innerHTML = `
      <div class="player-top">
        <div class="player-avatar" style="background-image:url(${p.avatar})"></div>

        <div class="player-info">
          <div class="player-name">${p.name}</div>
          <div class="player-rank">
            <img src="${p.rank}" />
            ${p.title}
          </div>
          <div class="player-score">Score: ${p.score}</div>

          ${teamHTML}
        </div>
      </div>

      <div class="categories-row">
        ${p.categories.map(c =>
          `<img src="${c.img}" title="${c.cat} — ${c.pos}" />`
        ).join("")}
      </div>
    `;

    el.onclick = () => openModal(p);
    leaderboard.appendChild(el);
  });
}

function openModal(p){
  document.getElementById("modalAvatar").src = p.avatar;
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalRankImg").src = p.rank;
  document.getElementById("modalRank").textContent = p.title;
  document.getElementById("modalScore").textContent = `Score: ${p.score}`;

  const teamEl = document.getElementById("modalTeam");

  if (p.team) {
    teamEl.textContent = `${p.team}`;
    teamEl.style.display = "flex";
  } else {
    teamEl.style.display = "none";
  }

  document.getElementById("modalCats").innerHTML =
    p.categories.map(c => `
  <div class="cat-tooltip">
    <img src="${c.img}" />
    <div class="cat-tooltip-text">
      ${c.cat}${c.pos ? " • " + c.pos : ""}
    </div>
  </div>
`).join("")


  document.getElementById("modal").classList.add("active");
}



function closeModal(){
  document.getElementById("modal").classList.remove("active");
}


searchInput.addEventListener("input", ()=>{
  const q = searchInput.value.toLowerCase();

  let baseList = players;

  
  if (activeCategory) {
    baseList = players.filter(p =>
      p.categories.some(c => c.cat.includes(activeCategory))
    );
  }

  const filtered = baseList.filter(p => {
    const matchesBasic =
      p.name.toLowerCase().includes(q) ||
      p.title.toLowerCase().includes(q) ||
      (p.team && p.team.toLowerCase().includes(q));

    const matchesCategories = p.categories.some(c =>
      c.cat.toLowerCase().includes(q) ||
      (c.pos && c.pos.toLowerCase().includes(q))
    );

    return matchesBasic || matchesCategories;
  });

  renderList(filtered);
});


const categoryMap = {
  all: null,
  bat: "Bat PvP",
  dagger: "Dagger PvP",
  glove: "Freeze Glove PvP",
  mace: "Mace PvP",
  shield: "Shield",
  fire: "Fire Axe PvP",
  sycthe: "Scythe PvP",
  other: "Other PvP",
  credits: "Credits And Testers"
};

document.querySelectorAll(".category-list button").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".category-list button")
      .forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    const key = btn.dataset.cat;
    let filtered;

    activeCategory = categoryMap[key] || null;

if (!activeCategory) {
  filtered = [...players];
} else {
  filtered = players.filter(p =>
    p.categories.some(c => c.cat.includes(activeCategory))
  );
}


    filtered.sort((a,b)=>b.score-a.score);
    renderList(filtered);

    sidebar.classList.remove("open");
    wrap.classList.remove("menu-open");
  });
});


const yeepsBtn = document.getElementById("yeeplistBtn");
const rankPopup = document.getElementById("rankPopup");

yeepsBtn.addEventListener("click", (e) => {
  e.stopPropagation();


  if (rankPopup.style.display === "flex") {
    rankPopup.style.display = "none";
    return;
  }

  rankPopup.innerHTML = "";

  yeepsRanks.forEach(r => {
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <img src="${r.img}">
      <span>${r.label}</span>
    `;
    rankPopup.appendChild(row);
  });

  rankPopup.style.display = "flex";
});


document.addEventListener("click", () => {
  rankPopup.style.display = "none";
});


rankPopup.addEventListener("click", e => e.stopPropagation());


document.getElementById("menuToggle").onclick = ()=>{
  sidebar.classList.toggle("open");
  wrap.classList.toggle("menu-open");
};


renderList(players.sort((a,b)=>b.score-a.score));
