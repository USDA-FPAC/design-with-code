<template>
  <div class="fds-m-t--s">
    <span class="fds-affix fds-m-b--m">
      <label :for="quickFindInputId" class="fds-affix__prefix" aria-hidden="true">
        <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </label>
      <input @input="searchComponents()" :id="quickFindInputId" class="fds-input fds-input--small fds-affix__item" type="text" :name="quickFindInputId" placeholder="Component Search" value="">
    </span>
    <div :id="quickFindResultsId">
    </div>
  </div>
</template>
<script>
import { ref, computed, onMounted, watch } from "vue";
import { useQuickFind } from "@/_composables/useQuickFind";
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    DATA: Object
  },

  setup(props, {emit}) {

    const componentsData = computed(()=> props.DATA );

    const { quickFinderInit, searchItems } = useQuickFind();
    const quickFindInputId = ref(uuidv4());
    const quickFindResultsId = ref(uuidv4());
    const phrase = ref('');

    const selectItem = (_data) => {
      let newObj = {};
      let properties = _data.split("|");
      let len = properties.length;
      let cnt = 1;

      properties.forEach((item)=>{
        if(cnt < len ) newObj[item.split(':')[0]] = item.split(':')[1];
        cnt++;
      });

      emit('emitSelectedComponent', newObj)
    }

    const searchComponents = (_evt) => {
      let input = document.getElementById(quickFindInputId.value);
      let phrase = input.value;
      searchItems( phrase );
    }

    watch(componentsData, (curr)=>{
      //console.log('QuickFind watch() curr', curr)
      //quickFinderInit(curr, quickFindResultsId.value, selectItem)
    });
    
    onMounted(()=>{
      //console.log('QuickFind > onMounted() props.DATA', props.DATA)
      quickFinderInit(props.DATA, quickFindResultsId.value, selectItem)
    })

    return {
      phrase,
      quickFindInputId,
      quickFindResultsId,
      searchComponents
    }
  }
}
</script>