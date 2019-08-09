<template>
  <div
    class="main-menu menu-fixed menu-light menu-shadow menu-accordion"
    data-scroll-to-active="true"
    data-img="assets/images/backgrounds/02.jpg"
  >
    <div class="navbar-header">
      <ul class="nav navbar-nav flex-row">
        <li class="nav-item mr-auto">
          <a class="navbar-brand">
            <img
              style="width:136px"
              class="brand-logo"
              alt="Starbeat"
              src="../assets/starbeat-logotext.png"
            >
          </a>
        </li>
        <li class="nav-item d-md-none">
          <a class="nav-link close-navbar">
            <i class="ft-x"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="main-menu-content">
      <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
        <li
          v-for="(item,index) in menuItems"
          :key="index"
          :id="index"
          :class="item.subitems ? 'nav-item has-sub' : 'nav-item'"
        >
          <router-link class="menu-item" :to="{ name: item.name}" v-if="!item.subitems">
            <i :class="`ft-${item.icon}`"></i>
            <span class="menu-title" data-i18n>{{item.itemTitle}}</span>
          </router-link>
          <a @click="openNavitem(index)" v-else>
            <i :class="`ft-${item.icon}`"></i>
            <span class="menu-title" data-i18n>{{item.itemTitle}}</span>
          </a>
          <ul class="menu-content">
            <li v-for="(subitem,index) in item.subitems" :key="index">
              <router-link
                class="menu-item"
                :to="{ name: item.name, params: { type: subitem.path }}"
              >{{subitem.itemTitle}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="navigation-background"></div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      brandIcon: "assets/images/starbeat-logotext.png",
      menuItems: [
        {
          itemTitle: "Stars",
          icon: "star",
          name: "stars",
          subitems: [
            { itemTitle: "Approved Stars", path: "approved" },
            { itemTitle: "Pending Stars", path: "pending" },
            { itemTitle: "Deleted Stars", path: "deleted" },
            { itemTitle: "Add a Stars", path: "add" },
            { itemTitle: "Search stars", path: "search" }
          ]
        },
        {
          itemTitle: "Movies",
          icon: "film",
          name: "movies",
          subitems: [
            { itemTitle: "Approved Movies", path: "approved" },
            { itemTitle: "Pending Movies", path: "pending" },
            { itemTitle: "Deleted Movies", path: "deleted" },
            { itemTitle: "Add a Movies", path: "add" },
            { itemTitle: "Search Movies", path: "search" }
          ]
        },
        {
          itemTitle: "Categories",
          icon: "layers",
          name: "categories",
          subitems: [
            { itemTitle: "Stars", path: "stars" },
            { itemTitle: "Movies", path: "movies" }
          ]
        },
        {
          itemTitle: "News",
          icon: "file-text",
          name: "news",
          subitems: [
            { itemTitle: "Approved News", path: "approved" },
            { itemTitle: "Pending News", path: "pending" },
            { itemTitle: "Deleted News", path: "deleted" }
          ]
        },
        {
          itemTitle: "Tag Approval",
          icon: "tag",
          name: "tags",
          subitems: [
            { itemTitle: "News", path: "news" },
            { itemTitle: "Gallery", path: "gallery" },
            { itemTitle: "Posts", path: "posts" },
            { itemTitle: "Videos", path: "videos" }
          ]
        },

        {
          itemTitle: "Post",
          icon: "bar-chart",
          name: "post",
          subitems: [
            { itemTitle: "Poll", path: "poll" },
            { itemTitle: "Add a post", path: "add" }
          ]
        },
        {
          itemTitle: "Approval",
          icon: "check",
          name: "approval",
          subitems: [
            { itemTitle: "News", path: "news" },
            { itemTitle: "Gallery", path: "gallery" },
            { itemTitle: "Posts", path: "posts" },
            { itemTitle: "Videos", path: "videos" }
          ]
        },

        {
          itemTitle: "My Activities",
          icon: "fa-tasks",
          name: "activity"
        }
      ]
    };
  },
  methods: {
    openNavitem: index => {
      const classList = document.getElementById(index).classList;
      if (classList.contains("open")) {
        classList.remove("open");
      } else {
        classList.add("open");
      }
    },
    getBrandIcon: () => {
      const classList = document.querySelector("body").classList;
      if (classList.contains("menu-expanded")) {
        this.brandIcon = "assets/images/starbeat-logotext.png";
      } else {
        this.brandIcon = "assets/images/starbeat-logo.png";
      }
    }
  }
};
</script>
