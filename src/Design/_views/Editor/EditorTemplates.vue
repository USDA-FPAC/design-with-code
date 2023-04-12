<template>
  <div :id="CONTAINER_ID" :class="CONTAINER_CLASS">
    
    <div class="dwc-editor-canvas">
      <!-- Add markup here to show Multiple Layouts -->
      <p>Select from these fine Templates:</p>
      <button
        @click="updateTemplate(
          {
            name:'stepped-process',
            data:{ type: 'array', arr: ['123','456','789'] }
          }
        )"
        class="fds-btn fds-btn--secondary">
        Add Template
      </button>
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
    
    const updateTemplate = (_obj) => {
      updateCanvas(
        {
          action: 'onTemplateUpdate',
          details: { name: _obj.name, data: _obj.data }
        }
      )
    }

    onMounted(()=>{

    });

    return {
      updateTemplate
    };
  }
};
</script>
