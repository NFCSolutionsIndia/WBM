(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",0,t],39312)},78946,e=>{"use strict";let t=(0,e.i(75254).default)("recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);e.s(["Recycle",0,t],78946)},53802,e=>{"use strict";let t=(0,e.i(75254).default)("magnet",[["path",{d:"m12 15 4 4",key:"lnac28"}],["path",{d:"M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z",key:"nlhkjb"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}]]);e.s(["Magnet",0,t],53802)},58041,e=>{"use strict";let t=(0,e.i(75254).default)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);e.s(["Database",0,t],58041)},21218,e=>{"use strict";let t=(0,e.i(75254).default)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);e.s(["Activity",0,t],21218)},70756,e=>{"use strict";let t=(0,e.i(75254).default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);e.s(["Lock",0,t],70756)},57303,e=>{"use strict";var t=e.i(43476),i=e.i(33623),r=e.i(71645),s=e.i(90072),o=e.i(8560);let a={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[12,80],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:0xffffff,brokenLines:0xffffff,leftCars:[0xd856bf,6770850,0xc247ac],rightCars:[242627,941733,3294549],sticks:242627}};e.s(["default",0,({effectOptions:e=a})=>{let n=(0,r.useRef)(null),l=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(l.current){l.current.dispose(),l.current=null;let e=n.current;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}let t={uFreq:{value:new s.Vector3(3,6,10)},uAmp:{value:new s.Vector3(30,30,20)}},r={uFreq:{value:new s.Vector2(5,2)},uAmp:{value:new s.Vector2(25,15)}},c={uFreq:{value:new s.Vector2(2,3)},uAmp:{value:new s.Vector2(35,10)}},d={uFreq:{value:new s.Vector4(4,8,8,1)},uAmp:{value:new s.Vector4(25,5,10,10)}},h={uFreq:{value:new s.Vector2(4,8)},uAmp:{value:new s.Vector2(10,20)},uPowY:{value:new s.Vector2(20,2)}},u=e=>.5*Math.sin(e)+.5,m={mountainDistortion:{uniforms:t,getDistortion:`
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
        `,getJS:(e,i)=>{let r=t.uFreq.value,o=t.uAmp.value,a=new s.Vector3(Math.cos(e*Math.PI*r.x+i)*o.x-Math.cos(.02*Math.PI*r.x+i)*o.x,u(e*Math.PI*r.y+i)*o.y-u(.02*Math.PI*r.y+i)*o.y,u(e*Math.PI*r.z+i)*o.z-u(.02*Math.PI*r.z+i)*o.z),n=new s.Vector3(2,2,2),l=new s.Vector3(0,0,-5);return a.multiply(n).add(l)}},xyDistortion:{uniforms:r,getDistortion:`
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
        `,getJS:(e,t)=>{let i=r.uFreq.value,o=r.uAmp.value,a=new s.Vector3(Math.cos(e*Math.PI*i.x+t)*o.x-Math.cos(.02*Math.PI*i.x+t)*o.x,Math.sin(e*Math.PI*i.y+t+Math.PI/2)*o.y-Math.sin(.02*Math.PI*i.y+t+Math.PI/2)*o.y,0),n=new s.Vector3(2,.4,1),l=new s.Vector3(0,0,-3);return a.multiply(n).add(l)}},LongRaceDistortion:{uniforms:c,getDistortion:`
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
        `,getJS:(e,t)=>{let i=c.uFreq.value,r=c.uAmp.value,o=new s.Vector3(Math.sin(e*Math.PI*i.x+t)*r.x-Math.sin(.0125*Math.PI*i.x+t)*r.x,Math.sin(e*Math.PI*i.y+t)*r.y-Math.sin(.0125*Math.PI*i.y+t)*r.y,0),a=new s.Vector3(1,1,0),n=new s.Vector3(0,0,-5);return o.multiply(a).add(n)}},turbulentDistortion:{uniforms:d,getDistortion:`
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
        `,getJS:(e,t)=>{let i=d.uFreq.value,r=d.uAmp.value,o=e=>Math.cos(Math.PI*e*i.x+t)*r.x+Math.pow(Math.cos(Math.PI*e*i.y+t*(i.y/i.x)),2)*r.y,a=e=>-u(Math.PI*e*i.z+t)*r.z-Math.pow(u(Math.PI*e*i.w+t/(i.z/i.w)),5)*r.w,n=new s.Vector3(o(e)-o(e+.007),a(e)-a(e+.007),0),l=new s.Vector3(-2,-5,0),c=new s.Vector3(0,0,-10);return n.multiply(l).add(c)}},turbulentDistortionStill:{uniforms:d,getDistortion:`
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
        `,getJS:(e,t)=>{let i=h.uFreq.value,r=h.uAmp.value,o=h.uPowY.value,a=e=>Math.sin(e*Math.PI*i.x+t)*r.x,n=e=>Math.pow(e*o.x,o.y)+Math.sin(e*Math.PI*i.y+t)*r.y,l=new s.Vector3(a(e)-a(e+.01),n(e)-n(e+.01),0),c=new s.Vector3(-2,-4,0),d=new s.Vector3(0,0,-10);return l.multiply(c).add(d)}}},p={uDistortionX:{value:new s.Vector2(80,3)},uDistortionY:{value:new s.Vector2(-40,2.5)}},g=`
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
    `,f=e=>Array.isArray(e)?Math.random()*(e[1]-e[0])+e[0]:Math.random()*e,v=e=>Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e;function x(e,t,i=.1,r=.001){let s=(t-e)*i;return Math.abs(s)<r&&(s=t-e),s}class w{webgl;options;colors;speed;fade;mesh=null;constructor(e,t,i,r,s){this.webgl=e,this.options=t,this.colors=i,this.speed=r,this.fade=s}init(){let e=this.options,t=new s.LineCurve3(new s.Vector3(0,0,0),new s.Vector3(0,0,-1)),i=new s.TubeGeometry(t,40,1,8,!1),r=new s.InstancedBufferGeometry().copy(i);r.instanceCount=2*e.lightPairsPerRoadWay;let o=e.roadWidth/e.lanesPerRoad,a=[],n=[],l=[],c=this.colors;c=Array.isArray(c)?c.map(e=>new s.Color(e)):new s.Color(c);for(let t=0;t<e.lightPairsPerRoadWay;t++){let i=f(e.carLightsRadius),r=f(e.carLightsLength),s=f(this.speed),d=t%e.lanesPerRoad*o-e.roadWidth/2+o/2,h=f(e.carWidthPercentage)*o;d+=f(e.carShiftX)*o;let u=f(e.carFloorSeparation)+1.3*i,m=-f(e.length);a.push(d-h/2),a.push(u),a.push(m),a.push(d+h/2),a.push(u),a.push(m),n.push(i),n.push(r),n.push(s),n.push(i),n.push(r),n.push(s);let p=v(c);l.push(p.r),l.push(p.g),l.push(p.b),l.push(p.r),l.push(p.g),l.push(p.b)}r.setAttribute("aOffset",new s.InstancedBufferAttribute(new Float32Array(a),3,!1)),r.setAttribute("aMetrics",new s.InstancedBufferAttribute(new Float32Array(n),3,!1)),r.setAttribute("aColor",new s.InstancedBufferAttribute(new Float32Array(l),3,!1));let d=new s.ShaderMaterial({fragmentShader:y,vertexShader:b,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:e.length},uFade:{value:this.fade}},this.webgl.fogUniforms,e.distortion.uniforms)});d.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let h=new s.Mesh(r,d);h.frustumCulled=!1,this.webgl.scene.add(h),this.mesh=h}update(e){this.mesh&&(this.mesh.material.uniforms.uTime.value=e)}}let y=`
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
    `;class P{webgl;options;mesh=null;constructor(e,t){this.webgl=e,this.options=t}init(){let e=this.options,t=new s.PlaneGeometry(1,1),i=new s.InstancedBufferGeometry().copy(t),r=e.totalSideLightSticks;i.instanceCount=r;let o=e.length/(r-1),a=[],n=[],l=[],c=e.colors.sticks;c=Array.isArray(c)?c.map(e=>new s.Color(e)):new s.Color(c);for(let t=0;t<r;t++){let i=f(e.lightStickWidth),r=f(e.lightStickHeight);a.push((t-1)*o*2+o*Math.random());let s=v(c);n.push(s.r),n.push(s.g),n.push(s.b),l.push(i),l.push(r)}i.setAttribute("aOffset",new s.InstancedBufferAttribute(new Float32Array(a),1,!1)),i.setAttribute("aColor",new s.InstancedBufferAttribute(new Float32Array(n),3,!1)),i.setAttribute("aMetrics",new s.InstancedBufferAttribute(new Float32Array(l),2,!1));let d=new s.ShaderMaterial({fragmentShader:S,vertexShader:k,side:s.DoubleSide,uniforms:Object.assign({uTravelLength:{value:e.length},uTime:{value:0}},this.webgl.fogUniforms,e.distortion.uniforms)});d.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let h=new s.Mesh(i,d);h.frustumCulled=!1,this.webgl.scene.add(h),this.mesh=h}update(e){this.mesh&&(this.mesh.material.uniforms.uTime.value=e)}}let k=`
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
    `,S=`
      #define USE_FOG;
      ${o.ShaderChunk.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${o.ShaderChunk.fog_fragment}
      }
    `;class M{webgl;options;uTime;leftRoadWay=null;rightRoadWay=null;island=null;constructor(e,t){this.webgl=e,this.options=t,this.uTime={value:0}}createPlane(e,t,i){let r=this.options,o=new s.PlaneGeometry(i?r.roadWidth:r.islandWidth,r.length,20,100),a={uTravelLength:{value:r.length},uColor:{value:new s.Color(i?r.colors.roadColor:r.colors.islandColor)},uTime:this.uTime};i&&(a=Object.assign(a,{uLanes:{value:r.lanesPerRoad},uBrokenLinesColor:{value:new s.Color(r.colors.brokenLines)},uShoulderLinesColor:{value:new s.Color(r.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:r.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:r.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:r.brokenLinesWidthPercentage}}));let n=new s.ShaderMaterial({fragmentShader:i?T:j,vertexShader:F,side:s.DoubleSide,uniforms:Object.assign(a,this.webgl.fogUniforms,r.distortion.uniforms)});n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <getDistortion_vertex>",r.distortion.getDistortion)};let l=new s.Mesh(o,n);return l.rotation.x=-Math.PI/2,l.position.z=-r.length/2,l.position.x+=(this.options.islandWidth/2+r.roadWidth/2)*e,this.webgl.scene.add(l),l}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(e){this.uTime.value=e}}let L=`
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
    `,j=L.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),A=`
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
    `,C=`
      uv.y = mod(uv.y + uTime * 0.05, 1.);
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

      brokenLines = mix(brokenLines, sideLines, uv.x);
    `,T=L.replace("#include <roadMarkings_fragment>",C).replace("#include <roadMarkings_vars>",A),F=`
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
    `,I=n.current;if(!I)return;let z={...a,...e,colors:{...a.colors,...e?.colors}};z.distortion=m[z.distortion];let D=new class{options;container;hasValidSize;renderer;composer;camera;scene;fogUniforms;clock;assets;disposed;road;leftCarLights;rightCarLights;leftSticks;fovTarget;speedUpTarget;speedUp;timeOffset;renderPass;bloomPass;constructor(e,t={}){this.options=t,null==this.options.distortion&&(this.options.distortion={uniforms:p,getDistortion:g}),this.container=e,this.hasValidSize=!1;const r=Math.max(1,e.offsetWidth),a=Math.max(1,e.offsetHeight);this.renderer=new o.WebGLRenderer({antialias:!1,alpha:!0}),this.renderer.setSize(r,a,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new i.EffectComposer(this.renderer),e.append(this.renderer.domElement),this.camera=new s.PerspectiveCamera(t.fov,r/a,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new s.Scene,this.scene.background=null;let n=new s.Fog(t.colors.background,.2*t.length,500*t.length);this.scene.fog=n,this.fogUniforms={fogColor:{value:n.color},fogNear:{value:n.near},fogFar:{value:n.far}},this.clock=new s.Clock,this.assets={},this.disposed=!1,this.road=new M(this,t),this.leftCarLights=new w(this,t,t.colors.leftCars,t.movingAwaySpeed,new s.Vector2(0,1-t.carLightsFade)),this.rightCarLights=new w(this,t,t.colors.rightCars,t.movingCloserSpeed,new s.Vector2(1,0+t.carLightsFade)),this.leftSticks=new P(this,t),this.fovTarget=t.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),this.onWindowResize=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResize),e.offsetWidth>0&&e.offsetHeight>0&&(this.hasValidSize=!0)}onWindowResize(){let e=this.container.offsetWidth,t=this.container.offsetHeight;if(e<=0||t<=0){this.hasValidSize=!1;return}this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t),this.hasValidSize=!0}initPasses(){if(this.disposed||!this.composer)return;this.renderPass=new i.RenderPass(this.scene,this.camera),this.bloomPass=new i.EffectPass(this.camera,new i.BloomEffect({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));let e=new i.EffectPass(this.camera,new i.SMAAEffect({preset:i.SMAAPreset.MEDIUM}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,e.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(e)}loadAssets(){let e=this.assets;return new Promise(t=>{let r=new s.LoadingManager(t),o=new Image,a=new Image;e.smaa={},o.addEventListener("load",function(){e.smaa.search=this,r.itemEnd("smaa-search")}),a.addEventListener("load",function(){e.smaa.area=this,r.itemEnd("smaa-area")}),r.itemStart("smaa-search"),r.itemStart("smaa-area"),o.src=i.SMAAEffect.searchImageDataURL,a.src=i.SMAAEffect.areaImageDataURL})}init(){if(this.disposed)return;this.initPasses();let e=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh&&this.leftCarLights.mesh.position.setX(-e.roadWidth/2-e.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh&&this.rightCarLights.mesh.position.setX(e.roadWidth/2+e.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh&&this.leftSticks.mesh.position.setX(-(e.roadWidth+e.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(e){e.preventDefault()}update(e){let t=Math.exp(-(-60*Math.log2(.9))*e);this.speedUp+=x(this.speedUp,this.speedUpTarget,t,1e-5),this.timeOffset+=this.speedUp*e;let i=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(i),this.leftCarLights.update(i),this.leftSticks.update(i),this.road.update(i);let r=!1,o=x(this.camera.fov,this.fovTarget,t);if(0!==o&&(this.camera.fov+=o*e*6,r=!0),this.options.distortion.getJS){let e=this.options.distortion.getJS(.025,i);this.camera.lookAt(new s.Vector3(this.camera.position.x+e.x,this.camera.position.y+e.y,this.camera.position.z+e.z)),r=!0}r&&this.camera.updateProjectionMatrix()}render(e){this.composer.render(e)}dispose(){this.disposed=!0,this.scene&&(this.scene.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose()))}),this.scene.clear()),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)),this.composer&&this.composer.dispose(),window.removeEventListener("resize",this.onWindowResize),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(e,t,i){if(e<=0||t<=0){this.hasValidSize=!1;return}this.composer.setSize(e,t,i),this.hasValidSize=!0}tick(){if(!this.disposed){if(!this.hasValidSize){let e=this.container.offsetWidth,t=this.container.offsetHeight;if(!(e>0)||!(t>0))return void requestAnimationFrame(this.tick);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t),this.hasValidSize=!0}if(function(e,t){let i=e.domElement,r=i.clientWidth,s=i.clientHeight;if(r<=0||s<=0)return!1;let o=i.width!==r||i.height!==s;return o&&t(r,s,!1),o}(this.renderer,this.setSize)){let e=this.renderer.domElement;this.hasValidSize&&(this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix())}if(this.hasValidSize){let e=this.clock.getDelta();this.render(e),this.update(e)}requestAnimationFrame(this.tick)}}}(I,z);l.current=D;let N=!1;return D.loadAssets().then(()=>{N||D.disposed||D.init()}),()=>{N=!0,l.current&&(l.current.dispose(),l.current=null)}},[e]),(0,t.jsx)("div",{ref:n,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"}})}])},18393,e=>{"use strict";let t=(0,e.i(75254).default)("server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);e.s(["Server",0,t],18393)},48290,e=>{"use strict";var t=e.i(43476);e.i(71645);var i=e.i(46932),r=e.i(39312),s=e.i(58041),o=e.i(21218);let a=(0,e.i(75254).default)("thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);var n=e.i(70756),l=e.i(18393),c=e.i(53802),d=e.i(78946),h=e.i(57303),u=e.i(59544);e.s(["default",0,()=>{let e=[{title:"100% Uptime + Power",desc:"Triple-source power: grid, solar, wind. Battery + mineral-stream resilience baked in.",icon:(0,t.jsx)(r.Zap,{size:24})},{title:"6-Layer Encryption",desc:"Physical, perimeter, network, host, app, and key-vault — independently audited.",icon:(0,t.jsx)(n.Lock,{size:24})},{title:"Rack Compatibility",desc:"NVIDIA HGX, Cisco UCS, Juniper QFX certified. Bring your hardware; we bring the floor.",icon:(0,t.jsx)(l.Server,{size:24})},{title:"15-Year Leases",desc:"Long-tenor leases with structured indexation. Optional offtake-aligned co-location.",icon:(0,t.jsx)(o.Activity,{size:24})}],m=[{label:"Uptime SLA",value:"100",suffix:"%",icon:(0,t.jsx)(o.Activity,{size:20})},{label:"Power Availability",value:"100",suffix:"%",icon:(0,t.jsx)(r.Zap,{size:20})},{label:"Encryption Layers",value:"6",suffix:"",icon:(0,t.jsx)(n.Lock,{size:20})},{label:"Lease Tenor",value:"15",suffix:"yr",icon:(0,t.jsx)(s.Database,{size:20})}];return(0,t.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500 overflow-x-hidden",children:[(0,t.jsxs)("section",{className:"relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 transition-colors duration-500",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-0",children:(0,t.jsx)(h.default,{speed:.5,color:"#839470"})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"}),(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center",children:(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-8",children:[(0,t.jsx)("div",{className:"w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"}),(0,t.jsx)("span",{className:"text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]",children:"Tenant / Data Centre Journey"})]}),(0,t.jsxs)("h1",{className:"text-4xl md:text-[64px] font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase text-glow",children:["One Floor. ",(0,t.jsx)("br",{})," ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"Fifteen Years."})]}),(0,t.jsx)("p",{className:"text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10",children:"Plug-and-play compatibility with NVIDIA, Cisco, and Juniper. Six-layer encryption. Built into the only AI-native extraction plant on the planet."}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-center gap-4",children:[(0,t.jsx)(u.default,{href:"/what-we-do/ai-data-centres",size:"lg",children:"Tour the floor"}),(0,t.jsx)(u.default,{href:"/contact",variant:"outline",size:"lg",children:"Request Lease Terms"})]})]})})]}),(0,t.jsx)("section",{className:"py-24 bg-[var(--c-bg)]",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6",children:(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:e.map((e,r)=>(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1*r},className:"p-10 rounded-[32px] bg-[var(--c-bg2)] border border-[var(--c-border)] hover:border-[var(--c-lime)] transition-all group",children:[(0,t.jsx)("div",{className:"w-12 h-12 rounded-xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-8 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-colors",children:e.icon}),(0,t.jsx)("h4",{className:"text-xl font-bold text-[var(--c-fg)] mb-4 uppercase tracking-tight",children:e.title}),(0,t.jsx)("p",{className:"text-sm text-[var(--c-fg2)] leading-relaxed",children:e.desc})]},r))})})}),(0,t.jsx)("section",{className:"py-24 bg-[var(--c-fg)]/5 relative overflow-hidden",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",children:[(0,t.jsxs)(i.motion.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[(0,t.jsx)("h2",{className:"text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4",children:"Architecture"}),(0,t.jsxs)("h3",{className:"section-title font-black text-[var(--c-fg)] uppercase tracking-tight mb-8",children:["Liquid Cooling ",(0,t.jsx)("br",{})," ",(0,t.jsx)("span",{className:"text-[#839470]",children:"Integrated Flow."})]}),(0,t.jsx)("p",{className:"text-lg text-[var(--c-fg2)] mb-10",children:"Indicative cross-section. Recovery occurs at end-of-life — the techniques stay with us."}),(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[{title:"Coolant Fluids",desc:"Coolant-grade fluids recovered & refined at end-of-life.",icon:(0,t.jsx)(o.Activity,{size:20})},{title:"Heat-Exchangers",desc:"Copper & Aluminium recovered from cold plates.",icon:(0,t.jsx)(a,{size:20})},{title:"Magnet-Cooling",desc:"Rare-earth magnets returned via the closed-loop wing.",icon:(0,t.jsx)(c.Magnet,{size:20})},{title:"Closed-Loop",desc:"Feeds the Closed-Loop Feedstock wing of our Butterfly.",icon:(0,t.jsx)(d.Recycle,{size:20})}].map((e,i)=>(0,t.jsxs)("div",{className:"p-6 rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg)] group hover:border-[var(--c-lime)] transition-all",children:[(0,t.jsx)("div",{className:"w-8 h-8 rounded-full bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-4 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-colors",children:e.icon}),(0,t.jsx)("h4",{className:"font-bold text-[var(--c-fg)] uppercase text-xs tracking-widest mb-2",children:e.title}),(0,t.jsx)("p",{className:"text-[10px] text-[var(--c-fg2)] leading-relaxed",children:e.desc})]},i))})]}),(0,t.jsxs)(i.motion.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},className:"relative h-[500px] flex items-center justify-center",children:[(0,t.jsx)("div",{className:"absolute w-80 h-80 rounded-full border border-[var(--c-lime)]/30 flex items-center justify-center animate-spin-slow",children:(0,t.jsx)("div",{className:"w-4 h-4 rounded-full bg-[var(--c-lime)] absolute top-0"})}),(0,t.jsx)("div",{className:"absolute w-60 h-60 rounded-full border border-[var(--c-lime)]/20 flex items-center justify-center animate-spin-reverse-slow",children:(0,t.jsx)("div",{className:"w-3 h-3 rounded-full bg-[var(--c-lime)] absolute bottom-0"})}),(0,t.jsx)(l.Server,{className:"w-32 h-32 text-[var(--c-lime)]"}),(0,t.jsxs)("div",{className:"absolute bottom-0 text-center",children:[(0,t.jsx)("div",{className:"text-[9px] font-black uppercase tracking-widest text-[var(--c-lime)]",children:"Material Recovery Route"}),(0,t.jsx)("div",{className:"text-[9px] font-bold text-[var(--c-fg2)] uppercase tracking-widest mt-1",children:"Documented under MOU"})]})]})]})})}),(0,t.jsx)("section",{className:"py-24 bg-[var(--c-bg)]",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-6",children:[(0,t.jsxs)("div",{className:"text-center mb-16",children:[(0,t.jsx)("h2",{className:"text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4",children:"Leasing Status"}),(0,t.jsxs)("h3",{className:"section-title font-black text-[var(--c-fg)] uppercase tracking-tight",children:["Four Floors. ",(0,t.jsx)("span",{className:"text-[#839470]",children:"One is Yours."})]})]}),(0,t.jsx)("div",{className:"space-y-4 max-w-4xl mx-auto",children:[{id:"4",status:"Available",size:"25,000 sq ft",load:"~12 MW IT load",color:"text-[var(--c-lime)]"},{id:"3",status:"Hyperscaler (LOI)",size:"25,000 sq ft",load:"~12 MW IT load",color:"text-[var(--c-fg2)]"},{id:"2",status:"Sovereign AI Tenant",size:"25,000 sq ft",load:"~12 MW IT load",color:"text-[var(--c-fg2)]"},{id:"1",status:"Anchor Tenant",size:"25,000 sq ft",load:"~12 MW IT load",color:"text-[var(--c-fg2)]"}].map((e,r)=>(0,t.jsxs)(i.motion.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.1*r},className:"p-8 rounded-2xl bg-[var(--c-bg2)] border border-[var(--c-border)] flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-[var(--c-lime)] transition-all",children:[(0,t.jsxs)("div",{className:"flex items-center gap-8",children:[(0,t.jsxs)("div",{className:"text-4xl font-black text-[var(--c-fg)]/20 group-hover:text-[var(--c-lime)] transition-colors",children:["0",e.id]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("h4",{className:"text-xl font-bold text-[var(--c-fg)] uppercase",children:["Floor ",e.id]}),(0,t.jsxs)("div",{className:"text-xs text-[var(--c-fg2)] font-bold tracking-widest",children:[e.size," · ",e.load]})]})]}),(0,t.jsx)("div",{className:`px-4 py-2 rounded-full border border-current text-[10px] font-black uppercase tracking-widest ${e.color}`,children:e.status})]},r))}),(0,t.jsx)("div",{className:"mt-12 p-8 rounded-3xl bg-[var(--c-fg)]/5 border border-[var(--c-border)] text-center max-w-4xl mx-auto",children:(0,t.jsx)("p",{className:"text-sm font-bold text-[var(--c-fg)] uppercase tracking-widest",children:"Building Total: 100,000 sq ft · ~48 MW IT load · 6-layer encryption envelope"})})]})}),(0,t.jsx)("section",{className:"py-24 bg-[var(--c-fg)] relative",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-6 text-center relative z-10",children:[(0,t.jsx)("h2",{className:"text-sm font-black tracking-[0.3em] text-[var(--c-bg)]/50 uppercase mb-16",children:"The numbers your CTO will ask for"}),(0,t.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12",children:m.map((e,r)=>(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1*r},children:[(0,t.jsxs)("div",{className:"text-6xl md:text-7xl font-black text-[var(--c-lime)] tracking-tighter mb-4 leading-none",children:[e.value,e.suffix]}),(0,t.jsx)("div",{className:"text-[10px] font-bold text-[var(--c-bg)] uppercase tracking-[0.2em]",children:e.label})]},r))})]})}),(0,t.jsx)("section",{className:"py-24 bg-[var(--c-bg)] text-center border-t border-[var(--c-border)] relative overflow-hidden",children:(0,t.jsx)("div",{className:"max-w-4xl mx-auto px-4 relative z-10",children:(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,t.jsxs)("h2",{className:"section-title font-black text-[var(--c-fg)] tracking-tighter mb-10 leading-none uppercase",children:["See the supply chain ",(0,t.jsx)("br",{})," ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"That powers your hardware."})]}),(0,t.jsx)("p",{className:"text-xl text-[var(--c-fg2)] font-medium mb-12 max-w-2xl mx-auto",children:"85% of AI hardware depends on a chokepoint. Tour our supply-chain diagram before you tour the floor."}),(0,t.jsx)("div",{className:"flex flex-wrap justify-center gap-4",children:(0,t.jsx)(u.default,{href:"/what-we-do",size:"lg",children:"Open AI-DC Supply Chain"})})]})})})]})}],48290)}]);