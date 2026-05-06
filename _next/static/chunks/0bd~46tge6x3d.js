(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,66992,e=>{"use strict";let t=(0,e.i(75254).default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);e.s(["Cpu",0,t],66992)},39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",0,t],39312)},48256,e=>{"use strict";let t=(0,e.i(75254).default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);e.s(["Globe",0,t],48256)},58041,e=>{"use strict";let t=(0,e.i(75254).default)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);e.s(["Database",0,t],58041)},21218,e=>{"use strict";let t=(0,e.i(75254).default)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);e.s(["Activity",0,t],21218)},52008,e=>{"use strict";let t=(0,e.i(75254).default)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);e.s(["Layers",0,t],52008)},57303,e=>{"use strict";var t=e.i(43476),i=e.i(33623),s=e.i(71645),r=e.i(90072),o=e.i(8560);let a={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[12,80],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:0xffffff,brokenLines:0xffffff,leftCars:[0xd856bf,6770850,0xc247ac],rightCars:[242627,941733,3294549],sticks:242627}};e.s(["default",0,({effectOptions:e=a})=>{let n=(0,s.useRef)(null),l=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(l.current){l.current.dispose(),l.current=null;let e=n.current;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}let t={uFreq:{value:new r.Vector3(3,6,10)},uAmp:{value:new r.Vector3(30,30,20)}},s={uFreq:{value:new r.Vector2(5,2)},uAmp:{value:new r.Vector2(25,15)}},c={uFreq:{value:new r.Vector2(2,3)},uAmp:{value:new r.Vector2(35,10)}},d={uFreq:{value:new r.Vector4(4,8,8,1)},uAmp:{value:new r.Vector4(25,5,10,10)}},h={uFreq:{value:new r.Vector2(4,8)},uAmp:{value:new r.Vector2(10,20)},uPowY:{value:new r.Vector2(20,2)}},u=e=>.5*Math.sin(e)+.5,m={mountainDistortion:{uniforms:t,getDistortion:`
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
        `,getJS:(e,i)=>{let s=t.uFreq.value,o=t.uAmp.value,a=new r.Vector3(Math.cos(e*Math.PI*s.x+i)*o.x-Math.cos(.02*Math.PI*s.x+i)*o.x,u(e*Math.PI*s.y+i)*o.y-u(.02*Math.PI*s.y+i)*o.y,u(e*Math.PI*s.z+i)*o.z-u(.02*Math.PI*s.z+i)*o.z),n=new r.Vector3(2,2,2),l=new r.Vector3(0,0,-5);return a.multiply(n).add(l)}},xyDistortion:{uniforms:s,getDistortion:`
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
        `,getJS:(e,t)=>{let i=s.uFreq.value,o=s.uAmp.value,a=new r.Vector3(Math.cos(e*Math.PI*i.x+t)*o.x-Math.cos(.02*Math.PI*i.x+t)*o.x,Math.sin(e*Math.PI*i.y+t+Math.PI/2)*o.y-Math.sin(.02*Math.PI*i.y+t+Math.PI/2)*o.y,0),n=new r.Vector3(2,.4,1),l=new r.Vector3(0,0,-3);return a.multiply(n).add(l)}},LongRaceDistortion:{uniforms:c,getDistortion:`
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
        `,getJS:(e,t)=>{let i=c.uFreq.value,s=c.uAmp.value,o=new r.Vector3(Math.sin(e*Math.PI*i.x+t)*s.x-Math.sin(.0125*Math.PI*i.x+t)*s.x,Math.sin(e*Math.PI*i.y+t)*s.y-Math.sin(.0125*Math.PI*i.y+t)*s.y,0),a=new r.Vector3(1,1,0),n=new r.Vector3(0,0,-5);return o.multiply(a).add(n)}},turbulentDistortion:{uniforms:d,getDistortion:`
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
        `,getJS:(e,t)=>{let i=d.uFreq.value,s=d.uAmp.value,o=e=>Math.cos(Math.PI*e*i.x+t)*s.x+Math.pow(Math.cos(Math.PI*e*i.y+t*(i.y/i.x)),2)*s.y,a=e=>-u(Math.PI*e*i.z+t)*s.z-Math.pow(u(Math.PI*e*i.w+t/(i.z/i.w)),5)*s.w,n=new r.Vector3(o(e)-o(e+.007),a(e)-a(e+.007),0),l=new r.Vector3(-2,-5,0),c=new r.Vector3(0,0,-10);return n.multiply(l).add(c)}},turbulentDistortionStill:{uniforms:d,getDistortion:`
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
        `},deepDistortionStill:{uniforms:h,getDistortion:`
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
        `},deepDistortion:{uniforms:h,getDistortion:`
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
        `,getJS:(e,t)=>{let i=h.uFreq.value,s=h.uAmp.value,o=h.uPowY.value,a=e=>Math.sin(e*Math.PI*i.x+t)*s.x,n=e=>Math.pow(e*o.x,o.y)+Math.sin(e*Math.PI*i.y+t)*s.y,l=new r.Vector3(a(e)-a(e+.01),n(e)-n(e+.01),0),c=new r.Vector3(-2,-4,0),d=new r.Vector3(0,0,-10);return l.multiply(c).add(d)}}},p={uDistortionX:{value:new r.Vector2(80,3)},uDistortionY:{value:new r.Vector2(-40,2.5)}},g=`
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
    `,f=e=>Array.isArray(e)?Math.random()*(e[1]-e[0])+e[0]:Math.random()*e,v=e=>Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e;function x(e,t,i=.1,s=.001){let r=(t-e)*i;return Math.abs(r)<s&&(r=t-e),r}class y{webgl;options;colors;speed;fade;mesh=null;constructor(e,t,i,s,r){this.webgl=e,this.options=t,this.colors=i,this.speed=s,this.fade=r}init(){let e=this.options,t=new r.LineCurve3(new r.Vector3(0,0,0),new r.Vector3(0,0,-1)),i=new r.TubeGeometry(t,40,1,8,!1),s=new r.InstancedBufferGeometry().copy(i);s.instanceCount=2*e.lightPairsPerRoadWay;let o=e.roadWidth/e.lanesPerRoad,a=[],n=[],l=[],c=this.colors;c=Array.isArray(c)?c.map(e=>new r.Color(e)):new r.Color(c);for(let t=0;t<e.lightPairsPerRoadWay;t++){let i=f(e.carLightsRadius),s=f(e.carLightsLength),r=f(this.speed),d=t%e.lanesPerRoad*o-e.roadWidth/2+o/2,h=f(e.carWidthPercentage)*o;d+=f(e.carShiftX)*o;let u=f(e.carFloorSeparation)+1.3*i,m=-f(e.length);a.push(d-h/2),a.push(u),a.push(m),a.push(d+h/2),a.push(u),a.push(m),n.push(i),n.push(s),n.push(r),n.push(i),n.push(s),n.push(r);let p=v(c);l.push(p.r),l.push(p.g),l.push(p.b),l.push(p.r),l.push(p.g),l.push(p.b)}s.setAttribute("aOffset",new r.InstancedBufferAttribute(new Float32Array(a),3,!1)),s.setAttribute("aMetrics",new r.InstancedBufferAttribute(new Float32Array(n),3,!1)),s.setAttribute("aColor",new r.InstancedBufferAttribute(new Float32Array(l),3,!1));let d=new r.ShaderMaterial({fragmentShader:w,vertexShader:b,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:e.length},uFade:{value:this.fade}},this.webgl.fogUniforms,e.distortion.uniforms)});d.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let h=new r.Mesh(s,d);h.frustumCulled=!1,this.webgl.scene.add(h),this.mesh=h}update(e){this.mesh&&(this.mesh.material.uniforms.uTime.value=e)}}let w=`
      #define USE_FOG;
      ${o.ShaderChunk.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${o.ShaderChunk.fog_fragment}
      }
    `,b=`
      #define USE_FOG;
      ${o.ShaderChunk.fog_pars_vertex}
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
        ${o.ShaderChunk.fog_vertex}
      }
    `;class P{webgl;options;mesh=null;constructor(e,t){this.webgl=e,this.options=t}init(){let e=this.options,t=new r.PlaneGeometry(1,1),i=new r.InstancedBufferGeometry().copy(t),s=e.totalSideLightSticks;i.instanceCount=s;let o=e.length/(s-1),a=[],n=[],l=[],c=e.colors.sticks;c=Array.isArray(c)?c.map(e=>new r.Color(e)):new r.Color(c);for(let t=0;t<s;t++){let i=f(e.lightStickWidth),s=f(e.lightStickHeight);a.push((t-1)*o*2+o*Math.random());let r=v(c);n.push(r.r),n.push(r.g),n.push(r.b),l.push(i),l.push(s)}i.setAttribute("aOffset",new r.InstancedBufferAttribute(new Float32Array(a),1,!1)),i.setAttribute("aColor",new r.InstancedBufferAttribute(new Float32Array(n),3,!1)),i.setAttribute("aMetrics",new r.InstancedBufferAttribute(new Float32Array(l),2,!1));let d=new r.ShaderMaterial({fragmentShader:M,vertexShader:k,side:r.DoubleSide,uniforms:Object.assign({uTravelLength:{value:e.length},uTime:{value:0}},this.webgl.fogUniforms,e.distortion.uniforms)});d.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let h=new r.Mesh(i,d);h.frustumCulled=!1,this.webgl.scene.add(h),this.mesh=h}update(e){this.mesh&&(this.mesh.material.uniforms.uTime.value=e)}}let k=`
      #define USE_FOG;
      ${o.ShaderChunk.fog_pars_vertex}
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
        ${o.ShaderChunk.fog_vertex}
      }
    `,M=`
      #define USE_FOG;
      ${o.ShaderChunk.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${o.ShaderChunk.fog_fragment}
      }
    `;class S{webgl;options;uTime;leftRoadWay=null;rightRoadWay=null;island=null;constructor(e,t){this.webgl=e,this.options=t,this.uTime={value:0}}createPlane(e,t,i){let s=this.options,o=new r.PlaneGeometry(i?s.roadWidth:s.islandWidth,s.length,20,100),a={uTravelLength:{value:s.length},uColor:{value:new r.Color(i?s.colors.roadColor:s.colors.islandColor)},uTime:this.uTime};i&&(a=Object.assign(a,{uLanes:{value:s.lanesPerRoad},uBrokenLinesColor:{value:new r.Color(s.colors.brokenLines)},uShoulderLinesColor:{value:new r.Color(s.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:s.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:s.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:s.brokenLinesWidthPercentage}}));let n=new r.ShaderMaterial({fragmentShader:i?D:A,vertexShader:F,side:r.DoubleSide,uniforms:Object.assign(a,this.webgl.fogUniforms,s.distortion.uniforms)});n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <getDistortion_vertex>",s.distortion.getDistortion)};let l=new r.Mesh(o,n);return l.rotation.x=-Math.PI/2,l.position.z=-s.length/2,l.position.x+=(this.options.islandWidth/2+s.roadWidth/2)*e,this.webgl.scene.add(l),l}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(e){this.uTime.value=e}}let C=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${o.ShaderChunk.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${o.ShaderChunk.fog_fragment}
      }
    `,A=C.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),L=`
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
    `,D=C.replace("#include <roadMarkings_fragment>",j).replace("#include <roadMarkings_vars>",L),F=`
      #define USE_FOG;
      uniform float uTime;
      ${o.ShaderChunk.fog_pars_vertex}
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
        ${o.ShaderChunk.fog_vertex}
      }
    `,T=n.current;if(!T)return;let I={...a,...e,colors:{...a.colors,...e?.colors}};I.distortion=m[I.distortion];let z=new class{options;container;hasValidSize;renderer;composer;camera;scene;fogUniforms;clock;assets;disposed;road;leftCarLights;rightCarLights;leftSticks;fovTarget;speedUpTarget;speedUp;timeOffset;renderPass;bloomPass;constructor(e,t={}){this.options=t,null==this.options.distortion&&(this.options.distortion={uniforms:p,getDistortion:g}),this.container=e,this.hasValidSize=!1;const s=Math.max(1,e.offsetWidth),a=Math.max(1,e.offsetHeight);this.renderer=new o.WebGLRenderer({antialias:!1,alpha:!0}),this.renderer.setSize(s,a,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new i.EffectComposer(this.renderer),e.append(this.renderer.domElement),this.camera=new r.PerspectiveCamera(t.fov,s/a,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new r.Scene,this.scene.background=null;let n=new r.Fog(t.colors.background,.2*t.length,500*t.length);this.scene.fog=n,this.fogUniforms={fogColor:{value:n.color},fogNear:{value:n.near},fogFar:{value:n.far}},this.clock=new r.Clock,this.assets={},this.disposed=!1,this.road=new S(this,t),this.leftCarLights=new y(this,t,t.colors.leftCars,t.movingAwaySpeed,new r.Vector2(0,1-t.carLightsFade)),this.rightCarLights=new y(this,t,t.colors.rightCars,t.movingCloserSpeed,new r.Vector2(1,0+t.carLightsFade)),this.leftSticks=new P(this,t),this.fovTarget=t.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),this.onWindowResize=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResize),e.offsetWidth>0&&e.offsetHeight>0&&(this.hasValidSize=!0)}onWindowResize(){let e=this.container.offsetWidth,t=this.container.offsetHeight;if(e<=0||t<=0){this.hasValidSize=!1;return}this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t),this.hasValidSize=!0}initPasses(){if(this.disposed||!this.composer)return;this.renderPass=new i.RenderPass(this.scene,this.camera),this.bloomPass=new i.EffectPass(this.camera,new i.BloomEffect({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));let e=new i.EffectPass(this.camera,new i.SMAAEffect({preset:i.SMAAPreset.MEDIUM}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,e.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(e)}loadAssets(){let e=this.assets;return new Promise(t=>{let s=new r.LoadingManager(t),o=new Image,a=new Image;e.smaa={},o.addEventListener("load",function(){e.smaa.search=this,s.itemEnd("smaa-search")}),a.addEventListener("load",function(){e.smaa.area=this,s.itemEnd("smaa-area")}),s.itemStart("smaa-search"),s.itemStart("smaa-area"),o.src=i.SMAAEffect.searchImageDataURL,a.src=i.SMAAEffect.areaImageDataURL})}init(){if(this.disposed)return;this.initPasses();let e=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh&&this.leftCarLights.mesh.position.setX(-e.roadWidth/2-e.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh&&this.rightCarLights.mesh.position.setX(e.roadWidth/2+e.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh&&this.leftSticks.mesh.position.setX(-(e.roadWidth+e.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(e){e.preventDefault()}update(e){let t=Math.exp(-(-60*Math.log2(.9))*e);this.speedUp+=x(this.speedUp,this.speedUpTarget,t,1e-5),this.timeOffset+=this.speedUp*e;let i=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(i),this.leftCarLights.update(i),this.leftSticks.update(i),this.road.update(i);let s=!1,o=x(this.camera.fov,this.fovTarget,t);if(0!==o&&(this.camera.fov+=o*e*6,s=!0),this.options.distortion.getJS){let e=this.options.distortion.getJS(.025,i);this.camera.lookAt(new r.Vector3(this.camera.position.x+e.x,this.camera.position.y+e.y,this.camera.position.z+e.z)),s=!0}s&&this.camera.updateProjectionMatrix()}render(e){this.composer.render(e)}dispose(){this.disposed=!0,this.scene&&(this.scene.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose()))}),this.scene.clear()),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)),this.composer&&this.composer.dispose(),window.removeEventListener("resize",this.onWindowResize),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(e,t,i){if(e<=0||t<=0){this.hasValidSize=!1;return}this.composer.setSize(e,t,i),this.hasValidSize=!0}tick(){if(!this.disposed){if(!this.hasValidSize){let e=this.container.offsetWidth,t=this.container.offsetHeight;if(!(e>0)||!(t>0))return void requestAnimationFrame(this.tick);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t),this.hasValidSize=!0}if(function(e,t){let i=e.domElement,s=i.clientWidth,r=i.clientHeight;if(s<=0||r<=0)return!1;let o=i.width!==s||i.height!==r;return o&&t(s,r,!1),o}(this.renderer,this.setSize)){let e=this.renderer.domElement;this.hasValidSize&&(this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix())}if(this.hasValidSize){let e=this.clock.getDelta();this.render(e),this.update(e)}requestAnimationFrame(this.tick)}}}(T,I);l.current=z;let N=!1;return z.loadAssets().then(()=>{N||z.disposed||z.init()}),()=>{N=!0,l.current&&(l.current.dispose(),l.current=null)}},[e]),(0,t.jsx)("div",{ref:n,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"}})}])},27612,e=>{"use strict";let t=(0,e.i(75254).default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);e.s(["Trash2",0,t],27612)},96896,e=>{"use strict";var t=e.i(43476),i=e.i(46932),s=e.i(66992),r=e.i(39312),o=e.i(21218),a=e.i(27612),n=e.i(48256),l=e.i(58041),c=e.i(52008),d=e.i(57303),h=e.i(59544);let u=()=>(0,t.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500",children:[(0,t.jsxs)("section",{className:"relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32 transition-colors duration-500",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-0 opacity-30 dark:opacity-100",children:(0,t.jsx)(d.default,{effectOptions:{colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:0xffffff,brokenLines:0xffffff,leftCars:[0xc1ff00,9159498,5078031],rightCars:[0xffffff,0xcccccc,0x999999],sticks:0xc1ff00}}})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"}),(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center",children:(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-[var(--c-fg)]/5 backdrop-blur-md px-4 py-2 rounded-full border border-[var(--c-border)] text-[var(--c-lime)] mb-6 md:mb-8",children:[(0,t.jsx)("div",{className:"w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"}),(0,t.jsx)("span",{className:"text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]",children:"Infrastructure Solutions"})]}),(0,t.jsxs)("h1",{className:"text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase",children:["AI Data Centres. ",(0,t.jsx)("br",{className:"hidden sm:block"}),(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Sustainable & Secure."})]}),(0,t.jsx)("p",{className:"text-base sm:text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-2xl mx-auto mb-10",children:"Enterprise-grade recovery solutions for the world's largest data centers, ensuring secure, sustainable management of retired hardware."})]})})]}),(0,t.jsxs)("section",{className:"py-10 bg-[var(--c-bg)] relative overflow-hidden transition-colors duration-500",children:[(0,t.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--c-lime)]/5 rounded-full blur-[120px] pointer-events-none"}),(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:[(0,t.jsxs)("div",{className:"text-center mb-16",children:[(0,t.jsxs)("h2",{className:"section-title font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase",children:["One Bridged ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Supply Chain."})]}),(0,t.jsx)("p",{className:"text-lg text-[var(--c-fg2)] font-medium max-w-3xl mx-auto mb-12",children:"Each spoke is a mineral category — and a single-country dependency. Hover and explore where WBM picks up the slack."}),(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"inline-flex flex-col md:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--c-lime)]/5 border border-[var(--c-lime)]/20 text-left max-w-4xl mx-auto",children:[(0,t.jsx)("div",{className:"w-12 h-12 rounded-full bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] shrink-0",children:(0,t.jsx)(o.Activity,{size:24})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-[var(--c-fg)] font-bold mb-1",children:"85% of this supply chain currently depends on Asia."}),(0,t.jsx)("div",{className:"text-[var(--c-fg2)] text-sm",children:"We are the bridge. Every spoke below maps to a WBM-recoverable mineral stream — sourced from allied geographies."})]})]})]}),(0,t.jsxs)("div",{className:"relative pt-12 md:pt-20",children:[(0,t.jsxs)("div",{className:"flex lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 flex-col items-center mb-12 lg:mb-0",children:[(0,t.jsx)("div",{className:"px-6 py-3 rounded-full bg-[var(--c-lime)]/10 border border-[var(--c-lime)] text-[var(--c-lime)] text-xs font-black uppercase tracking-widest mb-4",children:"AI DATA CENTRE"}),(0,t.jsx)("div",{className:"text-xl font-black text-[var(--c-fg)] uppercase tracking-tighter",children:"5 Component Categories"}),(0,t.jsx)("div",{className:"w-px h-12 bg-gradient-to-b from-[var(--c-lime)] to-transparent mt-4 hidden lg:block"})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-12",children:[{title:"Microchips & Processors",sub:"The brains.",minerals:["Silicon","Germanium","Arsenic","+2"],coverage:20,color:"#10b981",icon:(0,t.jsx)(s.Cpu,{size:20})},{title:"Server Boards & PCBs",sub:"Every signal travels here.",minerals:["Gold","Silver","Copper","+2"],coverage:89,color:"#8b5cf6",icon:(0,t.jsx)(c.Layers,{size:20})},{title:"Heat Sinks",sub:"Pull watts from silicon.",minerals:["Copper","Aluminium"],coverage:100,color:"#f59e0b",icon:(0,t.jsx)(r.Zap,{size:20})},{title:"Cooling Systems",sub:"Liquid + immersion stacks.",minerals:["Rare-Earth","Copper"],coverage:60,color:"#0ea5e9",icon:(0,t.jsx)(o.Activity,{size:20})},{title:"Magnets & Storage",sub:"HDDs, SSDs, motors.",minerals:["Neodymium","Dysprosium","Boron"],coverage:93,color:"#f43f5e",icon:(0,t.jsx)(l.Database,{size:20})}].map((e,s)=>(0,t.jsxs)(i.motion.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.1*s},className:"p-8 rounded-[24px] bg-[var(--c-bg2)] border border-[var(--c-border)] hover:border-[var(--c-lime)]/30 transition-all group shadow-sm hover:shadow-xl",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4 mb-6",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center transition-colors",style:{backgroundColor:`${e.color}15`,color:e.color},children:e.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"font-bold text-[var(--c-fg)] text-lg leading-tight uppercase tracking-tight",children:e.title}),(0,t.jsx)("p",{className:"text-[var(--c-fg2)] text-xs font-medium",children:e.sub})]})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2 mb-8",children:e.minerals.map((e,i)=>(0,t.jsx)("span",{className:"text-[9px] font-bold px-2 py-1 rounded-md bg-[var(--c-fg)]/5 text-[var(--c-fg2)] uppercase tracking-wider",children:e},i))}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"flex justify-between items-end",children:[(0,t.jsx)("div",{className:"text-[9px] font-black text-[var(--c-fg2)] uppercase tracking-tighter",children:"WBM Coverage"}),(0,t.jsxs)("div",{className:"text-sm font-black",style:{color:e.color},children:[e.coverage,"%"]})]}),(0,t.jsx)("div",{className:"h-1.5 w-full bg-[var(--c-fg)]/5 rounded-full overflow-hidden",children:(0,t.jsx)(i.motion.div,{initial:{width:0},whileInView:{width:`${e.coverage}%`},viewport:{once:!0},transition:{duration:1,delay:.5},className:"h-full shadow-[0_0_10px_currentColor]",style:{backgroundColor:e.color,color:e.color}})})]})]},s))})]})]})]}),(0,t.jsx)("section",{className:"py-12 md:py-24 bg-[var(--c-fg)]/5 transition-colors duration-300",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 md:px-8",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",children:[(0,t.jsxs)(i.motion.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:1},children:[(0,t.jsxs)("h2",{className:"section-title section-title  font-bold text-[var(--c-fg)] leading-tight tracking-tight mb-8 md:mb-10",children:["Uncompromising ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"security"})," protocols"]}),(0,t.jsx)("div",{className:"space-y-6 md:space-y-8",children:[{icon:(0,t.jsx)(o.Activity,{size:24}),text:"Real-time tracking of every asset"},{icon:(0,t.jsx)(a.Trash2,{size:24}),text:"Certified on-site and off-site data destruction"},{icon:(0,t.jsx)(n.Globe,{size:24}),text:"Full compliance with global data privacy regulations"}].map((e,i)=>(0,t.jsxs)("div",{className:"flex items-center gap-4 md:gap-6",children:[(0,t.jsx)("div",{className:"bg-[var(--c-lime)]/10 p-2.5 md:p-3 rounded-xl text-[var(--c-lime)] flex-shrink-0",children:(0,t.jsx)("div",{className:"scale-90 md:scale-100",children:e.icon})}),(0,t.jsx)("span",{className:"text-lg md:text-xl font-bold text-[var(--c-fg)] tracking-tight leading-tight",children:e.text})]},i))})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(i.motion.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:1},className:"rounded-[20px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10",children:(0,t.jsx)("img",{src:"/WBM/media/DataCentersAI.jpg",alt:"Data Center Hardware",className:"w-full h-auto"})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-tr from-[var(--c-lime)]/20 to-transparent pointer-events-none rounded-[20px]"})]})]})})}),(0,t.jsx)("section",{className:"py-12 bg-[var(--c-bg)] text-center transition-colors duration-300",children:(0,t.jsx)("div",{className:"max-w-4xl mx-auto px-4",children:(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,t.jsxs)("h2",{className:"section-title font-bold text-[var(--c-fg)] tracking-tight mb-10 leading-tight",children:["Ready to decommission your ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"retired hardware?"})]}),(0,t.jsx)("p",{className:"text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-12 leading-relaxed max-w-3xl mx-auto",children:"Our infrastructure team provides specialized solutions for enterprise data centers and AI clusters."}),(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(h.default,{href:"/contact",children:"Contact Infrastructure Team"})})]})})})]});e.s(["default",0,function(){return(0,t.jsx)(u,{})}],96896)}]);