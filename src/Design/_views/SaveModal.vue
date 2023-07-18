<template>
  <div tabindex="0" :id="MODAL_ID" :class="'fds-modal '+CLASSES" role="dialog" aria-hidden="true">
    <div class="fds-modal__dialog">
      <div class="fds-modal__content">
        <button @click="hideModal(MODAL_ID)" class="fds-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
        <h1 class="fds-modal__title">{{ TITLE }}</h1>


        <div class="fds-field fds-m-b--l">
          <label class="fds-field__label" :for="nameId">Rename Version </label>
          <input v-model="name" class="fds-input fds-field__item" :id="nameId" :name="nameId" aria-required="true" type="text">
        </div>

        <button @click="updateName" class="fds-btn fds-btn--primary">Update Name</button>

      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useModalControls } from '@/_composables/useModalControls';
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    MODAL_ID: String,
    CLASSES: String,
    TITLE: String
  },

  setup(props, {emit}) {
    const store = useStore();
    const { hideModal } = useModalControls();
    const modalId = computed(()=> props.MODAL_ID );

    const versionName = computed(() => {
      let data = store.getters['settings/getCurrentVersion'];
      if(data!=null) return data.versionName
      else return null
    });
    const name = ref('');
    const nameId = ref(uuidv4());
    

    const updateName = () => {
      let newName = name.value
      emit('emitModalSave', newName);
      hideModal(modalId.value);
      resetFields();
    }

    const resetFields = () => {
      name.value = '';
    }


    watch(versionName, (value) => {
      name.value = value;
    });

    onMounted(()=>{
      store.dispatch('settings/callHistory');
    });

    return {
      hideModal,
      nameId,
      name,
      updateName
    };
  }
};
</script>
