import {
    ref,
    computed
} from 'vue'
import {
    defineStore
} from 'pinia'
import SERVICE from "@/services/auth.js"

export const useAuthStore = defineStore('auth', () => {

    const isAuth = ref(localStorage.getItem('auth_token') ? localStorage.getItem('auth_token') : "")
    const isUser = ref(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : "")
    const isRole = ref(localStorage.getItem('user.role_id') ? JSON.parse(localStorage.getItem('role_id')) : "1")

    const getIsAuth = computed(() => isAuth.value)
    const getIsUser = computed(() => isUser.value)
    const getIsRole = computed(() => isRole.value)


    const setAuth = (data) => {
        isAuth.value = data
    }

    const setUser = (data) => {
        isUser.value = data
    }

    const setRole = (data) => {
        isRole.value = data
    }

    async function login(payload) {
        try {

            const res = await SERVICE.postLogin({
                payload
            })

            console.log("result", res)

            localStorage.setItem('auth_token', res.data.sanctum.accessToken)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('role_id', JSON.stringify(res.data.user.role_id))


            setUser(res.data.sanctum.accessToken)
            setAuth(res.data.user)
            setRole(res.data.user.role_id)


            return res
        } catch (error) {
            console.error(error)
        }
    }

    async function logout() {
        try {
            await SERVICE.logout()

            setUser("")
            setAuth("")
            setRole("")
            localStorage.removeItem('auth_token')
            localStorage.removeItem('user')
            localStorage.removeItem('role_id')

            window.location.reload()
        } catch (error) {
            console.error(error)
        }



    }

    return {
        getIsAuth,
        getIsUser,
        getIsRole,
        login,
        logout
    }
})