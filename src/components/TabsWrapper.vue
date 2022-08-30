<template>
  <div class="tabs">
    <ul
      class="flex flex-wrap justify-around text-sm font-medium text-center mb-5 border-b-2 text-gray-500 dark:text-gray-400"
    >
      <li
        v-for="item in headerItems"
        :key="item.title"
        :class="{ 'active-tab': item.title == selectedTitle }"
        @click="selectedTitle = item.title"
        class="w-32 flex items-center justify-center py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white mr-2 last:mr-0 mb-3 cursor-pointer select-none"
      >
        <span>{{ item.title }} </span
        ><component v-if="item.icon" :is="item.icon" class="ml-2" />
      </li>
    </ul>
    <slot />
  </div>
</template>

<script setup>
import { useSlots, ref, provide, shallowRef } from "vue";
const slots = useSlots();
const props = defineProps(["title", "icon"]);

const tabTitles = ref(slots.default().map((tab) => tab.props.title));
const tabIcons = shallowRef(slots.default().map((tab) => tab.props.icon));
const headerItems = new Array(tabTitles.value.length)
  .fill(null)
  .map((_, index) => {
    return {
      title: tabTitles.value[index],
      icon: tabIcons.value[index],
    };
  });
const selectedTitle = ref(tabTitles.value[0]);

provide("selectedTitle", selectedTitle);
</script>

<style scoped>
.active-tab {
  @apply flex items-center justify-center py-3 px-4 text-white bg-red-500 rounded-lg;
}
</style>
