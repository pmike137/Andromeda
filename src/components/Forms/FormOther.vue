<template>
  <NumOfOrder />
  <div class="flex justify-center items-center">
    <form class="w-full px-1 sm:w-3/4 space-y-5">
      <div class="flex w-full">
        <textarea
          rows="3"
          class="p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-500 focus:ring-red-500 focus:border-red-500"
          placeholder="Опишите характеристики покупки, товара либо сделки для прохождения модерации..."
        ></textarea>
      </div>
      <div class="flex justify-between w-full space-x-1">
        <label
          for="amount"
          class="flex justify-end items-center sm:text-xs text-center"
          >Кол-во</label
        >
        <input
          type="text"
          id="amount"
          class="w-full h-9 sm:text-xs rounded-lg border-none focus:border focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div class="flex justify-between w-full space-x-1">
        <label
          for="price-unit"
          class="flex justify-end items-center sm:text-xs text-center"
          >Цена за ед.</label
        >
        <input
          type="text"
          id="price"
          class="w-full h-9 sm:text-xs rounded-lg border-none focus:border focus:border-red-500 focus:ring-red-500"
        />
      </div>
      <div class="flex justify-between w-full space-x-1">
        <label
          for="price-logistics"
          class="flex justify-end items-center sm:text-xs text-center"
          >Сто-ть</label
        >
        <input
          type="text"
          id="price-logistics"
          class="w-full h-9 sm:text-xs rounded-lg border-none focus:ring-red-500"
          disabled
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
import NumOfOrder from "../NumOfOrder.vue";
import RadioCash from "../RadioCash.vue";
</script>
