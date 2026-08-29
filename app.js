(() => {
  const D = window.VEILARIUM_DATA;
  const $ = (s,c=document)=>c.querySelector(s);
  const $$ = (s,c=document)=>[...c.querySelectorAll(s)];

  const art = id => D.artworks[id];
  const beingsIn = cluster => D.beings.filter(b=>b.cluster===cluster);

  // mobile nav
  $("#mobileMenu").addEventListener("click",()=>{
    const n=$("#siteNav"); const open=n.classList.toggle("open");
    $("#mobileMenu").setAttribute("aria-expanded",String(open));
  });
  $$("#siteNav a").forEach(a=>a.addEventListener("click",()=>$("#siteNav").classList.remove("open")));

  // path cards
  $$("[data-jump]").forEach(b=>b.addEventListener("click",()=>{
    const el=document.getElementById(b.dataset.jump); if(el) el.scrollIntoView({behavior:"smooth"});
  }));

  // Modal
  const modal=$("#entityModal");
  function openEntity(id){
    const b=D.beings.find(x=>x.id===id); if(!b)return;
    const a=art(b.artworkId);
    $("#modalArt").src=a.image;
    $("#modalArt").alt=`${a.title} — ${a.artist}`;
    $("#modalArtCredit").textContent=`${a.title} · ${a.artist} · ${a.date} · ${a.license}`;
    $("#modalKind").textContent=b.kind;
    $("#modalName").textContent=b.name;
    $("#modalMeta").textContent=`${b.tradition} · ${b.region}`;
    $("#modalSummary").textContent=b.summary;
    $("#modalSources").innerHTML=b.sources.map(s=>`<span>${s}</span>`).join("");
    $("#modalArtNote").textContent=(b.artworkMode==="collection"?"Collection artwork — not a literal depiction of this specific entity. ":"")+a.useNote;
    $("#modalSourceLink").href=a.source;
    modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); $("#modalClose").focus();
  }
  function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
  $("#modalClose").addEventListener("click",closeModal);
  modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

  function randomBeing(){
    const b=D.beings[Math.floor(Math.random()*D.beings.length)];
    openEntity(b.id);
  }
  $("#portalRandom").addEventListener("click",randomBeing);
  $("#heroSurprise").addEventListener("click",randomBeing);
  $("#indexRandom").addEventListener("click",randomBeing);

  // Featured gallery
  const featured = [
    ["peri","peri"],["aos-si","fairies"],["nagas","kaliya"],
    ["yokai","yokai"],["jotnar","thor"],["angelic-beings","angels"]
  ];
  $("#featuredGallery").innerHTML=featured.map(([bid,aid])=>{
    const b=D.beings.find(x=>x.id===bid), a=art(aid);
    return `<button class="feature" type="button" data-being="${bid}">
      <img src="${a.image}" alt="${a.title} by ${a.artist}">
      <div class="feature-credit">${a.artist} · ${a.license}</div>
      <div class="feature-copy"><span>${b.tradition}</span><strong>${b.name}</strong><small>${a.title}</small></div>
    </button>`;
  }).join("");
  $$(".feature").forEach(x=>x.addEventListener("click",()=>openEntity(x.dataset.being)));

  // Traditions / chapters
  const rail=$("#traditionRail");
  rail.innerHTML=D.traditions.map((t,i)=>`<button class="tradition-pill ${i===0?"active":""}" type="button" data-trad="${t.id}">${t.name}</button>`).join("");
  function renderChapter(id){
    $$(".tradition-pill").forEach(x=>x.classList.toggle("active",x.dataset.trad===id));
    const t=D.traditions.find(x=>x.id===id), a=art(t.artworkId), list=beingsIn(id).slice(0,6);
    $("#chapterStage").innerHTML=`<div class="chapter-hero">
      <div class="chapter-art"><img src="${a.image}" alt="${a.title} by ${a.artist}"><div class="art-mini-credit">${a.title} · ${a.artist} · ${a.license}</div></div>
      <div class="chapter-info">
        <div class="eyebrow">TRADITION CHAPTER</div><div class="chapter-title">${t.name}</div><div class="chapter-sub">${t.subtitle}</div>
        <div class="chapter-beings">${list.map(b=>`<button type="button" class="chapter-being" data-being="${b.id}"><strong>${b.name}</strong><small>${b.kind}</small></button>`).join("")}</div>
      </div></div>`;
    $$(".chapter-being",$("#chapterStage")).forEach(x=>x.addEventListener("click",()=>openEntity(x.dataset.being)));
  }
  $$(".tradition-pill").forEach(x=>x.addEventListener("click",()=>renderChapter(x.dataset.trad)));
  renderChapter("south-asia");

  // celestial
  function renderPlanet(key){
    const p=D.planets[key]; if(!p)return;
    $$(".planet").forEach(x=>x.classList.toggle("active",x.dataset.planet===key));
    $("#planetGlyph").textContent=p.glyph; $("#planetTitle").textContent=p.label;
    $("#planetTheme").textContent=p.theme; $("#planetIntro").textContent=p.intro;
    $("#parallelList").innerHTML=p.links.map(x=>`<div class="parallel-item">
      <strong>${x.name}</strong><span>${x.tradition}<br>${x.relation}</span><span class="confidence">${x.confidence}</span>
    </div>`).join("");
  }
  $$(".planet").forEach(x=>x.addEventListener("click",()=>renderPlanet(x.dataset.planet)));
  renderPlanet("venus");

  // lokas
  $("#lokaStair").innerHTML=D.lokas.map((l,i)=>`<button class="loka-step ${i===0?"active":""}" type="button" data-loka="${i}"><span>${l.name}</span><small>${l.band}</small></button>`).join("");
  function selectLoka(i){
    $$(".loka-step").forEach((x,j)=>x.classList.toggle("active",j===i));
    const l=D.lokas[i]; $("#lokaTitle").textContent=l.name; $("#lokaDetail").textContent=l.detail;
  }
  $$(".loka-step").forEach(x=>x.addEventListener("click",()=>selectLoka(Number(x.dataset.loka))));
  selectLoka(0);

  // full index
  let filter="all", limit=16;
  const drawer=$("#indexDrawer"), search=$("#searchInput");
  $("#toggleIndex").addEventListener("click",()=>{
    const willOpen=drawer.hidden;
    drawer.hidden=!willOpen; $("#toggleIndex").setAttribute("aria-expanded",String(willOpen));
    $("#toggleIndex").textContent=willOpen?"Close the full index":"Open the full index";
    if(willOpen) renderIndex();
  });
  const filters=[["all","All"],...D.traditions.map(t=>[t.id,t.name.replace(" Worlds","")]),["water","Water"],["celestial","Celestial"],["underworld","Underworld"],["shapeshifter","Shapeshifters"]];
  $("#filterRow").innerHTML=filters.map(([id,label],i)=>`<button class="filter-btn ${i===0?"active":""}" type="button" data-filter="${id}">${label}</button>`).join("");
  $$(".filter-btn").forEach(x=>x.addEventListener("click",()=>{filter=x.dataset.filter;limit=16;$$(".filter-btn").forEach(y=>y.classList.toggle("active",y===x));renderIndex()}));
  search.addEventListener("input",()=>{limit=16;renderIndex()});
  $("#showMore").addEventListener("click",()=>{limit+=16;renderIndex()});
  function filtered(){
    const q=(search.value||"").trim().toLowerCase();
    return D.beings.filter(b=>{
      const ok=filter==="all"||b.cluster===filter||b.tags.includes(filter);
      const hay=[b.name,b.tradition,b.region,b.kind,b.summary,...b.tags].join(" ").toLowerCase();
      return ok&&(!q||hay.includes(q));
    });
  }
  function renderIndex(){
    const items=filtered(), shown=items.slice(0,limit);
    $("#indexCount").textContent=`Showing ${shown.length} of ${items.length} matching records · ${D.beings.length} total`;
    $("#beingGrid").innerHTML=shown.map(b=>{const a=art(b.artworkId);return `<button type="button" class="being-card" data-being="${b.id}">
      <img src="${a.image}" alt="${a.title}"><div class="being-card-body"><small>${b.tradition}</small><h3>${b.name}</h3><p>${b.summary}</p></div></button>`}).join("");
    $$(".being-card").forEach(x=>x.addEventListener("click",()=>openEntity(x.dataset.being)));
    $("#showMore").style.display=shown.length<items.length?"flex":"none";
  }

  // credits
  $("#creditsGrid").innerHTML=Object.entries(D.artworks).map(([id,a])=>`<article class="credit-card">
    <img src="${a.image}" alt="${a.title} by ${a.artist}">
    <div class="credit-copy"><strong>${a.title}</strong><p>${a.artist} · ${a.date}<br>${a.collection}</p>
    <div class="credit-meta"><span>${a.license}</span><span>Artwork ID: ${id}</span></div>
    <p>${a.useNote}</p><a href="${a.source}" target="_blank" rel="noopener noreferrer">Open source & rights record ↗</a></div>
  </article>`).join("");
})();