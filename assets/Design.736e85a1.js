import{_ as C,d as x,a as E,r,u as H,c as S,w as P,k as D,b as k,o as O,e as U,l as c,m as L}from"./index.542874cf.js";import{u as I}from"./useNavigation.d744f2a6.js";import{u as N,v as w}from"./v4.f48cd14a.js";function B(d=null){let n=`<html lang="en">
  <head>
  <meta charset="UTF-8">
  <link rel="icon" href="/fpac-design-system/favicon.ico">
  <link rel="stylesheet" href="https://usda-fsa.github.io/fsa-style/css/fsa-style.min.css" />
  <link rel="stylesheet" href="/design-with-code/css/styles.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FPAC Design System</title>
  </head>`,e=`<!-- Start Global Nav Component -->
  <nav id="global-nav" class="dwc-overlay">
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link fsa-nav-global__link--active" href="#">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="#">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="#">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>

          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="#">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Global Nav Component -->`,t=`
  <header>
    <div class="fsa-tophat">
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
    </div>
    <div class="dwc-overlay fsa-header-app" id="header-app">
      <div class="fsa-header-app__bd">
        <div class="fsa-header-app__primary">
          <a class="fsa-header-app__home-link" href="#">
            <span class="dwc-overlay fsa-header-app__app-name" id="header-app-program-name">
              <!-- Your Program Abbreviation and Name -->
              <abbr class="fsa-header-app__app-abbr">CPS</abbr>
              <span class="fsa-header-app__app-full">Code Prototype Starter</span>
              <!-- End Program Addreviation and Name -->
            </span>
          </a>
        </div>
        <div class="dwc-overlay fsa-header-app__secondary" id="header-app-login">
          <span class="fsa-header-app__profile">
            <span class="fsa-header-app__profile-name">
              <button HOTSPOT class="fsa-btn fsa-btn--plain fsa-text-size--2 fsa-link:hover--white fsa-link:hover--underline" data-behavior="open-modal" aria-controls="demo-profile-modal" aria-expanded="false" type="button">
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

    ${e}
  </header>`;return{top:n,headerApp:t,globalNav:e}}function F(d=null){return{mainTop:`
  <main id="main-content" tabindex="-1">
    <div class="fsa-section">
      <div class="fsa-section__bd">`,steppedTabs:`<!-- Stepped Tabs -->
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
  <!-- End Stepped Tabs -->`,headerArea:`<div id="page-header" class="dwc-overlay fsa-m-b--m fsa-level fsa-level--justify-between fsa-level--align-bottom">
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
  </div>`,steppedControls:`<!-- Stepped Control -->
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
  </div>`,mainBottom:`
      </div>
    </div>
  </main>`}}const{checkOnProd:R}=N(),u=R()?"https://usda-fpac.github.io":"http://localhost:3000",{top:z,headerApp:G,globalNav:pa}=B(u),{mainTop:V,steppedTabs:M,headerArea:j,steppedControls:Y,mainBottom:$}=F(u);function q(){let d="",n=[],e=0,t=!1,i='<div id="main-app-area" class="dwc-overlay fsa-box fsa-text-align--center fsa-border--tertiary-300 fsa-m-t--l" style="height: 200px">Your App Here</div>';const _=`<script>
  window.addEventListener('load',()=>{ window.top.postMessage('handshake', '${u}') });
  window.addEventListener('message',(_evt)=>{ console.log('message from Parent',_evt.data) });
  let clickAreas = document.querySelectorAll('.dwc-overlay');
  clickAreas.forEach( item => {
    item.addEventListener('click', (_e) => {
      _e.preventDefault();
      _e.stopPropagation();
      let el = _e.currentTarget;
      window.top.postMessage(el.id, '${u}');
    });
  });
  <\/script>`,m=s=>{window.addEventListener("message",a=>{a.data==="handshake"&&t!=!0?t=!0:g(a.data,s)})},g=(s,a=null)=>{console.log("APP SHOULD UPDATE: ",s)},p=(s,a=null)=>(e=a||n.length+1,n[e-1]={version:e,app:s},n[e-1]),v=(s=null)=>{let a=s||e-1,l=n.find(o=>o.version==a);return p(l.app,a)},y=(s=null)=>{let a=s||e+1,l=n.find(o=>o.version==a);return p(l.app,a)},b=s=>{let a="";return d=z+G+V+M+j,s.forEach(l=>{let o=l.data;l.type=="paragraph"&&(a+=o.text),l.type=="code"&&(a+=o.text),l.type=="rawHtml"&&(a+=o.html)}),d+=a+Y+$+_,d};return{updateSource:(s,a,l=null)=>{if(l){let h=b([{id:"init",type:"rawHtml",data:{html:i}}]);return p(h)}if(s.cmd=="app"){let o=b(a);return p(o)}if(s.cmd=="undo")return v();if(s.cmd=="undo-version")return v(s.data);if(s.cmd=="redo")return y()},listenToFrame:m}}const J=x(()=>E(()=>import("./BaseHeader.358bea82.js"),["assets/BaseHeader.358bea82.js","assets/disclaimer.f0e49ce5.js","assets/index.542874cf.js","assets/index.3c6b0f54.css","assets/useNavigation.d744f2a6.js"])),K=x(()=>E(()=>import("./editor.122d859e.js"),["assets/editor.122d859e.js","assets/index.542874cf.js","assets/index.3c6b0f54.css","assets/useNavigation.d744f2a6.js","assets/v4.f48cd14a.js"])),Q={components:{baseHeader:J,editor:K},setup(d,{emit:n}){const e=r("/design-with-code/");H();const{goto:t}=I(),{updateSource:i,listenToFrame:_}=q(),m=r(w()),g=r(w()),p=r(w()),v=S(()=>{}),y=S(()=>{}),b=r(),A=r();let s=r();const a=f=>{s.value=f.app},l=()=>{a(i({cmd:"undo"},""))},o=()=>{a(i({cmd:"redo"},""))},h=f=>{a(i({cmd:"app",data:""},f))};return P([v,y],(f,T)=>{b.value=f,A.value=T}),D(()=>{_(p.value),a(i("","",!0))}),{baseUrl:e,goto:t,sourceDoc:s,editorsId:m,canvasId:g,iFrameId:p,updateHtmlCode:h,undo:l,redo:o}}},W={id:"main-content",tabindex:"-1"},X={class:"fds-section fds-section--fullscreen"},Z={class:"fds-section__bd"},aa={class:"fds-grid fds-grid--no-gutter"},sa={class:"fds-grid__1/1 fds-grid__3/4@l"},ea={class:"dwc-preview fds-box fds-p--none fds-box--bg-100"},ta=["id","srcDoc"],la={class:"fds-grid__1/1 fds-grid__1/4@l fds-p-t--m"};function oa(d,n,e,t,i,_){const m=k("editor");return O(),U("main",W,[c("div",X,[c("div",Z,[c("div",aa,[c("div",sa,[c("div",ea,[c("iframe",{id:t.iFrameId,srcDoc:t.sourceDoc,title:"output",sandbox:"allow-scripts",frameborder:"0",width:"100%",height:"100%"},null,8,ta)])]),c("div",la,[L(m,{EDITOR_TITLE:"Tools",onEmitOnUpdate:t.updateHtmlCode,onEmitOnUndo:t.undo,onEmitOnRedo:t.redo},null,8,["onEmitOnUpdate","onEmitOnUndo","onEmitOnRedo"])])])])])])}const ra=C(Q,[["render",oa]]);export{ra as default};
