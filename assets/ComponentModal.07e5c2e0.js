import{_ as oe,c as w,r as e,w as de,k as ne,o as ie,e as ce,l,t as E,x as _,y as f,n as re,q as _e}from"./index.edc1b507.js";import{u as fe}from"./Design.1fc1e70b.js";import{v as t}from"./v4.f48cd14a.js";import"./useNavigation.7dcb820e.js";const ue={props:{MODAL_ID:String,CLASSES:String,TITLE:String,NAME:String},setup(u,{emit:a}){const{hideModal:n}=fe(),s=w(()=>u.NAME),y=w(()=>u.MODAL_ID),v=e(),o=e(""),N=e(t()),m=e(""),O=e(t()),I=e(""),T=e(t()),b=e(""),j=e(t()),h=e(""),V=e(t()),x=e(""),P=e(t()),p=e(""),U=e(t()),D=e(0),B=e(t()),q=e(100),J=e(t()),L=e(10),z=e(t()),S=e(""),F=e(t()),C=e("false"),G=e(t()),M=e(""),H=e(t()),i=e("false"),K=e(t()),c=e("false"),Q=e(t()),g=e("false"),W=e(t()),k=e("<strong>1</strong> of 5 Reports Process"),X=e(t()),R=e("Continue"),Y=e(t()),A=e("Previous"),Z=e(t()),r=e(),$=e(t()),ee=e([{label:"TEST",isChecked:!1,isRequired:!1}]),se=()=>{let d={};d.label=b.value,d.classes=o.value,d.data=r.value==null?ee.value:r.value,d.prompt=m.value,d.isRequired=i.value=="true",d.help=S.value,d.type=I.value,d.iconOnly=C.value=="true",d.isSelected=c.value=="true",d.directional=g.value=="true",d.placeholder=h.value,d.val=p.value,a("emitAddComponent",{action:"onComponentUpdate",details:{name:v.value,data:d}}),n(y.value),le()},le=()=>{o.value="",m.value="",I.value="",b.value="",h.value="",x.value="",p.value="",D.value=0,q.value=100,L.value=10,S.value="",C.value="false",M.value="",i.value="false",c.value="false",g.value="false",k.value="",R.value="Continue",A.value="Previous",r.value=null},te=()=>{i.value=i.value=="true"?"true":"false"},ae=()=>{c.value=c.value=="true"?"true":"false"};return de(s,d=>{v.value=d}),ne(()=>{}),{hideModal:n,addComponent:se,classes:o,classesId:N,prompt:m,promptId:O,type:I,typeId:T,label:b,labelId:j,placeholder:h,placeholderId:V,name:x,nameId:P,val:p,valId:U,min:D,minId:B,max:q,maxId:J,step:L,stepId:z,help:S,helpId:F,iconOnly:C,iconOnlyId:G,buttonLabel:M,buttonLabelId:H,isRequired:i,isRequiredId:K,isSelected:c,isSelectedId:Q,directional:g,directionalId:W,status:k,statusId:X,primaryLabel:R,primaryLabelId:Y,secondaryLabel:A,secondaryLabelId:Z,jsonData:r,jsonDataId:$,toggleRequired:te,toggleSelected:ae}}},ve=["id"],me={class:"fds-modal__dialog"},Ie={class:"fds-modal__content"},be={class:"fds-modal__title"},he={class:"fds-field"},pe=["for"],Se=_e("Label "),Ce=l("span",{class:"fds-field__label-desc"},"Required",-1),ge=[Se,Ce],ye=["id","name"],xe={class:"fds-level"},De={class:"fds-level fds-level--inline"},qe={class:"fds-switch"},Le=["id","name"],Me=l("span",{class:"fds-switch__track"},null,-1),ke=["for"],Re={class:"fds-level fds-level--inline"},Ae={class:"fds-switch"},we=["id","name"],Ee=l("span",{class:"fds-switch__track"},null,-1),Ne=["for"],Oe={class:"fds-field"},Te=["for"],je=["id","name"],Ve={class:"fds-field"},Pe=["for"],Ue=["id","name"],Be={class:"fds-field"},Je=["for"],ze=["id","name"];function Fe(u,a,n,s,y,v){return ie(),ce("div",{tabindex:"0",id:n.MODAL_ID,class:re("fds-modal "+n.CLASSES),role:"dialog","aria-hidden":"true"},[l("div",me,[l("div",Ie,[l("button",{onClick:a[0]||(a[0]=o=>s.hideModal(n.MODAL_ID)),class:"fds-modal__close","data-behavior":"close-modal",title:"Close Modal","aria-label":"Close Modal",type:"button"}),l("h1",be,E(n.TITLE)+" - "+E(n.NAME),1),l("div",he,[l("label",{class:"fds-field__label",for:s.labelId},ge,8,pe),_(l("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>s.label=o),class:"fds-input fds-field__item",id:s.labelId,name:s.labelId,"aria-required":"true",type:"text"},null,8,ye),[[f,s.label]])]),l("div",xe,[l("span",De,[l("label",qe,[l("input",{onChange:a[2]||(a[2]=o=>s.toggleRequired()),type:"checkbox",class:"fds-switch__checkbox",id:s.isRequiredId,name:s.isRequiredId},null,40,Le),Me]),l("label",{for:s.isRequiredId},"Required",8,ke)]),l("span",Re,[l("label",Ae,[l("input",{onChange:a[3]||(a[3]=o=>s.toggleSelected()),type:"checkbox",class:"fds-switch__checkbox",id:s.isSelectedId,name:s.isSelectedId},null,40,we),Ee]),l("label",{for:s.isSelectedId},"Pre-selected",8,Ne)])]),l("div",Oe,[l("label",{class:"fds-field__label",for:s.classesId},"Classes ",8,Te),_(l("input",{"onUpdate:modelValue":a[4]||(a[4]=o=>s.classes=o),class:"fds-input fds-field__item",id:s.classesId,name:s.classesId,"aria-required":"false",type:"text"},null,8,je),[[f,s.classes]])]),l("div",Ve,[l("label",{class:"fds-field__label",for:s.jsonDataId},"JSON data ",8,Pe),_(l("textarea",{"onUpdate:modelValue":a[5]||(a[5]=o=>s.jsonData=o),class:"fds-textarea fds-field__item",placeholder:"JSON",id:s.jsonDataId,"aria-required":"false",name:s.jsonDataId},null,8,Ue),[[f,s.jsonData]])]),l("div",Be,[l("label",{class:"fds-field__label",for:s.promptId},"Prompt ",8,Je),_(l("input",{"onUpdate:modelValue":a[6]||(a[6]=o=>s.prompt=o),class:"fds-input fds-field__item",id:s.promptId,name:s.promptId,"aria-required":"true",type:"text"},null,8,ze),[[f,s.prompt]])]),l("button",{onClick:a[7]||(a[7]=o=>s.addComponent()),class:"fds-btn fds-btn--primary"},"Add Component")])])],10,ve)}const We=oe(ue,[["render",Fe]]);export{We as default};