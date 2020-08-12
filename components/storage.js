// http://javascript.info/localstorage
const storage = localStorage; // kann man schnell zu sessionStorage ändern

export function saveStringifiedObject(key, value) {
  // Convert any JS-object in a JSON-String, so you can save it
  const jsonValue = JSON.stringify(value);
  storage.setItem(key, jsonValue);
}

export function getStringifiedObject(key) {
  // Convert JSON-String to JS-object
  const jsonValue = storage.getItem(key);
  if (jsonValue) {
    return JSON.parse(jsonValue);
  }
  return null;
}
