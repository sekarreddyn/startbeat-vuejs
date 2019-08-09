import router from "../../routes";
import { http } from "../../helpers";
const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null, error: null };

const auth = {
  namespaced: true,
  state: initialState,
  getters: {},
  mutations: {
    signinRequest(state, user) {
      state.status = { loggingIn: true };
      state.user = user;
    },
    signinSuccess(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    signinFailure(state, error) {
      state.status = {};
      state.user = null;
      state.status = { error };
    },
    signout(state) {
      state.status = {};
      state.user = null;
      router.push("/signin");
    }
  },
  actions: {
    signin({ commit }, payload) {
      commit("signinRequest", payload.username);
      http
        .get(`https://dev.starbeat.in/auth/internal/login`, {
          params: payload
        })
        .then(response => {
          if (response.data.success) {
            let user = {
              ...response.data.data,
              token: response.headers["x-auth-token"]
            };
            commit("signinSuccess", user);
            router.push("/");
            localStorage.setItem("user", JSON.stringify(user));
          } else {
            commit("signinFailure", response.data.reason);
          }
        })
        .catch(function(error) {
          commit("signinFailure", error);
        });
    },
    signout({ commit }, payload) {
      commit("signout", payload);
    }
  }
};
export default auth;
