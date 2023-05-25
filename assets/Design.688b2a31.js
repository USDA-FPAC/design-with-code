import{r as $,_ as L,d as M,a as P,u as O,k as B,b as F,o as G,e as q,l as x,m as H}from"./index.91e90bd4.js";import{u as U}from"./useNavigation.99f33b57.js";import{v as t,u as j,a as z}from"./useGrowlControls.22687e0d.js";function V(){const i=$(""),e=$({}),s=$({}),a=o=>{let g=document.getElementById(o);g.setAttribute("aria-expanded",!0),g.setAttribute("aria-hidden","false"),g.addEventListener("keydown",n);let w='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',v=g.querySelectorAll(w);v=Array.prototype.slice.call(v),e.value=v[0],s.value=v[v.length-1],e.value.focus();let S=document.getElementsByTagName("body")[0];S.className=S.className+" fds-modal-scroll-fix",setTimeout(function(){g.focus()},200)},l=o=>{document.getElementById(o).setAttribute("aria-hidden","true");let w=document.getElementsByTagName("body")[0];w.className=w.className.replace(" fds-modal-scroll-fix","");let v=document.querySelector("[data-modal-origin]");v&&(v.removeAttribute("data-modal-origin"),v.setAttribute("aria-expanded","false"),v.focus())},n=o=>{o.keyCode===9&&(o.shiftKey?document.activeElement===e.value&&(o.preventDefault(),s.value.focus()):document.activeElement===s.value&&(o.preventDefault(),e.value.focus())),o.keyCode===27&&closeModal()};return{setModalId:o=>{i.value=o},getModalId:()=>i.value,showModal:a,hideModal:l}}function R(i=null){const e=(l=null)=>{let n="";return l!=null||l!=""?n=`<html lang="en">
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
      </head>`,n+="<body>",n},s=(l=null,n=null)=>{let u="";return l!=null||l!=""?(u=`<!-- Start Global Nav Component -->
      <nav id="dwc-${t()}" class="dwc-overlay">
        <div class="fsa-nav-global ${n=="fullscreen"?"fsa-nav-global--fullscreen":""}">
          <div class="fsa-nav-global__bd">
            <ul class="fsa-nav-global__list" aria-label="Primary Navigation">`,l.navMenu.forEach(o=>{u+=`<li class="fsa-nav-global__list-item">
                <a class="fsa-nav-global__link ${o.isActive=="true"?"fsa-nav-global__link--active":""}" href="${o.path}">
                  <span class="fsa-nav-global__text">${o.label}</span>
                </a>
              </li>`}),u+=`</ul>
          </div>
        </div>
      </nav>
      <!-- End Global Nav Component -->`,u):(`${t()}`,n=="fullscreen",u)};return{getTop:e,getHeaderApp:(l=null)=>{let n="";try{n=l.layout}catch(m){console.log(m,"getHeaderApp > no layout data passed")}let u=`<header>
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
    </div>`;return l!=null||l!=""?u+=`<div class="dwc-overlay fsa-header-app ${n=="fullscreen"?"fsa-header-app--fullscreen":""}" id="dwc-${t()}">
          <div class="fsa-header-app__bd">
            <div class="fsa-header-app__primary">
              <a class="fsa-header-app__home-link" href="#">
                <span class="dwc-overlay fsa-header-app__app-name" id="dwc-${t()}">
                  <!-- Your Program Abbreviation and Name -->
                  <abbr class="fsa-header-app__app-abbr">${l.programAbbr}</abbr>
                  <span class="fsa-header-app__app-full">${l.programName}</span>
                  <!-- End Program Abbreviation and Name -->
                </span>
              </a>
            </div>
            <div class="dwc-overlay fsa-header-app__secondary" id="dwc-${t()}">
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
      </header>`:u+=`<div class="dwc-overlay fsa-header-app" id="dwc-${t()}">
            <div class="fsa-header-app__bd">
              <div class="fsa-header-app__primary">
                <a class="fsa-header-app__home-link" href="#">
                  <span class="dwc-overlay fsa-header-app__app-name" id="dwc-${t()}">
                    <!-- Your Program Abbreviation and Name -->
                    <abbr class="fsa-header-app__app-abbr">CPS</abbr>
                    <span class="fsa-header-app__app-full">Code Prototype Starter</span>
                    <!-- End Program Abbreviation and Name -->
                  </span>
                </a>
              </div>
              <div class="dwc-overlay fsa-header-app__secondary" id="dwc-${t()}">
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
        </header>`,u},getGlobalNav:s}}function D(i=null){let e=`
  <main id="main-content" tabindex="-1">
    <div class="fsa-section">
      <div class="fsa-section__bd">`;const s=`<div id="dwc-${t()}" class="dwc-overlay">
    <nav aria-label="Breadcrumbs">
      <div class="fsa-m-t--l fsa-stepped-tabs">
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
  </div>`,a=`<div id="dwc-${t()}" class="dwc-overlay fsa-m-b--m fsa-level fsa-level--justify-between fsa-level--align-bottom">
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
  </div>`;let l=`<div id="dwc-${t()}" class="dwc-overlay fsa-box fsa-text-align--center fsa-border--tertiary-300 fsa-m-t--l" style="height: 200px">Your App Here</div>`,n=`<!-- Stepped Control -->
  <div class="dwc-overlay fsa-stepped-control" id="dwc-${t()}">
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
  </div>`,u=`
      </div>
    </div>
  </main>`,m=`<script>
  window.addEventListener('load',()=>{ window.top.postMessage('handshake', '${i}') });
  window.addEventListener('message',(_evt)=>{ console.log('message from Parent',_evt.data) });
  let clickAreas = document.querySelectorAll('.dwc-overlay');
  clickAreas.forEach( item => {
    item.addEventListener('click', (_e) => {
      _e.preventDefault();
      _e.stopPropagation();
      let el = _e.currentTarget;
      window.top.postMessage(el.id, '${i}');
    });
  });
  <\/script>`;return{mainTop:e,steppedTabs:s,headerArea:a,bodyInit:l,steppedControls:n,mainBottom:u,frameScripts:m}}function Y(i){const{getTop:e,getHeaderApp:s}=R(i),{mainTop:a,mainBottom:l}=D(i);let n="";const u=`<script>
  window.addEventListener('load',()=>{ window.top.postMessage('handshake', '${i}') });
  window.addEventListener('message',(_evt)=>{ console.log('message from Parent',_evt.data) });
  let clickAreas = document.querySelectorAll('.dwc-overlay');
  clickAreas.forEach( item => {
    item.addEventListener('click', (_e) => {
      _e.preventDefault();
      _e.stopPropagation();
      let el = _e.currentTarget;
      window.top.postMessage(el.id, '${i}');
    });
  });
  <\/script>`;let m='<div id="main-app-area" class="dwc-overlay fsa-box fsa-text-align--center fsa-border--tertiary-300 fsa-m-t--l" style="height: 200px">Your App Here</div>';return{getTemplate:(g=null)=>{let w=g.css!=null?g.css:null,v=g.layout!=null?g.layout:null;return n=e({css:w}),n+=s(g,v),n+=a,n+=m,n+=l,n+=u,n}}}function J(){return{getButton:e=>`<button class="fsa-btn ${e.classes}" role="button" type="button" title="${e.prompt}">${e.label}</button>`}}function W(){return{getButtonGroup:e=>{let s=`<span class="fsa-btn-group ${e.classes}" role="group" aria-label="Label describing this group">`;return e.arr.forEach(a=>s+=`<button class="fsa-btn-group__item ${a.classes}" type="button">${a.label}</button>`),s+="</span>",s}}}function K(){return{getHeader:e=>`<${e.type==""?"H2":e.type}>${e.label}</${e.type==""?"H2":e.type}>`}}function Q(){return{getPageTitle:e=>{let a=`<div id="${String("dws-"+t())}" class="dwc-overlay fsa-m-b--m fsa-level fsa-level--justify-between fsa-level--align-bottom">
      <div>
        <h1 class="fsa-m-t--m">${e.label}</h1>
      </div>`;return e.arr&&(a+='<div class="fsa-level">',e.arr.forEach(l=>{a+=`<span>
          <button class="fsa-btn ${l.classes}" type="button">${l.label}</button>
        </span>`}),a+="</div>"),a+="</div>",a}}}function X(){return{getBreadcrumbs:e=>{let a=`<div class="fsa-breadcrumb" id="${String("dws-"+t())}">
      <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
        <ol class="fsa-breadcrumb__list">`;return e.arr.forEach(l=>{a+=`<li class="fsa-breadcrumb__item"><a href="${l.path}" class="fsa-breadcrumb__link">`,l.svg&&(a+=`${l.svg}`),a+=`${l.label}</a></li>`}),a+="</ol></nav></div>",a}}}function Z(){return{getCheckbox:e=>{let s=String("dws-"+t());return`<span><input class="fsa-checkbox fsa-checkbox--solo" id="${s}" type="checkbox" name="${s}" value="${s}" ${e.isSelected?'checked=""':""}>
      <label for="${s}"><span class="fsa-sr-only">${e.label}</span></label>
    </span>`}}}function ee(){return{getRadioGroup:e=>{let s=String("dws-"+t()),a=t(),l=`<div class="fsa-field ${e.classes}"><label class="fsa-field__label" id="${s}">${e.prompt}</label><ul class="fsa-form-list" aria-labelledby="${s}">`;return e.arr.forEach(n=>{l+=`<li><span><input class="fsa-radio" id="${n.id}" ${e.isDisabled?'disabled="disabled"':""} type="radio" name="${a}"><label for="${n.id}">${n.label}</label></span></li>`}),l+=`</ul><span class="fsa-field__help" id="${s}-help">${e.help}</span></div>`,l}}}function se(){return{getFormField:e=>{let s=String("dws-"+t());return`<div class="fsa-field ${e.classes}">
    <label class="fsa-field__label" for="${s}">${e.label} ${e.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <input class="fsa-input fsa-field__item" id="${s}" name="${s}" aria-describedby="${s}-help-1" aria-required="${e.isRequired?"true":"false"}" type="${e.type}" placeholder="${e.prompt}" value="">
      <span class="fsa-field__help" id="${s}-help-1">${e.help}</span>
    </div>`}}}function ae(){return{getCheckboxGroup:e=>{let s=String("dws-"+t()),a=t(),l=`<ul class="fsa-form-list" aria-label="${e.prompt}">`;return e.arr.forEach(n=>{l+=`<span>
        <input class="fsa-checkbox" id="${s}-${n.label}" type="checkbox" name="${a}" value="${n.label}" ${n.isSelected?'checked=""':""}>
        <label for="${s}-${n.label}">${n.label}</label>
      </span>`}),l+="</ul>",l}}}function le(){return{getSearch:e=>{let s=String("dws-"+t());return`<div class="fsa-search" role="search">
      <div class="fsa-search__bd">
        <div class="fsa-search__entry fsa-search__entry--grow ${e.classes}">
          <label class="fsa-search__label ${e.prompt!=""?"":"fsa-search__label--sr-only"}" for="${s}">${e.prompt}</label>
          <input class="fsa-input fsa-search__input" id="${s}" type="search" name="search">
        </div>
        <div class="fsa-search__submit">
          <button class="fsa-btn fsa-search__btn ${e.label==""?"fsa-search__btn--icon":""}" type="submit">
            <span class="fsa-search__text">${e.label}</span>
          </button>
        </div>
      </div>
    </div>`}}}function te(){return{getSelect:e=>{let s=`<select class="fsa-select ${e.classes!=""?e.classes:""}" name="${e.name}">`;return e.arr.forEach(a=>{s+=`<option value="${a.val}" ${_item.isSelected?'selected="selected':""}">${a.label}</option>`}),s+="</select>",s}}}function ne(){return{getSelectField:e=>{let s=String("dws-"+t()),a=`<div class="fsa-field ${e.classes}">
      <label class="fsa-field__label" for="${s}">${e.label} ${e.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <select id="${s}" class="fsa-select fsa-field__item" aria-describedby="${s}-help-1" aria-required="${e.isRequired=="true"?"true":"false"}" name="${s}">`;return e.arr.forEach(l=>{a+=`<option value="${l.val}" ${l.isSelected?'selected="selected':""}">${l.label}</option>`}),a+=`</select>
      <span class="fsa-field__help" id="${s}-help-1">${e.help}</span>
    </div>`,a}}}function ie(){return{getSelectMultiField:e=>{let s=String("dws-"+t()),a=`<div class="fsa-field ${e.classes}">
      <label class="fsa-field__label" for="${s}">${e.label} ${e.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <div class="fsa-select-multi fsa-field__item" id="${s}">
        <ul class="fsa-select-multi__list">
          <li class="fsa-select-multi__item">
            <input class="fsa-checkbox fsa-select-multi__check" id="${s}-selectall" data-behavior="select-multi select-multi-all" type="checkbox" name="${s}-selectall" value="ALL">
            <label class="fsa-select-multi__label" for="${s}-selectall">Select all</label>
          </li>`;return e.arr.forEach(l=>{a+=`<li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-${l.label}" data-behavior="select-multi" type="checkbox" name="sa-${l.label}" value="${l.label}" ${l.isChecked?'checked=""':""}>
        <label class="fsa-select-multi__label" for="sa-${l.label}">${l.label}</label>
      </li>`}),a+=`</ul></div><span class="fsa-field__help" id="${s}-help-1">${e.help}</span></div>`,a}}}function oe(){return{getSelectMulti:e=>{let s=String("dws-"+t());t();let a=`<div class="fsa-select-multi ${e.classes}" id="${s}">
      <ul class="fsa-select-multi__list">
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="${s}-selectall" data-behavior="select-multi select-multi-all" type="checkbox" name="${s}-selectall" value="ALL">
          <label class="fsa-select-multi__label" for="${s}-selectall">Select all</label>
        </li>`;return e.arr.forEach(l=>{a+=`<li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-${l.label}" data-behavior="select-multi" type="checkbox" name="sa-${l.label}" value="${l.label}" ${l.isChecked?'checked=""':""}>
        <label class="fsa-select-multi__label" for="sa-${l.label}">${l.label}</label>
      </li>`}),a+="</ul></div>",a}}}function ce(){return{getSlider:e=>{let s=String("dws-"+t());return`<input class="fsa-slider ${e.classes}" id="${s}" name="${s}" type="range" min="${e.min}" max="${e.max}" value="${e.val}" step="${e.step}"></input>`}}}function de(){return{getSliderField:e=>{let s=String("dws-"+t());return`<div class="fsa-field ${e.classes}">
      <label class="fsa-field__label" for="${s}">${e.label} ${e.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <div class="fsa-level">
        <span class="fsa-level__item--grow-auto">
          <input class="fsa-slider ${e.classes}" id="${s}" name="${s}" type="range" min="${e.min}" max="${e.max}" value="${e.val}" step="${e.step}"></input>
        </span>
        <span><output id="output-${s}" name="output-${s}" for="${s}">99</output></span>
      </div>
      <span class="fsa-field__help" id="${s}-help-1">${e.help}</span>
    </div>`}}}function re(){return{getSpinbox:e=>{let s=String("dws-"+t()),a=`<div class="fsa-spinbox ${e.classes}">`;return a+=`<div class="fsa-spinbox__number">
    <input class="fsa-input fsa-spinbox__input" id="${s}" name="${s}" type="number" value="${e.val}">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>`,a+="</div>",a}}}function pe(){return{getSpinboxField:e=>{let s=String("dws-"+t());return`<div class="fsa-field ${e.classes}">
    <label class="fsa-field__label" for="${s}">${e.label} ${e.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
    <div class="fsa-spinbox ${e.classes}">
      <div class="fsa-spinbox__number">
        <input class="fsa-input fsa-spinbox__input" id="${s}" name="${s}" type="number" value="${e.val}">
        </div>
        <div class="fsa-spinbox__actions" aria-hidden="true">
          <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
          <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
        </div>
      </div>
      <span class="fsa-field__help" id="${s}-help-1">${e.help}</span>
    </div>`}}}function fe(){return{getTextInput:e=>{let s=String("dws-"+t());return`<input class="fsa-input ${e.classes}" type="text" name="${s}" value="${e.val}" placeholder="${e.placeholder}"></input>`}}}function ue(){return{getTextArea:e=>{let s=String("dws-"+t());return`<div class="fsa-field ${e.classes}">
    <label class="fsa-field__label" for="${s}">${e.label} ${e.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <textarea class="fsa-textarea fsa-field__item" placeholder="${e.prompt}" id="${s}" aria-describedby="${s}-help-1" aria-required="${e.isRequired=="true"?"true":"false"}" name="${s}"></textarea>
      <span class="fsa-field__help" id="${s}-help-1">${e.help}</span>
    </div>`}}}function ve(){return{getSteppedControls:e=>{String("dws-"+t());let s="fsa-stepped-control__item--";e.directional?s+="pull":s+="push";let a=`<div class="fsa-stepped-control ${e.classes}">
      <div class="fsa-stepped-control__bd">`;return e.status!=""&&(a+=`<div class="fsa-stepped-control__message ${e.directional?"fsa-stepped-control__message--fill":""}" role="status">${e.status}</div>`),a+='<div class="fsa-stepped-control__list">',e.directional||(a+='<div class="fsa-stepped-control__shim"></div>'),a+=`<div class="fsa-stepped-control__item ${e.status!=""?s:""}">
      <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
        <span class="fsa-stepped-control__btn-label">${e.secondaryLabel}</span>
      </button>
    </div>`,e.directional&&(a+='<div class="fsa-stepped-control__shim"></div>'),a+=`<div class="fsa-stepped-control__item">
      <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
        <span class="fsa-stepped-control__btn-label">${e.primaryLabel}</span>
      </button>
    </div>`,e.status!=""&&(a+="</div>"),a+="</div></div>",a}}}function be(){return{getSwitch:e=>{let s=String("dws-"+t()),a='<span class="fsa-level fsa-level--inline">';return e.labelLeft?a+=`<label for="${s}">${e.label}</label>
      <label class="fsa-switch">
        <input ${e.isChecked?"checked":""} type="checkbox" class="fsa-switch__checkbox" id="${s}" name="${s}">
        <span class="fsa-switch__track"></span>
      </label>`:a+=`<label class="fsa-switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="${s}" name="${s}">
        <span ${e.isChecked?"checked":""} class="fsa-switch__track"></span>
      </label>
      <label for="${s}">${e.label}</label>`,a+="</span>",a}}}function me(){return{getGrid:e=>{let s={};return s["grid-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/1"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,s["grid-1-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/2"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/2"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,s["grid-1-1-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,s["grid-2-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__2/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,s["grid-1-2"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__2/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,s["grid-1-1-1-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,s["grid-2-1-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/2"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,s["grid-1-1-2"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/2"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,s["grid-3-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__3/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,s["grid-1-3"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__3/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,s["grid-1-2-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/2"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,s[e.type]}}}let f={};const{getButton:_e}=J();f.button=_e;const{getButtonGroup:ge}=W();f["button-group"]=ge;const{getHeader:he}=K();f.header=he;const{getPageTitle:$e}=Q();f["page-title"]=$e;const{getBreadcrumbs:we}=X();f.breadcrumbs=we;const{getCheckbox:ye}=Z();f.checkbox=ye;const{getRadioGroup:xe}=ee();f["radio-group"]=xe;const{getFormField:Se}=se();f["form-field"]=Se;const{getCheckboxGroup:ke}=ae();f["checkbox-group"]=ke;const{getSearch:Ee}=le();f.search=Ee;const{getSelect:Ae}=te();f.select=Ae;const{getSelectField:Ce}=ne();f["select-field"]=Ce;const{getSelectMultiField:Ie}=ie();f["select-multi-field"]=Ie;const{getSelectMulti:Te}=oe();f["select-multi"]=Te;const{getSlider:Me}=ce();f.slider=Me;const{getSliderField:Pe}=de();f["slider-field"]=Pe;const{getSpinbox:Ne}=re();f.spinbox=Ne;const{getSpinboxField:Fe}=pe();f["spinbox-field"]=Fe;const{getTextInput:He}=fe();f["text-input"]=He;const{getTextArea:Re}=ue();f["text-area"]=Re;const{getSteppedControls:De}=ve();f["stepped-controls"]=De;const{getSwitch:Le}=be();f.switch=Le;const{getGrid:Oe}=me();f.grid=Oe;const Be=(i=null)=>"";f.remove=Be;function Ge(){return{getComponent:(e,s)=>{let a=t(),l="";if(e=="remove ")l=f[e](s);else{l=`<div id="dwc-${a}" class="dwc-overlay">`;try{l+=f[e](s)}catch(n){console.log("useComponents > getComponent Error: ",n)}l+="</div>"}return l}}}const{checkOnProd:qe}=z(),{showErrorGrowl:Ue}=j(),N=qe()?"https://usda-fpac.github.io":"http://localhost:3000",{getTop:je,getHeaderApp:ze,getGlobalNav:Ve}=R(N),{mainTop:Ye,steppedTabs:Je,headerArea:We,bodyInit:Ke,steppedControls:Qe,mainBottom:Xe,frameScripts:Ze}=D(N),{getTemplate:es}=Y(N),{getComponent:ss}=Ge();function as(i=null){let e="",s=[],a=0,l=!1,n="",m={programAbbr:"NPS",programName:"National Payment System",navMenu:[{label:"Home",path:"/",isActive:"true"},{label:"Solutions",path:"/solutions",isActive:"false"},{label:"Objectives",path:"/objectives",isActive:"false"},{label:"Reports",path:"/reports",isActive:"false"}],css:"https://usda-fsa.github.io/fsa-style/css/fsa-style.min.css",layout:"default"};const o={};o["header-app"]=ze,o["global-nav"]=Ve,o["stepped-tabs"]=Je,o["page-header"]=We,o["main-app-area"]=Ke,o["stepped-controls"]=Qe;const g=c=>{window.addEventListener("message",d=>{d.data==="handshake"&&l!=!0?l=!0:w(d.data,c)})},w=(c,d=null)=>{console.log("panel selected :: ",c),n=c},v=(c,d=null)=>(a=d||s.length+1,s[a-1]={version:a,app:c},s[a-1]),S=(c=null)=>{let d=c||a-1,h=s.find(b=>b.version==d);return v(h.app,d)},E=(c=null)=>{let d=c||a+1,h=s.find(b=>b.version==d);return v(h.app,d)},I=c=>{let d=c.action,h={},b="",p=[];try{b=c.methodName,h=c.obj,p=c.obj.arr}catch(r){console.log("Custom updateCanvas Error: ",r)}if(d=="onTemplateUpdate"&&(m.layout=b,e=es(m)),d=="onComponentUpdate"&&(e=k(h.placementLocation,ss(b,h))),d=="onCodeUpdate"){let r="";p.forEach(_=>{let T=_.data;_.type=="paragraph"&&(r+=T.text),_.type=="code"&&(r+=T.text),_.type=="rawHtml"&&(r+=T.html)}),e=k(h.placementLocation,r)}return e},k=(c,d)=>{let h=document.createElement("div");h.innerHTML=e,console.log("_location",c),console.log("_code",d);try{let b=h.querySelector(`#${n}`),p=String(b.outerHTML);if(e.indexOf(p)>-1){let r=e.split(p),_="";switch(c){case"replace":e=r.join(d);break;case"above":e=r[0]+d+p+r[1];break;case"below":e=r[0]+p+d+r[1];break;case"left":_=`<div class="fsa-level"><span>${d}</span><span>${p}</span></div>`,e=r[0]+_+r[1];break;case"right":_=`<div class="fsa-level"><span>${p}</span><span>${d}</span></div>`,e=r[0]+_+r[1];break;case"remove":e=r[0]+r[1];break;default:e=r.join(d);break}}else A();h.remove(),n=""}catch(b){A(b)}return e},A=(c=null)=>{Ue({title:"Selection Error",msg:"Select an area or component on the Canvas. "+(c||"")})},C=()=>(e=je({css:m.css}),e+=o["header-app"](m),e+=Ye,e+=o["stepped-tabs"],e+=o["page-header"],e+=o["main-app-area"],e+=o["stepped-controls"],e+=Xe,e+=Ze,e+="</body></html>",e);return{updateSource:(c,d,h=null)=>{let b="";if(h){let p=C();return b=v(p),b}if(c.cmd=="updateCanvas"){if(n!=""){let p=I(d);b=v(p)}else b=s[a];return b}if(c.cmd=="undo")return S();if(c.cmd=="undo-version")return S(c.data);if(c.cmd=="redo")return E()},listenToFrame:g}}const ls=M(()=>P(()=>import("./BaseHeader.eeaf7dad.js"),["assets/BaseHeader.eeaf7dad.js","assets/disclaimer.f812ad1b.js","assets/index.91e90bd4.js","assets/index.d9429370.css","assets/useNavigation.99f33b57.js"])),ts=M(()=>P(()=>import("./Base.f08d77c6.js"),["assets/Base.f08d77c6.js","assets/index.91e90bd4.js","assets/index.d9429370.css","assets/useGrowlControls.22687e0d.js"])),ns=M(()=>P(()=>import("./ComponentModal.48843219.js"),["assets/ComponentModal.48843219.js","assets/index.91e90bd4.js","assets/index.d9429370.css","assets/useGrowlControls.22687e0d.js","assets/useNavigation.99f33b57.js"])),is={components:{baseHeader:ls,editor:ts,componentModal:ns},setup(i,{emit:e}){const s=$("/design-with-code/"),a=O(),{goto:l}=U(),n=$(t()),u=$(t()),m=$(t()),{updateSource:o,listenToFrame:g}=as(String(m.value)),{setModalId:w,showModal:v,hideModal:S}=V(),E=$(t());w(E.value);const I=$(),k=$({}),A=$([]);let C=$();const y=p=>{C.value=p.app,a.dispatch("codeExport/setHtml",C.value)},c=()=>{y(o({cmd:"undo"},""))},d=()=>{y(o({cmd:"redo"},""))},h=p=>{if(k.value=p.obj,p.action=="onTemplateUpdate"&&y(o({cmd:"updateCanvas",data:""},p)),p.action=="onComponentUpdate"){I.value=p.methodName;let r=p.obj;if(r.hasOwnProperty("useModal")){let _=r.useModal=="true";A.value=r.showProperties.split(","),_?v(E.value):y(o({cmd:"updateCanvas",data:""},p))}else y(o({cmd:"updateCanvas",data:""},p))}},b=p=>{let r=p.obj;Object.keys(r).forEach(_=>{(r[_]==""||r[_]==null)&&k.value.hasOwnProperty(_)&&(r[_]=k.value[_])}),p.obj=r,y(o({cmd:"updateCanvas",data:""},p))};return B(()=>{g(m.value),y(o("","",!0))}),{baseUrl:s,goto:l,sourceDoc:C,editorsId:n,canvasId:u,iFrameId:m,handleUpdateCanvas:h,undo:c,redo:d,componentModalId:E,handleModalAdditions:b,methodName:I,showProperties:A}}},os={id:"main-content",tabindex:"-1"},cs={class:"fds-section fds-section--fullscreen"},ds={class:"fds-section__bd"},rs={class:"fds-grid fds-grid--no-gutter"},ps={class:"fds-grid__1/1 fds-grid__10/12@l"},fs={class:"dwc-preview fds-box fds-p--none fds-box--bg-100"},us=["id","srcDoc"],vs={class:"fds-grid__1/1 fds-grid__2/12@l fds-p-t--m"};function bs(i,e,s,a,l,n){const u=F("editor"),m=F("component-modal");return G(),q("main",os,[x("div",cs,[x("div",ds,[x("div",rs,[x("div",ps,[x("div",fs,[x("iframe",{id:a.iFrameId,srcDoc:a.sourceDoc,title:"output",sandbox:"allow-scripts",frameborder:"0",width:"100%",height:"100%"},null,8,us)])]),x("div",vs,[H(u,{EDITOR_TITLE:"",onEmitOnUpdate:a.handleUpdateCanvas,onEmitOnUndo:a.undo,onEmitOnRedo:a.redo},null,8,["onEmitOnUpdate","onEmitOnUndo","onEmitOnRedo"])])])])]),H(m,{MODAL_ID:a.componentModalId,CLASSES:"fds-modal--top",TITLE:"Add Properties",NAME:a.methodName,SHOW_PROPERTIES:a.showProperties,onEmitModalAdditions:a.handleModalAdditions},null,8,["MODAL_ID","NAME","SHOW_PROPERTIES","onEmitModalAdditions"])])}const ms=L(is,[["render",bs]]),$s=Object.freeze(Object.defineProperty({__proto__:null,default:ms},Symbol.toStringTag,{value:"Module"}));export{$s as D,V as u};
