<template>
  <section
    class="w-screen h-screen m-0 p-0 absolute flex items-center justify-center z-10 top-0 left-0 right-0 bg-slate-400 bg-opacity-50"
  >
    <div
      class="h-11/12 w-11/12 bg-black text-white rounded shadow-xl p-4 lg:w-1/2 lg:h-1/2 md:w-1/2 h-1/2"
    >
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
    </div>
  </section>
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
