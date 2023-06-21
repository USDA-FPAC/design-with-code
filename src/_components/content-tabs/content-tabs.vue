<template>
  <div>
    <div v-if="tabsData" :class="'fds-content-tabs'+TABS_CLASS?TABS_CLASS:' fds-content-tabs--justified-equal'">
      <ul class="fds-content-tabs__list">
        <li v-for="tab in tabsData" :key="tab.id" class="fds-content-tabs__item">
          <a :id="tab.id"
            @click.prevent="handleTabSelected(tab.id)"
            :class="'fds-content-tabs__label fds-content-tabs__label--large ' + setSelectedClass(tab.isSelected)"
            href="">
            
            <span class="fds-content-tabs__label-text">
              
              <svg
                :class="'fds-icon fds-icon--size-'+tab.iconSize?tab.iconSize:'2'"
                aria-hidden="true"
                focusable="false"
                role="img"
                :fill="tab.iconFillHex?tab.iconFillHex:'#494440'"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path :d="tab.iconPath"></path>
              </svg>

              {{ tab.label }}
            
            </span>
          </a>
        </li>
      </ul>
    </div>

    <div :class="TABS_CONTAINER_CLASS ? TABS_CONTAINER_CLASS : 'fds-m-t--l'">
      <slot name="containers"></slot>
    </div>

  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useUtilities } from '@/_composables/useUtilities';

export default {

  props: {
    TABS_DATA: Array,
    TABS_CLASS: String,
    TABS_CONTAINER_CLASS: String
  },

  setup(props, {emit}){

    const { getPropertyFromId, setPropertyFromProperty } = useUtilities();

    const tabsData = computed(()=> {
      let data = props.TABS_DATA;
      if(data) return data;
      else return null
    });

    const handleTabSelected = (_id) => {
      tabsData.value.forEach( (o) => setPropertyFromProperty(o.id, 'id', 'isSelected', false, tabsData.value) );
      setPropertyFromProperty(_id, 'id', 'isSelected', true, tabsData.value);
      setVisibility();
      emit("emitTabSelection",{id: _id})
    }
    //const setIsSelectedContainer = (_id) => getPropertyFromId(_id, 'isSelected', tabsData.value);
    const setSelectedClass = (_boo) => { return _boo ? 'fds-content-tabs__label--active' : ''};

    const tabTest = ref(false);
    const setVisibility = () => {
      if( tabTest.value ){
        tabsData.value.forEach( (o) => {
          if(o.isSelected) {
            document.getElementById(o.containerId).style.visibility = "initial";
            document.getElementById(o.containerId).style.display = "inline";
          } else {
            document.getElementById(o.containerId).style.visibility = "hidden";
            document.getElementById(o.containerId).style.display = "none";
          }
        })
      }
    }

    const initializeTabs = () => {
      let el = document.getElementById( tabsData.value[0]['containerId'] );
      if(el != undefined) {
        tabTest.value = true;
        setVisibility();
      } else {
        setTimeout(() => initializeTabs(), 250);
      }
    };

    onMounted(()=>{
      initializeTabs();
    })

    return {
      tabsData,
      handleTabSelected,
      setSelectedClass,
      //setIsSelectedContainer
    }
  }
}
</script>