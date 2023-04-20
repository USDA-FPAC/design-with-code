
import { designService } from '@/Design/_services/design.service';

const state = () =>({
  isLoaded: false,
  errors: [],
  itemsList: []
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getItems: state => state.itemsList
};

const actions = {

  setItems( { commit, state, rootState } ){
    commit('SET_ERRORS', []);

    designService.getItems( (result) => {
      if(result.errors){
        commit('SET_ERRORS', result.errors);
      } else {
        commit('SET_ITEMS', result.data );
      }
    });
  }

};

const mutations = {
  SET_ERRORS(state, payload){
    state.errors = payload;
  },

  SET_ITEMS( state, payload ){
    state.itemsList = payload;
  },

};

export const design = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};