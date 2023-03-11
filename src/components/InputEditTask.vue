<template>
      <textarea
        type="text"
        sentences="true"
        autocomplete="off"
        required
        v-model="modelTask"
        wrap="hard"
        class="block resize-none p-4 transition transition-delay-100 rounded opacity-70 w-full focus:opacity-100 placeholder:text-white"
      />
      <div class="w-full flex flex-row gap-4 items-center justify-end p-2">
        <button
          class="outline-none rounded p-2 shadow-lg bg-slate-500 bg-opacity-30"
          @click="$emit('closeDialog', true)"
        >
          Cancelar
        </button>
        <button
          class="outline-none bg-green-600 rounded p-2"
          @click="$emit('updateContentTask', modelTask)"
        >
          Actualizar
        </button>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputEditTask',
  props: {
    contentTask: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      modelTask: this.contentTask,
    };
  },
  emits: ['closeDialog', 'updateContentTask'],
  methods: {},
});
</script>

<style scoped>
textarea {
  min-height: 90%;
  max-height: 90%;
}
</style>
