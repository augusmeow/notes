import{u as m}from"./index.75c5e12e.js";import{u as c}from"./asyncData.72567255.js";import{u,h as s,f as l,r as i,j as t,aa as d}from"./runtime-core.esm-bundler.a923156c.js";import f from"./Ellipsis.d48eb152.js";import _ from"./ComponentPlaygroundData.5c048a43.js";async function y(o){m();const e=u(o);{const{data:n}=await c(`nuxt-component-meta${e?`-${e}`:""}`,()=>$fetch(`/api/component-meta${e?`/${e}`:""}`));return s(()=>n.value)}}const w=l({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const e=s(()=>d(o.component)),n=i({...o.props}),r=await y(o.component);return{as:e,formProps:n,componentData:r}},render(o){const e=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const p=r.replace("component-","");n[p]=a}return n},{});return t("div",{class:"component-playground"},[t("div",{class:"component-playground-wrapper"},[t(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),t(o.as,{...o.formProps,class:"component-playground-component"},{...e})]),t(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});export{w as _};
