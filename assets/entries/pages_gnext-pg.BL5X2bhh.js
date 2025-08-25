import{j as e,P as p,R as h,a as o,i as d,b as x}from"../chunks/chunk-Db3Z6WXb.js";/* empty css                      */const i=void 0,m=[{id:"jF0RejzrK4AbqdC7uey1x"},{id:"SQ8rqxJcw1RBHET_HNjl0",maxWidth:991},{id:"OYuARgrgjgNFdrguSuzee",maxWidth:767},{id:"iKuaGiplSFVr1Qf0xhb-_",maxWidth:479}],f=void 0,g=[],u=[],y=s=>e.jsx("body",{className:"w-element",children:e.jsx(p,{code:`<!-- gnext-pg.html: Starfield with Navigation Buttons and Version Number -->
<style>
  /* Canvas background */
  #starfield {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -9999;
    pointer-events: none;
    background: black;
  }

  /* Top-left title */
  #site-title {
    position: fixed;
    top: 15px;
    left: 20px;
    color: white;
    font-family: 'Arial', sans-serif;
    font-size: 1.2rem;
    z-index: 10;
    text-shadow: 0 0 8px rgba(255,255,255,0.7);
    background: rgba(255, 255, 255, 0.05);
    padding: 4px 8px;
    border-radius: 6px;
    text-decoration: none;
    transition: 0.3s;
  }

  #site-title:hover {
    box-shadow: 0 0 15px #ff99ff, 0 0 30px #ff99ff;
    background: rgba(255,255,255,0.1);
  }

  /* Version number in top-right corner */
  #version-number {
    position: fixed;
    top: 15px;
    right: 20px;
    color: #fff;
    font-family: 'Arial', sans-serif;
    font-size: 0.9rem;
    z-index: 10;
    text-shadow: 0 0 8px rgba(255,255,255,0.7);
    background: rgba(255, 255, 255, 0.05);
    padding: 4px 8px;
    border-radius: 6px;
  }

  /* Centered navigation container */
  #nav-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 10;
    font-family: 'Arial', sans-serif;
  }

  #nav-container .btn {
    display: block;
    width: 200px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid white;
    padding: 14px 0;
    margin: 15px auto;
    font-size: 1.2rem;
    border-radius: 10px;
    text-decoration: none;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(255,255,255,0.5);
  }

  #nav-container .btn:hover {
    background: white;
    color: black;
    box-shadow: 0 0 20px #ff99ff, 0 0 40px #ff99ff, 0 0 60px #ff99ff;
  }

  @media (max-width: 600px) {
    #site-title {
      font-size: 1rem;
      padding: 3px 6px;
    }
    #version-number {
      font-size: 0.8rem;
      padding: 3px 6px;
    }
    #nav-container .btn {
      width: 160px;
      font-size: 1rem;
      padding: 10px 0;
    }
  }
</style>

<canvas id="starfield"></canvas>

<a href="index.html" id="site-title">Yester Unblocked Site</a>
<div id="version-number">1.0.7 Revamp</div>

<div id="nav-container">
  <a href="games.html" class="btn">Games</a>
  <a href="/gba1.0/eindex.html" class="btn">Emulators</a>
  <a href="privacy-policy.html" class="btn">Privacy</a>
  <a href="about.html" class="btn">About</a>
  <a href="changelog.html" class="btn">Changelog</a>
</div>

<script>
(function(){
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const mouse = { x: -1000, y: -1000 };
  const stars = [];
  const shootingStars = [];
  const STAR_COUNT = 500;

  for (let i = 0; i < STAR_COUNT; i++) {
    const depth = Math.random();
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * 0.3 * (0.3 + depth),
      dy: (Math.random() - 0.5) * 0.3 * (0.3 + depth),
      depth: depth
    });
  }

  function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      const size = 0.5 + star.depth * 2.5;
      const brightness = 150 + Math.floor(star.depth * 105);
      ctx.beginPath();
      ctx.arc(star.x, star.y, size, 0, Math.PI*2);
      ctx.fillStyle = \`rgb(\${brightness},\${brightness},\${brightness})\`;
      ctx.shadowColor = \`rgb(\${brightness},\${brightness},\${brightness})\`;
      ctx.shadowBlur = 10 + star.depth * 20;
      ctx.fill();
    });

    shootingStars.forEach(star => {
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(star.x - star.dx * 10, star.y - star.dy * 10);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.shadowColor = "white";
      ctx.shadowBlur = 20;
      ctx.stroke();
    });
  }

  function update() {
    stars.forEach(star => {
      star.x += star.dx;
      star.y += star.dy;

      if(star.x < 0 || star.x > canvas.width) star.dx *= -1;
      if(star.y < 0 || star.y > canvas.height) star.dy *= -1;

      const dx = star.x - mouse.x;
      const dy = star.y - mouse.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 120) {
        const angle = Math.atan2(dy, dx);
        const force = (120 - dist)/120;
        const repel = 3 + star.depth*5;
        star.x += Math.cos(angle) * force * repel;
        star.y += Math.sin(angle) * force * repel;
      }
    });

    for(let i=shootingStars.length-1;i>=0;i--){
      const star = shootingStars[i];
      star.x += star.dx;
      star.y += star.dy;
      star.life--;
      if(star.life <=0 || star.x<0 || star.x>canvas.width || star.y<0 || star.y>canvas.height){
        shootingStars.splice(i,1);
      }
    }

    if(Math.random() < 0.01) spawnShootingStar();
  }

  function spawnShootingStar(){
    const edge = Math.random() < 0.5 ? "top":"left";
    let x = edge==="top" ? Math.random()*canvas.width : 0;
    let y = edge==="top" ? 0 : Math.random()*canvas.height;
    let dx = Math.random()*6 + 4;
    let dy = Math.random()*2 + 1;
    if(edge==="top") dy = Math.random()*3 + 1;
    else dx = Math.random()*6 + 4;

    shootingStars.push({x,y,dx,dy,life:60 + Math.random()*30});
  }

  function animate(){
    draw();
    update();
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("mousemove", e=>{
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("mouseleave", ()=>{
    mouse.x = -1000;
    mouse.y = -1000;
  });
})();
<\/script>
`,executeScriptOnCanvas:!0,className:"w-html-embed"})}),v=({data:s})=>{const{system:t,resources:n,url:r}=s;return e.jsx(h.Provider,{value:{imageLoader:d,assetBaseUrl:o,resources:n,breakpoints:m,onError:console.error},children:e.jsx(y,{system:t},r)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),w=({data:s})=>{const{pageMeta:t}=s,{origin:n}=new URL(s.url);let r=t.socialImageUrl;t.socialImageAssetName&&(r=`${n}${d({src:`${o}/${t.socialImageAssetName}`})}`);const l=t.custom.some(a=>a.property==="twitter:card");return e.jsxs(e.Fragment,{children:[s.url&&e.jsx("meta",{property:"og:url",content:s.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:c})=>e.jsx("meta",{property:a,content:c},a)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&l===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),f,g.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"font",crossOrigin:"anonymous"},a)),u.map(a=>e.jsx("link",{rel:"preload",href:`${o}${a}`,as:"image"},a))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),M={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/gnext-pg/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/gnext-pg/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{M as configValuesSerialized};
