import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import dashboard from "./modules/dashboard";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  mutations: {},
  actions: {},
  modules: {
    auth,
    dashboard
  }
});
