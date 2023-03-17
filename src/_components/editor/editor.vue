<template>
  <div class="dwc-editor">
    <div class="fds-level fds-level--justify-between fds-m-b--m fds-m-t--s ">
      <p class="dwc-editor-header">{{ EDITOR_TITLE }}</p>
      <button @click="saveCode()" class="fds-btn fds-btn--primary fds-btn--small fds-m-r--m" type="button">
        <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>
        Save
      </button>
    </div>
    <div class="dwc-editor-canvas" :id="editorCanvasId"></div>
  </div>
</template>

<script>
import { defineAsyncComponent, ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";
import { v4 as uuidv4 } from "uuid";

import EditorJS from '@editorjs/editorjs';
import Raw from '@editorjs/raw';
//import CodeMirror from 'editorjs-codemirror';
//import { EditorView } from "@codemirror/view";


export default {
  props: {
    EDITOR_TITLE: String,
    CODE: String
  },

  setup(props, {emit}) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();

    const codeHolderId = ref(uuidv4());
    const editorCanvasId = ref(uuidv4());

    const editorCanvas = new EditorJS({
      holder: editorCanvasId.value,
      languages: [{
        name: 'HTML',
        mode: "text/html"
      }],
      codeMirrorConfig: {
        lineNumbers: true,
        matchBrackets: true,
        autoCloseTags: true,
        tabSize: 2,
        keyMap: "sublime",
      },
      tools: {
        //code: CodeMirror,
        rawHtml: Raw
      },
      defaultBlock: 'rawHtml'

    });


    const updateCanvas =(_data) => {
      let tm = setTimeout(()=>{
        emit('emitOnUpdate', _data);
      }, 500);
      return () => clearTimeout(tm);
    }
    

    const saveCode = () => {
      editorCanvas.save().then((_outputData) => {
        updateCanvas(_outputData.blocks)
      }).catch((_err) => {
        console.log('Saving failed: ', _err)
      });
    }


    onMounted(()=>{

    });

    return {
      baseUrl,
      goto,
      codeHolderId,
      editorCanvas,
      editorCanvasId,
      saveCode
    };
  }
};
</script>
