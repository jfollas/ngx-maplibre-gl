import{a as B,f as h}from"./chunk-PDA7DHLN.js";import"./chunk-PVVP75QG.js";import{a as v,b as C,m as F,n as M}from"./chunk-JHQINCD3.js";import{Ab as s,Db as p,Lb as m,Mb as a,Nb as l,Sb as d,bb as c,dc as f,ha as u,kc as g,lc as r,mc as y}from"./chunk-IGAQZRMC.js";import{e as b}from"./chunk-SE5JAREP.js";var _=b(v());var w=()=>[12],L=o=>[o,38.897],z=()=>({padding:20}),O=()=>({"line-color":"#BF93E4","line-width":5}),T=()=>({"line-join":"round","line-cap":"round"}),j=(()=>{let e=class e{constructor(){this.source={type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",properties:{},coordinates:[[-77.0366048812866,38.89873175227713],[-77.03364372253417,38.89876515143842],[-77.03364372253417,38.89549195896866],[-77.02982425689697,38.89549195896866],[-77.02400922775269,38.89387200688839],[-77.01519012451172,38.891416957534204],[-77.01521158218382,38.892068305429156],[-77.00813055038452,38.892051604275686],[-77.00832366943358,38.89143365883688],[-77.00818419456482,38.89082405874451],[-77.00815200805664,38.88989712255097]]}}]}}}zoomToBounds(){let n=this.source.data.features[0].geometry.coordinates;this.bounds=n.reduce((t,i)=>t.extend(i),new _.LngLatBounds(n[0],n[0]))}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["showcase-demo"]],standalone:!0,features:[g],decls:5,vars:16,consts:[[3,"zoom","center","fitBounds","fitBoundsOptions","preserveDrawingBuffer"],["mat-raised-button","","data-cy","zoom-button",1,"zoom-button",3,"click"],["id","LineString","type","line",3,"source","paint","layout"]],template:function(t,i){t&1&&(m(0,"mgl-map",0)(1,"mgl-control")(2,"button",1),d("click",function(){return i.zoomToBounds()}),f(3," Zoom to bounds "),a()(),l(4,"mgl-layer",2),a()),t&2&&(p("https://demotiles.maplibre.org/style.json"),s("zoom",r(10,w))("center",y(11,L,-77.0214))("fitBounds",i.bounds)("fitBoundsOptions",r(13,z))("preserveDrawingBuffer",!0),c(4),s("source",i.source)("paint",r(14,O))("layout",r(15,T)))},dependencies:[M,C,h,B,F],styles:[`[_nghost-%COMP%]{display:flex;flex:1}mgl-map[_ngcontent-%COMP%]{height:100%;width:100%}
/*# sourceMappingURL=examples-UPBTEGPO.css.map */`]});let o=e;return o})();export{j as ZoomtoLinestringComponent};
//# sourceMappingURL=chunk-6DRAZCVU.js.map
