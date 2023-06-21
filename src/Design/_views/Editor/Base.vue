<template>
  <div class="dwc-editor">
    <div class="fds-m-b--m fds-m-t--s fds-m-r--s">
      <!-- <p class="dwc-editor-header">{{ EDITOR_TITLE }}</p> -->
      
      <span class="fds-m-l--s">
        <!-- <button @click="saveCode()" class="fds-btn fds-btn--secondary fds-btn--small fds-m-r--xs" type="button">
          <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>
          Save
        </button> -->

        <button @click="remove()" :disabled="isDeleteEnabled ? 0:1" class="fds-btn fds-btn--secondary fds-btn--small fds-m-r--xs" type="button">
          <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#205493" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
        </button>

        <button @click="undo()" :disabled="isUndoEnabled ? 0:1" class="fds-btn fds-btn--secondary fds-btn--small fds-m-r--xs" type="button">
          <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#205493" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path>
          </svg>
        </button>

        <button @click="redo()" :disabled="isRedoEnabled ? 0:1" class="fds-btn fds-btn--secondary fds-btn--small fds-m-r--xs" type="button">
          <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#205493" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path>
          </svg>
        </button>
      </span>
    </div>

    <content-tabs
      :TABS_DATA="tabsData"
      TABS_CLASS="fds-content-tabs--justified-equal fds-border--primary-300"
      TABS_CONTAINER_CLASS="fds-m-t--none"
      @emitTabSelection="handleTabSelected">
        
      <template v-slot:containers>
        <div class="fds-m-t--m">
          <editor-ui
            :CONTAINER_ID="uiContainerId + '-container'"
            CONTAINER_CLASS=""
            @emitEditorAction="updateCanvas">
          </editor-ui>
          
          <editor-templates
            :CONTAINER_ID="templatesContainerId + '-container'"
            CONTAINER_CLASS=""
            @emitEditorAction="updateCanvas">
          </editor-templates>
          
          <!--<editor-code
            :CONTAINER_ID="codeContainerId + '-container'"
            CONTAINER_CLASS=""
            @emitEditorAction="updateCanvas"
            @interface="getChildInterface">
          </editor-code>-->

        </div>
      </template>

    </content-tabs>

  </div>
</template>
<script>
import { defineAsyncComponent, ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

const contentTabs = defineAsyncComponent(() => import('@/_components/content-tabs/content-tabs.vue'));

//import editorTemplates from '@/Design/_views/Editor/EditorTemplates.vue';
const editorTemplates = defineAsyncComponent(() => import('@/Design/_views/Editor/EditorTemplates.vue'));
const editorUi = defineAsyncComponent(() => import('@/Design/_views/Editor/EditorUi.vue'));
const editorCode = defineAsyncComponent(() => import('@/Design/_views/Editor/EditorCode.vue'));


export default {
  props: {
    EDITOR_TITLE: String
  },

  components: {
    contentTabs,
    editorTemplates,
    editorUi,
    editorCode
  },

  setup(props, {emit}) {
    const store = useStore();

    const templatesContainerId = ref(uuidv4());
    const uiContainerId = ref(uuidv4());
    const codeContainerId = ref(uuidv4());
    const codeContainerRef = ref(null);

    const tabsData = ref([
      {
        id: uiContainerId.value,
        label: 'UI',
        iconSize: '2',
        iconPath: 'M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
        iconFillHex: '#494440',
        isSelected: true,
        containerId: uiContainerId.value +'-container'
      },
      {
        id: templatesContainerId.value,
        label: 'Templates',
        iconSize: '2',
        iconPath: 'M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z',
        iconFillHex: '#494440',
        isSelected: false,
        containerId: templatesContainerId.value +'-container'
      }
           
      /* {
        id: codeContainerId.value,
        label: 'Code',
        iconSize: '2',
        iconPath: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
        iconFillHex: '#494440',
        isSelected: false,
        containerId: codeContainerId.value +'-container'
      } */
    ]);

    const deleteEnabled = computed(()=>{ return store.getters['design/getDeleteEnabled'] });
    const isDeleteEnabled = ref();
    const undoEnabled = computed(()=>{ return store.getters['design/getUndoEnabled'] });
    const isUndoEnabled = ref();
    const redoEnabled = computed(()=>{ return store.getters['design/getRedoEnabled'] });
    const isRedoEnabled = ref();


    let childInterface = () => {};
    const getChildInterface = (_interface) => childInterface = _interface;
    const saveCode = () => {
      childInterface.saveCode();
    }

    const updateCanvas =(_data) => {
      emit('emitOnUpdate', _data);
    }
    
    const undo = () => {
      let undoTM = setTimeout(()=>{ emit('emitOnUndo') }, 300);
      return () => clearTimeout(undoTM);
    }

    const redo = () => {
      let redoTM = setTimeout(()=>{ emit('emitOnRedo') }, 300);
      return () => clearTimeout(redoTM);
    }

    const remove = () => {
      updateCanvas({
        action: 'onComponentUpdate',
        methodName: 'remove',
        obj: {placementLocation: 'remove'}
      });
    }

    const handleTabSelected = (_obj) => {
      // Do something in Parent Component when Tab Selected
      //console.log('_obj.id',_obj.id)
    }

    watch([deleteEnabled, undoEnabled, redoEnabled], ( curr, prev)=>{
      isDeleteEnabled.value = curr[0],
      isUndoEnabled.value = curr[1],
      isRedoEnabled.value = curr[2]
    })

    onMounted(()=>{
      store.dispatch('design/setDeleteEnabled', false);
      store.dispatch('design/setUndoEnabled', false);
      store.dispatch('design/setRedoEnabled', false);
    });

    return {
      saveCode,
      remove,
      undo,
      redo,
      handleTabSelected,
      tabsData,
      templatesContainerId,
      uiContainerId,
      codeContainerId,
      codeContainerRef,
      getChildInterface,
      updateCanvas,
      isDeleteEnabled,
      isUndoEnabled,
      isRedoEnabled
    };
  }
};
</script>
