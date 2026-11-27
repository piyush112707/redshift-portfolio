/* ============ EDIT YOUR CONTENT HERE ============ */
const CONFIG = {
  resume: "assets/resume.pdf",
  social: [
    { label: "EMAIL ME", url: "mailto:piyushkumayuj@gmail.com", primary: true },
    { label: "GITHUB", url: "https://github.com/piyush112707" },
    { label: "LINKEDIN", url: "https://linkedin.com/in/your-id" },
    { label: "INSTAGRAM", url: "https://instagram.com/your-id" }
  ],
  info: [
    ["INSTITUTION", "Mahakal Institute of Technology"],
    ["BRANCH", "Computer Science & Engineering"],
    ["ROLE", "Founder of Wayelora"],
    ["PROFILE", "Creative Developer"]
  ],
  skills: ["Coding & Development","UI/UX Design","Graphic Design","3D Modeling","Video Editing","Creative Technology","Web Design","Prototyping"],
  software: [["Vs","Visual Studio Code"],["Fg","Figma"],["Dv","DaVinci Resolve"],["Ps","Photoshop"],["Ae","After Effects"],["Bl","Blender"],["Un","Unity"],["F3","Fusion 360"]],
  /* PROJECTS — add more objects to extend. type: "restricted" | "future" are special cards */
  projects: [
    { title: "ISHU", description: "A personal intelligence experiment designed to make digital interaction feel more natural.",
      tags: ["AI INTERFACE","PERSONAL SYSTEM","EXPERIMENTAL"], status: "EXPERIMENTAL", thumbnail: "assets/ishu.png", github: "", live: "", cta: "ACCESS PROJECT" },
    { title: "WEB EXPERIENCES", description: "A collection of digital experiences crafted for cafe brands, where atmosphere meets interface. 4+ cafe websites.",
      tags: ["4+ CAFE WEBSITES"], status: "DELIVERED", thumbnail: "assets/webexp.png", github: "", live: "", cta: "VIEW COLLECTION" },
    { title: "RESTRICTED FILE", description: "Another idea is currently classified.", type: "restricted",
      tags: ["CLASSIFIED"], status: "REDACTED", hover: "ACCESS LEVEL<br>INSUFFICIENT." },
    { title: "FUTURE PROTOCOL", description: "Reserved for upcoming projects. Signal incoming.", type: "future",
      tags: ["UPCOMING"], status: "STANDBY" }
  ],
  /* EDITS — click a card to open its Google Drive video */
  edits: [
    { title: "Porche Edit", category: "VIDEO EDITING", description: "Watch this edit.", thumbnail: "", video: "https://drive.google.com/file/d/1Ytho-2ue9U6a4XPg7zoSo84a2AiT6Ifa/view?usp=drive_link" },
    { title: "Wayelora Edit ", category: "VIDEO EDITING", description: "Watch this edit.", thumbnail: "", video: "https://drive.google.com/file/d/1WK41MaWgGELj9hFmQmHVZTGKJ2KRNAGU/view?usp=drive_link" },
    { title: "Wayelora edit", category: "VIDEO EDITING", description: "Watch this edit.", thumbnail: "", video: "https://drive.google.com/file/d/1pXXG9YiauTjGovaGmh8s7sOKsULenMgg/view?usp=drive_link" }
  ],
  achievements: [
    ["FOUNDER","Founder of Wayelora"],
    ["INTERNSHIP","Machine Learning Intern at Unified Mentor"],
    ["AMBASSADOR","Brand Ambassador — IIT Bombay Techfest (ca.techfest.org)"],
    ["HACKATHON","Participant — Agnitia National-Level Hackathon"],
    ["6+","Participated in 6+ Hackathons"],
    ["2+","2+ Hackathon / Competition Wins"]
  ],
  hobbies: [["⚽","FOOTBALL","TEAM // INSTINCT"],["🏋","GYM / FITNESS","DISCIPLINE // STRENGTH"]]
};

/* ============ RENDER ============ */
const $ = s => document.querySelector(s);
const bgImg = u => u ? `style="background-image:url('${u}')"` : "";
const pad = n => String(n + 1).padStart(2, "0");

$("#resume").href = CONFIG.resume;
$("#info").innerHTML = CONFIG.info.map(([k, v]) => `<div><small>${k}</small>${v}</div>`).join("");
$("#skills-list").innerHTML = CONFIG.skills.map(s => `<span>${s}</span>`).join("");
$("#soft-list").innerHTML = CONFIG.software.map(([i, n]) => `<div class="card"><b>${i}</b>${n}</div>`).join("");

