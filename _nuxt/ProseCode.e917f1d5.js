import i from"./ProseCodeCopyButton.73ed25b1.js";import{f as u,r as d,q as n,x as a,J as m,D as p,P as f,G as c,y as g}from"./runtime-core.esm-bundler.a923156c.js";/* empty css                      */import{d as v}from"./Container.1027518b.js";import"./DocsAsideTree.be813424.js";import"./index.75c5e12e.js";import"./cookie.1ff199a0.js";import"./index.e535d0f0.js";const y={key:0,class:"filename"},h=u({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const o=d(!1);return(s,t)=>{const r=i;return n(),a("div",{class:g([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=l=>o.value=!0),onMouseleave:t[1]||(t[1]=l=>o.value=!1)},[e.filename?(n(),a("span",y,m(e.filename),1)):p("",!0),f(s.$slots,"default",{},void 0,!0),c(r,{show:o.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),w=v(h,[["__scopeId","data-v-2eed446a"]]);export{w as default};
