<template>
  <header class="fixed w-full top-0 left-0 z-50">
    <nav class="bg-white dark:bg-gray-900 py-4">
      <div
        class="container h-12 flex sm:flex justify-between items-center py-4 pl-4 space-x-4"
      >
        <router-link class="hidden sm:block sm:w-[91px]" to="/">
          <IconLogo />
        </router-link>
        <div class="hidden sm:block w-full">
          <input
            type="text"
            class="bg-[#F8F8F8] border-opacity-20 border-black w-full ring-mainColor rounded-xl placeholder-black placeholder-opacity-20 hover:border-mainColor hover:ring-mainColor"
            placeholder="Искать..."
          />
        </div>
        <div>
          <button
            class="flex justify-center items-center bg-[#F05252] hover:bg-mainHoverColor rounded-xl h-12 w-12"
          >
            <IconSearch />
          </button>
        </div>
        <router-link class="w-[91px] sm:hidden sm:w-[91px]" to="/">
          <IconLogo />
        </router-link>
        <div class="hidden sm:flex flex-col w-40">
          <div>
            <span class="text-sm font-bold text left text-black"
              >Иванов И.И.</span
            >
          </div>
          <div>
            <span class="text-sm left text-mainColor underline"
              >Мой профиль</span
            >
          </div>
        </div>
        <div>
          <IconManager />
        </div>
        <div class="hidden sm:block">
          <router-link to="/login" class=""> <IconLogOut /> </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { IconManager, IconLogOut, IconSearch, IconLogo } from "../components";
</script>
<style scoped></style>
