import{_ as x,c as b,r as k,w as F,k as C,o as q,e as A,l as u}from"./index.8e0bf847.js";import{v}from"./v4.83dbd2d9.js";function O(){let c={},l={},r;const n=(e,t,s)=>{window.QFCallback=s,c=e,l=document.getElementById(t),h()},h=()=>{r=m(c.list),r.sort((e,t)=>e.name-t.name),a(_())},a=e=>{let t="";e.forEach(s=>{let i=s.keywords,o="";for(const[d,p]of Object.entries(s))o+=`${d}:${p}|`;t+=`<div class="fds-m-b--m"><a title="${i}" onclick="event.preventDefault(); QFCallback('${o}');" href="">
        <img class="fds-shadow--raised" src="img/interface-controls/${s.img}" />
      </a></div>`}),f(t)},f=e=>{l.innerHTML=e},_=()=>r,w=e=>{let t=r,s=e.toLowerCase();return t.filter(d=>{let p=!1,g=d.name.toLowerCase(),y=d.keywords.toLowerCase();return g.indexOf(s)>-1&&(p=!0),y.indexOf(s)>-1&&(p=!0),p})},I=e=>{if(e!=""){if(e.length>2){let t=w(e);t.sort((s,i)=>s.name-i.name),t.length>0&&a(t)}}else a(_())},m=e=>e.filter((s,i)=>{let o=JSON.stringify(s);return i===e.findIndex(d=>JSON.stringify(d)===o)});return{quickFinderInit:n,searchItems:I}}const D={props:{DATA:Object},setup(c,{emit:l}){const r=b(()=>c.DATA),{quickFinderInit:n,searchItems:h}=O(),a=k(v()),f=k(v()),_=k(""),w=m=>{let e={},t=m.split("|"),s=t.length,i=1;t.forEach(o=>{i<s&&(e[o.split(":")[0]]=o.split(":")[1]),i++}),l("emitSelectedComponent",e)},I=m=>{let t=document.getElementById(a.value).value;h(t)};return F(r,m=>{}),C(()=>{n(c.DATA,f.value,w)}),{phrase:_,quickFindInputId:a,quickFindResultsId:f,searchComponents:I}}},B={class:"fds-m-t--s"},S={class:"fds-affix fds-m-b--m"},T=["for"],L=u("svg",{class:"fds-icon fds-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[u("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})],-1),E=[L],$=["id","name"],j=["id"];function H(c,l,r,n,h,a){return q(),A("div",B,[u("span",S,[u("label",{for:n.quickFindInputId,class:"fds-affix__prefix","aria-hidden":"true"},E,8,T),u("input",{onInput:l[0]||(l[0]=f=>n.searchComponents()),id:n.quickFindInputId,class:"fds-input fds-input--small fds-affix__item",type:"text",name:n.quickFindInputId,placeholder:"Component Search",value:""},null,40,$)]),u("div",{id:n.quickFindResultsId},null,8,j)])}const Q=x(D,[["render",H]]);export{Q as default};