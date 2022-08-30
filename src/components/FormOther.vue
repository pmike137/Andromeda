<template>
  <NumOfOrder />
  <div class="flex justify-center items-center">
    <form class="w-3/4">
      <div class="flex justify-end z-0 mb-6 w-full group">
        <textarea
          rows="3"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-500 focus:ring-red-500 focus:border-red-500"
          placeholder="Опишите характеристики покупки, товара либо сделки для прохождения модерации..."
        ></textarea>
      </div>
      <div class="flex justify-end z-0 mb-6 w-full group">
        <label
          for="amount"
          class="flex justify-center items-center w-24 sm:text-xs text-center"
          >Кол-во</label
        >
        <input
          type="text"
          id="amount"
          class="block p-2 h-9 w-1/4 sm:text-xs rounded-lg border-none focus:border focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div class="flex justify-between z-0 mb-6 w-full group">
        <label
          for="price-unit"
          class="flex justify-center items-center w-24 sm:text-xs text-center"
          >Цена за ед.</label
        >
        <input
          type="text"
          id="price"
          class="block p-2 w-1/4 h-9 sm:text-xs rounded-lg border-none focus:border focus:border-red-500 focus:ring-red-500"
        />
        <label
          for="price-logistics"
          class="flex justify-center items-center w-24 sm:text-xs text-center"
          >Цена за ед.</label
        >
        <input
          type="text"
          id="price-logistics"
          class="block p-2 w-1/4 h-9 sm:text-xs rounded-lg border-none focus:ring-red-500"
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
import NumOfOrder from "../components/NumOfOrder.vue";
</script>
