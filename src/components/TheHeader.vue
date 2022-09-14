<template>
  <header class="fixed w-full top-0 left-0 z-50">
    <nav class="bg-white dark:bg-gray-900">
      <div
        class="container flex sm:flex justify-between items-center py-3 pl-4"
      >
        <router-link class="flex items-center" to="/">
          <img
            src="image/logo.svg"
            class="mr-3 h-8 md:h-12"
            alt="Flowbite Logo"
          />
        </router-link>
        <div
          class="w-full mx-3 pl-3 flex sm:mx-5 h-12 bg-slate-100 rounded-lg justify-between items-center space-x-3"
        >
          <IconSearch />
          <input
            class="w-full h-full bg-slate-100 cursor-text ring-0 border-none"
          />
          <button
            class="h-full w-[142px] bg-red-500 hover:bg-red-600 rounded-lg text-white"
          >
            Поиск
          </button>
        </div>
        <div class="flex items-center pr-4">
          <IconManager />
          <a
            href="#"
            class="sm:mx-2 text-sm font-medium text-red-600 dark:text-red-500 hover:underline hidden sm:block"
          >
            Иванов И.И.</a
          >
          <IconLogOut />
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import IconManager from "../components/icons/IconManager.vue";
import IconLogOut from "../components/icons/IconLogOut.vue";

import IconSearch from "../components/icons/IconSearch.vue";
</script>
<style scoped></style>
