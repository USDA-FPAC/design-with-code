
export function useHeader(){

  const getHeader =(_data) => {
    
    let component = `<${_data.type==''?'H2':_data.type}>${_data.label}</${_data.type==''?'H2':_data.type}>`;
    return component;
  }

  return {
    getHeader
  }
}
