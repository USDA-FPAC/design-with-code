import{_ as i,d as r,a as m,u as _,c as l,k as p,b as u,o as C,e as A,l as f,m as E,n as N}from"./index.91e90bd4.js";import{u as S}from"./useEditor.c7d177e9.js";const I=r(()=>m(()=>import("./QuickFind.627d0b3a.js"),["assets/QuickFind.627d0b3a.js","assets/index.91e90bd4.js","assets/index.d9429370.css","assets/useGrowlControls.22687e0d.js"])),h={components:{QuickFind:I},props:{CONTAINER_ID:String,CONTAINER_CLASS:String},setup(d,{emit:a}){const t=_(),n=l(()=>{let e=t.getters["design/getItems"];return e||null}),{updateCanvas:c}=S(a),o=e=>{c({action:"onComponentUpdate",methodName:e.name,obj:e})},s=e=>{o(e)};return p(()=>{t.dispatch("design/setItems")}),{updateUI:o,handleSelectedComponent:s,itemsData:n}}},v=["id"],D={class:"dwc-editor-canvas"};function T(d,a,t,n,c,o){const s=u("quick-find");return C(),A("div",{id:t.CONTAINER_ID,class:N(t.CONTAINER_CLASS)},[f("div",D,[E(s,{onEmitSelectedComponent:n.handleSelectedComponent,DATA:n.itemsData},null,8,["onEmitSelectedComponent","DATA"])])],10,v)}const O=i(h,[["render",T]]);export{O as default};
