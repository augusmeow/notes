import{u as _}from"./index.e535d0f0.js";import{f as m,r as u,q as c,x as n,u as i,D as a,E as o,J as h,M as v,N as f}from"./runtime-core.esm-bundler.a923156c.js";/* empty css                     */import{d as y}from"./Container.1027518b.js";import"./index.75c5e12e.js";const e=t=>(v("data-v-41c7a32b"),t=t(),f(),t),C={key:0,class:"copied"},k=e(()=>o("div",{class:"scrim"},null,-1)),b=e(()=>o("div",{class:"content"}," Copied! ",-1)),x=[k,b],S=e(()=>o("div",{class:"header"},[o("div",{class:"controls"},[o("div"),o("div"),o("div")]),o("div",{class:"title"}," Bash ")],-1)),w={class:"window"},B=e(()=>o("span",{class:"sign"},"$",-1)),I={class:"content"},g={key:1,class:"prompt"},N=m({__name:"Terminal",props:{content:{type:String,required:!0}},setup(t){const d=t,{copy:p}=_(),s=u("init"),r=l=>{p(d.content).then(()=>{s.value="copied",setTimeout(()=>{s.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(l,T)=>(c(),n("div",{class:"terminal",onClick:r},[i(s)==="copied"?(c(),n("div",C,x)):a("",!0),S,o("div",w,[B,o("span",I,h(t.content),1)]),i(s)!=="copied"?(c(),n("div",g," Click to copy ")):a("",!0)]))}}),M=y(N,[["__scopeId","data-v-41c7a32b"]]);export{M as default};
