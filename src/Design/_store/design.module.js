
import { designService } from '@/Design/_services/design.service';

const state = () =>({
  isLoaded: false,
  errors: [],
  itemsList: [],
  deleteEnabled: false,
  undoEnabled: false,
  redoEnabled: false
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getItems: state => state.itemsList,
  getDeleteEnabled: state => state.deleteEnabled,
  getUndoEnabled: state => state.undoEnabled,
  getRedoEnabled: state => state.redoEnabled
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
  },

  setDeleteEnabled( { commit, state, rootState } , _payload){
    commit('SET_DELETE_ENABLED', _payload);
  },

  setUndoEnabled( { commit, state, rootState } , _payload){
    commit('SET_UNDO_ENABLED', _payload);
  },

  setRedoEnabled( { commit, state, rootState } , _payload){
    commit('SET_REDO_ENABLED', _payload);
  }

};

const mutations = {
  SET_ERRORS(state, payload){
    state.errors = payload;
  },

  SET_ITEMS( state, payload ){
    state.itemsList = payload;
  },

  SET_DELETE_ENABLED( state, payload){
    state.deleteEnabled = payload;
  },

  SET_UNDO_ENABLED( state, payload){
    state.undoEnabled = payload;
  },

  SET_REDO_ENABLED( state, payload){
    state.redoEnabled = payload;
  },

};

export const design = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};