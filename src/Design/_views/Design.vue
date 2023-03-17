<template>
  <main id="main-content" tabindex="-1">
    <div class="fds-section fds-section--fullscreen">
      <div class="fds-section__bd">

        <div class="fds-grid fds-grid--no-gutter">
          <div class="fds-grid__1/1 fds-grid__3/4@l ">
    
            <div class="dwc-preview fds-box fds-p--none fds-box--bg-100">
              <iframe
                :srcDoc="sourceDoc"
                title="output"
                sandbox="allow-scripts"
                frameborder="0"
                width="100%"
                height="100%"
              />
            </div>
    
          </div>
          <div class="fds-grid__1/1 fds-grid__1/4@l ">
          
            <editor EDITOR_TITLE="HTML Editor" @emitOnUpdate="updateHtmlCode" />
          
          </div>
        </div>
      </div>
    </div>
</main>
</template>

<script>
import { defineAsyncComponent, ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";
import { v4 as uuidv4 } from "uuid";
import { useDesignSystemStyle } from "@/_composables/useDesignSystemStyle";

const baseHeader = defineAsyncComponent(() => import("@/_partials/BaseHeader.vue"));
const editor = defineAsyncComponent(() => import("@/_components/editor/editor.vue"));

export default {
  components: {
    baseHeader,
    editor
  },

  setup(props, {emit}) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();
    const { updateSource } = useDesignSystemStyle();
    const editorsId = ref(uuidv4());
    const canvasId = ref(uuidv4());

    const dynamicHtml = computed(()=>{

    });
    const dynamicCss = computed(()=>{
      
    })

    const htmlCode = ref();
    const cssCode = ref();

    let sourceDoc = ref();

    const setSourceDoc = (_html) => {
      sourceDoc.value = _html;
    }

    const updateHtmlCode = (_data) => {
      //console.log('updateHtmlCode',_data)
      setSourceDoc(updateSource('body',_data));
    }

    const updateCssCode = (_data) => {
      //console.log('updateCssCode',_data)
      setSourceDoc(updateSource('body',_data));
    }

    watch([dynamicHtml, dynamicCss], (value1, value2) => {
      htmlCode.value = value1;
      cssCode.value = value2;
    });

    onMounted(()=>{
      setSourceDoc(updateSource('', '', true))
    });

    return {
      baseUrl,
      goto,
      sourceDoc,
      editorsId,
      canvasId,
      updateHtmlCode
    };
  }
};
</script>
