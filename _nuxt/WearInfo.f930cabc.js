import w from"./ButtonLink.97aedfc1.js";import h from"./Card.f67fe536.js";import k from"./CardGrid.002c4fe4.js";import{WEAR_CONFIG as n}from"./wear-config.293fc95d.js";import{a as C,o as l,b as _,f as i,z as r,e,F as p,B as x,c as I,D as m,A as b}from"./entry.2deb902f.js";import"./ContentSlot.011064cb.js";/* empty css                     */const B={name:"WearInfo",data(){return{wearInfo:[...n.outerwear,...n.tops,...n.bottoms],icon:["icon-park-outline:clothes-cardigan","icon-park-outline:clothes-crew-neck","iconoir:pants","game-icons:clothes"]}},methods:{showCloth(u){switch(parseInt(u)){case 0:this.wearInfo=n.outerwear;break;case 1:this.wearInfo=n.tops;break;case 2:this.wearInfo=n.bottoms;break;case 3:this.wearInfo=[...n.outerwear,...n.tops,...n.bottoms];break}}}},g=b("br",null,null,-1);function N(u,t,z,F,s,c){const a=w,f=h,d=k;return l(),_(p,null,[i(a,{icon:s.icon[0],onClick:t[0]||(t[0]=o=>c.showCloth(0))},{default:r(()=>[e(" 外套 ")]),_:1},8,["icon"]),e(" | "),i(a,{icon:s.icon[1],onClick:t[1]||(t[1]=o=>c.showCloth(1))},{default:r(()=>[e(" 上衣 ")]),_:1},8,["icon"]),e(" | "),i(a,{icon:s.icon[2],onClick:t[2]||(t[2]=o=>c.showCloth(2))},{default:r(()=>[e(" 下衣 ")]),_:1},8,["icon"]),e(" | "),i(a,{icon:s.icon[3],onClick:t[3]||(t[3]=o=>c.showCloth(3))},{default:r(()=>[e(" 全部 ")]),_:1},8,["icon"]),i(d,null,{title:r(()=>[e("穿点什么")]),default:r(()=>[(l(!0),_(p,null,x(s.wearInfo,(o,V)=>(l(),I(f,null,{title:r(()=>[e(m(o.name),1)]),description:r(()=>[e(m(o.id+" "+o.size+" "+o.numeric_size)+" ",1),g,e(" "+m(o.color+" ¥"+o.price+o.shop),1)]),_:2},1024))),256))]),_:1})],64)}const O=C(B,[["render",N]]);export{O as default};
