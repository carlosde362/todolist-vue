<template>
  <div class="flex flex-row justify-between w-full items-center">
    <span>Ver tareas eliminadas</span>
    <label class="switch">
      <input type="checkbox" v-model="showTasksRemove" />
      <span class="slider" />
    </label>
  </div>
  <div class="flex flex-col gap-4">
    <template v-if="!showTasksRemove">
      <template v-if="tasks?.length">
        <Task
          v-for="(task, index) in tasks"
          :key="index"
          :task="task"
          :idTask="index"
          :isRemoveTask="false"
        />
      </template>
      <template v-else>
        <h3 class="w-full text-center text-3xl font-extralight">
          No tienes ninguna tarea 😊
        </h3>
      </template>
    </template>
    <template v-if="showTasksRemove">
      <template v-if="tasksRemove?.length">
        <Task
          v-for="(task, index) in tasksRemove"
          :key="index"
          :task="task"
          :idTask="index"
          :isRemoveTask="true"
        />
      </template>
      <template v-else>
        <h3 class="w-full text-center text-3xl font-extralight">
          No tienes tareas eliminadas
        </h3>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import useStorateTasks from '../stores/TasksStore';
import Task from './Task.vue';

export default defineComponent({
  name: 'Tasks',
  setup() {
    const storeTasks = useStorateTasks();
    return {
      tasks: computed(() => Array.from(storeTasks.getTasks)),
      tasksRemove: computed(() => Array.from(storeTasks.getTasksRemove)),
    };
  },
  data() {
    return {
      showTasksRemove: false,
    };
  },
  components: { Task },
});
</script>

<style scoped>
.switch {
  --secondary-container: #3a4b39;
  --primary: #84da89;
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.7em;
  height: 1.8em;
}

.switch input {
  display: none;
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #313033;
  transition: 0.2s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.2em;
  bottom: 0.2em;
  background-color: #aeaaae;
  transition: 0.4s;
}

input:checked + .slider::before {
  background-color: var(--primary);
}

input:checked + .slider {
  background-color: var(--secondary-container);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--secondary-container);
}

input:checked + .slider:before {
  transform: translateX(1.9em);
}
</style>
