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
    updateLocalStorage(tasks: Task[]) {
      setLocalStorage(KeysLocalStorage.TASKS, tasks);
    },
    addTask(contentNewTask: string) {
      const newTask = new Task(contentNewTask);
      this.updateLocalStorage([...this.tasks, newTask]);
      this.tasks = [...this.tasks, newTask] as Task[];
    },
    removeTask(id: number) {
      console.log(`remove ${id}`);
      if (this.tasks.length === 0 || !this.tasks[id]) {
        return;
      }

      this.tasks[id].isRemove = true;
      this.updateLocalStorage(this.tasks);
    },
    restoreTask(id: number) {
      if (this.tasks.length === 0 || !this.tasks[id]) {
        return;
      }

      this.tasks[id].isRemove = false;
      this.updateLocalStorage(this.tasks);
    },
    TooglemarkAsComplete(id: number) {
      if (this.tasks.length || !this.tasks[id]) {
        return;
      }

      this.tasks[id].isComplete = !this.tasks[id].isComplete;
      this.updateLocalStorage(this.tasks);
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
