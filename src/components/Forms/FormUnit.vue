<template>
  <NumOfOrder />
  <div class="flex justify-center items-center">
    <form class="w-full px-1 sm:w-3/4 space-y-5">
      <div class="flex justify-end z-0 w-full group">
        <select
          id="name-of-position"
          class="w-full border border-gray-300 text-gray-900 text-sm rounded-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Наименование...</option>
          <option>Ракуша</option>
          <option>Газобетон</option>
          <option>Смесь Knauf</option>
        </select>
      </div>
      <div class="flex w-full space-x-3">
        <label
          for="amount"
          class="w-full flex justify-end items-center mb-1 sm:text-xs"
          >Кол-во</label
        >
        <input
          type="text"
          inputmode="numeric"
          id="amount"
          class="w-full p-2 h-9 sm:text-xs rounded-lg border-none focus:border focus:border-red-500"
        />
      </div>

      <div class="flex w-full space-x-3">
        <label
          for="amount"
          class="w-full flex justify-end items-center mb-1 sm:text-xs"
        >
          Цена за ед.</label
        >
        <input
          type="text"
          inputmode="numeric"
          id="amount"
          class="w-full p-2 h-9 sm:text-xs rounded-lg border-none focus:border focus:border-red-500"
        />
      </div>
      <RadioCash />
      <div class="flex justify-center z-0 mb-6 w-full group">
        <button
          type="button"
          class="p-2 rounded-lg bg-red-400 hover:bg-red-600"
        >
          Подтвердить
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import NumOfOrder from "..//NumOfOrder.vue";
import RadioCash from "../RadioCash.vue";
</script>
