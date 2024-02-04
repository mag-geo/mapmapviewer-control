(function(I,h){typeof exports=="object"&&typeof module<"u"?h(exports):typeof define=="function"&&define.amd?define(["exports"],h):(I=typeof globalThis<"u"?globalThis:I||self,h(I.mmvc={}))})(this,function(I){"use strict";var _t=Object.defineProperty;var pt=(I,h,A)=>h in I?_t(I,h,{enumerable:!0,configurable:!0,writable:!0,value:A}):I[h]=A;var W=(I,h,A)=>(pt(I,typeof h!="symbol"?h+"":h,A),A);function h(){}function A(t){return t()}function fe(){return Object.create(null)}function D(t){t.forEach(A)}function se(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ee(t){return Object.keys(t).length===0}function v(t,e){t.appendChild(e)}function y(t,e,l){t.insertBefore(e,l||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function Z(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function w(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function P(){return F(" ")}function U(){return F("")}function X(t,e,l,i){return t.addEventListener(e,l,i),()=>t.removeEventListener(e,l,i)}function T(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Pe(t){return t===""?null:+t}function $e(t){return Array.from(t.childNodes)}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}function ae(t,e){t.value=e??""}let ne;function Y(t){ne=t}const G=[],B=[];let H=[];const ie=[],qe=Promise.resolve();let le=!1;function Ve(){le||(le=!0,qe.then(ue))}function ee(t){H.push(t)}function J(t){ie.push(t)}const re=new Set;let K=0;function ue(){if(K!==0)return;const t=ne;do{try{for(;K<G.length;){const e=G[K];K++,Y(e),Se(e.$$)}}catch(e){throw G.length=0,K=0,e}for(Y(null),G.length=0,K=0;B.length;)B.pop()();for(let e=0;e<H.length;e+=1){const l=H[e];re.has(l)||(re.add(l),l())}H.length=0}while(G.length);for(;ie.length;)ie.pop()();le=!1,re.clear(),Y(t)}function Se(t){if(t.fragment!==null){t.update(),D(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ee)}}function Ae(t){const e=[],l=[];H.forEach(i=>t.indexOf(i)===-1?e.push(i):l.push(i)),l.forEach(i=>i()),H=e}const te=new Set;let z;function C(){z={r:0,c:[],p:z}}function O(){z.r||D(z.c),z=z.p}function c(t,e){t&&t.i&&(te.delete(t),t.i(e))}function d(t,e,l,i){if(t&&t.o){if(te.has(t))return;te.add(t),z.c.push(()=>{te.delete(t),i&&(l&&t.d(1),i())}),t.o(e)}else i&&i()}function R(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Q(t,e,l){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=l,l(t.$$.ctx[i]))}function $(t){t&&t.c()}function M(t,e,l){const{fragment:i,after_update:n}=t.$$;i&&i.m(e,l),ee(()=>{const f=t.$$.on_mount.map(A).filter(se);t.$$.on_destroy?t.$$.on_destroy.push(...f):D(f),t.$$.on_mount=[]}),n.forEach(ee)}function E(t,e){const l=t.$$;l.fragment!==null&&(Ae(l.after_update),D(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Be(t,e){t.$$.dirty[0]===-1&&(G.push(t),Ve(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(t,e,l,i,n,f,r,s=[-1]){const o=ne;Y(t);const a=t.$$={fragment:null,ctx:[],props:f,update:h,not_equal:n,bound:fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:fe(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};r&&r(a.root);let u=!1;if(a.ctx=l?l(t,e.props||{},(m,_,...j)=>{const p=j.length?j[0]:_;return a.ctx&&n(a.ctx[m],a.ctx[m]=p)&&(!a.skip_bound&&a.bound[m]&&a.bound[m](p),u&&Be(t,m)),_}):[],a.update(),u=!0,D(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){const m=$e(e.target);a.fragment&&a.fragment.l(m),m.forEach(b)}else a.fragment&&a.fragment.c();e.intro&&c(t.$$.fragment),M(t,e.target,e.anchor),ue()}Y(o)}class S{constructor(){W(this,"$$");W(this,"$$set")}$destroy(){E(this,1),this.$destroy=h}$on(e,l){if(!se(l))return h;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(l),()=>{const n=i.indexOf(l);n!==-1&&i.splice(n,1)}}$set(e){this.$$set&&!Ee(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Re="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Re);function ce(t){let e,l,i,n;return{c(){e=w("details"),l=w("summary"),l.textContent="details",i=P(),n=F(t[0])},m(f,r){y(f,e,r),v(e,l),v(e,i),v(e,n)},p(f,r){r&1&&x(n,f[0])},d(f){f&&b(e)}}}function De(t){let e,l=t[0]!==void 0&&ce(t);return{c(){l&&l.c(),e=U()},m(i,n){l&&l.m(i,n),y(i,e,n)},p(i,[n]){i[0]!==void 0?l?l.p(i,n):(l=ce(i),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:h,o:h,d(i){i&&b(e),l&&l.d(i)}}}function Ue(t,e,l){let{details:i}=e;return t.$$set=n=>{"details"in n&&l(0,i=n.details)},[i]}class ze extends S{constructor(e){super(),V(this,e,Ue,De,q,{details:0})}}const gt="";function Fe(t){let e,l;return{c(){e=w("span"),l=F(t[0]),T(e,"class","svelte-wrqqql")},m(i,n){y(i,e,n),v(e,l)},p(i,n){n&1&&x(l,i[0])},d(i){i&&b(e)}}}function Ge(t){let e,l,i;return{c(){e=w("a"),l=w("span"),i=F(t[0]),T(l,"class","svelte-wrqqql"),T(e,"href",t[1]),T(e,"target","_blank")},m(n,f){y(n,e,f),v(e,l),v(l,i)},p(n,f){f&1&&x(i,n[0]),f&2&&T(e,"href",n[1])},d(n){n&&b(e)}}}function He(t){let e;function l(f,r){return f[1]?Ge:Fe}let i=l(t),n=i(t);return{c(){n.c(),e=U()},m(f,r){n.m(f,r),y(f,e,r)},p(f,[r]){i===(i=l(f))&&n?n.p(f,r):(n.d(1),n=i(f),n&&(n.c(),n.m(e.parentNode,e)))},i:h,o:h,d(f){f&&b(e),n.d(f)}}}function Je(t,e,l){let{display:i}=e,{href:n=void 0}=e;return t.$$set=f=>{"display"in f&&l(0,i=f.display),"href"in f&&l(1,n=f.href)},[i,n]}class de extends S{constructor(e){super(),V(this,e,Je,He,q,{display:0,href:1})}}const ht="";function _e(t,e,l){const i=t.slice();return i[2]=e[l],i}function pe(t){let e,l,i=R(t[0]),n=[];for(let r=0;r<i.length;r+=1)n[r]=he(_e(t,i,r));const f=r=>d(n[r],1,1,()=>{n[r]=null});return{c(){e=w("div");for(let r=0;r<n.length;r+=1)n[r].c();T(e,"class","mmvc-tags svelte-13uhso8")},m(r,s){y(r,e,s);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null);l=!0},p(r,s){if(s&3){i=R(r[0]);let o;for(o=0;o<i.length;o+=1){const a=_e(r,i,o);n[o]?(n[o].p(a,s),c(n[o],1)):(n[o]=he(a),n[o].c(),c(n[o],1),n[o].m(e,null))}for(C(),o=i.length;o<n.length;o+=1)f(o);O()}},i(r){if(!l){for(let s=0;s<i.length;s+=1)c(n[s]);l=!0}},o(r){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)d(n[s]);l=!1},d(r){r&&b(e),Z(n,r)}}}function ge(t){let e,l;return e=new de({props:{display:t[1][t[2]].display,href:t[1][t[2]].url}}),{c(){$(e.$$.fragment)},m(i,n){M(e,i,n),l=!0},p(i,n){const f={};n&3&&(f.display=i[1][i[2]].display),n&3&&(f.href=i[1][i[2]].url),e.$set(f)},i(i){l||(c(e.$$.fragment,i),l=!0)},o(i){d(e.$$.fragment,i),l=!1},d(i){E(e,i)}}}function he(t){let e,l,i=t[2]in t[1]&&ge(t);return{c(){i&&i.c(),e=U()},m(n,f){i&&i.m(n,f),y(n,e,f),l=!0},p(n,f){n[2]in n[1]?i?(i.p(n,f),f&3&&c(i,1)):(i=ge(n),i.c(),c(i,1),i.m(e.parentNode,e)):i&&(C(),d(i,1,1,()=>{i=null}),O())},i(n){l||(c(i),l=!0)},o(n){d(i),l=!1},d(n){n&&b(e),i&&i.d(n)}}}function Ke(t){let e,l,i=t[0]&&pe(t);return{c(){i&&i.c(),e=U()},m(n,f){i&&i.m(n,f),y(n,e,f),l=!0},p(n,[f]){n[0]?i?(i.p(n,f),f&1&&c(i,1)):(i=pe(n),i.c(),c(i,1),i.m(e.parentNode,e)):i&&(C(),d(i,1,1,()=>{i=null}),O())},i(n){l||(c(i),l=!0)},o(n){d(i),l=!1},d(n){n&&b(e),i&&i.d(n)}}}function Qe(t,e,l){let{tags:i}=e,{tagList:n}=e;return t.$$set=f=>{"tags"in f&&l(0,i=f.tags),"tagList"in f&&l(1,n=f.tagList)},[i,n]}class We extends S{constructor(e){super(),V(this,e,Qe,Ke,q,{tags:0,tagList:1})}}function Xe(t){let e,l,i;return{c(){e=w("input"),T(e,"type","range")},m(n,f){y(n,e,f),ae(e,t[0]),l||(i=[X(e,"change",t[3]),X(e,"input",t[3])],l=!0)},p(n,[f]){f&1&&ae(e,n[0])},i:h,o:h,d(n){n&&b(e),l=!1,D(i)}}}function Ye(t,e,l){let{map:i}=e,{layerId:n}=e,{opacity:f=void 0}=e;if(f===void 0){const s=i.getPaintProperty(n,"raster-opacity");f=typeof s=="number"?s*100:100}else i.setPaintProperty(n,"raster-opacity",f/100);function r(){f=Pe(this.value),l(0,f)}return t.$$set=s=>{"map"in s&&l(1,i=s.map),"layerId"in s&&l(2,n=s.layerId),"opacity"in s&&l(0,f=s.opacity)},t.$$.update=()=>{t.$$.dirty&7&&n&&f!==void 0&&i.setPaintProperty(n,"raster-opacity",f/100)},[f,i,n,r]}class Ze extends S{constructor(e){super(),V(this,e,Ye,Xe,q,{map:1,layerId:2,opacity:0})}}const mt="";function me(t,e,l){const i=t.slice();return i[4]=e[l][0],i[5]=e[l][1],i[6]=e,i[7]=l,i}function be(t){let e,l,i,n,f,r,s,o;function a(){t[3].call(l,t[4])}return n=new de({props:{display:t[5].display}}),{c(){e=w("label"),l=w("input"),i=P(),$(n.$$.fragment),f=P(),T(l,"type","checkbox")},m(u,m){y(u,e,m),v(e,l),l.checked=t[1][t[4]],v(e,i),M(n,e,null),v(e,f),r=!0,s||(o=X(l,"change",a),s=!0)},p(u,m){t=u,m&3&&(l.checked=t[1][t[4]]);const _={};m&1&&(_.display=t[5].display),n.$set(_)},i(u){r||(c(n.$$.fragment,u),r=!0)},o(u){d(n.$$.fragment,u),r=!1},d(u){u&&b(e),E(n),s=!1,o()}}}function xe(t){let e,l,i=R(Object.entries(t[0])),n=[];for(let r=0;r<i.length;r+=1)n[r]=be(me(t,i,r));const f=r=>d(n[r],1,1,()=>{n[r]=null});return{c(){e=w("div");for(let r=0;r<n.length;r+=1)n[r].c();T(e,"class","mmvc-taglist svelte-xt5d1j")},m(r,s){y(r,e,s);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null);l=!0},p(r,[s]){if(s&3){i=R(Object.entries(r[0]));let o;for(o=0;o<i.length;o+=1){const a=me(r,i,o);n[o]?(n[o].p(a,s),c(n[o],1)):(n[o]=be(a),n[o].c(),c(n[o],1),n[o].m(e,null))}for(C(),o=i.length;o<n.length;o+=1)f(o);O()}},i(r){if(!l){for(let s=0;s<i.length;s+=1)c(n[s]);l=!0}},o(r){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)d(n[s]);l=!1},d(r){r&&b(e),Z(n,r)}}}function et(t,e,l){let{tagList:i}=e,{enabledTags:n=[]}=e,f=Object.fromEntries(Object.keys(i).map(s=>[s,!1]));function r(s){f[s]=this.checked,l(1,f)}return t.$$set=s=>{"tagList"in s&&l(0,i=s.tagList),"enabledTags"in s&&l(2,n=s.enabledTags)},t.$$.update=()=>{t.$$.dirty&2&&l(2,n=Object.entries(f).filter(([s,o])=>o).map(([s,o])=>s))},[i,f,n,r]}class tt extends S{constructor(e){super(),V(this,e,et,xe,q,{tagList:0,enabledTags:2})}}function nt(t){let e,l,i;return{c(){e=w("input"),T(e,"type","checkbox"),(t[0]===void 0||t[1]===void 0)&&ee(()=>t[6].call(e))},m(n,f){y(n,e,f),e.checked=t[0],e.indeterminate=t[1],l||(i=[X(e,"change",t[6]),X(e,"change",t[2])],l=!0)},p(n,[f]){f&1&&(e.checked=n[0]),f&2&&(e.indeterminate=n[1])},i:h,o:h,d(n){n&&b(e),l=!1,D(i)}}}function it(t,e,l){let i,n,{map:f}=e,{layerId:r}=e,{visibility:s=void 0}=e;s===void 0?s=f.getLayoutProperty(r,"visibility")||"visible":f.setLayoutProperty(r,"visibility",s);const o=()=>{l(3,s=i?"visible":"none")};function a(){i=this.checked,n=this.indeterminate,l(0,i),l(3,s),l(1,n),l(3,s)}return t.$$set=u=>{"map"in u&&l(4,f=u.map),"layerId"in u&&l(5,r=u.layerId),"visibility"in u&&l(3,s=u.visibility)},t.$$.update=()=>{t.$$.dirty&8&&l(0,i=s==="visible"),t.$$.dirty&8&&l(1,n=s==="indeterminate"),t.$$.dirty&56&&s!=="indeterminate"&&f.setLayoutProperty(r,"visibility",s)},[i,n,o,s,f,r,a]}class lt extends S{constructor(e){super(),V(this,e,it,nt,q,{map:4,layerId:5,visibility:3})}}const bt="";function ye(t,e,l){const i=t.slice();return i[9]=e[l],i[10]=e,i[11]=l,i}function ve(t){let e,l,i;function n(r){t[5](r)}let f={map:t[1],layerId:t[0].layerId};return t[0].visibility!==void 0&&(f.visibility=t[0].visibility),e=new lt({props:f}),B.push(()=>Q(e,"visibility",n)),{c(){$(e.$$.fragment)},m(r,s){M(e,r,s),i=!0},p(r,s){const o={};s&2&&(o.map=r[1]),s&1&&(o.layerId=r[0].layerId),!l&&s&1&&(l=!0,o.visibility=r[0].visibility,J(()=>l=!1)),e.$set(o)},i(r){i||(c(e.$$.fragment,r),i=!0)},o(r){d(e.$$.fragment,r),i=!1},d(r){E(e,r)}}}function ke(t){let e,l,i;function n(r){t[6](r)}let f={map:t[1],layerId:t[0].layerId};return t[0].opacity!==void 0&&(f.opacity=t[0].opacity),e=new Ze({props:f}),B.push(()=>Q(e,"opacity",n)),{c(){$(e.$$.fragment)},m(r,s){M(e,r,s),i=!0},p(r,s){const o={};s&2&&(o.map=r[1]),s&1&&(o.layerId=r[0].layerId),!l&&s&1&&(l=!0,o.opacity=r[0].opacity,J(()=>l=!1)),e.$set(o)},i(r){i||(c(e.$$.fragment,r),i=!0)},o(r){d(e.$$.fragment,r),i=!1},d(r){E(e,r)}}}function Le(t){let e,l,i,n=t[0].childrenTagList&&we(t),f=R(Object.keys(t[0].children)),r=[];for(let o=0;o<f.length;o+=1)r[o]=Ie(ye(t,f,o));const s=o=>d(r[o],1,1,()=>{r[o]=null});return{c(){n&&n.c(),e=P();for(let o=0;o<r.length;o+=1)r[o].c();l=U()},m(o,a){n&&n.m(o,a),y(o,e,a);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(o,a);y(o,l,a),i=!0},p(o,a){if(o[0].childrenTagList?n?(n.p(o,a),a&1&&c(n,1)):(n=we(o),n.c(),c(n,1),n.m(e.parentNode,e)):n&&(C(),d(n,1,1,()=>{n=null}),O()),a&11){f=R(Object.keys(o[0].children));let u;for(u=0;u<f.length;u+=1){const m=ye(o,f,u);r[u]?(r[u].p(m,a),c(r[u],1)):(r[u]=Ie(m),r[u].c(),c(r[u],1),r[u].m(l.parentNode,l))}for(C(),u=f.length;u<r.length;u+=1)s(u);O()}},i(o){if(!i){c(n);for(let a=0;a<f.length;a+=1)c(r[a]);i=!0}},o(o){d(n),r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)d(r[a]);i=!1},d(o){o&&(b(e),b(l)),n&&n.d(o),Z(r,o)}}}function we(t){let e,l,i;function n(r){t[7](r)}let f={tagList:t[0].childrenTagList};return t[3]!==void 0&&(f.enabledTags=t[3]),e=new tt({props:f}),B.push(()=>Q(e,"enabledTags",n)),{c(){$(e.$$.fragment)},m(r,s){M(e,r,s),i=!0},p(r,s){const o={};s&1&&(o.tagList=r[0].childrenTagList),!l&&s&8&&(l=!0,o.enabledTags=r[3],J(()=>l=!1)),e.$set(o)},i(r){i||(c(e.$$.fragment,r),i=!0)},o(r){d(e.$$.fragment,r),i=!1},d(r){E(e,r)}}}function Te(t){let e,l,i;function n(r){t[8](r,t[9])}let f={map:t[1],tagList:t[0].childrenTagList};return t[0].children[t[9]]!==void 0&&(f.option=t[0].children[t[9]]),e=new je({props:f}),B.push(()=>Q(e,"option",n)),{c(){$(e.$$.fragment)},m(r,s){M(e,r,s),i=!0},p(r,s){t=r;const o={};s&2&&(o.map=t[1]),s&1&&(o.tagList=t[0].childrenTagList),!l&&s&1&&(l=!0,o.option=t[0].children[t[9]],J(()=>l=!1)),e.$set(o)},i(r){i||(c(e.$$.fragment,r),i=!0)},o(r){d(e.$$.fragment,r),i=!1},d(r){E(e,r)}}}function Ie(t){let e=t[3].every(n),l,i;function n(...r){return t[4](t[9],...r)}let f=e&&Te(t);return{c(){f&&f.c(),l=U()},m(r,s){f&&f.m(r,s),y(r,l,s),i=!0},p(r,s){t=r,s&9&&(e=t[3].every(n)),e?f?(f.p(t,s),s&9&&c(f,1)):(f=Te(t),f.c(),c(f,1),f.m(l.parentNode,l)):f&&(C(),d(f,1,1,()=>{f=null}),O())},i(r){i||(c(f),i=!0)},o(r){d(f),i=!1},d(r){r&&b(l),f&&f.d(r)}}}function rt(t){let e,l,i,n=t[0].display+"",f,r,s,o,a,u,m,_,j,p=t[0].type==="layer"&&ve(t);o=new ze({props:{details:t[0].details}}),u=new We({props:{tags:t[0].tags,tagList:t[2]}});let k=t[0].type==="layer"&&t[0].opacityRange&&ke(t),L=t[0].type==="group"&&Le(t);return{c(){e=w("div"),l=w("label"),i=w("h3"),f=F(n),r=P(),p&&p.c(),s=P(),$(o.$$.fragment),a=P(),$(u.$$.fragment),m=P(),k&&k.c(),_=P(),L&&L.c(),T(l,"class","svelte-23mer1"),T(e,"class","mmvc-node svelte-23mer1")},m(g,N){y(g,e,N),v(e,l),v(l,i),v(i,f),v(l,r),p&&p.m(l,null),v(e,s),M(o,e,null),v(e,a),M(u,e,null),v(e,m),k&&k.m(e,null),v(e,_),L&&L.m(e,null),j=!0},p(g,[N]){(!j||N&1)&&n!==(n=g[0].display+"")&&x(f,n),g[0].type==="layer"?p?(p.p(g,N),N&1&&c(p,1)):(p=ve(g),p.c(),c(p,1),p.m(l,null)):p&&(C(),d(p,1,1,()=>{p=null}),O());const Me={};N&1&&(Me.details=g[0].details),o.$set(Me);const oe={};N&1&&(oe.tags=g[0].tags),N&4&&(oe.tagList=g[2]),u.$set(oe),g[0].type==="layer"&&g[0].opacityRange?k?(k.p(g,N),N&1&&c(k,1)):(k=ke(g),k.c(),c(k,1),k.m(e,_)):k&&(C(),d(k,1,1,()=>{k=null}),O()),g[0].type==="group"?L?(L.p(g,N),N&1&&c(L,1)):(L=Le(g),L.c(),c(L,1),L.m(e,null)):L&&(C(),d(L,1,1,()=>{L=null}),O())},i(g){j||(c(p),c(o.$$.fragment,g),c(u.$$.fragment,g),c(k),c(L),j=!0)},o(g){d(p),d(o.$$.fragment,g),d(u.$$.fragment,g),d(k),d(L),j=!1},d(g){g&&b(e),p&&p.d(),E(o),E(u),k&&k.d(),L&&L.d()}}}function ot(t,e,l){let{map:i}=e,{option:n}=e,{tagList:f}=e,r=[];const s=(_,j)=>{var p;return n.type==="group"&&(n.children[_].tags===void 0||((p=n.children[_].tags)==null?void 0:p.includes(j)))};function o(_){t.$$.not_equal(n.visibility,_)&&(n.visibility=_,l(0,n))}function a(_){t.$$.not_equal(n.opacity,_)&&(n.opacity=_,l(0,n))}function u(_){r=_,l(3,r)}function m(_,j){t.$$.not_equal(n.children[j],_)&&(n.children[j]=_,l(0,n))}return t.$$set=_=>{"map"in _&&l(1,i=_.map),"option"in _&&l(0,n=_.option),"tagList"in _&&l(2,f=_.tagList)},[n,i,f,r,s,o,a,u,m]}class je extends S{constructor(e){super(),V(this,e,ot,rt,q,{map:1,option:0,tagList:2})}}function Ne(t,e,l){const i=t.slice();return i[4]=e[l],i[5]=e,i[6]=l,i}function Ce(t){let e,l,i,n,f;function r(o){t[3](o,t[4])}let s={map:t[1],tagList:t[2]};return t[0][t[4]]!==void 0&&(s.option=t[0][t[4]]),l=new je({props:s}),B.push(()=>Q(l,"option",r)),{c(){e=w("div"),$(l.$$.fragment),n=P(),T(e,"class","mmvc")},m(o,a){y(o,e,a),M(l,e,null),v(e,n),f=!0},p(o,a){t=o;const u={};a&2&&(u.map=t[1]),a&4&&(u.tagList=t[2]),!i&&a&1&&(i=!0,u.option=t[0][t[4]],J(()=>i=!1)),l.$set(u)},i(o){f||(c(l.$$.fragment,o),f=!0)},o(o){d(l.$$.fragment,o),f=!1},d(o){o&&b(e),E(l)}}}function ft(t){let e,l,i=R(Object.keys(t[0])),n=[];for(let r=0;r<i.length;r+=1)n[r]=Ce(Ne(t,i,r));const f=r=>d(n[r],1,1,()=>{n[r]=null});return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=U()},m(r,s){for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(r,s);y(r,e,s),l=!0},p(r,[s]){if(s&7){i=R(Object.keys(r[0]));let o;for(o=0;o<i.length;o+=1){const a=Ne(r,i,o);n[o]?(n[o].p(a,s),c(n[o],1)):(n[o]=Ce(a),n[o].c(),c(n[o],1),n[o].m(e.parentNode,e))}for(C(),o=i.length;o<n.length;o+=1)f(o);O()}},i(r){if(!l){for(let s=0;s<i.length;s+=1)c(n[s]);l=!0}},o(r){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)d(n[s]);l=!1},d(r){r&&b(e),Z(n,r)}}}function st(t,e,l){let{map:i}=e,{options:n}=e,{tagList:f={}}=e;function r(s,o){t.$$.not_equal(n[o],s)&&(n[o]=s,l(0,n))}return t.$$set=s=>{"map"in s&&l(1,i=s.map),"options"in s&&l(0,n=s.options),"tagList"in s&&l(2,f=s.tagList)},[n,i,f,r]}class at extends S{constructor(e){super(),V(this,e,st,ft,q,{map:1,options:0,tagList:2})}}const yt="";function ut(t){let e,l,i,n;function f(s){t[2](s)}let r={map:t[1]};return t[0]!==void 0&&(r.options=t[0]),l=new at({props:r}),B.push(()=>Q(l,"options",f)),{c(){e=w("div"),$(l.$$.fragment),T(e,"class","maplibregl-ctrl maplibregl-ctrl-group svelte-19buiiy"),T(e,"id","mapmapviewer-control")},m(s,o){y(s,e,o),M(l,e,null),n=!0},p(s,[o]){const a={};o&2&&(a.map=s[1]),!i&&o&1&&(i=!0,a.options=s[0],J(()=>i=!1)),l.$set(a)},i(s){n||(c(l.$$.fragment,s),n=!0)},o(s){d(l.$$.fragment,s),n=!1},d(s){s&&b(e),E(l)}}}function ct(t,e,l){let{map:i}=e,{options:n}=e;function f(r){n=r,l(0,n)}return t.$$set=r=>{"map"in r&&l(1,i=r.map),"options"in r&&l(0,n=r.options)},[n,i,f]}let Oe=class extends S{constructor(e){super(),V(this,e,ct,ut,q,{map:1,options:0})}};class dt{constructor(e){W(this,"options");W(this,"container");W(this,"map");this.options=e,this.map=null}onAdd(e){return this.container=document.createElement("div"),this.map=e,new Oe({target:this.container,props:{map:this.map,options:this.options}}),this.container}onRemove(){var e;(e=this.container.parentNode)==null||e.removeChild(this.container),this.map=null}}I.MapMapViewerControl=dt,I.MapMapViewerControlComponent=Oe,Object.defineProperty(I,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=mapmapviewer-control.umd.cjs.map