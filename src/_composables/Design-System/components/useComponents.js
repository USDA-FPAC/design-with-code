
import { v4 as uuidv4 } from "uuid";
export function useComponents(){

  const getComponent =(_name, _data) => {
    let newId = uuidv4();
    let component = `<div id="${newId}" class="dwc-overlay">`;
    if(_name=='button-group'){
      
      component += `<span class="fsa-btn-group" role="group" aria-label="Label describing this group">`;
      if(_data.type == 'array') _data.arr.forEach(item => component += `<button class="fsa-btn-group__item" type="button">${item.label}</button>` );
      component += `</span>`
      
      let holder = `<button class="fsa-btn-group__item" type="button">Label</button>
        <button class="fsa-btn-group__item fsa-btn-group__item--active" aria-selected="true" type="button">Active Label</button>
        <button class="fsa-btn-group__item" type="button">Label</button>
        <button class="fsa-btn-group__item" type="button">Label</button>
      </span>`
      
    }
    if(_name=='radio-group'){
      component += `<div class="fsa-field"><label class="fsa-field__label" id="radiogroupid">${_data.prompt}</label><ul class="fsa-form-list" aria-labelledby="radiogroupid">`;
      
        if(_data.type == 'array') _data.arr.forEach(item => {
          component += `<li><span><input class="fsa-radio" id="${item.id}" type="radio" name="rdogrp"><label for="${item.id}">${item.label}</label></span></li>` 
        });
        component += `</ul><span class="fsa-field__help" id="radiogroupid-help">${_data.help}</span></div>`;
    }
    return component + `</div>`;
  }

  return {
    getComponent
  }
}