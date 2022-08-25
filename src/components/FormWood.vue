<template>
  <div class="flex justify-center items-center">
    <form class="w-3/4">
      <div class="flex justify-end z-0 mb-6 w-full group">
        <select
          id="name-of-position"
          class="w-[70%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Поставщик</option>
          <option>Гарик Омск</option>
          <option>Буларусь</option>
        </select>
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <InputTable />
      </div>
      <div class="flex justify-end z-0 mb-6 w-full group">
        <button
          id="select-conveyor"
          data-dropdown-toggle="dropdownSearch"
          class="bg-red-200 rounded-lg text-black w-1/2 h-9 hover:bg-red-500"
          type="button"
        >
          Выбор перевозчиков
        </button>
        <div id="dropdownSearch" class="hidden z-10 bg-white rounded shadow">
          <div p-3>
            <div class="relative">
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                Привет
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end z-0 mb-6 w-full group">
        <label
          for="price-unit"
          class="flex justify-center items-center w-24 sm:text-xs text-center"
          >Цена за ед.</label
        >
        <input
          type="text"
          id="price"
          class="block p-2 w-1/4 h-9 sm:text-xs rounded-lg border-none focus:border focus:border-red-500"
        />
      </div>
      <div class="flex justify-end z-0 mb-6 w-full group">
        <input
          name="type-cash"
          id="type-cash-1"
          type="radio"
          class="w-4 h-4 mr-2 text-red-500 bg-gray-100 border-gray-300 focus:ring-red-500 focuc:ring-2"
        />
        <label for="type-cash-1" class="mr-3 text-sm font-medium text-gray-900"
          >Нал</label
        >
        <input
          name="type-cash"
          checked
          id="type-cash-2"
          type="radio"
          class="w-4 h-4 mr-2 text-red-500 bg-gray-100 border-gray-300 focus:ring-red-500 focuc:ring-2"
        />
        <label for="type-cash-2" class="mr-3 text-sm font-medium text-gray-900"
          >Безнал</label
        >
      </div>
      <div class="flex justify-center z-0 mb-6 w-full group">
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
import InputTable from "./InputTable.vue";
</script>
