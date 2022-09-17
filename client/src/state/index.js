import { createStore } from "vuex";
import AuthHandler from "./Auth";
import PostHandler from "./Post";

const store = createStore({
  modules: {
    auth: AuthHandler,
    post: PostHandler,
  },
});

export default store;
