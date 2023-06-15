<template>
  <main id="main-content" tabindex="-1">
    <div class="fds-section">
      <div class="fds-section__bd">
        
        
        <div class="fds-m-b--l fds-level@m fds-level--justify-between">
          <h1 class="">Settings</h1>
          <div class="fds-level fds-level--justify-between fds-level--grow-auto fds-hide">
            <span>
              <button class="fds-btn fds-btn--fill fds-btn--secondary" type="button">
                <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
                Edit
              </button>
            </span>
            <span>
              <button class="fds-btn fds-btn--fill fds-btn--primary" type="button">
                <svg class="fds-icon fds-icon--size-2" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>
                Start
              </button>
            </span>
          </div>
        </div>


        <div class="fds-bg--tertiary-100">
          
          <div class="fds-p--l fds-p-t--xxs">
            <h2>App Version History</h2>
            
            <div class="fds-m-t--l fds-level">
              <span>
                <button @click="loadVersion()" class="fds-btn fds-btn--primary fds-btn--small">Load to Canvas</button>
              </span>
              <span>
                <button @click="deleteVersion()" class="fds-btn fds-btn--tertiary fds-btn--small">Delete</button>
              </span>
            </div>

            <table class="fds-table fds-table--borderless">
              <caption class="sr-only">Caption that is hidden visually, but read by screenreader</caption>
              <thead>
                <tr>
                  <th class="">

                  </th>
                  <!-- <th scope="col" class="">Version #</th> -->
                  <th scope="col" class="">Version Name</th>
                  <th scope="col" class="">Timestamp</th>
                  <th scope="col" class="fds-text-align--right">Size (KB)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in historyData" :key="item.versionDate">
                  <td aria-label="Select">
                    <span>
                      <input @change="selectVersion(item.versionName)" class="fds-radio fds-radio--solo" :data-behavior="item.versionName" :id="item.versionName" type="radio" name="versions" value="">
                      <label :for="item.versionName"><span class="sr-only">Select this row</span></label>
                    </span>
                  </td>
                  <!-- <td class="">{{ item.versionNumber }}</td> -->
                  <td class="">{{ item.versionName }}</td>
                  <td class="">{{ item.versionDate }}</td>
                  <td class="fds-text-align--right">{{ item.versionSize }}</td>
                </tr>
                
              </tbody>
            </table>

             <div class="fds-m-t--l fds-level">
              <span>
                <button @click="loadVersion()" class="fds-btn fds-btn--primary fds-btn--small">Load to Canvas</button>
              </span>
              <span>
                <button @click="deleteVersion()" class="fds-btn fds-btn--tertiary fds-btn--small">Delete</button>
              </span>
            </div>
            
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

const baseHeader = defineAsyncComponent(() => import("@/_partials/BaseHeader.vue"));

export default {
  components: {
    baseHeader
  },

  setup(props) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();

    const historyArray = computed(() => {
      let data = store.getters['settings/getHistory'];
      if(data) return data;
      else return null;
    });
    const historyData = ref();

    const sortVersions = (_data) => {
      
      if(_data!=null) _data.sort( (a, b) => new Date(b.versionDate) - new Date(a.versionDate) );
      //if(_data!=null) _data.sort((a, b) => parseFloat(b.versionNumber) - parseFloat(a.versionNumber));
      return _data;
    }

    const currVersionName = ref(null);
    const selectVersion = (_version) => {
      currVersionName.value = _version
    }

    const loadVersion = () => {
      if(currVersionName.value!=null) {
        console.log('loadVersion',currVersionName.value)
        //store.dispatch('settings/setVersion', currVersionName.value);
      }
    }

    const deleteVersion = () => {
      if(currVersionName.value!=null){
        console.log('deleteVersion', historyData.value)
        let appHistory = historyData.value.filter( item => item.versionName != currVersionName.value);
        let rawArray = JSON.parse(JSON.stringify(appHistory));
        console.log('rawArray',rawArray)
        store.dispatch('settings/replaceHistory', rawArray);
      }
    }

    watch(historyArray, (value)=>{
      historyData.value = sortVersions( value );
    })
    onMounted(()=>{
      store.dispatch('settings/callHistory');
    });

    return {
      baseUrl,
      goto,
      historyData,
      selectVersion,
      loadVersion,
      deleteVersion
    };
  }
};
</script>
