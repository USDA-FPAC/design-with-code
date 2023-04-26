<template>
  <main id="main-content" tabindex="-1">
    <div class="fds-section fds-section--fullscreen">
      <div class="fds-section__bd">

        <div class="fds-grid fds-grid--no-gutter">
          <div class="fds-grid__1/1 fds-grid__10/12@l ">
    
            <div class="dwc-preview fds-box fds-p--none fds-box--bg-100">
              <iframe
                :id="iFrameId"
                :srcDoc="sourceDoc"
                title="output"
                sandbox="allow-scripts"
                frameborder="0"
                width="100%"
                height="100%"
              />
            </div>
    
          </div>
          <div class="fds-grid__1/1 fds-grid__2/12@l fds-p-t--m">
                     
            <editor EDITOR_TITLE=""
              @emitOnUpdate="handleUpdateCanvas"
              @emitOnUndo="undo"
              @emitOnRedo="redo"
            />
          
          </div>
        </div>
      </div>
    </div>

    <component-modal
      :MODAL_ID="componentModalId"
      CLASSES="fds-modal--top"
      TITLE="Add Properties"
      :NAME="componentName"
      @emitAddComponent="handleAddComponent"
    >
    </component-modal>
</main>
</template>

<script>
import { defineAsyncComponent, ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";
import { useModalControls } from '@/_composables/useModalControls';
import { v4 as uuidv4 } from "uuid";
import { useDesignSystemStyle } from "@/_composables/Design-System/useDesignSystemStyle";

const baseHeader = defineAsyncComponent(() => import("@/_partials/BaseHeader.vue"));
const editor = defineAsyncComponent(() => import("@/Design/_views/Editor/Base.vue"));
const componentModal = defineAsyncComponent(() => import('@/Design/_views/ComponentModal.vue'));


export default {
  components: {
    baseHeader,
    editor,
    componentModal
  },

  setup(props, {emit}) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();
    const { updateSource, listenToFrame } = useDesignSystemStyle();
    const editorsId = ref(uuidv4());
    const canvasId = ref(uuidv4());
    const iFrameId= ref(uuidv4());
    const {
      setModalId,
      showModal,
      hideModal
    } = useModalControls();
    const componentModalId = ref( uuidv4() );
    setModalId(componentModalId.value);
    const componentName = ref();

    let sourceDoc = ref();

    const setSourceDoc = (_data) => {
      sourceDoc.value = _data.app;
    }

    const undo = () => {
      setSourceDoc(updateSource({cmd:'undo'}, ''));
    }

    const undoVersion = (_version) => {
      setSourceDoc(updateSource({cmd:'undo', data:_version}, ''));
    }

    const redo = () => {
      setSourceDoc(updateSource({cmd:'redo'}, ''));
    }

    const handleUpdateCanvas = (_data) => {
      //console.log('updateHtmlCode',_data)
      // if component show modal
      componentName.value = _data.details.name;
      showModal(componentModalId.value);

      //setSourceDoc( updateSource( {cmd:'updateCanvas', data:''}, _data) );
    }

    const handleAddComponent = (_data) => {
      setSourceDoc( updateSource( {cmd:'updateCanvas', data:''}, _data) );
    }

    /* watch(dynamicHtml, (value1) => {
      htmlCode.value = value1;
    }); */

    onMounted(()=>{
      listenToFrame(iFrameId.value);
      setSourceDoc(updateSource('', '', true));
    });

    return {
      baseUrl,
      goto,
      sourceDoc,
      editorsId,
      canvasId,
      iFrameId,
      handleUpdateCanvas,
      undo,
      redo,
      componentModalId,
      handleAddComponent,
      componentName
    };
  }
};
</script>
