<template>
  <input
    type="checkbox"
    name="checkTask"
    v-model="isChecked"
    class="rounded-full"
    @change="$emit('toogleCheckTask', isChecked)"
  />
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

<style scoped></style>
