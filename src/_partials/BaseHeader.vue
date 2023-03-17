<template>
  <header>

    <disclaimer></disclaimer>
    
    
  </header>
</template>

<script>
import disclaimer from '@/_components/disclaimer/disclaimer.vue';
import dsHeader from '@/_components/ds-header/ds-header.vue';

export default {

  components: {
    disclaimer,
    dsHeader
  },

  setup(props){

    return {

    }
  }  
}
</script>
