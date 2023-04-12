<template>
  <div :id="CONTAINER_ID" :class="CONTAINER_CLASS">
    
    <div class="dwc-editor-canvas">
      <!-- Add markup here to show Multiple Layouts -->
      <p>Search for a Component:</p>
      <p>
        <button
          @click="updateUI(
            {
              name:'button-group',
              data:{ type: 'array', arr: [
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Reports', path: '/reports' },
              ]}
            }
          )"
          class="fds-btn fds-btn--secondary">
          Add Button Group
        </button>
      </p>
      <p>
        <button
          @click="updateUI(
            {
              name:'radio-group',
              data:{ 
                type: 'array',
                prompt: 'Which pie do you like the most?',
                arr: [
                  { id: '12345-abc', label: 'Apple', path: '/about' },
                  { id: '67891-abc', label: 'Peanut Butter', path: '/services' },
                  { id: 'abc-12345', label: 'French Silk', path: '/reports' },
                ],
                help: 'Choose only one'
              }
            }
          )"
          class="fds-btn fds-btn--secondary">
          Add Radio Group
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
