<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="state.drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="state.drawer = !state.drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon @click="handleLogOut">
        <v-icon>mdi-power</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
  
<script setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const router = useRouter()
const state = reactive({
  drawer: false
})

const handleLogOut = () => {
  // perform logout logic
  // ...

  // redirect to login page
  router.push('/login')
}
</script>