(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",0,t],39312)},66992,e=>{"use strict";let t=(0,e.i(75254).default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);e.s(["Cpu",0,t],66992)},21218,e=>{"use strict";let t=(0,e.i(75254).default)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);e.s(["Activity",0,t],21218)},81418,e=>{"use strict";let t=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",0,t],81418)},55838,(e,t,a)=>{"use strict";var r=e.r(71645),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useState,n=r.useEffect,l=r.useLayoutEffect,c=r.useDebugValue;function o(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!i(e,a)}catch(e){return!0}}var d="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var a=t(),r=s({inst:{value:a,getSnapshot:t}}),i=r[0].inst,d=r[1];return l(function(){i.value=a,i.getSnapshot=t,o(i)&&d({inst:i})},[e,a,t]),n(function(){return o(i)&&d({inst:i}),e(function(){o(i)&&d({inst:i})})},[e]),c(a),a};a.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:d},2239,(e,t,a)=>{"use strict";t.exports=e.r(55838)},52822,(e,t,a)=>{"use strict";var r=e.r(71645),i=e.r(2239),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},n=i.useSyncExternalStore,l=r.useRef,c=r.useEffect,o=r.useMemo,d=r.useDebugValue;a.useSyncExternalStoreWithSelector=function(e,t,a,r,i){var m=l(null);if(null===m.current){var x={hasValue:!1,value:null};m.current=x}else x=m.current;var u=n(e,(m=o(function(){function e(e){if(!c){if(c=!0,n=e,e=r(e),void 0!==i&&x.hasValue){var t=x.value;if(i(t,e))return l=t}return l=e}if(t=l,s(n,e))return t;var a=r(e);return void 0!==i&&i(t,a)?(n=e,t):(n=e,l=a)}var n,l,c=!1,o=void 0===a?null:a;return[function(){return e(t())},null===o?void 0:function(){return e(o())}]},[t,a,r,i]))[0],m[1]);return c(function(){x.hasValue=!0,x.value=u},[u]),d(u),u}},30224,(e,t,a)=>{"use strict";t.exports=e.r(52822)},536,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(8560),i=e.i(90072),s=e.i(75056),n=e.i(80931),l=e.i(82897);Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array;let c=Math.PI/180,o=({children:e})=>(0,t.jsx)(s.Canvas,{dpr:[1,2],frameloop:"always",style:{width:"100%",height:"100%"},children:e}),d=`
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) +
           (c - a)* u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
}
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
float cnoise(vec3 P){
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;
  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));
  g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));
  g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;
  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x,Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x,Pf1.y,Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy,Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy,Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x,Pf0.y,Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x,Pf1.yz));
  float n111 = dot(g111, Pf1);
  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);
  vec2 n_yz = mix(n_z.xy,n_z.zw,fade_xyz.y);
  float n_xyz = mix(n_yz.x,n_yz.y,fade_xyz.x);
  return 2.2 * n_xyz;
}
`,m=(0,a.forwardRef)(({material:e,width:r,count:s,height:l},c)=>{let o=(0,a.useRef)(null);(0,a.useImperativeHandle)(c,()=>o.current);let d=(0,a.useMemo)(()=>(function(e,t,a){let r=new i.BufferGeometry,s=101*e*2,n=new Float32Array(3*s),l=new Uint32Array(100*e*6),c=new Float32Array(2*s),o=0,d=0,m=0,x=-(e*t+(e-1)*0)/2;for(let r=0;r<e;r++){let e=x+r*(t+0),i=300*Math.random(),s=300*Math.random();for(let r=0;r<=100;r++){let x=a*(r/100-.5),u=[e,x,0],g=[e+t,x,0];n.set([...u,...g],3*o);let v=r/100;if(c.set([i,v+s,i+1,v+s],m),r<100){let e=o,t=o+1,a=o+2,r=o+3;l.set([e,t,a,a,t,r],d),d+=6}o+=2,m+=4}}return r.setAttribute("position",new i.BufferAttribute(n,3)),r.setAttribute("uv",new i.BufferAttribute(c,2)),r.setIndex(new i.BufferAttribute(l,1)),r.computeVertexNormals(),r})(s,r,l),[s,r,l]);return(0,n.useFrame)((e,t)=>{o.current&&(o.current.material.uniforms.time.value+=.1*t)}),(0,t.jsx)("mesh",{ref:o,geometry:d,material:e})});m.displayName="MergedPlanes";let x=(0,a.forwardRef)((e,a)=>(0,t.jsx)(m,{ref:a,material:e.material,width:e.width,count:e.count,height:e.height}));x.displayName="PlaneNoise";let u=({position:e,color:r})=>{let i=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(!i.current)return;let e=i.current.shadow.camera;e&&(e.top=24,e.bottom=-24,e.left=-24,e.right=24,e.far=64,i.current.shadow.bias=-.004)},[]),(0,t.jsx)("directionalLight",{ref:i,color:r,intensity:1,position:e})};e.s(["default",0,({beamWidth:e=2,beamHeight:s=15,beamNumber:n=12,lightColor:m="#ffffff",speed:g=2,noiseIntensity:v=1.75,scale:f=.2,rotation:h=0,color:p})=>{let y=(0,a.useRef)(null),b=(0,a.useMemo)(()=>{let e,t;return function(e,t){let a=r.ShaderLib.physical,{vertexShader:s,fragmentShader:n,uniforms:l}=a,c=a.defines??{},o=i.UniformsUtils.clone(l),d=new e(t.material||{});d.color&&(o.diffuse.value=d.color),"roughness"in d&&(o.roughness.value=d.roughness),"metalness"in d&&(o.metalness.value=d.metalness),"envMap"in d&&(o.envMap.value=d.envMap),"envMapIntensity"in d&&(o.envMapIntensity.value=d.envMapIntensity),Object.entries(t.uniforms??{}).forEach(([e,t])=>{o[e]=null!==t&&"object"==typeof t&&"value"in t?t:{value:t}});let m=`${t.header}
${t.vertexHeader??""}
${s}`,x=`${t.header}
${t.fragmentHeader??""}
${n}`;for(let[e,a]of Object.entries(t.vertex??{}))m=m.replace(e,`${e}
${a}`);for(let[e,a]of Object.entries(t.fragment??{}))x=x.replace(e,`${e}
${a}`);return new i.ShaderMaterial({defines:{...c},uniforms:o,vertexShader:m,fragmentShader:x,lights:!0,fog:!!t.material?.fog})}(i.MeshStandardMaterial,{header:`
  varying vec3 vEye;
  varying float vNoise;
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float time;
  uniform float uSpeed;
  uniform float uNoiseIntensity;
  uniform float uScale;
  ${d}`,vertexHeader:`
  float getPos(vec3 pos) {
    vec3 noisePos =
      vec3(pos.x * 0., pos.y - uv.y, pos.z + time * uSpeed * 3.) * uScale;
    return cnoise(noisePos);
  }
  vec3 getCurrentPos(vec3 pos) {
    vec3 newpos = pos;
    newpos.z += getPos(pos);
    return newpos;
  }
  vec3 getNormal(vec3 pos) {
    vec3 curpos = getCurrentPos(pos);
    vec3 nextposX = getCurrentPos(pos + vec3(0.01, 0.0, 0.0));
    vec3 nextposZ = getCurrentPos(pos + vec3(0.0, -0.01, 0.0));
    vec3 tangentX = normalize(nextposX - curpos);
    vec3 tangentZ = normalize(nextposZ - curpos);
    return normalize(cross(tangentZ, tangentX));
  }`,fragmentHeader:"",vertex:{"#include <begin_vertex>":"transformed.z += getPos(transformed.xyz);","#include <beginnormal_vertex>":"objectNormal = getNormal(position.xyz);"},fragment:{"#include <dithering_fragment>":`
    float randomNoise = noise(gl_FragCoord.xy);
    gl_FragColor.rgb -= randomNoise / 15. * uNoiseIntensity;`},material:{fog:!0},uniforms:{diffuse:new i.Color(...(t=parseInt((e="#000000".replace("#","")).substring(0,2),16),[t/255,parseInt(e.substring(2,4),16)/255,parseInt(e.substring(4,6),16)/255])),time:{shared:!0,mixed:!0,linked:!0,value:0},roughness:.3,metalness:.3,uSpeed:{shared:!0,mixed:!0,linked:!0,value:g},envMapIntensity:10,uNoiseIntensity:v,uScale:f}})},[g,v,f]);return(0,t.jsxs)(o,{children:[(0,t.jsxs)("group",{rotation:[0,0,h*c],children:[(0,t.jsx)(x,{ref:y,material:b,count:n,width:e,height:s}),(0,t.jsx)(u,{color:p||m,position:[0,3,10]})]}),(0,t.jsx)("ambientLight",{intensity:1}),(0,t.jsx)("color",{attach:"background",args:["#000000"]}),(0,t.jsx)(l.PerspectiveCamera,{makeDefault:!0,position:[0,0,20],fov:30})]})}],536)},67954,e=>{"use strict";let t=(0,e.i(75254).default)("microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);e.s(["Microscope",0,t],67954)},30758,e=>{"use strict";var t=e.i(43476),a=e.i(46932),r=e.i(66992);let i=(0,e.i(75254).default)("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var s=e.i(39312),n=e.i(81418),l=e.i(21218),c=e.i(67954),o=e.i(536),d=e.i(59544);let m=()=>{let e=[{title:(0,t.jsxs)(t.Fragment,{children:["AI-Powered ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Identification"})]}),desc:"Our proprietary computer vision models identify components with 99.4% accuracy, enabling precise sorting of complex PCB assemblies and industrial electronic waste.",icon:(0,t.jsx)(r.Cpu,{className:"text-white",size:32}),image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"},{title:(0,t.jsxs)(t.Fragment,{children:["Automated Robotic ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Dismantling"})]}),desc:"High-speed robotic cells equipped with custom end-effectors safely disassemble devices, separating batteries, screens, and boards without damaging critical materials.",icon:(0,t.jsx)(i,{className:"text-white",size:32}),image:"https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80"},{title:(0,t.jsxs)(t.Fragment,{children:["Advanced Chemical ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Extraction"})]}),desc:"Hydrometallurgical processes optimized for high-yield recovery of rare earth elements and precious metals with minimal environmental footprint.",icon:(0,t.jsx)(s.Zap,{className:"text-white",size:32}),image:"/WBM/media/Material_recovery_Extraction.jpg"}];return(0,t.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500",children:[(0,t.jsxs)("section",{className:"relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-0",children:(0,t.jsx)(o.default,{beamNumber:15,beamWidth:3,lightColor:"#839470",speed:1.5})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"}),(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center",children:(0,t.jsxs)(a.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-6 md:mb-8",children:[(0,t.jsx)("div",{className:"w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"}),(0,t.jsx)("span",{className:"text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]",children:"Innovation at Scale"})]}),(0,t.jsxs)("h1",{className:"text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase",children:["The science of ",(0,t.jsx)("br",{className:"hidden sm:block"}),(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"material intelligence"})]}),(0,t.jsx)("p",{className:"text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10",children:"We're building the infrastructure for the next industrial era—combining robotics, AI, and advanced chemistry to secure critical minerals."})]})})]}),(0,t.jsx)("section",{className:"py-12",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsx)("div",{className:"grid grid-cols-1 gap-16",children:e.map((e,r)=>(0,t.jsxs)(a.motion.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},className:`flex flex-col ${r%2==0?"lg:flex-row":"lg:flex-row-reverse"} gap-12 items-center`,children:[(0,t.jsxs)("div",{className:"lg:w-1/2 rounded-[10px] overflow-hidden shadow-2xl relative aspect-video",children:[(0,t.jsx)("img",{src:e.image,alt:"string"==typeof e.title?e.title:"Technology Step",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"}),(0,t.jsx)("div",{className:"absolute top-6 left-6 w-16 h-16 bg-[var(--c-lime)] rounded-[10px] flex items-center justify-center shadow-lg",children:e.icon})]}),(0,t.jsxs)("div",{className:"lg:w-1/2",children:[(0,t.jsx)("h2",{className:"section-title  font-bold text-[var(--c-fg)] mb-6 tracking-tight",children:e.title}),(0,t.jsx)("p",{className:"text-lg text-gray-500 font-medium leading-relaxed mb-8",children:e.desc}),(0,t.jsxs)("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10",children:[(0,t.jsxs)("li",{className:"flex items-center gap-3 text-sm font-bold text-[var(--c-fg)] uppercase tracking-wider",children:[(0,t.jsx)(n.ShieldCheck,{size:20,className:"text-[var(--c-lime)]"})," Patented System"]}),(0,t.jsxs)("li",{className:"flex items-center gap-3 text-sm font-bold text-[var(--c-fg)] uppercase tracking-wider",children:[(0,t.jsx)(l.Activity,{size:20,className:"text-[var(--c-lime)]"})," Real-time tracking"]})]}),(0,t.jsx)(d.default,{href:"/contact",variant:"ghost",className:"flex items-center gap-2 group",children:"Technical Specifications"})]})]},r))})})}),"      ",(0,t.jsxs)("section",{className:"py-24 bg-[var(--c-fg)] relative overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--c-bg)]/20 to-transparent z-20"}),(0,t.jsx)("div",{className:"absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--c-bg)]/20 to-transparent z-20"}),(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row gap-20 items-center",children:[(0,t.jsxs)("div",{className:"lg:w-1/2",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-[var(--c-bg)]/10 px-3 py-1.5 rounded-full shadow-sm text-sm font-semibold border border-[var(--c-bg)]/10 text-[var(--c-bg)] mb-8",children:[(0,t.jsx)(c.Microscope,{size:16,className:"text-[var(--c-lime)]"})," Future-Proofing"]}),(0,t.jsxs)("h2",{className:"section-title font-bold leading-tight mb-8 tracking-tight text-[var(--c-bg)]",children:["Continuous R&D: Solving tomorrow's recovery ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"challenges"})," today"]}),(0,t.jsx)("p",{className:"text-xl text-[var(--c-bg)]/60 font-medium leading-relaxed mb-10",children:"Our innovation lab in Zurich collaborates with leading technical universities to develop next-generation catalysts and robotic dismantling algorithms for emerging electronic architectures."}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-10",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-5xl font-bold text-[var(--c-bg)] mb-2 tracking-tighter",children:"15%"}),(0,t.jsx)("p",{className:"text-[var(--c-bg)]/40 font-medium text-sm",children:"Revenue invested in R&D annually"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-5xl font-bold text-[var(--c-bg)] mb-2 tracking-tighter",children:"42"}),(0,t.jsx)("p",{className:"text-[var(--c-bg)]/40 font-medium text-sm",children:"Active patents in material recovery"})]})]})]}),(0,t.jsxs)("div",{className:"lg:w-1/2 relative",children:[(0,t.jsx)(a.motion.div,{animate:{scale:[1,1.05,1],rotate:[0,5,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},className:"relative z-20 rounded-[10px] overflow-hidden shadow-2xl border border-[var(--c-bg)]/10",children:(0,t.jsx)("img",{src:"/WBM/media/Material_recovery_Extraction.jpg",alt:"R&D Lab",className:"w-full h-auto"})}),(0,t.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[var(--c-lime)]/5 rounded-full blur-[120px] pointer-events-none"})]})]})}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-10 pointer-events-none",children:(0,t.jsxs)("svg",{width:"100%",height:"100%",children:[(0,t.jsx)("pattern",{id:"grid-rd",width:"100",height:"100",patternUnits:"userSpaceOnUse",children:(0,t.jsx)("path",{d:"M 100 0 L 0 0 0 100",fill:"none",stroke:"white",strokeWidth:"1"})}),(0,t.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid-rd)"})]})})]}),(0,t.jsx)("section",{className:"py-12 bg-[var(--c-bg)]",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto px-4 text-center",children:[(0,t.jsxs)("h2",{className:"section-title font-bold text-[var(--c-fg)] tracking-tight mb-8",children:["Harness our ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"technology"})," for your supply chain"]}),(0,t.jsx)("p",{className:"text-xl text-gray-500 font-medium mb-12",children:"Explore how our proprietary recovery systems can help you secure critical minerals and meet your sustainability targets."}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-center gap-6",children:[(0,t.jsx)(d.default,{href:"/contact",children:"Book a Tech Demo"}),(0,t.jsx)(d.default,{href:"/contact",children:"Read Whitepaper"})]})]})})]})};e.s(["default",0,function(){return(0,t.jsx)(m,{})}],30758)}]);