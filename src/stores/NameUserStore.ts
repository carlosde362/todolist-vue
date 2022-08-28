import { defineStore } from 'pinia';
import { getLocalStorage, setLocalStorage } from '../utils/utils';
import KeysLocalStorage from '../utils/KeysLocalStorage';

const useStoreNameUser = defineStore('nameUser', {
  state() {
    return {
      nameUser: getLocalStorage<string>(KeysLocalStorage.USER_NAME) ?? '',
    };
  },

  actions: {
    setNameUser(nameUser: string) {
      this.nameUser = nameUser;
      setLocalStorage(KeysLocalStorage.USER_NAME, nameUser.trim());
    },
  },
  getters: {
    getCurrentName(): string {
      return this.nameUser.trim();
    },
  },
});

export default useStoreNameUser;
