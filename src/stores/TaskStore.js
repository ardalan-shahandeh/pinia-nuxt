import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {id:1, title:"buy some milk", isFav: false},
      {id:2, title: "play Gloomhaven", isFav: true}
    ],
    name: 'Yoshi'
  }),
  getters: {
    favs() {
      return this.tasks.filter(item => item.isFav)
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p
      }, 0)
    },
    totalCount: (state) => {
      return state.tasks.length
    }
  },
  actions: {
    addTasks(task) {
      this.tasks.push(task)
    }
  }
})