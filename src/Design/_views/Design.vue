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
      :NAME="methodName"
      :SHOW_PROPERTIES="showProperties"
      @emitModalAdditions="handleModalAdditions"
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
    
    const editorsId = ref(uuidv4());
    const canvasId = ref(uuidv4());
    const iFrameId= ref(uuidv4());
    const { updateSource, listenToFrame } = useDesignSystemStyle(String(iFrameId.value));
    const {
      setModalId,
      showModal,
      hideModal
    } = useModalControls();
    const componentModalId = ref( uuidv4() );
    setModalId(componentModalId.value);
    const methodName = ref();
    const dataObjHolder = ref({});
    const showProperties = ref([]);

    let sourceDoc = ref();

    const setSourceDoc = (_data) => {
      sourceDoc.value = _data.app;
      store.dispatch('codeExport/setHtml',sourceDoc.value);
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
      /*
      {
        action: 'onComponentUpdate',
        methodName: _obj.name,
        obj: _obj
      }
      */
      dataObjHolder.value = _data.obj
      console.log('Design.vue > handleUpdateCanvas > _data',_data)
      
      if(_data.action=='onTemplateUpdate'){
        setSourceDoc( updateSource( {cmd:'updateCanvas', data:''}, _data) );
      }

      if(_data.action=='onComponentUpdate'){
        methodName.value = _data.methodName;
        let obj = _data.obj;
        if(obj.hasOwnProperty('useModal')){
          let useModal = obj.useModal == "true" ? true : false;

          showProperties.value = obj.showProperties.split(',');

          if(useModal){
            showModal(componentModalId.value);
          } else {
            setSourceDoc( updateSource( {cmd:'updateCanvas', data:''}, _data) );
          }

        } else {
          setSourceDoc( updateSource( {cmd:'updateCanvas', data:''}, _data) );
        }
      }
    }

    const handleModalAdditions = (_data) => {
      // if the value exists, don't replace it
      //console.log('handleModalAdditions > _data', _data)
      let dataObj = _data.obj;
      Object.keys(dataObj).forEach((key)=>{
        if(dataObj[key] == '' || dataObj[key] == undefined ) {
          if(dataObjHolder.value.hasOwnProperty(key)){
            dataObj[key] = dataObjHolder.value[key];
          } 
        }
      })
      _data.obj = dataObj;
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
      handleModalAdditions,
      methodName,
      showProperties
    };
  }
};
</script>
