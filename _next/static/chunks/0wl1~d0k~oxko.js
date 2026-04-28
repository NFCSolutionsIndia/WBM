(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,53604,e=>{"use strict";var a=e.i(94964);class t extends a.Geometry{constructor(e,{attributes:a={}}={}){Object.assign(a,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,a)}}e.s(["Triangle",0,t])},48256,e=>{"use strict";let a=(0,e.i(75254).default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);e.s(["Globe",0,a],48256)},10344,e=>{"use strict";var a=e.i(43476),t=e.i(21663),s=e.i(56850),l=e.i(80075),r=e.i(53604),i=e.i(71645);function o(e){let a=e.replace("#","");return[parseInt(a.slice(0,2),16)/255,parseInt(a.slice(2,4),16)/255,parseInt(a.slice(4,6),16)/255]}let n=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,c=`
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform float uSpeed;
uniform float uInnerLines;
uniform float uOuterLines;
uniform float uWarpIntensity;
uniform float uRotation;
uniform float uEdgeFadeWidth;
uniform float uColorCycleSpeed;
uniform float uBrightness;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec2 uMouse;
uniform float uMouseInfluence;
uniform bool uEnableMouse;

#define HALF_PI 1.5707963

float hashF(float n) {
  return fract(sin(n * 127.1) * 43758.5453123);
}

float smoothNoise(float x) {
  float i = floor(x);
  float f = fract(x);
  float u = f * f * (3.0 - 2.0 * f);
  return mix(hashF(i), hashF(i + 1.0), u);
}

float displaceA(float coord, float t) {
  float result = sin(coord * 2.123) * 0.2;
  result += sin(coord * 3.234 + t * 4.345) * 0.1;
  result += sin(coord * 0.589 + t * 0.934) * 0.5;
  return result;
}

float displaceB(float coord, float t) {
  float result = sin(coord * 1.345) * 0.3;
  result += sin(coord * 2.734 + t * 3.345) * 0.2;
  result += sin(coord * 0.189 + t * 0.934) * 0.3;
  return result;
}

vec2 rotate2D(vec2 p, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}

void main() {
  vec2 coords = gl_FragCoord.xy / uResolution.xy;
  coords = coords * 2.0 - 1.0;
  coords = rotate2D(coords, uRotation);

  float halfT = uTime * uSpeed * 0.5;
  float fullT = uTime * uSpeed;

  float mouseWarp = 0.0;
  if (uEnableMouse) {
    vec2 mPos = rotate2D(uMouse * 2.0 - 1.0, uRotation);
    float mDist = length(coords - mPos);
    mouseWarp = uMouseInfluence * exp(-mDist * mDist * 4.0);
  }

  float warpAx = coords.x + displaceA(coords.y, halfT) * uWarpIntensity + mouseWarp;
  float warpAy = coords.y - displaceA(coords.x * cos(fullT) * 1.235, halfT) * uWarpIntensity;
  float warpBx = coords.x + displaceB(coords.y, halfT) * uWarpIntensity + mouseWarp;
  float warpBy = coords.y - displaceB(coords.x * sin(fullT) * 1.235, halfT) * uWarpIntensity;

  vec2 fieldA = vec2(warpAx, warpAy);
  vec2 fieldB = vec2(warpBx, warpBy);
  vec2 blended = mix(fieldA, fieldB, mix(fieldA, fieldB, 0.5));

  float fadeTop = smoothstep(uEdgeFadeWidth, uEdgeFadeWidth + 0.4, blended.y);
  float fadeBottom = smoothstep(-uEdgeFadeWidth, -(uEdgeFadeWidth + 0.4), blended.y);
  float vMask = 1.0 - max(fadeTop, fadeBottom);

  float tileCount = mix(uOuterLines, uInnerLines, vMask);
  float scaledY = blended.y * tileCount;
  float nY = smoothNoise(abs(scaledY));

  float ridge = pow(
    step(abs(nY - blended.x) * 2.0, HALF_PI) * cos(2.0 * (nY - blended.x)),
    5.0
  );

  float lines = 0.0;
  for (float i = 1.0; i < 3.0; i += 1.0) {
    lines += pow(max(fract(scaledY), fract(-scaledY)), i * 2.0);
  }

  float pattern = vMask * lines;

  float cycleT = fullT * uColorCycleSpeed;
  float rChannel = (pattern + lines * ridge) * (cos(blended.y + cycleT * 0.234) * 0.5 + 1.0);
  float gChannel = (pattern + vMask * ridge) * (sin(blended.x + cycleT * 1.745) * 0.5 + 1.0);
  float bChannel = (pattern + lines * ridge) * (cos(blended.x + cycleT * 0.534) * 0.5 + 1.0);

  vec3 col = (rChannel * uColor1 + gChannel * uColor2 + bChannel * uColor3) * uBrightness;
  float alpha = clamp(length(col), 0.0, 1.0);

  gl_FragColor = vec4(col, alpha);
}
`;e.s(["default",0,function({speed:e=.3,innerLineCount:d=32,outerLineCount:m=36,warpIntensity:x=1,rotation:u=-45,edgeFadeWidth:p=0,colorCycleSpeed:h=1,brightness:f=.2,color1:v="#ffffff",color2:g="#ffffff",color3:b="#ffffff",enableMouseInteraction:w=!0,mouseInfluence:j=2}){let y=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let a,i;if(!y.current)return;let N=y.current,k=new t.Renderer({alpha:!0,premultipliedAlpha:!1}),C=k.gl;C.clearColor(0,0,0,0);let T=[.5,.5],M=[.5,.5];function A(e){let a=C.canvas.getBoundingClientRect();M=[(e.clientX-a.left)/a.width,1-(e.clientY-a.top)/a.height]}function z(){M=[.5,.5]}function I(){k.setSize(N.offsetWidth,N.offsetHeight),a&&(a.uniforms.uResolution.value=[C.canvas.width,C.canvas.height,C.canvas.width/C.canvas.height])}window.addEventListener("resize",I),I();let F=new r.Triangle(C),W=u*Math.PI/180;a=new s.Program(C,{vertex:n,fragment:c,uniforms:{uTime:{value:0},uResolution:{value:[C.canvas.width,C.canvas.height,C.canvas.width/C.canvas.height]},uSpeed:{value:e},uInnerLines:{value:d},uOuterLines:{value:m},uWarpIntensity:{value:x},uRotation:{value:W},uEdgeFadeWidth:{value:p},uColorCycleSpeed:{value:h},uBrightness:{value:f},uColor1:{value:o(v)},uColor2:{value:o(g)},uColor3:{value:o(b)},uMouse:{value:new Float32Array([.5,.5])},uMouseInfluence:{value:j},uEnableMouse:{value:w}}});let E=new l.Mesh(C,{geometry:F,program:a});return N.appendChild(C.canvas),w&&(C.canvas.addEventListener("mousemove",A),C.canvas.addEventListener("mouseleave",z)),i=requestAnimationFrame(function e(t){i=requestAnimationFrame(e),a.uniforms.uTime.value=.001*t,w?(T[0]+=.05*(M[0]-T[0]),T[1]+=.05*(M[1]-T[1]),a.uniforms.uMouse.value[0]=T[0],a.uniforms.uMouse.value[1]=T[1]):(a.uniforms.uMouse.value[0]=.5,a.uniforms.uMouse.value[1]=.5),k.render({scene:E})}),()=>{cancelAnimationFrame(i),window.removeEventListener("resize",I),w&&(C.canvas.removeEventListener("mousemove",A),C.canvas.removeEventListener("mouseleave",z)),N.contains(C.canvas)&&N.removeChild(C.canvas),C.getExtension("WEBGL_lose_context")?.loseContext()}},[e,d,m,x,u,p,h,f,v,g,b,w,j]),(0,a.jsx)("div",{ref:y,style:{width:"100%",height:"100%"}})}])},78299,e=>{"use strict";var a=e.i(43476);e.i(71645);var t=e.i(46932),s=e.i(75254);let l=(0,s.default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]),r=(0,s.default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);var i=e.i(14764);let o=(0,s.default)("message-circle",[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]);var n=e.i(48256);let c=(0,s.default)("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]);var d=e.i(64659),m=e.i(10344),x=e.i(59544);let u=()=>(0,a.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500",children:[(0,a.jsxs)("section",{className:"relative min-h-[60vh] md:h-[60vh] flex items-center overflow-hidden bg-black pt-32 pb-16 md:pt-24 md:pb-0",children:[(0,a.jsx)("div",{className:"absolute inset-0 z-0",children:(0,a.jsx)(m.default,{speed:.2,color1:"#c1ff00",color2:"#ffffff",color3:"#8bc34a",brightness:.1})}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"}),(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center",children:(0,a.jsxs)(t.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[(0,a.jsxs)("div",{className:"inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white mb-6 md:mb-8 uppercase text-[10px] md:text-xs font-bold tracking-widest",children:[(0,a.jsx)("div",{className:"w-2 h-2 bg-[#8bc34a] rounded-full shadow-[0_0_10px_#8bc34a]"})," Get in touch"]}),(0,a.jsxs)("h1",{className:"text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6 md:mb-10",children:["Let's build a ",(0,a.jsx)("br",{className:"hidden sm:block"}),(0,a.jsx)("span",{className:"text-[var(--c-lime)]",children:"sustainable"})," future"]}),(0,a.jsx)("p",{className:"text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto",children:"Our team of recovery specialists and supply chain experts is ready to help you transform your waste management strategy."})]})}),(0,a.jsx)("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:(0,a.jsxs)("svg",{width:"100%",height:"100%",className:"w-full h-full",children:[(0,a.jsx)("pattern",{id:"grid-contact",width:"60",height:"60",patternUnits:"userSpaceOnUse",children:(0,a.jsx)("path",{d:"M 60 0 L 0 0 0 60",fill:"none",stroke:"white",strokeWidth:"1"})}),(0,a.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid-contact)"})]})})]}),(0,a.jsxs)("section",{className:"relative py-12 md:py-24 bg-[var(--c-bg)]",children:[(0,a.jsx)("div",{className:"absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--c-lime)]/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"}),(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4 md:px-8 relative z-10",children:(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row gap-12 lg:gap-24",children:[(0,a.jsxs)("div",{className:"w-full lg:w-[40%] flex flex-col gap-10 md:gap-16",children:[(0,a.jsxs)("div",{className:"space-y-6 md:space-y-8",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("div",{className:"w-8 h-px bg-[var(--c-lime)]"}),(0,a.jsx)("h2",{className:"text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--c-lime)]",children:"Direct Channels"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:gap-8",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4 md:gap-5 group",children:[(0,a.jsx)("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[var(--c-fg)]/5 flex items-center justify-center text-[var(--c-lime)] group-hover:bg-[var(--c-lime)] group-hover:text-white transition-all duration-300 flex-shrink-0",children:(0,a.jsx)(l,{size:20,className:"md:w-6 md:h-6"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest mb-1",children:"General Inquiries"}),(0,a.jsx)("div",{className:"text-base md:text-xl font-bold text-[var(--c-fg)] break-all",children:"hello@wastebe.com"})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4 md:gap-5 group",children:[(0,a.jsx)("div",{className:"w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[var(--c-fg)]/5 flex items-center justify-center text-[var(--c-lime)] group-hover:bg-[var(--c-lime)] group-hover:text-white transition-all duration-300 flex-shrink-0",children:(0,a.jsx)(r,{size:20,className:"md:w-6 md:h-6"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest mb-1",children:"Toll-Free Support"}),(0,a.jsx)("div",{className:"text-base md:text-xl font-bold text-[var(--c-fg)] break-all",children:"+1 (800) WASTE-BE"})]})]})]})]}),(0,a.jsxs)("div",{className:"space-y-10",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("div",{className:"w-8 h-px bg-[var(--c-lime)]"}),(0,a.jsx)("h2",{className:"text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--c-lime)]",children:"Global Footprint"})]}),(0,a.jsx)("div",{className:"space-y-10 md:space-y-12",children:[{city:"Los Angeles",type:"Global Headquarters",address:"123 Innovation Drive, CA 90001",phone:"+1 (800) 555-0198",email:"la@wastebeminerals.com"},{city:"Zurich",type:"R&D Lab",address:"Technology Park, 8005 Zurich",phone:"+41 44 123 4567",email:"zurich@wastebeminerals.com"},{city:"Singapore",type:"APAC Regional Hub",address:"10 Marina Boulevard, 018983",phone:"+65 6789 0123",email:"singapore@wastebeminerals.com"}].map((e,s)=>(0,a.jsxs)(t.motion.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"group flex gap-5 md:gap-6",children:[(0,a.jsxs)("div",{className:"text-[var(--c-fg)]/20 font-black text-2xl md:text-3xl group-hover:text-[var(--c-lime)] transition-colors duration-500 leading-none",children:["0",s+1]}),(0,a.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,a.jsx)("h3",{className:"text-lg md:text-xl font-bold text-[var(--c-fg)] mb-1 uppercase tracking-tight",children:e.city}),(0,a.jsx)("div",{className:"text-[9px] md:text-[10px] font-bold text-[var(--c-lime)] uppercase tracking-widest mb-3",children:e.type}),(0,a.jsx)("p",{className:"text-[var(--c-fg)]/70 font-medium text-sm md:text-base leading-relaxed mb-4 max-w-xs",children:e.address}),(0,a.jsxs)("div",{className:"flex flex-col gap-2 text-[11px] font-bold text-[var(--c-fg)]/60",children:[(0,a.jsxs)("span",{className:"flex items-center gap-2 hover:text-[var(--c-lime)] transition-colors cursor-pointer",children:[(0,a.jsx)(r,{size:12})," ",e.phone]}),(0,a.jsxs)("span",{className:"flex items-center gap-2 hover:text-[var(--c-lime)] transition-colors cursor-pointer break-all",children:[(0,a.jsx)(l,{size:12})," ",e.email]})]})]})]},s))})]})]}),(0,a.jsx)("div",{className:"w-full lg:w-[60%]",children:(0,a.jsxs)(t.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"bg-gray-50/50 dark:bg-white/[0.02] border border-[var(--c-border)] rounded-[24px] md:rounded-[32px] p-6 md:p-12 shadow-sm",children:[(0,a.jsxs)("div",{className:"mb-8 md:mb-10",children:[(0,a.jsx)("h2",{className:"text-3xl md:text-5xl font-black text-[var(--c-fg)] tracking-tighter uppercase mb-4",children:"Send a message"}),(0,a.jsx)("p",{className:"text-[var(--c-fg)]/60 font-medium text-base",children:"Tell us about your organization and how we can work together."})]}),(0,a.jsxs)("form",{className:"space-y-6 md:space-y-8",onSubmit:e=>e.preventDefault(),children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest ml-1",children:"Full Name"}),(0,a.jsx)("input",{type:"text",placeholder:"John Doe",className:"w-full bg-white dark:bg-white/[0.03] border border-[var(--c-border)] rounded-xl px-5 py-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-all placeholder:text-[var(--c-fg)]/30 shadow-inner"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest ml-1",children:"Work Email"}),(0,a.jsx)("input",{type:"email",placeholder:"john@company.com",className:"w-full bg-white dark:bg-white/[0.03] border border-[var(--c-border)] rounded-xl px-5 py-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-all placeholder:text-[var(--c-fg)]/30 shadow-inner"})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest ml-1",children:"Company"}),(0,a.jsx)("input",{type:"text",placeholder:"Organization",className:"w-full bg-white dark:bg-white/[0.03] border border-[var(--c-border)] rounded-xl px-5 py-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-all placeholder:text-[var(--c-fg)]/30 shadow-inner"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest ml-1",children:"Inquiry Type"}),(0,a.jsxs)("div",{className:"relative group",children:[(0,a.jsxs)("select",{className:"w-full appearance-none bg-white dark:bg-white/[0.03] border border-[var(--c-border)] rounded-xl px-5 py-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-all cursor-pointer pr-12 shadow-inner",children:[(0,a.jsx)("option",{className:"bg-[var(--c-bg)]",children:"Material Partnership"}),(0,a.jsx)("option",{className:"bg-[var(--c-bg)]",children:"E-Waste Processing"}),(0,a.jsx)("option",{className:"bg-[var(--c-bg)]",children:"Data Center Services"}),(0,a.jsx)("option",{className:"bg-[var(--c-bg)]",children:"Media Inquiry"})]}),(0,a.jsx)(d.ChevronDown,{className:"absolute right-5 top-1/2 -translate-y-1/2 text-[var(--c-fg)]/40 pointer-events-none group-hover:text-[var(--c-lime)] transition-colors",size:18})]})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("label",{className:"text-[10px] font-bold text-[var(--c-fg)]/60 uppercase tracking-widest ml-1",children:"How can we help?"}),(0,a.jsx)("textarea",{rows:5,placeholder:"Describe your request in detail...",className:"w-full bg-white dark:bg-white/[0.03] border border-[var(--c-border)] rounded-xl px-5 py-4 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-all resize-none placeholder:text-[var(--c-fg)]/30 shadow-inner"})]}),(0,a.jsx)(x.default,{type:"submit",className:"w-full h-14 md:h-16 shadow-lg shadow-[var(--c-lime)]/10",children:(0,a.jsxs)("div",{className:"flex items-center justify-center gap-3",children:[(0,a.jsx)("span",{children:"Submit Request"}),(0,a.jsx)(i.Send,{size:18})]})})]})]})})]})})]}),(0,a.jsx)("section",{className:"py-12 bg-[var(--c-fg)]/[0.02] border-y border-[var(--c-border)]",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-6 md:px-8",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12",children:[(0,a.jsxs)("div",{className:"text-center md:border-r border-[var(--c-border)] md:pr-12",children:[(0,a.jsx)(o,{size:28,className:"text-[var(--c-lime)] mx-auto mb-5"}),(0,a.jsx)("h3",{className:"text-lg font-bold text-[var(--c-fg)] mb-2 uppercase tracking-tight",children:"Live Chat"}),(0,a.jsx)("p",{className:"text-[var(--c-fg)]/60 text-sm mb-5 max-w-[200px] mx-auto",children:"Real-time support during business hours."}),(0,a.jsx)("button",{className:"text-[var(--c-lime)] text-[10px] font-bold uppercase tracking-widest hover:tracking-[0.2em] transition-all",children:"Start Chat ↗"})]}),(0,a.jsxs)("div",{className:"text-center md:border-r border-[var(--c-border)] md:px-12",children:[(0,a.jsx)(c,{size:28,className:"text-[var(--c-lime)] mx-auto mb-5"}),(0,a.jsx)("h3",{className:"text-lg font-bold text-[var(--c-fg)] mb-2 uppercase tracking-tight",children:"Working Hours"}),(0,a.jsx)("p",{className:"text-[var(--c-fg)]/60 text-sm mb-5 max-w-[200px] mx-auto",children:"Mon - Fri: 9:00 AM - 6:00 PM PST"}),(0,a.jsx)("button",{className:"text-[var(--c-lime)] text-[10px] font-bold uppercase tracking-widest hover:tracking-[0.2em] transition-all",children:"Schedule Call ↗"})]}),(0,a.jsxs)("div",{className:"text-center md:pl-12",children:[(0,a.jsx)(n.Globe,{size:28,className:"text-[var(--c-lime)] mx-auto mb-5"}),(0,a.jsx)("h3",{className:"text-lg font-bold text-[var(--c-fg)] mb-2 uppercase tracking-tight",children:"Global Network"}),(0,a.jsxs)("div",{className:"flex justify-center gap-3 mt-6",children:[(0,a.jsx)("div",{className:"w-10 h-10 rounded-xl bg-[var(--c-fg)]/5 flex items-center justify-center hover:bg-[var(--c-lime)] hover:text-white transition-all cursor-pointer",children:(0,a.jsx)(n.Globe,{size:16})}),(0,a.jsx)("div",{className:"w-10 h-10 rounded-xl bg-[var(--c-fg)]/5 flex items-center justify-center hover:bg-[var(--c-lime)] hover:text-white transition-all cursor-pointer",children:(0,a.jsx)(o,{size:16})}),(0,a.jsx)("div",{className:"w-10 h-10 rounded-xl bg-[var(--c-fg)]/5 flex items-center justify-center hover:bg-[var(--c-lime)] hover:text-white transition-all cursor-pointer",children:(0,a.jsx)(l,{size:16})})]})]})]})})})]});e.s(["default",0,function(){return(0,a.jsx)(u,{})}],78299)}]);