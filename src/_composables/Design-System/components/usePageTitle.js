
import { v4 as uuidv4 } from "uuid";
export function usePageTitle(){

  const getPageTitle =(_data) => {
    let newId = String('dws-' + uuidv4());
    
    let component = `<div id="${newId}" class="dwc-overlay fsa-m-b--m fsa-level fsa-level--justify-between fsa-level--align-bottom">
      <div>
        <h1 class="fsa-m-t--m">${_data.label}</h1>
      </div>`;

    if(_data.arr){
      component += `<div class="fsa-level">`;
      _data.arr.forEach(item => {
        component += `<span>
          <button class="fsa-btn ${item.classes}" type="button">${item.label}</button>
        </span>`;
      });
      component += `</div>`;
    }

    component += `</div>`;
    
    return component;
  }

  return {
    getPageTitle
  }
}
