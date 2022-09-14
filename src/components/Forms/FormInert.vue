<template>
  <NumOfOrder />
  <div class="flex justify-center items-center">
    <form class="w-full px-1 sm:w-3/4 space-y-5">
      <div class="flex justify-between space-x-3 w-full group">
        <select
          id="name-of-position"
          placeholder="Выберите товар"
          class="w-[70%] border border-white text-gray-900 text-sm rounded-l-lg dark:border-l-gray-700 border-l-2 focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          class="w-[25%] border border-white text-gray-900 text-sm rounded-r-lg dark:border-l-gray-700 border-l-2 focus:ring-red-500 focus:border-red-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Тип</option>
          <option>5-20</option>
          <option>20-40</option>
          <option>40-70</option>
        </select>
      </div>
      <div class="flex justify-between space-x-3 w-full group">
        <div
          class="w-full flex flex-col justify-center items-center sm:flex-row space-y-5 sm:space-y-0 sm:space-x-3"
        >
          <div class="flex justify-between w-full h-full sm:space-x-3">
            <label
              for="amount"
              class="w-full flex justify-center items-center sm:text-xs text-center"
              >Кол-во (тонн)</label
            >
            <input
              type="text"
              inputmode="numeric"
              id="amount"
              class="w-full sm:text-xs rounded-lg border-none focus:border focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div class="flex justify-between w-full h-full sm:space-x-3">
            <select
              name=""
              id=""
              class="rounded-lg border-none text-end focus:border-red-500 focus:ring-red-500"
            >
              <option>+</option>
              <option>-</option>
            </select>
            <input
              type="text"
              inputmode="numeric"
              id="amount-difference"
              class="sm:text-xs rounded-lg border-none focus:ring-red-500"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-end z-0 w-full group">
        <Conveyor />
      </div>
      <div
        class="flex flex-col sm:flex-row justify-between w-full group space-y-5 sm:space-y-0 sm:space-x-3"
      >
        <div class="flex w-full justify-between items-center sm:space-x-3">
          <label
            for="price-unit"
            class="flex justify-center items-center w-full sm:text-xs text-left"
            >Цена за ед. (номинал)</label
          >
          <input
            type="text"
            inputmode="numeric"
            id="price"
            class="w-full h-10 sm:text-xs rounded-lg border-none focus:border focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <div class="flex w-full justify-between items-center sm:space-x-3">
          <label
            for="price-logistics"
            class="flex justify-center items-center w-full sm:text-xs text-left"
            >Цена за ед. (факт)</label
          >
          <input
            type="text"
            inputmode="numeric"
            id="price-logistics"
            class="w-full h-10 sm:text-xs rounded-lg border-none focus:ring-red-500 focus:border-red-500"
          />
        </div>
      </div>
      <RadioCash />
      <div class="flex justify-center items-center text-center w-full group">
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
import Conveyor from "../Conveyor.vue";
import RadioCash from "../RadioCash.vue";
</script>

<style scoped></style>