$("#project-list").innerHTML = CONFIG.projects.map((p, i) => `
  <article class="card proj ${p.type || ""} rv">
    <div class="thumb" ${bgImg(p.thumbnail)}><span class="no">FILE_${pad(i)}</span></div>
    <div class="pb">
      <div class="tags">${(p.tags || []).map(t => `<i>${t}</i>`).join("")}</div>
      <h3>${p.title}</h3><p>${p.description}</p>
      <span class="st">● STATUS: ${p.status}</span>
      <div class="lk">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">SOURCE</a>` : ""}
        ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">${p.cta || "LIVE"} →</a>` : ""}
      </div>
    </div>
    ${p.hover ? `<div class="reveal"><span>${p.hover}</span></div>` : ""}
  </article>`).join("");

$("#edit-list").innerHTML = CONFIG.edits.map((e, i) => `
  <article class="edit rv" data-i="${i}" tabindex="0" role="button" aria-label="Play ${e.title}">
    <div class="im" ${bgImg(e.thumbnail)}></div><div class="play">▶</div>
    <div class="meta"><small>EDIT ${pad(i)} // ${e.category}</small><h3>${e.title}</h3><p>${e.description || ""}</p></div>
  </article>`).join("");

$("#ach-list").innerHTML = CONFIG.achievements.map(([b, t], i) => `
  <div class="card ach rv"><b>${b}</b><h3>${t}</h3><small>LOG_${pad(i)} // VERIFIED</small></div>`).join("");
$("#hobby-list").innerHTML = CONFIG.hobbies.map(([ic, t, s]) => `
  <div class="card hob rv"><div><span>${ic}</span><h3>${t}</h3><small>${s}</small></div></div>`).join("");
