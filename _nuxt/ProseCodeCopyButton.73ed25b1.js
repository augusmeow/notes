import{T as f,_ as y}from"./DocsAsideTree.be813424.js";import"./index.75c5e12e.js";import{g as C,d as h}from"./Container.1027518b.js";import{u as B}from"./index.e535d0f0.js";import{f as w,r as x,q as t,x as k,E as l,G as v,C as b,B as i,u as r,y as I,M as S,N as T}from"./runtime-core.esm-bundler.a923156c.js";/* empty css                      */import"./cookie.1ff199a0.js";const g=o=>(S("data-v-39dc04a4"),o=o(),T(),o),z=g(()=>l("span",{class:"sr-only"},"Copy to clipboard",-1)),N={class:"icon-wrapper"},E=w({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(o){const d=o,{copy:u}=B(),{prose:a}=C(),e=x("init"),_=m=>{u(d.content).then(()=>{e.value="copied",setTimeout(()=>{e.value="init"},1e3)}).catch(s=>{console.warn("Couldn't copy to clipboard!",s)})};return(m,s)=>{const n=y;return t(),k("button",{class:I([(o.show||e.value==="copied")&&"show"]),onClick:_},[z,l("span",N,[v(f,{name:"fade"},{default:b(()=>{var c,p;return[e.value==="copied"?(t(),i(n,{key:0,name:(c=r(a).copyButton)==null?void 0:c.iconCopied,size:"18",class:"copied"},null,8,["name"])):(t(),i(n,{key:1,name:(p=r(a).copyButton)==null?void 0:p.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),j=h(E,[["__scopeId","data-v-39dc04a4"]]);export{j as default};
