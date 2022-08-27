<template>
  <div class="w-full bg-stone-700 rounded p-4">
    <div class="flex flex-row justify-between">
      <template class="flex flex-row gap-2 items-center">
        <CheckTask
          v-if="!isRemoveTask"
          :checked="task?.isComplete"
          @toogleCheckTask="markAsComplete()"
        />
        <p :class="{ 'line-through': task?.isComplete }">{{ task?.content }}</p>
      </template>
      <div class="flex flex-row gap-2" v-if="!isRemoveTask">
        <button
          :class="`p-2 rounded-full bg-stone-800 w-8 h-8 flex items-center justify-center shadow-lg ${button.extraClassButton}`"
          v-for="(button, index) in buttons"
          :key="index"
          @click="button.onClick()"
        >
          <i :class="`${button.icon}`"></i>
        </button>
      </div>
      <button
        v-if="isRemoveTask"
        @click="restoreTask()"
        class="p-2 rounded-full w-8 h-8 flex items-center justify-center shadow-lg bg-slate-600"
      >
        <i class="ri-restart-line"></i>
      </button>
    </div>
  </div>
  <InputEditTask
    v-if="isEditTask"
    @closeDialog="isEditTask = false"
    @updateContentTask="updateTask($event)"
    :contentTask="task.content"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Task from '../models/Task';
import CheckTask from './CheckTask.vue';
import useStoreTasks from '../stores/TasksStore';
import InputEditTask from './InputEditTask.vue';

export default defineComponent({
  name: 'Task',
  props: {
    task: {
      type: Object,
      required: true,
    },
    idTask: {
      type: Number,
      required: true,
    },
    isRemoveTask: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isEditTask: false,
      editTask: this.task,
      storeTasks: useStoreTasks(),
      buttons: [
        {
          extraClassButton: 'bg-teal-700',
          icon: 'ri-pencil-line',
          onClick: this.toogleEditTask,
        },
        {
          extraClassButton: 'bg-red-600',
          icon: 'ri-delete-bin-line',
          onClick: this.removeTask,
        },
      ],
    };
  },
  methods: {
    toogleEditTask() {
      this.isEditTask = !this.isEditTask;
    },
    markAsComplete() {
      this.storeTasks.TooglemarkAsComplete(this.idTask);
    },
    removeTask() {
      this.storeTasks.removeTask(this.idTask);
    },
    restoreTask() {
      this.storeTasks.restoreTask(this.idTask);
    },
    updateTask(value: string) {
      this.isEditTask = false;
      this.task.content = value;
      this.storeTasks.updateContentTask(this.idTask, value);
    },
  },
  components: { CheckTask, InputEditTask },
});
</script>

<style scoped></style>
