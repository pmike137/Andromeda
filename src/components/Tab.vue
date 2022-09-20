<template>
  <div class="tab-content bg-white rounded-2xl" v-show="title == selectedTitle">
    <slot />
  </div>
</template>

<script setup>
import { inject } from "vue";
const props = defineProps(["title"]);
const selectedTitle = inject("selectedTitle");
</script>
