import { v4 as uuidv4 } from "uuid";
export function useBody(_projectLocation=null){
  let mainTop = `
  <main id="main-content" tabindex="-1">
    <div class="fsa-section">
      <div class="fsa-section__bd">`;

  let steppedTabs = `<!-- Stepped Tabs -->
  <div id="dwc-${uuidv4()}" class="dwc-overlay">
    <nav aria-label="Breadcrumbs">
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
  </div>
  <!-- End Stepped Tabs -->`;

  const headerArea = `<div id="dwc-${uuidv4()}" class="dwc-overlay fsa-m-b--m fsa-level fsa-level--justify-between fsa-level--align-bottom">
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

  let bodyInit = `<div id="dwc-${uuidv4()}" class="dwc-overlay fsa-box fsa-text-align--center fsa-border--tertiary-300 fsa-m-t--l" style="height: 200px">Your App Here</div>`;

  let steppedControls = `<!-- Stepped Control -->
  <div class="dwc-overlay fsa-stepped-control" id="dwc-${uuidv4()}">
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

  let frameScripts = `<script>
  window.addEventListener('load',()=>{ window.top.postMessage('handshake', '${_projectLocation}') });
  window.addEventListener('message',(_evt)=>{ console.log('message from Parent',_evt.data) });
  let clickAreas = document.querySelectorAll('.dwc-overlay');
  clickAreas.forEach( item => {
    item.addEventListener('click', (_e) => {
      _e.preventDefault();
      _e.stopPropagation();
      let el = _e.currentTarget;
      window.top.postMessage(el.id, '${_projectLocation}');
    });
  });
  </script>`;

  return {
    mainTop,
    steppedTabs,
    headerArea,
    bodyInit,
    steppedControls,
    mainBottom,
    frameScripts
  }
 }