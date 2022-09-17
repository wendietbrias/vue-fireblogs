<script>
import NavbarVue from "../components/Navbar.vue";
import { VueEditor } from "vue3-editor";
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      title: "",
      content: "",
    });

    const ContentHandler = () => {
      console.log(state.content);
    };

    return {
      state,
      ContentHandler,
    };
  },
  components: {
    NavbarVue,
    VueEditor,
  },
};
</script>
<template>
  <div class="create-blog-container">
    <NavbarVue />
    <div class="create-container">
      <div class="create-container__title">
        <input
          v-model="state.title"
          type="text"
          placeholder="Enter blog title"
        />
        <div class="title__cover-input">
          <label for="upload">Upload Cover</label>
          <input type="file" name="upload" id="upload" />
        </div>
        <button class="title__preview-btn">Preview Photos</button>
      </div>
      <div class="create-container__vue-editor">
        <VueEditor style="height: 350px" v-model="state.content" />
      </div>
      <div class="create-container__posts-button">
        <button @click="ContentHandler" class="posts-button__cover-btn">
          Publish Post
        </button>
        <button class="posts-button__preview-btn">Preview Post</button>
      </div>
    </div>
  </div>
</template>
<style>
.create-blog-container {
  width: 100%;
}

.create-container {
  padding: 0 5rem;
  margin: 50px auto 0;
}

.create-container__title {
  display: flex;
  align-items: center;
}

.create-container__title button,
.create-container__posts-button {
  cursor: pointer;
}

.create-container__title input[type="text"] {
  width: 300px;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid 3px #101010;
  font-size: 1em;
  padding-bottom: 0.7rem;
}

.title__cover-btn,
.posts-button__cover-btn {
  padding: 0.7rem 2rem;
  font-weight: 600;
  color: #fff;
  border-radius: 100px;
  border: none;
  margin: 0 15px;
  background-color: #101010;
  cursor: pointer;
}

.title__preview-btn,
.posts-button__preview-btn {
  padding: 0.7rem 2rem;
  font-weight: 600;
  color: #fff;
  border-radius: 100px;
  background-color: #ded8d8;
  border: none;
  cursor: pointer;
}

.create-container__vue-editor {
  margin-top: 35px;
}

.create-container__posts-button {
  margin-top: 75px;
}

.title__cover-input {
  margin: 0 15px 0 25px;
}

.title__cover-input label {
  display: block;
  background-color: #101010;
  color: #fff;
  border-radius: 100px;
  outline: none;
  cursor: pointer;
  padding: 0.7rem 2rem;
  font-size: 0.86em;
  font-weight: 600;
}

.title__cover-input input[type="file"] {
  display: none;
}
</style>
