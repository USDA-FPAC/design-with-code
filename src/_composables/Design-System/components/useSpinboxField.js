
import { v4 as uuidv4 } from "uuid";
export function useSpinboxField(){

  const getSpinboxField =(_data) => {
    let newId = String('dws-' + uuidv4());

    let component = `<div class="fsa-field ${_data.classes}">
    <label class="fsa-field__label" for="${newId}">${_data.label} ${_data.isRequired=='true'?'<span class="fsa-field__label-desc">Required</span>':''}</label>
    <div class="fsa-spinbox ${_data.classes}">
      <div class="fsa-spinbox__number">
        <input class="fsa-input fsa-spinbox__input" id="${newId}" name="${newId}" type="number" value="${_data.val}">
        </div>
        <div class="fsa-spinbox__actions" aria-hidden="true">
          <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
          <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
        </div>
      </div>
      <span class="fsa-field__help" id="${newId}-help-1">${_data.help}</span>
    </div>`
    
    return component;
  }

  return {
    getSpinboxField
  }
}

