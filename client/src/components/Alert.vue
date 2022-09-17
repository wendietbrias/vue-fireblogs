<script>
import { useStore } from "vuex";
import { reactive } from "vue";

export default {
  setup() {
    const { state: store } = useStore();
    const state = reactive({
      message: store.auth.message,
      variant: store.auth.variant,
    });

    return {
      state,
      store,
    };
  },
};
</script>
<template>
  <div class="alert-container" :class="state.variant">
    <h5>{{ state.message }}</h5>
    <button class="alert-container__close">x</button>
  </div>
</template>
<style scoped>
.alert-container {
  width: 100%;
  padding: 1rem 1.2rem;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.alert-container h5 {
  font-weight: 500;
  font-size: 1em;
}

.alert-container button {
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  font-size: 1.2em;
  font-weight: 600;
}

.alert-container.danger {
  background-color: rgba(220, 53, 69, 0.2);
  color: #dc3545;
}
.alert-container.success {
  background-color: rgba(25, 135, 84, 0.2);
  color: #198754;
}

.alert-container.info {
  color: #0d6efd;
  background-color: rgba(13, 110, 253, 0.2);
}
</style>
