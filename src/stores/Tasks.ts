import { defineStore } from 'pinia';
import KeysLocalStorage from '../utils/KeysLocalStorage';
import { getLocalStorage, setLocalStorage } from '../utils/utils';
import Task from '../models/Task';
import { reactive } from 'vue';

const useStoreTasks = defineStore('tasks', {
  state: () => {
    return {
      tasks: reactive(getLocalStorage(KeysLocalStorage.tasks) ?? []),
    };
  },
  actions: {
    addTask(contentNewTask: string) {
      const newTask = new Task();
      newTask.content = contentNewTask;
      setLocalStorage(KeysLocalStorage.tasks, [...this.tasks, newTask]);
      this.tasks = [...this.tasks, newTask];
    },
  },
  getters: {
    getTasks(): Task[] {
      return this.tasks;
    },
  },
});

export default useStoreTasks;
