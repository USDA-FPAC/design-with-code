
import { v4 as uuidv4 } from "uuid";
export function useSelectMulti(){

  const getSelectMulti =(_data) => {
    let newId = String('dws-' + uuidv4());
    let groupName = uuidv4();
    
    let component = `<div class="fsa-select-multi ${_data.classes}" id="${newId}">
      <ul class="fsa-select-multi__list">
        <li class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check" id="${newId}-selectall" data-behavior="select-multi select-multi-all" type="checkbox" name="${newId}-selectall" value="ALL">
          <label class="fsa-select-multi__label" for="${newId}-selectall">Select all</label>
        </li>`;
    _data.arr.forEach(item => {
      component += `<li class="fsa-select-multi__item">
        <input class="fsa-checkbox fsa-select-multi__check" id="sa-${item.label}" data-behavior="select-multi" type="checkbox" name="sa-${item.label}" value="${item.label}" ${item.isChecked ? 'checked=""' : ''}>
        <label class="fsa-select-multi__label" for="sa-${item.label}">${item.label}</label>
      </li>`;
    });
    component += `</ul></div>`
    return component;
  }

  return {
    getSelectMulti
  }
}
