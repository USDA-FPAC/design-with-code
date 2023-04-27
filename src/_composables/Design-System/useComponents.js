
import { v4 as uuidv4 } from "uuid";

let get = {};

// Button
import { useButton } from '@/_composables/Design-System/components/useButton';
const { getButton } = useButton();
get['button'] = getButton;

// Button Group
import { useButtonGroup } from '@/_composables/Design-System/components/useButtonGroup';
const { getButtonGroup } = useButtonGroup();
get['button-group'] = getButtonGroup;

// Checkbox
import { useCheckbox } from "@/_composables/Design-System/components/useCheckbox";
const { getCheckbox } = useCheckbox();
get['checkbox'] = getCheckbox;

// Radio group
import { useRadioGroup } from '@/_composables/Design-System/components/useRadioGroup';
const { getRadioGroup } = useRadioGroup();
get['radio-group'] = getRadioGroup;

// Form Field
import { useFormField } from "@/_composables/Design-System/components/useFormField";
const { getFormField } = useFormField();
get['form-field'] = getFormField;

// Checkbox Group
import { useCheckboxGroup } from "@/_composables/Design-System/components/useCheckboxGroup";
const { getCheckboxGroup } = useCheckboxGroup();
get['checkbox-group'] = getCheckboxGroup;

// Search
import { useSearch } from '@/_composables/Design-System/components/useSearch';
const { getSearch } = useSearch();
get['search'] = getSearch;

// Select
import { useSelect } from '@/_composables/Design-System/components/useSelect';
const { getSelect } = useSelect();
get['select'] = getSelect;

// Slider
import { useSlider } from '@/_composables/Design-System/components/useSlider';
const { getSlider } = useSlider();
get['slider'] = getSlider;

// Spinbox
import { useSpinbox } from "@/_composables/Design-System/components/useSpinbox";
const { getSpinbox } = useSpinbox();
get['spinbox'] = getSpinbox;

// Text Input
import { useTextInput } from '@/_composables/Design-System/components/useTextInput';
const { getTextInput } = useTextInput();
get['text-input'] = getTextInput;

// Stepped Controls
import { useSteppedControls } from "@/_composables/Design-System/components/useSteppedControls";
const { getSteppedControls } = useSteppedControls();
get['stepped-controls'] = getSteppedControls;

// Switch
import { useSwitch } from '@/_composables/Design-System/components/useSwitch';
const { getSwitch } = useSwitch();
get['switch'] = getSwitch;

// Grid
import { useGrid } from '@/_composables/Design-System/components/useGrid';
const { getGrid } = useGrid();
get['grid'] = getGrid;

export function useComponents(){

  const getComponent =(_methodName, _data) => {
    /*
      {
        action: 'onComponentUpdate',
        methodName: _obj.name,
        obj: _obj
      }
    */
    let newId = uuidv4();
    console.log('_methodName',_methodName)
    let component = `<div id="${newId}" class="dwc-overlay">`;
    try{
      component += get[_methodName](_data);
    } catch(_err){
      console.log('useComponents > getComponent Error: ', _err)
    }
    return component + `</div>`;

  }

  return {
    getComponent
  }
}