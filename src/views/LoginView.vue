<template>
  <div class="container flex justify-center">
    <form
      class="mt-24 w-[430px] h-[500px] px-7 py-7 bg-white space-y-6 rounded-2xl"
      action="#"
    >
      <div class="h-[69px] w-[126px] mx-auto">
        <IconLogo />
      </div>
      <div class="flex justify-center items-center">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Вход в
          <span class="text-xl font-medium text-mainColor dark:text-white">
            личный кабинет
          </span>
        </h5>
      </div>
      <div class="relative">
        <label
          for="email"
          class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Логин</label
        >
        <input
          type="email"
          name="email"
          id="email"
          class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mainColor focus:border-mainColor w-full p-2.5 placeholder-black placeholder-opacity-20"
          placeholder="@mail.ru"
        />
      </div>
      <div class="">
        <label
          for="password"
          class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Пароль</label
        >
        <div class="relative">
          <img
            src="/image/icon-eye.svg"
            class="absolute right-5 top-1/2 -translate-y-1/2"
            alt="Flowbite Logo"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-mainColor focus:border-mainColor w-full p-2.5 placeholder-black placeholder-opacity-20"
          />
        </div>
      </div>
      <div class="flex items-start">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="text-mainColor w-4 h-4 rounded border border-gray-300 focus:ring-3 focus:ring-mainColor dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-mainColor dark:ring-offset-gray-800"
            />
          </div>
          <label
            for="remember"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Запомнить пароль</label
          >
        </div>
        <a
          href="#"
          class="ml-auto text-sm text-mainColor hover:underline dark:text-blue-500"
          >Забыли пароль?</a
        >
      </div>

      <div class="h-12 flex justify-center items-center">
        <router-link
          to="/"
          type="submit"
          class="w-full h-full flex items-center justify-center text-white bg-mainColor hover:bg-mainHoverColor focus:ring-4 focus:outline-none font-medium rounded-lg text-sm .5 text-center"
        >
          Войти
        </router-link>
      </div>
    </form>
  </div>
</template>
<script setup>
import { IconLogo } from "../components";
</script>
