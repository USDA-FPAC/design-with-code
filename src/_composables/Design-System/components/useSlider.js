
import { v4 as uuidv4 } from "uuid";
export function useSlider(){

  const getSlider =(_data) => {
    let newId = String('dwc-' + uuidv4());
    
    let component = `<input class="fsa-slider ${_data.classes}" id="${newId}" name="${newId}" type="range" min="${_data.min}" max="${_data.max}" value="${_data.val}" step="${_data.step}"></input>`
    return component;
  }

  return {
    getSlider
  }
}
