
import { v4 as uuidv4 } from "uuid";
export function useCheckbox(){

  const getCheckbox =(_data) => {
    let newId = String('dwc-' + uuidv4());
    
    let component = `<span><input class="fsa-checkbox fsa-checkbox--solo" id="${newId}" type="checkbox" name="${newId}" value="${newId}" ${_data.isSelected ? 'checked=""' : ''}>
      <label for="${newId}"><span class="fsa-sr-only">${_data.label}</span></label>
    </span>`;
    
    return component;
  }

  return {
    getCheckbox
  }
}
