import { computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useUtilities } from "@/_composables/useUtilities";
import { useTop } from '@/_composables/Design-System/page-areas/top';
import { useBody } from "@/_composables/Design-System/page-areas/body";
import { useTemplates } from "@/_composables/Design-System/layouts/useTemplates";
import { useComponents } from "@/_composables/Design-System/useComponents";

const { checkOnProd } = useUtilities();

const projectLocation = checkOnProd() ? 'https://usda-fpac.github.io' : 'http://localhost:3000';
const { getTop, getHeaderApp, getGlobalNav } = useTop(projectLocation);
const { getMainTop, steppedTabs, headerArea, bodyInit, steppedControls, mainBottom, frameScripts } = useBody(projectLocation);
const { getTemplate } = useTemplates(projectLocation);
const { getComponent } = useComponents(projectLocation);

export function useDesignSystemStyle(_store, _alertCallback, _frameId=null) {
  
  let allHtml = '';
  let frameId = _frameId;
  let appHistory = [];
  let version = 0;
  let allowComms = false;
  let selectedPanelId = '';
  let globalNav = [
    { label:'Home', path:'/', isActive:'true' },
    { label:'Solutions', path:'/solutions', isActive:'false' },
    { label:'Objectives', path:'/objectives', isActive:'false' },
    { label:'Reports', path:'/reports', isActive:'false' },
  ];
  let programData = {
    programAbbr:'NPS',
    programName:'National Payment System',
    navMenu: globalNav,
    css: 'https://usda-fsa.github.io/fsa-style/css/fsa-style.min.css',
    layout: 'default'
  };


  const panels = {};
  panels['header-app'] = getHeaderApp;
  panels['global-nav'] = getGlobalNav;
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
    if(_id != 'handshake') {
      console.log('panel selected :: ', _id)
      _store.dispatch('design/setDeleteEnabled', true);
      selectedPanelId = _id;
    } else {
      console.log('~~ logging Init Handshake ~~')
    }
  }

  const getRandomVersionName = () => {
    let colors = ["Clear","Red","Green","Blue","Purple","Yellow","Black","Pink","Orange","Vermillion"];
    let animals = ["Mole","Rabbit","Crocodile","Pig","Horse","Gorilla","Chicken","Snake","Lizard","Panda","Hawk","Hamster"];
    let greek = ["Infinitum","Alpha","Beta","Gamma","Delta","Epsilon","Zeta","Eta","Theta","Iota","Kappa","Lambda","Mu","Nu","Xi","Omicron","Pi","Rho","Sigma","Tau","Upsilon","Phi","Chi","Psi","Omega"];
    let v = colors[Math.floor(Math.random() * 8) + 1];  
    v += ' ' + animals[Math.floor(Math.random() * 10) + 1];
    v += ' ' + greek[Math.floor(Math.random() * 23) + 1];
    return v
  }

  const setHistory = (_app, _v=null) => {
    version = _v ? _v : appHistory.length+1;

    appHistory[version - 1] = {
      versionNumber: version,
      versionName: getRandomVersionName(),
      versionDate: (new Date()).toUTCString(),
      versionSize: (new Blob([_app]).size / 1000).toFixed(2) + 'KB',
      app: _app
    };
    // adding _app to allHtml to fix bug
    allHtml = _app;

    // control interface
    if(version > 1) _store.dispatch('design/setUndoEnabled', true);
    else _store.dispatch('design/setUndoEnabled', false);

    if(version < appHistory.length ) _store.dispatch('design/setRedoEnabled', true);
    else _store.dispatch('design/setRedoEnabled', false);

    _store.dispatch('design/setDeleteEnabled', false);
    //console.log('appHistory __ ',appHistory)

    return appHistory[version - 1];
  }

  const undo = (_v=null) => {
    let v = _v ? _v : version-1;
    let state = appHistory.find(item => item.versionNumber == v);
    return setHistory(state.app, v);
  }

  const redo = (_v=null) => {
    let v = _v ? _v : version + 1;
    let state = appHistory.find(item => item.versionNumber == v);
    return setHistory(state.app, v);
  }

  const updateCanvas = (_payload) => {
    /*
      {
        action: 'onComponentUpdate',
        methodName: _obj.name,
        obj: _obj
      }
    */
    //console.log('CALLING > updateCanvas > _payload >> ',_payload);
      
    let action = _payload.action;
    let obj = {};
    let methodName = '';
    let data = [];
    try{
      methodName = _payload.methodName;
      obj = _payload.obj;
      data = _payload.obj.arr;
    } catch (_err) {
      console.log('Custom updateCanvas Error: ', _err)
    }

    if( action == "onTemplateUpdate") {
      programData.layout = methodName;
      allHtml = getTemplate( programData );
    }

    if( action == "onComponentUpdate") allHtml = rebuildCanvas( obj.placementLocation, getComponent(methodName, obj) );

    //
    // Below is currently not being used
    //
    if( action == "onCodeUpdate"){
      let code = ``;
      data.forEach(block => {
        let data = block.data;
        if(block.type=='paragraph') code += data.text;
        if(block.type=='code') code += data.text;
        if(block.type=='rawHtml') code += data.html;
      });
      allHtml = rebuildCanvas( obj.placementLocation, code );
    }
    //
    //
    
    return allHtml;
  };


  const rebuildCanvas = (_location, _code) => {
    //let doc = (new DOMParser()).parseFromString("<dummy/>", 'text/xml');
    let doc = document.createElement('div');
    //console.log('allHtml',allHtml);
    doc.innerHTML = allHtml;
    //console.log('doc__ ', doc);

    let newId = String('dwc-' + uuidv4());
    let source = doc.querySelector(`#${selectedPanelId}`);
    //console.log('source__ ', source);

    if(source!=null){
      let srcStr = String(source.outerHTML);
      //console.log('srcStr__ ', srcStr);

      if( allHtml.indexOf(srcStr) > -1) {
        
        let clips = allHtml.split(srcStr);
        //console.log('clips.length', clips.length);
        let level = ``;

        switch(_location){
          case 'replace':
            allHtml = clips.join(_code);
            break;

          case 'above':
            allHtml = clips[0] + _code + srcStr + clips[1];
            break;

          case 'below':
            allHtml = clips[0] + srcStr + _code + clips[1];
            break;

          case 'left': 
            level = `<div id="${newId}" class="dwc-overlay fsa-level fsa-level--gutter-m"><span>${_code}</span><span>${srcStr}</span></div>`;
            allHtml = clips[0] + level + clips[1];
            break;

          case 'right':
            level = `<div id="${newId}" class="dwc-overlay fsa-level fsa-level--gutter-m"><span>${srcStr}</span><span>${_code}</span></div>`;
            allHtml = clips[0] + level + clips[1];
            break;

          case 'remove':
            allHtml = clips[0] + clips[1];
            break;

          default:
            allHtml = clips.join(_code);
            break;
        }

      } else {
        showNotFoundError();
      }
    } else {
      showNotFoundError();
    }

    doc.remove();
    selectedPanelId = '';
    
    return allHtml;
  }

  const showNotFoundError = (_err = null) => {
    let err = _err || '';
    _alertCallback('alerts/addAlert',
      {
        title: 'Selection Error',
        msg: 'Select an area or component on the Canvas. ' + err
      }
    );

    /* showErrorGrowl({
      title: 'Selection Error',
      msg: 'Select an area or component on the Canvas. ' + err
    }); */
  }

  const initCanvas = () => {
    //panels[selectedPanelId] = _code;
    allHtml = getTop( { css: programData.css } );
    allHtml += panels['header-app']( programData );
    allHtml += getMainTop();
    allHtml += panels['stepped-tabs'];
    allHtml += panels['page-header'];
    allHtml += panels['main-app-area'];
    allHtml += panels['stepped-controls'];
    allHtml += mainBottom;
    allHtml += frameScripts;
    allHtml += `</body></html>`;
    return allHtml
  }

  const updateSource = (_task, _payload, _init=null) => {
    ///// Initialize /////
    let h = ``;
    if(_init){
      let arr = [{ id:'init', type:'rawHtml', data: {html:bodyInit} }];

      let initApp = initCanvas();
      h = setHistory(initApp);
      return h;
    } 
    /////
    if(_task.cmd=='updateCanvas') {
      if(selectedPanelId != '' || _payload.action != 'onComponentUpdate'){
        let app = updateCanvas(_payload);
        h = setHistory(app);
      } else {
        h = appHistory[version];
      }
      _store.dispatch('design/setDeleteEnabled', false);
      return h;
    }
    if(_task.cmd=='undo') return undo();
    if(_task.cmd=='undo-version') return undo(_task.data);
    if(_task.cmd=='redo') return redo();

  }

  const setHtmlSource = (_html) => {
    allHtml = _html;
  }


  return {
    updateSource,
    listenToFrame,
    setHtmlSource
  }

}