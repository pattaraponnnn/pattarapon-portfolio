/* ---------- content model ---------- */
const DEFAULT = {
  theme:{font:'Inter',accent:'#f5b51b',bg:'#070d13',panel:'#0c1720',text:'#f5f7f8',heroImage:'',mode:'dark'},
  hero:{eyebrow:'CIVIL ENGINEER',name:'PATTARAPON POLADECH',tagline:'Building better infrastructure for a more connected tomorrow.',location:'Bangkok, Thailand',email:'pattarapon.p@gmail.com',cv:'#',linkedin:'#'},
  about:{
    title:'Turning Plans into Real-World Impact',
    body:"I am a Civil Engineering graduate from King Mongkut's Institute of Technology Ladkrabang (KMITL), with hands-on experience as a Tunnel Engineer Intern at Ch. Karnchang PCL. I am passionate about tunnel engineering, construction planning, and using technology to improve efficiency and solve real-world problems in infrastructure.",
    photo:'',
    cards:['Tunnel Engineering','Construction Planning','Problem Solving','Continuous Learning']
  },
  projects:[
    {num:'01',title:'Tunnel Excavation & Locomotive Cycle Scheduling',desc:'Construction planning workflow for TBM excavation, spoil haulage, assembly, and locomotive cycle optimization.',tags:['Primavera P6','TBM','Excel & VBA'],link:'#',image:''},
    {num:'02',title:'MOC Mortar with Fly Ash and Water Hyacinth Fiber',desc:'Experimental study covering mix design, tensile testing, curing ages, and material performance.',tags:['Material Testing','Mix Design'],link:'#',image:''},
    {num:'03',title:'GIS-MCDA for LEZ Planning',desc:'Spatial decision framework identifying and classifying priority areas using multi-criteria analysis.',tags:['GIS','MCDA','Urban Planning'],link:'#',image:''},
    {num:'04',title:'Excel Engineering Tools',desc:'Excel / VBA tools for importing data, generating engineering charts, and visualizing project information.',tags:['Data Analysis','VBA Automation'],link:'#',image:''},
    {num:'05',title:'TBM Productivity Analysis',desc:'Analysis of TBM advance rates and downtime to identify productivity drivers on site.',tags:['Data Analysis','Performance'],link:'#',image:''}
  ],
  spotlight:{
    title:'Tunnel Excavation & Locomotive Cycle Scheduling',
    tags:['Primavera P6','TBM','Excel & VBA'],
    desc:'Developed a construction planning and operation workflow for TBM excavation, focusing on the locomotive cycle between BASE and TBM, and optimized the schedule using Primavera P6.',
    loopNote:'Then loop: Excavate 1 → Assemble 1 → Excavate 1 (repeat)',
    tiles:[{label:'P6 Schedule View',icon:'calendar'},{label:'Excel VBA Tool',icon:'grid'},{label:'Operation in Real Site',icon:'tunnel'}],
    link:'#'
  },
  experience:{company:'Ch. Karnchang Public Co., Ltd.',role:'Tunnel Engineer Intern',period:'2023',image:'',
    bullets:['Supported construction planning and scheduling for a TBM tunnel project.','Assisted in tracking excavation progress and the locomotive cycle.','Prepared site data, reports, and coordination with site teams.','Used Primavera P6 and Excel for schedule analysis and visualization.']},
  skills:{
    engineering:[{label:'Tunnel Engineering',icon:'tunnel'},{label:'Construction Planning',icon:'ruler'},{label:'Project Management',icon:'target'},{label:'Quantity & Productivity Analysis',icon:'chart'}],
    tools:[{label:'Primavera P6',icon:'calendar'},{label:'AutoCAD / Civil 3D',icon:'pen'},{label:'Excel / VBA',icon:'grid'},{label:'Python',icon:'code'},{label:'GIS (QGIS/ArcGIS)',icon:'map'}]
  },
  contact:{title:"Let's Build Something Together",text:"Feel free to reach out if you're interested in my work, would like to discuss opportunities, or just want to connect.",email:'pattarapon.p@gmail.com',linkedin:'#',image:''}
};

