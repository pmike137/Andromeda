<template>
  <div class="min-h-screen flex-col justify-between">
    <TheHeader />
    <main
      class="flex min-h-[100vh] w-full flex-col bg-[url('image/background_base.jpg')] bg-cover"
    >
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped></style>
