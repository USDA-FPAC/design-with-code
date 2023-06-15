
import { settingsService } from "@/Settings/_services/settings.service";

const state = () =>({
  isLoaded: false,
  errors: [],
  appHistory: []
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getHistory: state => state.appHistory
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

  setVersion( { commit, state, rootState }, _payload ){
    console.log('setVersion()')
    commit('SET_ERRORS', []);
    settingsService.setCurrentVersion(_payload, (result) => {
      if(result.errors){
        commit('SET_ERRORS', result.errors);
      } else {
        commit('SET_HISTORY', result.data );
      }
    });
  },

};

const mutations = {
  SET_ERRORS(state, payload){
    state.errors = payload;
  },

  SET_HISTORY( state, payload ){
    state.appHistory = payload;
  },

};

export const settings = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};