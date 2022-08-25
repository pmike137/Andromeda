<template>
  <div class="min-h-screen relative">
    <TheHeader />
    <main
      class="flex min-h-[100vh] w-full bg-[url('image/background_base.jpg')] bg-cover"
    >
      <div class="container pt-28 pb-10"><RouterView /></div>
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
