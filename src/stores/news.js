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
    const detailNews = ref({});

    const getNews = computed(() => news.value)
    const getDetailNews = computed(() => detailNews.value)

    const setNews = (data) => {
        news.value = data
    }

    const setDetailNews = (data) => {
        detailNews.value = data
    }

    async function fetchNews() {
        try {

            const res = await SERVICE.getNews()

            setNews(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    async function fetchDetailNews(id) {
        try {

            const res = await SERVICE.detailNews({
                id
            })

            setDetailNews(res.data)

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
                title: "Berhasil Membuat News",
                text: "^_^",
            });
            return res

        } catch (error) {
            console.error(error)
        }
    }

    async function updateNews(id, payload) {
        try {

            const res = await SERVICE.updateNews({
                id,
                payload
            })

            return res

        } catch (error) {
            console.error(error)
        }
    }

    return {
        getNews,
        getDetailNews,
        fetchDetailNews,
        fetchNews,
        createNews,
        updateNews
    }
})