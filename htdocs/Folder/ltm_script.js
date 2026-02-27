const players = [
  { 
    id:-1, 
    name:"Info", 
    avatar:"https://yeeplist.page.gd/images/Info.png", 
    title:"Easter Event 2026", 
    score: "is based on each win using the Easter Event 2026 loudout", 
    rank:"https://yeeplist.page.gd/images/TierX.png",  
    categories:[
      {cat:"Easter Event", pos:"", img:"Loudout | One Perm Potion On Oponent And One Buble Seter For Own" },
    ]
  },  
    { 
    id:1, 
    name:"player", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Bunny Yeep", 
    score: 1, 
    rank:"https://yeeplist.page.gd/images/Newb.png",  
    categories:[
      {cat:"Easter Event", pos:"Score: 1", img:"#2" },
    ]
  },  
      { 
    id:2, 
    name:"player", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Bunny Yeep", 
    score: 4, 
    rank:"https://yeeplist.page.gd/images/Newb.png",  
    categories:[
      {cat:"Easter Event", pos:"Score: 4", img:"#1" },
    ]
  },  
];
const yeepsRanks = [
  { img:"LTM's", label:"" },
  { img:"ltm's", label:"are limited time events" },
  { img:"that", label:"dont do anything special" },
  { img:"yet,", label:"but maybe soon" },
  { img:"this", label:"is still in beta" },

];
let activeCategory = null;
    
const leaderboard = document.getElementById("leaderboard");
const searchInput = document.getElementById("search");
const sidebar = document.querySelector(".sidebar");
const wrap = document.querySelector(".wrap");

/* ---------- RENDER ---------- */
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
          `<span title="${c.cat} — ${c.pos}">${c.img}</span>`
        ).join("")}
      </div>
    `;

    el.onclick = () => openModal(p);
    leaderboard.appendChild(el);
  });
}

/* ---------- MODAL ---------- */
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
    <span title="${c.cat} — ${c.pos}">${c.img}</span>
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

/* ---------- SEARCH ---------- */
searchInput.addEventListener("input", ()=>{
  const q = searchInput.value.toLowerCase();

  let baseList = players;

  // 🔒 Respect active category
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
    "Easter Event": "Easter Event",
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

/* ---------- THE YEEPS LIST POPUP ---------- */
const yeepsBtn = document.getElementById("yeeplistBtn");
const rankPopup = document.getElementById("rankPopup");

yeepsBtn.addEventListener("click", (e) => {
  e.stopPropagation();

  // toggle popup
  if (rankPopup.style.display === "flex") {
    rankPopup.style.display = "none";
    return;
  }

  rankPopup.innerHTML = "";

  yeepsRanks.forEach(r => {
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <span title="${r.img}">${r.img}</span>
      <span>${r.label}</span>
    `;
    rankPopup.appendChild(row);
  });

  rankPopup.style.display = "flex";
});

// close when clicking outside
document.addEventListener("click", () => {
  rankPopup.style.display = "none";
});

// prevent closing when clicking inside popup
rankPopup.addEventListener("click", e => e.stopPropagation());

/* ---------- MENU TOGGLE ---------- */
document.getElementById("menuToggle").onclick = ()=>{
  sidebar.classList.toggle("open");
  wrap.classList.toggle("menu-open");
};

/* ---------- INITIAL ---------- */
renderList(players.sort((a,b)=>b.score-a.score));