
import { v4 as uuidv4 } from "uuid";
export function useTextInput(){

  const getTextInput =(_data) => {
    let newId = String('dws-' + uuidv4());
    let component = `<input class="fsa-input ${_data.classes}" type="text" name="${newId}" value="${_data.val}" placeholder="${_data.placeholder}"></input>`
    return component;
  }

  return {
    getTextInput
  }
}
