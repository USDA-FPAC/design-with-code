<template>
  <main id="main-content" tabindex="-1">
    <div class="fds-section">
      <div class="fds-section__bd">
        <h1>Export Code</h1>

        <div class="fds-grid fds-grid--no-gutter">
          <div class="fds-grid__1/1 fds-grid__8/12@l ">
            <div class="fds-level fds-m-t--l fds-m-b--m">
              <button @click="generateHtml()" class="fds-btn fds-btn--secondary" role="button">
                <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#205493" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
                </svg>
                Generate HTML
              </button>
              
              <button @click="copyToClickboard()" class="fds-btn fds-btn--secondary" role="button">
                <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#205493" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                </svg>
                Copy to Clipboard
              </button>
            </div>
            <div>
              <textarea v-model="pageHtml" class="fds-textarea" rows="20" name="Name" placeholder="HTML Code"></textarea>
            </div>

          </div>
          <div class="fds-grid__1/1 fds-grid__4/12@l fds-p-t--m">

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
import { useGrowlControls } from "@/_composables/useGrowlControls";
import { useBottom } from "@/_composables/Design-System/page-areas/bottom";

import { v4 as uuidv4 } from "uuid";

const baseHeader = defineAsyncComponent(() => import("@/_partials/BaseHeader.vue"));

export default {
  components: {
    baseHeader
  },

  setup(props, {emit}) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();
    const {
      showSuccessGrowl,
      showErrorGrowl
     } = useGrowlControls();
     const { footer, end } = useBottom();
    
    const savedHtml = computed(()=>{
      let data = store.getters['codeExport/getHtml'];
      if(data) return data;
      else return null;
    });
    const currentHtml = ref();

    const generateHtml = () => {
      let html = currentHtml.value;
      // strip DwC artifacts from output
      let str1 = `/>
      <link rel="stylesheet" href="/design-with-code/css/styles.css" />
      <`;
      let str2 = `/>
      <`;
      html = html.replaceAll(str1, str2);
      html = html.replaceAll(' class="dwc-overlay"', '');
      html = html.replaceAll('dwc-overlay ', '');
      html = html.replaceAll('dwc-overlay', '');

      html = html.split('</main>')[0];
      html += footer + end;
      setHtml(html);
    }

    const pageHtml = ref('');

    const setHtml = (_value) => {
      pageHtml.value = _value;
    }

    const getHtml = () => {
      return pageHtml.value;
    }

    const copyToClickboard = () => {
      let code = getHtml();
      let uid = uuidv4();

      if(code!=''){
        navigator.clipboard.writeText(code);
        showSuccessGrowl({
          "id": uid,
          "title": "Success",
          "msg": "The code was copied to your Clipboard and is ready to paste."
        });
      } else {
        showErrorGrowl({
          "id": uid,
          "title": "Error",
          "msg": "There was no HTML code generated. Nothing was added to your Clipboard."
        });
      }

    }

    watch(savedHtml, (_value)=>{
      currentHtml.value = _value;
    })

    onMounted(()=>{
      currentHtml.value = store.getters['codeExport/getHtml'];
    });

    return {
      baseUrl,
      goto,
      generateHtml,
      pageHtml,
      copyToClickboard
    };
  }
};
</script>