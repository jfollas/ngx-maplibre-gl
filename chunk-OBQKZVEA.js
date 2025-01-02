import{a as we}from"./chunk-JSW5U3TT.js";import{a as M}from"./chunk-JTDLCKKZ.js";import{E as Ee}from"./chunk-PVVP75QG.js";import{Aa as re,Ab as k,Bb as I,Cb as ae,Dc as P,Eb as ce,Fa as ie,Gb as le,K as G,La as ne,Lb as p,Mb as g,Nb as y,Ob as C,Q as b,Qc as ve,Rc as be,T as w,Ub as de,W as Q,Yb as me,Z as J,Zb as pe,_ as Y,_b as ue,aa as X,ac as he,bb as m,bc as ge,cb as d,cc as fe,da as Z,ha as S,ia as ee,kc as j,l as K,m as E,pb as oe,qc as _e,r as F,sa as x,ta as te,vb as se,x as v,yb as T,yc as ye,zb as _}from"./chunk-IGAQZRMC.js";import{a as h,b as V,f as $}from"./chunk-SE5JAREP.js";var Le="https://stackblitz.com",Se=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],ze=["project","search","ports","settings"],Ue=["light","dark"],We=["editor","preview"],Te={clickToLoad:e=>f("ctl",e),devToolsHeight:e=>ke("devtoolsheight",e),forceEmbedLayout:e=>f("embed",e),hideDevTools:e=>f("hidedevtools",e),hideExplorer:e=>f("hideExplorer",e),hideNavigation:e=>f("hideNavigation",e),openFile:e=>A("file",e),showSidebar:e=>qe("showSidebar",e),sidebarView:e=>R("sidebarView",e,ze),startScript:e=>A("startScript",e),terminalHeight:e=>ke("terminalHeight",e),theme:e=>R("theme",e,Ue),view:e=>R("view",e,We),zenMode:e=>f("zenMode",e),organization:e=>`${A("orgName",e?.name)}&${A("orgProvider",e?.provider)}`,crossOriginIsolated:e=>f("corp",e)};function Ie(e={}){let t=Object.entries(e).map(([i,r])=>r!=null&&Te.hasOwnProperty(i)?Te[i](r):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function f(e,t){return t===!0?`${e}=1`:""}function qe(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function ke(e,t){if(typeof t=="number"&&!Number.isNaN(t)){let i=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(i))}`}return""}function R(e,t="",i=[]){return i.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function A(e,t){return(Array.isArray(t)?t:[t]).filter(r=>typeof r=="string"&&r.trim()!=="").map(r=>`${e}=${encodeURIComponent(r)}`).join("&")}function Ce(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function U(e,t){return`${je(t)}${e}${Ie(t)}`}function W(e,t){let i={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(i,t),`${je(i)}${e}${Ie(i)}`}function je(e={}){return(typeof e.origin=="string"?e.origin:Le).replace(/\/$/,"")}function q(e,t,i){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),He(t,i),Be(e,t,i),e.replaceWith(t)}function H(e){if(typeof e=="string"){let t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function B(e){return e&&e.newWindow===!1?"_self":"_blank"}function He(e,t={}){let i=Object.hasOwnProperty.call(t,"height")?`${t.height}`:"300",r=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",i),r?e.setAttribute("width",r):e.setAttribute("style","width:100%;")}function Be(e,t,i={}){let r=e.allow?.split(";")?.map(n=>n.trim())??[];i.crossOriginIsolated&&!r.includes("cross-origin-isolated")&&r.push("cross-origin-isolated"),r.length>0&&(t.allow=r.join("; "))}var N=class{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:i}){return new Promise((r,n)=>{let o=Ce();this.pending[o]={resolve:r,reject:n},this.port.postMessage({type:t,payload:V(h({},i),{__reqid:o})})})}messageListener(t){if(typeof t.data.payload?.__reqid!="string")return;let{type:i,payload:r}=t.data,{__reqid:n,__success:o,__error:s}=r;this.pending[n]&&(o?this.pending[n].resolve(this.cleanResult(r)):this.pending[n].reject(s?`${i}: ${s}`:i),delete this.pending[n])}cleanResult(t){let i=h({},t);return delete i.__reqid,delete i.__success,delete i.__error,Object.keys(i).length?i:null}},L=class{constructor(t,i){this.editor={openFile:r=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:r}}),setCurrentFile:r=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:r}}),setTheme:r=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:r}}),setView:r=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:r}}),showSidebar:(r=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:r}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(r=>r?.url??null),setUrl:(r="/")=>{if(typeof r!="string"||!r.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${r}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:r}})}},this._rdc=new N(t),Object.defineProperty(this.preview,"origin",{value:typeof i.previewOrigin=="string"?i.previewOrigin:null,writable:!1})}applyFsDiff(t){let i=r=>r!==null&&typeof r=="object";if(!i(t)||!i(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}},D=[],z=class{constructor(t){this.id=Ce(),this.element=t,this.pending=new Promise((i,r)=>{let n=({data:c,ports:l})=>{c?.action==="SDK_INIT_SUCCESS"&&c.id===this.id&&(this.vm=new L(l[0],c.payload),i(this.vm),s())},o=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function s(){window.clearInterval(u),window.removeEventListener("message",n)}window.addEventListener("message",n),o();let a=0,u=window.setInterval(()=>{if(this.vm){s();return}if(a>=20){s(),r("Timeout: Unable to establish a connection with the StackBlitz VM"),D.forEach((c,l)=>{c.id===this.id&&D.splice(l,1)});return}a++,o()},500)}),D.push(this)}},Ve=e=>{let t=e instanceof Element?"element":"id";return D.find(i=>i[t]===e)??null};function Ke(e,t){let i=document.createElement("input");return i.type="hidden",i.name=e,i.value=t,i}function Ge(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function Pe({template:e,title:t,description:i,dependencies:r,files:n,settings:o}){if(!Se.includes(e)){let c=Se.map(l=>`'${l}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${c}`)}let s=[],a=(c,l,Ne="")=>{s.push(Ke(c,typeof l=="string"?l:Ne))};a("project[title]",t),typeof i=="string"&&i.length>0&&a("project[description]",i),a("project[template]",e,"javascript"),r&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a("project[dependencies]",JSON.stringify(r))),o&&a("project[settings]",JSON.stringify(o)),Object.entries(n).forEach(([c,l])=>{a(`project[files][${Ge(c)}]`,l)});let u=document.createElement("form");return u.method="POST",u.setAttribute("style","display:none!important;"),u.append(...s),u}function Qe(e,t){let i=Pe(e);return i.action=W("/run",t),i.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${i.outerHTML}
  <script>document.getElementById('${i.id}').submit();<\/script>
</body>
</html>`}function Je(e,t){let i=Pe(e);i.action=U("/run",t),i.target=B(t),document.body.appendChild(i),i.submit(),document.body.removeChild(i)}function O(e){return e?.contentWindow?(Ve(e)??new z(e)).pending:Promise.reject("Provided element is not an iframe.")}function Ye(e,t){Je(e,t)}function Xe(e,t){let i=U(`/edit/${e}`,t),r=B(t);window.open(i,r)}function Ze(e,t){let i=U(`/github/${e}`,t),r=B(t);window.open(i,r)}function et(e,t,i){let r=H(e),n=Qe(t,i),o=document.createElement("iframe");return q(r,o,i),o.contentDocument?.write(n),O(o)}function tt(e,t,i){let r=H(e),n=document.createElement("iframe");return n.src=W(`/edit/${t}`,i),q(r,n,i),O(n)}function rt(e,t,i){let r=H(e),n=document.createElement("iframe");return n.src=W(`/github/${t}`,i),q(r,n,i),O(n)}var Me={connect:O,embedGithubProject:rt,embedProject:et,embedProjectId:tt,openGithubProject:Ze,openProject:Ye,openProjectId:Xe};function it(e){return e.replace(/(^\w|-\w)/g,nt)}function nt(e){return e.replace(/-/,"").toUpperCase()}function Ae(e,t,i){return{files:h({"src/main.ts":e[0].replace(/###/g,it(i)+"Component"),"angular.json":e[1],"src/index.html":"<showcase-demo></showcase-demo>","src/styles.css":`
html, body {
  display: flex;
  flex: 1;
  min-height: 100vh;
  margin: 0;
}
`,"src/polyfills.ts":"import 'zone.js';"},t),title:"",description:"",template:"angular-cli",dependencies:{tslib:"*","maplibre-gl":"*","@maplibre/maplibre-gl-style-spec":"*","@maplibre/ngx-maplibre-gl":"*","@angular/animations":"^18","@angular/common":"^18","@angular/compiler":"^18","@angular/core":"^18","@angular/forms":"^18","@angular/platform-browser":"^18","@angular/router":"^18","@angular/material":"^18","@angular/cdk":"^18",url:"*",querystring:"*",events:"*","@types/supercluster":"*","@types/geojson":"*"}}}var ot=["determinateSpinner"];function st(e,t){if(e&1&&(x(),p(0,"svg",11),y(1,"circle",12),g()),e&2){let i=de();_("viewBox",i._viewBox()),m(),I("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeCircumference()/2,"px")("stroke-width",i._circleStrokeWidth(),"%"),_("r",i._circleRadius())}}var at=new X("mat-progress-spinner-default-options",{providedIn:"root",factory:ct});function ct(){return{diameter:Oe}}var Oe=100,lt=10,$e=(()=>{let t=class t{get color(){return this._color||this._defaultColor}set color(r){this._color=r}constructor(r,n,o){this._elementRef=r,this._defaultColor="primary",this._value=0,this._diameter=Oe,this._noopAnimations=n==="NoopAnimations"&&!!o&&!o._forceAnimations,this.mode=r.nativeElement.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",o&&(o.color&&(this.color=this._defaultColor=o.color),o.diameter&&(this.diameter=o.diameter),o.strokeWidth&&(this.strokeWidth=o.strokeWidth))}get value(){return this.mode==="determinate"?this._value:0}set value(r){this._value=Math.max(0,Math.min(100,r||0))}get diameter(){return this._diameter}set diameter(r){this._diameter=r||0}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(r){this._strokeWidth=r||0}_circleRadius(){return(this.diameter-lt)/2}_viewBox(){let r=this._circleRadius()*2+this.strokeWidth;return`0 0 ${r} ${r}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}};t.\u0275fac=function(n){return new(n||t)(d(ie),d(ne,8),d(at))},t.\u0275cmp=S({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(n,o){if(n&1&&me(ot,5),n&2){let s;pe(s=ue())&&(o._determinateCircle=s.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(n,o){n&2&&(_("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",o.mode==="determinate"?o.value:null)("mode",o.mode),ce("mat-"+o.color),I("width",o.diameter,"px")("height",o.diameter,"px")("--mdc-circular-progress-size",o.diameter+"px")("--mdc-circular-progress-active-indicator-width",o.diameter+"px"),ae("_mat-animation-noopable",o._noopAnimations)("mdc-circular-progress--indeterminate",o.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",P],diameter:[2,"diameter","diameter",P],strokeWidth:[2,"strokeWidth","strokeWidth",P]},exportAs:["matProgressSpinner"],standalone:!0,features:[se,j],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(n,o){if(n&1&&(T(0,st,2,8,"ng-template",null,0,_e),p(2,"div",2,1),x(),p(4,"svg",3),y(5,"circle",4),g()(),te(),p(6,"div",5)(7,"div",6)(8,"div",7),C(9,8),g(),p(10,"div",9),C(11,8),g(),p(12,"div",10),C(13,8),g()()()),n&2){let s=fe(1);m(4),_("viewBox",o._viewBox()),m(),I("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeDashOffset(),"px")("stroke-width",o._circleStrokeWidth(),"%"),_("r",o._circleRadius()),m(4),k("ngTemplateOutlet",s),m(2),k("ngTemplateOutlet",s),m(2),k("ngTemplateOutlet",s)}},dependencies:[ve],styles:[".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-app-primary))}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"],encapsulation:2,changeDetection:0});let e=t;return e})();var Fe=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=ee({type:t}),t.\u0275inj=Y({imports:[be,Ee]});let e=t;return e})();var xe="app/demo/examples/",Re=(()=>{let t=class t{constructor(){this.http=Z(M),this.fileCache=new Map,this.loadFile("example.css")}getDemoFiles(r){let n=this.fileCache.get(r);return n||(n=this.http.get(`${xe}${r}.component.ts`,{responseType:"text"}).pipe(w(o=>this.loadAdditionnalFilesIfNecessary(o)),b(1)),this.fileCache.set(r,n),n)}loadAdditionnalFilesIfNecessary(r){let n=/'\.\/([\w-.]+\.\w+)'/g,o,s=[],a={"src/demo.ts":r};for(;o=n.exec(r);)s.push(this.loadFile(o[1]));return s.length?v(s).pipe(F(u=>h(h({},Object.assign({},...u)),a))):E(a)}loadFile(r){let n=this.fileCache.get(r);return n||(n=this.http.get(`${xe}${r}`,{responseType:"text"}).pipe(F(o=>({[`src/${r}`]:o})),b(1)),this.fileCache.set(r,n),n)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=J({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var pt=["container"];function ut(e,t){e&1&&(p(0,"div",1),y(1,"mat-spinner")(2,"div"),g())}var Bt=(()=>{let t=class t{constructor(r,n,o,s,a){this.zone=r,this.activatedRoute=n,this.demoFileLoaderService=o,this.http=s,this.changeDetectorRef=a,this.stackblitzContainer=oe.required("container"),this.loading=!0,this.projectbase$=v([this.http.get("assets/stackblitz/main.notts",{responseType:"text"}),this.http.get("assets/stackblitz/angular.json",{responseType:"text"})]).pipe(b(1))}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}ngAfterViewInit(){this.sub=this.activatedRoute.params.pipe(Q(()=>{this.loading=!0,this.changeDetectorRef.markForCheck()}),w(r=>v([this.projectbase$,this.demoFileLoaderService.getDemoFiles(r.demoUrl),E(r.demoUrl)])),w(([r,n,o])=>K(this.openExample(r,n,o)).pipe(G(()=>{this.loading=!1,this.changeDetectorRef.markForCheck()})))).subscribe()}openExample(r,n,o){return $(this,null,function*(){if(this.vm){yield this.vm.applyFsDiff({create:n,destroy:[]});return}let s=Ae(r,n,o);yield this.zone.runOutsideAngular(()=>$(this,null,function*(){this.vm=yield Me.embedProject(this.stackblitzContainer().nativeElement,s,{hideExplorer:!0,hideNavigation:!0,forceEmbedLayout:!0,openFile:"src/demo.ts"})}))})}};t.\u0275fac=function(n){return new(n||t)(d(re),d(we),d(Re),d(M),d(ye))},t.\u0275cmp=S({type:t,selectors:[["ng-component"]],viewQuery:function(n,o){n&1&&he(o.stackblitzContainer,pt,5),n&2&&ge()},standalone:!0,features:[j],decls:3,vars:1,consts:[["container",""],[1,"loader"]],template:function(n,o){n&1&&(y(0,"div",null,0),T(2,ut,3,0,"div",1)),n&2&&(m(2),le(o.loading?2:-1))},dependencies:[Fe,$e],styles:[`[_nghost-%COMP%]{display:flex;flex:1;position:relative}[_nghost-%COMP%]     iframe{height:100%;width:100%;border:0}.loader[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}
/*# sourceMappingURL=stackblitz-edit.component-3DMTXAYM.css.map */`],changeDetection:0});let e=t;return e})();export{Bt as StackblitzEditComponent};
//# sourceMappingURL=chunk-OBQKZVEA.js.map