$("#social-list").innerHTML = CONFIG.social.map(s =>
  `<a class="btn ${s.primary ? "red" : "ghost"}" href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join("");

/* ============ INTERACTION ============ */
const nav = $("#nav"), links = $("#links");
$("#burger").onclick = () => links.classList.toggle("open");
links.onclick = () => links.classList.remove("open");
$("#top").onclick = () => scrollTo({ top: 0, behavior: "smooth" });

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll(".rv").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 80 + "ms"; io.observe(el); });

const secs = [...document.querySelectorAll("main section")];
function onScroll() {
  nav.classList.toggle("sc", scrollY > 30);
  const cur = secs.filter(s => s.getBoundingClientRect().top < innerHeight * .4).pop();
  document.querySelectorAll("#links a").forEach(a => a.classList.toggle("on", cur && a.getAttribute("href") === "#" + cur.id));
}
addEventListener("scroll", onScroll, { passive: true }); onScroll();

/* video modal */
const modal = $("#modal"), mbody = $("#mbody");
function embed(u) {
  let m = u.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/); if (m) return `<iframe src="https://www.youtube.com/embed/${m[1]}?autoplay=1" allow="autoplay;fullscreen" allowfullscreen></iframe>`;
  m = u.match(/vimeo\.com\/(\d+)/); if (m) return `<iframe src="https://player.vimeo.com/video/${m[1]}?autoplay=1" allow="autoplay;fullscreen" allowfullscreen></iframe>`;
  if (/\.(mp4|webm)$/i.test(u)) return `<video src="${u}" controls autoplay></video>`;
  return null;
}
function openEdit(i) {
  const u = CONFIG.edits[i].video;
  if (!u) {
    mbody.innerHTML = `<div class="none">NO VIDEO LINKED YET.<br>Add a link in script.js → CONFIG.edits</div>`;
    modal.classList.add("on");
    return;
  }

  // Google Drive share pages are more reliable when opened directly,
  // rather than embedded inside the portfolio's modal.
  if (/drive\.google\.com\/file\/d\//i.test(u)) {
    window.open(u, "_blank", "noopener,noreferrer");
    return;
  }

  const h = embed(u);
  if (!h) {
    window.open(u, "_blank", "noopener,noreferrer");
    return;
  }
  mbody.innerHTML = h;
  modal.classList.add("on");
}
const closeM = () => { modal.classList.remove("on"); mbody.innerHTML = ""; };
document.querySelectorAll(".edit").forEach(c => {
  c.onclick = () => openEdit(+c.dataset.i);
  c.onkeydown = e => e.key === "Enter" && openEdit(+c.dataset.i);
});
$("#mclose").onclick = closeM;
modal.onclick = e => e.target === modal && closeM();
addEventListener("keydown", e => e.key === "Escape" && closeM());

addEventListener("load", () => setTimeout(() => $("#loader").classList.add("off"), 1400));

/* ============ 3D SCENE ============ */
(function () {
  if (!window.THREE) return;
  const cv = $("#bg");
  const R = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
  R.setPixelRatio(Math.min(devicePixelRatio, 2));
  const S = new THREE.Scene(), cam = new THREE.PerspectiveCamera(45, 1, .1, 200);
  cam.position.z = 10;
  S.add(new THREE.AmbientLight(0x505868, .8));
  const sun = new THREE.DirectionalLight(0xffffff, 1.8); sun.position.set(5, 4, 6); S.add(sun);
  const rl = new THREE.PointLight(0xff2638, 3, 25); rl.position.set(-4, -2, 3); S.add(rl);

  const metal = new THREE.MeshStandardMaterial({ color: 0x9096a2, metalness: .9, roughness: .3 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x14161b, metalness: .8, roughness: .45 });
  const glow = new THREE.MeshBasicMaterial({ color: 0xff2638 });

  const t = document.createElement("canvas"); t.width = 256; t.height = 128;
  const x = t.getContext("2d"); x.fillStyle = "#0a1226"; x.fillRect(0, 0, 256, 128);
  x.strokeStyle = "#3b4a78"; x.lineWidth = 2;
  for (let i = 0; i <= 256; i += 32) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 128); x.stroke(); }
  for (let j = 0; j <= 128; j += 32) { x.beginPath(); x.moveTo(0, j); x.lineTo(256, j); x.stroke(); }
  const panelMat = new THREE.MeshStandardMaterial({ map: new THREE.CanvasTexture(t), metalness: .6, roughness: .35, emissive: 0x0a0f22 });

  const sat = new THREE.Group(), add = (m, p) => { p && m.position.set(...p); sat.add(m); return m; };
  add(new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 1.9), metal));
  add(new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, .3), dark), [0, 0, .7]);
  add(new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, .3), dark), [0, 0, -.7]);
  [-1, 1].forEach(s => {
    const arm = add(new THREE.Mesh(new THREE.CylinderGeometry(.06, .06, 1.4, 12), dark), [s * 1.05, 0, 0]); arm.rotation.z = Math.PI / 2;
    add(new THREE.Mesh(new THREE.BoxGeometry(3, .05, 1.5), panelMat), [s * 2.7, 0, 0]);
  });
  const dish = add(new THREE.Mesh(new THREE.SphereGeometry(.75, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), metal), [0, 0, 1.2]);
  dish.rotation.x = Math.PI / 2; dish.material = metal.clone(); dish.material.side = THREE.DoubleSide;
  add(new THREE.Mesh(new THREE.SphereGeometry(.18, 16, 16), glow), [0, 0, 1.15]);
  add(new THREE.Mesh(new THREE.CylinderGeometry(.03, .03, 1, 8), dark), [.5, .9, -.6]);
  add(new THREE.Mesh(new THREE.SphereGeometry(.06, 8, 8), glow), [.5, 1.45, -.6]);
  S.add(sat);

  const rings = [];
  [3.8, 4.6].forEach((r, i) => {
    const m = new THREE.Mesh(new THREE.TorusGeometry(r, .008, 6, 160), new THREE.MeshBasicMaterial({ color: 0xff2638, transparent: true, opacity: .45 - i * .15 }));
    m.rotation.set(1.2 + i * .3, .3, i); sat.add(m); rings.push(m);
  });

  const planet = new THREE.Mesh(new THREE.SphereGeometry(16, 64, 64), new THREE.MeshStandardMaterial({ color: 0x0c0e14, metalness: .3, roughness: .9 }));
  planet.position.set(8, -19.5, -10);
  const atmo = new THREE.Mesh(new THREE.SphereGeometry(16.5, 64, 64), new THREE.MeshBasicMaterial({ color: 0xff2638, transparent: true, opacity: .22, side: THREE.BackSide }));
  atmo.position.copy(planet.position); S.add(planet, atmo);

  const N = 1400, pos = new Float32Array(N * 3);
  for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - .5) * 120;
  const sg = new THREE.BufferGeometry(); sg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: .09, transparent: true, opacity: .8 }));
  S.add(stars);

  let base = { x: 3, y: .3, s: 1 };
  function resize() {
    const w = innerWidth, h = innerHeight; R.setSize(w, h); cam.aspect = w / h; cam.updateProjectionMatrix();
    base = w < 900 ? { x: 0, y: -2.4, s: .6 } : { x: 3.4, y: .3, s: 1 };
  }
  addEventListener("resize", resize); resize();

  let mx = 0, my = 0, tx = 0, ty = 0;
  addEventListener("pointermove", e => { tx = e.clientX / innerWidth - .5; ty = e.clientY / innerHeight - .5; });
  const clock = new THREE.Clock();
  (function loop() {
    const t = clock.getElapsedTime(), sy = scrollY;
    mx += (tx - mx) * .05; my += (ty - my) * .05;
    sat.rotation.y = t * .25 + mx * 1.2 + sy * .002;
    sat.rotation.x = .25 + my * .6 + Math.sin(t * .5) * .08;
    sat.position.set(base.x - sy * .004, base.y + Math.sin(t) * .18 + sy * .002, -sy * .003);
    sat.scale.setScalar(base.s);
    rings.forEach((r, i) => r.rotation.z += .002 * (i + 1));
    stars.rotation.y = t * .01 + sy * .0001;
    cam.position.x = mx * .6; cam.position.y = -my * .4;
    rl.intensity = 2.6 + Math.sin(t * 2) * .5;
    cv.style.opacity = Math.max(.18, 1 - sy / (innerHeight * .9));
    R.render(S, cam); requestAnimationFrame(loop);
  })();
})();
