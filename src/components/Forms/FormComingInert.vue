<template>
  <div
    class="flex flex-col w-full bg-white px-[70px] py-7 space-y-5 rounded-2xl"
  >
    <div class="flex flex-col sm:flex-row justify-between space-x-7 items-end">
      <div class="w-full">
        <label for="name-of-position" class="font-bold text-lg"> Товар </label>
        <select
          id="name-of-position"
          placeholder="Выберите товар"
          class="w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        >
          <option selected>Выберите товар...</option>
          <option>Щебень Белогорский</option>
          <option>Щебень Ароматное</option>
          <option>Щебень Скалистое</option>
          <option>Песок Донузлав</option>
          <option>Песок Орешники</option>
          <option>Грунт</option>
        </select>
      </div>
      <div class="w-full">
        <select
          id="size-of-position"
          class="w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        >
          <option selected>Тип</option>
          <option>5-20</option>
          <option>20-40</option>
          <option>40-70</option>
        </select>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between space-x-7 items-end">
      <div class="w-full">
        <label for="name-of-position" class="font-bold text-lg">
          Количество товара
        </label>
        <input
          v-model="ValueOfProduct"
          inputmode="numeric"
          oninput="this.value = this.value.replace(/[^0-9]/g,'')"
          id="name-of-position"
          placeholder="Например: 200"
          class="pl-[15px] w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        />
      </div>
      <div class="w-full">
        <input
          id="name-of-position"
          inputmode="numeric"
          oninput="this.value = this.value.replace(/[^0-9]/g,'')"
          placeholder="Например: 200"
          class="pl-[15px] w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        />
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between space-x-7 items-end">
      <div class="w-full">
        <label for="drivers" class="font-bold text-lg block">
          Перевозчики
        </label>
        <select
          id="drivers"
          type="text"
          class="w-[calc(50%-14px)] h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        ></select>
        <div></div>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between space-x-7 items-end">
      <div class="w-full">
        <label for="name-of-position" class="font-bold text-lg"> Цена </label>
        <input
          v-model="PriceOfProduct"
          inputmode="numeric"
          oninput="this.value = this.value.replace(/[^0-9]/g,'')"
          id="name-of-position"
          placeholder="Фактическая"
          class="pl-[15px] w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 ring-mainHoverColor focus:ring-mainHoverColor focus:border-mainHoverColor"
        />
      </div>
      <div class="w-full">
        <input
          id="name-of-position"
          placeholder="Номинальная: 1000 руб."
          disabled
          class="pl-[15px] w-full h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        />
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between space-x-7 items-end">
      <RadioCash />
    </div>
    <div class="flex justify-center items-center">
      <span class="font-bold text-3xl text-mainColor">
        {{ ValueOfProduct * PriceOfProduct }} руб.</span
      >
    </div>
    <div
      class="flex flex-col sm:flex-row justify-center space-x-7 items-center"
    >
      <button
        class="w-[40%] h-[50px] rounded-xl text-center text-white bg-mainColor hover:bg-mainHoverColor"
      >
        Подтвердить
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { RadioCash } from "../";

const ValueOfProduct = ref("");
const PriceOfProduct = ref("");
</script>
<style scoped></style>
