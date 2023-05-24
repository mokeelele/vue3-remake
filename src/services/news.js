import Api from '@/utils/api.js'

class NewsServices {
    async getNews() {
        const res = await Api.doGet(`news/index`)
        // console.debug('GET FETCH', res)
        return res
    }

    async createNews({
        payload
    }) {
        const formData = new FormData()

        const res = await Api.doPost(`v1/news/create`, formData)
        return res
    }
}

export default new NewsServices()