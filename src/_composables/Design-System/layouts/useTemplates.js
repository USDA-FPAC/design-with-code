
import { useUtilities } from "@/_composables/useUtilities";
import { useTop } from '@/_composables/Design-System/page-areas/top';
import { useBody } from "@/_composables/Design-System/page-areas/body";


export function useTemplates(_projectLocation) {

  const { getTop, getHeaderApp } = useTop(_projectLocation);
  const { getMainTop, mainBottom } = useBody(_projectLocation);

  let allHtml = ``;

  let frameScripts = `<script>
  window.addEventListener('load',()=>{ window.top.postMessage('handshake', '${_projectLocation}') });
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
      window.top.postMessage(el.id, '${_projectLocation}');
    });
  });
  </script>`;

  let bodyInit = `<div id="main-app-area" class="dwc-overlay fsa-box fsa-text-align--center fsa-border--tertiary-300 fsa-m-t--l" style="height: 200px">Your App Here</div>`;

  const getTemplate = (_data=null) => {
    let programCss = _data.css != null ? _data.css : null;
    let layout = _data.layout != null ? _data.layout : null;
    // build all HTML
    allHtml = getTop( { css: programCss } );
    allHtml += getHeaderApp(_data, layout);
    allHtml += getMainTop(layout);
    allHtml += bodyInit;
    allHtml += mainBottom;
    allHtml += frameScripts; 

    return allHtml;
  }

  return {
    getTemplate
  }
}