
export function useEditor(_emit) {
  
  let container = '';
  
  const updateCanvas =(_data) => {
    let tm = setTimeout(()=>{ _emit('emitEditorAction', _data) }, 300);
    return () => clearTimeout(tm);
  }

  return {
    updateCanvas
  }
}