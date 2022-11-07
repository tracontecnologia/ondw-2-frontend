import { AppConfig } from '../config';

function getKey(key: string) {
  return AppConfig.STORAGE_BASE_KEY + key;
}

function getItem(key: string) {
  key = getKey(key);
  const item = localStorage.getItem(key);
  if (!item) return;
  return JSON.parse(item);
}

function setItem(key: string, data: any) {
  key = getKey(key);
  localStorage.setItem(key, JSON.stringify(data));
}

function removeItem(key: string) {
  key = getKey(key);
  localStorage.removeItem(key);
}

export const StorageHelper = {
  getItem,
  setItem,
  removeItem,
};
