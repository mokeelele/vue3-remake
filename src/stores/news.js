import {
    ref,
    computed
} from 'vue'
import {
    defineStore
} from 'pinia'
import SERVICE from "@/services/news.js"
import Swal from 'sweetalert2'

export const useNewsStore = defineStore('news', () => {
    const news = ref([])

    const getNews = computed(() => news.value)

    const setNews = (data) => {
        news.value = data
    }

    async function fetchNews() {
        try {

            const res = await SERVICE.getNews()

            setNews(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    async function createNews(payload) {
        try {

            const res = await SERVICE.createNews({
                payload
            })
            Swal.fire({
                icon: "success",
                title: "Check In Berhasil",
                text: "Anda Berhasil Check In Untuk Hari Ini",
            });
            return res

        } catch (error) {
            console.error(error)
        }
    }

    return {
        getNews,
        fetchNews,
        createNews
    }
})