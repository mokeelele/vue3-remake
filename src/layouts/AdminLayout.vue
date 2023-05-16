<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="state.drawer">
      <v-list>
      <a href="/home" class="v-list-item">
        <div class="v-list-item-icon" style="margin-right: 32px;">
          <v-icon class="icon-home">mdi-home</v-icon>
        </div>

        <v-list-item-title class="text-home">Home</v-list-item-title>
      </a>
    </v-list>
    <v-list v-model:opened="open">
      <v-list-group value="News">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-newspaper"
            title="News"
          ></v-list-item>
        </template>
        <v-list-item>
          <a href="/admin/news/manage" class="v-list-items">
            <div>
              <v-icon class="icon-home">mdi-newspaper</v-icon>
            </div>
            <v-list-item-title class="text-home">News List</v-list-item-title>
          </a>
        </v-list-item>

        <v-list-item>
        <a href="/admin/news/manage" class="v-list-items">
        <div class="v-list-item-icon">
          <v-icon class="icon-home">mdi-newspaper</v-icon>
        </div>
        <v-list-item-title class="text-home">News Manage</v-list-item-title>
      </a>
          </v-list-item>
      </v-list-group>
    </v-list>
    <v-list v-model:opened="open">
      <v-list-group value="Quiz">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-newspaper"
            title="Quiz"
          ></v-list-item>
        </template>
        <v-list-item>
          <a href="/admin/news/manage" class="v-list-items">
            <div>
              <v-icon class="icon-home">mdi-newspaper</v-icon>
            </div>
            <v-list-item-title class="text-home">Quiz List</v-list-item-title>
          </a>
        </v-list-item>

        <v-list-item>
        <a href="/admin/news/manage" class="v-list-items">
        <div class="v-list-item-icon">
          <v-icon class="icon-home">mdi-newspaper</v-icon>
        </div>
        <v-list-item-title class="text-home">Quiz Manage</v-list-item-title>
      </a>
          </v-list-item>
      </v-list-group>
    </v-list>
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
<script>
  export default {
    data: () => ({
      open: ['News'],
      admins: [
        ['News List', 'mdi-newspaper'],
        ['News Management', 'mdi-newspaper'],
      ],
    }),
  }
</script>

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

<style>
.v-list-item {
    align-items: center;
    display: flex;
    flex: 1 1 100%;
    letter-spacing: normal;
    min-height: 48px;
    outline: none;
    padding: 0 16px;
    position: relative;
    text-decoration: none;
    color:black;
}

.v-list-items {
    align-items: center;
    display: flex;
    flex: 1 1 100%;
    letter-spacing: normal;
    min-height: 48px;
    outline: none;
    padding: 0 16px;
    position: relative;
    text-decoration: none;
    color:black;
    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.icon-home {
  align-items: center;
    display: inline-flex;
    font-feature-settings: "liga";
    font-size: 24px;
    justify-content: center;
    letter-spacing: normal;
    line-height: 1;
    position: relative;
    text-indent: 0;
    transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    vertical-align: middle;
}

.text-home{
  line-height: 1,2;
  align-self: center;
  flex: 1 1 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>