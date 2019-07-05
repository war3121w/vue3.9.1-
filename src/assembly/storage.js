export default {
  setItem: function (name, list) {
    return localStorage.setItem(name, JSON.stringify(list))
  },
  getItem: function (name) {
    return JSON.parse(localStorage.getItem(name))
  },
  removeItem: function (name) {
    return localStorage.removeItem(name)
  }
}