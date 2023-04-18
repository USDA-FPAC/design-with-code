
import { v4 as uuidv4 } from "uuid";
export function useSearch(){

  const getSearch =(_data) => {
    let newId = uuidv4();

    let component = `<div class="fsa-search" role="search">
      <div class="fsa-search__bd">
        <div class="fsa-search__entry ${_data.classes!=''?_data.classes:'fsa-search__entry--grow'}">
          <label class="fsa-search__label ${_data.label!=''?'':'fsa-search__label--sr-only'}" for="${newId}">${_data.label}</label>
          <input class="fsa-input fsa-search__input" id="${newId}" type="search" name="search">
        </div>
        <div class="fsa-search__submit">
          <button class="fsa-btn fsa-search__btn ${_data.iconOnly?'fsa-search__btn--icon':''}" type="submit">
            <span class="fsa-search__text">${_data.buttonLabel}</span>
          </button>
        </div>
      </div>
    </div>`;
    
    return component;
  }

  return {
    getSearch
  }
}


