import { useUtilities } from "@/_composables/useUtilities";
import { useTop } from '@/_composables/Design-System/page-areas/top';
import { useBody } from "@/_composables/Design-System/page-areas//body";

const { checkOnProd } = useUtilities();
const projectLocation = checkOnProd() ? 'https://usda-fpac.github.io' : 'http://localhost:3000';
const { top, headerApp, globalNav } = useTop(projectLocation);
const { mainTop, steppedTabs, headerArea, steppedControls, mainBottom } = useBody(projectLocation);


export function useDesignSystemStyle() {
  
  let allHtml = '';
  let appHistory = [];
  let version = 0;
  let allowComms = false;
  let appArea = '';

  let bodyInit = `<div id="main-app-area" class="dwc-overlay fsa-box fsa-text-align--center fsa-border--tertiary-300 fsa-m-t--l" style="height: 200px">Your App Here</div>`;

  const frameScripts = `<script>
  window.addEventListener('load',()=>{ window.top.postMessage('handshake', '${projectLocation}') });
  window.addEventListener('message',(_evt)=>{ console.log('message from Parent',_evt.data) });
  let clickAreas = document.querySelectorAll('.dwc-overlay');
  clickAreas.forEach( item => {
    item.addEventListener('click', (_e) => {
      _e.preventDefault();
      _e.stopPropagation();
      let el = _e.currentTarget;
      window.top.postMessage(el.id, '${projectLocation}');
    });
  });
  </script>`;

  const listenToFrame = (_frameId) => {
    window.addEventListener('message', (_evt) => {
      if(_evt.data === 'handshake' && allowComms != true) allowComms = true;
      else handleComms(_evt.data, _frameId);
    });
  }

  const handleComms = (_id, _frameId=null) => {
    console.log('APP SHOULD UPDATE: ', _id);

    //let childWindow = document.getElementById(_frameId);
    //console.log('childWindow',childWindow.contentWindow)

  }

  const updateApp = (_id) => {
    //allHtml[_id] = ''

  }

  const setHistory = (_app, _v=null) => {
    version = _v ? _v : appHistory.length+1;
    appHistory[version - 1] = {version: version, app: _app};
    return appHistory[version - 1];
  }

  const undo = (_v=null) => {
    let v = _v ? _v : version-1;
    let state = appHistory.find(item => item.version == v);
    return setHistory(state.app, v);
  }

  const redo = (_v=null) => {
    let v = _v ? _v : version + 1;
    let state = appHistory.find(item => item.version == v);
    return setHistory(state.app, v);
  }

  const buildApp = (_data) => {
    let bodyArea = ``;
    allHtml = top + headerApp + mainTop + steppedTabs + headerArea;
    _data.forEach(block => {
      let data = block.data;
      if(block.type=='paragraph') bodyArea += data.text;
      if(block.type=='code') bodyArea += data.text;
      if(block.type=='rawHtml') bodyArea += data.html;
    });
    allHtml += bodyArea + steppedControls + mainBottom + frameScripts;
    return allHtml
  }

  const updateSource = (_task, _blocks, _init=null) => {
    ///// Initialize /////
    if(_init){
      let arr = [{ id:'init', type:'rawHtml', data: {html:bodyInit} }];
      let app = buildApp(arr);
      let h = setHistory(app);
      return h;
    } 
    /////
    if(_task.cmd=='app') {
      let app = buildApp(_blocks);
      let h = setHistory(app);
      return h;
    }
    if(_task.cmd=='undo') return undo();
    if(_task.cmd=='undo-version') return undo(_task.data);
    if(_task.cmd=='redo') return redo();
  }


  return {
    updateSource,
    listenToFrame
  }

}