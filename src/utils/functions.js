// create random id has length of 8
export function randomId() {
  return Math.random().toString(36).substr(2, 8);
}
