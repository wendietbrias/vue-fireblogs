<script>
import decode from "jwt-decode";
import { useStore } from "vuex";
import { reactive } from "vue";

export default {
  setup() {
    const { state: store } = useStore();
    const action = useStore();

    const state = reactive({
      user: store.auth.user ? store.auth.user : null,
      dropdown: false,
    });

    const showNav = () => (state.dropdown = !state.dropdown);

    const logoutHandler = () => {
      action.commit("LogoutHandler");
      window.location.href = "http://127.0.0.1:5173";
    };

    return {
      state,
      logoutHandler,
      showNav,
    };
  },
};
</script>

<template>
  <header class="header-app">
    <nav class="header-app__navbar">
      <span class="navbar-brand">FireBlogs</span>
      <ul class="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Blogs</a></li>
        <li v-if="state?.user?.isAdmin"><a href="/create">Create Blog</a></li>

        <li v-if="!state.user"><a href="/auth">Login / Register</a></li>
        <li class="navbar-links__dropdown">
          <span v-if="state.user" @click="showNav" class="dropdown__avatar">{{
            state?.user?.name?.charAt(0)
          }}</span>
          <div class="dropdown__content" v-if="state.dropdown">
            <div class="dropdown__content-profiles">
              <span @click="showNav" class="dropdown__avatar-content">{{
                state?.user?.name?.charAt(0)
              }}</span>
              <div class="content-profiles__names">
                <h5>{{ state?.user?.email }}</h5>
                <h6>{{ state?.user?.name }}</h6>
              </div>
            </div>
            <div class="dropdown__content-services">
              <button @click="logoutHandler">Logout</button>
              <a href="/profile"><button>Profile</button></a>
              <a href="/admin" v-if="state?.user?.isAdmin"
                ><button>Admin</button></a
              >
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.dropdown__content-services {
  padding: 1rem 0 0;
}

.dropdown__content-services button {
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 0.9em;
  font-weight: 600;
  margin: 12px 0 12px;
  display: block;
}

.dropdown__avatar {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2em;
  background-color: #101010;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
}

.navbar-links__dropdown {
  position: relative;
}

.dropdown__content {
  position: absolute;
  bottom: -210px;
  background-color: rgba(10, 10, 10, 0.7);
  border-radius: 5px;
  right: 0;
  padding: 1rem 1.4rem;
  color: #fff;
}

.dropdown__content-profiles {
  display: flex;
  align-items: center;
  border-bottom: solid 1px #fff;
  padding-bottom: 1rem;
}

.dropdown__avatar-content {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-transform: uppercase;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}

.dropdown__content-profiles h5,
.dropdown__content-profiles h6 {
  font-weight: 500;
}

.header-app {
  width: 100%;
  padding: 1.4rem 3rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.navbar-brand {
  font-weight: 500;
  font-size: 1.4em;
  cursor: pointer;
}

.header-app__navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-links {
  display: flex;
  align-items: center;
  list-style: none;
}

.navbar-links li {
  margin-left: 20px;
}

.navbar-links li a {
  text-decoration: none;
  color: #101010;
  font-weight: 500;
  font-size: 0.9em;
  text-transform: uppercase;
}
</style>
