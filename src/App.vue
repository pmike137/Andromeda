<template>
  <div id="app" class="bg-[url('image/background_base.jpg')] bg-cover">
    <TheHeader v-if="isHeaderHidden" />

    <main class="flex min-h-screen w-full">
      <div :class="{ 'pt-28 pb-10': isHeaderHidden }" class="container">
        <RouterView />
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";

const isHeaderHidden = ref(true);
const route = useRoute();

watch(
  () => route.name,
  () => {
    isHeaderHidden.value = !route.meta.isHeaderHidden;
  }
);
</script>
<style scoped></style>
