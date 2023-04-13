<template>
  <div :id="CONTAINER_ID" :class="CONTAINER_CLASS">
    
    <div class="dwc-editor-canvas">
      <!-- Add markup here to show Multiple Layouts -->
      <p class="fds-m-t--s">
        <button
          @click="updateTemplate(
            { name:'default' }
          )"
          class="fds-btn fds-btn--secondary">
          Use Default Template
        </button>
      </p>
      <p class="fds-m-t--s">
        <button
          @click="updateTemplate(
            { name:'fullscreen' }
          )"
          class="fds-btn fds-btn--secondary">
          Use Fullscreen Template
        </button>
      </p>
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
          details: { name: _obj.name }
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
