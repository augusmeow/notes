import t from"./EChartsModel.5a9e6b9e.js";import{d as a}from"./Container.1027518b.js";import{q as n,x as r,L as s,G as i,F as c}from"./runtime-core.esm-bundler.a923156c.js";import"./index.75c5e12e.js";let p={title:{text:"Stacked Line"},tooltip:{trigger:"axis"},legend:{data:["<= 800km 燃油","> 800km 燃油","基建"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["2022年2月5日前","2022年2月5日起","2022年3月5日起","2022年4月5日起","2022年5月5日起","2022年6月5日起","2022年7月5日起","2022年8月5日起","2022年9月5日起","2022年11月5日起"]},yAxis:{type:"value"},series:[{name:"<= 800km 燃油 ",type:"line",stack:"Total",data:[0,10,20,50,60,80,100,80,60,60]},{name:"> 800km 燃油 ",type:"line",stack:"Total",data:[0,20,40,100,120,140,200,140,120,110]},{name:"基建",type:"line",stack:"Total",data:[50,50,50,50,50,50,50,50,50,50]}]};const l={name:"Discount",components:{EChartsModel:t},data(){return{option:p}}};function m(d,u,_,x,e,f){const o=t;return n(),r(c,null,[s(" 500-50? "),i(o,{option:e.option},null,8,["option"])],64)}const h=a(l,[["render",m]]);export{h as default};
