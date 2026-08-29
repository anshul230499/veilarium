(() => {
  const data = window.VEILARIUM_DATA;
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];

  const grid = $("#beingGrid");
  const empty = $("#emptyState");
  const search = $("#searchInput");
  let activeFilter = "all";

  function renderBeings(){
    const q = (search.value || "").trim().toLowerCase();
    const items = data.beings.filter(b => {
      const hay = [b.name,b.tradition,b.region,b.kind,b.summary,...b.tags].join(" ").toLowerCase();
      const filterOk = activeFilter === "all" || b.cluster === activeFilter || b.tags.includes(activeFilter) || b.kind.toLowerCase().includes(activeFilter);
      return filterOk && (!q || hay.includes(q));
    });
    grid.innerHTML = items.map(b => `
      <article class="being-card" tabindex="0" role="button" aria-label="Open ${b.name} entry" data-being="${b.id}">
        <img src="${b.image}" alt="Original Veilarium symbolic illustration for ${b.name}">
        <div class="being-body">
          <div class="eyebrow">${b.kind}</div>
          <h3>${b.name}</h3>
          <div class="meta">${b.tradition}</div>
          <p>${b.summary}</p>
        </div>
      </article>`).join("");
    empty.style.display = items.length ? "none" : "block";
    $$(".being-card", grid).forEach(card => {
      const open = () => openBeing(card.dataset.being);
      card.addEventListener("click", open);
      card.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){e.preventDefault();open();}});
    });
  }

  search.addEventListener("input", renderBeings);
  $$(".filter-btn").forEach(btn => btn.addEventListener("click", () => {
    $$(".filter-btn").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderBeings();
  }));

  const modal = $("#beingModal");
  const modalImg = $("#modalImg");
  const modalName = $("#modalName");
  const modalMeta = $("#modalMeta");
  const modalSummary = $("#modalSummary");
  const modalSources = $("#modalSources");
  const modalNote = $("#modalNote");
  const citeStatus = $("#citeStatus");
  let currentBeing = null;

  function openBeing(id){
    const b = data.beings.find(x => x.id === id);
    if(!b) return;
    currentBeing = b;
    modalImg.src = b.image;
    modalImg.alt = `Original Veilarium symbolic illustration for ${b.name}`;
    modalName.textContent = b.name;
    modalMeta.textContent = `${b.tradition} · ${b.region} · ${b.kind}`;
    modalSummary.textContent = b.summary;
    modalNote.textContent = b.note;
    modalSources.innerHTML = b.sources.map(s => `<span class="tag source-tag">${s}</span>`).join("");
    citeStatus.textContent = "";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
    $("#modalClose").focus();
  }

  function closeModal(){
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden","true");
  }
  $("#modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if(e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

  $("#citeBtn").addEventListener("click", async () => {
    if(!currentBeing) return;
    const yr = new Date().getFullYear();
    const citation = `Veilarium Editorial. “${currentBeing.name}.” Veilarium: Atlas of the Unseen. ${yr}.`;
    try{
      await navigator.clipboard.writeText(citation);
      citeStatus.textContent = "Citation copied";
    }catch{
      citeStatus.textContent = citation;
    }
  });

  const planetTitle = $("#planetTitle");
  const planetTheme = $("#planetTheme");
  const planetGlyph = $("#planetGlyph");
  const planetIntro = $("#planetIntro");
  const parallelList = $("#parallelList");
  function renderPlanet(key){
    const p = data.planets[key]; if(!p) return;
    $$(".planet-btn").forEach(b => b.classList.toggle("active", b.dataset.planet === key));
    planetTitle.textContent = p.label;
    planetTheme.textContent = p.theme;
    planetGlyph.textContent = p.glyph;
    planetIntro.textContent = p.intro;
    parallelList.innerHTML = p.links.map(x => `
      <div class="parallel-item">
        <div><div class="name">${x.name}</div><div class="trad">${x.relation}</div></div>
        <div class="trad">${x.tradition}</div>
        <div class="confidence">${x.confidence}</div>
      </div>`).join("");
  }
  $$(".planet-btn").forEach(btn => btn.addEventListener("click", () => renderPlanet(btn.dataset.planet)));

  const lokaStack = $("#lokaStack");
  const lokaTitle = $("#lokaTitle");
  const lokaDetailText = $("#lokaDetailText");
  lokaStack.innerHTML = data.lokas.map((x,i) => `
    <button type="button" class="loka-btn ${i===0?"active":""}" data-loka="${i}">
      <span>${x.name}</span><span class="loka-band">${x.band}</span>
    </button>`).join("");
  $$(".loka-btn", lokaStack).forEach(btn => btn.addEventListener("click", () => {
    $$(".loka-btn", lokaStack).forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    const x = data.lokas[Number(btn.dataset.loka)];
    lokaTitle.textContent = x.name;
    lokaDetailText.textContent = x.detail;
  }));

  $("#encounterGrid").innerHTML = data.encounterTypes.map(x => `
    <div class="enc-card"><h3>${x.title}</h3><p>${x.text}</p></div>`).join("");

  const nav = $("#siteNav");
  $("#mobileMenu").addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    $("#mobileMenu").setAttribute("aria-expanded", String(open));
  });
  $$("#siteNav a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    $("#mobileMenu").setAttribute("aria-expanded","false");
  }));

  const recordCount = $("#recordCount");
  if(recordCount) recordCount.textContent = `${data.beings.length} beings & presences`;

  const surpriseBtn = $("#surpriseBtn");
  if(surpriseBtn){
    surpriseBtn.addEventListener("click", () => {
      const pool = data.beings;
      const pick = pool[Math.floor(Math.random() * pool.length)];
      openBeing(pick.id);
    });
  }

  renderBeings();
  renderPlanet("venus");
})();