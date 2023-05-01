
import { v4 as uuidv4 } from "uuid";
export function useRadioGroup(){

  const getRadioGroup =(_data) => {
    let newId = String('dws-' + uuidv4());
    let groupName = uuidv4();
    
    let component = `<div class="fsa-field ${_data.classes}"><label class="fsa-field__label" id="${newId}">${_data.prompt}</label><ul class="fsa-form-list" aria-labelledby="${newId}">`;  
    _data.arr.forEach(item => {
      component += `<li><span><input class="fsa-radio" id="${item.id}" ${_data.isDisabled?'disabled="disabled"':''} type="radio" name="${groupName}"><label for="${item.id}">${item.label}</label></span></li>` 
    });
    component += `</ul><span class="fsa-field__help" id="${newId}-help">${_data.help}</span></div>`;
    
    return component;
  }

  return {
    getRadioGroup
  }
}
