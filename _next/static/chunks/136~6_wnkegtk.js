(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,39312,e=>{"use strict";let t=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",0,t],39312)},48256,e=>{"use strict";let t=(0,e.i(75254).default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);e.s(["Globe",0,t],48256)},81418,e=>{"use strict";let t=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",0,t],81418)},66992,e=>{"use strict";let t=(0,e.i(75254).default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]);e.s(["Cpu",0,t],66992)},21218,e=>{"use strict";let t=(0,e.i(75254).default)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);e.s(["Activity",0,t],21218)},96896,e=>{"use strict";var t=e.i(43476),i=e.i(46932),r=e.i(81418),s=e.i(66992),o=e.i(39312),n=e.i(21218);let a=(0,e.i(75254).default)("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]);var l=e.i(48256),h=e.i(33623),d=e.i(71645),c=e.i(90072),u=e.i(8560);let m={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[12,80],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:0xffffff,brokenLines:0xffffff,leftCars:[0xd856bf,6770850,0xc247ac],rightCars:[242627,941733,3294549],sticks:242627}},p=({effectOptions:e=m})=>{let i=(0,d.useRef)(null),r=(0,d.useRef)(null);return(0,d.useEffect)(()=>{if(r.current){r.current.dispose(),r.current=null;let e=i.current;if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}let t={uFreq:{value:new c.Vector3(3,6,10)},uAmp:{value:new c.Vector3(30,30,20)}},s={uFreq:{value:new c.Vector2(5,2)},uAmp:{value:new c.Vector2(25,15)}},o={uFreq:{value:new c.Vector2(2,3)},uAmp:{value:new c.Vector2(35,10)}},n={uFreq:{value:new c.Vector4(4,8,8,1)},uAmp:{value:new c.Vector4(25,5,10,10)}},a={uFreq:{value:new c.Vector2(4,8)},uAmp:{value:new c.Vector2(10,20)},uPowY:{value:new c.Vector2(20,2)}},l=e=>.5*Math.sin(e)+.5,d={mountainDistortion:{uniforms:t,getDistortion:`
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
        `,getJS:(e,i)=>{let r=t.uFreq.value,s=t.uAmp.value,o=new c.Vector3(Math.cos(e*Math.PI*r.x+i)*s.x-Math.cos(.02*Math.PI*r.x+i)*s.x,l(e*Math.PI*r.y+i)*s.y-l(.02*Math.PI*r.y+i)*s.y,l(e*Math.PI*r.z+i)*s.z-l(.02*Math.PI*r.z+i)*s.z),n=new c.Vector3(2,2,2),a=new c.Vector3(0,0,-5);return o.multiply(n).add(a)}},xyDistortion:{uniforms:s,getDistortion:`
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
        `,getJS:(e,t)=>{let i=s.uFreq.value,r=s.uAmp.value,o=new c.Vector3(Math.cos(e*Math.PI*i.x+t)*r.x-Math.cos(.02*Math.PI*i.x+t)*r.x,Math.sin(e*Math.PI*i.y+t+Math.PI/2)*r.y-Math.sin(.02*Math.PI*i.y+t+Math.PI/2)*r.y,0),n=new c.Vector3(2,.4,1),a=new c.Vector3(0,0,-3);return o.multiply(n).add(a)}},LongRaceDistortion:{uniforms:o,getDistortion:`
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
        `,getJS:(e,t)=>{let i=o.uFreq.value,r=o.uAmp.value,s=new c.Vector3(Math.sin(e*Math.PI*i.x+t)*r.x-Math.sin(.0125*Math.PI*i.x+t)*r.x,Math.sin(e*Math.PI*i.y+t)*r.y-Math.sin(.0125*Math.PI*i.y+t)*r.y,0),n=new c.Vector3(1,1,0),a=new c.Vector3(0,0,-5);return s.multiply(n).add(a)}},turbulentDistortion:{uniforms:n,getDistortion:`
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
        `,getJS:(e,t)=>{let i=n.uFreq.value,r=n.uAmp.value,s=e=>Math.cos(Math.PI*e*i.x+t)*r.x+Math.pow(Math.cos(Math.PI*e*i.y+t*(i.y/i.x)),2)*r.y,o=e=>-l(Math.PI*e*i.z+t)*r.z-Math.pow(l(Math.PI*e*i.w+t/(i.z/i.w)),5)*r.w,a=new c.Vector3(s(e)-s(e+.007),o(e)-o(e+.007),0),h=new c.Vector3(-2,-5,0),d=new c.Vector3(0,0,-10);return a.multiply(h).add(d)}},turbulentDistortionStill:{uniforms:n,getDistortion:`
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
        `},deepDistortionStill:{uniforms:a,getDistortion:`
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
        `},deepDistortion:{uniforms:a,getDistortion:`
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
        `,getJS:(e,t)=>{let i=a.uFreq.value,r=a.uAmp.value,s=a.uPowY.value,o=e=>Math.sin(e*Math.PI*i.x+t)*r.x,n=e=>Math.pow(e*s.x,s.y)+Math.sin(e*Math.PI*i.y+t)*r.y,l=new c.Vector3(o(e)-o(e+.01),n(e)-n(e+.01),0),h=new c.Vector3(-2,-4,0),d=new c.Vector3(0,0,-10);return l.multiply(h).add(d)}}},p={uDistortionX:{value:new c.Vector2(80,3)},uDistortionY:{value:new c.Vector2(-40,2.5)}},g=`
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
    `,f=e=>Array.isArray(e)?Math.random()*(e[1]-e[0])+e[0]:Math.random()*e,v=e=>Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e;function x(e,t,i=.1,r=.001){let s=(t-e)*i;return Math.abs(s)<r&&(s=t-e),s}class y{webgl;options;colors;speed;fade;mesh=null;constructor(e,t,i,r,s){this.webgl=e,this.options=t,this.colors=i,this.speed=r,this.fade=s}init(){let e=this.options,t=new c.LineCurve3(new c.Vector3(0,0,0),new c.Vector3(0,0,-1)),i=new c.TubeGeometry(t,40,1,8,!1),r=new c.InstancedBufferGeometry().copy(i);r.instanceCount=2*e.lightPairsPerRoadWay;let s=e.roadWidth/e.lanesPerRoad,o=[],n=[],a=[],l=this.colors;l=Array.isArray(l)?l.map(e=>new c.Color(e)):new c.Color(l);for(let t=0;t<e.lightPairsPerRoadWay;t++){let i=f(e.carLightsRadius),r=f(e.carLightsLength),h=f(this.speed),d=t%e.lanesPerRoad*s-e.roadWidth/2+s/2,c=f(e.carWidthPercentage)*s;d+=f(e.carShiftX)*s;let u=f(e.carFloorSeparation)+1.3*i,m=-f(e.length);o.push(d-c/2),o.push(u),o.push(m),o.push(d+c/2),o.push(u),o.push(m),n.push(i),n.push(r),n.push(h),n.push(i),n.push(r),n.push(h);let p=v(l);a.push(p.r),a.push(p.g),a.push(p.b),a.push(p.r),a.push(p.g),a.push(p.b)}r.setAttribute("aOffset",new c.InstancedBufferAttribute(new Float32Array(o),3,!1)),r.setAttribute("aMetrics",new c.InstancedBufferAttribute(new Float32Array(n),3,!1)),r.setAttribute("aColor",new c.InstancedBufferAttribute(new Float32Array(a),3,!1));let h=new c.ShaderMaterial({fragmentShader:w,vertexShader:b,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:e.length},uFade:{value:this.fade}},this.webgl.fogUniforms,e.distortion.uniforms)});h.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let d=new c.Mesh(r,h);d.frustumCulled=!1,this.webgl.scene.add(d),this.mesh=d}update(e){this.mesh&&(this.mesh.material.uniforms.uTime.value=e)}}let w=`
      #define USE_FOG;
      ${u.ShaderChunk.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${u.ShaderChunk.fog_fragment}
      }
    `,b=`
      #define USE_FOG;
      ${u.ShaderChunk.fog_pars_vertex}
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
        ${u.ShaderChunk.fog_vertex}
      }
    `;class P{webgl;options;mesh=null;constructor(e,t){this.webgl=e,this.options=t}init(){let e=this.options,t=new c.PlaneGeometry(1,1),i=new c.InstancedBufferGeometry().copy(t),r=e.totalSideLightSticks;i.instanceCount=r;let s=e.length/(r-1),o=[],n=[],a=[],l=e.colors.sticks;l=Array.isArray(l)?l.map(e=>new c.Color(e)):new c.Color(l);for(let t=0;t<r;t++){let i=f(e.lightStickWidth),r=f(e.lightStickHeight);o.push((t-1)*s*2+s*Math.random());let h=v(l);n.push(h.r),n.push(h.g),n.push(h.b),a.push(i),a.push(r)}i.setAttribute("aOffset",new c.InstancedBufferAttribute(new Float32Array(o),1,!1)),i.setAttribute("aColor",new c.InstancedBufferAttribute(new Float32Array(n),3,!1)),i.setAttribute("aMetrics",new c.InstancedBufferAttribute(new Float32Array(a),2,!1));let h=new c.ShaderMaterial({fragmentShader:S,vertexShader:M,side:c.DoubleSide,uniforms:Object.assign({uTravelLength:{value:e.length},uTime:{value:0}},this.webgl.fogUniforms,e.distortion.uniforms)});h.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let d=new c.Mesh(i,h);d.frustumCulled=!1,this.webgl.scene.add(d),this.mesh=d}update(e){this.mesh&&(this.mesh.material.uniforms.uTime.value=e)}}let M=`
      #define USE_FOG;
      ${u.ShaderChunk.fog_pars_vertex}
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
        ${u.ShaderChunk.fog_vertex}
      }
    `,S=`
      #define USE_FOG;
      ${u.ShaderChunk.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${u.ShaderChunk.fog_fragment}
      }
    `;class k{webgl;options;uTime;leftRoadWay=null;rightRoadWay=null;island=null;constructor(e,t){this.webgl=e,this.options=t,this.uTime={value:0}}createPlane(e,t,i){let r=this.options,s=new c.PlaneGeometry(i?r.roadWidth:r.islandWidth,r.length,20,100),o={uTravelLength:{value:r.length},uColor:{value:new c.Color(i?r.colors.roadColor:r.colors.islandColor)},uTime:this.uTime};i&&(o=Object.assign(o,{uLanes:{value:r.lanesPerRoad},uBrokenLinesColor:{value:new c.Color(r.colors.brokenLines)},uShoulderLinesColor:{value:new c.Color(r.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:r.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:r.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:r.brokenLinesWidthPercentage}}));let n=new c.ShaderMaterial({fragmentShader:i?D:C,vertexShader:I,side:c.DoubleSide,uniforms:Object.assign(o,this.webgl.fogUniforms,r.distortion.uniforms)});n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <getDistortion_vertex>",r.distortion.getDistortion)};let a=new c.Mesh(s,n);return a.rotation.x=-Math.PI/2,a.position.z=-r.length/2,a.position.x+=(this.options.islandWidth/2+r.roadWidth/2)*e,this.webgl.scene.add(a),a}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(e){this.uTime.value=e}}let L=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${u.ShaderChunk.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${u.ShaderChunk.fog_fragment}
      }
    `,C=L.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),A=`
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
    `,F=`
      uv.y = mod(uv.y + uTime * 0.05, 1.);
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

      brokenLines = mix(brokenLines, sideLines, uv.x);
    `,D=L.replace("#include <roadMarkings_fragment>",F).replace("#include <roadMarkings_vars>",A),I=`
      #define USE_FOG;
      uniform float uTime;
      ${u.ShaderChunk.fog_pars_vertex}
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
        ${u.ShaderChunk.fog_vertex}
      }
    `,T=i.current;if(!T)return;let z={...m,...e,colors:{...m.colors,...e?.colors}};z.distortion=d[z.distortion];let j=new class{options;container;hasValidSize;renderer;composer;camera;scene;fogUniforms;clock;assets;disposed;road;leftCarLights;rightCarLights;leftSticks;fovTarget;speedUpTarget;speedUp;timeOffset;renderPass;bloomPass;constructor(e,t={}){this.options=t,null==this.options.distortion&&(this.options.distortion={uniforms:p,getDistortion:g}),this.container=e,this.hasValidSize=!1;const i=Math.max(1,e.offsetWidth),r=Math.max(1,e.offsetHeight);this.renderer=new u.WebGLRenderer({antialias:!1,alpha:!0}),this.renderer.setSize(i,r,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new h.EffectComposer(this.renderer),e.append(this.renderer.domElement),this.camera=new c.PerspectiveCamera(t.fov,i/r,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new c.Scene,this.scene.background=null;let s=new c.Fog(t.colors.background,.2*t.length,500*t.length);this.scene.fog=s,this.fogUniforms={fogColor:{value:s.color},fogNear:{value:s.near},fogFar:{value:s.far}},this.clock=new c.Clock,this.assets={},this.disposed=!1,this.road=new k(this,t),this.leftCarLights=new y(this,t,t.colors.leftCars,t.movingAwaySpeed,new c.Vector2(0,1-t.carLightsFade)),this.rightCarLights=new y(this,t,t.colors.rightCars,t.movingCloserSpeed,new c.Vector2(1,0+t.carLightsFade)),this.leftSticks=new P(this,t),this.fovTarget=t.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),this.onWindowResize=this.onWindowResize.bind(this),window.addEventListener("resize",this.onWindowResize),e.offsetWidth>0&&e.offsetHeight>0&&(this.hasValidSize=!0)}onWindowResize(){let e=this.container.offsetWidth,t=this.container.offsetHeight;if(e<=0||t<=0){this.hasValidSize=!1;return}this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t),this.hasValidSize=!0}initPasses(){if(this.disposed||!this.composer)return;this.renderPass=new h.RenderPass(this.scene,this.camera),this.bloomPass=new h.EffectPass(this.camera,new h.BloomEffect({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));let e=new h.EffectPass(this.camera,new h.SMAAEffect({preset:h.SMAAPreset.MEDIUM}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,e.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(e)}loadAssets(){let e=this.assets;return new Promise(t=>{let i=new c.LoadingManager(t),r=new Image,s=new Image;e.smaa={},r.addEventListener("load",function(){e.smaa.search=this,i.itemEnd("smaa-search")}),s.addEventListener("load",function(){e.smaa.area=this,i.itemEnd("smaa-area")}),i.itemStart("smaa-search"),i.itemStart("smaa-area"),r.src=h.SMAAEffect.searchImageDataURL,s.src=h.SMAAEffect.areaImageDataURL})}init(){if(this.disposed)return;this.initPasses();let e=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh&&this.leftCarLights.mesh.position.setX(-e.roadWidth/2-e.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh&&this.rightCarLights.mesh.position.setX(e.roadWidth/2+e.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh&&this.leftSticks.mesh.position.setX(-(e.roadWidth+e.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(e){e.preventDefault()}update(e){let t=Math.exp(-(-60*Math.log2(.9))*e);this.speedUp+=x(this.speedUp,this.speedUpTarget,t,1e-5),this.timeOffset+=this.speedUp*e;let i=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(i),this.leftCarLights.update(i),this.leftSticks.update(i),this.road.update(i);let r=!1,s=x(this.camera.fov,this.fovTarget,t);if(0!==s&&(this.camera.fov+=s*e*6,r=!0),this.options.distortion.getJS){let e=this.options.distortion.getJS(.025,i);this.camera.lookAt(new c.Vector3(this.camera.position.x+e.x,this.camera.position.y+e.y,this.camera.position.z+e.z)),r=!0}r&&this.camera.updateProjectionMatrix()}render(e){this.composer.render(e)}dispose(){this.disposed=!0,this.scene&&(this.scene.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose()))}),this.scene.clear()),this.renderer&&(this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)),this.composer&&this.composer.dispose(),window.removeEventListener("resize",this.onWindowResize),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(e,t,i){if(e<=0||t<=0){this.hasValidSize=!1;return}this.composer.setSize(e,t,i),this.hasValidSize=!0}tick(){if(!this.disposed){if(!this.hasValidSize){let e=this.container.offsetWidth,t=this.container.offsetHeight;if(!(e>0)||!(t>0))return void requestAnimationFrame(this.tick);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t),this.hasValidSize=!0}if(function(e,t){let i=e.domElement,r=i.clientWidth,s=i.clientHeight;if(r<=0||s<=0)return!1;let o=i.width!==r||i.height!==s;return o&&t(r,s,!1),o}(this.renderer,this.setSize)){let e=this.renderer.domElement;this.hasValidSize&&(this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix())}if(this.hasValidSize){let e=this.clock.getDelta();this.render(e),this.update(e)}requestAnimationFrame(this.tick)}}}(T,z);r.current=j;let q=!1;return j.loadAssets().then(()=>{q||j.disposed||j.init()}),()=>{q=!0,r.current&&(r.current.dispose(),r.current=null)}},[e]),(0,t.jsx)("div",{ref:i,style:{width:"100%",height:"100%",position:"absolute",overflow:"hidden"}})};var g=e.i(59544);let f=()=>{let e=[{title:"Secure Decommissioning",desc:"End-to-end management of retired server infrastructure with 100% data security assurance and certified destruction.",icon:(0,t.jsx)(r.ShieldCheck,{size:32,className:"text-[var(--c-lime)]"})},{title:"GPU & AI Hardware Recovery",desc:"Specialized extraction of critical components from high-density AI clusters and GPU arrays for maximum mineral yield.",icon:(0,t.jsx)(s.Cpu,{size:32,className:"text-[var(--c-lime)]"})},{title:"Sustainable Asset Recovery",desc:"Maximizing the residual value of data center hardware through component reuse and advanced material recovery.",icon:(0,t.jsx)(o.Zap,{size:32,className:"text-[var(--c-lime)]"})}];return(0,t.jsxs)("div",{className:"min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500",children:[(0,t.jsxs)("section",{className:"relative min-h-[80vh] md:h-[80vh] flex items-center overflow-hidden bg-black pt-32 pb-16 md:pt-24 md:pb-0",children:[(0,t.jsx)("div",{className:"absolute inset-0 z-0",children:(0,t.jsx)(p,{effectOptions:{colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:0xffffff,brokenLines:0xffffff,leftCars:[0xc1ff00,9159498,5078031],rightCars:[0xffffff,0xcccccc,0x999999],sticks:0xc1ff00}}})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"}),(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center",children:(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-4xl mx-auto",children:[(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-6 md:mb-8",children:[(0,t.jsx)("div",{className:"w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"}),(0,t.jsx)("span",{className:"text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]",children:"Infrastructure Solutions"})]}),(0,t.jsxs)("h1",{className:"text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8",children:["Future-proofing ",(0,t.jsx)("br",{className:"hidden sm:block"}),(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"data center"})," lifecycles"]}),(0,t.jsx)("p",{className:"text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10",children:"We provide enterprise-grade recovery solutions for the world's largest data centers, ensuring secure, sustainable management."})]})})]}),(0,t.jsx)("section",{className:"py-12 md:py-24 bg-[var(--c-bg)]",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 md:px-8",children:(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12",children:e.map((e,r)=>(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1*r},whileHover:{y:-10},className:"bg-[var(--c-bg)] p-8 md:p-12 rounded-[20px] border border-[var(--c-border)] shadow-xl hover:shadow-2xl transition-all duration-500 group",children:[(0,t.jsx)("div",{className:"w-16 h-16 md:w-20 md:h-20 bg-gray-50 dark:bg-white/5 rounded-[10px] flex items-center justify-center mb-8 md:mb-10 shadow-inner group-hover:scale-110 transition-transform duration-500",children:(0,t.jsx)("div",{className:"scale-75 md:scale-100",children:e.icon})}),(0,t.jsx)("h3",{className:"text-xl md:text-3xl font-bold text-[var(--c-fg)] mb-4 md:mb-6 tracking-tight group-hover:text-[var(--c-lime)] transition-colors",children:e.title}),(0,t.jsx)("p",{className:"text-base md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed",children:e.desc})]},r))})})}),(0,t.jsx)("section",{className:"py-12 md:py-24 bg-[var(--c-fg)]/5 transition-colors duration-300",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-6 md:px-8",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",children:[(0,t.jsxs)(i.motion.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:1},children:[(0,t.jsxs)("h2",{className:"text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--c-fg)] leading-tight tracking-tight mb-8 md:mb-10",children:["Uncompromising ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"security"})," protocols"]}),(0,t.jsx)("div",{className:"space-y-6 md:space-y-8",children:[{icon:(0,t.jsx)(n.Activity,{size:24}),text:"Real-time tracking of every asset"},{icon:(0,t.jsx)(a,{size:24}),text:"Certified on-site and off-site data destruction"},{icon:(0,t.jsx)(l.Globe,{size:24}),text:"Full compliance with global data privacy regulations"}].map((e,i)=>(0,t.jsxs)("div",{className:"flex items-center gap-4 md:gap-6",children:[(0,t.jsx)("div",{className:"bg-[var(--c-lime)]/10 p-2.5 md:p-3 rounded-xl text-[var(--c-lime)] flex-shrink-0",children:(0,t.jsx)("div",{className:"scale-90 md:scale-100",children:e.icon})}),(0,t.jsx)("span",{className:"text-lg md:text-xl font-bold text-[var(--c-fg)] tracking-tight leading-tight",children:e.text})]},i))})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(i.motion.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:1},className:"rounded-[20px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10",children:(0,t.jsx)("img",{src:"/WBM/media/DataCentersAI.jpg",alt:"Data Center Hardware",className:"w-full h-auto"})}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-tr from-[var(--c-lime)]/20 to-transparent pointer-events-none rounded-[20px]"})]})]})})}),(0,t.jsx)("section",{className:"py-12 bg-[var(--c-bg)] text-center transition-colors duration-300",children:(0,t.jsx)("div",{className:"max-w-4xl mx-auto px-4",children:(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[(0,t.jsxs)("h2",{className:"text-4xl md:text-6xl font-bold text-[var(--c-fg)] tracking-tight mb-10 leading-tight",children:["Ready to decommission your ",(0,t.jsx)("span",{className:"text-[var(--c-lime)]",children:"retired hardware?"})]}),(0,t.jsx)("p",{className:"text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-12 leading-relaxed max-w-3xl mx-auto",children:"Our infrastructure team provides specialized solutions for enterprise data centers and AI clusters."}),(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(g.default,{href:"/contact",children:"Contact Infrastructure Team"})})]})})})]})};e.s(["default",0,function(){return(0,t.jsx)(f,{})}],96896)}]);