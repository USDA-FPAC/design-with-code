
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
  if(arr.length > 50) arr.pop();
  arr.push(_payload);
  return setStorageHistory(arr);
}

const setCurrentStorageVersion = (_payload) => {
  let arr = getStorageHistory();
  if(arr.length > 50) arr.pop();
  arr.splice(0, 0, _payload);
  return setStorageHistory(arr);
}


export const settingsService = {

  getLocalHistory: async (_callback) => {
    console.log('getLocalHistory()')
    let history = getStorageHistory();
    try{
      let res = history;
      settingsService.requestNext( res, _callback, 'getHistory' ); 
    } catch(_err){
      console.log( 'getHistory' + ' Settings SERVICE ERROR', _err)
    }
  },

  addLocalHistory: async (_payload, _callback=null) => {
    console.log('addLocalHistory()')
    let history = addStorageHistory(_payload);
    try{
      let res = history;
      settingsService.requestNext( res, _callback, 'addLocalHistory' ); 
    } catch(_err){
      console.log( 'addLocalHistory' + ' Settings SERVICE ERROR', _err)
    }
  },

  replaceLocalHistory: async (_payload, _callback=null) => {
    console.log('setLocalHistory()')
    let history = setStorageHistory(_payload);
    try{
      let res = history;
      settingsService.requestNext( res, _callback, 'replaceLocalHistory' ); 
    } catch(_err){
      console.log( 'replaceLocalHistory' + ' Settings SERVICE ERROR', _err)
    }
  },

  setLocalVersion: async (_payload, _callback=null) => {
    console.log('setLocalVersion()')
    let history = setCurrentStorageVersion(_payload);
    try{
      let res = history;
      settingsService.requestNext( res, _callback, 'setLocalVersion' ); 
    } catch(_err){
      console.log( 'setLocalVersion' + ' Settings SERVICE ERROR', _err)
    }
  },

  requestNext: (_res, _callback, _methodCalled) => {
    console.log('requestNext > _res ',_res);
    _callback({ status: true, data: _res });
  } 
}

