import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
    setToken(token) {
      this.token = token
    },
    clearUser() {
      this.user = null
      this.token = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    },
  },
})