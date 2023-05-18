
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

// Header
import { useHeader } from '@/_composables/Design-System/components/useHeader';
const { getHeader } = useHeader();
get['header'] = getHeader;

// Page Title
import { usePageTitle } from '@/_composables/Design-System/components/usePageTitle';
const { getPageTitle } = usePageTitle();
get['page-title'] = getPageTitle;

// Breadcrumbs
import { useBreadcrumbs } from '@/_composables/Design-System/components/useBreadcrumbs';
const { getBreadcrumbs } = useBreadcrumbs();
get['breadcrumbs'] = getBreadcrumbs;

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

// Select Field
import { useSelectField } from '@/_composables/Design-System/components/useSelectField';
const { getSelectField } = useSelectField();
get['select-field'] = getSelectField;

// Select Muliti Field
import { useSelectMultiField } from '@/_composables/Design-System/components/useSelectMultiField';
const { getSelectMultiField } = useSelectMultiField();
get['select-multi-field'] = getSelectMultiField;

// Select Muliti
import { useSelectMulti } from '@/_composables/Design-System/components/useSelectMulti';
const { getSelectMulti } = useSelectMulti();
get['select-multi'] = getSelectMulti;

// Slider
import { useSlider } from '@/_composables/Design-System/components/useSlider';
const { getSlider } = useSlider();
get['slider'] = getSlider;

// Slider Field
import { useSliderField } from '@/_composables/Design-System/components/useSliderField';
const { getSliderField } = useSliderField();
get['slider-field'] = getSliderField;

// Spinbox
import { useSpinbox } from "@/_composables/Design-System/components/useSpinbox";
const { getSpinbox } = useSpinbox();
get['spinbox'] = getSpinbox;

// Spinbox Field
import { useSpinboxField } from "@/_composables/Design-System/components/useSpinboxField";
const { getSpinboxField } = useSpinboxField();
get['spinbox-field'] = getSpinboxField;

// Text Input
import { useTextInput } from '@/_composables/Design-System/components/useTextInput';
const { getTextInput } = useTextInput();
get['text-input'] = getTextInput;

// Text Area
import { useTextArea } from '@/_composables/Design-System/components/useTextArea';
const { getTextArea } = useTextArea();
get['text-area'] = getTextArea;

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


// Remove Element
const getRemove = (_data=null) => { return `` }
get['remove'] = getRemove;

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
    let component = ``;
    
    if(_methodName == 'remove '){
      component = get[_methodName](_data);
    } else {
      component = `<div id="dwc-${newId}" class="dwc-overlay">`;
      try{
        component += get[_methodName](_data);
      } catch(_err){
        console.log('useComponents > getComponent Error: ', _err)
      }

      component += `</div>`;
    }

    return component;
    
  }

  return {
    getComponent
  }
}