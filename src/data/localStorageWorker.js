
export const setData = (name, value, isString = false) => {
  if (name) {
    localStorage.setItem(name, isString ? value : (typeof value !== "undefined" ? JSON.stringify(value) : ""));
  }
};

export const getData = (name, isString = false) => {
  if (name) {
    let data = localStorage.getItem(name);
    return isString ? data : (typeof data !== "undefined" ? JSON.parse(data) : []);
  }
  return isString ? "" : []
};

export const isData = (name) => {
  if (name) {
    return !!localStorage.getItem(name);
  }
  return false;
};

export const clearData = (name) => {
  if (name) {
    localStorage.removeItem(name);
  } else {
    localStorage.clear();
  }
};
