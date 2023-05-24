<template>
  <v-container>
    <v-card>
      <v-card-title class="text-center">Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleLogin">
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
import { computed, onMounted } from "vue";
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const getIsUser = computed(() => {
  return auth.getIsUser;
});

const form = reactive({
  email: 'admin@gmail.com',
  password: 'Admin_1234'
})

const handleLogin = async () => {
  auth.login(form).then(async () => {
    if (auth.getIsRole === '1') {
    router.push('/admin')
  } else {
    router.push('/user')
  }
  });
};

</script>