/* ---------- icons (hand-authored, no external deps) ---------- */
const ICON_PATHS = {
  mountain:'<path d="M3 19h18L14.5 6 10.5 13 8 9.5 3 19Z"/>',
  moon:'<path d="M20 14.3A8.4 8.4 0 1 1 9.7 4a7 7 0 0 0 10.3 10.3Z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7"/>',
  mapPin:'<path d="M12 21s7-6.3 7-11.6A7 7 0 0 0 5 9.4C5 14.7 12 21 12 21Z"/><circle cx="12" cy="9.4" r="2.3"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5 12 13l8.5-6.5"/>',
  linkedin:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.7 10.3V17M7.7 7.3v.02M11.6 17v-4c0-1.7 1-2.8 2.6-2.8 1.6 0 2.5 1.1 2.5 2.8V17"/>',
  download:'<path d="M12 3v11.5M8 11l4 4 4-4M4.5 19h15"/>',
  arrowRight:'<path d="M4 12h16M14 6l6 6-6 6"/>',
  chevronRight:'<path d="M9 5.5 15 12l-6 6.5"/>',
  check:'<path d="M20 6 9 17.5 4 12.5"/>',
  tunnel:'<path d="M3 21V11a9 9 0 0 1 18 0v10"/><path d="M3 21h18"/>',
  ruler:'<path d="M3 17 17 3l4 4L7 21 3 17Z"/><path d="M9.5 10.5l2 2M13 7l2 2"/>',
  puzzle:'<path d="M4 4h6v3a2 2 0 1 0 4 0V4h6v6h-3a2 2 0 1 0 0 4h3v6h-6v-3a2 2 0 1 0-4 0v3H4v-6h3a2 2 0 1 0 0-4H4Z"/>',
  book:'<path d="M4 5.4A2.4 2.4 0 0 1 6.4 3H20v15H6.4A2.4 2.4 0 0 0 4 20.4Z"/><path d="M4 5.4V20.4"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  pen:'<path d="M3 21l4-1 11-11-3-3L4 17l-1 4Z"/><path d="M13.5 6.5l3 3"/>',
  grid:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
  code:'<path d="M8 8 3 12l5 4M16 8l5 4-5 4"/>',
  map:'<path d="M9 4 3 6.2v14L9 18l6 2 6-2.2v-14L15 6 9 4Z"/><path d="M9 4v14M15 6v14"/>',
  building:'<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7.5h1M14 7.5h1M9 11.5h1M14 11.5h1M9 15.5h1M14 15.5h1"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M2 20h20"/>',
  target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".7" fill="currentColor" stroke="none"/>',
  mouse:'<rect x="8" y="3" width="8" height="14" rx="4"/><path d="M12 6.5v3"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>'
};
function icon(name){
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name]||ICON_PATHS.chevronRight}</svg>`;
}
const SKILL_ICON_OPTIONS = ['tunnel','ruler','target','chart','calendar','pen','grid','code','map','book','puzzle','building','mountain'];

/* ---------- state ---------- */
let state = JSON.parse(localStorage.getItem('civilPortfolio')||'null') || structuredClone(DEFAULT);
if(!state.spotlight) state.spotlight = structuredClone(DEFAULT.spotlight);
if(!Array.isArray(state.skills)===false){ /* migrate old flat skills array shape */ }
if(Array.isArray(state.skills)) state.skills = structuredClone(DEFAULT.skills);
if(typeof state.about?.cards?.[0] !== 'string') state.about.cards = structuredClone(DEFAULT.about.cards);

const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');

function save(){localStorage.setItem('civilPortfolio',JSON.stringify(state)); applyTheme(); render(); toast('Saved locally.');}
function reset(){if(confirm('Reset the portfolio to the original template?')){state=structuredClone(DEFAULT);save()}}
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),1800)}
function applyTheme(){
  const r=document.documentElement;
  r.style.setProperty('--font',state.theme.font==='Space Grotesk'?'"Space Grotesk",sans-serif':'Inter,system-ui,sans-serif');
  r.style.setProperty('--accent',state.theme.accent);
}

/* visitor light/dark toggle (independent of admin content) */
function initColorMode(){
  const saved = localStorage.getItem('portfolioColorMode') || state.theme.mode || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
}
function toggleMobileNav(){ document.querySelector('.nav-links')?.classList.toggle('mobile-open'); }
document.addEventListener('click', e=>{ if(e.target.closest('.nav-links a')) document.querySelector('.nav-links')?.classList.remove('mobile-open'); });
function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme')||'dark';
  const next = cur==='dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('portfolioColorMode', next);
}

/* ---------- render ---------- */
function render(){
  document.title = state.hero.name+' — Civil Engineering Portfolio';
  const h = state.hero, a = state.about, sp = state.spotlight, ex = state.experience, sk = state.skills, c = state.contact;

  const nav = `
  <nav class="nav" id="siteNav"><div class="container nav-inner">
    <a class="brand" href="#home"><span class="brand-mark">${icon('mountain')}</span><span>${esc(h.name)}</span></a>
    <div class="nav-links">
      <a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
    </div>
    <div class="nav-right">
      <button class="icon-btn theme-toggle" onclick="toggleTheme()" aria-label="Toggle light and dark theme">
        <span class="icon-moon">${icon('moon')}</span><span class="icon-sun">${icon('sun')}</span>
      </button>
      <button class="admin-toggle" onclick="openAdmin()">Edit Website</button>
      <button class="icon-btn nav-burger" onclick="toggleMobileNav()" aria-label="Open menu">${icon('menu')}</button>
    </div>
  </div></nav>
  <div class="progress-bar" id="progressBar"></div>`;

  const hero = `
  <section id="home" class="hero">
    <div class="hero-bg" style="background-image:url('${esc(state.theme.heroImage)}')"></div>
    <div class="hero-scrim"></div>
    <div class="hero-side-label">TBM · CONSTRUCTION · PLANNING</div>
    <div class="container hero-inner">
      <div class="eyebrow reveal">${esc(h.eyebrow)}</div>
      <h1 class="reveal">${esc(h.name)}</h1>
      <p class="hero-copy reveal">${esc(h.tagline)}</p>
      <div class="actions reveal">
        <a class="btn primary" href="#projects">View Projects ${icon('arrowRight')}</a>
        <a class="btn" href="${esc(h.cv)}" target="_blank" rel="noopener">${icon('download')} Download CV</a>
      </div>
      <div class="meta-row reveal">
        <span>${icon('mapPin')} ${esc(h.location)}</span>
        <a href="mailto:${esc(h.email)}">${icon('mail')} ${esc(h.email)}</a>
        <a href="${esc(h.linkedin)}" target="_blank" rel="noopener">${icon('linkedin')} LinkedIn</a>
      </div>
    </div>
    <span class="scroll-cue">${icon('mouse')} Scroll Down</span>
  </section>`;

  const aboutCard = `
  <div id="about" class="card about-card reveal">
    <div class="section-head"><div class="kicker">01 · ABOUT ME</div><h2>${esc(a.title)}</h2></div>
    ${a.photo?`<div class="about-photo" style="background-image:url('${esc(a.photo)}')"></div>`:''}
    <p class="lead">${esc(a.body)}</p>
    <div class="fact-row">
      ${a.cards.map((label,i)=>`<div class="fact">${icon(['tunnel','ruler','puzzle','book'][i%4])}<span>${esc(label)}</span></div>`).join('')}
    </div>
  </div>`;

  const projectsCard = `
  <div id="projects" class="card projects-card reveal">
    <div class="section-head">
      <div class="kicker">02 · PROJECTS</div><h2>Featured Projects</h2>
      <p class="section-sub">Selected projects that showcase my technical skills, problem-solving approach, and passion for infrastructure.</p>
    </div>
    <div class="proj-list">
      ${state.projects.map(p=>`<a class="proj-row" href="${esc(p.link||'#projects')}">
        <div class="proj-thumb" style="${p.image?`background-image:url('${esc(p.image)}')`:''}">${p.image?'':esc(p.num)}</div>
        <div style="min-width:0"><h4>${esc(p.title)}</h4><div class="tags">${p.tags.slice(0,2).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div></div>
        <span class="chev">${icon('chevronRight')}</span>
      </a>`).join('')}
    </div>
  </div>`;

  const spotlightCard = `
  <div class="card spotlight-card reveal">
    <div class="crumb-row"><span>Projects</span>${icon('chevronRight')}<span style="color:var(--text)">${esc(sp.title)}</span></div>
    <h2>${esc(sp.title)}</h2>
    <div class="tags" style="margin-top:10px">${sp.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
    <p class="desc">${esc(sp.desc)}</p>
    <div class="spotlight-visual" id="spotlightVisual">
      <div class="diagram-row">
        <div class="node accent">BASE</div><div class="node-arrow"></div>
        <div class="node">LOCO 1</div><div class="node-arrow"></div>
        <div class="node">LOCO 2</div><div class="node-arrow"></div>
        <div class="node accent">TBM</div>
      </div>
      <div class="loop-note">${esc(sp.loopNote)}</div>
      <div class="tile-strip">
        ${sp.tiles.map(t=>`<div class="tile">${icon(t.icon||'chart')}<span>${esc(t.label)}</span></div>`).join('')}
      </div>
    </div>
    <a class="btn primary" style="margin-top:18px" href="${esc(sp.link)}">View Full Project ${icon('arrowRight')}</a>
  </div>`;

  const expCard = `
  <div id="experience" class="card exp-card reveal">
    <div class="section-head"><div class="kicker">03 · EXPERIENCE</div><h2>Work Experience</h2></div>
    <div class="exp-head">
      <div class="exp-logo">${icon('building')}</div>
      <div><h3>${esc(ex.company)}</h3><div class="role">${esc(ex.role)} · ${esc(ex.period)}</div></div>
    </div>
    ${ex.image?`<div class="exp-photo" style="background-image:url('${esc(ex.image)}')"></div>`:''}
    <ul class="exp-list">${ex.bullets.map(b=>`<li>${icon('check')}<span>${esc(b)}</span></li>`).join('')}</ul>
  </div>`;

  const skillsCard = `
  <div id="skills" class="card skills-card reveal">
    <div class="section-head"><div class="kicker">04 · SKILLS</div><h2>Technical Skills</h2></div>
    <div class="skills-grid">
      <div class="skills-col"><h5>Engineering</h5>${sk.engineering.map(s=>`<div class="skill-item">${icon(s.icon)}<span>${esc(s.label)}</span></div>`).join('')}</div>
      <div class="skills-col"><h5>Software &amp; Tools</h5>${sk.tools.map(s=>`<div class="skill-item">${icon(s.icon)}<span>${esc(s.label)}</span></div>`).join('')}</div>
    </div>
    <div class="skills-foot">${icon('mountain')} Always learning. Always improving.</div>
  </div>`;

  const contactCard = `
  <div id="contact" class="card contact-card reveal" style="background-image:url('${esc(c.image)}')">
    <div class="kicker">06 · CONTACT</div>
    <h2>${esc(c.title)}</h2>
    <p>${esc(c.text)}</p>
    <div class="contact-rows">
      <a href="mailto:${esc(c.email)}">${icon('mail')} ${esc(c.email)}</a>
      <a href="${esc(c.linkedin)}" target="_blank" rel="noopener">${icon('linkedin')} LinkedIn</a>
      <span>${icon('mapPin')} ${esc(h.location)}</span>
    </div>
    <a class="btn primary" href="${esc(h.cv)}" target="_blank" rel="noopener">${icon('download')} Download CV</a>
  </div>`;

  const bento = `
  <section class="bento"><div class="container">
    <div class="grid-row top">${aboutCard}${projectsCard}${spotlightCard}</div>
    <div class="grid-row bottom">${expCard}${skillsCard}${contactCard}</div>
  </div></section>`;

  const footer = `
  <footer class="container footer">
    <div class="footer-brand">${icon('mountain')}<span>${esc(h.name)}</span></div>
    <div class="footer-links"><a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a></div>
    <div style="color:var(--muted-2)">© ${new Date().getFullYear()} · Civil Engineering · KMITL</div>
    <div class="footer-social"><a href="${esc(c.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon('linkedin')}</a><a href="mailto:${esc(c.email)}" aria-label="Email">${icon('mail')}</a></div>
  </footer>`;

  $('#site').innerHTML = nav + `<main>${hero}${bento}</main>` + footer;

  setupObservers();
  initTilt();
  onScroll();
}

/* ---------- scroll interactions ---------- */
let revealObserver, spyObserver;
function setupObservers(){
  revealObserver?.disconnect();
  spyObserver?.disconnect();

  const revealEls = document.querySelectorAll('.reveal');
  revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
  },{threshold:.12, rootMargin:'0px 0px -8% 0px'});
  revealEls.forEach((el,i)=>{ el.style.transitionDelay = Math.min(i%3*90,180)+'ms'; revealObserver.observe(el); });

  const spySections = document.querySelectorAll('main [id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  spyObserver = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if(!link) return;
      navLinks.forEach(l=>l.classList.remove('active'));
      link.classList.add('active');
    });
  },{rootMargin:'-42% 0px -50% 0px',threshold:0});
  spySections.forEach(s=>spyObserver.observe(s));
}

function onScroll(){
  const nav = document.querySelector('.nav');
  const bar = document.getElementById('progressBar');
  const y = window.scrollY;
  if(nav) nav.classList.toggle('scrolled', y>10);
  if(bar){
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h>0 ? Math.min(100,(y/h)*100) : 0)+'%';
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
window.addEventListener('resize', onScroll);

function initTilt(){
  const el = document.getElementById('spotlightVisual');
  if(!el) return;
  el.addEventListener('mousemove', e=>{
    const r = el.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width - .5;
    const y = (e.clientY-r.top)/r.height - .5;
    el.style.transform = `perspective(900px) rotateX(${(-y*4).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg)`;
  });
  el.addEventListener('mouseleave', ()=>{ el.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'; });
}

/* click ripple, delegated so it survives re-renders */
document.addEventListener('click', e=>{
  const target = e.target.closest('.btn, .small-btn, .admin-toggle, .icon-btn');
  if(!target) return;
  const rect = target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = size+'px';
  ripple.style.left = (e.clientX - rect.left - size/2)+'px';
  ripple.style.top = (e.clientY - rect.top - size/2)+'px';
  target.appendChild(ripple);
  ripple.addEventListener('animationend', ()=>ripple.remove());
});

/* ---------- admin editor ---------- */
function openAdmin(){buildAdmin();$('.admin-panel').classList.add('open')}
function closeAdmin(){$('.admin-panel')?.classList.remove('open');setTimeout(()=>$('.admin-panel')?.remove(),300)}
function iconSelect(id,i,group,current){
  return `<select data-sk="${group}" data-i="${i}" data-f="icon" id="${id}">${SKILL_ICON_OPTIONS.map(o=>`<option value="${o}" ${o===current?'selected':''}>${o}</option>`).join('')}</select>`;
}
function buildAdmin(){
  const st = state;
  let p = document.createElement('div'); p.className = 'admin-panel open';
  p.innerHTML = `<aside class="admin-shell"><div class="admin-head"><div><div class="admin-title">Portfolio Editor</div><div style="font-size:11px;color:var(--muted-2)">Visual settings · content · links</div></div><button class="small-btn" onclick="closeAdmin()">Close</button></div><div class="admin-body">

  <details class="admin-block" open><summary>Site style</summary><div class="admin-content">
    <div class="field"><label>Font</label><select id="font"><option ${st.theme.font==='Inter'?'selected':''}>Inter</option><option ${st.theme.font==='Space Grotesk'?'selected':''}>Space Grotesk</option></select></div>
    <div class="row"><div class="field"><label>Accent color</label><input id="accent" type="color" value="${esc(st.theme.accent)}"></div><div class="field"><label>Default theme</label><select id="mode"><option value="dark" ${st.theme.mode==='dark'?'selected':''}>Dark</option><option value="light" ${st.theme.mode==='light'?'selected':''}>Light</option></select></div></div>
    <div class="field"><label>Hero background image URL</label><input id="heroImage" placeholder="Paste image URL" value="${esc(st.theme.heroImage)}"></div>
  </div></details>

  <details class="admin-block" open><summary>Hero</summary><div class="admin-content">
    <div class="field"><label>Name</label><input id="name" value="${esc(st.hero.name)}"></div>
    <div class="field"><label>Eyebrow</label><input id="eyebrow" value="${esc(st.hero.eyebrow)}"></div>
    <div class="field"><label>Tagline</label><textarea id="tagline">${esc(st.hero.tagline)}</textarea></div>
    <div class="row"><div class="field"><label>Email</label><input id="email" value="${esc(st.hero.email)}"></div><div class="field"><label>Location</label><input id="location" value="${esc(st.hero.location)}"></div></div>
    <div class="row"><div class="field"><label>CV link</label><input id="cv" value="${esc(st.hero.cv)}"></div><div class="field"><label>LinkedIn</label><input id="linkedin" value="${esc(st.hero.linkedin)}"></div></div>
  </div></details>

  <details class="admin-block"><summary>About</summary><div class="admin-content">
    <div class="field"><label>Title</label><input id="aboutTitle" value="${esc(st.about.title)}"></div>
    <div class="field"><label>Body</label><textarea id="aboutBody">${esc(st.about.body)}</textarea></div>
    <div class="field"><label>Photo URL (optional)</label><input id="aboutPhoto" value="${esc(st.about.photo)}"></div>
    <div class="field"><label>4 highlight labels (one per line)</label><textarea id="aboutCards">${esc(st.about.cards.join('\n'))}</textarea></div>
  </div></details>

  <details class="admin-block"><summary>Projects list</summary><div class="admin-content" id="projectsEditor">${st.projects.map((pr,i)=>`<div class="panel" style="padding:14px;margin-bottom:10px;border:1px solid var(--line);border-radius:12px"><div class="row"><input data-p="num" data-i="${i}" value="${esc(pr.num)}"><input data-p="title" data-i="${i}" value="${esc(pr.title)}"></div><div class="field"><label>Description</label><textarea data-p="desc" data-i="${i}">${esc(pr.desc)}</textarea></div><div class="field"><label>Tags (comma separated)</label><input data-p="tags" data-i="${i}" value="${esc(pr.tags.join(', '))}"></div><div class="row"><div class="field"><label>Link</label><input data-p="link" data-i="${i}" value="${esc(pr.link)}"></div><div class="field"><label>Thumbnail image URL</label><input data-p="image" data-i="${i}" value="${esc(pr.image||'')}"></div></div><button class="small-btn" onclick="removeProject(${i})">Remove project</button></div>`).join('')}<div class="admin-actions"><button class="small-btn primary" onclick="addProject()">+ Add project</button></div></div></details>

  <details class="admin-block"><summary>Spotlight project</summary><div class="admin-content">
    <div class="field"><label>Title</label><input id="spTitle" value="${esc(st.spotlight.title)}"></div>
    <div class="field"><label>Tags (comma separated)</label><input id="spTags" value="${esc(st.spotlight.tags.join(', '))}"></div>
    <div class="field"><label>Description</label><textarea id="spDesc">${esc(st.spotlight.desc)}</textarea></div>
    <div class="field"><label>Loop note</label><input id="spLoop" value="${esc(st.spotlight.loopNote)}"></div>
    <div class="field"><label>Tile labels (one per line, up to 3)</label><textarea id="spTiles">${esc(st.spotlight.tiles.map(t=>t.label).join('\n'))}</textarea></div>
    <div class="field"><label>"View Full Project" link</label><input id="spLink" value="${esc(st.spotlight.link)}"></div>
  </div></details>

  <details class="admin-block"><summary>Experience</summary><div class="admin-content">
    <div class="row"><div class="field"><label>Company</label><input id="company" value="${esc(st.experience.company)}"></div><div class="field"><label>Role</label><input id="role" value="${esc(st.experience.role)}"></div></div>
    <div class="field"><label>Period</label><input id="period" value="${esc(st.experience.period)}"></div>
    <div class="field"><label>Photo URL (optional)</label><input id="expImage" value="${esc(st.experience.image)}"></div>
    <div class="field"><label>Bullets (one per line)</label><textarea id="bullets">${esc(st.experience.bullets.join('\n'))}</textarea></div>
  </div></details>

  <details class="admin-block"><summary>Skills</summary><div class="admin-content">
    <div class="field"><label>Engineering</label>${st.skills.engineering.map((s,i)=>`<div class="row" style="margin-bottom:8px"><input data-sk="engineering" data-i="${i}" data-f="label" value="${esc(s.label)}">${iconSelect('eic'+i,i,'engineering',s.icon)}</div>`).join('')}</div>
    <div class="field"><label>Software &amp; Tools</label>${st.skills.tools.map((s,i)=>`<div class="row" style="margin-bottom:8px"><input data-sk="tools" data-i="${i}" data-f="label" value="${esc(s.label)}">${iconSelect('tic'+i,i,'tools',s.icon)}</div>`).join('')}</div>
  </div></details>

  <details class="admin-block"><summary>Contact</summary><div class="admin-content">
    <div class="field"><label>Title</label><input id="contactTitle" value="${esc(st.contact.title)}"></div>
    <div class="field"><label>Text</label><textarea id="contactText">${esc(st.contact.text)}</textarea></div>
    <div class="row"><div class="field"><label>Email</label><input id="contactEmail" value="${esc(st.contact.email)}"></div><div class="field"><label>LinkedIn</label><input id="contactLinkedin" value="${esc(st.contact.linkedin)}"></div></div>
    <div class="field"><label>Background image URL</label><input id="contactImage" value="${esc(st.contact.image)}"></div>
  </div></details>

  <div class="admin-actions"><button class="small-btn primary" onclick="saveAdmin()">Save changes</button><button class="small-btn" onclick="reset()">Reset template</button><button class="small-btn" onclick="exportJSON()">Export content JSON</button></div>
  <p style="font-size:11px;color:var(--muted-2);line-height:1.6">Prototype note: this editor stores content in the visitor's browser (localStorage). A production version should connect the same editor to authenticated Admin + Database + Image Storage.</p>
  </div></aside>`;
  document.body.appendChild(p);
}
function val(id){return $('#'+id)?.value??''}
function syncAdmin(){
  state.theme.font = val('font');
  state.theme.accent = val('accent')||state.theme.accent;
  state.theme.mode = val('mode')||state.theme.mode;
  state.theme.heroImage = val('heroImage');
  state.hero = {...state.hero, name:val('name'), eyebrow:val('eyebrow'), tagline:val('tagline'), email:val('email'), location:val('location'), cv:val('cv'), linkedin:val('linkedin')};
  state.about.title = val('aboutTitle');
  state.about.body = val('aboutBody');
  state.about.photo = val('aboutPhoto');
  state.about.cards = val('aboutCards').split('\n').map(x=>x.trim()).filter(Boolean);
  state.spotlight.title = val('spTitle');
  state.spotlight.tags = val('spTags').split(',').map(x=>x.trim()).filter(Boolean);
  state.spotlight.desc = val('spDesc');
  state.spotlight.loopNote = val('spLoop');
  state.spotlight.link = val('spLink');
  const tileLabels = val('spTiles').split('\n').map(x=>x.trim()).filter(Boolean);
  const fallbackIcons = ['calendar','grid','tunnel'];
  state.spotlight.tiles = tileLabels.slice(0,3).map((label,i)=>({label, icon:(state.spotlight.tiles[i]&&state.spotlight.tiles[i].icon)||fallbackIcons[i]}));
  state.experience = {company:val('company'), role:val('role'), period:val('period'), image:val('expImage'), bullets:val('bullets').split('\n').map(x=>x.trim()).filter(Boolean)};
  state.contact = {title:val('contactTitle'), text:val('contactText'), email:val('contactEmail'), linkedin:val('contactLinkedin'), image:val('contactImage')};
  document.querySelectorAll('[data-p]').forEach(el=>{const i=+el.dataset.i,k=el.dataset.p;if(k==='tags')state.projects[i][k]=el.value.split(',').map(x=>x.trim()).filter(Boolean);else state.projects[i][k]=el.value});
  document.querySelectorAll('[data-sk]').forEach(el=>{const group=el.dataset.sk,i=+el.dataset.i,f=el.dataset.f;state.skills[group][i][f]=el.value});
}
function saveAdmin(){syncAdmin();localStorage.setItem('civilPortfolio',JSON.stringify(state));applyTheme();closeAdmin();render();toast('Changes saved.');}
function addProject(){syncAdmin();state.projects.push({num:String(state.projects.length+1).padStart(2,'0'),title:'New Engineering Project',desc:'Describe the problem, method, output, and result.',tags:['Engineering'],link:'#',image:''});openAdmin();toast('Project added.');}
function removeProject(i){syncAdmin();state.projects.splice(i,1);saveAdmin()}
function exportJSON(){syncAdmin();const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='portfolio-content.json';a.click();URL.revokeObjectURL(a.href);toast('JSON exported.');}

/* ---------- boot ---------- */
initColorMode();
applyTheme();
render();
