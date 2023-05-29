import {
    ref,
    computed
} from 'vue'
import {
    defineStore
} from 'pinia'
import SERVICE from "@/services/quiz.js"
import Swal from 'sweetalert2'

export const useQuizStore = defineStore('quiz', () => {
    const quiz = ref([]);
    const detailQuiz = ref({});

    const getQuiz = () => {
        return quiz.value;
    };

    const getDetailQuiz = computed(() => detailQuiz.value)

    const setQuiz = (value) => {
        quiz.value = value
    }

    const setDetailQuiz = (data) => {
        detailQuiz.value = data
    }

    const fetchQuiz = async () => {
        try {

            const res = await SERVICE.getQuiz();

            setQuiz(res.data)

        } catch (error) {
            console.error(error)
        }
    };

    async function fetchDetailQuiz(id) {
        try {

            const res = await SERVICE.detailQuiz({
                id
            });
            setDetailQuiz(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function createQuiz(payload) {
        try {

            const res = await SERVICE.createQuiz({
                payload
            })
            Swal.fire({
                icon: "success",
                title: "Berhasil Membuat Quiz",
                text: "^_^",
            });
            return res

        } catch (error) {
            console.error(error)
        }
    }

    return {
        quiz,
        getQuiz,
        getDetailQuiz,
        fetchDetailQuiz,
        fetchQuiz,
        createQuiz
    }
})