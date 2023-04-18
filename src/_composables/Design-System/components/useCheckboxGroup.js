
import { v4 as uuidv4 } from "uuid";
export function useCheckboxGroup(){

  const getCheckboxGroup = (_data) => {
    let newId = uuidv4();
    let groupName = uuidv4();
    
    let component = `<ul class="fsa-form-list" aria-label="${_data.prompt}">`;
    _data.arr.forEach(item => {
      component += `<span>
        <input class="fsa-checkbox" id="${newId}-${item.label}" type="checkbox" name="${groupName}" value="${item.label}" ${item.isChecked ? 'checked=""' : ''}>
        <label for="${newId}-${item.label}">${item.label}</label>
      </span>`
    });
    component += `</ul>`
    return component;
  }

  return {
    getCheckboxGroup
  }
}
