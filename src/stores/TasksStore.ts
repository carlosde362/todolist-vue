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
    taskToRecyclen(id: number) {
      if (!this.tasks[id]) {
        return;
      }

      this.tasks[id].isRemove = true;
      this.updateLocalStorage(this.tasks);
    },
    removeTask(id: number) {
      if (!this.tasks[id]) {
        return;
      }

      this.tasks.splice(id, 1);
      this.updateLocalStorage(this.tasks);
    },
    restoreTask(id: number) {
      if (!this.tasks[id]) {
        return;
      }

      this.tasks[id].isRemove = false;
      this.tasks[id].isComplete = false;
      this.updateLocalStorage(this.tasks);
    },
    TooglemarkAsComplete(id: number) {
      if (!this.tasks[id]) {
        return;
      }

      this.tasks[id].isComplete = !this.tasks[id].isComplete;
      this.updateLocalStorage(this.tasks);
    },

    updateContentTask(id: number, newContent: string) {
      this.tasks[id].content = newContent;
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
