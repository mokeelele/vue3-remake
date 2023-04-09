<template>
  <v-container>
    <v-card>
      <v-card-title class="text-center">Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handeLogin">
          <v-text-field v-model="form.email" label="Email" required></v-text-field>
          <v-text-field
            v-model="form.password"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <v-btn type="submit" color="primary" block>Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const form = reactive({
  email: 'admin@gmail.com',
  password: 'Admin_1234'
})
const handeLogin = async () => {
  // Submit the form data to the server here

  await auth.login(form)
  // Redirect to the thank-you page
  if (auth.getIsRole === '1') {
    router.push('/admin')
  } else {
    router.push('/user')
  }
}
</script>