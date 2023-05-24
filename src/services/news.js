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
        formData.append('title', payload.title) 
        formData.append('content', payload.content)
        const res = await Api.doPost(`news/create`, formData)
        return res
    }

    async detailNews({
        id
    }) {
        const res = await Api.doGet(`news/detail/${id}`)
        return res
    }

    async updateNews({
        id,
        payload
    }) {

        const formData = new FormData()
        formData.append('title', payload.title)
        formData.append('content', payload.content)

        const res = await Api.doPost(`news/update/${id}`, payload)
        return res
    }


}

export default new NewsServices()