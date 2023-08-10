import{_ as Me,c as P,r as t,w as xe,k as Se,o as i,e as c,l as s,t as Q,i as r,x as m,y as u,n as ke}from"./index.db65e947.js";import{u as Ce}from"./Design.8c41483c.js";import{v as o}from"./v4.83dbd2d9.js";import"./useNavigation.0808a807.js";import"./useGrowlControls.bbf4ac49.js";const Pe={props:{MODAL_ID:String,CLASSES:String,TITLE:String,NAME:String,SHOW_PROPERTIES:Array},setup(b,{emit:l}){const{hideModal:f}=Ce(),e=P(()=>b.NAME),R=P(()=>b.MODAL_ID),A=P(()=>b.SHOW_PROPERTIES),a={placement:!1,type:!1,classes:!1,label:!1,prompt:!1,placeholder:!1,name:!1,disabled:!1,help:!1,required:!1,preselected:!1,json:!1},v=t(a),X=d=>{v.value=a,d.forEach(n=>{v.value.hasOwnProperty(n)&&(v.value[n]=!0)})},D=t(),I=t(""),Y=t(o()),y=t(""),Z=t(o()),w=t(""),$=t(o()),L=t(""),ee=t(o()),M=t(""),te=t(o()),q=t(""),se=t(o()),x=t(""),le=t(o()),E=t(0),oe=t(o()),O=t(100),ae=t(o()),j=t(10),de=t(o()),S=t(""),ne=t(o()),k=t("false"),ie=t(o()),z=t(""),ce=t(o()),h=t("false"),re=t(o()),p=t("false"),fe=t(o()),C=t("false"),_e=t(o()),B=t("<strong>1</strong> of 5 Reports Process"),me=t(o()),N=t("Continue"),ue=t(o()),T=t("Previous"),ve=t(o()),g=t(),he=t(o()),pe=t(),be=()=>{let d={};if(d.placementLocation=V.value,d.label=L.value,d.classes=I.value,d.prompt=y.value,d.isRequired=h.value,d.help=S.value,d.type=w.value,d.iconOnly=k.value=="true",d.isSelected=p.value=="true",d.directional=C.value=="true",d.placeholder=M.value,d.val=x.value,g.value!=null){let n=g.value;n=n.trim().replaceAll(/(\r\n|\n|\r)/gm,""),d.arr=JSON.parse(n)}else d.arr=pe.value;l("emitModalAdditions",{action:"onComponentUpdate",methodName:D.value,obj:d}),f(R.value),ge()},ge=()=>{G("replace"),I.value="",y.value="",w.value="",L.value="",M.value="",q.value="",x.value="",E.value=0,O.value=100,j.value=10,S.value="",k.value="false",z.value="",h.value="false",p.value="false",C.value="false",B.value="",N.value="Continue",T.value="Previous",g.value=null,v.value=a},Ie=()=>{h.value=h.value=="true"?"false":"true"},ye=()=>{p.value=p.value=="true"?"false":"true"},V=t("replace"),U=t(o()),H=t(o()),J=t(o()),W=t(o()),F=t(o()),_={};_.replace=U.value,_.left=H.value,_.above=J.value,_.below=W.value,_.right=F.value;const we=()=>{Object.keys(_).forEach(n=>{let Le=_[n],K=document.getElementById(Le);K.classList.remove("fds-btn-group__item--active"),K.ariaSelected="false"})},G=d=>{we();let n=document.getElementById(_[d]);n.classList.add("fds-btn-group__item--active"),n.ariaSelected="true",V.value=d};return xe([e,A],d=>{D.value=d[0],X(d[1])}),Se(()=>{}),{hideModal:f,addComponent:be,togglePlacement:G,placementReplaceId:U,placementLeftId:H,placementTopId:J,placementBottomId:W,placementRightId:F,classes:I,classesId:Y,prompt:y,promptId:Z,type:w,typeId:$,label:L,labelId:ee,placeholder:M,placeholderId:te,name:q,nameId:se,val:x,valId:le,min:E,minId:oe,max:O,maxId:ae,step:j,stepId:de,help:S,helpId:ne,iconOnly:k,iconOnlyId:ie,buttonLabel:z,buttonLabelId:ce,isRequired:h,isRequiredId:re,isSelected:p,isSelectedId:fe,directional:C,directionalId:_e,status:B,statusId:me,primaryLabel:N,primaryLabelId:ue,secondaryLabel:T,secondaryLabelId:ve,jsonData:g,jsonDataId:he,toggleRequired:Ie,toggleSelected:ye,useMe:v}}},Re=["id"],Ae={class:"fds-modal__dialog"},De={class:"fds-modal__content"},qe={class:"fds-modal__title"},Ee={key:0,class:"fds-level fds-m-t--m fds-m-b--s"},Oe=s("span",{class:"fds-m-r--s"}," Placement: ",-1),je={class:"fds-btn-group fds-btn-group--small",role:"group","aria-label":"Where to add element"},ze=["id"],Be=s("svg",{class:"fds-icon fds-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"})],-1),Ne=[Be],Te=["id"],Ve=s("svg",{class:"fds-icon fds-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})],-1),Ue=[Ve],He=["id"],Je=s("svg",{class:"fds-icon fds-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"})],-1),We=[Je],Fe=["id"],Ge=s("svg",{class:"fds-icon fds-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"})],-1),Ke=[Ge],Qe=["id"],Xe=s("svg",{class:"fds-icon fds-icon--size-1","aria-hidden":"true",focusable:"false",role:"img",fill:"#494440",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[s("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})],-1),Ye=[Xe],Ze={key:1,class:"fds-field"},$e=["for"],et=["id","name"],tt={key:2,class:"fds-field"},st=["for"],lt=["id","name"],ot={key:3,class:"fds-field"},at=["for"],dt=["id","name"],nt={class:"fds-level"},it={key:0,class:"fds-level fds-level--inline"},ct={class:"fds-switch"},rt=["id","name"],ft=s("span",{class:"fds-switch__track"},null,-1),_t=["for"],mt={key:1,class:"fds-level fds-level--inline"},ut={class:"fds-switch"},vt=["id","name"],ht=s("span",{class:"fds-switch__track"},null,-1),pt=["for"],bt={key:4,class:"fds-field"},gt=["for"],It=["id","name"],yt={key:5,class:"fds-field"},wt=["for"],Lt=["id","name"],Mt={key:6,class:"fds-field"},xt=["for"],St=["id","name"];function kt(b,l,f,e,R,A){return i(),c("div",{tabindex:"0",id:f.MODAL_ID,class:ke("fds-modal "+f.CLASSES),role:"dialog","aria-hidden":"true"},[s("div",Ae,[s("div",De,[s("button",{onClick:l[0]||(l[0]=a=>e.hideModal(f.MODAL_ID)),class:"fds-modal__close","data-behavior":"close-modal",title:"Close Modal","aria-label":"Close Modal",type:"button"}),s("h1",qe,Q(f.TITLE)+" - "+Q(f.NAME),1),e.useMe.placement?(i(),c("div",Ee,[Oe,s("span",je,[s("button",{id:e.placementReplaceId,onClick:l[1]||(l[1]=a=>e.togglePlacement("replace")),class:"fds-btn-group__item fds-btn-group__item--active","aria-selected":"true",type:"button",title:"Replace"},Ne,8,ze),s("button",{id:e.placementLeftId,onClick:l[2]||(l[2]=a=>e.togglePlacement("left")),class:"fds-btn-group__item","aria-selected":"false",type:"button",title:"Add Left"},Ue,8,Te),s("button",{id:e.placementTopId,onClick:l[3]||(l[3]=a=>e.togglePlacement("above")),class:"fds-btn-group__item","aria-selected":"false",type:"button",title:"Add Above"},We,8,He),s("button",{id:e.placementBottomId,onClick:l[4]||(l[4]=a=>e.togglePlacement("below")),class:"fds-btn-group__item","aria-selected":"false",type:"button",title:"Add below"},Ke,8,Fe),s("button",{id:e.placementRightId,onClick:l[5]||(l[5]=a=>e.togglePlacement("right")),class:"fds-btn-group__item","aria-selected":"false",type:"button",title:"Add Right"},Ye,8,Qe)])])):r("",!0),e.useMe.type?(i(),c("div",Ze,[s("label",{class:"fds-field__label",for:e.typeId},"Type ",8,$e),m(s("input",{"onUpdate:modelValue":l[6]||(l[6]=a=>e.type=a),class:"fds-input fds-field__item",id:e.typeId,name:e.typeId,"aria-required":"true",type:"text"},null,8,et),[[u,e.type]])])):r("",!0),e.useMe.prompt?(i(),c("div",tt,[s("label",{class:"fds-field__label",for:e.promptId},"Prompt / Placeholder ",8,st),m(s("input",{"onUpdate:modelValue":l[7]||(l[7]=a=>e.prompt=a),class:"fds-input fds-field__item",id:e.promptId,name:e.promptId,"aria-required":"true",type:"text"},null,8,lt),[[u,e.prompt]])])):r("",!0),e.useMe.label?(i(),c("div",ot,[s("label",{class:"fds-field__label",for:e.labelId},"Label ",8,at),m(s("input",{"onUpdate:modelValue":l[8]||(l[8]=a=>e.label=a),class:"fds-input fds-field__item",id:e.labelId,name:e.labelId,"aria-required":"true",type:"text"},null,8,dt),[[u,e.label]])])):r("",!0),s("div",nt,[e.useMe.required?(i(),c("span",it,[s("label",ct,[s("input",{onChange:l[9]||(l[9]=a=>e.toggleRequired()),type:"checkbox",class:"fds-switch__checkbox",id:e.isRequiredId,name:e.isRequiredId},null,40,rt),ft]),s("label",{for:e.isRequiredId},"Required",8,_t)])):r("",!0),e.useMe.preselected?(i(),c("span",mt,[s("label",ut,[s("input",{onChange:l[10]||(l[10]=a=>e.toggleSelected()),type:"checkbox",class:"fds-switch__checkbox",id:e.isSelectedId,name:e.isSelectedId},null,40,vt),ht]),s("label",{for:e.isSelectedId},"Pre-selected",8,pt)])):r("",!0)]),e.useMe.classes?(i(),c("div",bt,[s("label",{class:"fds-field__label",for:e.classesId},"Classes ",8,gt),m(s("input",{"onUpdate:modelValue":l[11]||(l[11]=a=>e.classes=a),class:"fds-input fds-field__item",id:e.classesId,name:e.classesId,"aria-required":"false",type:"text"},null,8,It),[[u,e.classes]])])):r("",!0),e.useMe.json?(i(),c("div",yt,[s("label",{class:"fds-field__label",for:e.jsonDataId},"JSON data ",8,wt),m(s("textarea",{"onUpdate:modelValue":l[12]||(l[12]=a=>e.jsonData=a),class:"fds-textarea fds-field__item",placeholder:"JSON",id:e.jsonDataId,"aria-required":"false",name:e.jsonDataId},null,8,Lt),[[u,e.jsonData]])])):r("",!0),e.useMe.help?(i(),c("div",Mt,[s("label",{class:"fds-field__label",for:e.helpId},"Help Text ",8,xt),m(s("input",{"onUpdate:modelValue":l[13]||(l[13]=a=>e.help=a),class:"fds-input fds-field__item",id:e.helpId,name:e.helpId,"aria-required":"true",type:"text"},null,8,St),[[u,e.help]])])):r("",!0),s("button",{onClick:l[14]||(l[14]=a=>e.addComponent()),class:"fds-btn fds-btn--primary"},"Add Component")])])],10,Re)}const qt=Me(Pe,[["render",kt]]);export{qt as default};