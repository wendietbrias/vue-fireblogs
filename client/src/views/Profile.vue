<script setup>
import NavbarVue from "../components/Navbar.vue";
import { reactive, watchEffect } from "vue";
import { useStore } from "vuex";
import jwtDecode from "jwt-decode";

const { state: store } = useStore();
const action = useStore();

const state = reactive({
  firstName: store?.auth?.user?.firstName,
  lastName: store?.auth?.user?.lastName,
  name: store?.auth?.user?.name,
  email: store?.auth?.user?.email,
  _id: store?.auth?.user?._id,
  saved: false,
});

watchEffect(() => {
  if (!store.auth?.user) {
    window.location.href = "http://127.0.0.1:5173";
  }
});

const HandleUpdate = (e) => {
  e.preventDefault();
  try {
    action.dispatch("UpdateProfile", state);
    state.saved = true;
  } catch (err) {
    return err;
  }
};

const handleClose = () => (state.saved = false);
</script>

<template>
  <div class="profile-container">
    <NavbarVue />
    <div v-if="state.saved === true" class="profile-container__modal">
      <div class="modal__content">
        <h5>Saved is success</h5>
        <button @click="handleClose">Close</button>
      </div>
    </div>
    <section class="profile-container__container">
      <h2>Your Profile</h2>
      <form @submit="HandleUpdate" class="container__form">
        <div class="form-control">
          <label>Firstname</label>
          <input type="text" v-model="state.firstName" />
        </div>
        <div class="form-control">
          <label>Lastname</label>
          <input type="text" v-model="state.lastName" />
        </div>
        <div class="form-control">
          <label>Name</label>
          <input type="text" v-model="state.name" />
        </div>
        <div class="form-control">
          <label>Email</label>
          <input type="text" v-model="state.email" />
        </div>
        <button type="submit" class="form-btn">Save Changes</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
.profile-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.profile-container__container {
  width: 50%;
  background-color: rgb(243, 243, 243);
  border-radius: 6px;
  padding: 2rem;
  margin: 60px auto;
}

.profile-container__container h2 {
  text-align: center;
  font-weight: 500;
  font-size: 1.9em;
}

.container__form {
  text-align: center;
  margin-top: 25px;
}

.container__form .form-control {
  text-align: left;
}

.form-control input {
  display: block;
  width: 100%;
  margin: 8px 0 12px;
  padding: 0.8em 1rem;
  border-radius: 4px;
  background-color: #e4e4e4;
  border: none;
  outline: none;
}

.form-control label {
  font-size: 0.9em;
  font-weight: 500;
}

.form-btn {
  outline: none;
  cursor: pointer;
  background-color: #101010;
  color: #fff;
  padding: 0.8rem 1.2rem;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.9em;
  margin-top: 30px;
}

.profile-container__modal {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  background-color: rgba(10, 10, 10, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__content {
  background-color: #fff;
  border-radius: 3px;
  text-align: center;
  padding: 2rem 2rem;
}

.modal__content h5 {
  font-size: 1.5em;
  font-weight: 600;
}

.modal__content button {
  background-color: #101010;
  color: #fff;
  padding: 0.6rem 2rem;
  border-radius: 100px;
  cursor: pointer;
  font-size: 1.1em;
  outline: none;
  margin-top: 20px;
}
</style>
