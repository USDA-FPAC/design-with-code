

import { v4 as uuidv4 } from "uuid";
export function useBreadcrumbs(){

  const getBreadcrumbs =(_data) => {
    let newId = String('dwc-' + uuidv4());
    
    let component = `<div class="fsa-breadcrumb" id="${newId}">
      <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
        <ol class="fsa-breadcrumb__list">`;

    _data.arr.forEach(item => {
      component += `<li class="fsa-breadcrumb__item"><a href="${item.path}" class="fsa-breadcrumb__link">`;
      if(item.svg){
        component += `${item.svg}`;
      }
      component += `${item.label}</a></li>`;
    });
    component += `</ol></nav></div>`;
    
    return component;
  }

  return {
    getBreadcrumbs
  }
}
