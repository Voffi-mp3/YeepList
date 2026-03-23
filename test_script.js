const players = [
  { 
    id:1, 
    name:"Voffi", 
    avatar:"https://yeeplist.page.gd/images/Voffi.png", 
    title:"Mythic Yeep", 
    score:30+60+45+60+45+45+45+20, 
    rank:"https://yeeplist.page.gd/images/Mythic.png",  
    categories:[
      {cat:"Bat PvP", pos:"Tier: 3 | Dual", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:"Dagger PvP", pos:"Tier: 1 | Dual", img:"https://yeeplist.page.gd/images/Bat_Tier1.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 2 | Dual", img:"https://yeeplist.page.gd/images/Freeze_Tier2.png"},
      {cat:"Mace PvP", pos:"Tier: 1 | Wing", img:"https://yeeplist.page.gd/images/Mace_Tier1.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Tier2.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 2 | Shield", img:"https://yeeplist.page.gd/images/Axe_Tier2.png"},
      {cat:"Scythe PvP", pos:"Tier: 2 | Shield", img:"https://yeeplist.page.gd/images/Scythe_Tier2.png"},
      {cat:"Other PvP", pos:"Tier: 3 | Drumstick, Shield", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:"Credits And Testers", pos:"Creator", img:"https://yeeplist.page.gd/images/credits.png"}
    ]
  },
  { 
    id:2, 
    name:"Gmonk", 
    avatar:"https://yeeplist.page.gd/images/Gmonk.png", 
    title:"Battle Yeep", 
    score:6+20+0+0+30+0+0+20, 
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:"Bat PvP", pos:"Retired Tier: 6", img:"https://yeeplist.page.gd/images/Tier6.png"},
      {cat:"Dagger PvP", pos:"Retired Tier: 4", img:"https://yeeplist.page.gd/images/Bat_Tier4.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Retired Tier: 3", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Retired Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"}
    ]
  },
  { 
    id:3, 
    name:"Minty", 
    avatar:"https://yeeplist.page.gd/images/Minty.png", 
    title:"Newb Yeep", 
    score:1+0+1+2+0+0+0+0, 
    rank:"https://yeeplist.page.gd/images/Newb.png",
    categories:[
      {cat:"Bat PvP", pos:"Retired Tier: 10", img:"https://yeeplist.page.gd/images/Tier10.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Freeze Glove PvP", pos:"Retired Tier: 10", img:"https://yeeplist.page.gd/images/Freeze_Tier10.png"},
      {cat:"Mace PvP", pos:"Retired Tier: 9", img:"https://yeeplist.page.gd/images/Mace_Tier9.png"},
      {cat:".S+W.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      
    ]
  },
  { 
    id:4, 
    name:"Carp", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Newb Yeep", 
    score:0+0+0+0+0+0+0+10, 
    rank:"https://yeeplist.page.gd/images/Newb.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S+W.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Retired Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"}
    ]
  },
  { 
    id:5, 
    name:"Dracoo", 
    avatar:"https://yeeplist.page.gd/images/Dracoo.png", 
    title:"Newb Yeep", 
    score:1+2+1+2+1+1+0+6, 
    rank:"https://yeeplist.page.gd/images/Newb.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 10", img:"https://yeeplist.page.gd/images/Tier10.png"},
      {cat:"Dagger PvP", pos:"Tier: 9", img:"https://yeeplist.page.gd/images/Bat_Tier9.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 10", img:"https://yeeplist.page.gd/images/Freeze_Tier10.png"},
      {cat:"Mace PvP", pos:"Tier: 9", img:"https://yeeplist.page.gd/images/Mace_Tier9.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 10", img:"https://yeeplist.page.gd/images/Tier10.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 10", img:"https://yeeplist.page.gd/images/Axe_Tier10.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Tier6.png"}
    ]
  },
    
  { 
    id:6, 
    name:"Ek", 
    avatar:"https://yeeplist.page.gd/images/Ek.jpeg", 
    title:"Master Yeep", 
    score:0+0+0+20+20+30+0+30, 
    team:"The Pirates",
    rank:"https://yeeplist.page.gd/images/Master.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Mace PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Mace_Tier4.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Axe_Tier3.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Tier3.png"}
    ]
  },
    
  { 
    id:7, 
    name:"Frost Da Monk", 
    avatar:"https://yeeplist.page.gd/images/Frost.png", 
    title:"Elite Yeep", 
    score:30+20+10+0+45+60+0+10, 
    team:"Cross Guild",
    rank:"https://yeeplist.page.gd/images/Elite.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:"Dagger PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Bat_Tier4.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Freeze_Tier5.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Tier2.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Axe_Tier1.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"}
    ]
  },
    
  { 
    id:8, 
    name:"Hawk Eye Mihawk", 
    avatar:"https://yeeplist.page.gd/images/Mihawk.jpeg", 
    title:"Street Yeep", 
    score:30+0+4+0+0+0+0+0, 
    team:"Cross Guild",
    rank:"https://yeeplist.page.gd/images/Street.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 7", img:"https://yeeplist.page.gd/images/Freeze_Tier7.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S+W.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
    ]
  },
    
  { 
    id:9, 
    name:"Drippy The Drifter", 
    avatar:"https://yeeplist.page.gd/images/Drippy.jpeg", 
    title:"Street Yeep", 
    score:0+0+20+6+10+0+0+10, 
    team:"The Pirates",
    rank:"https://yeeplist.page.gd/images/Street.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Freeze Glove PvP", pos:"Tier 4", img:"https://yeeplist.page.gd/images/Freeze_Tier4.png"},
      {cat:"Mace PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Mace_Tier6.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"}
    ]
  },
    
  { 
    id:10, 
    name:"EnxvinityTXVr", 
    avatar:"https://yeeplist.page.gd/images/Txvr.jpeg", 
    title:"Battle Yeep", 
    score:10+0+0+6+10+20+0+6, 
    team:"The Pirates",
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Mace PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Mace_Tier6.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Axe_Tier4.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Tier6.png"}
    ]
  },
    
  { 
    id:11, 
    name:"Yars", 
    avatar:"https://yeeplist.page.gd/images/Yars.jpeg", 
    title:"Street Yeep", 
    score:20+0+0+0+20+0+0+6, 
    rank:"https://yeeplist.page.gd/images/Street.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Tier6.png"}
    ]
  },
  { 
    id:12, 
    name:"kingJaxonVr", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Battle Yeep", 
    score:30+0+0+0+20+0+0+20, 
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"}
    ]
  },
    
  { 
    id:13, 
    name:"WooperYeepes", 
    avatar:"https://yeeplist.page.gd/images/Wooper.png", 
    title:"Divine Yeep", 
    score:60+60+60+60+60+60+60+60,
    team:"Divine Intervention",
    rank:"https://yeeplist.page.gd/images/Divine.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Dagger PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Bat_Tier1.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Freeze_Tier1.png"},
      {cat:"Mace PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Mace_Tier1.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Axe_Tier1.png"},
      {cat:"Scythe PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Scythe_Tier1.png"},
      {cat:"Other PvP", pos:"Tier: 1 | Base ball bat, Shield", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Credits And Testers", pos:"Tier Tester", img:"https://yeeplist.page.gd/images/credits.png"}
    ]
  },
      { 
    id:14, 
    name:"will_baller", 
    avatar:"https://yeeplist.page.gd/images/Will_Baller.1.jpeg", 
    title:"Newb Yeep", 
    score:0+0+0+0+4+4+0+3, 
    rank:"https://yeeplist.page.gd/images/Newb.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 7", img:"https://yeeplist.page.gd/images/Tier7.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 7", img:"https://yeeplist.page.gd/images/Axe_Tier7.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 8", img:"https://yeeplist.page.gd/images/Tier8.png"}
    ]
  },
    
      { 
    id:15, 
    name:"Xoix", 
    avatar:"https://yeeplist.page.gd/images/xoix.jpg", 
    title:"Mythic Yeep", 
    score:60+30+60+1+60+30+60+45, 
    rank:"https://yeeplist.page.gd/images/Mythic.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Dagger PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Bat_Tier3.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Freeze_Tier1.png"},
      {cat:"Mace PvP", pos:"Tier: 10", img:"https://yeeplist.page.gd/images/Mace_Tier10.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Axe_Tier3.png"},
      {cat:"Scythe PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Scythe_Tier1.png"},
      {cat:"Other PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Tier2.png"}
    ]
  },
    
      { 
    id:16, 
    name:"Im.Mystic", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Master Yeep", 
    score:30+0+45+20+10+0+0+20, 
    rank:"https://yeeplist.page.gd/images/Master.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Freeze_Tier2.png"},
      {cat:"Mace PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Mace_Tier4.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"},
      {cat:".F.", pos:"Tier: ", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"}
    ]
  },
    
  { 
    id:17, 
    name:"Yeeps Wemmbu", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Battle Yeep", 
    score:0+10+6+45+0+0+3+4, 
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Dagger PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Bat_Tier5.png"},
      {cat:"Freeze Glove PvP", pos:"Tier 6", img:"https://yeeplist.page.gd/images/Freeze_Tier6.png"},
      {cat:"Mace PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Mace_Tier2.png"},
      {cat:".S+W.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Scythe PvP", pos:"Tier: 8", img:"https://yeeplist.page.gd/images/Scythe_Tier8.png"},
      {cat:"Other PvP", pos:"Tier: 7", img:"https://yeeplist.page.gd/images/Tier7.png"}
    ]
  },
    
  { 
    id:18, 
    name:"Crystals", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Battle Yeep", 
    score:0+4+0+6+20+0+20+20, 
    team:"IMP",
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Dagger PvP", pos:"Tier: 7", img:"https://yeeplist.page.gd/images/Bat_Tier7.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Mace PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Mace_Tier6.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Scythe PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Scythe_Tier4.png"},
      {cat:"Other PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"},
      {cat:"Credits And Testers", pos:"Tier Tester • Jr Dev", img:"https://yeeplist.page.gd/images/credits.png"}
    ]
  },
  { 
    id:19, 
    name:"Aliens Space", 
    avatar:"https://yeeplist.page.gd/images/aliens_space.png", 
    title:"Battle Yeep", 
    score:20+0+0+0+20+0+20+20, 
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Scythe PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Scythe_Tier4.png"},
      {cat:"Other PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"}
    ]
  },
  { 
    id:20, 
    name:"LilTommyVr", 
    avatar:"https://yeeplist.page.gd/images/liltommyvr.png", 
    title:"Newb Yeep", 
    score:6+0+0+0+4+0+0+0, 
    rank:"https://yeeplist.page.gd/images/Newb.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Tier6.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 7", img:"https://yeeplist.page.gd/images/Tier7.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
    ]
  },
    
  { 
    id:21, 
    name:"Muffin", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Battle Yeep", 
    score:6+20+0+0+10+10+0+10, 
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 6 | Dual", img:"https://yeeplist.page.gd/images/Tier6.png"},
      {cat:"Dagger PvP", pos:"Tier: 4 | Dual", img:"https://yeeplist.page.gd/images/Bat_Tier4.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 5 | Dual", img:"https://yeeplist.page.gd/images/Axe_Tier5.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 5 | Butjo", img:"https://yeeplist.page.gd/images/Tier5.png"}
    ]
  }, 
    { 
    id:22, 
    name:"GoofyGoober", 
    avatar:"https://yeeplist.page.gd/images/GoofyGoober.png", 
    title:"War Yeep", 
    score:45+30+30+6+45+45+30+60, 
    rank:"https://yeeplist.page.gd/images/War.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Tier2.png"},
      {cat:"Dagger PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Bat_Tier3.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Freeze_Tier3.png"},
      {cat:"Mace PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Mace_Tier6.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Tier2.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Axe_Tier2.png"},
      {cat:"Scythe PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Scythe_Tier3.png"},
      {cat:"Other PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"}
    ]
  },
      { 
    id:23, 
    name:"YellowMellow", 
    avatar:"https://yeeplist.page.gd/images/YellowM.jpeg", 
    title:"Divine Yeep", 
    score:60+60+60+60+60+60+60+60, 
    team:"The Regulation",
    rank:"https://yeeplist.page.gd/images/Divine.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Dagger PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Bat_Tier1.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Freeze_Tier1.png"},
      {cat:"Mace PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Mace_Tier1.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Axe_Tier1.png"},
      {cat:"Scythe PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Scythe_Tier1.png"},
      {cat:"Other PvP", pos:"Tier: 1 | Drumstick, Shield", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Credits And Testers", pos:"Jr Tier Tester", img:"https://yeeplist.page.gd/images/credits.png"}
    ]
  }, 
          { 
    id:24, 
    name:"Simply Enderman", 
    avatar:"https://yeeplist.page.gd/images/SimplyEnderman.png", 
    title:"Newb Yeep", 
    score:0+4+0+0+2+3+0+0, 
    rank:"https://yeeplist.page.gd/images/Newb.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Dagger PvP", pos:"Tier: 7", img:"https://yeeplist.page.gd/images/Bat_Tier7.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 9", img:"https://yeeplist.page.gd/images/Tier9.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 8", img:"https://yeeplist.page.gd/images/Axe_Tier8.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
    ]
  }, 
                { 
    id:25, 
    name:"Arcane.Knight", 
    avatar:"https://yeeplist.page.gd/images/ArcaneKnight.png", 
    title:"Battle Yeep", 
    score:45+0+0+0+45+0+0+0, 
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Tier2.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Tier2.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
    ]
  }, 
                    { 
    id:25, 
    name:"Coopter", 
    avatar:"https://yeeplist.page.gd/images/coopter.png", 
    title:"Elite Yeep", 
    score:60+60+0+0+60+0+0+0,
    team:"Gambit",
    rank:"https://yeeplist.page.gd/images/Elite.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Dagger PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Bat_Tier1.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Credits And Testers", pos:"Tier Tester", img:"https://yeeplist.page.gd/images/credits.png"}
    ]
  }, 
    
                    { 
    id:26, 
    name:"Madd", 
    avatar:"https://yeeplist.page.gd/images/Madd.jpeg", 
    title:"Battle Yeep", 
    score:10+0+60+0+10+0+0+0,
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Freeze_Tier1.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
    ]
                    },
                    { 
    id:27, 
    name:"Evan_The_SalmonKing", 
    avatar:"https://yeeplist.page.gd/images/Evan_The_SalmonKing.jpeg", 
    title:"Mythic Yeep", 
    score:60+60+45+10+30+30+45+45,
    team:"Divine Intervention",
    rank:"https://yeeplist.page.gd/images/Mythic.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Dagger PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Bat_Tier1.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Freeze_Tier2.png"},
      {cat:"Mace PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Mace_Tier5.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Axe_Tier3.png"},
      {cat:"Scythe PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Scythe_Tier2.png"},
      {cat:"Other PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Tier2.png"},
    ]
                    }, 

                    { 
    id:28, 
    name:"Clynchenator", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"War Yeep", 
    score:30+45+45+0+60+60+45+0,
    team:"Gambit",
    rank:"https://yeeplist.page.gd/images/War.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 3 | Dual", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:"Dagger PvP", pos:"Tier: 2 | Shield", img:"https://yeeplist.page.gd/images/Bat_Tier2.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Freeze_Tier2.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Axe_Tier1.png"},
      {cat:"Scythe PvP", pos:"Tier: 2 | Shield", img:"https://yeeplist.page.gd/images/Scythe_Tier2.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
    ]
  }, 
                    { 
    id:29, 
    name:"PirateFlameFrags", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Newb Yeep", 
    score:10+6+0+0+0+0+0+6,
    team:"Pirate Clan",
    rank:"https://yeeplist.page.gd/images/Newb.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"},
      {cat:"Dagger PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Bat_Tier6.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Tier2.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Tier6.png"}
    ]
  }, 
                    { 
    id:30, 
    name:"Frostski", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Battle Yeep", 
    score:30+0+0+0+6+45+0+0,
    team:"Pirate Clan",
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Tier6.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Axe_Tier2.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
    ]
  }, 
                    { 
    id:31, 
    name:"Infiniteskele", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Newb Yeep", 
    score:0+0+0+6+0+0+0+0,
    team:"Pirate Clan",
    rank:"https://yeeplist.page.gd/images/Newb.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Mace PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Mace_Tier6.png"},
      {cat:".S+W.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
    ]
  }, 
                    { 
    id:32, 
    name:"RaidenR14", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Newb Yeep", 
    score:3+0+0+0+4+0+0+10,
    team:"Pirate Clan",
    rank:"https://yeeplist.page.gd/images/Newb.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 8", img:"https://yeeplist.page.gd/images/Tier8.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 7", img:"https://yeeplist.page.gd/images/Tier7.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"}
    ] 
  }, 
                    { 
    id:33, 
    name:"Mishsquad", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Newb Yeep", 
    score:0+0+0+20+0+0+0+4,
    team:"Pirate Clan",
    rank:"https://yeeplist.page.gd/images/Newb.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Mace PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Mace_Tier4.png"},
      {cat:".S+W.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 8", img:"https://yeeplist.page.gd/images/Tier8.png"}
    ]
  }, 
                    { 
    id:34, 
    name:"Milkshake789_.8", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Newb Yeep", 
    score:0+10+0+0+0+0+0+6,
    team:"Pirate Clan",
    rank:"https://yeeplist.page.gd/images/Newb.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Dagger PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Bat_Tier5.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S+W.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Tier6.png"}
    ]
  },
                    { 
    id:35, 
    name:"Jam_The_Yeeper", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Street Yeep", 
    score:0+10+10+0+10+0+0+0,
    team:"Pirate Clan",
    rank:"https://yeeplist.page.gd/images/Street.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Dagger PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Bat_Tier5.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Freeze_Tier5.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
    ]
  },
                    { 
    id:36, 
    name:"THE_MEMBER", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Battle Yeep", 
    score:0+30+6+0+10+0+20+4,
    team:"Pirate Clan",
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Dagger PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Bat_Tier3.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 6", img:"https://yeeplist.page.gd/images/Freeze_Tier6.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S+W.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Scythe PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Scythe_Tier4.png"},
      {cat:"Other PvP", pos:"Tier: 7", img:"https://yeeplist.page.gd/images/Tier7.png"}
    ]
  },
                    { 
    id:37, 
    name:"ausfirestorm", 
    avatar:"https://yeeplist.page.gd/images/ausfirestorm.jpeg", 
    title:"Battle Yeep", 
    score:45+0+0+0+0+0+0+20,
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Tier2.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S+W.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Other PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"}
    ]
  },
                    { 
    id:38, 
    name:"Morleo", 
    avatar:"https://yeeplist.page.gd/images/Morleo.png", 
    title:"Divine Yeep", 
    score:60+60+60+30+60+60+60+30,
    team:"Divine Intervention",
    rank:"https://yeeplist.page.gd/images/Divine.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 1 | Dual", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Dagger PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Bat_Tier1.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Freeze_Tier1.png"},
      {cat:"Mace PvP", pos:"Tier: 3 | Air Blasters", img:"https://yeeplist.page.gd/images/Mace_Tier3.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Axe_Tier1.png"},
      {cat:"Scythe PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Scythe_Tier1.png"},
      {cat:"Other PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Tier3.png"}
    ]
  },
                    { 
    id:39, 
    name:"Lostbamakids", 
    avatar:"https://yeeplist.page.gd/images/Lostbama.jpeg", 
    title:"Divine Yeep", 
    score:60+60+60+45+60+60+60+60,
    team:"The Regulation",
    rank:"https://yeeplist.page.gd/images/Divine.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Dagger PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Bat_Tier1.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Freeze_Tier1.png"},
      {cat:"Mace PvP", pos:"Tier: 2 | Shield", img:"https://yeeplist.page.gd/images/Mace_Tier2.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Axe_Tier1.png"},
      {cat:"Scythe PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Scythe_Tier1.png"},
      {cat:"Other PvP", pos:"Tier: 1 | Drummstick, Shield", img:"https://yeeplist.page.gd/images/Tier1.png"}
    ]
  },
    { 
    id:40, 
    name:"Jevil_The_Clown", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Battle Yeep", 
    score:60+0+0+0+60+0+0+0,
    team:"The Regulation",
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
    ]
  },
                    { 
    id:41, 
    name:"TQX1C", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Elite Yeep", 
    score:30+10+30+0+45+20+20+30,
    team:"The Regulation",
    rank:"https://yeeplist.page.gd/images/Elite.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 3 | Shield", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:"Dagger PvP", pos:"Tier: 5 | Shield", img:"https://yeeplist.page.gd/images/Bat_Tier5.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 3 | Dual", img:"https://yeeplist.page.gd/images/Freeze_Tier3.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Tier2.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 4 | Shield", img:"https://yeeplist.page.gd/images/Axe_Tier4.png"},
      {cat:"Scythe PvP", pos:"Tier: 4 | Shield", img:"https://yeeplist.page.gd/images/Scythe_Tier4.png"},
      {cat:"Other PvP", pos:"Tier: 3", img:"https://yeeplist.page.gd/images/Tier3.png"}
    ]
  },           

    { 
    id:42, 
    name:"ItzNaN", 
    avatar:"https://yeeplist.page.gd/images/nan.png", 
    title:"War Yeep", 
    score:30+30+1+45+45+45+20+60,
    team:"The Regulation",
    rank:"https://yeeplist.page.gd/images/War.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 3 | Dual", img:"https://yeeplist.page.gd/images/Tier5.png"},
      {cat:"Dagger PvP", pos:"Tier: 3 | Dual", img:"https://yeeplist.page.gd/images/Bat_Tier4.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 10 | Dual", img:"https://yeeplist.page.gd/images/Freeze_Tier10.png"},
      {cat:"Mace PvP", pos:"Tier: 2 | Air Blaster", img:"https://yeeplist.page.gd/images/Mace_Tier2.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Tier2.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 2 | Shield", img:"https://yeeplist.page.gd/images/Axe_Tier2.png"},
      {cat:"Scythe PvP", pos:"Tier: 4 | Shield", img:"https://yeeplist.page.gd/images/Scythe_Tier4.png"},
      {cat:"Other PvP", pos:"Tier: 1 | Baseball Bat, Shield", img:"https://yeeplist.page.gd/images/Tier1.png"}
    ]
  },    
      { 
    id:43, 
    name:"SCRABBY_WHO", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Mythic Yeep", 
    score:60+60+30+6+60+45+30+20,
    team:"The Regulation",
    rank:"https://yeeplist.page.gd/images/Mythic.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 1 | Dual", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Dagger PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Bat_Tier1.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 3 | Dual", img:"https://yeeplist.page.gd/images/Freeze_Tier3.png"},
      {cat:"Mace PvP", pos:"Tier: 6 | Air Blaster", img:"https://yeeplist.page.gd/images/Mace_Tier3.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 1", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 2 | Dual", img:"https://yeeplist.page.gd/images/Axe_Tier2.png"},
      {cat:"Scythe PvP", pos:"Tier: 3 | Dual", img:"https://yeeplist.page.gd/images/Scythe_Tier3.png"},
      {cat:"Other PvP", pos:"Tier: 4 | Undocumented", img:"https://yeeplist.page.gd/images/Tier4.png"}
    ]
  },
      { 
    id:44, 
    name:"AI.DIAMOND", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"War Yeep", 
    score:60+30+60+0+45+60+20+0,
    rank:"https://yeeplist.page.gd/images/War.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Tier1.png"},
      {cat:"Dagger PvP", pos:"Tier: 3 | Shield", img:"https://yeeplist.page.gd/images/Bat_Tier3.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 1 | Dual", img:"https://yeeplist.page.gd/images/Freeze_Tier1.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 2", img:"https://yeeplist.page.gd/images/Tier2.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 1 | Shield", img:"https://yeeplist.page.gd/images/Axe_Tier1.png"},
      {cat:"Scythe PvP", pos:"Tier: 4 | Shield", img:"https://yeeplist.page.gd/images/Scythe_Tier4.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
    ]
  },
      { 
    id:45, 
    name:"MushroomMan", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Battle Yeep", 
    score:30+20+20+0+0+20+0+0,
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 3 | Dual", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:"Dagger PvP", pos:"Tier: 4 | Shield", img:"https://yeeplist.page.gd/images/Bat_Tier4.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 4 | Dual", img:"https://yeeplist.page.gd/images/Freeze_Tier4.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S+W.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 4 | Shield", img:"https://yeeplist.page.gd/images/Axe_Tier4.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
    ]
  },
      { 
    id:46, 
    name:"Clover", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Battle Yeep", 
    score:30+10+20+0+10+0+3+6,
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 3 | Dual", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:"Dagger PvP", pos:"Tier: 5 | Dual", img:"https://yeeplist.page.gd/images/Bat_Tier5.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 4 | Dual", img:"https://yeeplist.page.gd/images/Freeze_Tier4.png"},
      {cat:".M.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"},
      {cat:".F.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Scythe PvP", pos:"Tier: 8 | Shield", img:"https://yeeplist.page.gd/images/Scythe_Tier8.png"},
      {cat:"Other PvP", pos:"Tier: 6 | Candycane, Shield", img:"https://yeeplist.page.gd/images/Tier6.png"}
    ]
  },
      { 
    id:47, 
    name:"MJ_TAVR", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Master Yeep", 
    score:30+20+30+20+10+3+0+0,
    rank:"https://yeeplist.page.gd/images/Master.png",
    categories:[
      {cat:"Bat PvP", pos:"Tier: 3 | Shield", img:"https://yeeplist.page.gd/images/Tier3.png"},
      {cat:"Dagger PvP", pos:"Tier: 4 | Shield", img:"https://yeeplist.page.gd/images/Bat_Tier4.png"},
      {cat:"Freeze Glove PvP", pos:"Tier: 3 | Dual", img:"https://yeeplist.page.gd/images/Freeze_Tier3.png"},
      {cat:"Mace PvP", pos:"Tier: 4 | Air Blaster", img:"https://yeeplist.page.gd/images/Mace_Tier4.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 5", img:"https://yeeplist.page.gd/images/Tier5.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 8 | Shield", img:"https://yeeplist.page.gd/images/Axe_Tier8.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
    ]
  },
      { 
    id:48, 
    name:"IAmColorless", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Battle Yeep", 
    score:0+0+0+30+20+30+0+0,
    rank:"https://yeeplist.page.gd/images/Battle.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Mace PvP", pos:"Tier: 3 | Air Blaster", img:"https://yeeplist.page.gd/images/Mace_Tier3.png"},
      {cat:"Shield + Weapon PvP", pos:"Tier: 4", img:"https://yeeplist.page.gd/images/Tier4.png"},
      {cat:"Fire Axe PvP", pos:"Tier: 3 | Shield", img:"https://yeeplist.page.gd/images/Axe_Tier3.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
    ]
  },

      { 
    id:49, 
    name:"coltonvr6195", 
    avatar:"https://yeeplist.page.gd/images/placeholder.png", 
    title:"Newb Yeep", 
    score:0+0+0+0+2+0+0+0,
    rank:"https://yeeplist.page.gd/images/Newb.png",
    categories:[
      {cat:".B.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".D.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".FG.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:"Mace PvP", pos:"Tier: 9 | Air Blaster", img:"https://yeeplist.page.gd/images/Mace_Tier9.png"},
      {cat:".S+W.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".F.", pos:" ", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".S.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"},
      {cat:".O.", pos:"", img:"https://yeeplist.page.gd/images/TierU.png"}
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
  { img:"https://yeeplist.page.gd/images/Divine.png", label:"Divine Yeep (400+)" }
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
