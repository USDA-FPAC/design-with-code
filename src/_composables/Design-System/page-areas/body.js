 export function useBody(_projectLocation=null){
  let mainTop = `
  <main id="main-content" tabindex="-1">
    <div class="fsa-section">
      <div class="fsa-section__bd">`;

  let steppedTabs = `<!-- Stepped Tabs -->
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
  <!-- End Stepped Tabs -->`;

  const headerArea = `<div id="page-header" class="dwc-overlay fsa-m-b--m fsa-level fsa-level--justify-between fsa-level--align-bottom">
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
  </div>`;

  let steppedControls = `<!-- Stepped Control -->
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
  </div>`;

  let mainBottom = `
      </div>
    </div>
  </main>`;

  return {
    mainTop,
    steppedTabs,
    headerArea,
    steppedControls,
    mainBottom
  }
 }