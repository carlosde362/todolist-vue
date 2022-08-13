import KeysLocalStorage from './KeysLocalStorage';

export function getLocalStorage<T>(key: KeysLocalStorage): T | null {
  return JSON.parse(localStorage.getItem(key) || 'null');
}

export function setLocalStorage<T>(key: KeysLocalStorage, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}
