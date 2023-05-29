import Api from '@/utils/api.js'

class DashboardServices {
    async getNewsDashboard() {
        return await Api.doGet(`dashboard/news`)
            .then((res) => res)
            .catch((err) => err)
    }

}

export default new DashboardServices()