import Api from '@/utils/api.js'

class QuizServices {
    async getQuiz(query) {
        return await Api.doGet(`quiz/index?${new URLSearchParams(query || "").toString()}`)
            .then((res) => res)
            .catch((err) => err)
    }

    async createQuiz({
        payload
    }) {
        const formData = new FormData()
        formData.append('module_name', payload.module_name)
        formData.append('start_date', payload.start_date)
        formData.append('end_date', payload.end_date)
        formData.append('per_page', payload.per_page)
        formData.append('published_at', payload.published_at)
        const arr = [
            payload.questions.forEach((question) => {
                formData.append('question.title', payload.question.title);

                question.choices.forEach((choice) => {
                    formData.append(`choice.text`, payload.choice.text);
                    formData.append(`choice.is_correct`, payload.is_correct);
                });
            })
        ];
        formData.append('question', arr)
        console.log(formData, "ini form data")
        const res = await Api.doPost(`quiz/create`, formData)
        return res
    }

    async detailQuiz({
        id
    }) {
        const res = await Api.doGet(`quiz/detail/${id}`)
        return res
    }
}

export default new QuizServices()