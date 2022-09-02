<template>
  <div class="flex justify-center items-center">
    <form class="w-1/2 bg-slate-300 rounded-lg p-8">
      <div class="flex justify-between z-0 mb-6 w-full group">
        <select
          id="name-of-position"
          class="w-[70%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Выберите товар...</option>
          <option>Щебень Белогорский</option>
          <option>Щебень Ароматное</option>
          <option>Щебень Скалистое</option>
          <option>Песок Донузлав</option>
          <option>Песок Орешники</option>
          <option>Грунт</option>
        </select>
        <select
          id="size-of-position"
          class="w-[25%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Тип</option>
          <option>5-20</option>
          <option>20-40</option>
          <option>40-70</option>
        </select>
      </div>
      <div class="h-1/5 flex justify-center items-center">
        <input
          v-model="valueOfWeight"
          type="text"
          placeholder=""
          oninput="this.value = this.value.replace(/[^0-9]/g,'')"
          class="border-1 bg-slate-100 text-black rounded-lg mr-6 focus:ring-red-500 focus:border-red-500"
        />

        <svg
          width="10em"
          height="10em"
          viewBox="0 0 512 512"
          class="opacity-50"
        >
          <path
            fill="currentColor"
            d="M320 96H192l-47.4-71.12C137.5 14.24 145.1 0 157.9 0h196.2c12.8 0 20.4 14.24 13.3 24.88L320 96zm-128 32h128c3.8 2.5 8.1 5.3 12.1 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53.02 0-96-43-96-96c0-165.1 122.3-243.3 179-279.6c4.9-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-21-20.1c-10.2 0-19.2 9-19.2 20.1v6c-5.6 1.2-11.8 2.9-15.9 5.1c-14.9 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20.1 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2.6c14 4.3 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.7 4.1c.4.8 1 2.6.3 6.6c-.6 3.5-2.5 6.5-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.8c-2.2-.8-4.4-1.5-6.4-2.2c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 24.4c1.2 1.3 2.7 1.8 4.4 2.4c7 2.7 20.3 6.9 29.8 9.1v6.4c0 11.1 9 20.1 19.2 20.1c12 0 21-9 21-20.1v-5.5c5.3-1 10.5-3.4 15.3-4.6c15.8-6.7 28.4-19.7 31.7-38.7c1.8-10.4 1-20.4-3-29.5c-3.9-9-10.2-15.6-16.9-20.4c-12.1-8.9-28.3-13.7-40.4-17.4l-1.7-.2c-13.3-4.3-22.9-7.3-29-11.5c-2.6-1.8-3.4-3-3.6-3.5c-.2-.4-.8-1.6-.2-5c.4-2 1.9-5.3 8.2-8.1c5.6-2.9 16.4-4.5 28.6-3.5c4.4 1.6 17.9 4.2 21.8 5.2c10.6 2.9 21.6-3.5 24.4-14.2c2.9-10.6-3.5-21.6-14.2-24.4c-4.4-1.2-14.4-3.2-21-4.4V224z"
          ></path>
        </svg>

        <input
          type="text"
          class="border-0 bg-slate-200 text-gray-700 rounded-lg ml-6"
          :placeholder="`${valueOfWeight / 25} тонн`"
          disabled
        />
      </div>
      <div class="flex items-center justify-center mt-8">
        <button
          type="button"
          class="h-9 w-[30%] rounded-lg bg-red-400 hover:bg-red-600"
        >
          Подтвердить
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
const valueOfWeight = ref("");
</script>

<style scoped></style>
