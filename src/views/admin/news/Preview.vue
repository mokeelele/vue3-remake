<template>  
      <v-row>
          <v-col md="12">
              <button class="text-button" @click="handleBack"> News Management</button>
          </v-col>

      </v-row>
  
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  import { ref, computed, onMounted } from "vue";
  import DialogCreateNews from "@/components/Dialog/News/CreateNews.vue";
  import DialogEditNews from "@/components/Dialog/News/EditNews.vue";
  
  const refCreateNews = ref("");
  const handleCreateNews = () => {
      refCreateNews.value.$refs.refCreateNews.open();
  };
  
  const refEditNews = ref("");
  const handleEditNews = () => {
      refEditNews.value.$refs.refEditNews.open();
  };
  const router = useRouter();
  
  const handleBack = () => {
    // perform logout logic
    // ...
  
    // redirect to login page
    router.push('/admin/news/manage')
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