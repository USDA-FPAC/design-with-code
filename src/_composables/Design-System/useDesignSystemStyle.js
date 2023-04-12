import { useUtilities } from "@/_composables/useUtilities";
import { useTop } from '@/_composables/Design-System/page-areas/top';
import { useBody } from "@/_composables/Design-System/page-areas/body";

const { checkOnProd } = useUtilities();
const projectLocation = checkOnProd() ? 'https://usda-fpac.github.io' : 'http://localhost:3000';
const { top, headerApp, globalNav } = useTop(projectLocation);
const { mainTop, steppedTabs, headerArea, steppedControls, mainBottom } = useBody(projectLocation);

export function useDesignSystemStyle() {
  
  let allHtml = '';
  let appHistory = [];
  let version = 0;
  let allowComms = false;
  let selectedPanelId = '';

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

  const panels = {};
  panels['header-app'] = headerApp;
  panels['global-nav'] = globalNav;
  panels['stepped-tabs'] = steppedTabs;
  panels['page-header'] = headerArea;
  panels['main-app-area'] = bodyInit;
  panels['stepped-controls'] = steppedControls;

  const listenToFrame = (_frameId) => {
    window.addEventListener('message', (_evt) => {
      if(_evt.data === 'handshake' && allowComms != true) allowComms = true;
      else handleComms(_evt.data, _frameId);
    });
  }

  const handleComms = (_id, _frameId=null) => {
    console.log('APP SHOULD UPDATE: ', _id);

    selectedPanelId = _id;

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

  const getComponent =(_name, _data) => {
    let component = ``;
    if(_name=='button-group'){
      
      component += `<span class="fsa-btn-group" role="group" aria-label="Label describing this group">`;
      if(_data.type == 'array') _data.arr.forEach(item => component += `<button class="fsa-btn-group__item" type="button">${item.label}</button>` );
      component += `</span>`
      
      let holder = `<button class="fsa-btn-group__item" type="button">Label</button>
        <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
        <button class="fsa-btn-group__item" type="button">Label</button>
        <button class="fsa-btn-group__item" type="button">Label</button>
      </span>`
      
    }
    if(_name=='radio-group'){
      component += `<div class="fsa-field"><label class="fsa-field__label" id="radiogroupid">${_data.prompt}</label><ul class="fsa-form-list" aria-labelledby="radiogroupid">`;
      
        if(_data.type == 'array') _data.arr.forEach(item => {
          component += `<li><span><input class="fsa-radio" id="${item.id}" type="radio" name="rdogrp"><label for="${item.id}">${item.label}</label></span></li>` 
        });
        component += `</ul><span class="fsa-field__help" id="radiogroupid-help">${_data.help}</span></div>`;
    }
    return component;
  }

  const updateCanvas = (_payload) => {

    let action = _payload.action;
    let data = [];
    let name = '';
    try{
      name = _payload.details.name;
      data = _payload.details.data;
    } catch (_err) {
      console.log('updateCanvas Error: ', _err)
    }


    if( action == "onTemplateUpdate") {

    }

    if( action == "onComponentUpdate"){
      let component = getComponent(name, data);
      panels[selectedPanelId] = component;
      allHtml = top + panels['header-app'] + mainTop + panels['stepped-tabs'] + panels['page-header'];
      allHtml += panels['main-app-area'] + panels['stepped-controls'] + mainBottom + frameScripts;
    }

    if( action == "onCodeUpdate"){
      let bodyArea = ``;
      allHtml = top + headerApp + mainTop + steppedTabs + headerArea;
      data.forEach(block => {
        let data = block.data;
        if(block.type=='paragraph') bodyArea += data.text;
        if(block.type=='code') bodyArea += data.text;
        if(block.type=='rawHtml') bodyArea += data.html;
      });
      allHtml += bodyArea + steppedControls + mainBottom + frameScripts;
    }
    
    return allHtml
  }

  const updateSource = (_task, _payload, _init=null) => {
    ///// Initialize /////
    if(_init){
      let arr = [{ id:'init', type:'rawHtml', data: {html:bodyInit} }];
      let app = updateCanvas({
        action: 'onCodeUpdate',
        details: { name: '', data: arr}
      });
      let h = setHistory(app);
      return h;
    } 
    /////
    if(_task.cmd=='updateCanvas') {
      let app = updateCanvas(_payload);
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