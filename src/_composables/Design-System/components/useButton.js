
export function useButton(){

  const getButton =(_data) => {
    let component = `<button class="fsa-btn ${_data.classes}" type="button">${_data.label}</button>`
    return component;
  }

  return {
    getButton
  }
}

