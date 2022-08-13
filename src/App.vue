<script setup lang="ts">
import InputAddTask from './components/InputAddTask.vue';

const newTask = (newTask: string) => {
  console.log(newTask);
};
</script>

<template>
  <main class="w-full h-full flex flex-col">
    <div class="flex flex-col w-3/4 gap-4 mx-auto">
      <h1 class="w-full text-center text-3xl md:text-5xl lg:text-5xl">
        Todo list
      </h1>
      <InputAddTask @add:task="newTask($event)" />
    </div>
  </main>
</template>

<style scoped></style>
