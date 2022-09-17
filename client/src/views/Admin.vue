<script>
import NavbarVue from "../components/Navbar.vue";
import { reactive } from "vue";
import { useStore } from "vuex";
import axios from "axios";

export default {
  setup() {
    const { state: store } = useStore();
    const state = reactive({
      isOpenErr: false,
      isOpenSucc: false,
      email: "",
      message: "",
    });

    const AddAdmin = async () => {
      try {
        const { data } = await axios.patch(
          `http://localhost:8000/api/auth/admin/${store?.auth?.user?._id}`,
          { email: state.email }
        );
      } catch (err) {
        const { response } = err;
        state.message = response.data.msg;
        state.isOpenErr = true;
        setTimeout(() => (state.isOpenErr = false), 1200);
      }
    };

    return {
      state,
      AddAdmin,
    };
  },
  components: {
    NavbarVue,
  },
};
</script>
<template>
  <div class="admin-container">
    <NavbarVue />
    <div class="admin-container__content">
      <div class="err-alert" v-if="state.isOpenErr">
        <h5>{{ state.message }}</h5>
      </div>
      <h2>Set the new admin</h2>
      <input type="email" v-model="state.email" placeholder="Add email.." />
      <button @click="AddAdmin" class="admin-container__content-btn">
        Add Admin
      </button>
    </div>
  </div>
</template>
<style>
.admin-container {
  width: 100%;
  min-height: 100vh;
}

.admin-container__content {
  width: 40%;
  border-radius: 6px;
  padding: 1.5rem;
  margin: 60px auto;
  text-align: center;

  background-color: rgb(240, 240, 240);
}

.admin-container__content h2 {
  font-weight: 600;
  text-transform: capitalize;
  font-size: 1.6em;
}

.admin-container__content input {
  border: none;
  outline: none;
  width: 450px;
  display: block;
  margin: 12px auto 25px;
  padding: 0.7rem 0.8rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.8rem;
}

.admin-container__content button {
  padding: 0.7rem 2rem;
  border-radius: 100px;
  background-color: #101010;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
}

.err-alert {
  margin-bottom: 20px;
}

.err-alert h5 {
  font-weight: 500;
  font-size: 1em;
}
</style>
