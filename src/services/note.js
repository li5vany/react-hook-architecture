import { clearData, getData, isData, setData } from "../data/localStorageWorker";

const tag = "notes";
export default () => ({
  getNote: (id) => new Promise((resolve, reject) => {
    if (isData(tag)) {
      resolve(getData(tag).filter(f => f.id === id)[0] || {})
    } else {
      reject({message: "Not found!!"})
    }
  }),
  getNotes: () => new Promise((resolve, reject) => {
    if (isData(tag)) {
      resolve(getData(tag) || [])
    } else {
      reject({message: "Not found!!"})
    }
  }),
  addNote: (note) => new Promise((resolve, reject) => {
    if (!isData(tag)) {
      setData(tag, [])
    }
    if (note) {
      setData(tag, [{id: new Date().valueOf(), ...note}, ...getData(tag)]);
      resolve()
    } else {
      reject({message: "Error"})
    }
  }),
  updateNote: (note) => new Promise((resolve, reject) => {
    if (!isData(tag)) {
      setData(tag, [])
    }
    if (note) {
      setData(tag, getData(tag).map(n => n.id === note.id ? note : n));
      resolve()
    } else {
      reject({message: "Error"})
    }
  }),
  deleteNote: (id) => new Promise((resolve, reject) => {
    if (isData(tag)) {
      setData(tag, getData(tag).filter(f => f.id !== id));
      resolve()
    } else {
      reject({message: "Error"})
    }
  }),
  clearNotes: () => new Promise((resolve) => {
    clearData(tag);
    resolve();
  })
})