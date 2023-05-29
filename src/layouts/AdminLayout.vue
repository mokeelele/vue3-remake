<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="state.drawer">
      <v-list>
        <a href="/admin" class="v-list-item">
          <div class="v-list-item-icon" style="margin-right: 32px">
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
              title="News Menu"
            ></v-list-item>
          </template>
          <v-list-item>
            <a href="/admin/news/list" class="v-list-items">
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
              prepend-icon="mdi-format-list-checks"
              title="Quiz Menu"
            ></v-list-item>
          </template>
          <v-list-item>
            <a href="/admin/quiz/manage" class="v-list-items">
              <div class="v-list-item-icon">
                <v-icon class="icon-home">mdi-format-list-checks</v-icon>
              </div>
              <v-list-item-title class="text-home">Quiz Management</v-list-item-title>
            </a>
          </v-list-item>

          <v-list-item>
            <a href="/admin/quiz/list" class="v-list-items">
              <div class="v-list-item-icon">
                <v-icon class="icon-home">mdi-history</v-icon>
              </div>
              <v-list-item-title class="text-home">Quiz History</v-list-item-title>
            </a>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="state.drawer = !state.drawer"></v-app-bar-nav-icon>

      <v-toolbar-title style="color: white">Step-Up</v-toolbar-title>
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
      ['News Management', 'mdi-newspaper']
    ]
  })
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

<style scoped>
#inspire .v-app-bar {
  background-color: blue;
}

#inspire .v-app-bar .v-app-bar__content {
  color: white;
}

#inspire .v-btn {
  color: white;
}

.v-list-item {
  align-items: center;
  display: flex;
  letter-spacing: normal;
  min-height: 48px;
  padding: 0px 0;
  outline: none;
  position: relative;
  text-decoration: none;
  background-color: blue;
  color: white;
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
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.icon-home {
  align-items: center;
  display: inline-flex;
  font-feature-settings: 'liga';
  font-size: 24px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  vertical-align: middle;
}

.text-home {
  line-height: 1, 2;
  align-self: center;
  flex: 1 1 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.v-list {
  overflow: auto;
  padding: 0px 0;
  position: relative;
  border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  border-style: solid;
  border-width: 0;
  box-shadow: 0px 0px 0px 0px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  border-radius: 0;
  background: rgba(var(--v-theme-surface));
  color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
}
</style>