import{r as g,ai as F,u as V,g as N,O as L,n as B,aj as M,ab as W,h as A,a as I}from"./runtime-core.esm-bundler.a923156c.js";var x;const O=typeof window<"u",$=e=>typeof e<"u",j=e=>typeof e=="function",D=e=>typeof e=="string",J=()=>{};O&&((x=window==null?void 0:window.navigator)!=null&&x.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function E(e){return typeof e=="function"?e():V(e)}function R(e){return e}function Q(e){return M()?(W(e),!0):!1}function U(e,t=!0){N()?L(e):t?e():B(e)}function G(e,t,n={}){const{immediate:i=!0}=n,s=g(!1);let r=null;function f(){r&&(clearTimeout(r),r=null)}function c(){s.value=!1,f()}function p(...d){f(),s.value=!0,r=setTimeout(()=>{s.value=!1,r=null,e(...d)},E(t))}return i&&(s.value=!0,O&&p()),Q(c),{isPending:F(s),start:p,stop:c}}function H(e){var t;const n=E(e);return(t=n==null?void 0:n.$el)!=null?t:n}const K=O?window:void 0;O&&window.document;const q=O?window.navigator:void 0;O&&window.location;function z(...e){let t,n,i,s;if(D(e[0])||Array.isArray(e[0])?([n,i,s]=e,t=K):[t,n,i,s]=e,!t)return J;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],f=()=>{r.forEach(l=>l()),r.length=0},c=(l,v,u)=>(l.addEventListener(v,u,s),()=>l.removeEventListener(v,u,s)),p=I(()=>H(t),l=>{f(),l&&r.push(...n.flatMap(v=>i.map(u=>c(l,v,u))))},{immediate:!0,flush:"post"}),d=()=>{p(),f()};return Q(d),d}function X(e,t=!1){const n=g(),i=()=>n.value=Boolean(e());return i(),U(i,t),n}function ae(e={}){const{navigator:t=q,read:n=!1,source:i,copiedDuring:s=1500,legacy:r=!1}=e,f=["copy","cut"],c=X(()=>t&&"clipboard"in t),p=A(()=>c.value||r),d=g(""),l=g(!1),v=G(()=>l.value=!1,s);function u(){c.value?t.clipboard.readText().then(o=>{d.value=o}):d.value=w()}if(p.value&&n)for(const o of f)z(o,u);async function _(o=E(i)){p.value&&o!=null&&(c.value?await t.clipboard.writeText(o):m(o),d.value=o,l.value=!0,v.start())}function m(o){const a=document.createElement("textarea");a.value=o??"",a.style.position="absolute",a.style.opacity="0",document.body.appendChild(a),a.select(),document.execCommand("copy"),a.remove()}function w(){var o,a,y;return(y=(a=(o=document==null?void 0:document.getSelection)==null?void 0:o.call(document))==null?void 0:a.toString())!=null?y:""}return{isSupported:p,text:d,copied:l,copy:_}}function Y(e){return JSON.parse(JSON.stringify(e))}const S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},h="__vueuse_ssr_handlers__";S[h]=S[h]||{};S[h];var C;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(C||(C={}));var Z=Object.defineProperty,T=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,te=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&P(e,n,t[n]);if(T)for(var n of T(t))ee.call(t,n)&&P(e,n,t[n]);return e};const ne={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};te({linear:R},ne);function ue(e,t,n,i={}){var s,r,f;const{clone:c=!1,passive:p=!1,eventName:d,deep:l=!1,defaultValue:v}=i,u=N(),_=n||(u==null?void 0:u.emit)||((s=u==null?void 0:u.$emit)==null?void 0:s.bind(u))||((f=(r=u==null?void 0:u.proxy)==null?void 0:r.$emit)==null?void 0:f.bind(u==null?void 0:u.proxy));let m=d;t||(t="modelValue"),m=d||m||`update:${t.toString()}`;const w=a=>c?j(c)?c(a):Y(a):a,o=()=>$(e[t])?w(e[t]):v;if(p){const a=o(),y=g(a);return I(()=>e[t],b=>y.value=w(b)),I(y,b=>{(b!==e[t]||l)&&_(m,b)},{deep:l}),y}else return A({get(){return o()},set(a){_(m,a)}})}export{ue as a,ae as u};
