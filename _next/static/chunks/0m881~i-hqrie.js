(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48256,e=>{"use strict";let t=(0,e.i(75254).default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);e.s(["Globe",0,t],48256)},39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",0,t],39312)},58041,e=>{"use strict";let t=(0,e.i(75254).default)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);e.s(["Database",0,t],58041)},46897,e=>{"use strict";let t=(0,e.i(75254).default)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",0,t],46897)},27612,57303,e=>{"use strict";let t=(0,e.i(75254).default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);e.s(["Trash2",0,t],27612);var i=e.i(43476),s=e.i(33623),r=e.i(71645),o=e.i(90072),a=e.i(8560);let n={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[12,80],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:0xffffff,brokenLines:0xffffff,leftCars:[0xd856bf,6770850,0xc247ac],rightCars:[242627,941733,3294549],sticks:242627}};e.s(["default",0,({effectOptions:e=n})=>{let t=(0,r.useRef)(null),l=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(l.current){l.current.dispose(),l.current=null;let e=t.current;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}let i={uFreq:{value:new o.Vector3(3,6,10)},uAmp:{value:new o.Vector3(30,30,20)}},r={uFreq:{value:new o.Vector2(5,2)},uAmp:{value:new o.Vector2(25,15)}},h={uFreq:{value:new o.Vector2(2,3)},uAmp:{value:new o.Vector2(35,10)}},c={uFreq:{value:new o.Vector4(4,8,8,1)},uAmp:{value:new o.Vector4(25,5,10,10)}},d={uFreq:{value:new o.Vector2(4,8)},uAmp:{value:new o.Vector2(10,20)},uPowY:{value:new o.Vector2(20,2)}},u=e=>.5*Math.sin(e)+.5,m={mountainDistortion:{uniforms:i,getDistortion:`
          uniform vec3 uAmp;
          uniform vec3 uFreq;
          #define PI 3.14159265358979
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
              nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
            );
          }
        `,getJS:(e,t)=>{let s=i.uFreq.value,r=i.uAmp.value,a=new o.Vector3(Math.cos(e*Math.PI*s.x+t)*r.x-Math.cos(.02*Math.PI*s.x+t)*r.x,u(e*Math.PI*s.y+t)*r.y-u(.02*Math.PI*s.y+t)*r.y,u(e*Math.PI*s.z+t)*r.z-u(.02*Math.PI*s.z+t)*r.z),n=new o.Vector3(2,2,2),l=new o.Vector3(0,0,-5);return a.multiply(n).add(l)}},xyDistortion:{uniforms:r,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(e,t)=>{let i=r.uFreq.value,s=r.uAmp.value,a=new o.Vector3(Math.cos(e*Math.PI*i.x+t)*s.x-Math.cos(.02*Math.PI*i.x+t)*s.x,Math.sin(e*Math.PI*i.y+t+Math.PI/2)*s.y-Math.sin(.02*Math.PI*i.y+t+Math.PI/2)*s.y,0),n=new o.Vector3(2,.4,1),l=new o.Vector3(0,0,-3);return a.multiply(n).add(l)}},LongRaceDistortion:{uniforms:h,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float camProgress = 0.0125;
            return vec3( 
              sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(e,t)=>{let i=h.uFreq.value,s=h.uAmp.value,r=new o.Vector3(Math.sin(e*Math.PI*i.x+t)*s.x-Math.sin(.0125*Math.PI*i.x+t)*s.x,Math.sin(e*Math.PI*i.y+t)*s.y-Math.sin(.0125*Math.PI*i.y+t)*s.y,0),a=new o.Vector3(1,1,0),n=new o.Vector3(0,0,-5);return r.multiply(a).add(n)}},turbulentDistortion:{uniforms:c,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r + uTime) * uAmp.r +
              pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.0125),
              getDistortionY(progress) - getDistortionY(0.0125),
              0.
            );
          }
        `,getJS:(e,t)=>{let i=c.uFreq.value,s=c.uAmp.value,r=e=>Math.cos(Math.PI*e*i.x+t)*s.x+Math.pow(Math.cos(Math.PI*e*i.y+t*(i.y/i.x)),2)*s.y,a=e=>-u(Math.PI*e*i.z+t)*s.z-Math.pow(u(Math.PI*e*i.w+t/(i.z/i.w)),5)*s.w,n=new o.Vector3(r(e)-r(e+.007),a(e)-a(e+.007),0),l=new o.Vector3(-2,-5,0),h=new o.Vector3(0,0,-10);return n.multiply(l).add(h)}},turbulentDistortionStill:{uniforms:c,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r) * uAmp.r +
              pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `},deepDistortionStill:{uniforms:d,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x) * uAmp.x * 2.
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.05),
              0.
            );
          }
        `},deepDistortion:{uniforms:d,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x + uTime) * uAmp.x
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `,getJS:(e,t)=>{let i=d.uFreq.value,s=d.uAmp.value,r=d.uPowY.value,a=e=>Math.sin(e*Math.PI*i.x+t)*s.x,n=e=>Math.pow(e*r.x,r.y)+Math.sin(e*Math.PI*i.y+t)*s.y,l=new o.Vector3(a(e)-a(e+.01),n(e)-n(e+.01),0),h=new o.Vector3(-2,-4,0),c=new o.Vector3(0,0,-10);return l.multiply(h).add(c)}}},p={uDistortionX:{value:new o.Vector2(80,3)},uDistortionY:{value:new o.Vector2(-40,2.5)}},g=`
      #define PI 3.14159265358979
      uniform vec2 uDistortionX;
      uniform vec2 uDistortionY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      vec3 getDistortion(float progress){
        progress = clamp(progress, 0., 1.);
        float xAmp = uDistortionX.r;
        float xFreq = uDistortionX.g;
        float yAmp = uDistortionY.r;
        float yFreq = uDistortionY.g;
        return vec3( 
          xAmp * nsin(progress * PI * xFreq - PI / 2.),
          yAmp * nsin(progress * PI * yFreq - PI / 2.),
          0.
        );
      }
    `,f=e=>Array.isArray(e)?Math.random()*(e[1]-e[0])+e[0]:Math.random()*e,v=e=>Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e;function x(e,t,i=.1,s=.001){let r=(t-e)*i;return Math.abs(r)<s&&(r=t-e),r}class w{webgl;options;colors;speed;fade;mesh=null;constructor(e,t,i,s,r){this.webgl=e,this.options=t,this.colors=i,this.speed=s,this.fade=r}init(){let e=this.options,t=new o.LineCurve3(new o.Vector3(0,0,0),new o.Vector3(0,0,-1)),i=new o.TubeGeometry(t,40,1,8,!1),s=new o.InstancedBufferGeometry().copy(i);s.instanceCount=2*e.lightPairsPerRoadWay;let r=e.roadWidth/e.lanesPerRoad,a=[],n=[],l=[],h=this.colors;h=Array.isArray(h)?h.map(e=>new o.Color(e)):new o.Color(h);for(let t=0;t<e.lightPairsPerRoadWay;t++){let i=f(e.carLightsRadius),s=f(e.carLightsLength),o=f(this.speed),c=t%e.lanesPerRoad*r-e.roadWidth/2+r/2,d=f(e.carWidthPercentage)*r;c+=f(e.carShiftX)*r;let u=f(e.carFloorSeparation)+1.3*i,m=-f(e.length);a.push(c-d/2),a.push(u),a.push(m),a.push(c+d/2),a.push(u),a.push(m),n.push(i),n.push(s),n.push(o),n.push(i),n.push(s),n.push(o);let p=v(h);l.push(p.r),l.push(p.g),l.push(p.b),l.push(p.r),l.push(p.g),l.push(p.b)}s.setAttribute("aOffset",new o.InstancedBufferAttribute(new Float32Array(a),3,!1)),s.setAttribute("aMetrics",new o.InstancedBufferAttribute(new Float32Array(n),3,!1)),s.setAttribute("aColor",new o.InstancedBufferAttribute(new Float32Array(l),3,!1));let c=new o.ShaderMaterial({fragmentShader:b,vertexShader:y,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:e.length},uFade:{value:this.fade}},this.webgl.fogUniforms,e.distortion.uniforms)});c.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let d=new o.Mesh(s,c);d.frustumCulled=!1,this.webgl.scene.add(d),this.mesh=d}update(e){this.mesh&&(this.mesh.material.uniforms.uTime.value=e)}}let b=`
      #define USE_FOG;
      ${a.ShaderChunk.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${a.ShaderChunk.fog_fragment}
      }
    `,y=`
      #define USE_FOG;
      ${a.ShaderChunk.fog_pars_vertex}
      attribute vec3 aOffset;
      attribute vec3 aMetrics;
      attribute vec3 aColor;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec2 vUv; 
      varying vec3 vColor; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        float radius = aMetrics.r;
        float myLength = aMetrics.g;
        float speed = aMetrics.b;

        transformed.xy *= radius;
        transformed.z *= myLength;

        transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        vColor = aColor;
        ${a.ShaderChunk.fog_vertex}
      }
    `;class P{webgl;options;mesh=null;constructor(e,t){this.webgl=e,this.options=t}init(){let e=this.options,t=new o.PlaneGeometry(1,1),i=new o.InstancedBufferGeometry().copy(t),s=e.totalSideLightSticks;i.instanceCount=s;let r=e.length/(s-1),a=[],n=[],l=[],h=e.colors.sticks;h=Array.isArray(h)?h.map(e=>new o.Color(e)):new o.Color(h);for(let t=0;t<s;t++){let i=f(e.lightStickWidth),s=f(e.lightStickHeight);a.push((t-1)*r*2+r*Math.random());let o=v(h);n.push(o.r),n.push(o.g),n.push(o.b),l.push(i),l.push(s)}i.setAttribute("aOffset",new o.InstancedBufferAttribute(new Float32Array(a),1,!1)),i.setAttribute("aColor",new o.InstancedBufferAttribute(new Float32Array(n),3,!1)),i.setAttribute("aMetrics",new o.InstancedBufferAttribute(new Float32Array(l),2,!1));let c=new o.ShaderMaterial({fragmentShader:S,vertexShader:M,side:o.DoubleSide,uniforms:Object.assign({uTravelLength:{value:e.length},uTime:{value:0}},this.webgl.fogUniforms,e.distortion.uniforms)});c.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let d=new o.Mesh(i,c);d.frustumCulled=!1,this.webgl.scene.add(d),this.mesh=d}update(e){this.mesh&&(this.mesh.material.uniforms.uTime.value=e)}}let M=`
      #define USE_FOG;
      ${a.ShaderChunk.fog_pars_vertex}
      attribute float aOffset;
      attribute vec3 aColor;
      attribute vec2 aMetrics;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec3 vColor;
      mat4 rotationY( in float angle ) {
        return mat4(	cos(angle),		0,		sin(angle),	0,
                     0,		1.0,			 0,	0,
                -sin(angle),	0,		cos(angle),	0,
                0, 		0,				0,	1);
      }
      #include <getDistortion_vertex>
      void main(){
        vec3 transformed = position.xyz;
        float width = aMetrics.x;
        float height = aMetrics.y;

        transformed.xy *= vec2(width, height);
        float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

        transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;

        transformed.z += - uTravelLength + time;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        transformed.y += height / 2.;
        transformed.x += -width / 2.;
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vColor = aColor;
        ${a.ShaderChunk.fog_vertex}
      }
    `,S=`
      #define USE_FOG;
      ${a.ShaderChunk.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${a.ShaderChunk.fog_fragment}
      }
    `;class k{webgl;options;uTime;leftRoadWay=null;rightRoadWay=null;island=null;constructor(e,t){this.webgl=e,this.options=t,this.uTime={value:0}}createPlane(e,t,i){let s=this.options,r=new o.PlaneGeometry(i?s.roadWidth:s.islandWidth,s.length,20,100),a={uTravelLength:{value:s.length},uColor:{value:new o.Color(i?s.colors.roadColor:s.colors.islandColor)},uTime:this.uTime};i&&(a=Object.assign(a,{uLanes:{value:s.lanesPerRoad},uBrokenLinesColor:{value:new o.Color(s.colors.brokenLines)},uShoulderLinesColor:{value:new o.Color(s.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:s.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:s.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:s.brokenLinesWidthPercentage}}));let n=new o.ShaderMaterial({fragmentShader:i?F:A,vertexShader:T,side:o.DoubleSide,uniforms:Object.assign(a,this.webgl.fogUniforms,s.distortion.uniforms)});n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <getDistortion_vertex>",s.distortion.getDistortion)};let l=new o.Mesh(r,n);return l.rotation.x=-Math.PI/2,l.position.z=-s.length/2,l.position.x+=(this.options.islandWidth/2+s.roadWidth/2)*e,this.webgl.scene.add(l),l}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(e){this.uTime.value=e}}let L=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${a.ShaderChunk.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${a.ShaderChunk.fog_fragment}
      }
    `,A=L.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),C=`
      uniform float uLanes;
      uniform vec3 uBrokenLinesColor;
      uniform vec3 uShoulderLinesColor;
      uniform float uShoulderLinesWidthPercentage;
      uniform float uBrokenLinesWidthPercentage;
      uniform float uBrokenLinesLengthPercentage;
      highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }
    `,j=`
      uv.y = mod(uv.y + uTime * 0.05, 1.);
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

      brokenLines = mix(brokenLines, sideLines, uv.x);
    `,F=L.replace("#include <roadMarkings_fragment>",j).replace("#include <roadMarkings_vars>",C),T=`
      #define USE_FOG;
      uniform float uTime;
      ${a.ShaderChunk.fog_pars_vertex}
      uniform float uTravelLength;
      varying vec2 vUv; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
        transformed.x += distortion.x;
        transformed.z += distortion.y;
        transformed.y += -1. * distortion.z;  
        
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        ${a.ShaderChunk.fog_vertex}
      }
    `,D=t.current;if(!D)return;let I={...n,...e,colors:{...n.colors,...e?.colors}};I.distortion=m[I.distortion];let W=new class{options;container;hasValidSize;renderer;composer;camera;scene;fogUniforms;clock;assets;disposed;road;leftCarLights;rightCarLights;leftSticks;fovTarget;speedUpTarget;speedUp;timeOffset;renderPass;bloomPass;constructor(e,t={}){this.options=t,null==this.options.distortion&&(this.options.distortion={uniforms:p,getDistortion:g}),this.container=e,this.hasValidSize=!1;const i=Math.max(1,e.offsetWidth),r=Math.max(1,e.offsetHeight);this.renderer=new a.WebGLRenderer({antialias:!1,alpha:!0}),this.renderer.setSize(i,r,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new s.EffectComposer(this.renderer),e.append(this.renderer.domElement),this.camera=new o.PerspectiveCamera(t.fov,i/r,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new o.Scene,this.scene.background=null;let n=new o.Fog(t.colors.background,.2*t.length,500*t.length);this.scene.fog=n,this.fogUniforms={fogColor:{value:n.color},fogNear:{value:n.near},fogFar:{value:n.far}},this.clock=new o.Clock,this.assets={},this.disposed=!1,this.road=new k(this,t),this.leftCarLights=new w(this,t,t.colors.leftCars,t.movingAwaySpeed,new o.Vector2(0,1-t.carLightsFade)),this.rightCarLights=new w(this,t,t.colors.rightCars,t.movingCloserSpeed,new o.Vector2(1,0+t.carLightsFade)),this.leftSticks=new P(this,t),this.fovTarget=t.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),this.onWindowResize=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResize),e.offsetWidth>0&&e.offsetHeight>0&&(this.hasValidSize=!0)}onWindowResize(){let e=this.container.offsetWidth,t=this.container.offsetHeight;if(e<=0||t<=0){this.hasValidSize=!1;return}this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t),this.hasValidSize=!0}initPasses(){if(this.disposed||!this.composer)return;this.renderPass=new s.RenderPass(this.scene,this.camera),this.bloomPass=new s.EffectPass(this.camera,new s.BloomEffect({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));let e=new s.EffectPass(this.camera,new s.SMAAEffect({preset:s.SMAAPreset.MEDIUM}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,e.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(e)}loadAssets(){let e=this.assets;return new Promise(t=>{let i=new o.LoadingManager(t),r=new Image,a=new Image;e.smaa={},r.addEventListener("load",function(){e.smaa.search=this,i.itemEnd("smaa-search")}),a.addEventListener("load",function(){e.smaa.area=this,i.itemEnd("smaa-area")}),i.itemStart("smaa-search"),i.itemStart("smaa-area"),r.src=s.SMAAEffect.searchImageDataURL,a.src=s.SMAAEffect.areaImageDataURL})}init(){if(this.disposed)return;this.initPasses();let e=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh&&this.leftCarLights.mesh.position.setX(-e.roadWidth/2-e.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh&&this.rightCarLights.mesh.position.setX(e.roadWidth/2+e.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh&&this.leftSticks.mesh.position.setX(-(e.roadWidth+e.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(e){e.preventDefault()}update(e){let t=Math.exp(-(-60*Math.log2(.9))*e);this.speedUp+=x(this.speedUp,this.speedUpTarget,t,1e-5),this.timeOffset+=this.speedUp*e;let i=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(i),this.leftCarLights.update(i),this.leftSticks.update(i),this.road.update(i);let s=!1,r=x(this.camera.fov,this.fovTarget,t);if(0!==r&&(this.camera.fov+=r*e*6,s=!0),this.options.distortion.getJS){let e=this.options.distortion.getJS(.025,i);this.camera.lookAt(new o.Vector3(this.camera.position.x+e.x,this.camera.position.y+e.y,this.camera.position.z+e.z)),s=!0}s&&this.camera.updateProjectionMatrix()}render(e){this.composer.render(e)}dispose(){this.disposed=!0,this.scene&&(this.scene.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose()))}),this.scene.clear()),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)),this.composer&&this.composer.dispose(),window.removeEventListener("resize",this.onWindowResize),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(e,t,i){if(e<=0||t<=0){this.hasValidSize=!1;return}this.composer.setSize(e,t,i),this.hasValidSize=!0}tick(){if(!this.disposed){if(!this.hasValidSize){let e=this.container.offsetWidth,t=this.container.offsetHeight;if(!(e>0)||!(t>0))return void requestAnimationFrame(this.tick);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t),this.hasValidSize=!0}if(function(e,t){let i=e.domElement,s=i.clientWidth,r=i.clientHeight;if(s<=0||r<=0)return!1;let o=i.width!==s||i.height!==r;return o&&t(s,r,!1),o}(this.renderer,this.setSize)){let e=this.renderer.domElement;this.hasValidSize&&(this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix())}if(this.hasValidSize){let e=this.clock.getDelta();this.render(e),this.update(e)}requestAnimationFrame(this.tick)}}}(D,I);l.current=W;let z=!1;return W.loadAssets().then(()=>{z||W.disposed||W.init()}),()=>{z=!0,l.current&&(l.current.dispose(),l.current=null)}},[e]),(0,i.jsx)("div",{ref:t,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"}})}],57303)},41341,e=>{"use strict";var t=e.i(43476);e.i(71645);var i=e.i(46932);let s=(0,e.i(75254).default)("refresh-cw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);var r=e.i(48256),o=e.i(46897),a=e.i(39312),n=e.i(58041),l=e.i(27612),h=e.i(57303),c=e.i(59544);let d=()=>{let e=[{id:"01",title:"Geographic",subtitle:"Within a country.",desc:"Every state has trash. We build multiple plants - one per region - so waste is recycled within its own geographic circle, not freighted across the country.",icon:(0,t.jsx)(o.MapPin,{size:32})},{id:"02",title:"Global",subtitle:"Across allies.",desc:"From the US to the UAE to India to South Africa, we close the loop across four geographies. We explicitly don't operate in non-allied parts of Asia - so we make a semi-circle, not a full one.",icon:(0,t.jsx)(r.Globe,{size:32})},{id:"03",title:"Operational",subtitle:"Inside the plant.",desc:"Wind powers the plant. When those turbines retire, their magnets come back to us. We extract, we return. The closed loop is literal.",icon:(0,t.jsx)(s,{size:32})}];return o.MapPin,n.Database,a.Zap,l.Trash2,(0,t.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500",children:[(0,t.jsxs)("section",{className:"relative min-h-[70vh] flex items-center overflow-hidden bg-black pt-32 pb-24",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-0 opacity-40",children:(0,t.jsx)(h.default,{})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"}),(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center",children:(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-8",children:[(0,t.jsx)("div",{className:"w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"}),(0,t.jsx)("span",{className:"text-xs font-bold uppercase tracking-[0.2em]",children:"Closed-Loop Systems"})]}),(0,t.jsxs)("h1",{className:"text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-8 uppercase",children:["Circular ",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Economy."})]}),(0,t.jsx)("p",{className:"text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10",children:"Geographic, global, operational - circles inside circles, every one of them deliberate."})]})})]}),(0,t.jsx)("section",{className:"py-24 bg-white relative overflow-hidden",children:(0,t.jsxs)("div",{className:"max-w-[1440px] mx-auto px-0 md:px-6",children:[(0,t.jsxs)("div",{className:"text-center mb-16",children:[(0,t.jsxs)("h2",{className:"text-3xl md:text-[52px] font-black text-gray-900 tracking-tight mb-6 uppercase leading-[1.1] max-w-4xl mx-auto",children:["The Circular ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Loop."})]}),(0,t.jsx)("p",{className:"text-lg text-gray-600 font-medium max-w-2xl mx-auto",children:"A closed-loop system designed to recover 99% of critical minerals from complex waste streams."})]}),(0,t.jsxs)("div",{className:"relative max-w-[1280px] mx-auto md:rounded-[10px] md:overflow-hidden",children:[(0,t.jsx)("img",{src:"/WBM/media/Circular loop.png",alt:"Circular Economy Loop",className:"hidden lg:block w-full h-auto object-contain mx-auto"}),(0,t.jsx)("img",{src:"/WBM/media/Circular loop_Mobile View.png",alt:"Circular Economy Loop",className:"lg:hidden w-full h-auto object-contain mx-auto"})]})]})}),(0,t.jsx)("section",{className:"py-24 bg-black relative overflow-hidden",children:(0,t.jsxs)("div",{className:"max-w-[1440px] mx-auto px-0 md:px-6",children:[(0,t.jsxs)("div",{className:"text-center mb-8",children:[(0,t.jsxs)("h2",{className:"text-3xl md:text-[52px] font-black text-white tracking-tight mb-6 uppercase leading-[1.1] max-w-4xl mx-auto",children:["The Shift to ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Restoration."})]}),(0,t.jsx)("p",{className:"text-lg text-gray-400 font-medium max-w-2xl mx-auto",children:"Moving beyond the linear 'take-make-waste' model into a high-yield, sovereign supply chain."})]}),(0,t.jsxs)(i.motion.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"relative max-w-[1280px] mx-auto md:rounded-[10px] md:overflow-hidden",children:[(0,t.jsx)("img",{src:"/WBM/media/Linear_and_Circular Difference_Dark.png",alt:"Linear vs Circular Economy",className:"hidden lg:block w-full h-auto object-contain mx-auto"}),(0,t.jsx)("img",{src:"/WBM/media/Linear_and_Circular_Mobile_View.png",alt:"Linear vs Circular Economy",className:"lg:hidden w-full h-auto object-contain mx-auto"})]})]})}),(0,t.jsx)("section",{className:"py-24 bg-[var(--c-fg)]/5 relative overflow-hidden",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10",children:[(0,t.jsxs)("div",{className:"text-center mb-20",children:[(0,t.jsxs)("h2",{className:"text-3xl md:text-[52px] font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase leading-[1.1] max-w-5xl mx-auto",children:["Geographic. Global. ",(0,t.jsx)("br",{className:"hidden md:block"}),(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Operational."})]}),(0,t.jsx)("p",{className:"text-xl text-[var(--c-fg3)] font-medium max-w-2xl mx-auto",children:"Three layers of deliberate circularity, closing the loop from local regions to global alliances."})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:e.map((e,s)=>(0,t.jsxs)(i.motion.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.1*s},className:"p-10 rounded-[32px] bg-[var(--c-bg)] border border-[var(--c-border)] flex flex-col h-full relative group",children:[(0,t.jsx)("div",{className:"absolute top-8 right-8 text-4xl font-black text-[var(--c-lime)]/10 tracking-tighter",children:e.id}),(0,t.jsx)("div",{className:"w-16 h-16 rounded-2xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-8 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-all duration-500",children:e.icon}),(0,t.jsxs)("h3",{className:"text-xs font-black text-[var(--c-lime)] uppercase tracking-[0.2em] mb-2",children:["Layer ",e.id]}),(0,t.jsx)("h4",{className:"text-2xl font-black text-[var(--c-fg)] uppercase mb-4 tracking-tight",children:e.title}),(0,t.jsx)("div",{className:"text-lg font-bold text-[var(--c-fg)] mb-6",children:e.subtitle}),(0,t.jsx)("p",{className:"text-[var(--c-fg3)] font-medium leading-relaxed flex-grow",children:e.desc})]},s))})]})}),(0,t.jsx)("section",{className:"py-24",children:(0,t.jsx)("div",{className:"max-w-5xl mx-auto px-6",children:(0,t.jsxs)("div",{className:"relative p-12 md:p-20 rounded-[40px] bg-[var(--c-bg)] border border-[var(--c-border)] overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute top-0 right-0 w-64 h-64 bg-[var(--c-lime)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"}),(0,t.jsxs)("div",{className:"relative z-10",children:[(0,t.jsx)("div",{className:"text-[var(--c-lime)] font-black text-6xl mb-8 opacity-20",children:'"'}),(0,t.jsx)("p",{className:"text-2xl md:text-4xl font-black text-[var(--c-fg)] leading-tight tracking-tight mb-12 italic",children:"We are not just an e-waste recycler. We are the brains. We are the AI data centre. Humans are taking care of robots - not robots taking jobs of humans."}),(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("div",{className:"w-12 h-12 rounded-full bg-[var(--c-lime)]"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[var(--c-fg)] font-black uppercase text-sm tracking-widest",children:"Founder's Note"}),(0,t.jsx)("div",{className:"text-[var(--c-fg3)] text-xs font-bold",children:"WBM Vision 2030"})]})]})]})]})})}),(0,t.jsx)("section",{className:"py-24 text-center",children:(0,t.jsxs)("div",{className:"max-w-4xl mx-auto px-6",children:[(0,t.jsxs)("h2",{className:"text-4xl md:text-6xl font-black text-[var(--c-fg)] tracking-tight mb-8 uppercase",children:["Ready to close ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"the loop?"})]}),(0,t.jsx)("p",{className:"text-xl text-[var(--c-fg3)] font-medium mb-12 leading-relaxed",children:"Let's turn trash into treasure - together."}),(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(c.default,{href:"/contact",children:"Partner With Us"})})]})})]})};e.s(["default",0,function(){return(0,t.jsx)(d,{})}],41341)}]);