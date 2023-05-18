
export function useButton(){

  const getButton =(_data) => {
    let component = `<button class="fsa-btn ${_data.classes}" role="button" type="button" title="${_data.prompt}">${_data.label}</button>`
    return component;
  }

  return {
    getButton
  }
}

