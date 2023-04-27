<template>
  <div :id="CONTAINER_ID" :class="CONTAINER_CLASS">
    
    <div class="dwc-editor-canvas">
      <!-- Add markup here to show Multiple Layouts -->

      <quick-find        
        @emitSelectedComponent="handleSelectedComponent"
        :DATA="itemsData"
        ></quick-find>
      
    </div>

  </div>
</template>
<script>

import { defineAsyncComponent, ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
//import { v4 as uuidv4 } from "uuid";
import { useEditor } from "@/_composables/Design-System/useEditor";

const QuickFind = defineAsyncComponent(() => import("@/Design/_views/Editor/QuickFind.vue"));

export default {
  components: {
    QuickFind
  },
  props: {
    CONTAINER_ID: String,
    CONTAINER_CLASS: String
  },

  setup(props, {emit}) {
    
    const store = useStore();

    const itemsData = computed(()=>{
      let data = store.getters['design/getItems'];
      if(data) return data;
      else return null;
    })

    const { updateCanvas } = useEditor(emit);
    
    const updateUI = (_obj) => {
      updateCanvas(
        {
          action: 'onComponentUpdate',
          methodName: _obj.name,
          obj: _obj
        }
      );
    }

    const handleSelectedComponent = (_data) => {
      console.log('handleSelectedComponent > _data',_data)
      updateUI(_data);
    }

    onMounted(()=>{
      store.dispatch('design/setItems');
    });

    return {
      updateUI,
      handleSelectedComponent,
      itemsData
    };
  }
};
</script>
