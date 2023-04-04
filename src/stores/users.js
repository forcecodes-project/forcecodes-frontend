import {defineStore} from 'pinia'
import {usersApi} from "@/api"


const useUsersStore = defineStore('users', {
    state: () => ({
        user: {},
        token: null,
        attempts: []
    }),

    actions: {
        async CurrentUser() {
            let response = null

            if (this.token) {
                response = await usersApi.fetchCurrentUser(this.token)
                this.user = response.data?.username ? response.data : {}
                console.log(this.user)
            }
            return this.user
        },
        async login(credentials) {
            console.log(credentials)
            const response = await usersApi.login_user(credentials)

            this.token = response?.data?.token || null
            console.log(this.token)
            if (this.token) {
                localStorage.setItem('user_token', this.token)
            }

            return this.token
        },
        async signUp(user) {
            return await usersApi.signUp(user)
        },
        logout() {
            localStorage.removeItem('user_token')
            this.token = null
            this.user = {}

            return true
        },
        async get_attempts() {
            let response = null

            if (this.token) {
                response = await usersApi.attempts_list(this.token)
                this.attempts = response?.data ? response.data : []
            }
            return this.attempts
        }
    }
})

export default useUsersStore