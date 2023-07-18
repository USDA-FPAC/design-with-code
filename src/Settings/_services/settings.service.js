
const VERSIONS_TO_KEEP = 50;
const SUCCESS_MESSAGE = 'success';
const FILE_EXT = '.dwcf'

const getStorageHistory = () => {
  return JSON.parse( localStorage.getItem('history') ) || [];
}

const setStorageHistory = (_payload) => {
  localStorage.setItem('history', JSON.stringify(_payload));
  let newArr = getStorageHistory();  
  return newArr
}

const addStorageHistory = (_payload) => {
  let arr = getStorageHistory();
  if(arr.length > VERSIONS_TO_KEEP) arr.pop();
  arr.push(_payload);
  return setStorageHistory(arr);
}

const setCurrentStorageVersion = (_payload) => {
  let arr = getStorageHistory();
  if(arr.length > VERSIONS_TO_KEEP) arr.pop();
  arr.splice(0, 0, _payload);
  return setStorageHistory(arr);
}

const downloadToLocal = (_version) => {
  try {
    const newLink = document.createElement("a");
    const newFile = new Blob([JSON.stringify(_version)], { type: 'text/plain' });
    newLink.href = URL.createObjectURL(newFile);
    newLink.download = _version.versionName.split(' ').join('-') + FILE_EXT;
    newLink.click();
    URL.revokeObjectURL(newLink.href);
    return SUCCESS_MESSAGE;
  } catch (_err ){
    return _err;
  }
}

const renameCurrentStorageVersion = (_name) => {
  let arr = getStorageHistory();
  let cleanName = _name;
  // check for duplicates or short names
  if( arr.some(i => i.versionName == _name) )  cleanName = _name + '_' + new Date().getMilliseconds();
  if( _name.length < 3) cleanName = _name + '-' + new Date().getMilliseconds();
  arr[0].versionName = cleanName;
  return setStorageHistory(arr);
}


export const settingsService = {

  getLocalHistory: async (_callback) => {
    //console.log('getLocalHistory()')
    let history = getStorageHistory();
    try{
      let res = history;
      settingsService.requestNext( res, _callback, 'getHistory' ); 
    } catch(_err){
      console.log( 'getHistory' + ' Settings SERVICE ERROR', _err)
    }
  },

  addLocalHistory: async (_payload, _callback=null) => {
    //console.log('addLocalHistory()')
    let history = addStorageHistory(_payload);
    try{
      let res = history;
      settingsService.requestNext( res, _callback, 'addLocalHistory' ); 
    } catch(_err){
      console.log( 'addLocalHistory' + ' Settings SERVICE ERROR', _err)
    }
  },

  replaceLocalHistory: async (_payload, _callback=null) => {
    //console.log('setLocalHistory()')
    let history = setStorageHistory(_payload);
    try{
      let res = history;
      settingsService.requestNext( res, _callback, 'replaceLocalHistory' ); 
    } catch(_err){
      console.log( 'replaceLocalHistory' + ' Settings SERVICE ERROR', _err)
    }
  },

  setLocalVersion: async (_payload, _callback=null) => {
    //console.log('setLocalVersion()')
    let history = setCurrentStorageVersion(_payload);
    try{
      let res = history;
      settingsService.requestNext( res, _callback, 'setLocalVersion' ); 
    } catch(_err){
      console.log( 'setLocalVersion' + ' Settings SERVICE ERROR', _err)
    }
  },

  downloadFile: async (_payload, _callback=null) => {
    let res = downloadToLocal(_payload);
    try{
      if(res==SUCCESS_MESSAGE){
        settingsService.requestNext( { data: res }, _callback, 'downloadFile' ); 
      } else {
        console.log( 'downloadFile' + ' Settings SERVICE ERROR', res);
        settingsService.requestNext( { errors: res }, _callback, 'downloadFile' ); 
      }
    } catch(_err){
      console.log( 'downloadFile' + ' Settings SERVICE ERROR', _err)
    }
  },

  uploadFile: async (_payload, _callback=null) => {
    let file = _payload.file;
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      let result = JSON.parse( reader.result );
      result.versionDate = (new Date()).toUTCString();
      ////// need to use an HTML validator here
      //let scrubbedResult = cleanData( result );
      settingsService.requestNext( addStorageHistory( result ), _callback, 'uploadFile' );
    }, false );
    reader.readAsText(file);
  },

  renameCurrentVersion: async (_payload, _callback=null) => {
    console.log('renameCurrentVersion()')
    let history = renameCurrentStorageVersion(_payload);
    try{
      let res = history;
      settingsService.requestNext( res, _callback, 'renameCurrentVersion' ); 
    } catch(_err){
      console.log( 'renameCurrentVersion' + ' Settings SERVICE ERROR', _err)
    }
  },

  requestNext: (_res, _callback, _methodCalled) => {
    //console.log('requestNext > _res ',_res);
    _callback({ status: true, data: _res });
  } 
}

