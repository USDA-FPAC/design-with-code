
import { v4 as uuidv4 } from "uuid";
export function useSwitch(){

  const getSwitch =(_data) => {
    let newId = String('dws-' + uuidv4());
    let component = `<span class="fsa-level fsa-level--inline">`;

    if(_data.labelLeft){
      component += `<label for="${newId}">${_data.label}</label>
      <label class="fsa-switch">
        <input ${_data.isChecked?'checked':''} type="checkbox" class="fsa-switch__checkbox" id="${newId}" name="${newId}">
        <span class="fsa-switch__track"></span>
      </label>`;
    
    } else {
      component += `<label class="fsa-switch">
        <input type="checkbox" class="fsa-switch__checkbox" id="${newId}" name="${newId}">
        <span ${_data.isChecked?'checked':''} class="fsa-switch__track"></span>
      </label>
      <label for="${newId}">${_data.label}</label>`;
    }

    component += `</span>`;

    return component;
  }

  return {
    getSwitch
  }
}