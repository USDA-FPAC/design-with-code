import{r as g,_ as H,d as E,a as C,u as B,k as L,b as T,o as G,e as O,l as w,m as N}from"./index.edc1b507.js";import{u as F}from"./useNavigation.7dcb820e.js";import{v as d,u as U}from"./v4.f48cd14a.js";function R(){const t=g(""),e=g({}),s=g({}),a=c=>{let f=document.getElementById(c);f.setAttribute("aria-expanded",!0),f.setAttribute("aria-hidden","false"),f.addEventListener("keydown",n);let h='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',u=f.querySelectorAll(h);u=Array.prototype.slice.call(u),e.value=u[0],s.value=u[u.length-1],e.value.focus();let y=document.getElementsByTagName("body")[0];y.className=y.className+" fds-modal-scroll-fix",setTimeout(function(){f.focus()},200)},l=c=>{document.getElementById(c).setAttribute("aria-hidden","true");let h=document.getElementsByTagName("body")[0];h.className=h.className.replace(" fds-modal-scroll-fix","");let u=document.querySelector("[data-modal-origin]");u&&(u.removeAttribute("data-modal-origin"),u.setAttribute("aria-expanded","false"),u.focus())},n=c=>{c.keyCode===9&&(c.shiftKey?document.activeElement===e.value&&(c.preventDefault(),s.value.focus()):document.activeElement===s.value&&(c.preventDefault(),e.value.focus())),c.keyCode===27&&closeModal()};return{setModalId:c=>{t.value=c},getModalId:()=>t.value,showModal:a,hideModal:l}}function D(t=null){const e=(l=null)=>{let n="";return l!=null||l!=""?n=`<html lang="en">
      <head>
      <meta charset="UTF-8">
      <link rel="icon" href="/fpac-design-system/favicon.ico">
      <link rel="stylesheet" href="${l.css}" />
      <link rel="stylesheet" href="/design-with-code/css/styles.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>FPAC Design System</title>
      </head>`:n=`<html lang="en">
      <head>
      <meta charset="UTF-8">
      <link rel="icon" href="/fpac-design-system/favicon.ico">
      <link rel="stylesheet" href="https://usda-fsa.github.io/fsa-style/css/fsa-style.min.css" />
      <link rel="stylesheet" href="/design-with-code/css/styles.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>FPAC Design System</title>
      </head>`,n},s=(l=null,n=null)=>{let i="";return(l!=null||l!="")&&(i=`<!-- Start Global Nav Component -->
      <nav id="global-nav" class="dwc-overlay">
        <div class="fsa-nav-global ${n=="fullscreen"?"fsa-nav-global--fullscreen":""}">
          <div class="fsa-nav-global__bd">
            <ul class="fsa-nav-global__list" aria-label="Primary Navigation">`,l.navMenu.forEach(c=>{i+=`<li class="fsa-nav-global__list-item">
                <a class="fsa-nav-global__link ${c.isActive=="true"?"fsa-nav-global__link--active":""}" href="${c.path}">
                  <span class="fsa-nav-global__text">${c.label}</span>
                </a>
              </li>`}),i+=`</ul>
          </div>
        </div>
      </nav>
      <!-- End Global Nav Component -->`),i};return{getTop:e,getHeaderApp:(l=null)=>{let n="";try{n=l.layout}catch(r){console.log(r,"getHeaderApp > no layout data passed")}let i=`<header>
    <div class="fsa-tophat ${n=="fullscreen"?"fsa-tophat--fullscreen":""}">
      <div class="fsa-tophat__bd">
        <div class="fsa-tophat__primary">
          <span class="fsa-tophat__agency">
            <a class="fsa-tophat__link" href="#" title="Link to USDA homepage">
              <img role="presentation" class="fsa-tophat__agency-logo" src="https://usda-fsa.github.io/fsa-style/img/usda-logo--white.svg" alt="">
              <abbr class="fsa-tophat__agency-abbr" title="United States Department of Agriculture">USDA</abbr>
              <span class="fsa-tophat__agency-fullname">United States Department of Agriculture</span>
            </a>
          </span>
        </div>
        <div class="fsa-tophat__secondary">
          <span class="fsa-tophat__subagency">
            Farm Production and Conservation
          </span>
        </div>
      </div>
    </div>`;return l!=null||l!=""?i+=`<div class="dwc-overlay fsa-header-app ${n=="fullscreen"?"fsa-header-app--fullscreen":""}" id="header-app">
          <div class="fsa-header-app__bd">
            <div class="fsa-header-app__primary">
              <a class="fsa-header-app__home-link" href="#">
                <span class="dwc-overlay fsa-header-app__app-name" id="header-app-program-name">
                  <!-- Your Program Abbreviation and Name -->
                  <abbr class="fsa-header-app__app-abbr">${l.programAbbr}</abbr>
                  <span class="fsa-header-app__app-full">${l.programName}</span>
                  <!-- End Program Abbreviation and Name -->
                </span>
              </a>
            </div>
            <div class="dwc-overlay fsa-header-app__secondary" id="header-app-login">
              <span class="fsa-header-app__profile">
                <span class="fsa-header-app__profile-name">
                  <button class="fsa-btn fsa-btn--plain fsa-text-size--2 fsa-link:hover--white fsa-link:hover--underline" data-behavior="open-modal" aria-controls="demo-profile-modal" aria-expanded="false" type="button">
                    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                    </svg>
                    Susan Jackson
                  </button>
                </span>
                <a href="#link-placeholder" class="fsa-header-app__profile-link">
                  <span class="fsa-level fsa-level--inline fsa-level--gutter-xs">
                    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
                    </svg>
                    <span>Log out</span>
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>

        ${s(l,n)}
      </header>`:i+=`<div class="dwc-overlay fsa-header-app" id="header-app">
            <div class="fsa-header-app__bd">
              <div class="fsa-header-app__primary">
                <a class="fsa-header-app__home-link" href="#">
                  <span class="dwc-overlay fsa-header-app__app-name" id="header-app-program-name">
                    <!-- Your Program Abbreviation and Name -->
                    <abbr class="fsa-header-app__app-abbr">CPS</abbr>
                    <span class="fsa-header-app__app-full">Code Prototype Starter</span>
                    <!-- End Program Abbreviation and Name -->
                  </span>
                </a>
              </div>
              <div class="dwc-overlay fsa-header-app__secondary" id="header-app-login">
                <span class="fsa-header-app__profile">
                  <span class="fsa-header-app__profile-name">
                    <button class="fsa-btn fsa-btn--plain fsa-text-size--2 fsa-link:hover--white fsa-link:hover--underline" data-behavior="open-modal" aria-controls="demo-profile-modal" aria-expanded="false" type="button">
                      <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                      </svg>
                      Susan Jackson
                    </button>
                  </span>
                  <a href="#link-placeholder" class="fsa-header-app__profile-link">
                    <span class="fsa-level fsa-level--inline fsa-level--gutter-xs">
                      <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path>
                      </svg>
                      <span>Log out</span>
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>

          ${s(l,_layout)}
        </header>`,i},getGlobalNav:s}}function P(t=null){let e=`
  <main id="main-content" tabindex="-1">
    <div class="fsa-section">
      <div class="fsa-section__bd">`,s=`<!-- Stepped Tabs -->
  <nav class="dwc-overlay" aria-label="Breadcrumbs" id="stepped-tabs">
    <div class="fsa-m-t--l" class="fsa-stepped-tabs">
      <div class="fsa-stepped-tabs__bd">
        <ol class="fsa-stepped-tabs__list">
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="#">
              <span class="fsa-stepped-tabs__text">Lorem</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="#" aria-current="step">
              <span class="fsa-stepped-tabs__text">Header Goes Here</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Dolor</span>
            </span>
          </li>
          <li class="fsa-stepped-tabs__item">
            <span class="fsa-stepped-tabs__label fsa-stepped-tabs__label--incomplete">
              <span class="fsa-stepped-tabs__text">Sit Amet</span>
            </span>
          </li>
        </ol>
      </div>
    </div>
  </nav>
  <!-- End Stepped Tabs -->`;const a=`<div id="page-header" class="dwc-overlay fsa-m-b--m fsa-level fsa-level--justify-between fsa-level--align-bottom">
    <div>
      <h1 class="fsa-m-t--m">Header Goes Here</h1>
    </div>
    <div class="fsa-level fsa-hide">
      <!-- USE AREA FOR PAGE ACTIONS -->
      <span>
        <a href="#" class="fsa-btn fsa-btn--flat">Settings</a>
      </span>
      <span>
        <button class="fsa-btn fsa-btn--secondary" type="button">Import Thing</button>
      </span>
      <!-- USE AREA FOR PAGE ACTIONS -->
    </div>
  </div>`;let l='<div id="main-app-area" class="dwc-overlay fsa-box fsa-text-align--center fsa-border--tertiary-300 fsa-m-t--l" style="height: 200px">Your App Here</div>',n=`<!-- Stepped Control -->
  <div class="dwc-overlay fsa-stepped-control" id="stepped-controls">
    <div class="fsa-stepped-control__bd">
      <div class="fsa-stepped-control__message fsa-stepped-control__message--fill" role="status">
        <strong>1</strong> of <strong>4</strong> | Header Goes Here
      </div>
      <div class="fsa-stepped-control__list">
        <div class="fsa-stepped-control__item fsa-stepped-control__item--pull">
          <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">Previous</span>
          </button>
        </div>
        <div class="fsa-stepped-control__shim"></div>
        <div class="fsa-stepped-control__item fsa-stepped-control__item--push">
          <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="button">
            <span class="fsa-stepped-control__btn-label">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>`,i=`
      </div>
    </div>
  </main>`,r=`<script>
  window.addEventListener('load',()=>{ window.top.postMessage('handshake', '${t}') });
  window.addEventListener('message',(_evt)=>{ console.log('message from Parent',_evt.data) });
  let clickAreas = document.querySelectorAll('.dwc-overlay');
  clickAreas.forEach( item => {
    item.addEventListener('click', (_e) => {
      _e.preventDefault();
      _e.stopPropagation();
      let el = _e.currentTarget;
      window.top.postMessage(el.id, '${t}');
    });
  });
  <\/script>`;return{mainTop:e,steppedTabs:s,headerArea:a,bodyInit:l,steppedControls:n,mainBottom:i,frameScripts:r}}function z(t){const{getTop:e,getHeaderApp:s}=D(t),{mainTop:a,mainBottom:l}=P(t);let n="";const i=`<script>
  window.addEventListener('load',()=>{ window.top.postMessage('handshake', '${t}') });
  window.addEventListener('message',(_evt)=>{ console.log('message from Parent',_evt.data) });
  let clickAreas = document.querySelectorAll('.dwc-overlay');
  clickAreas.forEach( item => {
    item.addEventListener('click', (_e) => {
      _e.preventDefault();
      _e.stopPropagation();
      let el = _e.currentTarget;
      window.top.postMessage(el.id, '${t}');
    });
  });
  <\/script>`;let r='<div id="main-app-area" class="dwc-overlay fsa-box fsa-text-align--center fsa-border--tertiary-300 fsa-m-t--l" style="height: 200px">Your App Here</div>';return{getTemplate:(f=null)=>{let h=f.css!=null?f.css:null,u=f.layout!=null?f.layout:null;return n=e({css:h}),n+=s(f,u),n+=a,n+=r,n+=l,n+=i,n}}}function V(){return{getButton:e=>`<button class="fsa-btn ${e.classes}" type="button">${e.label}</button>`}}function q(){return{getButtonGroup:e=>{let s=`<span class="fsa-btn-group ${e.classes}" role="group" aria-label="Label describing this group">`;return e.arr.forEach(a=>s+=`<button class="fsa-btn-group__item" type="button">${a.label}</button>`),s+="</span>",s}}}function j(){return{getCheckbox:e=>{let s=d(),a=d();return`<span><input class="fsa-checkbox fsa-checkbox--solo" id="${s}" type="checkbox" name="${a}" value="${a}">
      <label for="${a}"><span class="fsa-sr-only">${e.label}</span></label>
    </span>`}}}function Y(){return{getRadioGroup:e=>{let s=d(),a=d(),l=`<div class="fsa-field"><label class="fsa-field__label" id="${s}">${e.prompt}</label><ul class="fsa-form-list" aria-labelledby="${s}">`;return e.arr.forEach(n=>{l+=`<li><span><input class="fsa-radio" id="${n.id}" type="radio" name="${a}"><label for="${n.id}">${n.label}</label></span></li>`}),l+=`</ul><span class="fsa-field__help" id="${s}-help">${e.help}</span></div>`,l}}}function J(){return{getFormField:e=>{let s=d();return`<div class="fsa-field">
    <label class="fsa-field__label" for="${s}">${e.label} ${e.isRequired?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <input class="fsa-input fsa-field__item" id="${s}" name="${s}" aria-describedby="${s}-help-1" aria-required="${e.isRequired?"true":"false"}" type="${e.type}" value="">
      <span class="fsa-field__help" id="${s}-help-1">${e.help}</span>
    </div>`}}}function K(){return{getCheckboxGroup:e=>{let s=d(),a=d(),l=`<ul class="fsa-form-list" aria-label="${e.prompt}">`;return e.arr.forEach(n=>{l+=`<span>
        <input class="fsa-checkbox" id="${s}-${n.label}" type="checkbox" name="${a}" value="${n.label}" ${n.isChecked?'checked=""':""}>
        <label for="${s}-${n.label}">${n.label}</label>
      </span>`}),l+="</ul>",l}}}function Q(){return{getSearch:e=>{let s=d();return`<div class="fsa-search" role="search">
      <div class="fsa-search__bd">
        <div class="fsa-search__entry ${e.classes!=""?e.classes:"fsa-search__entry--grow"}">
          <label class="fsa-search__label ${e.label!=""?"":"fsa-search__label--sr-only"}" for="${s}">${e.label}</label>
          <input class="fsa-input fsa-search__input" id="${s}" type="search" name="search">
        </div>
        <div class="fsa-search__submit">
          <button class="fsa-btn fsa-search__btn ${e.iconOnly?"fsa-search__btn--icon":""}" type="submit">
            <span class="fsa-search__text">${e.buttonLabel}</span>
          </button>
        </div>
      </div>
    </div>`}}}function W(){return{getSelect:e=>{let s=`<select class="fsa-select ${e.classes!=""?e.classes:""}" name="${e.name}">`;return e.arr.forEach(a=>{s+=`<option value="${a.val}" ${_item.isSelected?'selected="selected':""}">${a.label}</option>`}),s+="</select>",s}}}function X(){return{getSlider:e=>{let s=d();return`<input class="fsa-slider ${e.classes}" id="${s}" name="${s}" type="range" min="${e.min}" max="${e.max}" value="${e.val}" step="${e.step}"></input>`}}}function Z(){return{getSpinbox:e=>{let s=d(),a=`<div class="fsa-spinbox ${e.classes}">`;return a+=`<div class="fsa-spinbox__number">
    <input class="fsa-input fsa-spinbox__input" id="${s}" name="${s}" type="number" value="${e.val}">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>`,a+="</div>",a}}}function ee(){return{getTextInput:e=>{let s=d();return`<input class="fsa-input ${e.classes}" type="text" name="${s}" value="${e.val}" placeholder="${e.placeholder}"></input>`}}}function se(){return{getSteppedControls:e=>{d();let s="fsa-stepped-control__item--";e.directional?s+="pull":s+="push";let a=`<div class="fsa-stepped-control ${e.classes}">
      <div class="fsa-stepped-control__bd">`;return e.status!=""&&(a+=`<div class="fsa-stepped-control__message ${e.directional?"fsa-stepped-control__message--fill":""}" role="status">${e.status}</div>`),a+='<div class="fsa-stepped-control__list">',e.directional||(a+='<div class="fsa-stepped-control__shim"></div>'),a+=`<div class="fsa-stepped-control__item ${e.status!=""?s:""}">
      <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
        <span class="fsa-stepped-control__btn-label">${e.secondaryLabel}</span>
      </button>
    </div>`,e.directional&&(a+='<div class="fsa-stepped-control__shim"></div>'),a+=`<div class="fsa-stepped-control__item">
      <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
        <span class="fsa-stepped-control__btn-label">${e.primaryLabel}</span>
      </button>
    </div>`,e.status!=""&&(a+="</div>"),a+="</div></div>",a}}}function ae(){return{getSwitch:e=>{let s=d(),a='<span class="fsa-level fsa-level--inline">';return e.labelLeft?a+=`<label for="${s}">${e.label}</label>
      <label class="fsa-switch">
        <input ${e.isChecked?"checked":""} type="checkbox" class="fsa-switch__checkbox" id="${s}" name="${s}">
        <span class="fsa-switch__track"></span>
      </label>`:a+=`<label class="fsa-switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="${s}" name="${s}">
        <span ${e.isChecked?"checked":""} class="fsa-switch__track"></span>
      </label>
      <label for="${s}">${e.label}</label>`,a+="</span>",a}}}let m={};const{getButton:te}=V();m.button=te;const{getButtonGroup:le}=q();m["button-group"]=le;const{getCheckbox:ne}=j();m.checkbox=ne;const{getRadioGroup:oe}=Y();m["radio-group"]=oe;const{getFormField:re}=J();m["form-field"]=re;const{getCheckboxGroup:ie}=K();m["checkbox-group"]=ie;const{getSearch:ce}=Q();m.search=ce;const{getSelect:pe}=W();m.select=pe;const{getSlider:de}=X();m.slider=de;const{getSpinbox:fe}=Z();m.spinbox=fe;const{getTextInput:ue}=ee();m["text-input"]=ue;const{getSteppedControls:be}=se();m["stepped-controls"]=be;const{getSwitch:me}=ae();m.switch=me;function he(){return{getComponent:(e,s)=>{let a=d();console.log("_name",e);let l=`<div id="${a}" class="dwc-overlay">`;try{l+=m[e](s)}catch(n){console.log("useComponents > getComponent Error: ",n)}return l+"</div>"}}}const{checkOnProd:ve}=U(),I=ve()?"https://usda-fpac.github.io":"http://localhost:3000",{getTop:_e,getHeaderApp:ge,getGlobalNav:ye}=D(I),{mainTop:we,steppedTabs:$e,headerArea:xe,bodyInit:M,steppedControls:Se,mainBottom:Ae,frameScripts:ke}=P(I),{getTemplate:Ee}=z(I),{getComponent:Ce}=he();function Ie(){let t="",e=[],s=0,a=!1,l="",i={programAbbr:"NPS",programName:"National Payment System",navMenu:[{label:"Home",path:"/",isActive:"true"},{label:"Solutions",path:"/solutions",isActive:"false"},{label:"Objectives",path:"/objectives",isActive:"false"},{label:"Reports",path:"/reports",isActive:"false"}],css:"https://usda-fsa.github.io/fsa-style/css/fsa-style.min.css",layout:"default"};const r={};r["header-app"]=ge,r["global-nav"]=ye,r["stepped-tabs"]=$e,r["page-header"]=xe,r["main-app-area"]=M,r["stepped-controls"]=Se;const c=o=>{window.addEventListener("message",p=>{p.data==="handshake"&&a!=!0?a=!0:f(p.data,o)})},f=(o,p=null)=>{console.log("panel selected :: ",o),l=o},h=(o,p=null)=>(s=p||e.length+1,e[s-1]={version:s,app:o},e[s-1]),u=(o=null)=>{let p=o||s-1,_=e.find(v=>v.version==p);return h(_.app,p)},y=(o=null)=>{let p=o||s+1,_=e.find(v=>v.version==p);return h(_.app,p)},$=o=>{let p=o.action,_=[],v="";try{v=o.details.name,_=o.details.data}catch(b){console.log("updateCanvas Error: ",b)}if(p=="onTemplateUpdate"&&(i.layout=v,t=Ee(i)),p=="onComponentUpdate"&&(t=x(Ce(v,_))),p=="onCodeUpdate"){let b="";_.forEach(A=>{let k=A.data;A.type=="paragraph"&&(b+=k.text),A.type=="code"&&(b+=k.text),A.type=="rawHtml"&&(b+=k.html)}),t=x(b)}return t},x=o=>(r[l]=o,t=_e({css:i.css}),t+=r["header-app"](i),t+=we,t+=r["stepped-tabs"],t+=r["page-header"],t+=r["main-app-area"],t+=r["stepped-controls"],t+=Ae,t+=ke,t);return{updateSource:(o,p,_=null)=>{if(_){let b=$({action:"onCodeUpdate",details:{name:"",data:[{id:"init",type:"rawHtml",data:{html:M}}]}});return h(b)}if(o.cmd=="updateCanvas"){let v=$(p);return h(v)}if(o.cmd=="undo")return u();if(o.cmd=="undo-version")return u(o.data);if(o.cmd=="redo")return y()},listenToFrame:c}}const Te=E(()=>C(()=>import("./BaseHeader.936ced08.js"),["assets/BaseHeader.936ced08.js","assets/disclaimer.638cc24c.js","assets/index.edc1b507.js","assets/index.a2d94def.css","assets/useNavigation.7dcb820e.js"])),Ne=E(()=>C(()=>import("./Base.47eb6d55.js"),["assets/Base.47eb6d55.js","assets/index.edc1b507.js","assets/index.a2d94def.css","assets/v4.f48cd14a.js"])),Me=E(()=>C(()=>import("./ComponentModal.07e5c2e0.js"),["assets/ComponentModal.07e5c2e0.js","assets/index.edc1b507.js","assets/index.a2d94def.css","assets/v4.f48cd14a.js","assets/useNavigation.7dcb820e.js"])),De={components:{baseHeader:Te,editor:Ne,componentModal:Me},setup(t,{emit:e}){const s=g("/design-with-code/");B();const{goto:a}=F(),{updateSource:l,listenToFrame:n}=Ie(),i=g(d()),r=g(d()),c=g(d()),{setModalId:f,showModal:h,hideModal:u}=R(),y=g(d());f(y.value);const $=g();let x=g();const S=b=>{x.value=b.app},o=()=>{S(l({cmd:"undo"},""))},p=()=>{S(l({cmd:"redo"},""))},_=b=>{$.value=b.details.name,h(y.value)},v=b=>{S(l({cmd:"updateCanvas",data:""},b))};return L(()=>{n(c.value),S(l("","",!0))}),{baseUrl:s,goto:a,sourceDoc:x,editorsId:i,canvasId:r,iFrameId:c,handleUpdateCanvas:_,undo:o,redo:p,componentModalId:y,handleAddComponent:v,componentName:$}}},Pe={id:"main-content",tabindex:"-1"},He={class:"fds-section fds-section--fullscreen"},Be={class:"fds-section__bd"},Le={class:"fds-grid fds-grid--no-gutter"},Ge={class:"fds-grid__1/1 fds-grid__10/12@l"},Oe={class:"dwc-preview fds-box fds-p--none fds-box--bg-100"},Fe=["id","srcDoc"],Ue={class:"fds-grid__1/1 fds-grid__2/12@l fds-p-t--m"};function Re(t,e,s,a,l,n){const i=T("editor"),r=T("component-modal");return G(),O("main",Pe,[w("div",He,[w("div",Be,[w("div",Le,[w("div",Ge,[w("div",Oe,[w("iframe",{id:a.iFrameId,srcDoc:a.sourceDoc,title:"output",sandbox:"allow-scripts",frameborder:"0",width:"100%",height:"100%"},null,8,Fe)])]),w("div",Ue,[N(i,{EDITOR_TITLE:"",onEmitOnUpdate:a.handleUpdateCanvas,onEmitOnUndo:a.undo,onEmitOnRedo:a.redo},null,8,["onEmitOnUpdate","onEmitOnUndo","onEmitOnRedo"])])])])]),N(r,{MODAL_ID:a.componentModalId,CLASSES:"fds-modal--top",TITLE:"Add Properties",NAME:a.componentName,onEmitAddComponent:a.handleAddComponent},null,8,["MODAL_ID","NAME","onEmitAddComponent"])])}const ze=H(De,[["render",Re]]),Ye=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));export{Ye as D,R as u};
