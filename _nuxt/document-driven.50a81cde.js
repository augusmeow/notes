import h from"./DocumentDrivenEmpty.6595738b.js";import L from"./ContentRenderer.4c2b2320.js";import C from"./DocumentDrivenNotFound.44fa5aca.js";import{af as S,h as m,i as x,Z as k,aG as R,s as N,u as o,aH as d,aI as g,aJ as i,T as B,l as D,W as E,al as T,o as c,b as j,f as l,z as p,c as _}from"./entry.2deb902f.js";import"./ContentRendererMarkdown.838e24ea.js";import"./ButtonLink.97aedfc1.js";import"./ContentSlot.011064cb.js";/* empty css                                   */const w=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const n=await d[s.name]().then(e=>e.default||e);return()=>D(n,t.attrs,t.slots)}}),A=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const n=x("_route"),e=n===k()?R():n,a=N(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=a.value&&a.value in d,r=e.meta.layoutTransition??g;return i(B,u&&r,{default:()=>i(w,u&&{key:a.value,name:a.value,...t.attrs},t.slots).default()}).default()}}}),$={class:"document-driven-page"},O=m({__name:"document-driven",setup(s){const{page:t,layout:n}=E();return t.value,T(t),(e,a)=>{const u=h,r=L,f=C,y=A;return c(),j("div",$,[l(y,{name:o(n)||"default"},{default:p(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:p(({value:v})=>[l(u,{value:v},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{O as default};
