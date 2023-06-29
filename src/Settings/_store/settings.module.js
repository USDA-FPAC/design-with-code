
import { settingsService } from "@/Settings/_services/settings.service";

const state = () =>({
  isLoaded: false,
  errors: [],
  appHistory: [],
  currentVersion: {}
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getHistory: state => state.appHistory,
  getCurrentVersion: state => state.currentVersion
};

const actions = {

  callHistory({ commit, state, rootState }){
    console.log('callHistory()')
    commit('SET_ERRORS', []);
    settingsService.getLocalHistory( (result) => {
      //console.log('callHistory result', result)
      if(result.errors){
        commit('SET_ERRORS', result.errors);
      } else {
        commit('SET_HISTORY', result.data );
      }
    });
  },
  
  addHistory( { commit, state, rootState }, _payload ){
    console.log('addHistory()')
    commit('SET_ERRORS', []);
    settingsService.addLocalHistory(_payload, (result) => {
      if(result.errors){
        commit('SET_ERRORS', result.errors);
      } else {
        commit('SET_HISTORY', result.data );
      }
    });
  },

  replaceHistory( { commit, state, rootState }, _payload ){
    console.log('replaceHistory()')
    commit('SET_ERRORS', []);
    settingsService.replaceLocalHistory(_payload, (result) => {
      if(result.errors){
        commit('SET_ERRORS', result.errors);
      } else {
        commit('SET_HISTORY', result.data );
      }
    });
  },

  setCurrentVersion( { commit, state, rootState }, _payload ){
    console.log('setCurrentVersion()')
    commit('SET_ERRORS', []);
    settingsService.setLocalVersion(_payload, (result) => {
      if(result.errors){
        commit('SET_ERRORS', result.errors);
      } else {
        commit('SET_HISTORY', result.data );
      }
    });
  }

};

const mutations = {
  SET_ERRORS(_state, _payload){
    _state.errors = _payload;
  },

  SET_HISTORY( _state, _payload ){
    if(_payload.length > 0 ) {
      let versions = _payload.sort( (a, b) => new Date(b.versionDate) - new Date(a.versionDate) );
      _state.appHistory = versions
      _state.currentVersion = versions[0];
    } else {
      _state.currentVersion = null;
    }
  },

};

export const settings = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};