<template>
  <div>
    <div class="fds-whiteout" tabindex="-1" id="fds-whiteout" aria-hidden="true"></div>
    <alert-system></alert-system>
    <disclaimer></disclaimer>
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component"></component>
      </KeepAlive>
    </router-view>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { defineAsyncComponent, watch, onBeforeMount } from 'vue'

const AlertSystem = defineAsyncComponent(() => import("@/_partials/AlertSystem.vue"));
const disclaimer = defineAsyncComponent(() => import("@/_components/disclaimer/disclaimer.vue"));

export default {
  name: "app",
  components: {
    AlertSystem,
    disclaimer
  },
  setup(){
    const store = useStore();
    const route = useRoute();

    watch( () => route.params, (toParams, fromParams) => {
        // react to route changes...
    });
    onBeforeMount(()=>{
      //store.dispatch('settings/callHistory');
    });    
  }
};
</script>

<style lang="scss">
@import '@/_style/index.scss';
</style>