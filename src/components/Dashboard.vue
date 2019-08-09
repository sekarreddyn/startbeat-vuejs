<template>
  <div>
    <Layout/>
    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-wrapper-before"></div>
        <div class="content-header row">
          <div class="content-header-left col-md-4 col-12 mb-2">
            <h3 class="content-header-title">Home</h3>
          </div>
          <div class="content-header-right col-md-8 col-12">
            <div class="breadcrumbs-top float-md-right">
              <div class="breadcrumb-wrapper mr-1">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">Layouts</a>
                  </li>
                  <li class="breadcrumb-item active">Navigation Light</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="content-body dashboard">
          <!-- What is-->
          <div class="card">
            <div class="align-items-center p-2 row m-0">
              <div class="col-md-6 pl-0 pull-left">
                <h4 class="card-title m-0">Stars</h4>
              </div>
              <div class="col-md-6 text-right pull-right pr-0">
                <router-link
                  to="/web/star/add"
                  class="btn btn-outline-primary btn-sm mr-1"
                >Add a Star</router-link>
                <router-link
                  to="/web/stars/search"
                  class="btn btn-outline-primary btn-sm"
                >Search Star</router-link>
              </div>
            </div>
            <!-- <Loading v-if="stars.loading"/> -->
            <div class="row m-0 mb-2 px-2">
              <div class="col-md-4 pl-0">
                <CardLoading v-if="stars.loading"/>
                <router-link to="/web/stars/approved" exact v-else>
                  <div class="list-group-item py-2">
                    <span class="bg-success bg-accent-2 rounded-circle">
                      <i class="ft-user-check text-success"/>
                    </span>
                    <h3 class="display-4 mb-0">{{stars.APPROVED}}</h3>
                    <p class="blue-grey mb-0">Approved</p>
                  </div>
                </router-link>
              </div>
              <div class="col-md-4">
                <CardLoading v-if="stars.loading"/>
                <router-link to="/web/stars/pending" exact v-else>
                  <div class="list-group-item py-2">
                    <span class="bg-warning bg-accent-2 rounded-circle">
                      <i class="ft-user text-warning"/>
                    </span>

                    <h3 class="display-4 mb-0">{{stars.PENDING}}</h3>
                    <p class="blue-grey mb-0">Pending</p>
                  </div>
                </router-link>
              </div>
              <div class="col-md-4 pr-0">
                <CardLoading v-if="stars.loading"/>
                <router-link to="/web/stars/deleted" exact v-else>
                  <div class="list-group-item py-2">
                    <span class="bg-danger bg-accent-1 rounded-circle">
                      <i class="ft-user-x text-danger"/>
                    </span>
                    <h3 class="display-4 mb-0">{{stars.DELETED}}</h3>
                    <p class="blue-grey mb-0">Deleted</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="align-items-center p-2 row m-0">
              <div class="col-md-6 pl-0 pull-left">
                <h4 class="card-title m-0">Movies</h4>
              </div>
              <div class="col-md-6 text-right pull-right pr-0">
                <router-link
                  to="/web/template/add"
                  class="btn btn-outline-primary btn-sm mr-1"
                >Add a Movie</router-link>

                <router-link
                  to="/web/templates/search"
                  exact
                  class="btn btn-outline-primary btn-sm"
                >Search Movies</router-link>
              </div>
            </div>

            <!-- <Loading/> -->
            <div class="row m-0 mb-2 px-2">
              <div class="col-md-3">
                <CardLoading v-if="movies.loading"/>
                <router-link to="/web/templates/approved" exact v-else>
                  <div class="list-group-item py-2">
                    <span class="bg-success bg-accent-2 rounded-circle">
                      <i class="ft-check-circle text-success"/>
                    </span>
                    <h3 class="display-4 mb-0">{{movies.APPROVED}}</h3>
                    <p class="blue-grey mb-0">Approved</p>
                  </div>
                </router-link>
              </div>
              <div class="col-md-3">
                <CardLoading v-if="movies.loading"/>
                <router-link to="/web/templates/pending" exact v-else>
                  <div class="list-group-item py-2">
                    <span class="bg-warning bg-accent-2 rounded-circle">
                      <i class="ft-clock text-warning"/>
                    </span>
                    <h3 class="display-4 mb-0">{{movies.PENDING}}</h3>
                    <p class="blue-grey mb-0">Pending</p>
                  </div>
                </router-link>
              </div>
              <div class="col-md-3">
                <CardLoading v-if="movies.loading"/>
                <router-link to="/web/templates/new" exact v-else>
                  <div class="list-group-item">
                    <span class="bg-info bg-accent-1 rounded-circle">
                      <i class="ft-bookmark text-info"/>
                    </span>
                    <h3 class="display-4 mb-0">{{movies.NEW}}</h3>
                    <p class="blue-grey mb-0">New</p>
                  </div>
                </router-link>
              </div>
              <div class="col-md-3">
                <CardLoading v-if="movies.loading"/>
                <router-link to="/web/templates/deleted" exact v-else>
                  <div class="list-group-item">
                    <span class="bg-danger bg-accent-1 rounded-circle">
                      <i class="ft-trash text-danger"/>
                    </span>
                    <h3 class="display-4 mb-0">{{movies.DELETED}}</h3>
                    <p class="blue-grey mb-0">Deleted</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="align-items-center p-2 row m-0">
              <div class="col-md-6 pl-0 pull-left">
                <h4 class="card-title m-0">Categories</h4>
              </div>
              <div class="col-md-6 text-right pull-right pr-0"/>
            </div>

            <div class="row m-0 mb-2 px-2">
              <div class="col-md-6 pl-0">
                <CardLoading v-if="starCat.loading && movieCat.loading"/>
                <router-link to="/web/categories/star" class="menu-item" v-else>
                  <div class="list-group-item py-2">
                    <span class="bg-purple bg-lighten-4 rounded-circle">
                      <i class="ft-star purple"/>
                    </span>

                    <h3 class="display-4 mb-0">{{starCat.count}}</h3>

                    <p class="blue-grey darken-2 mb-0">Star</p>
                  </div>
                </router-link>
              </div>
              <div class="col-md-6">
                <CardLoading v-if="starCat.loading && movieCat.loading"/>
                <router-link to="/web/categories/movie" class="menu-item" v-else>
                  <div class="list-group-item">
                    <span class="bg-blue bg-lighten-4 rounded-circle">
                      <i class="ft-video blue"/>
                    </span>

                    <h3 class="display-4 mb-0">{{movieCat.count}}</h3>

                    <p class="blue-grey darken-2 mb-0">Movie</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "./Layout";
