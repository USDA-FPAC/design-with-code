<template>
  <div :id="CONTAINER_ID" :class="CONTAINER_CLASS">
    
    <div class="dwc-editor-canvas" :id="editorCanvasId"></div>

  </div>
</template>
<script>

import { ref, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useEditor } from "@/_composables/Design-System/useEditor";

import EditorJS from '@editorjs/editorjs';
import Raw from '@editorjs/raw';
//import CodeMirror from 'editorjs-codemirror';
//import { EditorView } from "@codemirror/view";


export default {
  props: {
    CONTAINER_ID: String,
    CONTAINER_CLASS: String
  },

  setup(props, {emit}) {
    
    const { updateCanvas } = useEditor(emit);

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


    const WackyName = () => {
      editorCanvas.save().then((_outputData) => {
        //updateCanvas({action: 'onCodeUpdate', data: _outputData.blocks});
        updateCanvas(
        {
          action: 'onCodeUpdate',
          details: { name: _obj.name, data: _outputData.blocks }
        }
      );

      }).catch((_err) => {
        console.log('Saving failed: ', _err)
      });
    }

    const emitInterface = () => {
      emit('interface', {
        saveCode: () => WackyName()
      })
    }

    onMounted(()=>{
      emitInterface();
    });

    return {
      editorCanvas,
      editorCanvasId
    };
  }
};
</script>
