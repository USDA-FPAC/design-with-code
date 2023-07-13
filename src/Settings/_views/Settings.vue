<template>
  <main id="main-content" tabindex="-1">
    <div class="fds-section">
      <div class="fds-section__bd">
        
        
        <div class="fds-m-b--l fds-level@m fds-level--align-bottom fds-level--justify-between">
          <h1 class="">Settings</h1>
          <div class="fds-level fds-level--justify-between fds-level--grow-auto">
            <span>
              <button @click="downloadVersion" class="fds-btn fds-btn--fill fds-btn--secondary" type="button">
                <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#205493" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"></path></svg>
                Save to Computer
              </button>
            </span>
            <span>
              <form action="#" :id="uploadFileFormId" method="POST" enctype="multipart/form-data">
                <input @change="triggerUploadForm" accept="string" class="fds-input" hidden :id="uploadFileId" :name="uploadFileId" type="file">
                <button @click="selectLocally" type="button" class="fds-btn fds-btn--fill fds-btn--secondary">
                  <svg class="fsa-icon fsa-icon--size-2" aria-hidden="true" focusable="false" role="img" fill="#205493" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"></path></svg>
                  Upload from Computer
                </button>
              </form>
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
        let appHistory = historyData.value.map( item => {
          if(item.versionName == currVersionName.value){
            item.versionDate = (new Date()).toUTCString()
          }
          return item;
        });
        let rawArray = JSON.parse(JSON.stringify(appHistory));
        //store.dispatch('settings/setVersion', rawArray[0]);
        store.dispatch('settings/replaceHistory', rawArray);
      }
    }

    const deleteVersion = () => {
      if(currVersionName.value!=null){
        let appHistory = historyData.value.filter( item => item.versionName != currVersionName.value);
        let rawArray = JSON.parse(JSON.stringify(appHistory));
        store.dispatch('settings/replaceHistory', rawArray);
      }
    }

    const downloadVersion = () => {
      if(historyData.value[0]!=null) {
        store.dispatch('settings/downloadFile', historyData.value[0]);
      }
    }

    const uploadFileFormId = ref(uuidv4());
    const uploadFileId = ref(uuidv4());
    const uploadForm = ref();

    const selectLocally = (_evt) => { document.getElementById(uploadFileId.value).click() };
    const triggerUploadForm = (_evt) => { uploadForm.value.requestSubmit() };
    const uploadFormSubmit = (_evt) => {
      let [file] = document.getElementById(uploadFileId.value).files;
      store.dispatch('settings/uploadFile', { file: file } );
      _evt.preventDefault();
    }

    watch(historyArray, (value)=>{
      historyData.value = sortVersions( value );
    })
    
    onMounted(()=>{
      store.dispatch('settings/callHistory');
      uploadForm.value = document.getElementById(uploadFileFormId.value);
      uploadForm.value.addEventListener('submit', uploadFormSubmit);
    });

    return {
      baseUrl,
      goto,
      historyData,
      selectVersion,
      loadVersion,
      deleteVersion,
      downloadVersion,
      selectLocally,
      triggerUploadForm,
      uploadFileFormId,
      uploadFileId,
      uploadFormSubmit
    };
  }
};
</script>
