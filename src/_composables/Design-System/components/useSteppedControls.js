
import { v4 as uuidv4 } from "uuid";
export function useSteppedControls(){

  const getSteppedControls =(_data) => {
    let newId = String('dwc-' + uuidv4());
    let classes = 'fsa-stepped-control__item--';
    if(_data.directional) classes += 'pull';
    else classes += 'push';

    let component = `<div class="fsa-stepped-control ${_data.classes}">
      <div class="fsa-stepped-control__bd">`;
    
    if(_data.status!='') component += `<div class="fsa-stepped-control__message ${_data.directional?'fsa-stepped-control__message--fill':''}" role="status">${_data.status}</div>`;
  
    component += `<div class="fsa-stepped-control__list">`;
    if(!_data.directional) component += `<div class="fsa-stepped-control__shim"></div>`;

    component += `<div class="fsa-stepped-control__item ${_data.status!=''? classes : ''}">
      <button class="fsa-btn fsa-btn--alt fsa-btn--large fsa-stepped-control__btn" type="button">
        <span class="fsa-stepped-control__btn-label">${_data.secondaryLabel}</span>
      </button>
    </div>`;
    if(_data.directional) component += `<div class="fsa-stepped-control__shim"></div>`;
    component += `<div class="fsa-stepped-control__item">
      <button class="fsa-btn fsa-btn--primary fsa-btn--large fsa-stepped-control__btn" type="submit">
        <span class="fsa-stepped-control__btn-label">${_data.primaryLabel}</span>
      </button>
    </div>`;

    if(_data.status!='') component += `</div>`;
    component += `</div></div>`;
    return component;
  }

  return {
    getSteppedControls
  }
}
