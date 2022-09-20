<template>
  <div class="tabs">
    <ul
      class="flex justify-around text-sm font-medium text-center text-gray-500 dark:text-gray-400"
    >
      <li
        @mouseover="onHover('coming')"
        @mouseleave="onHover(null)"
        v-for="item in headerItems"
        :key="item.title"
        :class="{ 'active-tab': item.title == selectedTitle }"
        @click="selectedTitle = item.title"
        class="w-full max-w-[75px] sm:max-w-full bg-white rounded-2xl flex items-center justify-center py-3 px-2 sm:px-4 hover:text-mainColor dark:hover:bg-gray-800 dark:hover:text-white mr-1 last:mr-0 mb-1 cursor-pointer select-none"
      >
        <component
          v-if="item.icon"
          :is="item.icon"
          class=""
          :isActive="activeIcon === 'coming' ? true : false"
        />
        <span class="hidden sm:block sm:ml-2">{{ item.title }} </span>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script setup>
import { useSlots, ref, provide, shallowRef } from "vue";
const slots = useSlots();
const props = defineProps(["title", "icon"]);

const activeIcon = ref(null);
const onHover = (iconActive) => {
  activeIcon.value = iconActive;
};

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
  @apply flex items-center justify-center py-3 px-4 text-mainColor;
}
</style>
