<template>
  <div :id="CONTAINER_ID" :class="CONTAINER_CLASS">
    
    <div class="dwc-editor-canvas">
      <!-- Add markup here to show Multiple Layouts -->
      <p>Search for a Component:</p>
      <p><button @click="updateUI({ name:'button' })" class="fds-btn fds-btn--secondary">
        Add Button
      </button></p>
      <p><button @click="updateUI( { name:'button-group' })" class="fds-btn fds-btn--secondary">
        Add Button Group
      </button></p>
      <p><button @click="updateUI( { name:'checkbox' })" class="fds-btn fds-btn--secondary">
        Add Solo Checkbox
      </button></p>
      <p><button @click="updateUI( { name:'radio-group' })" class="fds-btn fds-btn--secondary">
        Add Radio Group
      </button></p>
      <p><button @click="updateUI({ name:'form-field' })" class="fds-btn fds-btn--secondary">
        Add Form Field
      </button></p>
      <p><button @click="updateUI( { name:'checkbox-group' })" class="fds-btn fds-btn--secondary">
        Add Checkbox Group
      </button></p>
      <p><button @click="updateUI( { name:'search' })" class="fds-btn fds-btn--secondary">
          Add Search Field
      </button></p>
      <p><button @click="updateUI( { name:'select' })" class="fds-btn fds-btn--secondary">
        Add Select
      </button></p>
      <p><button @click="updateUI( { name:'slider' })" class="fds-btn fds-btn--secondary">
        Add Slider
      </button></p>
      <p><button @click="updateUI( { name:'spinbox' })" class="fds-btn fds-btn--secondary">
        Add Spinbox
      </button></p>
      <p><button @click="updateUI( { name:'text-input' })" class="fds-btn fds-btn--secondary">
        Add Text Input
      </button></p>
      <p><button @click="updateUI( { name:'stepped-controls' })" class="fds-btn fds-btn--secondary">
        Add Stepped Controls
      </button></p>
      <p><button @click="updateUI( { name:'switch' })" class="fds-btn fds-btn--secondary">
        Add Switch
      </button></p>
      
    </div>

  </div>
</template>
<script>

import { ref, onMounted } from "vue";
//import { v4 as uuidv4 } from "uuid";
import { useEditor } from "@/_composables/Design-System/useEditor";


export default {
  props: {
    CONTAINER_ID: String,
    CONTAINER_CLASS: String
  },

  setup(props, {emit}) {

    const { updateCanvas } = useEditor(emit);
    
    const updateUI = (_obj) => {
      updateCanvas(
        {
          action: 'onComponentUpdate',
          details: { name: _obj.name, data: _obj.data }
        }
      );
    }

    onMounted(()=>{

    });

    return {
      updateUI
    };
  }
};
</script>
