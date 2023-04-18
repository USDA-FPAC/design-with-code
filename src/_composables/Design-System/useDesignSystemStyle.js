import { useUtilities } from "@/_composables/useUtilities";
import { useTop } from '@/_composables/Design-System/page-areas/top';
import { useBody } from "@/_composables/Design-System/page-areas/body";
import { useTemplates } from "@/_composables/Design-System/layouts/useTemplates";
import { useComponents } from "@/_composables/Design-System/useComponents";

const { checkOnProd } = useUtilities();
const projectLocation = checkOnProd() ? 'https://usda-fpac.github.io' : 'http://localhost:3000';
const { getTop, getHeaderApp, getGlobalNav } = useTop(projectLocation);
const { mainTop, steppedTabs, headerArea, bodyInit, steppedControls, mainBottom, frameScripts } = useBody(projectLocation);
const { getTemplate } = useTemplates(projectLocation);
const { getComponent } = useComponents(projectLocation);

export function useDesignSystemStyle() {
  
  let allHtml = '';
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
    selectedPanelId = _id;
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
      programData.layout = name;
      allHtml = getTemplate( programData );
    }

    if( action == "onComponentUpdate") allHtml = rebuildCanvas( getComponent(name, data) );

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
      allHtml = rebuildCanvas( code );
    }
    
    return allHtml;
  };

  const rebuildCanvas = (_code) => {
    panels[selectedPanelId] = _code;
    allHtml = getTop( { css: programData.css } );
    allHtml += panels['header-app']( programData );
    allHtml += mainTop;
    allHtml += panels['stepped-tabs'];
    allHtml += panels['page-header'];
    allHtml += panels['main-app-area'];
    allHtml += panels['stepped-controls'];
    allHtml += mainBottom;
    allHtml += frameScripts;
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