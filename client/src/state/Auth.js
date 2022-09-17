import axios from "axios";
import JwtDecode from "jwt-decode";

const user = JSON.parse(localStorage.getItem("user"));

const AuthHandler = {
  state: () => {
    return {
      user: user ? JwtDecode(user) : null,
      isOpen: false,
      variant: "",
      message: "",
    };
  },
  mutations: {
    Auth(state, payload) {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
      return state;
    },
    LogoutHandler(state) {
      state.user = null;
      localStorage.setItem("user", JSON.stringify(state.user));
      return state;
    },
    UpdatedProfile(state, payload) {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(state.user));
      return state.user;
    },
    OpenAlert(state, payload) {
      state.isOpen = true;
      state.variant = payload.variant;
      state.message = payload.message;
    },
  },
  actions: {
    async SignUp({ commit }, payload) {
      commit("OpenAlert", { message: "Redirected", variant: "info" });
      try {
        const { data } = await axios.post(
          `http://localhost:8000/api/auth/signup`,
          payload
        );

        commit("Auth", data);
      } catch (err) {
        const { response } = err;
        commit("OpenAlert", { message: response.data.msg, variant: "info" });
        return err;
      }
    },
    async SignIn({ commit }, payload) {
      commit("OpenAlert", { message: "Redirected...", variant: "info" });
      try {
        const { data } = await axios.post(
          `http://localhost:8000/api/auth/signin`,
          payload
        );

        if (data) {
          commit("OpenAlert", { message: "Success Login", variant: "success" });
          commit("Auth", data);
          window.location.href = "http://127.0.0.1:5173";
        }
      } catch (err) {
        return err;
      }
    },
    async UpdateProfile({ commit }, payload) {
      try {
        const { data } = await axios.patch(
          `http://localhost:8000/api/auth/update/${payload._id}`,
          payload
        );
        commit("UpdatedProfile", data);
      } catch (err) {
        return err;
      }
    },
  },
};

export default AuthHandler;
