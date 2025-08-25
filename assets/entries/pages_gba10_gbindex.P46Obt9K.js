import{j as e,P as p,R as x,a as s,i as d,b as h}from"../chunks/chunk-Db3Z6WXb.js";/* empty css                      */const n=void 0,m=[{id:"jF0RejzrK4AbqdC7uey1x"},{id:"SQ8rqxJcw1RBHET_HNjl0",maxWidth:991},{id:"OYuARgrgjgNFdrguSuzee",maxWidth:767},{id:"iKuaGiplSFVr1Qf0xhb-_",maxWidth:479}],g=void 0,u=[],f=[],y=o=>e.jsx("body",{className:"w-element",children:e.jsx(p,{code:`<div style="position: relative; width: 100%; min-height: 100vh; overflow-x: hidden;">

  <!-- Starfield Background (Gray Tint) -->
  <canvas id="starfield-handhelds" style="position:fixed; top:0; left:0; width:100%; height:100%; z-index:0;"></canvas>

  <!-- Top-left Title -->
  <a href="index.html" style="position:fixed; top:15px; left:20px; z-index:10; color:white; font-family:Arial, sans-serif; text-decoration:none; font-size:1.2rem; text-shadow:0 0 8px rgba(255,255,255,0.7); padding:4px 8px; border-radius:6px; background:rgba(255,255,255,0.05);">
    Yester Unblocked Site
  </a>

  <!-- Back Button -->
  <a href="./gba1.0/eindex.html" style="position:fixed; top:55px; left:20px; z-index:10; color:white; font-family:Arial, sans-serif; text-decoration:none; font-size:1rem; text-shadow:0 0 8px rgba(255,255,255,0.7); padding:6px 12px; border-radius:6px; border:2px solid #aaaaaa; box-shadow:0 0 8px rgba(170,170,170,0.5); background:rgba(170,170,170,0.15); transition:0.3s;"
     onmouseover="this.style.background='#aaaaaa'; this.style.color='black'; this.style.boxShadow='0 0 15px #cccccc,0 0 30px #aaaaaa';"
     onmouseout="this.style.background='rgba(170,170,170,0.15)'; this.style.color='white'; this.style.boxShadow='0 0 8px rgba(170,170,170,0.5)';">
     ⬅ Back
  </a>

  <!-- Version -->
  <div style="position:fixed; top:15px; right:20px; z-index:10; color:white; font-family:Arial, sans-serif; font-size:0.9rem; text-shadow:0 0 8px rgba(255,255,255,0.7); padding:4px 8px; border-radius:6px; background:rgba(255,255,255,0.05);">
    1.0.7 Revamp
  </div>

  <!-- Main Content -->
  <div style="position:relative; z-index:10; width:90%; max-width:600px; margin:120px auto 60px auto; font-family:Arial, sans-serif; color:white; line-height:1.6; text-align:center;">

    <h1 class="glow-header">HANDHELDS</h1>

    <div style="background:rgba(50,50,50,0.3); padding:25px; border-radius:12px; box-shadow:0 0 20px rgba(170,170,170,0.5); overflow-y:auto; max-height:calc(100vh - 200px);">

      <!-- Favorites Button -->
      <a href="./gba1.0/index_beta.html" class="button" style="border-color:#aaaaaa; box-shadow:0 0 8px #aaaaaa; display:block; margin:8px auto;">Favorites</a>

      <!-- Emulator Buttons -->
      <a href="./gba1.0/gba" class="button" style="border-color:#aaaaaa; box-shadow:0 0 8px #aaaaaa; display:block; margin:8px auto;">GBA</a>
      <a href="./gba1.0/gbindex" class="button" style="border-color:#aaaaaa; box-shadow:0 0 8px #aaaaaa; display:block; margin:8px auto;">Game Boy</a>
      <a href="./gba1.0/gbc" class="button" style="border-color:#aaaaaa; box-shadow:0 0 8px #aaaaaa; display:block; margin:8px auto;">GBC</a>

    </div>

    <!-- Footer / Credits -->
    <p style="margin-top:20px; font-size:0.9rem; color:#ccc;">Thanks to Nailington and cttn for some of the assets in the making of this.</p>

  </div>

  <!-- Starfield Script (Gray Tint) -->
  <script>
    const canvas=document.getElementById('starfield-handhelds');
    const ctx=canvas.getContext('2d');
    function resizeCanvas(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
    window.addEventListener('resize',resizeCanvas);
    resizeCanvas();

    const stars=[];
    const STAR_COUNT=400;
    const pointer={x:-1000,y:-1000};

    window.addEventListener('mousemove',e=>{ pointer.x=e.clientX; pointer.y=e.clientY; });
    window.addEventListener('touchmove',e=>{ pointer.x=e.touches[0].clientX; pointer.y=e.touches[0].clientY; });

    for(let i=0;i<STAR_COUNT;i++){
      stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        dx:(Math.random()-0.5)*0.5,
        dy:(Math.random()-0.5)*0.5,
        r:Math.random()*1.5+0.5
      });
    }

    function animate(){
      ctx.fillStyle="rgba(20,20,20,0.15)";
      ctx.fillRect(0,0,canvas.width,canvas.height);
      stars.forEach(s=>{
        let dx=s.x-pointer.x, dy=s.y-pointer.y, dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<80){ s.x+=dx/12; s.y+=dy/12; }
        s.x+=s.dx; s.y+=s.dy;
        if(s.x<0) s.x=canvas.width;
        if(s.x>canvas.width) s.x=0;
        if(s.y<0) s.y=canvas.height;
        if(s.y>canvas.height) s.y=0;
        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fillStyle=\`rgba(170,170,170,\${0.7+s.r/2})\`;
        ctx.shadowBlur=8;
        ctx.shadowColor=\`rgba(200,200,200,0.7)\`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();
  <\/script>

  <!-- Styles -->
  <style>
    body{ margin:0; padding:0; overflow-x:hidden; }
    h1,h2,h3,p,ul{ margin:10px 0; }
    ul{ padding-left:20px; }

    /* Glow Hover Effects for Headers */
    .glow-header{
      transition:0.4s;
      cursor:default;
    }
    .glow-header:hover{
      text-shadow:0 0 15px #aaaaaa,0 0 30px #cccccc,0 0 40px #aaaaaa;
      transform:scale(1.02);
    }

    /* Buttons */
    .button{
      display:inline-block;
      margin:8px 0;
      padding:10px 18px;
      border-radius:6px;
      border:2px solid;
      text-decoration:none;
      color:white;
      text-shadow:0 0 8px rgba(255,255,255,0.7);
      box-shadow:0 0 8px;
      transition:0.3s;
    }
    .button:hover{
      transform:scale(1.05);
    }

    @media (max-width:600px){
      h1{ font-size:1.8rem; }
      h2{ font-size:1.2rem; }
      h3{ font-size:1rem; }
      p,ul{ font-size:0.9rem; }
      div[style*="padding:25px"]{ padding:15px; }
    }
  </style>

</div>
`,executeScriptOnCanvas:!0,className:"w-html-embed"})}),b=({data:o})=>{const{system:a,resources:r,url:i}=o;return e.jsx(x.Provider,{value:{imageLoader:d,assetBaseUrl:s,resources:r,breakpoints:m,onError:console.error},children:e.jsx(y,{system:a},i)})},v=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),w=({data:o})=>{const{pageMeta:a}=o,{origin:r}=new URL(o.url);let i=a.socialImageUrl;a.socialImageAssetName&&(i=`${r}${d({src:`${s}/${a.socialImageAssetName}`})}`);const l=a.custom.some(t=>t.property==="twitter:card");return e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:a.title}),e.jsx("meta",{property:"og:title",content:a.title}),a.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:a.description}),e.jsx("meta",{property:"og:description",content:a.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),n,i&&e.jsx("meta",{property:"og:image",content:a.socialImageUrl}),n,a.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),a.custom.map(({property:t,content:c})=>e.jsx("meta",{property:t,content:c},t)),(a.socialImageAssetName!==void 0||a.socialImageUrl!==void 0)&&l===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,u.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),f.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/gba10/gbindex/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/gba10/gbindex/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{T as configValuesSerialized};
