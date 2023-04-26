

const state = () =>({
  isLoaded: false,
  errors: [],
  html: ''
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getHtml: state => state.html
};

const actions = {

  setHtml( { commit }, _payload ){
    commit('SET_HTML', _payload);
  }

};

const mutations = {
  SET_ERRORS(state, payload){
    state.errors = payload;
  },

  SET_HTML( state, payload ){
    state.html = payload;
  },

};

export const codeExport = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};