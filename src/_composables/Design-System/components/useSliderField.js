

import { v4 as uuidv4 } from "uuid";
export function useSliderField(){

  const getSliderField =(_data) => {
    let newId = String('dwc-' + uuidv4());

    let component = `<div class="fsa-field ${_data.classes}">
      <label class="fsa-field__label" for="${newId}">${_data.label} ${_data.isRequired=='true'?'<span class="fsa-field__label-desc">Required</span>':''}</label>
      <div class="fsa-level">
        <span class="fsa-level__item--grow-auto">
          <input class="fsa-slider ${_data.classes}" id="${newId}" name="${newId}" type="range" min="${_data.min}" max="${_data.max}" value="${_data.val}" step="${_data.step}"></input>
        </span>
        <span><output id="output-${newId}" name="output-${newId}" for="${newId}">99</output></span>
      </div>
      <span class="fsa-field__help" id="${newId}-help-1">${_data.help}</span>
    </div>`

    return component;
  }

  return {
    getSliderField
  }
}
