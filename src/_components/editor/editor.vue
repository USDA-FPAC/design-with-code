<template>
  <div class="dwc-editor">
    <div class="fds-content-tabs fds-content-tabs--justified-equal">
      <ul class="fds-content-tabs__list">
        <li class="fds-content-tabs__item">
          <a class="fds-content-tabs__label fds-content-tabs__label--active" aria-current="step" href="#">
            <span class="fds-content-tabs__label-text">HTML Editor</span>
          </a>
        </li>
        <li class="fds-content-tabs__item">
          <a class="fds-content-tabs__label" href="#">
            <span class="fds-content-tabs__label-text">Components</span>
          </a>
        </li>
      </ul>
    </div>
    
    <div class="fds-level fds-level--justify-between fds-m-b--m fds-m-t--m">
      <p class="dwc-editor-header">{{ EDITOR_TITLE }}</p>
      
      <span>
        <button @click="saveCode()" class="fds-btn fds-btn--secondary fds-btn--small fds-m-r--xs" type="button">
          <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>
          Save
        </button>

        <button @click="undo()" class="fds-btn fds-btn--secondary fds-btn--small fds-m-r--xs" type="button">
          <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#205493" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></svg>
          
        </button>

        <button @click="redo()" class="fds-btn fds-btn--secondary fds-btn--small fds-m-r--xs" type="button">
          <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#205493" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></svg>
          
        </button>
      </span>
      

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
    const showRawHTML = ref(false);
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
      }, 300);
      return () => clearTimeout(tm);
    }
    

    const saveCode = () => {
      editorCanvas.save().then((_outputData) => {
        updateCanvas(_outputData.blocks)
      }).catch((_err) => {
        console.log('Saving failed: ', _err)
      });
    }

    const undo = () => {
      let undoTM = setTimeout(()=>{
        emit('emitOnUndo');
      }, 300);
      return () => clearTimeout(undoTM);
    }

    const redo = () => {
      let redoTM = setTimeout(()=>{
        emit('emitOnRedo');
      }, 300);
      return () => clearTimeout(redoTM);
    }


    onMounted(()=>{

    });

    return {
      baseUrl,
      goto,
      codeHolderId,
      editorCanvas,
      editorCanvasId,
      saveCode,
      showRawHTML,
      undo,
      redo
    };
  }
};
</script>
