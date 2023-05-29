import {
    ref,
    computed
} from 'vue'
import {
    defineStore
} from 'pinia'
import SERVICE from "@/services/dashboard.js"
import Swal from 'sweetalert2'

export const useDashboardStore = defineStore('dashboard', () => {
    const dashboardnews = ref([]);

    const getDashboardNews = () => {
        return dashboardnews.value;
    };

    const setDashboardNews = (value) => {
        dashboardnews.value = value
    }

    const fetchDashboardNews = async () => {
        try {

            const res = await SERVICE.getNewsDashboard();

            setDashboardNews(res.data)

        } catch (error) {
            console.error(error)
        }
    };

    return {
        dashboardnews,
        getDashboardNews,
        fetchDashboardNews
    }
})