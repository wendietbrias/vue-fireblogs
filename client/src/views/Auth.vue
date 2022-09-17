<script>
import { reactive, watchEffect } from "vue";
import { useStore } from "vuex";
import Alert from "../components/Alert.vue";

export default {
  setup() {
    const { state: store } = useStore();
    const action = useStore();

    const state = reactive({
      isSignUp: false,
      name: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (state.isSignUp) {
        const schema = {
          name: state.name,
          email: state.email,
          firstName: state.firstName,
          lastName: state.lastName,
          password: state.password,
        };

        action.dispatch("SignUp", schema);
        return (window.location.href = "http://127.0.0.1:5173/auth");
      } else {
        action.dispatch("SignIn", {
          email: state.email,
          password: state.password,
        });
      }
    };

    const switchHandler = () => {
      return (state.isSignUp = !state.isSignUp);
    };

    return {
      state,
      handleSubmit,
      switchHandler,
      store,
    };
  },
  components: {
    Alert,
  },
};
</script>
<template>
  <div class="auth-container">
    <div class="auth-container__form">
      <div v-if="store.auth.isOpen === true" class="auth-container__alert">
        <Alert />
      </div>
      <button @click="switchHandler" class="auth-container__btn-switch">
        {{ state.isSignUp ? "Already have account?" : "Don't have account?" }}
        <a href="/">{{ state.isSignUp ? "Login" : "Register" }}</a>
      </button>
      <h2>{{ state.isSignUp ? "Create FireBlog" : "Login to FireBlog" }}</h2>
      <form class="auth-container__form-content">
        <div v-if="state.isSignUp === true" class="form-content__form-control">
          <input
            v-model="state.firstName"
            type="text"
            placeholder="Firstname"
          />
        </div>
        <div v-if="state.isSignUp === true" class="form-content__form-control">
          <input v-model="state.lastName" type="text" placeholder="Lastname" />
        </div>
        <div v-if="state.isSignUp === true" class="form-content__form-control">
          <input v-model="state.name" type="text" placeholder="userName" />
        </div>
        <div class="form-content__form-control">
          <input v-model="state.email" type="email" placeholder="Email" />
        </div>
        <div class="form-content__form-control">
          <input
            v-model="state.password"
            type="password"
            placeholder="Passsword"
          />
        </div>
      </form>
      <div class="auth-container__services">
        <button v-if="state.isSignUp === false" class="services__forgot-pass">
          Forgot your password?
        </button>
        <button @click="handleSubmit" class="services__save">
          Sign {{ state.isSignUp ? "Up" : "In" }}
        </button>
      </div>
    </div>
    <div class="auth-container__img">
      <img src="images/coding.jpg" alt="coding" />
    </div>
  </div>
</template>
<style scoped>
.auth-container {
  display: flex;
  align-items: stretch;
}

.auth-container__form {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.auth-container__btn-switch {
  border: none;
  background: transparent;
  color: #101010;
  cursor: pointer;
  outline: none;
  font-weight: 500;
  font-size: 0.93em;
  margin-bottom: 30px;
}

.auth-container__btn-switch a {
  text-decoration: underline;
  color: #101010;
}

.auth-container__form h2 {
  font-size: 2.4em;
  font-weight: 600;
  margin-bottom: 30px;
}

.form-content__form-control {
  margin-bottom: 8px;
}

.form-content__form-control input {
  width: 400px;
  outline: none;
  background-color: #f2f7f6;
  padding: 0.9rem 1rem;
  border-radius: 6px;
  border: none;
  font-weight: 600;
}

.auth-container__services {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-container__services button {
  border: none;
  background: none;
  cursor: pointer;
  margin: 0;
}

.services__forgot-pass {
  font-weight: 500;
  text-decoration: underline;
  font-size: 0.92em;
}

.auth-container__services .services__save {
  background-color: #101010;
  color: #fff;
  font-size: 0.95em;
  font-weight: 500;
  border-radius: 100px;
  padding: 0.8rem 2rem;
  margin-top: 20px;
}

.auth-container__img {
  width: 60%;
  height: 100vh;
}

.auth-container__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.auth-container__alert {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
