<template>
  <!-- Content -->
  <section class="content p-5">
    <div class="container-md mx-auto">
      <h1>Welcome Admin</h1>
      <p>Count: {{ counter.count }}</p>
      <p>Double count: {{ counter.doubleCount }}</p>
      <v-btn type="submit" color="primary" @click="counter.increment()">Increment</v-btn>
    </div>
  </section>
  <!-- End Content -->
</template>

<style scoped></style>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>
