<template>
  <form class="flex flex-col w-full" @submit="emitNewTask($event)">
    <div class="w-full flex flex-row gap-2 items-center">
      <textarea
        type="text"
        sentences="true"
        autocomplete="off"
        @keydown.prevent.ctrl.enter="emitNewTask($event)"
        required
        wrap="hard"
        placeholder="Añade un tarea"
        class="block resize-none h-max w-full p-4 font-system transition transition-delay-100 rounded opacity-70 focus:opacity-100 placeholder:text-white"
        v-model="newTask"
      />
      <button
        type="submit"
        class="rounded h-max outline outline-transparent outline-2 outline-offset-4 bg-green-700 p-2 px-4 transition delay-100 hover:bg-green-600 hover:outline-green-700"
      >
        Añadir
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'InputAddTask',
  data() {
    return {
      newTask: '',
    };
  },
  emits: ['add:task'],
  methods: {
    emitNewTask(event: Event) {
      event.preventDefault();
      if (!this.newTask || this.newTask.trim().length === 0) {
        return;
      }
      this.$emit('add:task', this.newTask);
      this.newTask = '';
    },
  },
});
</script>

<style></style>
