import{r as w,_ as j,d as F,a as L,u as Y,c as K,w as J,k as W,b as z,o as X,e as Z,l as y,m as U,t as R}from"./index.4efb4425.js";import{u as Q}from"./useNavigation.19b233b5.js";import{u as ee,a as se}from"./useGrowlControls.5be3ae75.js";import{v as l}from"./v4.83dbd2d9.js";function ae(){const n=w(""),s=w({}),e=w({}),a=u=>{let r=document.getElementById(u);r.setAttribute("aria-expanded",!0),r.setAttribute("aria-hidden","false"),r.addEventListener("keydown",i);let h='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',g=r.querySelectorAll(h);g=Array.prototype.slice.call(g),s.value=g[0],e.value=g[g.length-1],s.value.focus();let A=document.getElementsByTagName("body")[0];A.className=A.className+" fds-modal-scroll-fix",setTimeout(function(){r.focus()},200)},t=u=>{document.getElementById(u).setAttribute("aria-hidden","true");let h=document.getElementsByTagName("body")[0];h.className=h.className.replace(" fds-modal-scroll-fix","");let g=document.querySelector("[data-modal-origin]");g&&(g.removeAttribute("data-modal-origin"),g.setAttribute("aria-expanded","false"),g.focus())},i=u=>{u.keyCode===9&&(u.shiftKey?document.activeElement===s.value&&(u.preventDefault(),e.value.focus()):document.activeElement===e.value&&(u.preventDefault(),s.value.focus())),u.keyCode===27&&closeModal()};return{setModalId:u=>{n.value=u},getModalId:()=>n.value,showModal:a,hideModal:t}}function q(n=null){const s=(t=null)=>{let i="";return t!=null||t!=""?i=`<html lang="en">
      <head>
      <meta charset="UTF-8">
      <link rel="icon" href="/fpac-design-system/favicon.ico">
      <link rel="stylesheet" href="${t.css}" />
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
      </head>`,i+="<body>",i},e=(t=null,i=null)=>{let f="";return t!=null||t!=""?(f=`<!-- Start Global Nav Component -->
      <nav id="dwc-${l()}" class="dwc-overlay">
        <div class="fsa-nav-global ${i=="fullscreen"?"fsa-nav-global--fullscreen":""}">
          <div class="fsa-nav-global__bd">
            <ul class="fsa-nav-global__list" aria-label="Primary Navigation">`,t.navMenu.forEach(u=>{f+=`<li class="fsa-nav-global__list-item">
                <a class="fsa-nav-global__link ${u.isActive=="true"?"fsa-nav-global__link--active":""}" href="${u.path}">
                  <span class="fsa-nav-global__text">${u.label}</span>
                </a>
              </li>`}),f+=`</ul>
          </div>
        </div>
      </nav>
      <!-- End Global Nav Component -->`,f):(`${l()}`,i=="fullscreen",f)};return{getTop:s,getHeaderApp:(t=null)=>{let i="";try{i=t.layout}catch(S){console.log(S,"getHeaderApp > no layout data passed")}let f=`<header>
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
    </div>`;return t!=null||t!=""?f+=`<div class="dwc-overlay fsa-header-app ${i=="fullscreen"?"fsa-header-app--fullscreen":""}" id="dwc-${l()}">
          <div class="fsa-header-app__bd">
            <div class="fsa-header-app__primary">
              <a class="fsa-header-app__home-link" href="#">
                <span class="dwc-overlay fsa-header-app__app-name" id="dwc-${l()}">
                  <!-- Your Program Abbreviation and Name -->
                  <abbr class="fsa-header-app__app-abbr">${t.programAbbr}</abbr>
                  <span class="fsa-header-app__app-full">${t.programName}</span>
                  <!-- End Program Abbreviation and Name -->
                </span>
              </a>
            </div>
            <div class="dwc-overlay fsa-header-app__secondary" id="dwc-${l()}">
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

        ${e(t,i)}
      </header>`:f+=`<div class="dwc-overlay fsa-header-app" id="dwc-${l()}">
            <div class="fsa-header-app__bd">
              <div class="fsa-header-app__primary">
                <a class="fsa-header-app__home-link" href="#">
                  <span class="dwc-overlay fsa-header-app__app-name" id="dwc-${l()}">
                    <!-- Your Program Abbreviation and Name -->
                    <abbr class="fsa-header-app__app-abbr">CPS</abbr>
                    <span class="fsa-header-app__app-full">Code Prototype Starter</span>
                    <!-- End Program Abbreviation and Name -->
                  </span>
                </a>
              </div>
              <div class="dwc-overlay fsa-header-app__secondary" id="dwc-${l()}">
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

          ${e(t,_layout)}
        </header>`,f},getGlobalNav:e}}function V(n=null){const s=(u=null)=>`<main id="main-content" tabindex="-1">
    <div class="fsa-section ${u=="fullscreen"?"fsa-section--fullscreen":""}">
      <div class="fsa-section__bd">`,e=`<div id="dwc-${l()}" class="dwc-overlay">
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
  </div>`,a=`<div id="dwc-${l()}" class="dwc-overlay fsa-m-b--m fsa-level fsa-level--justify-between fsa-level--align-bottom">
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
  </div>`;let t=`<div id="dwc-${l()}" class="dwc-overlay fsa-box fsa-text-align--center fsa-border--tertiary-300 fsa-m-t--l" style="height: 200px">Your App Here</div>`,i=`<!-- Stepped Control -->
  <div class="dwc-overlay fsa-stepped-control" id="dwc-${l()}">
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
  </div>`,f=`
      </div>
    </div>
  </main>`,S=`<script>
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
  <\/script>`;return{getMainTop:s,steppedTabs:e,headerArea:a,bodyInit:t,steppedControls:i,mainBottom:f,frameScripts:S}}function te(n){const{getTop:s,getHeaderApp:e}=q(n),{getMainTop:a,mainBottom:t}=V(n);let i="",f=`<script>
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
  <\/script>`,S='<div id="main-app-area" class="dwc-overlay fsa-box fsa-text-align--center fsa-border--tertiary-300 fsa-m-t--l" style="height: 200px">Your App Here</div>';return{getTemplate:(r=null)=>{let h=r.css!=null?r.css:null,g=r.layout!=null?r.layout:null;return i=s({css:h}),i+=e(r,g),i+=a(g),i+=S,i+=t,i+=f,i}}}function le(){return{getButton:s=>`<button class="fsa-btn ${s.classes}" role="button" type="button" title="${s.prompt}">${s.label}</button>`}}function ne(){return{getButtonGroup:s=>{let e=`<span class="fsa-btn-group ${s.classes}" role="group" aria-label="Label describing this group">`;return s.arr.forEach(a=>e+=`<button class="fsa-btn-group__item ${a.classes}" type="button">${a.label}</button>`),e+="</span>",e}}}function ie(){return{getHeader:s=>`<${s.type==""?"H2":s.type}>${s.label}</${s.type==""?"H2":s.type}>`}}function oe(){return{getPageTitle:s=>{let a=`<div id="${String("dwc-"+l())}" class="fsa-m-b--m fsa-level fsa-level--justify-between fsa-level--align-bottom">
      <div>
        <h1 class="fsa-m-t--m">${s.label}</h1>
      </div>`;return s.arr&&(a+='<div class="fsa-level">',s.arr.forEach(t=>{a+=`<span>
          <button class="fsa-btn ${t.classes}" type="button">${t.label}</button>
        </span>`}),a+="</div>"),a+="</div>",a}}}function ce(){return{getBreadcrumbs:s=>{let a=`<div class="fsa-breadcrumb" id="${String("dwc-"+l())}">
      <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
        <ol class="fsa-breadcrumb__list">`;return s.arr.forEach(t=>{a+=`<li class="fsa-breadcrumb__item"><a href="${t.path}" class="fsa-breadcrumb__link">`,t.svg&&(a+=`${t.svg}`),a+=`${t.label}</a></li>`}),a+="</ol></nav></div>",a}}}function de(){return{getCheckbox:s=>{let e=String("dwc-"+l());return`<span><input class="fsa-checkbox fsa-checkbox--solo" id="${e}" type="checkbox" name="${e}" value="${e}" ${s.isSelected?'checked=""':""}>
      <label for="${e}"><span class="fsa-sr-only">${s.label}</span></label>
    </span>`}}}function re(){return{getRadioGroup:s=>{let e=String("dwc-"+l()),a=l(),t=`<div class="fsa-field ${s.classes}"><label class="fsa-field__label" id="${e}">${s.prompt}</label><ul class="fsa-form-list" aria-labelledby="${e}">`;return s.arr.forEach(i=>{t+=`<li><span><input class="fsa-radio" id="${i.id}" ${s.isDisabled?'disabled="disabled"':""} type="radio" name="${a}"><label for="${i.id}">${i.label}</label></span></li>`}),t+=`</ul><span class="fsa-field__help" id="${e}-help">${s.help}</span></div>`,t}}}function pe(){return{getFormField:s=>{let e=String("dwc-"+l());return`<div class="fsa-field ${s.classes}">
    <label class="fsa-field__label" for="${e}">${s.label} ${s.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <input class="fsa-input fsa-field__item" id="${e}" name="${e}" aria-describedby="${e}-help-1" aria-required="${s.isRequired?"true":"false"}" type="${s.type}" placeholder="${s.prompt}" value="">
      <span class="fsa-field__help" id="${e}-help-1">${s.help}</span>
    </div>`}}}function fe(){return{getCheckboxGroup:s=>{let e=String("dwc-"+l()),a=l(),t=`<ul class="fsa-form-list" aria-label="${s.prompt}">`;return s.arr.forEach(i=>{t+=`<span>
        <input class="fsa-checkbox" id="${e}-${i.label}" type="checkbox" name="${a}" value="${i.label}" ${i.isSelected?'checked=""':""}>
        <label for="${e}-${i.label}">${i.label}</label>
      </span>`}),t+="</ul>",t}}}function ue(){return{getSearch:s=>{let e=String("dwc-"+l());return`<div class="fsa-search" role="search">
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
    </div>`}}}function ve(){return{getSelect:s=>{let e=`<select class="fsa-select ${s.classes!=""?s.classes:""}" name="${s.name}">`;return s.arr.forEach(a=>{e+=`<option value="${a.val}" ${_item.isSelected?'selected="selected':""}">${a.label}</option>`}),e+="</select>",e}}}function be(){return{getSelectField:s=>{let e=String("dwc-"+l()),a=`<div class="fsa-field ${s.classes}">
      <label class="fsa-field__label" for="${e}">${s.label} ${s.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <select id="${e}" class="fsa-select fsa-field__item" aria-describedby="${e}-help-1" aria-required="${s.isRequired=="true"?"true":"false"}" name="${e}">`;return s.arr.forEach(t=>{a+=`<option value="${t.val}" ${t.isSelected?'selected="selected':""}">${t.label}</option>`}),a+=`</select>
      <span class="fsa-field__help" id="${e}-help-1">${s.help}</span>
    </div>`,a}}}function me(){return{getSelectMultiField:s=>{let e=String("dwc-"+l()),a=`<div class="fsa-field ${s.classes}">
      <label class="fsa-field__label" for="${e}">${s.label} ${s.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <div class="fsa-select-multi fsa-field__item" id="${e}">
        <ul class="fsa-select-multi__list">
          <li class="fsa-select-multi__item">
            <input class="fsa-checkbox fsa-select-multi__check" id="${e}-selectall" data-behavior="select-multi select-multi-all" type="checkbox" name="${e}-selectall" value="ALL">
            <label class="fsa-select-multi__label" for="${e}-selectall">Select all</label>
          </li>`;return s.arr.forEach(t=>{a+=`<li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-${t.label}" data-behavior="select-multi" type="checkbox" name="sa-${t.label}" value="${t.label}" ${t.isChecked?'checked=""':""}>
        <label class="fsa-select-multi__label" for="sa-${t.label}">${t.label}</label>
      </li>`}),a+=`</ul></div><span class="fsa-field__help" id="${e}-help-1">${s.help}</span></div>`,a}}}function ge(){return{getSelectMulti:s=>{let e=String("dwc-"+l());l();let a=`<div class="fsa-select-multi ${s.classes}" id="${e}">
      <ul class="fsa-select-multi__list">
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="${e}-selectall" data-behavior="select-multi select-multi-all" type="checkbox" name="${e}-selectall" value="ALL">
          <label class="fsa-select-multi__label" for="${e}-selectall">Select all</label>
        </li>`;return s.arr.forEach(t=>{a+=`<li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-${t.label}" data-behavior="select-multi" type="checkbox" name="sa-${t.label}" value="${t.label}" ${t.isChecked?'checked=""':""}>
        <label class="fsa-select-multi__label" for="sa-${t.label}">${t.label}</label>
      </li>`}),a+="</ul></div>",a}}}function he(){return{getSlider:s=>{let e=String("dwc-"+l());return`<input class="fsa-slider ${s.classes}" id="${e}" name="${e}" type="range" min="${s.min}" max="${s.max}" value="${s.val}" step="${s.step}"></input>`}}}function _e(){return{getSliderField:s=>{let e=String("dwc-"+l());return`<div class="fsa-field ${s.classes}">
      <label class="fsa-field__label" for="${e}">${s.label} ${s.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <div class="fsa-level">
        <span class="fsa-level__item--grow-auto">
          <input class="fsa-slider ${s.classes}" id="${e}" name="${e}" type="range" min="${s.min}" max="${s.max}" value="${s.val}" step="${s.step}"></input>
        </span>
        <span><output id="output-${e}" name="output-${e}" for="${e}">99</output></span>
      </div>
      <span class="fsa-field__help" id="${e}-help-1">${s.help}</span>
    </div>`}}}function $e(){return{getSpinbox:s=>{let e=String("dwc-"+l()),a=`<div class="fsa-spinbox ${s.classes}">`;return a+=`<div class="fsa-spinbox__number">
    <input class="fsa-input fsa-spinbox__input" id="${e}" name="${e}" type="number" value="${s.val}">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>`,a+="</div>",a}}}function we(){return{getSpinboxField:s=>{let e=String("dwc-"+l());return`<div class="fsa-field ${s.classes}">
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
    </div>`}}}function ye(){return{getTextInput:s=>{let e=String("dwc-"+l());return`<input class="fsa-input ${s.classes}" type="text" name="${e}" value="${s.val}" placeholder="${s.placeholder}"></input>`}}}function Se(){return{getTextArea:s=>{let e=String("dwc-"+l());return`<div class="fsa-field ${s.classes}">
    <label class="fsa-field__label" for="${e}">${s.label} ${s.isRequired=="true"?'<span class="fsa-field__label-desc">Required</span>':""}</label>
      <textarea class="fsa-textarea fsa-field__item" placeholder="${s.prompt}" id="${e}" aria-describedby="${e}-help-1" aria-required="${s.isRequired=="true"?"true":"false"}" name="${e}"></textarea>
      <span class="fsa-field__help" id="${e}-help-1">${s.help}</span>
    </div>`}}}function xe(){return{getSteppedControls:s=>{String("dwc-"+l());let e="fsa-stepped-control__item--";s.directional?e+="pull":e+="push";let a=`<div class="fsa-stepped-control ${s.classes}">
      <div class="fsa-stepped-control__bd">`;return s.status!=""&&(a+=`<div class="fsa-stepped-control__message ${s.directional?"fsa-stepped-control__message--fill":""}" role="status">${s.status}</div>`),a+='<div class="fsa-stepped-control__list">',s.directional||(a+='<div class="fsa-stepped-control__shim"></div>'),a+=`<div class="fsa-stepped-control__item ${s.status!=""?e:""}">
      <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
        <span class="fsa-stepped-control__btn-label">${s.secondaryLabel}</span>
      </button>
    </div>`,s.directional&&(a+='<div class="fsa-stepped-control__shim"></div>'),a+=`<div class="fsa-stepped-control__item">
      <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
        <span class="fsa-stepped-control__btn-label">${s.primaryLabel}</span>
      </button>
    </div>`,s.status!=""&&(a+="</div>"),a+="</div></div>",a}}}function ke(){return{getSwitch:s=>{let e=String("dwc-"+l()),a='<span class="fsa-level fsa-level--inline">';return s.labelLeft?a+=`<label for="${e}">${s.label}</label>
      <label class="fsa-switch">
        <input ${s.isChecked?"checked":""} type="checkbox" class="fsa-switch__checkbox" id="${e}" name="${e}">
        <span class="fsa-switch__track"></span>
      </label>`:a+=`<label class="fsa-switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="${e}" name="${e}">
        <span ${s.isChecked?"checked":""} class="fsa-switch__track"></span>
      </label>
      <label for="${e}">${s.label}</label>`,a+="</span>",a}}}function Ee(){return{getGrid:s=>{let e={};return e["grid-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/1"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/2"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/2"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-1-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/3"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/3"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/3"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-2-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__2/3"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/3"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-2"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/3"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__2/3"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-1-1-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-2-1-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/2"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-1-2"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/2"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-3-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__3/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-3"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__3/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e["grid-1-2-1"]=`<div class="fsa-grid fsa-m-t--l fsa-m-b--l">
      <div class="fsa-grid__1/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/2"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${l()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`,e[s.type]}}}let p={};const{getButton:Ae}=le();p.button=Ae;const{getButtonGroup:Ce}=ne();p["button-group"]=Ce;const{getHeader:Ie}=ie();p.header=Ie;const{getPageTitle:Me}=oe();p["page-title"]=Me;const{getBreadcrumbs:Te}=ce();p.breadcrumbs=Te;const{getCheckbox:Pe}=de();p.checkbox=Pe;const{getRadioGroup:Ne}=re();p["radio-group"]=Ne;const{getFormField:He}=pe();p["form-field"]=He;const{getCheckboxGroup:De}=fe();p["checkbox-group"]=De;const{getSearch:Re}=ue();p.search=Re;const{getSelect:Fe}=ve();p.select=Fe;const{getSelectField:Le}=be();p["select-field"]=Le;const{getSelectMultiField:Be}=me();p["select-multi-field"]=Be;const{getSelectMulti:Oe}=ge();p["select-multi"]=Oe;const{getSlider:Ge}=he();p.slider=Ge;const{getSliderField:ze}=_e();p["slider-field"]=ze;const{getSpinbox:Ue}=$e();p.spinbox=Ue;const{getSpinboxField:qe}=we();p["spinbox-field"]=qe;const{getTextInput:Ve}=ye();p["text-input"]=Ve;const{getTextArea:je}=Se();p["text-area"]=je;const{getSteppedControls:Ye}=xe();p["stepped-controls"]=Ye;const{getSwitch:Ke}=ke();p.switch=Ke;const{getGrid:Je}=Ee();p.grid=Je;const We=(n=null)=>"";p.remove=We;function Xe(){return{getComponent:(s,e)=>{let a=l(),t="";if(s=="remove ")t=p[s](e);else{t=`<div id="dwc-${a}" class="dwc-overlay">`;try{t+=p[s](e)}catch(i){console.log("useComponents > getComponent Error: ",i)}t+="</div>"}return t}}}const{checkOnProd:Ze}=se(),{showErrorGrowl:Qe}=ee(),B=Ze()?"https://usda-fpac.github.io":"http://localhost:3000",{getTop:es,getHeaderApp:ss,getGlobalNav:as}=q(B),{getMainTop:ts,steppedTabs:ls,headerArea:ns,bodyInit:is,steppedControls:os,mainBottom:cs,frameScripts:ds}=V(B),{getTemplate:rs}=te(B),{getComponent:ps}=Xe();function fs(n,s=null){let e="",a=[],t=0,i=!1,f="",u={programAbbr:"NPS",programName:"National Payment System",navMenu:[{label:"Home",path:"/",isActive:"true"},{label:"Solutions",path:"/solutions",isActive:"false"},{label:"Objectives",path:"/objectives",isActive:"false"},{label:"Reports",path:"/reports",isActive:"false"}],css:"https://usda-fsa.github.io/fsa-style/css/fsa-style.min.css",layout:"default"};const r={};r["header-app"]=ss,r["global-nav"]=as,r["stepped-tabs"]=ls,r["page-header"]=ns,r["main-app-area"]=is,r["stepped-controls"]=os;const h=o=>{window.addEventListener("message",d=>{d.data==="handshake"&&i!=!0?i=!0:g(d.data,o)})},g=(o,d=null)=>{o!="handshake"?(console.log("panel selected :: ",o),n.dispatch("design/setDeleteEnabled",!0),f=o):console.log("~~ logging Init Handshake ~~")},A=()=>{let o=["Clear","Red","Green","Blue","Purple","Yellow","Black","Pink","Orange","Vermillion"],d=["Mole","Rabbit","Crocodile","Pig","Horse","Gorilla","Chicken","Snake","Lizard","Panda","Hawk","Hamster"],b=["Infinitum","Alpha","Beta","Gamma","Delta","Epsilon","Zeta","Eta","Theta","Iota","Kappa","Lambda","Mu","Nu","Xi","Omicron","Pi","Rho","Sigma","Tau","Upsilon","Phi","Chi","Psi","Omega"],v=o[Math.floor(Math.random()*8)+1];return v+=" "+d[Math.floor(Math.random()*10)+1],v+=" "+b[Math.floor(Math.random()*23)+1],v},I=(o,d=null)=>(t=d||a.length+1,a[t-1]={versionNumber:t,versionName:A(),versionDate:new Date().toUTCString(),versionSize:(new Blob([o]).size/1e3).toFixed(2)+"KB",app:o},e=o,t>1?n.dispatch("design/setUndoEnabled",!0):n.dispatch("design/setUndoEnabled",!1),t<a.length?n.dispatch("design/setRedoEnabled",!0):n.dispatch("design/setRedoEnabled",!1),n.dispatch("design/setDeleteEnabled",!1),a[t-1]),H=(o=null)=>{let d=o||t-1,b=a.find(v=>v.versionNumber==d);return I(b.app,d)},O=(o=null)=>{let d=o||t+1,b=a.find(v=>v.versionNumber==d);return I(b.app,d)},T=o=>{let d=o.action,b={},v="",x=[];try{v=o.methodName,b=o.obj,x=o.obj.arr}catch($){console.log("Custom updateCanvas Error: ",$)}if(d=="onTemplateUpdate"&&(u.layout=v,e=rs(u)),d=="onComponentUpdate"&&(e=P(b.placementLocation,ps(v,b))),d=="onCodeUpdate"){let $="";x.forEach(m=>{let k=m.data;m.type=="paragraph"&&($+=k.text),m.type=="code"&&($+=k.text),m.type=="rawHtml"&&($+=k.html)}),e=P(b.placementLocation,$)}return e},P=(o,d)=>{let b=document.createElement("div");b.innerHTML=e;let v=String("dwc-"+l()),x=b.querySelector(`#${f}`);if(x!=null){let $=String(x.outerHTML);if(e.indexOf($)>-1){let m=e.split($),k="";switch(o){case"replace":e=m.join(d);break;case"above":e=m[0]+d+$+m[1];break;case"below":e=m[0]+$+d+m[1];break;case"left":k=`<div id="${v}" class="dwc-overlay fsa-level fsa-level--gutter-m"><span>${d}</span><span>${$}</span></div>`,e=m[0]+k+m[1];break;case"right":k=`<div id="${v}" class="dwc-overlay fsa-level fsa-level--gutter-m"><span>${$}</span><span>${d}</span></div>`,e=m[0]+k+m[1];break;case"remove":e=m[0]+m[1];break;default:e=m.join(d);break}}else M()}else M();return b.remove(),f="",e},M=(o=null)=>{Qe({title:"Selection Error",msg:"Select an area or component on the Canvas. "+(o||"")})},D=()=>(e=es({css:u.css}),e+=r["header-app"](u),e+=ts(),e+=r["stepped-tabs"],e+=r["page-header"],e+=r["main-app-area"],e+=r["stepped-controls"],e+=cs,e+=ds,e+="</body></html>",e);return{updateSource:(o,d,b=null)=>{let v="";if(b){let x=D();return v=I(x),v}if(o.cmd=="updateCanvas"){if(f!=""||d.action!="onComponentUpdate"){let x=T(d);v=I(x)}else v=a[t];return n.dispatch("design/setDeleteEnabled",!1),v}if(o.cmd=="undo")return H();if(o.cmd=="undo-version")return H(o.data);if(o.cmd=="redo")return O()},listenToFrame:h,setHtmlSource:o=>{e=o}}}const us=F(()=>L(()=>import("./BaseHeader.0e484bb7.js"),["assets/BaseHeader.0e484bb7.js","assets/disclaimer.cb2fcd6b.js","assets/index.4efb4425.js","assets/index.d9429370.css","assets/useNavigation.19b233b5.js"])),vs=F(()=>L(()=>import("./Base.a3305009.js"),["assets/Base.a3305009.js","assets/index.4efb4425.js","assets/index.d9429370.css","assets/v4.83dbd2d9.js"])),bs=F(()=>L(()=>import("./ComponentModal.47eac0a8.js"),["assets/ComponentModal.47eac0a8.js","assets/index.4efb4425.js","assets/index.d9429370.css","assets/v4.83dbd2d9.js","assets/useNavigation.19b233b5.js","assets/useGrowlControls.5be3ae75.js"])),ms={components:{baseHeader:us,editor:vs,componentModal:bs},setup(n,{emit:s}){const e=w("/design-with-code/"),a=Y(),{goto:t}=Q();let i=K(()=>{let c=a.getters["settings/getCurrentVersion"];return c!=null?c:null}),f=w();const S=w(l()),u=w(l()),r=w(l()),{updateSource:h,listenToFrame:g,setHtmlSource:A}=fs(a,f,String(r.value)),{setModalId:I,showModal:H,hideModal:O}=ae(),T=w(l());I(T.value);const P=w(),M=w({}),D=w([]),G=c=>{f.value=c.app,v(c)},E=c=>{a.dispatch("settings/setCurrentVersion",c),a.dispatch("codeExport/setHtml",c.app)},o=w(),d=w(),b=w(),v=c=>{o.value=c.versionName,d.value=c.versionDate,b.value=c.versionSize},x=()=>{let c=h({cmd:"undo"},"");E(c)},$=()=>{let c=h({cmd:"redo"},"");E(c)},m=c=>{let _={};if(M.value=c.obj,c.action=="onTemplateUpdate"&&(_=h({cmd:"updateCanvas",data:""},c),E(_)),c.action=="onComponentUpdate"){P.value=c.methodName;let N=c.obj;if(N.hasOwnProperty("useModal")){let C=N.useModal=="true";D.value=N.showProperties.split(","),C?H(T.value):(_=h({cmd:"updateCanvas",data:""},c),E(_))}else _=h({cmd:"updateCanvas",data:""},c),E(_)}_={}},k=c=>{let _=c.obj;Object.keys(_).forEach(C=>{(_[C]==""||_[C]==null)&&M.value.hasOwnProperty(C)&&(_[C]=M.value[C])}),c.obj=_,console.log("handleModalAdditions",c);let N=h({cmd:"updateCanvas",data:""},c);E(N)};return J(i,c=>{if(c!=null)G(c),A(c.app);else{let _=h("","",!0);E(_),A(_)}}),W(()=>{g(r.value),a.dispatch("settings/callHistory")}),{baseUrl:e,goto:t,sourceDoc:f,editorsId:S,canvasId:u,iFrameId:r,handleUpdateCanvas:m,undo:x,redo:$,componentModalId:T,handleModalAdditions:k,methodName:P,showProperties:D,currentVersionName:o,currentVersionDate:d,currentVersionSize:b}}},gs={id:"main-content",tabindex:"-1"},hs={class:"fds-section fds-section--fullscreen"},_s={class:"fds-section__bd"},$s={class:"fds-grid fds-grid--no-gutter"},ws={class:"fds-grid__1/1 fds-grid__10/12@l"},ys={class:"dwc-preview fds-box fds-p--none fds-box--bg-100"},Ss=["id","srcDoc"],xs={class:"fds-grid__1/1 fds-grid__2/12@l fds-p-t--m"},ks={class:"fds-level fds-level--gutter-s fds-m-b--none"},Es={class:"fds-text-size--0"},As=y("span",{class:"fds-text-size--0"},"|",-1),Cs={class:"fds-text-size--0"},Is=y("span",{class:"fds-text-size--0"},"|",-1),Ms={class:"fds-text-size--0"};function Ts(n,s,e,a,t,i){const f=z("editor"),S=z("component-modal");return X(),Z("main",gs,[y("div",hs,[y("div",_s,[y("div",$s,[y("div",ws,[y("div",ys,[y("iframe",{id:a.iFrameId,srcDoc:a.sourceDoc,title:"output",sandbox:"allow-scripts",frameborder:"0",width:"100%",height:"100%"},null,8,Ss)])]),y("div",xs,[U(f,{EDITOR_TITLE:"",onEmitOnUpdate:a.handleUpdateCanvas,onEmitOnUndo:a.undo,onEmitOnRedo:a.redo},null,8,["onEmitOnUpdate","onEmitOnUndo","onEmitOnRedo"])])]),y("div",ks,[y("span",Es,R(a.currentVersionName),1),As,y("span",Cs,R(a.currentVersionDate),1),Is,y("span",Ms,R(a.currentVersionSize),1)])])]),U(S,{MODAL_ID:a.componentModalId,CLASSES:"fds-modal--top",TITLE:"Add Properties",NAME:a.methodName,SHOW_PROPERTIES:a.showProperties,onEmitModalAdditions:a.handleModalAdditions},null,8,["MODAL_ID","NAME","SHOW_PROPERTIES","onEmitModalAdditions"])])}const Ps=j(ms,[["render",Ts]]),Fs=Object.freeze(Object.defineProperty({__proto__:null,default:Ps},Symbol.toStringTag,{value:"Module"}));export{Fs as D,ae as u};
