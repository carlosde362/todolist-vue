<template>
  <div class="w-full bg-stone-700 rounded p-4 max-w-full">
    <div class="flex flex-row w-full max-w-full justify-between items-center gap-2">
      <template class="flex flex-row gap-2 items-center">
        <CheckTask
          v-if="!isRemoveTask"
          :checked="task?.isComplete"
          @toogleCheckTask="markAsComplete()"
        />
        <p :class="{ 'line-through': task?.isComplete && !task?.isRemove }" class="break-all">
          {{ task?.content }}
        </p>
      </template>
      <div class="flex flex-row gap-2">
        <template v-if="!isRemoveTask">
            <ButtonActionsTask
            v-for="(button, index) in buttons"
              @event:click="button.onClick()"
              :extraClass="button.extraClassButton"
              :key="index"
            >
              <i :class="`${button.icon}`"></i>
            </ButtonActionsTask>
        </template>
        <template v-else>
            <ButtonActionsTask
            v-for="(button, index) in buttonsTaskRemove"
              @event:click="button.onClick()"
              :key="index"
              :useTooltip="button.useTooltip"
              :messageTooltip="
                button.messageTooltip ? button.messageTooltip : undefined
              "
              :extraClass="button.extraClassButton"
            >
              <i :class="`${button.icon}`"></i>
            </ButtonActionsTask>
        </template>
      </div>
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
import ButtonActionsTask from './ButtonActionsTask.vue';

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
      showTooltip: false,
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
          onClick: this.sendTaskToRecyclen,
        },
      ],
      buttonsTaskRemove: [
        {
          extraClassButton: 'bg-slate-600',
          icon: 'ri-restart-line',
          onClick: this.restoreTask,
          useTooltip: true,
          messageTooltip: 'Restaura la tarea',
        },
        {
          extraClassButton: 'bg-red-600',
          icon: 'ri-close-circle-fill',
          onClick: this.removeTask,
          useTooltip: true,
          messageTooltip: 'Elimina la tarea',
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
    sendTaskToRecyclen() {
      this.storeTasks.taskToRecyclen(this.idTask);
    },
    restoreTask() {
      this.storeTasks.restoreTask(this.idTask);
    },
    updateTask(value: string) {
      this.isEditTask = false;
      this.task.content = value;
      this.storeTasks.updateContentTask(this.idTask, value);
    },
    removeTask() {
      this.storeTasks.removeTask(this.idTask);
    },
  },
  components: { CheckTask, InputEditTask, ButtonActionsTask },
});
</script>

<style scoped></style>
