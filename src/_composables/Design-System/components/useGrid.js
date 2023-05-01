
import { v4 as uuidv4 } from "uuid";
export function useGrid(){

  const getGrid =(_data) => {

    let grids = {};

    grids['grid-1'] =`<div class="fsa-grid">
      <div class="fsa-grid__1/1"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`;
    
    grids['grid-1-1'] =`<div class="fsa-grid">
      <div class="fsa-grid__1/2"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/2"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`;

    grids['grid-1-1-1'] =`<div class="fsa-grid">
      <div class="fsa-grid__1/3"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/3"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/3"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`;

    grids['grid-2-1'] =`<div class="fsa-grid">
      <div class="fsa-grid__2/3"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/3"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`;

    grids['grid-1-2'] =`<div class="fsa-grid">
      <div class="fsa-grid__1/3"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__2/3"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`;

    grids['grid-1-1-1-1'] =`<div class="fsa-grid">
      <div class="fsa-grid__1/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`;

    grids['grid-2-1-1'] =`<div class="fsa-grid">
      <div class="fsa-grid__2/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`;

    grids['grid-1-1-2'] =`<div class="fsa-grid">
      <div class="fsa-grid__1/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__2/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`;

    grids['grid-3-1'] =`<div class="fsa-grid">
      <div class="fsa-grid__3/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`;

    grids['grid-1-3'] =`<div class="fsa-grid">
      <div class="fsa-grid__1/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__3/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`;

    grids['grid-1-2-1'] =`<div class="fsa-grid">
      <div class="fsa-grid__1/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__2/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
      <div class="fsa-grid__1/4"><div id="dwc-${uuidv4()}" class="dwc-overlay"><p>&nbsp;</p></div></div>
    </div>`;
    
    return grids[_data.type];
  }

  return {
    getGrid
  }
}
