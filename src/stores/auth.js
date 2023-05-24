import {
    ref,
    computed
} from 'vue'
import {
    defineStore
} from 'pinia'
import SERVICE from "@/services/auth.js"
import Swal from 'sweetalert2'

export const useAuthStore = defineStore('auth', () => {
    const users = ref([])
    const profile = ref({});
    const isAuth = ref(localStorage.getItem('auth_token') ? localStorage.getItem('auth_token') : "")
    const isUser = ref(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : "")

    const getIsAuth = computed(() => isAuth.value)
    const getIsUser = computed(() => isUser.value)
    const getUsers = computed(() => users.value)
    const getProfile = computed(() => profile.value)

    const setAuth = (data) => {
        isAuth.value = data
    }

    const setUser = (data) => {
        isUser.value = data
    }

    const setUsers = (data) => {
        users.value = data
    }

    const setProfile = (data) => {
        profile.value = data
    }

    async function fetchUsers() {
        try {

            const res = await SERVICE.getUsers()

            setUsers(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    async function login(payload) {
        try {
            const res = await SERVICE.login({
                payload
            })

            console.log("res", res)

            localStorage.setItem('auth_token', res.data.sanctum.accessToken)
            localStorage.setItem('user', JSON.stringify(res.data.user))

            setUser(res.data.sanctum.accessToken)
            setAuth(res.data.user)
            Swal.fire({
                icon: "success",
                title: "Welcome To The Company",
                text: "You Have Been Logged In Successfully",
            });

            return res
        } catch (error) {
            console.error(error)
        }
    }

    async function logout() {
        try {
            setUser("")
            setAuth("")
            localStorage.removeItem('auth_token')
            localStorage.removeItem('user')

            await SERVICE.logout()
        } catch (error) {
            console.error(error)
        }
    }

    async function createUser(payload) {
        try {

            const res = await SERVICE.createUser({
                payload
            })
            Swal.fire({
                icon: "success",
                title: "Welcome To The Company",
                text: "Sukses Menambahkan Karyawan",
            });
            return res

        } catch (error) {
            console.error(error)
        }
    }


    async function fetchProfile(id) {
        try {

            const res = await SERVICE.getProfile({
                id
            })

            setProfile(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    async function updateUser(id, payload) {
        try {

            const res = await SERVICE.updateUser({
                id,
                payload
            })

            return res

        } catch (error) {
            console.error(error)
        }
    }

    return {
        getUsers,
        getIsAuth,
        getIsUser,
        getProfile,
        fetchUsers,
        fetchProfile,
        updateUser,
        login,
        logout,
        createUser
    }
})