import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Link store",
    links: [
      "http://google.com",
      "http://courseintro.com",
      "http://youtbue.com",
    ],
  },
  getters: {
    countLinks: state => {
      return state.links.length;
    },
  },
  mutations: {
    ADD_LINK: (state, payload) => {
      state.links.push(payload);
    },
    REMOVE_LINK: (state, payload) => {
      state.links.splice(payload, 1);
    },
    REMOVE_ALL: state => {
      state.links = {};
    },
  },
  actions: {
    removeLink: (context, payload) => {
      context.commit("REMOVE_LINK", payload);
    },
    removeAll({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit("REMOVE_ALL");
          resolve();
        }, 1500);
      });
    },
  },
  modules: {},
});
