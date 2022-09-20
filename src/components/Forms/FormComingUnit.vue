<template>
  <div
    class="flex flex-col w-full bg-white px-[70px] py-7 space-y-5 rounded-2xl"
  >
    <div class="flex flex-col sm:flex-row justify-between space-x-7 items-end">
      <div class="w-full">
        <label for="drivers" class="font-bold text-lg block"> Товар </label>
        <select
          id="drivers"
          type="text"
          class="w-[50%] h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        ></select>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between space-x-7 items-end">
      <div class="w-full">
        <label for="drivers" class="font-bold text-lg block">
          Количество товара
        </label>
        <input
          v-model="ValueOfProduct"
          inputmode="numeric"
          oninput="this.value = this.value.replace(/[^0-9]/g,'')"
          id="drivers"
          type="text"
          class="w-[50%] h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        />
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between space-x-7 items-end">
      <div class="w-full">
        <label for="drivers" class="font-bold text-lg block"> Цена </label>
        <input
          v-model="PriceOfProduct"
          inputmode="numeric"
          oninput="this.value = this.value.replace(/[^0-9]/g,'')"
          id="drivers"
          type="text"
          class="w-[50%] h-10 border border-[#E7E7E7] rounded-xl text-opacity-50 text-sm border-l-2 focus:ring-mainHoverColor focus:border-mainHoverColor"
        />
      </div>
    </div>
    <RadioCash />
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
