<template>
  <div>
    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-b--m">
            <h1>About DwC</h1>
          </div>
        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">
          

          <div class="fds-level fds-level--none fds-level--full@l fds-level--grow-auto">
            <span class="fds-level__item--align-top" width="50%">
              <p class="fds-text--lead">
                Design With Code (DwC) is an Open Source tool created to allow FPAC Teams to quickly mock up screens using the FPAC Design System.
              </p>
              <p>
                DWC It supports the requirements of OMB Memorandum M-16-21, “Federal Source Code Policy: Achieving Efficiency, Transparency, and Innovation through Reusable and Open Source Software". This policy specifies the requirement of agencies to enact plans to release at least 20 percent of new custom-developed source code as Open Source Software (OSS) when developing new custom software.
              </p>
            </span>
            
            <span class="fds-m-l--l@l fds-level__item--align-top">
              <img src="/img/home/homepage_illustrations_developer_2x.png" style="width:500px" />
            </span>
          </div>
        </div>
      </div>


    </main>
</div>
</template>

<script>
import { defineAsyncComponent, ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";
import { v4 as uuidv4 } from "uuid";

export default {

setup(props) {
  const baseUrl = ref(import.meta.env.BASE_URL);
  const store = useStore();
  const { goto } = useNavigation();

  onMounted(()=>{
    //store.dispatch("videos/setVideos");
  });

  return {
    baseUrl,
    goto,
  };
}
};
</script>
