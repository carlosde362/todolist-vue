import { defineStore } from 'pinia';
import KeysLocalStorage from '../utils/KeysLocalStorage';
import { getLocalStorage, setLocalStorage } from '../utils/utils';
import Task from '../models/Task';
import { reactive } from 'vue';

const useStoreTasks = defineStore('tasks', {
  state: () => {
    return {
      tasks: reactive(getLocalStorage(KeysLocalStorage.TASKS) ?? []),
    };
  },
  actions: {
    addTask(contentNewTask: string) {
      const newTask = new Task(contentNewTask);
      setLocalStorage(KeysLocalStorage.TASKS, [...this.tasks, newTask]);
      this.tasks = [...this.tasks, newTask] as Task[];
    },
  },
  getters: {
    getTasks(): Task[] {
      return this.tasks.filter((task: Task) => !task.isRemove);
    },

    getTasksRemove(): Task[] {
      return this.tasks.filter((task: Task) => task.isRemove);
    },
  },
});

export default useStoreTasks;
