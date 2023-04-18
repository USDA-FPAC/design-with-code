
export function useSelect(){

  const getSelect =(_data) => {
    
    let component = `<select class="fsa-select ${_data.classes!=''?_data.classes:''}" name="${_data.selectName}">`;  
    _data.arr.forEach(item => {
      component += `<option value="${item.val}" ${_item.isSelected?'selected="selected':''}">${item.label}</option>` 
    });
    component += `</select>`;
    
    return component;
  }

  return {
    getSelect
  }
}
