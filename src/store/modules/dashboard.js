import { http } from "../../helpers";

const initialState = {
  starcounts: {
    APPROVED: null,
    DELETED: null,
    NEW: null,
    PENDING: null,
    loading: null
  },
  moviecounts: {
    APPROVED: null,
    DELETED: null,
    NEW: null,
    PENDING: null,
    loading: null,
    categories: null
  },
  star_categories: {
    count: null,
    loading: null
  },
  movie_categories_counts: {
    count: null,
    loading: null
  }
};

const dashboard = {
  namespaced: true,
  state: initialState,
  getters: {},
  mutations: {
    starCountRequest(state) {
      state.starcounts = { loading: true };
    },
    starCountSuccess(state, starcounts) {
      state.starcounts = starcounts;
      state.starcounts.loading = false;
    },
    starCountFailure(state) {
      state.starcounts = { loading: false };
    },
    movieCountRequest(state) {
      state.moviecounts = { loading: true };
    },
    movieCountSuccess(state, moviecounts) {
      state.moviecounts = moviecounts;
      state.moviecounts.loading = false;
    },
    movieCountFailure(state) {
      state.moviecounts = { loading: false };
    },
    starCatCountRequest(state) {
      state.star_categories = { loading: true };
    },
    starCatCountSuccess(state, count) {
      state.star_categories.count = count;
      state.star_categories.loading = false;
    },
    starCatCountFailure(state) {
      state.star_categories = { loading: false };
    },
    movieCatCountRequest(state) {
      state.movie_categories = { loading: true };
    },
    movieCatCountSuccess(state, count) {
      state.movie_categories.count = count;
      state.movie_categories.loading = false;
    },
    movieCatCountFailure(state) {
      state.movie_categories = { loading: false };
    }
  },
  actions: {
    getStarCount({ commit }) {
      commit("starCountRequest");
      http
        .get(`https://dev.starbeat.in/api/v1/star-list-counts`)
        .then(response => {
          if (response.data.success) {
            commit("starCountSuccess", response.data.data);
          }
        })
        .catch(function(error) {
          commit("starCountFailure", error);
        });
    },
    getTemplateCount({ commit }) {
      commit("movieCountRequest");
      http
        .get(`https://dev.starbeat.in/api/v1/movie-list-counts?type=MOVIE`)
        .then(response => {
          if (response.data.success) {
            commit("movieCountSuccess", response.data.data);
          }
        })
        .catch(function(error) {
          commit("movieCountFailure", error);
        });
    },
    getStarCatCount({ commit }) {
      commit("starCatCountRequest");
      http
        .get(`https://dev.starbeat.in/api/v1/category/type/STAR`)
        .then(response => {
          if (response.data.success) {
            commit("starCatCountSuccess", response.data.data.length);
          }
        })
        .catch(function(error) {
          commit("starCatCountFailure", error);
        });
    },
    getMovieCount({ commit }) {
      commit("movieCatCountRequest");
      http
        .get(`https://dev.starbeat.in/api/v1/category/type/MOVIE`)
        .then(response => {
          if (response.data.success) {
            commit("movieCatCountSuccess", response.data.data.length);
          }
        })
        .catch(function(error) {
          commit("movieCatCountFailure", error);
        });
    }
  }
};
export default dashboard;
