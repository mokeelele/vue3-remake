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
        const convertedPayload = {
            module_name: payload.moduleName,
            per_page: payload.per_page,
            start_date: payload.start_date,
            end_date: payload.end_date,
            published_at: payload.published_at,
            questions: payload.questions.map((question) => ({
                title: question.title,
                choices: question.choices.map((choice) => ({
                    text: choice.text,
                    value: choice.value,
                    isCorrect: choice.is_correct
                }))
            }))
        };
        const res = await Api.doPost(`quiz/create`, convertedPayload)
        return res
    }

    async detailQuiz({
        id
    }) {
        const res = await Api.doGet(`quiz/detail/${id}`)
        return res
    }

    async answerQuiz({
        id,
        payload
    }) {
        const convertedPayload = {
            answer: payload.questions.map((answer) => ({
                title: answer.title,
                answer_choices: question.choices.map((answer_choice) => ({
                    text: answer_choice.text,
                    isSelected: answer_choice.is_selected,
                    isCorrect: choice.is_correct
                }))
            }))
        };
        const res = await Api.doPost(`quiz/answer/${id}`, convertedPayload)
        return res
    }
}

export default new QuizServices()