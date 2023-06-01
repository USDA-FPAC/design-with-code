
import { useUtilities } from "@/_composables/useUtilities";
import { useGrowlControls } from "../useGrowlControls";
import { useTop } from '@/_composables/Design-System/page-areas/top';
import { useBody } from "@/_composables/Design-System/page-areas/body";
import { useTemplates } from "@/_composables/Design-System/layouts/useTemplates";
import { useComponents } from "@/_composables/Design-System/useComponents";

const { checkOnProd } = useUtilities();
const { showErrorGrowl } = useGrowlControls();
const projectLocation = checkOnProd() ? 'https://usda-fpac.github.io' : 'http://localhost:3000';
const { getTop, getHeaderApp, getGlobalNav } = useTop(projectLocation);
const { getMainTop, steppedTabs, headerArea, bodyInit, steppedControls, mainBottom, frameScripts } = useBody(projectLocation);
const { getTemplate } = useTemplates(projectLocation);
const { getComponent } = useComponents(projectLocation);

export function useDesignSystemStyle(store, _frameId=null) {
  
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
    console.log('panel selected :: ', _id)
    if(_id != 'handshake') store.dispatch('design/setDeleteEnabled', true);
    selectedPanelId = _id;
  }

  const setHistory = (_app, _v=null) => {
    version = _v ? _v : appHistory.length+1;
    appHistory[version - 1] = {version: version, app: _app};

    // control interface
    if(version > 1) store.dispatch('design/setUndoEnabled', true);
    else store.dispatch('design/setUndoEnabled', false);

    if(version < appHistory.length ) store.dispatch('design/setRedoEnabled', true);
    else store.dispatch('design/setRedoEnabled', false);

    store.dispatch('design/setDeleteEnabled', false);

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

  const updateCanvas = (_payload) => {
    /*
      {
        action: 'onComponentUpdate',
        methodName: _obj.name,
        obj: _obj
      }
    */
      console.log('_payload >> ',_payload);
      
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

    if( action == "onCodeUpdate"){
      let code = ``;
      //allHtml = getTop({css:globalCss}) + getHeaderApp() + mainTop + steppedTabs + headerArea;
      data.forEach(block => {
        let data = block.data;
        if(block.type=='paragraph') code += data.text;
        if(block.type=='code') code += data.text;
        if(block.type=='rawHtml') code += data.html;
      });
      //allHtml += bodyArea + steppedControls + mainBottom + frameScripts;
      allHtml = rebuildCanvas( obj.placementLocation, code );
    }
    
    return allHtml;
  };

  const rebuildCanvas = (_location, _code) => {
    //let doc = (new DOMParser()).parseFromString("<dummy/>", 'text/xml');
    let doc = document.createElement('div');
    doc.innerHTML = allHtml;

    console.log('_location', _location);

    try {

      let source = doc.querySelector(`#${selectedPanelId}`);
      let srcStr = String(source.outerHTML);
      console.log('srcStr', srcStr);

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
            level = `<div class="fsa-level"><span>${_code}</span><span>${srcStr}</span></div>`;
            allHtml = clips[0] + level + clips[1];
            break;

          case 'right':
            level = `<div class="fsa-level"><span>${srcStr}</span><span>${_code}</span></div>`;
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

      doc.remove();
      selectedPanelId = '';
    
    } catch(_err){
      showNotFoundError(_err);
    }
    
    return allHtml;
  }

  const showNotFoundError = (_err = null) => {
    let err = _err || '';
    showErrorGrowl({
      title: 'Selection Error',
      msg: 'Select an area or component on the Canvas. ' + err
    });
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
      /* let app = updateCanvas({
        action: 'onCodeUpdate',
        methodName: '',
        obj: { arr: arr }
      }); */
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

      store.dispatch('design/setDeleteEnabled', false);
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