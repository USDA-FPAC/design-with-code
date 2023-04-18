
import { v4 as uuidv4 } from "uuid";
export function useCheckbox(){

  const getCheckbox =(_data) => {
    let newId = uuidv4();
    let boxName = uuidv4();
    
    let component = `<span><input class="fsa-checkbox fsa-checkbox--solo" id="${newId}" type="checkbox" name="${boxName}" value="${boxName}">
      <label for="${boxName}"><span class="fsa-sr-only">${_data.label}</span></label>
    </span>`;
    
    return component;
  }

  return {
    getCheckbox
  }
}
