(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",0,t],39312)},78461,e=>{"use strict";var t=e.i(43476),a=e.i(46932),i=e.i(75254);let r=(0,i.default)("car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]),l=(0,i.default)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),s=(0,i.default)("plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]),n=(0,i.default)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);var o=e.i(39312);let c=(0,i.default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var d=e.i(33623),u=e.i(71645),m=e.i(90072),f=e.i(8560);let x={square:0,circle:1,triangle:2,diamond:3},p=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,h=`
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

#define FBM_OCTAVES     5
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
`,g=({variant:e="square",pixelSize:a=3,color:i="#B497CF",className:r,style:l,antialias:s=!0,patternScale:n=2,patternDensity:o=1,liquid:c=!1,liquidStrength:g=.1,liquidRadius:y=1,pixelSizeJitter:b=0,enableRipples:w=!0,rippleIntensityScale:j=1,rippleThickness:C=.1,rippleSpeed:S=.3,liquidWobbleSpeed:E=4.5,autoPauseOffscreen:N=!0,speed:k=.5,transparent:R=!0,edgeFade:P=.5,noiseAmount:T=0})=>{let A=(0,u.useRef)(null),M=(0,u.useRef)({visible:!0}),z=(0,u.useRef)(k),I=(0,u.useRef)(null),F=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let t=A.current;if(!t)return;z.current=k;let r={antialias:s,liquid:c,noiseAmount:T},l=!1;if(I.current){if(F.current){for(let e of["antialias","liquid","noiseAmount"])if(F.current[e]!==r[e]){l=!0;break}}}else l=!0;if(l){let r,l,k;if(I.current){let e=I.current;e.resizeObserver?.disconnect(),cancelAnimationFrame(e.raf),e.quad?.geometry.dispose(),e.material.dispose(),e.composer?.dispose(),e.renderer.dispose(),e.renderer.forceContextLoss(),e.renderer.domElement.parentElement===t&&t.removeChild(e.renderer.domElement),I.current=null}let A=document.createElement("canvas"),F=new f.WebGLRenderer({canvas:A,antialias:s,alpha:!0,powerPreference:"high-performance"});F.domElement.style.width="100%",F.domElement.style.height="100%",F.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(F.domElement),R?F.setClearAlpha(0):F.setClearColor(0,1);let B={uResolution:{value:new m.Vector2(0,0)},uTime:{value:0},uColor:{value:new m.Color(i)},uClickPos:{value:Array.from({length:10},()=>new m.Vector2(-1,-1))},uClickTimes:{value:new Float32Array(10)},uShapeType:{value:x[e]??0},uPixelSize:{value:a*F.getPixelRatio()},uScale:{value:n},uDensity:{value:o},uPixelJitter:{value:b},uEnableRipples:{value:+!!w},uRippleSpeed:{value:S},uRippleThickness:{value:C},uRippleIntensity:{value:j},uEdgeFade:{value:P}},L=new m.Scene,U=new m.OrthographicCamera(-1,1,1,-1,0,1),_=new m.ShaderMaterial({vertexShader:p,fragmentShader:h,uniforms:B,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:m.GLSL3}),D=new m.PlaneGeometry(2,2),O=new m.Mesh(D,_);L.add(O);let V=new m.Clock,G=()=>{let e=t.clientWidth||1,i=t.clientHeight||1;F.setSize(e,i,!1),B.uResolution.value.set(F.domElement.width,F.domElement.height),I.current?.composer&&I.current.composer.setSize(F.domElement.width,F.domElement.height),B.uPixelSize.value=a*F.getPixelRatio()};G();let W=new ResizeObserver(G);W.observe(t);let H=1e3*(()=>{if(window.crypto?.getRandomValues){let e=new Uint32Array(1);return window.crypto.getRandomValues(e),e[0]/0xffffffff}return Math.random()})();if(c){var u,q;let e;(l=(()=>{let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d");if(!t)throw Error("2D context not available");t.fillStyle="black",t.fillRect(0,0,e.width,e.height);let a=new m.Texture(e);a.minFilter=m.LinearFilter,a.magFilter=m.LinearFilter,a.generateMipmaps=!1;let i=[],r=null,l=6.4,s=e=>{let a={x:64*e.x,y:(1-e.y)*64},i=1;if(e.age<19.2)i=Math.sin(e.age/19.2*Math.PI/2);else{let t;i=-(t=1-(e.age-19.2)/44.8)*(t-2)||0}i*=e.force;let r=`${(e.vx+1)/2*255}, ${(e.vy+1)/2*255}, ${255*i}`;t.shadowOffsetX=320,t.shadowOffsetY=320,t.shadowBlur=l,t.shadowColor=`rgba(${r},${.22*i})`,t.beginPath(),t.fillStyle=`rgba(${r},${i})`,t.arc(a.x-320,a.y-320,l,0,2*Math.PI),t.fill()};return{canvas:e,texture:a,addTouch:e=>{let t=0,a=0,l=0;if(r){let i=e.x-r.x,s=e.y-r.y;if(0===i&&0===s)return;let n=i*i+s*s,o=Math.sqrt(n);a=i/(o||1),l=s/(o||1),t=Math.min(1e4*n,1)}r={x:e.x,y:e.y},i.push({x:e.x,y:e.y,age:0,force:t,vx:a,vy:l})},update:()=>{t.fillStyle="black",t.fillRect(0,0,e.width,e.height);for(let e=i.length-1;e>=0;e--){let t=i[e],a=.015625*t.force*(1-t.age/64);t.x+=t.vx*a,t.y+=t.vy*a,t.age++,t.age>64&&i.splice(e,1)}for(let e=0;e<i.length;e++)s(i[e]);a.needsUpdate=!0},set radiusScale(v){l=6.4*v},get radiusScale(){return l/6.4},size:64}})()).radiusScale=y,r=new d.EffectComposer(F);let t=new d.RenderPass(L,U);u=l.texture,q={strength:g,freq:E},e=`
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
    `,k=new d.Effect("LiquidEffect",e,{uniforms:new Map([["uTexture",new m.Uniform(u)],["uStrength",new m.Uniform(q?.strength??.025)],["uTime",new m.Uniform(0)],["uFreq",new m.Uniform(q?.freq??4.5)]])});let a=new d.EffectPass(U,k);a.renderToScreen=!0,r.addPass(t),r.addPass(a)}if(T>0){r||(r=new d.EffectComposer(F)).addPass(new d.RenderPass(L,U));let e=new d.Effect("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new m.Uniform(0)],["uAmount",new m.Uniform(T)]])}),t=new d.EffectPass(U,e);t.renderToScreen=!0,r&&r.passes.length>0&&r.passes.forEach(e=>e.renderToScreen=!1),r.addPass(t)}r&&r.setSize(F.domElement.width,F.domElement.height);let $=e=>{let t=F.domElement.getBoundingClientRect(),a=F.domElement.width/t.width,i=F.domElement.height/t.height;return{fx:(e.clientX-t.left)*a,fy:(t.height-(e.clientY-t.top))*i,w:F.domElement.width,h:F.domElement.height}};F.domElement.addEventListener("pointerdown",e=>{let{fx:t,fy:a}=$(e),i=I.current?.clickIx??0;B.uClickPos.value[i].set(t,a),B.uClickTimes.value[i]=B.uTime.value,I.current&&(I.current.clickIx=(i+1)%10)},{passive:!0}),F.domElement.addEventListener("pointermove",e=>{if(!l)return;let{fx:t,fy:a,w:i,h:r}=$(e);l.addTouch({x:t/i,y:a/r})},{passive:!0});let K=()=>{if(N&&!M.current.visible)return void requestAnimationFrame(K);B.uTime.value=H+V.getElapsedTime()*z.current,k&&(k.uniforms.get("uTime").value=B.uTime.value),r?(l&&l.update(),r.passes.forEach(e=>{let t=e.effects;t&&t.forEach(e=>{let t=e.uniforms?.get("uTime");t&&(t.value=B.uTime.value)})}),r.render()):F.render(L,U),requestAnimationFrame(K)};I.current={renderer:F,scene:L,camera:U,material:_,clock:V,clickIx:0,uniforms:B,resizeObserver:W,raf:requestAnimationFrame(K),quad:O,timeOffset:H,composer:r,touch:l,liquidEffect:k}}else{let t=I.current;if(t.uniforms.uShapeType.value=x[e]??0,t.uniforms.uPixelSize.value=a*t.renderer.getPixelRatio(),t.uniforms.uColor.value.set(i),t.uniforms.uScale.value=n,t.uniforms.uDensity.value=o,t.uniforms.uPixelJitter.value=b,t.uniforms.uEnableRipples.value=+!!w,t.uniforms.uRippleIntensity.value=j,t.uniforms.uRippleThickness.value=C,t.uniforms.uRippleSpeed.value=S,t.uniforms.uEdgeFade.value=P,R?t.renderer.setClearAlpha(0):t.renderer.setClearColor(0,1),t.liquidEffect){let e=t.liquidEffect.uniforms.get("uStrength");e&&(e.value=g);let a=t.liquidEffect.uniforms.get("uFreq");a&&(a.value=E)}t.touch&&(t.touch.radiusScale=y)}return F.current=r,()=>{if(I.current&&l||!I.current)return;let e=I.current;e.resizeObserver?.disconnect(),cancelAnimationFrame(e.raf),e.quad?.geometry.dispose(),e.material.dispose(),e.composer?.dispose(),e.renderer.dispose(),e.renderer.forceContextLoss(),e.renderer.domElement.parentElement===t&&t.removeChild(e.renderer.domElement),I.current=null}},[s,c,T,a,n,o,w,j,C,S,b,P,R,g,y,E,N,e,i,k]),(0,t.jsx)("div",{ref:A,className:`pixel-blast-container ${r??""}`,style:{...l,width:"100%",height:"100%",position:"relative",overflow:"hidden"},"aria-label":"PixelBlast interactive background"})};var y=e.i(59544);let b=()=>{let e=[{title:(0,t.jsxs)(t.Fragment,{children:["Electric ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Vehicles"})]}),icon:(0,t.jsx)(r,{size:32,className:"text-[var(--c-lime)]"}),image:"/WBM/media/ElectricVehicles.jpg",desc:"Supplying battery-grade Lithium, Cobalt, and Nickel recovered from end-of-life battery packs to support the global shift to sustainable mobility.",benefits:["High-purity material refinement","Battery-grade standards","Circular supply integration"]},{title:(0,t.jsxs)(t.Fragment,{children:["Data Centers & ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"AI"})]}),icon:(0,t.jsx)(l,{size:32,className:"text-[var(--c-lime)]"}),image:"/WBM/media/DataCentersAI.jpg",desc:"Secure decommissioning and material recovery for high-density compute infrastructure, GPUs, and enterprise storage systems.",benefits:["Certified data destruction","Precious metal recovery","Infrastructure asset recovery"]},{title:(0,t.jsxs)(t.Fragment,{children:["Aerospace & ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Defense"})]}),icon:(0,t.jsx)(s,{size:32,className:"text-[var(--c-lime)]"}),image:"/WBM/media/AerospaceDefense.jpg",desc:"Precision extraction of critical alloys and rare earth elements for high-performance applications requiring absolute traceability.",benefits:["Strategic mineral security","Aerospace-grade purity","Full lifecycle tracking"]},{title:(0,t.jsxs)(t.Fragment,{children:["Consumer ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Electronics"})]}),icon:(0,t.jsx)(n,{size:32,className:"text-[var(--c-lime)]"}),image:"/WBM/media/ConsumerElectronics.jpg",desc:"Large-scale recovery programs for smartphone, laptop, and wearable manufacturers to meet environmental targets.",benefits:["Zero-waste manufacturing","Closed-loop programs","Scalable collection networks"]},{title:(0,t.jsxs)(t.Fragment,{children:["Energy & ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Power"})]}),icon:(0,t.jsx)(o.Zap,{size:32,className:"text-[var(--c-lime)]"}),image:"/WBM/media/EnergyPower.jpg",desc:"Recovering critical conductors and storage materials from grid-scale infrastructure and renewable energy systems.",benefits:["Grid-scale material recovery","Copper & conductor extraction","Renewable supply support"]}];return(0,t.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500",children:[(0,t.jsxs)("section",{className:"relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-0",children:(0,t.jsx)(g,{pixelSize:5,color:"#c1ff00",patternDensity:.8,speed:.3})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"}),(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center",children:(0,t.jsxs)(a.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-6 md:mb-8",children:[(0,t.jsx)("div",{className:"w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"}),(0,t.jsx)("span",{className:"text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]",children:"Sector Expertise"})]}),(0,t.jsxs)("h1",{className:"text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase",children:["Solutions for ",(0,t.jsx)("br",{className:"hidden sm:block"}),(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"mission-critical"})," industries"]}),(0,t.jsx)("p",{className:"text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10",children:"We provide the critical minerals and material intelligence that power the world's most innovative sectors."})]})})]}),(0,t.jsx)("section",{className:"py-12",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsx)("div",{className:"grid grid-cols-1 gap-24",children:e.map((e,i)=>(0,t.jsxs)(a.motion.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},className:`flex flex-col ${i%2==1?"lg:flex-row-reverse":"lg:flex-row"} gap-16 items-center`,children:[(0,t.jsxs)("div",{className:"lg:w-1/2 relative",children:[(0,t.jsx)("div",{className:"rounded-[10px] overflow-hidden shadow-2xl aspect-[4/3]",children:(0,t.jsx)("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover"})}),(0,t.jsxs)("div",{className:`absolute ${i%2==1?"-left-8":"-right-8"} top-1/2 -translate-y-1/2 bg-[var(--c-bg)] p-8 rounded-[10px] shadow-2xl hidden md:block border border-[var(--c-border)]`,children:[(0,t.jsx)("div",{className:"w-16 h-16 bg-[var(--c-fg)]/5 rounded-[10px] flex items-center justify-center mb-4",children:e.icon}),(0,t.jsx)("div",{className:"text-sm font-bold text-[var(--c-fg)] uppercase tracking-widest",children:"Industry Leader"})]})]}),(0,t.jsxs)("div",{className:"lg:w-1/2",children:[(0,t.jsx)("h2",{className:"text-4xl font-bold text-[var(--c-fg)] mb-6 tracking-tight",children:e.title}),(0,t.jsx)("p",{className:"text-xl text-gray-500 font-medium leading-relaxed mb-10",children:e.desc}),(0,t.jsx)("div",{className:"space-y-4 mb-10",children:e.benefits.map((e,a)=>(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)(c,{size:24,className:"text-[#8bc34a]"}),(0,t.jsx)("span",{className:"text-lg text-[var(--c-fg)] font-bold",children:e})]},a))}),(0,t.jsxs)(y.default,{href:"/contact",className:"flex items-center gap-3",children:["Learn about ",e.title]})]})]},i))})})}),(0,t.jsxs)("section",{className:"py-12 bg-[#151515] text-white overflow-hidden relative",children:[(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center",children:[(0,t.jsxs)("h2",{className:"text-4xl md:text-6xl font-bold mb-12 tracking-tight max-w-4xl mx-auto leading-tight",children:["Securing the supply chain for ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"global manufacturing"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12 mt-12",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-6xl font-bold text-white mb-4 tracking-tighter",children:"50+"}),(0,t.jsx)("h3",{className:"text-xl font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest",children:"Global Partners"}),(0,t.jsx)("p",{className:"text-gray-400 font-medium",children:"Leading OEMs and technology providers trust WBM for their material security needs."})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-6xl font-bold text-white mb-4 tracking-tighter",children:"12"}),(0,t.jsx)("h3",{className:"text-xl font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest",children:"Industry Sectors"}),(0,t.jsx)("p",{className:"text-gray-400 font-medium",children:"Providing specialized recovery and sourcing solutions across a diverse range of sectors."})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-6xl font-bold text-white mb-4 tracking-tighter",children:"100%"}),(0,t.jsx)("h3",{className:"text-xl font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest",children:"Traceability"}),(0,t.jsx)("p",{className:"text-gray-400 font-medium",children:"Every gram of material we recover is fully documented from collection to refinement."})]})]})]}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-5 pointer-events-none",children:(0,t.jsxs)("svg",{width:"100%",height:"100%",className:"w-full h-full",children:[(0,t.jsx)("pattern",{id:"grid-industries",width:"60",height:"60",patternUnits:"userSpaceOnUse",children:(0,t.jsx)("path",{d:"M 60 0 L 0 0 0 60",fill:"none",stroke:"white",strokeWidth:"0.5"})}),(0,t.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid-industries)"})]})})]}),(0,t.jsx)("section",{className:"py-12 bg-[var(--c-bg)]",children:(0,t.jsxs)("div",{className:"max-w-3xl mx-auto px-4 text-center",children:[(0,t.jsx)("h2",{className:"text-4xl font-bold text-[var(--c-fg)] tracking-tight mb-8",children:"Ready to discuss your industry requirements?"}),(0,t.jsx)("p",{className:"text-xl text-gray-500 font-medium mb-12",children:"Our experts are ready to design a custom recovery and sourcing program tailored to your sector's unique needs."}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-center gap-6",children:[(0,t.jsx)(y.default,{href:"/contact",size:"lg",children:"Consult With Our Experts"}),(0,t.jsx)(y.default,{href:"/contact",size:"lg",variant:"outline",children:"Request Industry Specs"})]})]})})]})};e.s(["default",0,function(){return(0,t.jsx)(b,{})}],78461)}]);