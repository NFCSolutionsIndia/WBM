(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95468,e=>{"use strict";let t=(0,e.i(75254).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",0,t],95468)},72520,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",0,t],72520)},83890,e=>{"use strict";var t=e.i(43476),i=e.i(33623),a=e.i(71645),r=e.i(90072),l=e.i(8560);let s={square:0,circle:1,triangle:2,diamond:3},n=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,o=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     2
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`;e.s(["default",0,({variant:e="square",pixelSize:c=3,color:d="#B497CF",className:u,style:m,antialias:f=!0,patternScale:p=2,patternDensity:x=1,liquid:h=!1,liquidStrength:g=.1,liquidRadius:y=1,pixelSizeJitter:b=0,enableRipples:w=!0,rippleIntensityScale:C=1,rippleThickness:j=.1,rippleSpeed:S=.3,liquidWobbleSpeed:k=4.5,autoPauseOffscreen:N=!0,speed:E=.5,transparent:R=!0,edgeFade:P=.5,noiseAmount:A=0})=>{let T=(0,a.useRef)(null),M=(0,a.useRef)({visible:!0}),z=(0,a.useRef)(E),B=(0,a.useRef)(null),I=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=T.current;if(!e)return;let t=new IntersectionObserver(([e])=>{M.current.visible=e.isIntersecting},{threshold:.01});return t.observe(e),()=>t.disconnect()},[]),(0,a.useEffect)(()=>{let t=T.current;if(!t)return;z.current=E;let a={antialias:f,liquid:h,noiseAmount:A},u=!1;if(B.current){if(I.current){for(let e of["antialias","liquid","noiseAmount"])if(I.current[e]!==a[e]){u=!0;break}}}else u=!0;if(u){let a,u,E;if(B.current){let e=B.current;e.resizeObserver?.disconnect(),cancelAnimationFrame(e.raf),e.quad?.geometry.dispose(),e.material.dispose(),e.composer?.dispose(),e.renderer.dispose(),e.renderer.forceContextLoss(),e.renderer.domElement.parentElement===t&&t.removeChild(e.renderer.domElement),B.current=null}let T=document.createElement("canvas"),I=new l.WebGLRenderer({canvas:T,antialias:f,alpha:!0,powerPreference:"high-performance"});I.domElement.style.width="100%",I.domElement.style.height="100%",I.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(I.domElement),R?I.setClearAlpha(0):I.setClearColor(0,1);let q={uResolution:{value:new r.Vector2(0,0)},uTime:{value:0},uColor:{value:new r.Color(d)},uClickPos:{value:Array.from({length:10},()=>new r.Vector2(-1,-1))},uClickTimes:{value:new Float32Array(10)},uShapeType:{value:s[e]??0},uPixelSize:{value:c*I.getPixelRatio()},uScale:{value:p},uDensity:{value:x},uPixelJitter:{value:b},uEnableRipples:{value:+!!w},uRippleSpeed:{value:S},uRippleThickness:{value:j},uRippleIntensity:{value:C},uEdgeFade:{value:P}},L=new r.Scene,W=new r.OrthographicCamera(-1,1,1,-1,0,1),D=new r.ShaderMaterial({vertexShader:n,fragmentShader:o,uniforms:q,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:r.GLSL3}),U=new r.PlaneGeometry(2,2),_=new r.Mesh(U,D);L.add(_);let O=new r.Clock,V=()=>{let e=t.clientWidth||1,i=t.clientHeight||1;I.setSize(e,i,!1),q.uResolution.value.set(I.domElement.width,I.domElement.height),B.current?.composer&&B.current.composer.setSize(I.domElement.width,I.domElement.height),q.uPixelSize.value=c*I.getPixelRatio()};V();let G=new ResizeObserver(V);G.observe(t);let H=1e3*(()=>{if(window.crypto?.getRandomValues){let e=new Uint32Array(1);return window.crypto.getRandomValues(e),e[0]/0xffffffff}return Math.random()})();if(h){var m,F;let e;(u=(()=>{let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d");if(!t)throw Error("2D context not available");t.fillStyle="black",t.fillRect(0,0,e.width,e.height);let i=new r.Texture(e);i.minFilter=r.LinearFilter,i.magFilter=r.LinearFilter,i.generateMipmaps=!1;let a=[],l=null,s=6.4,n=e=>{let i={x:64*e.x,y:(1-e.y)*64},a=1;if(e.age<19.2)a=Math.sin(e.age/19.2*Math.PI/2);else{let t;a=-(t=1-(e.age-19.2)/44.8)*(t-2)||0}a*=e.force;let r=`${(e.vx+1)/2*255}, ${(e.vy+1)/2*255}, ${255*a}`;t.shadowOffsetX=320,t.shadowOffsetY=320,t.shadowBlur=s,t.shadowColor=`rgba(${r},${.22*a})`,t.beginPath(),t.fillStyle=`rgba(${r},${a})`,t.arc(i.x-320,i.y-320,s,0,2*Math.PI),t.fill()};return{canvas:e,texture:i,addTouch:e=>{let t=0,i=0,r=0;if(l){let a=e.x-l.x,s=e.y-l.y;if(0===a&&0===s)return;let n=a*a+s*s,o=Math.sqrt(n);i=a/(o||1),r=s/(o||1),t=Math.min(1e4*n,1)}l={x:e.x,y:e.y},a.push({x:e.x,y:e.y,age:0,force:t,vx:i,vy:r})},update:()=>{t.fillStyle="black",t.fillRect(0,0,e.width,e.height);for(let e=a.length-1;e>=0;e--){let t=a[e],i=.015625*t.force*(1-t.age/64);t.x+=t.vx*i,t.y+=t.vy*i,t.age++,t.age>64&&a.splice(e,1)}for(let e=0;e<a.length;e++)n(a[e]);i.needsUpdate=!0},set radiusScale(v){s=6.4*v},get radiusScale(){return s/6.4},size:64}})()).radiusScale=y,a=new i.EffectComposer(I);let t=new i.RenderPass(L,W);m=u.texture,F={strength:g,freq:k},e=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `,E=new i.Effect("LiquidEffect",e,{uniforms:new Map([["uTexture",new r.Uniform(m)],["uStrength",new r.Uniform(F?.strength??.025)],["uTime",new r.Uniform(0)],["uFreq",new r.Uniform(F?.freq??4.5)]])});let l=new i.EffectPass(W,E);l.renderToScreen=!0,a.addPass(t),a.addPass(l)}if(A>0){a||(a=new i.EffectComposer(I)).addPass(new i.RenderPass(L,W));let e=new i.Effect("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new r.Uniform(0)],["uAmount",new r.Uniform(A)]])}),t=new i.EffectPass(W,e);t.renderToScreen=!0,a&&a.passes.length>0&&a.passes.forEach(e=>e.renderToScreen=!1),a.addPass(t)}a&&a.setSize(I.domElement.width,I.domElement.height);let $=e=>{let t=I.domElement.getBoundingClientRect(),i=I.domElement.width/t.width,a=I.domElement.height/t.height;return{fx:(e.clientX-t.left)*i,fy:(t.height-(e.clientY-t.top))*a,w:I.domElement.width,h:I.domElement.height}};I.domElement.addEventListener("pointerdown",e=>{let{fx:t,fy:i}=$(e),a=B.current?.clickIx??0;q.uClickPos.value[a].set(t,i),q.uClickTimes.value[a]=q.uTime.value,B.current&&(B.current.clickIx=(a+1)%10)},{passive:!0}),I.domElement.addEventListener("pointermove",e=>{if(!u)return;let{fx:t,fy:i,w:a,h:r}=$(e);u.addTouch({x:t/a,y:i/r})},{passive:!0});let K=()=>{if(N&&!M.current.visible)return void requestAnimationFrame(K);q.uTime.value=H+O.getElapsedTime()*z.current,E&&(E.uniforms.get("uTime").value=q.uTime.value),a?(u&&u.update(),a.passes.forEach(e=>{let t=e.effects;t&&t.forEach(e=>{let t=e.uniforms?.get("uTime");t&&(t.value=q.uTime.value)})}),a.render()):I.render(L,W),requestAnimationFrame(K)};B.current={renderer:I,scene:L,camera:W,material:D,clock:O,clickIx:0,uniforms:q,resizeObserver:G,raf:requestAnimationFrame(K),quad:_,timeOffset:H,composer:a,touch:u,liquidEffect:E}}else{let t=B.current;if(t.uniforms.uShapeType.value=s[e]??0,t.uniforms.uPixelSize.value=c*t.renderer.getPixelRatio(),t.uniforms.uColor.value.set(d),t.uniforms.uScale.value=p,t.uniforms.uDensity.value=x,t.uniforms.uPixelJitter.value=b,t.uniforms.uEnableRipples.value=+!!w,t.uniforms.uRippleIntensity.value=C,t.uniforms.uRippleThickness.value=j,t.uniforms.uRippleSpeed.value=S,t.uniforms.uEdgeFade.value=P,R?t.renderer.setClearAlpha(0):t.renderer.setClearColor(0,1),t.liquidEffect){let e=t.liquidEffect.uniforms.get("uStrength");e&&(e.value=g);let i=t.liquidEffect.uniforms.get("uFreq");i&&(i.value=k)}t.touch&&(t.touch.radiusScale=y)}return I.current=a,()=>{if(B.current&&u||!B.current)return;let e=B.current;e.resizeObserver?.disconnect(),cancelAnimationFrame(e.raf),e.quad?.geometry.dispose(),e.material.dispose(),e.composer?.dispose(),e.renderer.dispose(),e.renderer.forceContextLoss(),e.renderer.domElement.parentElement===t&&t.removeChild(e.renderer.domElement),B.current=null}},[f,h,A,c,p,x,w,C,j,S,b,P,R,g,y,k,N,e,d,E]),(0,t.jsx)("div",{ref:T,className:`pixel-blast-container ${u??""}`,style:{...m,width:"100%",height:"100%",position:"relative",overflow:"hidden"},"aria-label":"PixelBlast interactive background"})}])},78461,e=>{"use strict";var t=e.i(43476),i=e.i(46932),a=e.i(95468),r=e.i(72520),l=e.i(83890),s=e.i(59544);let n=()=>{let e=[{title:"Agribusiness",icon:(0,t.jsx)(a.CheckCircle2,{size:24,className:"text-[var(--c-lime)]"}),image:"/WBM/media/Agribusiness.jpg",desc:"Precision-ag electronics and farm robotics depend on rare-earth motors and PCB-grade copper. We close the loop on decommissioned hardware.",tags:["Cu","Nd","Al"],link:"/industries/agribusiness"},{title:"Advanced Manufacturing",icon:(0,t.jsx)(a.CheckCircle2,{size:24,className:"text-[var(--c-lime)]"}),image:"/WBM/media/AdvancedManufacturing.jpg",desc:"Industrial robotics and CNC tooling consume permanent magnets and high-purity copper at scale. We supply OEM-grade powders and cathodes.",tags:["Cu","Nd","Dy","Ti"],link:"/industries/manufacturing"},{title:"Automotive & Mobility",icon:(0,t.jsx)(a.CheckCircle2,{size:24,className:"text-[var(--c-lime)]"}),image:"/WBM/media/ElectricVehicles.jpg",desc:"Every EV cell and traction motor passes through our supply chain logic. We reclaim Li-Co-Ni-Mn cathodes and Nd-Dy magnets.",tags:["Li","Co","Ni","Nd"],link:"/industries/automotive"},{title:"Financial Services",icon:(0,t.jsx)(a.CheckCircle2,{size:24,className:"text-[var(--c-lime)]"}),image:"/WBM/media/FinancialServices.jpg",desc:"Lenders and insurers use our published recovery KPIs and Battery Passport data to model risk and validate ESG claims.",tags:["Au","Ag"],link:"/industries/finance"},{title:"Healthcare & Life Sciences",icon:(0,t.jsx)(a.CheckCircle2,{size:24,className:"text-[var(--c-lime)]"}),image:"/WBM/media/Healthcare.jpg",desc:"MRI machines, surgical robots, and implantable devices use rare-earth magnets and titanium. We recover magnet assemblies.",tags:["Nd","Dy","Ti","Pd"],link:"/industries/healthcare"},{title:"Energy & Natural Resources",icon:(0,t.jsx)(a.CheckCircle2,{size:24,className:"text-[var(--c-lime)]"}),image:"/WBM/media/EnergyPower.jpg",desc:"Wind turbines, grid-scale storage, and solar inverters draw on every mineral category we touch. Second-life supply for green-energy.",tags:["Nd","Dy","Cu","Ag","Li"],link:"/industries/energy"},{title:"Media & Entertainment",icon:(0,t.jsx)(a.CheckCircle2,{size:24,className:"text-[var(--c-lime)]"}),image:"/WBM/media/MediaEntertainment.jpg",desc:"Studios and broadcasters retire petabytes of HDD and broadcast hardware annually. We extract Nd magnets and PCB-grade Au, Ag, Pd.",tags:["Au","Ag","Pd"],link:"/industries/media"},{title:"Telecommunications",icon:(0,t.jsx)(a.CheckCircle2,{size:24,className:"text-[var(--c-lime)]"}),image:"/WBM/media/Telecommunications.jpg",desc:"5G base stations, fibre transceivers, and end-of-life handsets are dense with copper, gold, and palladium.",tags:["Cu","Au","Pd"],link:"/industries/telecom"},{title:"Technology Services",icon:(0,t.jsx)(a.CheckCircle2,{size:24,className:"text-[var(--c-lime)]"}),image:"/WBM/media/DataCentersAI.jpg",desc:"Hyperscalers refresh server fleets every 3–5 years. We integrate with their asset-disposition programs with chain-of-custody.",tags:["Au","Ag","Cu","Pd"],link:"/industries/tech-services"},{title:"Social & Public Sector",icon:(0,t.jsx)(a.CheckCircle2,{size:24,className:"text-[var(--c-lime)]"}),image:"/WBM/media/PublicSector.jpg",desc:"Federal, state, and municipal IT modernisation generates secure-disposal e-waste at scale. We deliver compliant recovery.",tags:["Au","Ag","Cu"],link:"/industries/public-sector"},{title:"Forest Products",icon:(0,t.jsx)(a.CheckCircle2,{size:24,className:"text-[var(--c-lime)]"}),image:"/WBM/media/ForestProducts.jpg",desc:"Sawmill electrification and biomass-energy plants run on rugged drives and inverters. Circular path for power-electronics.",tags:["Cu","Al"],link:"/industries/forest"},{title:"Aerospace & Defense",icon:(0,t.jsx)(a.CheckCircle2,{size:24,className:"text-[var(--c-lime)]"}),image:"/WBM/media/AerospaceDefense.jpg",desc:"Strategic mineral security and aerospace-grade purity for high-performance applications requiring absolute traceability.",tags:["Nd","Dy","Ti","Co"],link:"/industries/aerospace"}];return(0,t.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500",children:[(0,t.jsxs)("section",{className:"relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-0",children:(0,t.jsx)(l.default,{pixelSize:5,color:"#c1ff00",patternDensity:.8,speed:.3})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"}),(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center",children:(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-6 md:mb-8",children:[(0,t.jsx)("div",{className:"w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"}),(0,t.jsx)("span",{className:"text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]",children:"Sector Expertise"})]}),(0,t.jsx)("h1",{className:"text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase",children:"Industries."}),(0,t.jsx)("p",{className:"text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10",children:"Securing the supply chain for global manufacturing. WBM provides a semi-circle of allied geographies, bypassing non-allied supply chain risks."})]})})]}),(0,t.jsx)("section",{className:"py-24 bg-[var(--c-bg)] relative overflow-hidden",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-6",children:[(0,t.jsxs)("div",{className:"text-center mb-20",children:[(0,t.jsxs)("h2",{className:"text-3xl md:text-5xl font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase",children:["The Allied ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Sectors."})]}),(0,t.jsx)("p",{className:"text-lg text-[var(--c-fg3)] font-medium max-w-2xl mx-auto",children:"Providing mission-critical mineral security across 12 strategic industry layers."})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((e,a)=>(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.05*a},className:"group relative rounded-[32px] bg-[var(--c-bg2)] border border-[var(--c-border)] hover:border-[var(--c-lime)]/50 transition-all duration-500 overflow-hidden flex flex-col h-[480px]",children:[(0,t.jsxs)("div",{className:"absolute inset-0 z-0",children:[(0,t.jsx)("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000"}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-[var(--c-bg2)] via-[var(--c-bg2)]/80 to-transparent"})]}),(0,t.jsxs)("div",{className:"relative z-10 p-10 flex flex-col h-full",children:[(0,t.jsxs)("div",{className:"flex justify-between items-start mb-6",children:[(0,t.jsx)("div",{className:"w-14 h-14 rounded-2xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] shadow-inner group-hover:bg-[var(--c-lime)] group-hover:text-black transition-all duration-500",children:e.icon}),(0,t.jsxs)("div",{className:"text-[10px] font-black text-[var(--c-lime)] uppercase tracking-widest opacity-60",children:["Layer 0",a+1]})]}),(0,t.jsx)("h3",{className:"text-2xl font-black text-[var(--c-fg)] tracking-tight uppercase mb-4 leading-tight",children:e.title}),(0,t.jsx)("p",{className:"text-[var(--c-fg3)] font-medium leading-relaxed mb-8 text-sm flex-1",children:e.desc}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2 mb-10",children:e.tags.map(e=>(0,t.jsx)("span",{className:"px-2.5 py-1 rounded bg-[var(--c-fg)]/5 text-[9px] font-black text-[var(--c-lime)] uppercase tracking-widest border border-[var(--c-lime)]/20 backdrop-blur-sm",children:e},e))}),(0,t.jsxs)("a",{href:e.link,className:"inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--c-lime)] hover:gap-3 transition-all",children:["Strategic Details ",(0,t.jsx)(r.ArrowRight,{size:14})]})]})]},a))})]})}),(0,t.jsxs)("section",{className:"py-12 bg-[#151515] text-white overflow-hidden relative",children:[(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",children:[(0,t.jsxs)("h2",{className:"text-4xl md:text-6xl font-bold mb-12 tracking-tight max-w-4xl mx-auto leading-tight",children:["Securing the supply chain for ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"global manufacturing"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12 mt-12",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-6xl font-bold text-white mb-4 tracking-tighter",children:"50+"}),(0,t.jsx)("h3",{className:"text-xl font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest",children:"Global Partners"}),(0,t.jsx)("p",{className:"text-gray-400 font-medium",children:"Leading OEMs and technology providers trust WBM for their material security needs."})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-6xl font-bold text-white mb-4 tracking-tighter",children:"12"}),(0,t.jsx)("h3",{className:"text-xl font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest",children:"Industry Sectors"}),(0,t.jsx)("p",{className:"text-gray-400 font-medium",children:"Providing specialized recovery and sourcing solutions across a diverse range of sectors."})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-6xl font-bold text-white mb-4 tracking-tighter",children:"100%"}),(0,t.jsx)("h3",{className:"text-xl font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest",children:"Traceability"}),(0,t.jsx)("p",{className:"text-gray-400 font-medium",children:"Every gram of material we recover is fully documented from collection to refinement."})]})]})]}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-5 pointer-events-none",children:(0,t.jsxs)("svg",{width:"100%",height:"100%",className:"w-full h-full",children:[(0,t.jsx)("pattern",{id:"grid-industries",width:"60",height:"60",patternUnits:"userSpaceOnUse",children:(0,t.jsx)("path",{d:"M 60 0 L 0 0 0 60",fill:"none",stroke:"white",strokeWidth:"0.5"})}),(0,t.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid-industries)"})]})})]}),(0,t.jsx)("section",{className:"py-12 bg-[var(--c-bg)]",children:(0,t.jsxs)("div",{className:"max-w-3xl mx-auto px-4 text-center",children:[(0,t.jsx)("h2",{className:"text-4xl font-bold text-[var(--c-fg)] tracking-tight mb-8",children:"Ready to discuss your industry requirements?"}),(0,t.jsx)("p",{className:"text-xl text-gray-500 font-medium mb-12",children:"Our experts are ready to design a custom recovery and sourcing program tailored to your sector's unique needs."}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-center gap-6",children:[(0,t.jsx)(s.default,{href:"/contact",size:"lg",children:"Consult With Our Experts"}),(0,t.jsx)(s.default,{size:"lg",variant:"outline",children:"Request Industry Specs"})]})]})})]})};e.s(["default",0,function(){return(0,t.jsx)(n,{})}],78461)}]);