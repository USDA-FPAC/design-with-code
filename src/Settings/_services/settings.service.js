
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
  setStorageHistory(arr);
  let newArr = getStorageHistory();  
  return newArr
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
      settingsService.requestNext( res, _callback, 'setHistory' ); 
    } catch(_err){
      console.log( 'setHistory' + ' Settings SERVICE ERROR', _err)
    }
  },

  replaceLocalHistory: async (_payload, _callback=null) => {
    console.log('setLocalHistory()')
    let history = setStorageHistory(_payload);
    try{
      let res = history;
      settingsService.requestNext( res, _callback, 'setHistory' ); 
    } catch(_err){
      console.log( 'setHistory' + ' Settings SERVICE ERROR', _err)
    }
  },

  requestNext: (_res, _callback, _methodCalled) => {
    console.log('METHOD',_methodCalled);
    console.log('_res',_res)
    _callback({ status: true, data: _res });
  } 
}

