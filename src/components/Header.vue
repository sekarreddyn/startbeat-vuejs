<template>
  <nav
    class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light"
  >
    <div class="navbar-wrapper">
      <div class="navbar-container content">
        <div class="collapse navbar-collapse show" id="navbar-mobile">
          <ul class="nav navbar-nav mr-auto float-left">
            <li class="nav-item mobile-menu d-md-none mr-auto">
              <a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                <i class="ft-menu font-large-1"></i>
              </a>
            </li>
            <li class="nav-item d-none d-md-block">
              <a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                <i class="ft-menu" @click="toggleMenu"></i>
              </a>
            </li>
          </ul>
          <ul class="nav navbar-nav float-right">
            <li class="dropdown dropdown-user nav-item" id="profile">
              <a
                class="dropdown-toggle nav-link dropdown-user-link"
                @click="openDropdown"
                data-toggle="dropdown"
              >
                <span class="avatar avatar-online">
                  <img src="../assets/images/5.jpg" alt="avatar">
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <div class="arrow_box_right" @click="openDropdown">
                  <a class="dropdown-item" href="#">
                    <span class="avatar avatar-online">
                      <img src="../assets/images/5.jpg" alt="avatar">
                      <span class="user-name text-bold-700 ml-1">John Doe</span>
                    </span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" @click="logout">
                    <i class="ft-power"></i> Logout
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("auth", ["signout"]),
    toggleMenu: event => {
      event.preventDefault();
      const classList = document.querySelector("body").classList;
      if (classList) {
        if (classList.contains("menu-expanded")) {
          classList.remove("menu-expanded");
          classList.add("menu-collapsed");
        } else {
          classList.remove("menu-collapsed");
          classList.add("menu-expanded");
        }
      }
    },
    openDropdown: () => {
      const classList = document.getElementById("profile").classList;
      if (classList) {
        if (classList.contains("show")) {
          classList.remove("show");
        } else {
          classList.add("show");
        }
      }
    },
    logout() {
      this.signout();
    }
  }
};
</script>
