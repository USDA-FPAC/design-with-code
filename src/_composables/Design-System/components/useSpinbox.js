

import { v4 as uuidv4 } from "uuid";
export function useSpinbox(){

  const getSpinbox =(_data) => {
    let newId = String('dwc-' + uuidv4());
    let component = `<div class="fsa-spinbox ${_data.classes}">`
    component += `<div class="fsa-spinbox__number">
    <input class="fsa-input fsa-spinbox__input" id="${newId}" name="${newId}" type="number" value="${_data.val}">
    </div>
    <div class="fsa-spinbox__actions" aria-hidden="true">
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
      <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
    </div>`;
    component += `</div>`;
    return component;
  }

  return {
    getSpinbox
  }
}




  
