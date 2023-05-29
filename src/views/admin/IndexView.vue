<template>
  <div>
    <h1 class="separator">
      <span class="separator-line"></span>
      <span class="separator-text">Testimonial</span>
      <span class="separator-line"></span>
    </h1>
  </div>
  <v-row>
    <v-col><h1>No Testimonial yet</h1></v-col>
  </v-row>
  <div>
    <h1 class="separator">
      <span class="separator-line"></span>
      <span class="separator-text">News</span>
      <span class="separator-line"></span>
    </h1>
  </div>

  <div>
    <v-row>
      <v-col cols="4" v-for="news in getDashboardNews" :key="news.id">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="news?.image" height="200px" cover></v-img>

          <v-card-title align="center"> {{ news.title }} </v-card-title>

          <v-card-subtitle> {{ news?.slug }} </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Detail </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text> {{ news?.short_content }} </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>

  <div>
    <h1 class="separator">
      <span class="separator-line"></span>
      <span class="separator-text">Quiz</span>
      <span class="separator-line"></span>
    </h1>
  </div>

  <div>
    <v-row>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
          ></v-img>

          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                won't have time for sleeping, soldier, not with all the bed making you'll be doing.
                Then we'll go with that data file! Hey, you add a one and two zeros to that or we
                walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
          ></v-img>

          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                won't have time for sleeping, soldier, not with all the bed making you'll be doing.
                Then we'll go with that data file! Hey, you add a one and two zeros to that or we
                walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
          ></v-img>

          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              style="color: red"
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You
                won't have time for sleeping, soldier, not with all the bed making you'll be doing.
                Then we'll go with that data file! Hey, you add a one and two zeros to that or we
                walk! You're going to do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

import { ref, computed, onMounted, reactive, watchEffect } from 'vue'
import { useDashboardStore } from '@/stores/dashboard'

const dashboardStore = useDashboardStore()
const getDashboardNews = computed(() => dashboardStore.getDashboardNews())
onMounted(() => {
  dashboardStore.fetchDashboardNews()
})

const route = useRoute()
const show = ref(false)
</script>

<style>
.separator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.separator-line {
  flex-grow: 1;
  height: 1px;
  background-color: #000; /* Replace with your desired separator color */
}

.separator-text {
  margin: 0 10px;
  font-weight: medium;
}
</style>
