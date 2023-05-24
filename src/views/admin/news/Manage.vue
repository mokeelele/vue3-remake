<template>

  <!-- Modal Create News -->
  <DialogCreateNews ref="refCreateNews"></DialogCreateNews>
  <!-- End Create news -->

    <!-- Modal Edit News -->
    <DialogEditNews ref="refEditNews"></DialogEditNews>
  <!-- End Edit news -->

    <v-row>
        <v-col md="12">
            <button class="text-button" @click="handleCreateNews"><v-icon>mdi-plus</v-icon>Create News</button>
        </v-col>
        <v-col md="4">
            <v-text-field label="Search" variant="outlined" append-inner-icon="mdi-magnify"></v-text-field>
        </v-col>
        <v-col md="4">
            <v-row>
                <v-col md="2" no-gutters align="center" class="mt-4">
                    Sort By :
                </v-col>
                <v-col md="10" no-gutters align="center">
                    <v-select
  :items="['Newest', 'Oldest', 'Titled']"
  variant="outlined"
></v-select>
                </v-col>
            </v-row>
        </v-col>
        <v-col md="4">
            <v-row>
                <v-col md="1" align="center" class="mt-4">
                    Page
                </v-col>
                <v-col md="9">
                    <v-select variant="outlined"></v-select>
                </v-col>
                <v-col md="2" align="center" class="mt-4">
                    Of 1
                </v-col>
            </v-row>
        </v-col>
    </v-row>

    <v-row>
        <v-col md="12">
            <v-card class="card-news">
                <v-row v-for="news in getNews?.data" :key="news.id">
                    
                    <v-col md="5">
                        <v-card-title class="news-title">
                            {{news?.title}}
                        </v-card-title>
                        <v-card-subtitle class="news-subtitle" v-if=" news?.hidden_flag == 1">
                            Status : Hidden
                        </v-card-subtitle>
                        <v-card-subtitle class="news-subtitle" v-else>
                            Status : Visible
                        </v-card-subtitle>
                        <v-card-subtitle class="news-subtitle mt-1 mb-2">
                            Created Date : {{ news?.created_at }}
                        </v-card-subtitle>
                    </v-col>
                    <v-col md="7">
                        <div class="px-4 text-right mt-5">
                            <button class="text-button" @click="handlePreview" style="background-color: #cddc39!important; border-color: #cddc39!important;">Preview</button>
                            <button class="text-button" style="background-color: #9e9e9e!important; border-color: #9e9e9e!important;">Send</button>
                            <button  @click="handleEditNews(news?.id)" class="text-button" style="background-color: #2196f3!important; border-color: #2196f3!important;">Edit</button>
                            <button class="text-button" style="background-color: #4caf50!important; border-color: #4caf50!important;">Show</button>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { useRouter } from 'vue-router';

import { ref, computed, onMounted } from "vue";
import { useNewsStore } from "@/stores/news";
import { useAuthStore } from "@/stores/auth";
import DialogCreateNews from "@/components/Dialog/News/CreateNews.vue";
import DialogEditNews from "@/components/Dialog/News/EditNews.vue";

const newsStore = useNewsStore();
const getNews = computed(() => newsStore.getNews);
onMounted(() => {
  newsStore.fetchNews();
});

const authStore = useAuthStore();
const getUsers = computed(() => authStore.getUsers);
onMounted(() => {
  authStore.fetchUsers();
});

const refCreateNews = ref("");
const handleCreateNews = () => {
    refCreateNews.value.$refs.refCreateNews.open();
};

const refEditNews = ref("");
const handleEditNews = (id) => {
    refEditNews.value.$refs.refEditNews.open();
    newsStore.fetchDetailNews(id);
};
const router = useRouter();

const handlePreview = () => {
  // perform logout logic
  // ...

  // redirect to login page
  router.push('/admin/news/preview')
}

</script>

<style>
.text-button {
    margin-top:10px;
    margin-left:15px;
    height: 36px;
    min-width: 64px;
    padding: 0 16px;
    background-color: #002469 !important;
    border-color: #002469 !important;
    color: #fff;
}

.card-news{
    display: block;
    max-width: 100%;
    outline: none;
    text-decoration: none;
    transition-property: box-shadow,opacity;
    overflow-wrap: break-word;
    position: relative;
    white-space: normal;
    transition: box-shadow .28s cubic-bezier(.4,0,.2,1);
    will-change: box-shadow;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
}

.news-title{
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: .0125em;
    line-height: 2rem;
    word-break: break-all;
}

.news-subtitle{
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: .0071428571em;
}

.button-news{
    align-items: center;
    color: inherit;
    display: flex;
    flex: 1 0 auto;
    justify-content: inherit;
    line-height: normal;
    position: relative;
}
</style>