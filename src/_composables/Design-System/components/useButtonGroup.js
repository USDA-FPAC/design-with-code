
export function useButtonGroup(){

  const getButtonGroup =(_data) => {
    let component = `<span class="fsa-btn-group ${_data.classes}" role="group" aria-label="Label describing this group">`;
    _data.arr.forEach(item => component += `<button class="fsa-btn-group__item ${item.classes}" type="button">${item.label}</button>` );
    component += `</span>`
    return component;
  }

  return {
    getButtonGroup
  }
}