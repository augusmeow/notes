import{_ as m}from"./NuxtImg.vue.17ce7dfb.js";import{h as f,s as i,r as _,o as s,b as c,u as e,c as h,C as u,F as v,B as k,O as w,E as b,G as g,A as B,a as C}from"./entry.2deb902f.js";/* empty css                        */const I=t=>(b("data-v-14cc04c9"),t=t(),g(),t),S={key:1,class:"loaded"},V=["poster"],x=["src"],$=["src","type"],E=["autoplay","src"],N=I(()=>B("button",null,null,-1)),P=[N],A=f({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(t){const r=t,a=i(()=>{if(r.src&&r.src.includes("youtube.com/watch")){const o=r.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(o==null?void 0:o[1])||""}?autoplay=1`,poster:r.poster||`https://i3.ytimg.com/vi/${(o==null?void 0:o[1])||""}/hqdefault.jpg`}}}),p=_(!1);if(!r.src&&!r.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const d=i(()=>{var o,n;return r.src||((n=(o=r.sources)==null?void 0:o[0])==null?void 0:n.src)||!1});return(o,n)=>{const y=m;return s(),c("div",{class:w(["video-player",{loaded:e(p)}])},[(e(a)?e(a).poster:t.poster)?(s(),h(y,{key:0,src:e(a)?e(a).poster:t.poster},null,8,["src"])):u("",!0),e(p)?(s(),c("div",S,[e(a)?e(a).name==="youtube"?(s(),c("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:t.autoplay,src:e(a).src},null,8,E)):u("",!0):(s(),c("video",{key:0,poster:t.poster,controls:"",autoplay:""},[e(d)?(s(),c("source",{key:0,src:e(d)},null,8,x)):u("",!0),(s(!0),c(v,null,k(t.sources,l=>(s(),c("source",{key:l.src||l,src:l.src||l,type:l.type},null,8,$))),128))],8,V))])):u("",!0),e(p)?u("",!0):(s(),c("div",{key:2,class:"play-button",onClick:n[0]||(n[0]=l=>p.value=!0)},P))],2)}}}),z=C(A,[["__scopeId","data-v-14cc04c9"]]);export{z as default};
