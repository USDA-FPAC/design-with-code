
export function useDesignSystemStyle() {
  
  const codeParser = new DOMParser();
  let allHtml = ``;

  const top = `<html lang="en">
  <head>
  <meta charset="UTF-8">
  <link rel="icon" href="/fpac-design-system/favicon.ico">
  <link rel="stylesheet" href="https://usda-fsa.github.io/fsa-style/css/fsa-style.min.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FPAC Design System</title>
  </head>`;

  let headerApp = `
<header>
  <div class="fsa-tophat">
    <div class="fsa-tophat__bd">
      <div class="fsa-tophat__primary">
        <span class="fsa-tophat__agency">
          <a class="fsa-tophat__link" href="//usda.gov" title="Link to USDA homepage">
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
  <div class="fsa-header-app">
    <div class="fsa-header-app__bd">
      <div class="fsa-header-app__primary">
        <a class="fsa-header-app__home-link" href="#asdfasfd">
          <span class="fsa-header-app__app-name">
            <!-- Your Program Abbreviation and Name -->
            <abbr class="fsa-header-app__app-abbr">CPS</abbr>
            <span class="fsa-header-app__app-full">Code Prototype Starter</span>
            <!-- End Program Addreviation and Name -->
          </span>
        </a>
      </div>
      <div class="fsa-header-app__secondary">
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

  <!-- Start Global Nav Component -->
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation">
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link fsa-nav-global__link--active" href="/link.html">
              <span class="fsa-nav-global__text">Home</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="/link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="/link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>

          <li class="fsa-nav-global__list-item">
            <a class="fsa-nav-global__link" href="/link.html">
              <span class="fsa-nav-global__text">[item]</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Global Nav Component -->
</header>`;

  let mainTop = `
  <main id="main-content" tabindex="-1">
    <div class="fsa-section">
      <div class="fsa-section__bd">`;

  let steppedTabs = `<!-- Stepped Tabs -->
  <nav aria-label="Breadcrumbs">
    <div class="fsa-m-t--l" class="fsa-stepped-tabs">
      <div class="fsa-stepped-tabs__bd">
        <ol class="fsa-stepped-tabs__list">
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--complete" href="/link.html">
              <span class="fsa-stepped-tabs__text">Lorem</span>
            </a>
          </li>
          <li class="fsa-stepped-tabs__item">
            <a class="fsa-stepped-tabs__label fsa-stepped-tabs__label--active" href="/link.html" aria-current="step">
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
  <!-- End Stepped Tabs -->`;

  const headerArea = `<div class="fsa-m-b--m fsa-level fsa-level--justify-between fsa-level--align-bottom">
  <div>
    <h1 class="fsa-m-t--m">Header Goes Here</h1>
  </div>
  <div class="fsa-level fsa-hide">
    <!-- USE AREA FOR PAGE ACTIONS -->
    <span>
      <a href="#go-to-settings.html" class="fsa-btn fsa-btn--flat">Settings</a>
    </span>
    <span>
      <button class="fsa-btn fsa-btn--secondary" type="button">Import Thing</button>
    </span>
    <!-- USE AREA FOR PAGE ACTIONS -->
  </div>
</div>`;

  let bodyArea = `<div class="fsa-box fsa-text-align--center fsa-border--red fsa-m-t--l" style="height: 200px">Your App Here</div>`;

  let steppedControls = `<!-- Stepped Control -->
  <div class="fsa-stepped-control">
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
          <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
            <span class="fsa-stepped-control__btn-label">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>`;

  let mainBottom = `
      </div>
    </div>
  </main>`;


  const buildHeader = (_html) => {

  }

  const buildBody = (_data) => {
    let bodyArea = ``;
    allHtml = top + headerApp + mainTop + steppedTabs + headerArea;
    _data.forEach(block => {
      let data = block.data;

      if(block.type=='paragraph') bodyArea += data.text;
      if(block.type=='code'){
/*         let el = document.createElement('div');
        el.innerHTML = codeParser.parseFromString(data.text, 'text/html');
        let s = new XMLSerializer();
        let str = s.serializeToString( document.createTextNode(data.text) );
        bodyArea += unEscape(el.innerHTML); */
        bodyArea += data.text;
      }        
      if(block.type=='rawHtml') bodyArea += data.html;

    });
    allHtml += bodyArea + steppedControls + mainBottom;
    return allHtml
  }

  const updateSource = (_area, _blocks, _init=null) => {
    ///// Initialize /////
    if(_init) return top + headerApp + mainTop + steppedTabs + headerArea + bodyArea + steppedControls + mainBottom;
    /////
    //if(_area =='header') return buildHeader(_blocks)
    if(_area=='body') return buildBody(_blocks)
    //return {error: 'no area type'}
  }


  return {
    updateSource
  }

}