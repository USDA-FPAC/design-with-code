
const URL = '/api/fds-dwc-navigation.json';
const HEADERS = new Headers();
HEADERS.append(
  "Authorization",
  "api_key"
);
const REQ = new Request( URL,
  {
    method: "GET",
    //HEADERS,
    mode: "cors",
    cache: "default"
  }
);

export const navigationService = {
  
  isLoaded: false,

  getNavigation: async (_callback) => {
    const response = await fetch(REQ);
    try{
      let res = await response.json();
      navigationService.requestNext( res, _callback, 'getNavigation' ); 
    } catch(_err){
      console.log( 'getNavigation' + ' Navigation SERVICE ERROR', _err)
    }
    
  },

  requestNext: (_res, _callback, _methodCalled) => {
    //console.log('METHOD',_methodCalled);
    if(_res.errors){
      _callback({ status: false, errors: _res.error });
    } else {
      _callback({ status: true, data: _res });
    }
  } 
}

