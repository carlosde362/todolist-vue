<template>
  <label class="block">
    <input
      type="checkbox"
      name="checkTask"
      v-model="isChecked"
      class="hidden"
      @change="$emit('toogleCheckTask', isChecked)"
    />
    <span
      class="check-task shadow-lg border-green-700 border-2 divide-solid after:bg-green-400"
    ></span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CheckTask',
  props: {
    checked: {
      type: Boolean,
    },
  },
  emits: ['toogleCheckTask'],
  data() {
    return {
      isChecked: this.checked,
    };
  },
});
</script>

<style scoped>
.check-task {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}

.check-task::after {
  display: block;
  content: '';
  opacity: 0;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  transition: 0.2s ease-in-out;
}

input:checked ~ .check-task::after {
  width: 10px;
  height: 10px;
  opacity: 1;
}
</style>
