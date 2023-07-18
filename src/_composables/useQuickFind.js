
export function useQuickFind() {

  let data = {};
  let callback = ()=>{};

  let resultsHolder = {};
  let itemsArray, clickedItemsArray = [];
  let displayLimit = 0;
  let showDefault = true;
  let clickedItemDelay = 3000;

  const quickFinderInit = ( _data, _resultsHolderId, _callback ) => {
    //console.log('quickFinderInit()',_data)
    window.QFCallback = _callback;
    data = _data;
    resultsHolder = document.getElementById( _resultsHolderId );
    initBuild();
  };
  

  const initBuild = () => {
    itemsArray = dedupeArrayOfObjects(data.list);
    itemsArray.sort( (a,b) => a.name - b.name );
    if(showDefault) buildItems( getDefaultItems() );
    else buildItems(itemsArray);
  }

  const buildItems = (_arr) => {
    let newHTML = ``;
    _arr.forEach( item => {
      // add FDS Style specific parameters
      let kw = item.keywords; //String(item.keywords).split(',').join(', ');

      let str = '';
      for (const [key, value] of Object.entries(item)) {
        str += `${key}:${value}|`;
      }

      newHTML += `<div class="fds-m-b--m"><a title="${kw}" onclick="event.preventDefault(); QFCallback('${str}');" href="">
        <img class="fds-shadow--raised" src="img/interface-controls/${item.img}" />
      </a></div>`;

    });
    buildItemsHolder(newHTML);

  }

  const buildItemsHolder = (_newHTML) => { resultsHolder.innerHTML = _newHTML };

  const getDefaultItems = () => { 
    //return itemsArray.filter( item => item.isDefault == "true" ? true : false)
    return itemsArray;
  };


  const doSearch = ( _phrase ) => {
    let arr = itemsArray;
    let lowPhrase = _phrase.toLowerCase();

    let list = arr.filter( item => {
      let exists = false;

      let lowName = item.name.toLowerCase();
      let lowKeywords = item.keywords.toLowerCase();

      if(lowName.indexOf( lowPhrase ) > -1) exists = true;
      if(lowKeywords.indexOf( lowPhrase ) > -1) exists = true;

      return exists;
    });

    // Might not need to do this ??
    //list = dedupeArrayOfObjects(list);

    // Used to restrict how many items to show 0 = unlimited.
    let listToDisplay = displayLimit > 0 ? list.slice( 0, displayLimit-1) : list;
    return listToDisplay;
  }

  const searchItems = (_phrase) => {
    if(_phrase!=''){ // isn't empty
      if(_phrase.length > 2){ // run only if at least 3 characters
        // array of objects
        let matches = doSearch( _phrase );

        // Put matches in ABC order
        matches.sort( (a,b) => a.name - b.name );

        if( matches.length > 0 ) {
          buildItems(matches);
        }
      }
    } else {
      buildItems( getDefaultItems() );
    }
  }


  const setClickedStyle = (el) => {
    clickedItemsArray.push({
      prevHTML: el.innerHTML,
      el: el
    })
    el.classList.add('docs__icons__link--clicked');
    el.innerHTML = `<span class="fds-level fds-level--align-top fds-level--gutter-xs"><span><svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></span><span style="flex:0;">Component Selected</span></span>`;
    window.setTimeout(resetItem, clickedItemDelay);
  }

  const resetItem = () => {
    let items = clickedItemsArray.forEach( (item) => {
      item.el.innerHTML = item.prevHTML;
      item.el.classList.remove('docs__items__link--clicked');
    })
  }

  // A very expensive method, use sparingly
  const dedupeArrayOfObjects = ( arr ) => {
    let uniqueArray = arr.filter((item, index) => {
      let _item = JSON.stringify(item);
      return index === arr.findIndex(obj => {
        return JSON.stringify(obj) === _item;
      });
    });
    return uniqueArray;
  }

    
  return {
    quickFinderInit,
    searchItems
  }
}