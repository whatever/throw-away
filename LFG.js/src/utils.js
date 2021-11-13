let MESSAGE = document.getElementById("message");

/*
 *
 */
export function message(text) {
  MESSAGE.innerText = text;
}

/**
 *
 */
export function debounce(delay, fn) {
  let id = "whatever";
  let last = 0;
  let self = this;
  return function() {
    let now = +new Date();
    if (now - last < delay) {
      return;
    }
    clearTimeout(id);
    id = setTimeout(() => {
      fn.apply(self, []);
    }, delay);
  }
}