import Loading from "./loading/loading";

import CardLoading from "./loading/list";
import { mapActions } from "vuex";
export default {
  components: {
    Layout,
    Loading,
    CardLoading
  },
  computed: {
    stars() {
      return this.$store.state.dashboard.starcounts;
    },
    movies() {
      return this.$store.state.dashboard.moviecounts;
    },
    starCat() {
      return this.$store.state.dashboard.star_categories;
    },
    movieCat() {
      return this.$store.state.dashboard.movie_categories;
    }
  },
  created() {
    this.getStarCount();
    this.getTemplateCount();
    this.getStarCatCount();
    this.getMovieCount();
  },

  methods: {
    ...mapActions("dashboard", [
      "getStarCount",
      "getTemplateCount",
      "getStarCatCount",
      "getMovieCount"
    ])
  }
};
</script>
<style>
.user-avatar {
  font-size: 16px;
  border: solid 1px #fff;
  padding: 5px;
  border-radius: 50%;
  transform: translateX(5px);
  display: inline-block;
  transition: all 0.3s linear;
}

.user-avatar:hover {
  background: #fff;
  color: #5624d2;
}

.dashboard .list-group-item {
  text-align: center;
  transition: all 0.3s linear;
  cursor: pointer;
  /*padding-left: 80px;*/
  height: 100%;
}

.dashboard .list-group-item:hover {
  /*border: solid 1px #1976d275;*/
  -webkit-transform: translateY(-3px);
  -ms-transform: translateY(-3px);
  -o-transform: translateY(-3px);
  transform: translateY(-3px);
  box-shadow: 0px 15px 20px -10px rgba(0, 0, 0, 0.1);
}

.rc-pagination li,
.rc-pagination li a {
  outline: none !important;
}

.rc-pagination li {
  transition: all 0.3s linear;
}

.dashboard .list-group-item .blue-grey {
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-size: 13px;
}

.dashboard .list-group-item span {
  /*position: absolute;*/
  width: 40px;
  height: 40px;
  line-height: 42px;
  font-size: 20px;
  text-align: center;
  /*left: 20px;*/
  border-radius: 50%;
  top: 0;
  bottom: 0;
  margin: 0 auto 20px;
  display: block;
  /*-webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    -o-transform: scale(1.3);
    transform: scale(1.3);*/
}

.dashboard .list-group-item .display-4 {
  font-size: 36px;
  letter-spacing: 0.04em;
}

.dashboard .list-group-item span i {
  display: inline-block;
  position: relative;
}

.dashboard .list-group-item span i.ft-user-check,
.dashboard .list-group-item span i.ft-user-x {
  left: 2px;
  top: 1px;
}

td.td-truncate {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 1px;
}

.text-truncate.maw {
  max-width: 180px;
}

.breadcrumb-item .btn-primary-white {
  margin-right: 1rem;
}

.breadcrumb-item .btn-primary-white:last-child {
  margin-right: 0;
}

.btn-primary-white {
  background: #7347de;
  color: #fff;
  border: 1px solid #7347de;
  box-shadow: 0 2px 5px -1px #351090;
  padding: 12px 15px;
  transition: all 0.3s ease-in;
}

.btn-primary-white:hover {
  color: #1e2022;
  background: #fff;
  box-shadow: 0 4px 11px rgba(255, 255, 255, 0.35);
  -webkit-transform: translateY(-1px);
  -ms-transform: translateY(-1px);
  -o-transform: translateY(-1px);
  transform: translateY(-1px);
}

text-area.form-control {
  line-height: 1.6;
}

.embed-responsive {
  background: #736f81;
}

.dashboard .loading {
  margin: 80px auto;
}
.btn.pointer-auto {
  cursor: auto !important;
}
</style>