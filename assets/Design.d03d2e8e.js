import{r as _,_ as O,d as M,a as P,u as B,k as G,b as H,o as U,e as q,l as S,m as R}from"./index.a25f1613.js";import{u as j}from"./useNavigation.9b15bfa0.js";import{v as t,u as z,a as V}from"./useGrowlControls.9fb0f9fa.js";function Y(){const n=_(""),s=_({}),e=_({}),a=c=>{let f=document.getElementById(c);f.setAttribute("aria-expanded",!0),f.setAttribute("aria-hidden","false"),f.addEventListener("keydown",i);let $='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',m=f.querySelectorAll($);m=Array.prototype.slice.call(m),s.value=m[0],e.value=m[m.length-1],s.value.focus();let x=document.getElementsByTagName("body")[0];x.className=x.className+" fds-modal-scroll-fix",setTimeout(function(){f.focus()},200)},l=c=>{document.getElementById(c).setAttribute("aria-hidden","true");let $=document.getElementsByTagName("body")[0];$.className=$.className.replace(" fds-modal-scroll-fix","");let m=document.querySelector("[data-modal-origin]");m&&(m.removeAttribute("data-modal-origin"),m.setAttribute("aria-expanded","false"),m.focus())},i=c=>{c.keyCode===9&&(c.shiftKey?document.activeElement===s.value&&(c.preventDefault(),e.value.focus()):document.activeElement===e.value&&(c.preventDefault(),s.value.focus())),c.keyCode===27&&closeModal()};return{setModalId:c=>{n.value=c},getModalId:()=>n.value,showModal:a,hideModal:l}}function D(n=null){const s=(l=null)=>{let i="";return l!=null||l!=""?i=`<html lang="en">
      <head>
      <meta charset="UTF-8">
      <link rel="icon" href="/fpac-design-system/favicon.ico">
      <link rel="stylesheet" href="${l.css}" />
      <link rel="stylesheet" href="/design-with-code/css/styles.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>FPAC Design System</title>
      </head>`:i=`<html lang="en">
      <head>
      <meta charset="UTF-8">
      <link rel="icon" href="/fpac-design-system/favicon.ico">
      <link rel="stylesheet" href="https://usda-fsa.github.io/fsa-style/css/fsa-style.min.css" />
      <link rel="stylesheet" href="/design-with-code/css/styles.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>FPAC Design System</title>
      </head>`,i+="<body>",i},e=(l=null,i=null)=>{let v="";return l!=null||l!=""?(v=`<!-- Start Global Nav Component -->
      <nav id="dwc-${t()}" class="dwc-overlay">
        <div class="fsa-nav-global ${i=="fullscreen"?"fsa-nav-global--fullscreen":""}">
          <div class="fsa-nav-global__bd">
            <ul class="fsa-nav-global__list" aria-label="Primary Navigation">`,l.navMenu.forEach(c=>{v+=`<li class="fsa-nav-global__list-item">
                <a class="fsa-nav-global__link ${c.isActive=="true"?"fsa-nav-global__link--active":""}" href="${c.path}">
                  <span class="fsa-nav-global__text">${c.label}</span>
                </a>
              </li>`}),v+=`</ul>
          </div>
        </div>
      </nav>
      <!-- End Global Nav Component -->`,v):(`${t()}`,i=="fullscreen",v)};return{getTop:s,getHeaderApp:(l=null)=>{let i="";try{i=l.layout}catch(h){console.log(h,"getHeaderApp > no layout data passed")}let v=`<header>
    <div class="fsa-tophat ${i=="fullscreen"?"fsa-tophat--fullscreen":""}">
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
    </div>`;return l!=null||l!=""?v+=`<div class="dwc-overlay fsa-header-app ${i=="fullscreen"?"fsa-header-app--fullscreen":""}" id="dwc-${t()}">
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

        ${e(l,i)}
      </header>`:v+=`<div class="dwc-overlay fsa-header-app" id="dwc-${t()}">
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

          ${e(l,_layout)}
        </header>`,v},getGlobalNav:e}}function L(n=null){const s=(c=null)=>`<main id="main-content" tabindex="-1">
    <div class="fsa-section ${c=="fullscreen"?"fsa-section--fullscreen":""}">
      <div class="fsa-section__bd">`,e=`<div id="dwc-${t()}" class="dwc-overlay">
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
  </div>`;let l=`<div id="dwc-${t()}" class="dwc-overlay fsa-box fsa-text-align--center fsa-border--tertiary-300 fsa-m-t--l" style="height: 200px">Your App Here</div>`,i=`<!-- Stepped Control -->
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
  </div>`,v=`
      </div>
    </div>
  </main>`,h=`<script>
  window.addEventListener('load',()=>{ window.top.postMessage('handshake', '${n}') });
  window.addEventListener('message',(_evt)=>{ console.log('message from Parent',_evt.data) });
  let clickAreas = document.querySelectorAll('.dwc-overlay');
  function removeAllSelected(){
    clickAreas.forEach( item => {
      item.classList.remove('dwc-selected');
    });
  }
  clickAreas.forEach( item => {
    item.addEventListener('click', (_e) => {
      _e.preventDefault();
      _e.stopPropagation();
      removeAllSelected();
      let el = _e.currentTarget;
      el.classList.add('dwc-selected');
      window.top.postMessage(el.id, '${n}');
    });
  });
  <\/script>`;return{getMainTop:s,steppedTabs:e,headerArea:a,bodyInit:l,steppedControls:i,mainBottom:v,frameScripts:h}}function J(n){const{getTop:s,getHeaderApp:e}=D(n),{getMainTop:a,mainBottom:l}=L(n);let i="",v=`<script>
  window.addEventListener('load',()=>{ window.top.postMessage('handshake', '${n}') });
  window.addEventListener('message',(_evt)=>{ console.log('message from Parent',_evt.data) });
  let clickAreas = document.querySelectorAll('.dwc-overlay');
  function removeAllSelected(){
    clickAreas.forEach( item => {
      item.classList.remove('dwc-selected');
    });
  }
  clickAreas.forEach( item => {
    item.addEventListener('click', (_e) => {
      _e.preventDefault();
      _e.stopPropagation();
      removeAllSelected();
      let el = _e.currentTarget;
      el.classList.add('dwc-selected');
      window.top.postMessage(el.id, '${n}');
    });
  });
  <\/script>`,h='<div id="main-app-area" class="dwc-overlay fsa-box fsa-text-align--center fsa-border--tertiary-300 fsa-m-t--l" style="height: 200px">Your App Here</div>';return{getTemplate:(f=null)=>{let $=f.css!=null?f.css:null,m=f.layout!=null?f.layout:null;return i=s({css:$}),i+=e(f,m),i+=a(m),i+=h,i+=l,i+=v,i}}}function W(){return{getButton:s=>`<button class="fsa-btn ${s.classes}" role="button" type="button" title="${s.prompt}">${s.label}</button>`}}function K(){return{getButtonGroup:s=>{let e=`<span class="fsa-btn-group ${s.classes}" role="group" aria-label="Label describing this group">`;return s.arr.forEach(a=>e+=`<button class="fsa-btn-group__item ${a.classes}" type="button">${a.label}</button>`),e+="</span>",e}}}function Q(){return{getHeader:s=>`<${s.type==""?"H2":s.type}>${s.label}</${s.type==""?"H2":s.type}>`}}function X(){return{getPageTitle:s=>{let a=`<div id="${String("dwc-"+t())}" class="fsa-m-b--m fsa-level fsa-level--justify-between fsa-level--align-bottom">
      <div>
        <h1 class="fsa-m-t--m">${s.label}</h1>
      </div>`;return s.arr&&(a+='<div class="fsa-level">',s.arr.forEach(l=>{a+=`<span>
          <button class="fsa-btn ${l.classes}" type="button">${l.label}</button>
        </span>`}),a+="</div>"),a+="</div>",a}}}function Z(){return{getBreadcrumbs:s=>{let a=`<div class="fsa-breadcrumb" id="${String("dwc-"+t())}">
      <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
        <ol class="fsa-breadcrumb__list">`;return s.arr.forEach(l=>{a+=`<li class="fsa-breadcrumb__item"><a href="${l.path}" class="fsa-breadcrumb__link">`,l.svg&&(a+=`${l.svg}`),a+=`${l.label}</a></li>`}),a+="</ol></nav></div>",a}}}function ee(){return{getCheckbox:s=>{let e=String("dwc-"+t());return`<span><input class="fsa-checkbox fsa-checkbox--solo" id="${e}" type="checkbox" name="${e}" value="${e}" ${s.isSelected?'checked=""':""}>
      <label for="${e}"><span class="fsa-sr-only">${s.label}</span></label>
    </span>`}}}function se(){return{getRadioGroup:s=>{let e=String("dwc-"+t()),a=t(),l=`<div class="fsa-field ${s.classes}"><label class="fsa-field__label" id="${e}">${s.prompt}</label><ul class="fsa-form-list" aria-labelledby="${e}">`;return s.arr.forEach(i=>{l+=`<li><span><input class="fsa-radio" id="${i.id}" ${s.isDisabled?'disabled="disabled"':""} type="radio" name="${a}"><label for="${i.id}">${i.label}</label></span></li>`}),l+=`</ul><span class="fsa-field__help" id="${e}-help">${s.help}</span></div>`,l}}}function ae(){return{getFormField:s=>{let e=String("dwc-"+t());return`<div class="fsa-field ${s.classes}">
    <label class="fsa-field__label" for="${e}">${s.label} ${s.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <input class="fsa-input fsa-field__item" id="${e}" name="${e}" aria-describedby="${e}-help-1" aria-required="${s.isRequired?"true":"false"}" type="${s.type}" placeholder="${s.prompt}" value="">
      <span class="fsa-field__help" id="${e}-help-1">${s.help}</span>
    </div>`}}}function le(){return{getCheckboxGroup:s=>{let e=String("dwc-"+t()),a=t(),l=`<ul class="fsa-form-list" aria-label="${s.prompt}">`;return s.arr.forEach(i=>{l+=`<span>
        <input class="fsa-checkbox" id="${e}-${i.label}" type="checkbox" name="${a}" value="${i.label}" ${i.isSelected?'checked=""':""}>
        <label for="${e}-${i.label}">${i.label}</label>
      </span>`}),l+="</ul>",l}}}function te(){return{getSearch:s=>{let e=String("dwc-"+t());return`<div class="fsa-search" role="search">
      <div class="fsa-search__bd">
        <div class="fsa-search__entry fsa-search__entry--grow ${s.classes}">
          <label class="fsa-search__label ${s.prompt!=""?"":"fsa-search__label--sr-only"}" for="${e}">${s.prompt}</label>
          <input class="fsa-input fsa-search__input" id="${e}" type="search" name="search">
        </div>
        <div class="fsa-search__submit">
          <button class="fsa-btn fsa-search__btn ${s.label==""?"fsa-search__btn--icon":""}" type="submit">
            <span class="fsa-search__text">${s.label}</span>
          </button>
        </div>
      </div>
    </div>`}}}function ne(){return{getSelect:s=>{let e=`<select class="fsa-select ${s.classes!=""?s.classes:""}" name="${s.name}">`;return s.arr.forEach(a=>{e+=`<option value="${a.val}" ${_item.isSelected?'selected="selected':""}">${a.label}</option>`}),e+="</select>",e}}}function ie(){return{getSelectField:s=>{let e=String("dwc-"+t()),a=`<div class="fsa-field ${s.classes}">
      <label class="fsa-field__label" for="${e}">${s.label} ${s.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <select id="${e}" class="fsa-select fsa-field__item" aria-describedby="${e}-help-1" aria-required="${s.isRequired=="true"?"true":"false"}" name="${e}">`;return s.arr.forEach(l=>{a+=`<option value="${l.val}" ${l.isSelected?'selected="selected':""}">${l.label}</option>`}),a+=`</select>
      <span class="fsa-field__help" id="${e}-help-1">${s.help}</span>
    </div>`,a}}}function oe(){return{getSelectMultiField:s=>{let e=String("dwc-"+t()),a=`<div class="fsa-field ${s.classes}">
      <label class="fsa-field__label" for="${e}">${s.label} ${s.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <div class="fsa-select-multi fsa-field__item" id="${e}">
        <ul class="fsa-select-multi__list">
          <li class="fsa-select-multi__item">
            <input class="fsa-checkbox fsa-select-multi__check" id="${e}-selectall" data-behavior="select-multi select-multi-all" type="checkbox" name="${e}-selectall" value="ALL">
            <label class="fsa-select-multi__label" for="${e}-selectall">Select all</label>
          </li>`;return s.arr.forEach(l=>{a+=`<li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-${l.label}" data-behavior="select-multi" type="checkbox" name="sa-${l.label}" value="${l.label}" ${l.isChecked?'checked=""':""}>
        <label class="fsa-select-multi__label" for="sa-${l.label}">${l.label}</label>
      </li>`}),a+=`</ul></div><span class="fsa-field__help" id="${e}-help-1">${s.help}</span></div>`,a}}}function ce(){return{getSelectMulti:s=>{let e=String("dwc-"+t());t();let a=`<div class="fsa-select-multi ${s.classes}" id="${e}">
      <ul class="fsa-select-multi__list">
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="${e}-selectall" data-behavior="select-multi select-multi-all" type="checkbox" name="${e}-selectall" value="ALL">
          <label class="fsa-select-multi__label" for="${e}-selectall">Select all</label>
        </li>`;return s.arr.forEach(l=>{a+=`<li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-${l.label}" data-behavior="select-multi" type="checkbox" name="sa-${l.label}" value="${l.label}" ${l.isChecked?'checked=""':""}>
        <label class="fsa-select-multi__label" for="sa-${l.label}">${l.label}</label>
      </li>`}),a+="</ul></div>",a}}}function de(){return{getSlider:s=>{let e=String("dwc-"+t());return`<input class="fsa-slider ${s.classes}" id="${e}" name="${e}" type="range" min="${s.min}" max="${s.max}" value="${s.val}" step="${s.step}"></input>`}}}function re(){return{getSliderField:s=>{let e=String("dwc-"+t());return`<div class="fsa-field ${s.classes}">
      <label class="fsa-field__label" for="${e}">${s.label} ${s.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <div class="fsa-level">
        <span class="fsa-level__item--grow-auto">
          <input class="fsa-slider ${s.classes}" id="${e}" name="${e}" type="range" min="${s.min}" max="${s.max}" value="${s.val}" step="${s.step}"></input>
        </span>
        <span><output id="output-${e}" name="output-${e}" for="${e}">99</output></span>
      </div>
      <span class="fsa-field__help" id="${e}-help-1">${s.help}</span>
    </div>`}}}function pe(){return{getSpinbox:s=>{let e=String("dwc-"+t()),a=`<div class="fsa-spinbox ${s.classes}">`;return a+=`<div class="fsa-spinbox__number">
    <input class="fsa-input fsa-spinbox__input" id="${e}" name="${e}" type="number" value="${s.val}">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>`,a+="</div>",a}}}function fe(){return{getSpinboxField:s=>{let e=String("dwc-"+t());return`<div class="fsa-field ${s.classes}">
    <label class="fsa-field__label" for="${e}">${s.label} ${s.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
    <div class="fsa-spinbox ${s.classes}">
      <div class="fsa-spinbox__number">
        <input class="fsa-input fsa-spinbox__input" id="${e}" name="${e}" type="number" value="${s.val}">
        </div>
        <div class="fsa-spinbox__actions" aria-hidden="true">
          <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
          <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
        </div>
      </div>
      <span class="fsa-field__help" id="${e}-help-1">${s.help}</span>
    </div>`}}}function ue(){return{getTextInput:s=>{let e=String("dwc-"+t());return`<input class="fsa-input ${s.classes}" type="text" name="${e}" value="${s.val}" placeholder="${s.placeholder}"></input>`}}}function ve(){return{getTextArea:s=>{let e=String("dwc-"+t());return`<div class="fsa-field ${s.classes}">
    <label class="fsa-field__label" for="${e}">${s.label} ${s.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <textarea class="fsa-textarea fsa-field__item" placeholder="${s.prompt}" id="${e}" aria-describedby="${e}-help-1" aria-required="${s.isRequired=="true"?"true":"false"}" name="${e}"></textarea>
      <span class="fsa-field__help" id="${e}-help-1">${s.help}</span>
    </div>`}}}function be(){return{getSteppedControls:s=>{String("dwc-"+t());let e="fsa-stepped-control__item--";s.directional?e+="pull":e+="push";let a=`<div class="fsa-stepped-control ${s.classes}">
      <div class="fsa-stepped-control__bd">`;return s.status!=""&&(a+=`<div class="fsa-stepped-control__message ${s.directional?"fsa-stepped-control__message--fill":""}" role="status">${s.status}</div>`),a+='<div class="fsa-stepped-control__list">',s.directional||(a+='<div class="fsa-stepped-control__shim"></div>'),a+=`<div class="fsa-stepped-control__item ${s.status!=""?e:""}">
      <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
        <span class="fsa-stepped-control__btn-label">${s.secondaryLabel}</span>
      </button>
    </div>`,s.directional&&(a+='<div class="fsa-stepped-control__shim"></div>'),a+=`<div class="fsa-stepped-control__item">
      <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
        <span class="fsa-stepped-control__btn-label">${s.primaryLabel}</span>
      </button>
    </div>`,s.status!=""&&(a+="</div>"),a+="</div></div>",a}}}function me(){return{getSwitch:s=>{let e=String("dwc-"+t()),a='<span class="fsa-level fsa-level--inline">';return s.labelLeft?a+=`<label for="${e}">${s.label}</label>
      <label class="fsa-switch">
        <input ${s.isChecked?"checked":""} type="checkbox" class="fsa-switch__checkbox" id="${e}" name="${e}">
        <span class="fsa-switch__track"></span>
      </label>`:a+=`<label class="fsa-switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="${e}" name="${e}">
        <span ${s.isChecked?"checked":""} class="fsa-switch__track"></span>
      </label>
      <label for="${e}">${s.label}</label>`,a+="</span>",a}}}function ge(){return{getGrid:s=>{let e={};return e["grid-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/1"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/2"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/2"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-1-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-2-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__2/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-2"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__2/3"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-1-1-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-2-1-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/2"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-1-2"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/2"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-3-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__3/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-3"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__3/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-2-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/2"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${t()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e[s.type]}}}let u={};const{getButton:he}=W();u.button=he;const{getButtonGroup:_e}=K();u["button-group"]=_e;const{getHeader:$e}=Q();u.header=$e;const{getPageTitle:we}=X();u["page-title"]=we;const{getBreadcrumbs:ye}=Z();u.breadcrumbs=ye;const{getCheckbox:xe}=ee();u.checkbox=xe;const{getRadioGroup:Se}=se();u["radio-group"]=Se;const{getFormField:ke}=ae();u["form-field"]=ke;const{getCheckboxGroup:Ee}=le();u["checkbox-group"]=Ee;const{getSearch:Ae}=te();u.search=Ae;const{getSelect:Ce}=ne();u.select=Ce;const{getSelectField:Ie}=ie();u["select-field"]=Ie;const{getSelectMultiField:Te}=oe();u["select-multi-field"]=Te;const{getSelectMulti:Me}=ce();u["select-multi"]=Me;const{getSlider:Pe}=de();u.slider=Pe;const{getSliderField:Ne}=re();u["slider-field"]=Ne;const{getSpinbox:Fe}=pe();u.spinbox=Fe;const{getSpinboxField:He}=fe();u["spinbox-field"]=He;const{getTextInput:Re}=ue();u["text-input"]=Re;const{getTextArea:De}=ve();u["text-area"]=De;const{getSteppedControls:Le}=be();u["stepped-controls"]=Le;const{getSwitch:Oe}=me();u.switch=Oe;const{getGrid:Be}=ge();u.grid=Be;const Ge=(n=null)=>"";u.remove=Ge;function Ue(){return{getComponent:(s,e)=>{let a=t(),l="";if(s=="remove ")l=u[s](e);else{l=`<div id="dwc-${a}" class="dwc-overlay">`;try{l+=u[s](e)}catch(i){console.log("useComponents > getComponent Error: ",i)}l+="</div>"}return l}}}const{checkOnProd:qe}=V(),{showErrorGrowl:je}=z(),N=qe()?"https://usda-fpac.github.io":"http://localhost:3000",{getTop:ze,getHeaderApp:Ve,getGlobalNav:Ye}=D(N),{getMainTop:Je,steppedTabs:We,headerArea:Ke,bodyInit:Qe,steppedControls:Xe,mainBottom:Ze,frameScripts:es}=L(N),{getTemplate:ss}=J(N),{getComponent:as}=Ue();function ls(n,s=null){let e="",a=[],l=0,i=!1,v="",c={programAbbr:"NPS",programName:"National Payment System",navMenu:[{label:"Home",path:"/",isActive:"true"},{label:"Solutions",path:"/solutions",isActive:"false"},{label:"Objectives",path:"/objectives",isActive:"false"},{label:"Reports",path:"/reports",isActive:"false"}],css:"https://usda-fsa.github.io/fsa-style/css/fsa-style.min.css",layout:"default"};const f={};f["header-app"]=Ve,f["global-nav"]=Ye,f["stepped-tabs"]=We,f["page-header"]=Ke,f["main-app-area"]=Qe,f["stepped-controls"]=Xe;const $=d=>{window.addEventListener("message",r=>{r.data==="handshake"&&i!=!0?i=!0:m(r.data,d)})},m=(d,r=null)=>{d!="handshake"?(console.log("panel selected :: ",d),n.dispatch("design/setDeleteEnabled",!0),v=d):console.log("~~ logging Init Handshake ~~")},x=(d,r=null)=>(l=r||a.length+1,a[l-1]={version:l,app:d},e=d,l>1?n.dispatch("design/setUndoEnabled",!0):n.dispatch("design/setUndoEnabled",!1),l<a.length?n.dispatch("design/setRedoEnabled",!0):n.dispatch("design/setRedoEnabled",!1),n.dispatch("design/setDeleteEnabled",!1),a[l-1]),k=(d=null)=>{let r=d||l-1,g=a.find(o=>o.version==r);return x(g.app,r)},I=(d=null)=>{let r=d||l+1,g=a.find(o=>o.version==r);return x(g.app,r)},E=d=>{let r=d.action,g={},o="",b=[];try{o=d.methodName,g=d.obj,b=d.obj.arr}catch(p){console.log("Custom updateCanvas Error: ",p)}if(r=="onTemplateUpdate"&&(c.layout=o,e=ss(c)),r=="onComponentUpdate"&&(e=A(g.placementLocation,as(o,g))),r=="onCodeUpdate"){let p="";b.forEach(y=>{let T=y.data;y.type=="paragraph"&&(p+=T.text),y.type=="code"&&(p+=T.text),y.type=="rawHtml"&&(p+=T.html)}),e=A(g.placementLocation,p)}return e},A=(d,r)=>{let g=document.createElement("div");g.innerHTML=e,console.log("doc__ ",g);try{let o=g.querySelector(`#${v}`),b=String(o.outerHTML);if(e.indexOf(b)>-1){let p=e.split(b),y="";switch(d){case"replace":e=p.join(r);break;case"above":e=p[0]+r+b+p[1];break;case"below":e=p[0]+b+r+p[1];break;case"left":y=`<div class="fsa-level"><span>${r}</span><span>${b}</span></div>`,e=p[0]+y+p[1];break;case"right":y=`<div class="fsa-level"><span>${b}</span><span>${r}</span></div>`,e=p[0]+y+p[1];break;case"remove":e=p[0]+p[1];break;default:e=p.join(r);break}}else console.log(_err),C();g.remove(),v=""}catch(o){console.log(o)}return e},C=(d=null)=>{je({title:"Selection Error",msg:"Select an area or component on the Canvas. "+(d||"")})},w=()=>(e=ze({css:c.css}),e+=f["header-app"](c),e+=Je(),e+=f["stepped-tabs"],e+=f["page-header"],e+=f["main-app-area"],e+=f["stepped-controls"],e+=Ze,e+=es,e+="</body></html>",e);return{updateSource:(d,r,g=null)=>{let o="";if(g){let b=w();return o=x(b),o}if(d.cmd=="updateCanvas"){if(v!=""||r.action!="onComponentUpdate"){let b=E(r);o=x(b)}else o=a[l];return n.dispatch("design/setDeleteEnabled",!1),o}if(d.cmd=="undo")return k();if(d.cmd=="undo-version")return k(d.data);if(d.cmd=="redo")return I()},listenToFrame:$}}const ts=M(()=>P(()=>import("./BaseHeader.69433ded.js"),["assets/BaseHeader.69433ded.js","assets/disclaimer.fb19e07c.js","assets/index.a25f1613.js","assets/index.d9429370.css","assets/useNavigation.9b15bfa0.js"])),ns=M(()=>P(()=>import("./Base.b996ba1a.js"),["assets/Base.b996ba1a.js","assets/index.a25f1613.js","assets/index.d9429370.css","assets/useGrowlControls.9fb0f9fa.js"])),is=M(()=>P(()=>import("./ComponentModal.a3571288.js"),["assets/ComponentModal.a3571288.js","assets/index.a25f1613.js","assets/index.d9429370.css","assets/useGrowlControls.9fb0f9fa.js","assets/useNavigation.9b15bfa0.js"])),os={components:{baseHeader:ts,editor:ns,componentModal:is},setup(n,{emit:s}){const e=_("/design-with-code/"),a=B(),{goto:l}=j(),i=_(t()),v=_(t()),h=_(t()),{updateSource:c,listenToFrame:f}=ls(a,String(h.value)),{setModalId:$,showModal:m,hideModal:x}=Y(),k=_(t());$(k.value);const I=_(),E=_({}),A=_([]);let C=_();const w=o=>{C.value=o.app,a.dispatch("codeExport/setHtml",C.value)},F=()=>{w(c({cmd:"undo"},""))},d=()=>{w(c({cmd:"redo"},""))},r=o=>{if(E.value=o.obj,console.log("Design.vue > handleUpdateCanvas > _data",o),o.action=="onTemplateUpdate"&&w(c({cmd:"updateCanvas",data:""},o)),o.action=="onComponentUpdate"){I.value=o.methodName;let b=o.obj;if(b.hasOwnProperty("useModal")){let p=b.useModal=="true";A.value=b.showProperties.split(","),p?m(k.value):w(c({cmd:"updateCanvas",data:""},o))}else w(c({cmd:"updateCanvas",data:""},o))}},g=o=>{let b=o.obj;Object.keys(b).forEach(p=>{(b[p]==""||b[p]==null)&&E.value.hasOwnProperty(p)&&(b[p]=E.value[p])}),o.obj=b,w(c({cmd:"updateCanvas",data:""},o))};return G(()=>{f(h.value),w(c("","",!0))}),{baseUrl:e,goto:l,sourceDoc:C,editorsId:i,canvasId:v,iFrameId:h,handleUpdateCanvas:r,undo:F,redo:d,componentModalId:k,handleModalAdditions:g,methodName:I,showProperties:A}}},cs={id:"main-content",tabindex:"-1"},ds={class:"fds-section fds-section--fullscreen"},rs={class:"fds-section__bd"},ps={class:"fds-grid fds-grid--no-gutter"},fs={class:"fds-grid__1/1 fds-grid__10/12@l"},us={class:"dwc-preview fds-box fds-p--none fds-box--bg-100"},vs=["id","srcDoc"],bs={class:"fds-grid__1/1 fds-grid__2/12@l fds-p-t--m"};function ms(n,s,e,a,l,i){const v=H("editor"),h=H("component-modal");return U(),q("main",cs,[S("div",ds,[S("div",rs,[S("div",ps,[S("div",fs,[S("div",us,[S("iframe",{id:a.iFrameId,srcDoc:a.sourceDoc,title:"output",sandbox:"allow-scripts",frameborder:"0",width:"100%",height:"100%"},null,8,vs)])]),S("div",bs,[R(v,{EDITOR_TITLE:"",onEmitOnUpdate:a.handleUpdateCanvas,onEmitOnUndo:a.undo,onEmitOnRedo:a.redo},null,8,["onEmitOnUpdate","onEmitOnUndo","onEmitOnRedo"])])])])]),R(h,{MODAL_ID:a.componentModalId,CLASSES:"fds-modal--top",TITLE:"Add Properties",NAME:a.methodName,SHOW_PROPERTIES:a.showProperties,onEmitModalAdditions:a.handleModalAdditions},null,8,["MODAL_ID","NAME","SHOW_PROPERTIES","onEmitModalAdditions"])])}const gs=O(os,[["render",ms]]),ws=Object.freeze(Object.defineProperty({__proto__:null,default:gs},Symbol.toStringTag,{value:"Module"}));export{ws as D,Y as u};
