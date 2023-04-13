
export function useTop(_projectLocation=null) {

  const getTop = (_data=null) => {
    let h = ``;

    if(_data != null || _data != ''){
      h = `<html lang="en">
      <head>
      <meta charset="UTF-8">
      <link rel="icon" href="/fpac-design-system/favicon.ico">
      <link rel="stylesheet" href="${_data.css}" />
      <link rel="stylesheet" href="/design-with-code/css/styles.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>FPAC Design System</title>
      </head>`;
    } else {
      h = `<html lang="en">
      <head>
      <meta charset="UTF-8">
      <link rel="icon" href="/fpac-design-system/favicon.ico">
      <link rel="stylesheet" href="https://usda-fsa.github.io/fsa-style/css/fsa-style.min.css" />
      <link rel="stylesheet" href="/design-with-code/css/styles.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>FPAC Design System</title>
      </head>`;
    }

    return h;
  }
  
  const getGlobalNav = (_data=null, _layout=null) => {
    let h = ``;
    if(_data != null || _data != ''){
      h = `<!-- Start Global Nav Component -->
      <nav id="global-nav" class="dwc-overlay">
        <div class="fsa-nav-global ${_layout=='fullscreen'?'fsa-nav-global--fullscreen':''}">
          <div class="fsa-nav-global__bd">
            <ul class="fsa-nav-global__list" aria-label="Primary Navigation">`;
      
      let data = _data.navMenu;      
      data.forEach(item => {
        h += `<li class="fsa-nav-global__list-item">
                <a class="fsa-nav-global__link ${item.isActive=='true'?'fsa-nav-global__link--active':''}" href="${item.path}">
                  <span class="fsa-nav-global__text">${item.label}</span>
                </a>
              </li>`;
      });
                    
      h += `</ul>
          </div>
        </div>
      </nav>
      <!-- End Global Nav Component -->`;
      return h;
    } else {
      `<!-- Start Global Nav Component -->
      <nav id="global-nav" class="dwc-overlay">
        <div class="fsa-nav-global ${_layout=='fullscreen'?'fsa-nav-global--fullscreen':''}">
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
      <!-- End Global Nav Component -->`;
      return h
    }
  }

  const getHeaderApp = (_data=null) => {
    let layout = '';
    try{
      layout = _data.layout
    } catch(_err){
      console.log(_err, 'getHeaderApp > no layout data passed')
    }

    let h = `<header>
    <div class="fsa-tophat ${layout=='fullscreen'?'fsa-tophat--fullscreen':''}">
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
    </div>`;
    if(_data != null || _data != ''){
      h +=`<div class="dwc-overlay fsa-header-app ${layout=='fullscreen'?'fsa-header-app--fullscreen':''}" id="header-app">
          <div class="fsa-header-app__bd">
            <div class="fsa-header-app__primary">
              <a class="fsa-header-app__home-link" href="#">
                <span class="dwc-overlay fsa-header-app__app-name" id="header-app-program-name">
                  <!-- Your Program Abbreviation and Name -->
                  <abbr class="fsa-header-app__app-abbr">${_data.programAbbr}</abbr>
                  <span class="fsa-header-app__app-full">${_data.programName}</span>
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

        ${getGlobalNav(_data, layout)}
      </header>`;
    } else {
    
      h +=`<div class="dwc-overlay fsa-header-app" id="header-app">
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

          ${getGlobalNav(_data, _layout)}
        </header>`;
    }

    return h;
  }
  

  return {
    getTop,
    getHeaderApp,
    getGlobalNav
  }



}