<template>
  <div class="wrapper">
    <div class="topbar">
      <div class="topbar-menu">
        <router-link
          class="link"
          :class="{ active: isActiveHome }"
          :to="{ name: 'home' }"
        >
          Резюме
        </router-link>
        <router-link
          class="link"
          :class="{ active: isActivePortfolio }"
          :to="{ name: 'portfolio' }"
        >
          Портфолио
        </router-link>
        <router-link
          class="link"
          :class="{ active: isActiveContact }"
          :to="{ name: 'contact' }"
        >
          Контакты
        </router-link>
      </div>
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" v-model="isActiveMenu" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul class="menu__box">
          <li v-on:click="closeMenu">
            <router-link
              class="menu__item"
              :class="{ active: isActiveHome }"
              :to="{ name: 'home' }"
            >
              Резюме
            </router-link>
          </li>
          <li v-on:click="closeMenu">
            <router-link
              class="menu__item"
              :class="{ active: isActivePortfolio }"
              :to="{ name: 'portfolio' }"
            >
              Портфолио
            </router-link>
          </li>
          <li v-on:click="closeMenu">
            <router-link
              class="menu__item"
              :class="{ active: isActiveContact }"
              :to="{ name: 'contact' }"
            >
              Контакты
            </router-link>
          </li>
        </ul>
      </div>
      <div class="name">Артём Гайтеров</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PvTopbar",
  data() {
    return {
      isActiveMenu: false,
    };
  },
  computed: {
    isActiveHome() {
      return this.$route.path === "/home";
    },
    isActivePortfolio() {
      return this.$route.path === "/portfolio";
    },
    isActiveContact() {
      return this.$route.path === "/contact";
    },
  },
  methods: {
    closeMenu() {
      this.isActiveMenu = false;
    },
  },
  watch: {
    isActiveMenu(e) {
      const className = "scroll-disable";
      if (e) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Microsoft Sans Serif ", sans-serif;
}

.scroll-disable {
  overflow: hidden;
  background: rgba(0, 0, 0, 0.1);
}
</style>

<style scoped>
.wrapper {
  background: rgb(0, 71, 129);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
}

.topbar {
  background: rgb(0, 71, 129);
  margin: 0 auto 0 auto;
  max-width: 1280px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.topbar-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 390px;
  margin-right: 15px;
  margin-left: 15px;
  color: rgb(0, 0, 0);
  font-size: 23px;
}

/* hamburger menu */
.hamburger-menu {
  display: none;
}

.link {
  color: rgb(255, 255, 255);
  padding-right: 26px;
  text-decoration: none;
  transition: color 0.3s;
}

.link:hover {
  color: rgb(245, 109, 109);
}

.active {
  color: rgb(255, 0, 0) !important;
}

.name {
  font-size: 20px;
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  margin-right: 15px;
  margin-left: 15px;
}

#menu__toggle {
  position: absolute;
  left: 34px;
  top: 28px;
  opacity: 0;
}

#menu__toggle:checked ~ .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
  background: rgb(255, 255, 255);
}
#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
  background: rgb(255, 255, 255);
}
#menu__toggle:checked ~ .menu__box {
  visibility: visible;
  left: 0;
  background: rgb(26, 47, 104);
}

.menu__btn {
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 30px;

  width: 26px;
  height: 26px;

  cursor: pointer;
  z-index: 1;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #ffffff;
  transition-duration: 0.3s;
}
.menu__btn > span::before {
  content: "";
  top: -8px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}

.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: -100%;
  height: 100%;
  margin: 0;
  padding: 80px 0 0 24px;
  text-align: center;
  list-style: none;
  background-color: #ffffff;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.6);
  transition-duration: 0.3s;
}

.menu__item {
  display: block;
  padding: 14px 42px;
  font-size: 24px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  text-decoration: none;
  transition-duration: 0.3s;
}

/* media for phone and table */
@media screen and (max-width: 842px) {
  .hamburger-menu {
    display: block;
  }
  .topbar-menu {
    display: none;
  }
}
</style>
