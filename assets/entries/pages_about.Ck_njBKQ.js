import{j as e,P as p,R as x,a as i,i as d,b as h}from"../chunks/chunk-Db3Z6WXb.js";/* empty css                      */const n=void 0,f=[{id:"jF0RejzrK4AbqdC7uey1x"},{id:"SQ8rqxJcw1RBHET_HNjl0",maxWidth:991},{id:"OYuARgrgjgNFdrguSuzee",maxWidth:767},{id:"iKuaGiplSFVr1Qf0xhb-_",maxWidth:479}],m=void 0,u=[],g=[],y=a=>e.jsx("body",{className:"w-element",children:e.jsx(p,{code:`<div style="position: relative; width: 100%; min-height: 100vh; overflow-x: hidden;">

  <!-- Starfield Background (Gold Tint) -->
  <canvas id="starfield" style="position:fixed; top:0; left:0; width:100%; height:100%; z-index:0;"></canvas>

  <!-- Top-left Title -->
  <a href="index.html" style="position:fixed; top:15px; left:20px; z-index:10; color:white; font-family:Arial, sans-serif; text-decoration:none; font-size:1.2rem; text-shadow:0 0 8px rgba(255,255,255,0.7); padding:4px 8px; border-radius:6px; background:rgba(255,255,255,0.05);">
     Yester Unblocked Site
  </a>

  <!-- Back Button -->
  <a href="gnext-pg.html" style="position:fixed; top:55px; left:20px; z-index:10; color:white; font-family:Arial, sans-serif; text-decoration:none; font-size:1rem; text-shadow:0 0 8px rgba(255,255,255,0.7); padding:6px 12px; border-radius:6px; border:2px solid #ffcc33; box-shadow:0 0 8px rgba(255,204,51,0.5); background:rgba(255,204,51,0.15); transition:0.3s;"
     onmouseover="this.style.background='#ffcc33'; this.style.color='black'; this.style.boxShadow='0 0 15px #ffe066,0 0 30px #ffcc33';"
     onmouseout="this.style.background='rgba(255,204,51,0.15)'; this.style.color='white'; this.style.boxShadow='0 0 8px rgba(255,204,51,0.5)';">
     ⬅ Back
  </a>

  <!-- Version -->
  <div style="position:fixed; top:15px; right:20px; z-index:10; color:white; font-family:Arial, sans-serif; font-size:0.9rem; text-shadow:0 0 8px rgba(255,255,255,0.7); padding:4px 8px; border-radius:6px; background:rgba(255,255,255,0.05);">
    1.0.7 Revamp
  </div>

  <!-- Main Content -->
  <div style="position:relative; z-index:10; width:90%; max-width:900px; margin:120px auto 60px auto; font-family:Arial, sans-serif; color:white; line-height:1.6;">

    <h1 class="glow-header">About Yester Unlocked Site</h1>

    <div style="background:rgba(50,25,0,0.3); padding:25px; border-radius:12px; box-shadow:0 0 20px rgba(255,204,51,0.5); overflow-y:auto; max-height:calc(100vh - 200px);">

      <h2 class="glow-subheader"># About This Site</h2>
      <p>Welcome to Yester Unblocked Site! This site is designed to provide easy access to games, emulators, and media content in a polished and user-friendly environment.</p>

      <h2 class="glow-subheader"># About Me</h2>
      <p>Hi! I’m the creator of Yester Unlocked Site. I’m passionate about making content easily accessible and enjoyable for everyone.</p>

      <h2 class="glow-subheader"># Connect With Me</h2>
      <p>You can join my Discord server to chat, get updates, and stay connected with our community:</p>
      <p style="text-align:center; margin-top:10px;">
        <a href="https://bit.ly/subg" target="_blank" style="font-size:1.1rem; color:#ffcc33; text-decoration:none; text-shadow:0 0 10px #ffe066; padding:6px 12px; border-radius:6px; border:2px solid #ffcc33; box-shadow:0 0 10px #ffcc33; transition:0.3s;"
           onmouseover="this.style.background='#ffcc33'; this.style.color='black'; this.style.boxShadow='0 0 20px #ffe066,0 0 30px #ffcc33';"
           onmouseout="this.style.background='transparent'; this.style.color='#ffcc33'; this.style.boxShadow='0 0 10px #ffcc33';">
          Join Discord
        </a>
      </p>

    </div>
  </div>

  <!-- Starfield Script (Gold Tint) -->
  <script>
    const canvas=document.getElementById('starfield');
    const ctx=canvas.getContext('2d');
    function resizeCanvas(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
    window.addEventListener('resize',resizeCanvas);
    resizeCanvas();

    const stars=[];
    const STAR_COUNT=400;
    const pointer={x:-1000,y:-1000};

    window.addEventListener('mousemove',e=>{ pointer.x=e.clientX; pointer.y=e.clientY; });
    window.addEventListener('touchmove',e=>{
      pointer.x=e.touches[0].clientX; pointer.y=e.touches[0].clientY;
    });

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
      ctx.fillStyle="rgba(20,10,0,0.15)";
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
        ctx.fillStyle=\`rgba(255,204,51,\${0.7+s.r/2})\`;
        ctx.shadowBlur=8;
        ctx.shadowColor=\`rgba(255,230,102,0.7)\`;
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
    .glow-header, .glow-subheader{
      transition:0.4s;
      cursor:default;
    }
    .glow-header:hover{
      text-shadow:0 0 15px #ffcc33,0 0 30px #ffe066,0 0 40px #ffcc33;
      transform:scale(1.02);
    }
    .glow-subheader:hover{
      text-shadow:0 0 12px #ffcc33,0 0 24px #ffe066;
      transform:scale(1.01);
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
`,executeScriptOnCanvas:!0,className:"w-html-embed"})}),b=({data:a})=>{const{system:t,resources:r,url:s}=a;return e.jsx(x.Provider,{value:{imageLoader:d,assetBaseUrl:i,resources:r,breakpoints:f,onError:console.error},children:e.jsx(y,{system:t},s)})},v=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),w=({data:a})=>{const{pageMeta:t}=a,{origin:r}=new URL(a.url);let s=t.socialImageUrl;t.socialImageAssetName&&(s=`${r}${d({src:`${i}/${t.socialImageAssetName}`})}`);const l=t.custom.some(o=>o.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),n,s&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),n,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:c})=>e.jsx("meta",{property:o,content:c},o)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&l===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),m,u.map(o=>e.jsx("link",{rel:"preload",href:`${i}${o}`,as:"font",crossOrigin:"anonymous"},o)),g.map(o=>e.jsx("link",{rel:"preload",href:`${i}${o}`,as:"image"},o))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/about/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/about/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{T as configValuesSerialized};
