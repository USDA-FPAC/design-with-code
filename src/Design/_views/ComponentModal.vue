<template>
  <div tabindex="0" :id="MODAL_ID" :class="'fds-modal '+CLASSES" role="dialog" aria-hidden="true">
    <div class="fds-modal__dialog">
      <div class="fds-modal__content">
        <button @click="hideModal(MODAL_ID)" class="fds-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
        <h1 class="fds-modal__title">{{ TITLE }} - {{ NAME }}</h1>
        
        <div v-if="useMe.placement" class="fds-level fds-m-t--m fds-m-b--s">
          
          <span class="fds-m-r--s">
            Placement:
          </span>
          <span class="fds-btn-group fds-btn-group--small" role="group" aria-label="Where to add element">
            <button :id="placementReplaceId" @click="togglePlacement('replace')" class="fds-btn-group__item fds-btn-group__item--active" aria-selected="true" type="button" title="Replace">
              <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></svg>  
            </button>
            <button :id="placementLeftId" @click="togglePlacement('left')" class="fds-btn-group__item" aria-selected="false" type="button" title="Add Left">
              <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
            </button>
            <button :id="placementTopId" @click="togglePlacement('above')" class="fds-btn-group__item" aria-selected="false" type="button" title="Add Above">
              <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>
            </button>
            <button :id="placementBottomId" @click="togglePlacement('below')" class="fds-btn-group__item" aria-selected="false" type="button" title="Add below">
              <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>
            </button>
            <button :id="placementRightId" @click="togglePlacement('right')" class="fds-btn-group__item" aria-selected="false" type="button"  title="Add Right">
              <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
            </button>
          </span>
            
        </div>

        <div v-if="useMe.type" class="fds-field">
          <label class="fds-field__label" :for="typeId">Type </label>
          <input v-model="type" class="fds-input fds-field__item" :id="typeId" :name="typeId" aria-required="true" type="text">
        </div>

        <div v-if="useMe.prompt" class="fds-field">
          <label class="fds-field__label" :for="promptId">Prompt / Placeholder </label>
          <input v-model="prompt" class="fds-input fds-field__item" :id="promptId" :name="promptId" aria-required="true" type="text">
        </div>

        <div v-if="useMe.label" class="fds-field">
          <label class="fds-field__label" :for="labelId">Label </label>
          <input v-model="label" class="fds-input fds-field__item" :id="labelId" :name="labelId" aria-required="true" type="text">
        </div>
        

        <div class="fds-level">
          <span v-if="useMe.required" class="fds-level fds-level--inline">
            <label class="fds-switch">
              <input @change="toggleRequired()" type="checkbox" class="fds-switch__checkbox" :id="isRequiredId" :name="isRequiredId">
              <span class="fds-switch__track"></span>
            </label>
            <label :for="isRequiredId">Required</label>
          </span>
          <span v-if="useMe.preselected" class="fds-level fds-level--inline">
            <label class="fds-switch">
              <input @change="toggleSelected()" type="checkbox" class="fds-switch__checkbox" :id="isSelectedId" :name="isSelectedId">
              <span class="fds-switch__track"></span>
            </label>
            <label :for="isSelectedId">Pre-selected</label>
          </span>
        </div>

        <div v-if="useMe.classes" class="fds-field">
          <label class="fds-field__label" :for="classesId">Classes </label>
          <input v-model="classes" class="fds-input fds-field__item" :id="classesId" :name="classesId" aria-required="false" type="text">
        </div>

        <div v-if="useMe.json" class="fds-field">
          <label class="fds-field__label" :for="jsonDataId">JSON data </label>
          <textarea v-model="jsonData" class="fds-textarea fds-field__item" placeholder="JSON" :id="jsonDataId" aria-required="false" :name="jsonDataId"></textarea>
        </div>


        <div v-if="useMe.help" class="fds-field">
          <label class="fds-field__label" :for="helpId">Help Text </label>
          <input v-model="help" class="fds-input fds-field__item" :id="helpId" :name="helpId" aria-required="true" type="text">
        </div>

        <button @click="addComponent()" class="fds-btn fds-btn--primary">Add Component</button>

      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import { useModalControls } from '@/_composables/useModalControls';
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    MODAL_ID: String,
    CLASSES: String,
    TITLE: String,
    NAME: String,
    SHOW_PROPERTIES: Array
  },

  setup(props, {emit}) {
    const { hideModal } = useModalControls();

    const componentName = computed( ()=> props.NAME );
    const modalId = computed(()=> props.MODAL_ID );
    const showProperties = computed(()=> props.SHOW_PROPERTIES );
    const useMeDefault = {
      placement: false,
      type: false,
      classes: false,
      label: false,
      prompt: false,
      placeholder: false,
      name: false,
      disabled: false,
      help: false,
      required: false,
      preselected: false,
      json: false
    };
    const useMe = ref(useMeDefault);

    const updateFields = (_arr) => {
      useMe.value = useMeDefault;
      _arr.forEach((key)=>{
        if(useMe.value.hasOwnProperty(key)) useMe.value[key] = true;
      });    
    }

    const cName = ref();

    const classes = ref('');
    const classesId = ref(uuidv4());

    const prompt = ref('');
    const promptId = ref(uuidv4());
    
    const type = ref('');
    const typeId = ref(uuidv4());
    const label = ref('');
    const labelId = ref(uuidv4());

    const placeholder = ref('');
    const placeholderId = ref(uuidv4());
    
    const name = ref('');
    const nameId = ref(uuidv4());
    
    const val = ref('');
    const valId = ref(uuidv4());
    const min = ref(0);
    const minId = ref(uuidv4());
    const max = ref (100);
    const maxId = ref(uuidv4());
    const step = ref(10);
    const stepId = ref(uuidv4());
    const help = ref('');
    const helpId = ref(uuidv4());

    const iconOnly = ref('false');
    const iconOnlyId = ref(uuidv4());
    const buttonLabel = ref('');
    const buttonLabelId = ref(uuidv4());
    const isRequired = ref('false');
    const isRequiredId = ref(uuidv4());

    const isSelected = ref('false');
    const isSelectedId = ref(uuidv4());

    const directional = ref('false');
    const directionalId = ref(uuidv4());
    const status = ref('<strong>1</strong> of 5 Reports Process');
    const statusId = ref(uuidv4());
    const primaryLabel = ref('Continue');
    const primaryLabelId = ref(uuidv4());
    const secondaryLabel = ref('Previous');
    const secondaryLabelId = ref(uuidv4());
    const jsonData = ref();
    const jsonDataId = ref(uuidv4());

    const arr = ref ();


    const addComponent = () => {
      let d = {};
      d.placementLocation = placementLocation.value;
      d.label = label.value;
      d.classes = classes.value;
      d.prompt = prompt.value;
      d.isRequired = isRequired.value; //== 'true' ? true : false;
      d.help = help.value;
      d.type = type.value;
      d.iconOnly = iconOnly.value == 'true' ? true : false;
      d.isSelected = isSelected.value == 'true' ? true : false;
      d.directional = directional.value == 'true' ? true : false;
      d.placeholder = placeholder.value;
      d.val = val.value;
      if(jsonData.value != null){
        let j = jsonData.value;
        j = j.trim().replaceAll(/(\r\n|\n|\r)/gm, '');
        d.arr = JSON.parse(j);
      } else {
        d.arr = arr.value;
      }
      
      emit('emitModalAdditions', {
        action: 'onComponentUpdate',
        methodName: cName.value,
        obj: d
      });

      hideModal(modalId.value);
      resetFields();
    }

    const resetFields = () => {
      togglePlacement('replace');
      classes.value = '';
      prompt.value = '';
      type.value = '';
      label.value = '';
      placeholder.value = '';
      name.value = '';
      val.value = '';
      min.value = 0;
      max.value = 100;
      step.value = 10;
      help.value = '';
      iconOnly.value = 'false';
      buttonLabel.value = '';
      isRequired.value = 'false';
      isSelected.value = 'false';
      directional.value = 'false';
      status.value = '';
      primaryLabel.value = 'Continue';
      secondaryLabel.value = 'Previous';
      jsonData.value = null;
      useMe.value = useMeDefault;
    }

    const toggleRequired = () => { isRequired.value = isRequired.value=='true'?'false':'true' }
    const toggleSelected = () => { isSelected.value = isSelected.value=='true'?'false':'true' }

    const placementLocation = ref('replace');
  
    const placementReplaceId = ref(uuidv4());
    const placementLeftId = ref(uuidv4());
    const placementTopId = ref(uuidv4());
    const placementBottomId = ref(uuidv4());
    const placementRightId = ref(uuidv4());

    const placementIds = {};
    placementIds['replace'] = placementReplaceId.value;
    placementIds['left'] = placementLeftId.value;
    placementIds['above'] = placementTopId.value;
    placementIds['below'] = placementBottomId.value;
    placementIds['right'] = placementRightId.value;

    const resetPlacementControls = () => {
      let keys = Object.keys(placementIds);
      keys.forEach((key) => {
        let id = placementIds[key];
        let el = document.getElementById( id );
        el.classList.remove('fds-btn-group__item--active');
        el.ariaSelected = 'false'; 
      })
    }

    const togglePlacement = (_where) => {
      resetPlacementControls()
      let btn = document.getElementById( placementIds[_where] );
      btn.classList.add('fds-btn-group__item--active');
      btn.ariaSelected = 'true';
      placementLocation.value = _where;
    }


    watch([componentName, showProperties], (value) => {
      cName.value = value[0];
      updateFields( value[1] );
    });

    onMounted(()=>{

    });

    return {
      hideModal,
      addComponent,
      togglePlacement,
      placementReplaceId,
      placementLeftId,
      placementTopId,
      placementBottomId,
      placementRightId,
      classes,
      classesId,
      prompt,
      promptId,
      type,
      typeId,
      label,
      labelId,
      placeholder,
      placeholderId,
      name,
      nameId,
      val,
      valId,
      min,
      minId,
      max,
      maxId,
      step,
      stepId,
      help,
      helpId,
      iconOnly,
      iconOnlyId,
      buttonLabel,
      buttonLabelId,
      isRequired,
      isRequiredId,
      isSelected,
      isSelectedId,
      directional,
      directionalId,
      status,
      statusId,
      primaryLabel,
      primaryLabelId,
      secondaryLabel,
      secondaryLabelId,
      jsonData,
      jsonDataId,
      toggleRequired,
      toggleSelected,
      useMe
    };
  }
};
</script>
