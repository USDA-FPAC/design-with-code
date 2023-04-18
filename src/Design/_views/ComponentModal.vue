<template>
  <div tabindex="0" :id="MODAL_ID" :class="'fds-modal '+CLASSES" role="dialog" aria-hidden="true">
    <div class="fds-modal__dialog">
      <div class="fds-modal__content">
        <button @click="hideModal(MODAL_ID)" class="fds-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
        <h1 class="fds-modal__title">{{ TITLE }} - {{ NAME }}</h1>
        
        <div class="fds-field">
          <label class="fds-field__label" :for="labelId">Label <span class="fds-field__label-desc">Required</span></label>
          <input v-model="label" class="fds-input fds-field__item" :id="labelId" :name="labelId" aria-required="true" type="text">
        </div>

        <div class="fds-field">
          <label class="fds-field__label" :for="classesId">Classes </label>
          <input v-model="classes" class="fds-input fds-field__item" :id="classesId" :name="classesId" aria-required="false" type="text">
        </div>

        <div class="fds-field">
          <label class="fds-field__label" :for="jsonDataId">JSON data </label>
          <textarea v-model="jsonData" class="fds-textarea fds-field__item" placeholder="JSON" :id="jsonDataId" aria-required="false" :name="jsonDataId"></textarea>
        </div>

        <div class="fds-field">
          <label class="fds-field__label" :for="promptId">Prompt </label>
          <input v-model="prompt" class="fds-input fds-field__item" :id="promptId" :name="promptId" aria-required="true" type="text">
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
    NAME: String
  },

  setup(props, {emit}) {
    const { hideModal } = useModalControls();

    const componentName = computed( ()=> props.NAME );
    const modalId = computed(()=>props.MODAL_ID)
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
    const iconOnly = ref(false);
    const iconOnlyId = ref(uuidv4());
    const buttonLabel = ref('');
    const buttonLabelId = ref(uuidv4());
    const isRequired = ref(false);
    const isRequiredId = ref(uuidv4());
    const isSelected = ref(false);
    const isSelectedId = ref(uuidv4());
    const directional = ref(false);
    const directionalId = ref(uuidv4());
    const status = ref('<strong>1</strong> of 5 Reports Process');
    const statusId = ref(uuidv4());
    const primaryLabel = ref('Continue');
    const primaryLabelId = ref(uuidv4());
    const secondaryLabel = ref('Previous');
    const secondaryLabelId = ref(uuidv4());
    const jsonData = ref();
    const jsonDataId = ref(uuidv4());
    

    const arr = ref ([
      { label: 'TEST', isChecked: false, isRequired: false }
    ]);


    const addComponent = () => {
      let d = {};
      d.label = label.value;
      d.classes = classes.value;
      d.data = jsonData.value == null ? arr.value : jsonData.value;
      d.prompt = prompt.value;
      
      emit('emitAddComponent', {
        action: 'onComponentUpdate',
        details: { name: cName.value, data: d }
      });
      hideModal(modalId.value);
      resetFields();
    }

    const resetFields = () => {
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
      iconOnly.value = false;
      buttonLabel.value = '';
      isRequired.value = false;
      isSelected.value = false;
      directional.value = false;
      status.value = '';
      primaryLabel.value = 'Continue';
      secondaryLabel.value = 'Previous';
      jsonData.value = null;
    }


    watch(componentName, (value) => {
      cName.value = value;
    });

    onMounted(()=>{

    });

    return {
      hideModal,
      addComponent,
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
      jsonDataId
    };
  }
};
</script>
