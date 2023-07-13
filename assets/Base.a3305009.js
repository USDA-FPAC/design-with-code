import{_ as x,d as c,a as l,u as O,r as s,c as b,w as L,k as M,b as h,o as V,e as B,l as o,m as f,h as U}from"./index.4efb4425.js";import{v}from"./v4.83dbd2d9.js";const y=c(()=>l(()=>import("./content-tabs.7f56688a.js"),["assets/content-tabs.7f56688a.js","assets/index.4efb4425.js","assets/index.d9429370.css","assets/useGrowlControls.5be3ae75.js","assets/v4.83dbd2d9.js"])),H=c(()=>l(()=>import("./EditorTemplates.9bbb709b.js"),["assets/EditorTemplates.9bbb709b.js","assets/useEditor.c7d177e9.js","assets/index.4efb4425.js","assets/index.d9429370.css"])),P=c(()=>l(()=>import("./EditorUi.f01fc786.js"),["assets/EditorUi.f01fc786.js","assets/index.4efb4425.js","assets/index.d9429370.css","assets/useEditor.c7d177e9.js"])),k=c(()=>l(()=>import("./EditorCode.c2080caf.js"),["assets/EditorCode.c2080caf.js","assets/useEditor.c7d177e9.js","assets/index.4efb4425.js","assets/index.d9429370.css","assets/v4.83dbd2d9.js"])),j={props:{EDITOR_TITLE:String},components:{contentTabs:y,editorTemplates:H,editorUi:P,editorCode:k},setup(g,{emit:n}){const d=O(),e=s(v()),a=s(v()),u=s(v()),r=s(null),_=s([{id:a.value,label:"UI",iconSize:"2",iconPath:"M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z",iconFillHex:"#494440",isSelected:!0,containerId:a.value+"-container"},{id:e.value,label:"Templates",iconSize:"2",iconPath:"M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z",iconFillHex:"#494440",isSelected:!1,containerId:e.value+"-container"}]),m=b(()=>d.getters["design/getDeleteEnabled"]),i=s(),A=b(()=>d.getters["design/getUndoEnabled"]),E=s(),I=b(()=>d.getters["design/getRedoEnabled"]),p=s();let C=()=>{};const w=t=>C=t,S=()=>{C.saveCode()},T=t=>{n("emitOnUpdate",t)},R=()=>{let t=setTimeout(()=>{n("emitOnUndo")},300);return()=>clearTimeout(t)},z=()=>{let t=setTimeout(()=>{n("emitOnRedo")},300);return()=>clearTimeout(t)},D=()=>{T({action:"onComponentUpdate",methodName:"remove",obj:{placementLocation:"remove"}})},N=t=>{};return L([m,A,I],(t,ne)=>{i.value=t[0],E.value=t[1],p.value=t[2]}),M(()=>{d.dispatch("design/setDeleteEnabled",!1),d.dispatch("design/setUndoEnabled",!1),d.dispatch("design/setRedoEnabled",!1)}),{saveCode:S,remove:D,undo:R,redo:z,handleTabSelected:N,tabsData:_,templatesContainerId:e,uiContainerId:a,codeContainerId:u,codeContainerRef:r,getChildInterface:w,updateCanvas:T,isDeleteEnabled:i,isUndoEnabled:E,isRedoEnabled:p}}},F={class:"dwc-editor"},q={class:"fds-m-b--m fds-m-t--s fds-m-r--s"},G={class:"fds-m-l--s"},J=["disabled"],K=o("svg",{class:"fsa-icon fsa-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#205493",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[o("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})],-1),Q=[K],W=["disabled"],X=o("svg",{class:"fds-icon fds-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#205493",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[o("path",{d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"})],-1),Y=[X],Z=["disabled"],$=o("svg",{class:"fds-icon fds-icon--size-2","aria-hidden":"true",focusable:"false",role:"img",fill:"#205493",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[o("path",{d:"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"})],-1),ee=[$],te={class:"fds-m-t--m"};function oe(g,n,d,e,a,u){const r=h("editor-ui"),_=h("editor-templates"),m=h("content-tabs");return V(),B("div",F,[o("div",q,[o("span",G,[o("button",{onClick:n[0]||(n[0]=i=>e.remove()),disabled:e.isDeleteEnabled?0:1,class:"fds-btn fds-btn--secondary fds-btn--small fds-m-r--xs",type:"button"},Q,8,J),o("button",{onClick:n[1]||(n[1]=i=>e.undo()),disabled:e.isUndoEnabled?0:1,class:"fds-btn fds-btn--secondary fds-btn--small fds-m-r--xs",type:"button"},Y,8,W),o("button",{onClick:n[2]||(n[2]=i=>e.redo()),disabled:e.isRedoEnabled?0:1,class:"fds-btn fds-btn--secondary fds-btn--small fds-m-r--xs",type:"button"},ee,8,Z)])]),f(m,{TABS_DATA:e.tabsData,TABS_CLASS:"fds-content-tabs--justified-equal fds-border--primary-300",TABS_CONTAINER_CLASS:"fds-m-t--none",onEmitTabSelection:e.handleTabSelected},{containers:U(()=>[o("div",te,[f(r,{CONTAINER_ID:e.uiContainerId+"-container",CONTAINER_CLASS:"",onEmitEditorAction:e.updateCanvas},null,8,["CONTAINER_ID","onEmitEditorAction"]),f(_,{CONTAINER_ID:e.templatesContainerId+"-container",CONTAINER_CLASS:"",onEmitEditorAction:e.updateCanvas},null,8,["CONTAINER_ID","onEmitEditorAction"])])]),_:1},8,["TABS_DATA","onEmitTabSelection"])])}const ie=x(j,[["render",oe]]);export{ie as default};
