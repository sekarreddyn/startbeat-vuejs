<template>
  <div class="app-content content" style="marginleft:0px">
    <div class="content-wrapper">
      <div class="bg-full-screen-image">
        <section class="flexbox-container">
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="col-md-4 col-10 box-shadow-2 p-0">
              <div class="card border-grey border-lighten-3 px-1 py-1 m-0">
                <div class="card-header border-0">
                  <div class="text-center mb-1">
                    <h1>
                      <img class="brand-logo-login" alt="Starbeat" src="/assets/favicon.png">
                    </h1>
                  </div>
                  <h3 class="text-center text-muted">Member Login</h3>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <form class="form-horizontal login-form" @submit.prevent="onSubmit">
                      <fieldset class="form-group position-relative has-icon-left">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Your Username"
                          name="username"
                          v-model="formdata.username"
                        >
                        <div class="form-control-position">
                          <i class="ft-user"/>
                        </div>
                        <div
                          v-show="submitted && !formdata.username"
                          class="help-block text-danger"
                        >Username is required</div>
                      </fieldset>
                      <fieldset class="form-group position-relative has-icon-left">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Enter Password"
                          name="password"
                          v-model="formdata.password"
                        >
                        <div class="form-control-position">
                          <i class="ft-lock"/>
                        </div>
                        <div
                          v-show="submitted && !formdata.password"
                          class="help-block text-danger"
                        >Password is required</div>
                      </fieldset>
                      <div class="form-group">
                        <div class="form-group text-center">
                          <button
                            class="btn btn-block btn-glow btn-bg-gradient-x-purple-blue col-12 mr-1 mb-1"
                            :disabled="auth.status.loggingIn"
                          >Sign in</button>

                          <img
                            v-show="auth.status.loggingIn"
                            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                          >
                          <div
                            class="alert alert-danger"
                            v-show="auth.status.error"
                          >{{auth.status.error}}</div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      formdata: {
        username: "",
        password: ""
      },
      submitted: false
    };
  },
  computed: {
    ...mapState(["auth"])
  },
  methods: {
    ...mapActions("auth", ["signin"]),
    onSubmit() {
      this.submitted = true;
      const { username, password } = this.formdata;
      if (username && password) {
        this.signin(this.formdata);
      }
    }
  }
};
</script>
