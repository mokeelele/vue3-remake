<template>
  {{ getDetailQuiz }}
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'
import { ref, computed, onMounted, reactive } from 'vue'

const route = useRoute()
const quizStore = useQuizStore()
const getDetailQuiz = computed(() => quizStore.getDetailQuiz)
onMounted(() => {
  quizStore.fetchDetailQuiz(route.params.id)
})

const router = useRouter()
const isChecked = ref(true) // Set it to `true` for checked, or `false` for unchecked

// Initialize selectedChoices for each question

const handleBack = () => {
  // perform logout logic

  // redirect to login page
  router.push('/admin/quiz/manage')
}
</script>