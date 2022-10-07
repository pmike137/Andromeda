<template>
  <header class="fixed w-full top-0 left-0 z-50 border-b-2 border-bcg">
    <nav class="bg-white dark:bg-gray-900 py-4 px-4">
      <div
        class="container h-12 flex lg:flex justify-between items-center py-4 pl-4 space-x-4"
      >
        <router-link class="hidden lg:block lg:w-[91px]" to="/">
          <IconLogo />
        </router-link>
        <div class="hidden lg:block w-full">
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
        <router-link class="w-[91px] lg:hidden lg:w-[91px]" to="/">
          <IconLogo />
        </router-link>
        <div class="hidden lg:flex flex-col w-40">
          <div>
            <span class="text-sm font-bold text left text-black"
              >Калабин Г.А.</span
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
        <div class="hidden lg:block">
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
