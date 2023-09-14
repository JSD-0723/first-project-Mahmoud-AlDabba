export let debounced = (cb, delay = 1000) => {
  let timeOut;
  return (...arg) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      cb(...arg);
    }, delay);
  };
};
