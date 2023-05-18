
import { v4 as uuidv4 } from "uuid";
export function useSelectField(){

  const getSelectField =(_data) => {

    let newId = String('dws-' + uuidv4());

    let component = `<div class="fsa-field ${_data.classes}">
      <label class="fsa-field__label" for="${newId}">${_data.label} ${_data.isRequired=='true'?'<span class="fsa-field__label-desc">Required</span>':''}</label>
      <select id="${newId}" class="fsa-select fsa-field__item" aria-describedby="${newId}-help-1" aria-required="${_data.isRequired=='true'?'true':'false'}" name="${newId}">`;  
      _data.arr.forEach(item => {
        component += `<option value="${item.val}" ${item.isSelected?'selected="selected':''}">${item.label}</option>` 
      });
      component += `</select>
      <span class="fsa-field__help" id="${newId}-help-1">${_data.help}</span>
    </div>`;
    
    return component;
  }

  return {
    getSelectField
  }
}
