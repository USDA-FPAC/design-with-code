
import { v4 as uuidv4 } from "uuid";
export function useTextArea(){

  const getTextArea =(_data) => {
    let newId = String('dwc-' + uuidv4());

    let component = `<div class="fsa-field ${_data.classes}">
    <label class="fsa-field__label" for="${newId}">${_data.label} ${_data.isRequired=='true'?'<span class="fsa-field__label-desc">Required</span>':''}</label>
      <textarea class="fsa-textarea fsa-field__item" placeholder="${_data.prompt}" id="${newId}" aria-describedby="${newId}-help-1" aria-required="${_data.isRequired=='true'?'true':'false'}" name="${newId}"></textarea>
      <span class="fsa-field__help" id="${newId}-help-1">${_data.help}</span>
    </div>`
    
    return component;
  }

  return {
    getTextArea
  }
}