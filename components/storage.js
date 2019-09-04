const storage = localStorage;

export function getItem(key) {
  // TODO: hier stimmt noch was nicht, siehe Leons Beispiel
  const jsonObj = JSON.parse(key);
  if (jsonObj) {
    return storage.getItem(jsonObj);
  }
  return null;
}

export function setItem(key, value) {
  const jsonString = JSON.stringify(value);
  storage.setItem(key, jsonString);
}
