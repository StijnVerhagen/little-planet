var e=Object.assign;import{b as t,w as o,G as s,s as r,V as a,a as n,I as i,M as l,c as d,d as h,O as c,C as u,S as p,B as m,e as f,T as y,E as C,r as g,R as b,P as w,f as k,g as x,o as z,h as B,i as S,j as v,F as P,k as M,m as F,u as R,t as T,l as N,n as I}from"./vendor.1d8dcb7d.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const s=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const n=new URL(e,s);if(self[t].moduleMap[n])return o(self[t].moduleMap[n]);const i=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){a(new Error(`Failed to import: ${e}`)),r(l)},onload(){o(self[t].moduleMap[n]),r(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/little-planet/assets/");var j={name:"Object3D",inject:["three","scene","rendererComponent"],props:{position:{type:Object,default:{x:0,y:0,z:0}},rotation:{type:Object,default:{x:0,y:0,z:0}},scale:{type:Object,default:{x:1,y:1,z:1}},lookAt:{type:Object,default:null},duration:{type:Number,default:750},delay:{type:Number,default:0}},methods:{initObject3D(e){this.o3d=e,t(this,"position",this.o3d),t(this,"rotation",this.o3d),t(this,"scale",this.o3d),this.lookAt&&this.o3d.lookAt(this.lookAt.x,this.lookAt.y,this.lookAt.z),o((()=>this.lookAt),(e=>{this.o3d.lookAt(e.x,e.y,e.z)}),{deep:!0});let s=this.$parent;for(;s;){if(s.add){s.add(this.o3d),this._parent=s;break}s=s.$parent}this._parent||console.error("Missing parent (Scene, Group...)")},removeFromParent(){this._parent&&this._parent.remove(this.o3d)},add(e){this.o3d.add(e)},remove(e){this.o3d.remove(e)}},render(){return this.$slots.default?this.$slots.default():[]}},O={name:"PlanetGroup",extends:j,created(){this.group=new s,this.initObject3D(this.group)}};const{randFloat:G,randFloatSpread:$}=f,{random:L,PI:A}=Math,D=new r;function W(e,t){const o=(new n).fromBufferGeometry(e);o.mergeVertices();let s=o.vertices[0],r=o.vertices[o.vertices.length-1];s=new a(s.x,s.y,s.z),r=new a(r.x,r.y,r.z);const i=s.clone().sub(r).normalize().multiplyScalar(.5*t);return s.add(i)}function _(e,t){const o=(new n).fromBufferGeometry(e);let s;o.mergeVertices();for(let r=0;r<o.vertices.length;r++)s=o.vertices[r],s.x+=$(2*t),s.y+=$(2*t),s.z+=$(2*t);return o.computeFlatVertexNormals(),o.toBufferGeometry()}const V={radius:{type:Number,default:100},detail:{type:Number,default:15},groundColor:{type:String,default:"#417B2B"},waterColor:{type:String,default:"#2080D0"},noiseConf:{type:Object,default:()=>({noiseF:.015,noiseD:15,noiseWaterTreshold:.4,noiseWaterLevel:.2})}};var E={name:"Globe",extends:j,props:V,created(){const{globe:e,vNoise:t,dispV:o}=function(e,t,o,s,r){const{noiseF:c,noiseD:u,noiseWaterTreshold:p,noiseWaterLevel:m}=r,f=.001*Date.now(),y=[],C=(e,t,o)=>{const s=new a(e.x,e.y,e.z).multiplyScalar(t).addScalar(f);let r=(D.noise3D(s.x,s.y,s.z)+1)/2;return r=r>p?r:m,Number.isInteger(o)&&(y[o]=r),r},g=(e,t)=>{const o=new a(e.x,e.y,e.z);o.add(o.clone().normalize().multiplyScalar(C(o,c,t)*u)),e.x=o.x,e.y=o.y,e.z=o.z},b=(new n).fromBufferGeometry(new i(e,t));b.mergeVertices();for(let a=0;a<b.vertices.length;a++)g(b.vertices[a],a);b.computeFlatVertexNormals();for(let a=0;a<b.faces.length;a++){const e=b.faces[a];e.color.set(o),y[e.a]===m&&y[e.b]===m&&y[e.c]===m&&e.color.set(s)}const w=new l({shininess:30,flatShading:!0,vertexColors:d}),k=new h(b.toBufferGeometry(),w);return k.castShadow=!0,k.receiveShadow=!0,{globe:k,vNoise:C,dispV:g}}(this.radius,this.detail,this.groundColor,this.waterColor,this.noiseConf);this.globe=e,this.vNoise=t,this.dispV=o,this.initObject3D(this.globe)},mounted(){},unmounted(){}},U={name:"Tree",extends:j,props:{tSize:Number,bSize:Number,tColor:[Number,String],bColor:[Number,String]},created(){this.tree=function(e,t,o,s){const r=.1*e,a=e/2,n=.7*r,i=new l({color:o,flatShading:!0,shininess:30}),d=new l({color:s,flatShading:!0,shininess:0,transparent:!0,opacity:.9}),f=new c;let y=new u(.7*r,r,e,5,3,!0);y.translate(0,e/2,0),y.rotateX(-A/2),y=_(y,.2*r);let C=new p(t,4,4);if(C.translate(0,e+.7*t,0),C.rotateX(-A/2),C=_(C,.2*t),L()>.5){let o=new u(.5*n,n,a,4,2,!0);o.translate(0,a/2,0),o.rotateZ(A/3+G(0,.2)),o.rotateY($(A/2)),o.translate(0,e*G(.2,.7),0),o.rotateX(-A/2),o=_(o,.1*r),y=m.mergeBufferGeometries([y,o]);const s=t*G(.5,.8),i=W(o,s);let l=new p(s,4,4);l.translate(i.x,i.y,i.z),l=_(l,.2*s),C=m.mergeBufferGeometries([C,l])}if(L()>.5){let o=new u(.5*n,n,a,4,2,!0);o.translate(0,a/2,0),o.rotateZ(-A/3+G(0,.2)),o.rotateY($(A/2)),o.translate(0,e*G(.2,.7),0),o.rotateX(-A/2),o=_(o,.1*r),y=m.mergeBufferGeometries([y,o]);const s=t*G(.5,.8),i=W(o,s);let l=new p(s,4,4);l.translate(i.x,i.y,i.z),l=_(l,.2*s),C=m.mergeBufferGeometries([C,l])}const g=new h(y,i);g.castShadow=!0,f.add(g);const b=new h(C,d);return b.castShadow=!0,f.add(b),f.dispose=()=>{g.geometry.dispose(),g.material.dispose(),b.geometry.dispose(),b.material.dispose()},f}(this.tSize,this.bSize,this.tColor,this.bColor),this.initObject3D(this.tree)},mounted(){this.tree.scale.set(0,0,0),this.tween=new y(this.tree.scale).to({x:1,y:1,z:1},this.duration).delay(this.delay).easing(C.Elastic.Out).start()},unmounted(){this.tween&&g(this.tween),new y(this.tree.scale).to({x:0,y:0,z:0},this.duration/2).easing(C.Elastic.In).onComplete((()=>{this.removeFromParent(),this.tree.dispose()})).start()}},X={name:"Rock",extends:j,props:{size:Number,color:[Number,String]},created(){this.rock=function(e,t){const o=new l({color:t,flatShading:!0});let s=new p(e,4,3);s=_(s,.2*e);const r=new h(s,o);return r.dispose=()=>{r.geometry.dispose(),r.material.dispose()},r}(this.size,this.color),this.initObject3D(this.rock)},mounted(){this.rock.scale.set(0,0,0),this.tween=new y(this.rock.scale).to({x:1,y:1,z:1},this.duration).delay(this.delay).easing(C.Elastic.Out).start()},unmounted(){this.tween&&g(this.tween),new y(this.rock.scale).to({x:0,y:0,z:0},this.duration/2).easing(C.Elastic.In).onComplete((()=>{this.removeFromParent(),this.rock.dispose()})).start()}};const{randFloat:q}=f,Y={name:"LittlePlanet",components:{PlanetGroup:O,Globe:E,Tree:U,Rock:X},inject:["three","scene","rendererComponent"],props:e(e({},V),{maxTrees:{type:Number,default:600},maxRocks:{type:Number,default:200},treeSize:{type:Number,default:1},rockSize:{type:Number,default:1},treeTrunkColor:{type:String,default:"#764114"},treeBodyColor1:{type:String,default:"#509A36"},treeBodyColor2:{type:String,default:"#FF5A36"},treeBodyColor3:{type:String,default:"#509A36"},treeBodyColor4:{type:String,default:"#FFC236"},treeBodyColor5:{type:String,default:"#509A36"},rockColor:{type:String,default:"#808080"},duration:{type:Number,default:750},delay:{type:Number,default:0}}),setup:()=>({treesCounter:0,rocksCounter:0,raycaster:new b,mousePlane:new w(new a(0,0,1),0),mouseV3:new a}),data:()=>({trees:{},rocks:{}}),mounted(){this.groupC=this.$refs.group,this.group=this.groupC.group,this.globeC=this.$refs.globe,this.globe=this.globeC.globe,this.cscale=k.scale([this.treeBodyColor1,this.treeBodyColor2,this.treeBodyColor3,this.treeBodyColor4,this.treeBodyColor5]),this.init(),this.group.scale.set(0,0,0),this.tween=new y(this.group.scale).to({x:1,y:1,z:1},this.duration).delay(this.delay).easing(C.Elastic.Out).start()},unmounted(){this.tween&&g(this.tween),new y(this.group.scale).to({x:0,y:0,z:0},this.duration/2).easing(C.Elastic.In).onComplete((()=>{this.globeC.removeFromParent(),this.globe.geometry.dispose(),this.globe.material.dispose(),this.groupC.removeFromParent()})).start()},methods:{init(){this.deleteTrees(),this.deleteRocks();const{vNoise:e,dispV:t}=this.globeC,{noiseF:o,noiseWaterLevel:s}=this.noiseConf,r=function(e,t,o){e=e||1,t=t||1;let s=1;(o=o||!0)&&(s=Math.random()*e);const r=[],a=2/e,n=Math.PI*(3-Math.sqrt(5));for(let i=0;i<e;i++){let o=i*a-1+a/2;const l=Math.sqrt(1-Math.pow(o,2)),d=(i+s)%e*n;let h=Math.cos(d)*l,c=Math.sin(d)*l;h*=t,o*=t,c*=t,r.push({x:h,y:o,z:c})}return r}(this.maxTrees+this.maxRocks,this.radius);for(let a=0;a<r.length;a++){const n=r[a];e(n,o)!==s&&(t(n),this.addSomething({position:{x:n.x,y:n.y,z:n.z},duration:1e3+2e3*Math.random(),delay:2e4*Math.random()}))}},addSomething(e){const t=this.maxRocks/(this.maxTrees+this.maxRocks);Math.random()>t?this.addTree(e):this.addRock(e)},addTree(t){const o=Object.keys(this.trees);o.length>=this.maxTrees&&delete this.trees[o[0]];const s=q(5,15)*this.treeSize,r=s*q(.5,.7)*this.treeSize,a=this.globeC.vNoise(t.position,.01),n=this.cscale(a).hex();this.trees["tree-"+this.treesCounter++]=e({tSize:s,tColor:this.treeTrunkColor,bSize:r,bColor:n,lookAt:{x:0,y:0,z:0}},t)},deleteTrees(){Object.keys(this.trees).forEach((e=>delete this.trees[e]))},addRock(t){const o=Object.keys(this.rocks);o.length>=this.maxRocks&&delete this.rocks[o[0]],this.rocks["rock-"+this.rocksCounter++]=e({color:this.rockColor,size:q(2,4)*this.rockSize},t)},deleteRocks(){Object.keys(this.rocks).forEach((e=>delete this.rocks[e]))},raycast(e,t){this.raycaster.setFromCamera(e,t);const o=this.raycaster.intersectObject(this.$refs.raycastMesh.mesh);if(o.length){const{vNoise:e,dispV:t}=this.globeC,{noiseF:s,noiseWaterLevel:r}=this.noiseConf,a=o[0].point;if(e(a,s)!==r)return t(a),a}}}};Y.render=function(e,t,o,s,r,a){const n=x("Globe"),i=x("Tree"),l=x("Rock"),d=x("BasicMaterial"),h=x("Icosahedron"),c=x("PlanetGroup");return z(),B(c,{ref:"group"},{default:S((()=>[v(n,{ref:"globe",duration:2e3,delay:1e3,radius:e.radius,detail:e.detail,"noise-conf":e.noiseConf,groundColor:e.groundColor,waterColor:e.waterColor},null,8,["radius","detail","noise-conf","groundColor","waterColor"]),(z(!0),B(P,null,M(r.trees,((e,t)=>(z(),B(i,F({key:t},e),null,16)))),128)),(z(!0),B(P,null,M(r.rocks,((e,t)=>(z(),B(l,F({key:t},e),null,16)))),128)),v(h,{ref:"raycastMesh",radius:e.radius,detail:e.detail},{default:S((()=>[v(d,{transparent:"",opacity:0})])),_:1},8,["radius","detail"])])),_:1},512)};const Z={components:{LittlePlanet:Y},data:()=>({show:!0,planetProps:{radius:100,detail:15,noiseConf:{noiseF:.015,noiseD:10,noiseWaterTreshold:.4,noiseWaterLevel:.2},maxTrees:400,maxRocks:100,treeSize:1,rockSize:1,treeTrunkColor:"#764114",treeBodyColor1:"#509A36",treeBodyColor2:"#FF5A36",treeBodyColor3:"#509A36",treeBodyColor4:"#FFC236",treeBodyColor5:"#509A36",rockColor:"#808080",groundColor:"#417B2B",waterColor:"#2080D0",duration:2e3,delay:1e3}}),mounted(){this.initPane();const e=this.$refs.lightGroup.group;this.$refs.renderer.onBeforeRender((()=>{R(),e.rotation.z+=.005}))},methods:{random(){const e=this.planetProps,t=this.planetProps.noiseConf;t.noiseF=1e-4+.05*Math.random(),t.noiseD=5+45*Math.random(),t.noiseWaterTreshold=Math.random(),t.noiseWaterLevel=Math.random(),e.maxTrees=Math.round(50+450*Math.random()),e.maxRocks=Math.round(50+450*Math.random()),e.treeSize=.5+2*Math.random(),e.rockSize=.5+2*Math.random(),e.treeTrunkColor=k.random().css(),e.treeBodyColor1=k.random().css(),e.treeBodyColor2=k.random().css(),e.treeBodyColor3=k.random().css(),e.treeBodyColor4=k.random().css(),e.treeBodyColor5=k.random().css(),e.rockColor=k.random().css(),e.groundColor=k.random().css(),e.waterColor=k.random().css(),this.pane.refresh(),this.refresh()},refresh(){this.show=!1,this.$nextTick((()=>{this.show=!0}))},initPane(){const e=new T;e.addInput(this.planetProps,"maxTrees",{min:1,max:750,step:1}),e.addInput(this.planetProps,"maxRocks",{min:1,max:750,step:1}),e.addInput(this.planetProps,"treeSize",{min:.5,max:5}),e.addInput(this.planetProps,"rockSize",{min:.5,max:5}),e.addInput(this.planetProps,"radius",{min:10,max:200,step:1}),e.addInput(this.planetProps,"detail",{min:3,max:50,step:1});let t=e.addFolder({title:"Tree Colors",expanded:!1});t.addInput(this.planetProps,"treeBodyColor1",{label:"BodyColor1"}),t.addInput(this.planetProps,"treeBodyColor2",{label:"BodyColor2"}),t.addInput(this.planetProps,"treeBodyColor3",{label:"BodyColor3"}),t.addInput(this.planetProps,"treeBodyColor4",{label:"BodyColor4"}),t.addInput(this.planetProps,"treeBodyColor5",{label:"BodyColor5"}),t=e.addFolder({title:"Other Colors",expanded:!1}),t.addInput(this.planetProps,"rockColor",{label:"RockColor"}),t.addInput(this.planetProps,"groundColor",{label:"GroundColor"}),t.addInput(this.planetProps,"waterColor",{label:"WaterColor"}),t=e.addFolder({title:"Planet Config",expanded:!1}),t.addInput(this.planetProps.noiseConf,"noiseF",{label:"Noise",min:1e-4,max:.05}),t.addInput(this.planetProps.noiseConf,"noiseD",{label:"Displacement",min:0,max:50,step:1}),t.addInput(this.planetProps.noiseConf,"noiseWaterTreshold",{label:"WaterTreshold",min:0,max:1}),t.addInput(this.planetProps.noiseConf,"noiseWaterLevel",{label:"WaterLevel",min:0,max:1}),e.addButton({title:"New Planet"}).on("click",this.refresh),e.addButton({title:"Random Planet"}).on("click",this.random),e.addButton({title:"Remove Trees"}).on("click",(()=>{this.$refs.planet.deleteTrees()})),e.addButton({title:"Remove Rocks"}).on("click",(()=>{this.$refs.planet.deleteRocks()})),this.pane=e},onMouseMove(){if(!this.$refs.planet)return;const{mouse:e,camera:t}=this.$refs.renderer.three,o=this.$refs.planet.raycast(e,t);if(o){if(this.oldP&&this.oldP.distanceTo(o)<10)return;this.oldP=o.clone(),this.$refs.planet.addSomething({position:{x:o.x,y:o.y,z:o.z},duration:750+500*Math.random()})}}}};Z.render=function(e,t,o,s,r,a){const n=x("Camera"),i=x("AmbientLight"),l=x("DirectionalLight"),d=x("Group"),h=x("LittlePlanet"),c=x("Scene"),u=x("Renderer");return z(),B("div",null,[v(u,{ref:"renderer",antialias:"",alpha:"",shadow:"","mouse-move":"",resize:"window","orbit-ctrl":{enableDamping:!0},onMousemove:a.onMouseMove},{default:S((()=>[v(n,{position:{z:400}}),v(c,null,{default:S((()=>[v(i,{color:"#808080"}),v(d,{ref:"lightGroup"},{default:S((()=>[v(l,{ref:"light",intensity:1,position:{x:0,y:300,z:0},"cast-shadow":"","shadow-camera":{top:120,bottom:-120,left:-120,right:120}},null,512)])),_:1},512),r.show?(z(),B(h,F({key:0,ref:"planet"},r.planetProps),null,16)):N("",!0)])),_:1})])),_:1},8,["onMousemove"])])},I(Z).mount("#app");