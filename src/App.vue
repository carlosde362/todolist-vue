<script setup lang="ts">
import InputAddTask from './components/InputAddTask.vue';
import Tasks from './components/Tasks.vue';
import useStorateTasks from './stores/TasksStore';
import Welcome from './components/Welcome.vue';

const storeTasks = useStorateTasks();

const newTask = (newTask: string) => {
  storeTasks.addTask(newTask);
};
</script>

<template>
  <main class="w-full h-full flex flex-col">
    <div class="flex flex-col w-3/4 gap-4 mx-auto">
      <h1 class="w-full text-center p-4 text-3xl md:text-5xl lg:text-5xl">
        Todo list
      </h1>
      <Welcome />
      <InputAddTask @add:task="newTask($event)" />
      <Tasks />
    </div>
  </main>
</template>

<style scoped></style>
