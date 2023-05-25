
import { v4 as uuidv4 } from "uuid";
export function useFormField(){

  const getFormField =(_data) => {
    let newId = String('dwc-' + uuidv4());

    let component = `<div class="fsa-field ${_data.classes}">
    <label class="fsa-field__label" for="${newId}">${_data.label} ${_data.isRequired=='true'?'<span class="fsa-field__label-desc">Required</span>':''}</label>
      <input class="fsa-input fsa-field__item" id="${newId}" name="${newId}" aria-describedby="${newId}-help-1" aria-required="${_data.isRequired?'true':'false'}" type="${_data.type}" placeholder="${_data.prompt}" value="">
      <span class="fsa-field__help" id="${newId}-help-1">${_data.help}</span>
    </div>`
    
    return component;
  }

  return {
    getFormField
  }
}

