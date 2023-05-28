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
        payload.questions.forEach((question, questionIndex) => {
            formData.append(`questions[${questionIndex}][title]`, question.title);
            
            question.choices.forEach((choice, choiceIndex) => {
              formData.append(`questions[${questionIndex}][choice_text][${choiceIndex}]`, choice.choice_text);
              formData.append(`questions[${questionIndex}][is_correct][${choiceIndex}]`, choice.is_correct);
            });
          });
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