<template>
  <header class="fixed w-full top-0 left-0 z-50">
    <nav class="bg-slate-300 border-slate-200 dark:bg-gray-900">
      <div
        class="container flex flex-wrap justify-between items-center mx-auto px-4 md:px-6 py-2.5"
      >
        <router-link class="flex items-center" to="/">
          <img
            src="image/logo.svg"
            class="mr-3 h-6 md:h-9"
            alt="Flowbite Logo"
          />
        </router-link>
        <div class="flex items-center">
          <a
            href="#"
            class="text-sm font-medium text-red-600 dark:text-red-500 hover:underline"
            >Регистрация</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup></script>
<style scoped></style>
